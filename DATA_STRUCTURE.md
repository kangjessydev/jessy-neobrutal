# 🧠 KANGJESSY DEV - THE ULTIMATE JSON CONTENT GUIDE

Dokumentasi lengkap untuk mengelola konten portofolio tanpa menyentuh kode program.

---

## 🚀 1. PROJECTS (`src/data/projects.json`)

Gunakan template ini untuk menambahkan projek baru.

### 📝 Full Template
```json
{
  "slug": "nama-projek-kebab-case",
  "title": "JUDUL PROJEK",
  "category": "KATEGORI",
  "image": "https://images.unsplash.com/...",
  "tagColor": "yellow",
  "description": "Deskripsi singkat di halaman list.",
  "technical": {
    "frontend": "Penjelasan tech frontend...",
    "realtime": "Penjelasan sistem real-time...",
    "security": "Penjelasan sistem keamanan..."
  },
  "problems": [
    {
      "point": "Judul Masalah",
      "detail": "Penjelasan masalah...",
      "image": "url_gambar_sebelum"
    }
  ],
  "solutions": [
    {
      "point": "Judul Solusi",
      "detail": "Penjelasan solusi...",
      "image": "url_gambar_sesudah"
    }
  ],
  "blocks": [
    { "type": "text", "heading": "Chapter 1", "body": "Isi teks...", "level": 2 }
  ]
}
```

---

## ✍️ 2. BLOG (`src/data/blog.json`)

Digunakan untuk konten artikel.

### 📝 Full Template
```json
{
  "slug": "judul-artikel",
  "title": "Judul Artikel",
  "date": "2024-05-20",
  "readTime": "5 min read",
  "category": "Tech Stack",
  "excerpt": "Ringkasan singkat yang muncul di kartu blog.",
  "featuredImage": "https://images.unsplash.com/...",
  "blocks": [
    { "type": "text", "heading": "Intro", "body": "Hello world...", "level": 2 }
  ]
}
```

---

## 🎨 3. COLOR DESIGN SYSTEM

Anda tidak perlu mengetik kode HEX. Gunakan nama warna di bawah ini untuk field `tagColor`:

| Nama Warna | Visual / Kegunaan |
| :--- | :--- |
| `yellow` | Warna utama (Primary/Gold) |
| `lime` | Warna sekunder (Highlight) |
| `pink` | Warna aksen (Hot Pink) |
| `blue` | Warna teknis (Cool Blue) |
| `purple` | Warna kreatif (Royal Purple) |
| `orange` | Warna peringatan (Deep Orange) |
| `cyan` | Warna futuristik (Cyber Cyan) |

> **Pro Tip:** Jika Anda tetap ingin menggunakan warna kustom, sistem tetap mendukung kode HEX (e.g., `#FF5733`).

---

## 🧱 4. CONTENT BLOCKS REFERENCE (Deep Dive)

Bagian `blocks` adalah modular. Anda bisa menyusun urutan apapun.

### A. Text Block
```json
{
  "type": "text",
  "heading": "Judul Section",
  "body": "Paragraf panjang di sini...",
  "level": 2 // 2 = Besar, 3 = Menengah, 4 = Kecil
}
```

### B. Code Block (Syntax Highlighting)
```json
{
  "type": "code",
  "code": "const x = 10;\nconsole.log(x);", // Gunakan \n untuk baris baru
  "language": "typescript" 
}
```

### C. Table Block (Raw Industrial Style)
```json
{
  "type": "table",
  "headers": ["Fitur", "Status", "Keterangan"],
  "rows": [
    ["API Sync", "DONE", "Lancar jaya"],
    ["Auth", "STABLE", "Encrypted"]
  ]
}
```

### D. List Block
```json
{
  "type": "list",
  "items": ["Poin satu", "Poin dua", "Poin tiga"],
  "ordered": false // false = bullet, true = angka
}
```

### E. Quote Block (Highlight)
```json
{
  "type": "quote",
  "text": "Kalimat sakti yang ingin di-highlight besar-besar."
}
```

### F. Image Block (With Caption)
```json
{
  "type": "image",
  "src": "https://url-gambar.com/foto.jpg",
  "caption": "Keterangan gambar di bawah foto."
}
```

---

## 💡 4. GOLDEN RULES (Aturan Wajib)

1. **New Lines in JSON**: Untuk baris baru di dalam teks, gunakan simbol `\n`.
2. **Special Characters**: Jangan gunakan tanda kutip dua (`"`) di dalam teks tanpa escape `\"`. 
   * *Salah:* `"title": "Dia berkata "Halo""`
   * *Benar:* `"title": "Dia berkata \"Halo\""`
3. **Color Names**: Gunakan nama warna (e.g., `yellow`, `lime`) untuk `tagColor`. Sistem tetap mendukung HEX jika Anda butuh warna kustom.
4. **Order**: Urutan di array `blocks` menentukan urutan tampilan dari atas ke bawah.

---

*Last Updated: Mei 2024 - KANGJESSY DEV*
