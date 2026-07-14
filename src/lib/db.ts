import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

// SQLite untuk tahap awal — cukup untuk ribuan order/bulan dan nol biaya.
// Saat pindah ke Postgres/Turso, cukup ganti implementasi file ini.

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "nuralive.db");

let _db: Database.Database | null = null;

export function db(): Database.Database {
  if (_db) return _db;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  _db = new Database(DB_PATH);
  _db.pragma("journal_mode = WAL");
  migrate(_db);
  return _db;
}

function migrate(d: Database.Database) {
  d.exec(`
    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      address TEXT NOT NULL,
      zone TEXT NOT NULL,
      note TEXT,
      package_id TEXT NOT NULL,
      bump INTEGER NOT NULL DEFAULT 0,
      payment TEXT NOT NULL,
      subtotal INTEGER NOT NULL,
      shipping INTEGER NOT NULL,
      total INTEGER NOT NULL,
      status TEXT NOT NULL DEFAULT 'menunggu-pembayaran'
    );

    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      phone TEXT NOT NULL UNIQUE,
      source TEXT
    );
  `);

  // Stok awal — angka NYATA yang tampil di urgency bar.
  const has = d
    .prepare("SELECT value FROM settings WHERE key = 'stock'")
    .get() as { value: string } | undefined;
  if (!has) {
    d.prepare("INSERT INTO settings (key, value) VALUES ('stock', '120')").run();
  }
}

export type Order = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  address: string;
  zone: string;
  note: string | null;
  package_id: string;
  bump: number;
  payment: string;
  subtotal: number;
  shipping: number;
  total: number;
  status: string;
};

export const ORDER_STATUSES = [
  "menunggu-pembayaran",
  "diproses",
  "dikirim",
  "selesai",
  "dibatalkan",
] as const;

export function getStock(): number {
  const row = db()
    .prepare("SELECT value FROM settings WHERE key = 'stock'")
    .get() as { value: string } | undefined;
  return row ? parseInt(row.value, 10) : 0;
}

export function setStock(n: number) {
  db()
    .prepare("UPDATE settings SET value = ? WHERE key = 'stock'")
    .run(String(Math.max(0, n)));
}

export function ordersThisWeek(): number {
  const row = db()
    .prepare(
      "SELECT COUNT(*) AS c FROM orders WHERE created_at >= datetime('now', '-7 days') AND status != 'dibatalkan'"
    )
    .get() as { c: number };
  return row.c;
}

export function generateOrderId(): string {
  const d = new Date();
  const ymd = `${d.getFullYear().toString().slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `NL-${ymd}-${rand}`;
}

export function insertOrder(o: Omit<Order, "created_at" | "status">): Order {
  db()
    .prepare(
      `INSERT INTO orders (id, name, phone, address, zone, note, package_id, bump, payment, subtotal, shipping, total)
       VALUES (@id, @name, @phone, @address, @zone, @note, @package_id, @bump, @payment, @subtotal, @shipping, @total)`
    )
    .run(o);
  return getOrder(o.id)!;
}

export function getOrder(id: string): Order | null {
  return (
    (db().prepare("SELECT * FROM orders WHERE id = ?").get(id) as Order) ?? null
  );
}

export function findOrder(id: string, phoneLast4: string): Order | null {
  const o = getOrder(id.trim().toUpperCase());
  if (!o) return null;
  const digits = o.phone.replace(/\D/g, "");
  if (!digits.endsWith(phoneLast4.replace(/\D/g, ""))) return null;
  return o;
}

export function listOrders(): Order[] {
  return db()
    .prepare("SELECT * FROM orders ORDER BY created_at DESC LIMIT 500")
    .all() as Order[];
}

export function insertLead(phone: string, source: string) {
  db()
    .prepare("INSERT OR IGNORE INTO leads (phone, source) VALUES (?, ?)")
    .run(phone, source);
}

export function updateOrderStatus(id: string, status: string): Order | null {
  if (!ORDER_STATUSES.includes(status as (typeof ORDER_STATUSES)[number])) {
    return null;
  }
  db().prepare("UPDATE orders SET status = ? WHERE id = ?").run(status, id);
  return getOrder(id);
}
