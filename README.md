# Praktikum #4: Agile E-Commerce API (Orders & Notifications)

[![ci](https://github.com/MLutfan/P4_AGILE_230104040129/actions/workflows/ci.yml/badge.svg)](https://github.com/MLutfan/P4_AGILE_230104040129/actions/workflows/ci.yml)

Repositori ini berisi implementasi **Mini E-Commerce API** (layanan Pesanan & Notifikasi) sebagai bagian dari Praktikum Web Service Engineering. Proyek ini dibangun menggunakan pendekatan **Agile** dengan alur **Design-First (OpenAPI)**.

---

## stack Teknologi

* **Runtime:** Node.js 18+
* **Framework:** Express.js
* **Bahasa:** TypeScript
* **API Design:** OpenAPI 3.0 (Kontrak)
* **Testing:** Jest & Supertest
* **Linting (API):** Spectral
* **Mocking:** Prism
* **CI/CD:** GitHub Actions
* **Utilities:** Pino (Logger), Zod (Validator), express-rate-limit (Keamanan)

---

## 🚀 Panduan Menjalankan Proyek

Berikut adalah langkah-langkah untuk menjalankan dan menguji proyek ini secara lokal.

### 1. Instalasi Dependensi

Pastikan Anda menginstal dependensi sesuai dengan file `package-lock.json` untuk konsistensi:

```bash
npm ci