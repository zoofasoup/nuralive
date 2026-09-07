// Logo sertifikasi resmi - file asli dari pemilik (folder "logo legal"),
// bukan rekonstruksi SVG. Simpan di public/certs/, jangan diganti dengan
// versi gambar ulang tanpa file baru dari pemilik.

export function BpomLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <img
      src="/certs/bpom.png"
      alt="Logo Badan POM"
      width={600}
      height={551}
      className={className}
    />
  );
}

export function HalalIndonesiaLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <img
      src="/certs/halal-indonesia.png"
      alt="Logo Halal Indonesia"
      width={391}
      height={700}
      className={className}
    />
  );
}

export function BanggaBuatanIndonesiaLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <img
      src="/certs/bangga-buatan-indonesia.png"
      alt="Logo Bangga Buatan Indonesia"
      width={700}
      height={700}
      className={className}
    />
  );
}
