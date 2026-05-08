# PROJECT CONTEXT — Neobrutalist Developer Portfolio

## Tujuan
Web portfolio untuk **KANGJESSY DEV**. Menampilkan karya, skill, dan identitas sebagai web developer dengan gaya desain **Neobrutalism** yang bold dan unapologetic.

## Tech Stack
| Layer | Tool | Alasan |
|---|---|---|
| Framework | **Astro** | Cepat, ringan, SSG by default, SEO-friendly |
| Styling | **Tailwind CSS** | Utility-first, integrasi baik dengan Astro |
| Dokumentasi Tailwind | **Context7 MCP** | Dapat dokumentasi Tailwind versi terbaru secara real-time |
| UI Reference | **Stitch MCP** | Source of truth untuk desain & komponen |

> ⚠️ Proyek awalnya dibangun native (HTML/CSS), lalu **dimigrasikan ke Astro** atas rekomendasi AI.

## Referensi Desain
- **DESIGN_SYSTEM.md** → Token warna, tipografi, spacing, komponen (border, shadow, dll).
- **Stitch MCP Server** → UI screens aktual dari project: *Neobrutalist Web Developer Portfolio*.

### Aturan Desain Penting (jangan dilanggar tanpa persetujuan)
- ❌ Tidak ada gradient
- ❌ Tidak ada blur / glassmorphism
- ❌ Tidak ada rounded corners (kecuali elemen dekoratif tertentu)
- ✅ Shadow: `8px 8px 0px #000000` (cards), `4px 4px 0px #000000` (buttons/tags)
- ✅ Border: `4px` solid black (standar), `8px` solid black (divider besar)
- ✅ Primary: `#FFD700` (kuning), Secondary: `#A5F624` (hijau neon)

## Halaman
| Halaman | File | Status |
|---|---|---|
| Home | `src/pages/index.astro` | ✅ Ada di first commit |
| About Me | `src/pages/about.astro` | ✅ Ada di first commit |
| Projects | `src/pages/projects.astro` | 🔄 Perlu dibuat ulang |

## Struktur File (`src/`) — Skalabel untuk Backend

Struktur ini dirancang **frontend-first tapi backend-ready**. Prinsipnya: pisahkan data dari tampilan sejak awal.

```
src/
├── assets/           → Gambar, SVG, file statis lokal
├── components/       → Komponen reusable (Navbar.astro, Footer.astro, dll)
├── data/             → [SEKARANG] File JSON sebagai sumber data statis
│   └── projects.json     → Daftar project
├── services/         → [ABSTRAKSI] Logika ambil data — ganti isi fungsi ini saja saat backend siap
│   └── getProjects.ts    → Baca dari data/projects.json sekarang, nanti bisa fetch() ke API
├── lib/              → Utility/helper functions (format string, tanggal, dsb)
├── layouts/          → Layout wrapper halaman
│   └── BaseLayout.astro  → Wrapper utama (inject Navbar + Footer + global CSS)
├── pages/            → File-based routing Astro
│   ├── index.astro        → Home
│   ├── about.astro        → About Me
│   ├── projects.astro     → Daftar project
│   └── projects/
│       └── [slug].astro   → Detail project (dynamic route)
└── styles/
    └── global.css         → Token CSS, Tailwind config, animasi global
```

> 💡 **Pondasi Backend:** Ketika backend siap, **hanya file di `services/` yang perlu diubah** — semua halaman tetap sama. Astro juga punya built-in API routes di `pages/api/` yang bisa diaktifkan dengan mengganti mode ke `hybrid` atau `server`.

### Konvensi Data
- Data statis → `src/data/*.json`, dibaca lewat `src/services/*.ts`
- Halaman detail/template → Astro dynamic routing `pages/projects/[slug].astro`
- Gambar → `src/assets/` (dioptimasi Astro) atau URL eksternal dari Stitch MCP

## Form Kontak → WhatsApp

Tidak memerlukan backend atau layanan pihak ketiga. Cukup WhatsApp Click-to-Chat:

```
https://wa.me/628xxxxxxx?text=Halo%20Jessy%2C%20saya%20tertarik%20untuk%20diskusi
```

- User isi input → data dijadikan query string di URL WhatsApp
- Klik tombol → langsung buka WhatsApp dengan pesan pre-filled
- **100% gratis, tanpa server, tanpa storage**

## Aturan Kolaborasi
- **Jangan lakukan modifikasi/improvement tanpa persetujuan** — ikuti Stitch 100%.
- Sebelum edit, **selalu lihat dulu** screen di Stitch MCP untuk referensi visual.
- Setiap sesi baru, baca file ini dan `DESIGN_SYSTEM.md` terlebih dahulu.
