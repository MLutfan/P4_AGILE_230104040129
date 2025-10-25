# Praktikum #4: Agile E-Commerce API (Orders & Notifications)

[![ci](https://github.com/MLutfan/P4_AGILE_230104040129/actions/workflows/ci.yml/badge.svg)](https://github.com/MLutfan/P4_AGILE_230104040129/actions/workflows/ci.yml)

**Team 2**
* Muhammad Lutfan (Project Manager)
* Husni Majedi
* Aisyah Safitri :D
* Husna Norgina
* Mahdalina


Repositori ini adalah implementasi dari Praktikum #4 Web Service Engineering. Proyek ini membangun sebuah **Mini E-Commerce API** (layanan Pesanan & Notifikasi) menggunakan pendekatan **Agile** dan alur kerja **Design-First** berbasis kontrak **OpenAPI**.

---

## 🚀 Fitur Utama & Stack Teknologi

Proyek ini mencakup dua layanan mini dan menerapkan berbagai *best practice* modern:

* **API Endpoints:**
    * `POST /orders`: Membuat pesanan baru.
    * `GET /notifications`: Mengambil daftar notifikasi terbaru.
* **Arsitektur & Pola:**
    * **Design-First:** Kontrak API dibuat terlebih dahulu menggunakan **OpenAPI**.
    * **TDD (Test-Driven Development):** Alur `RED` -> `GREEN` (Tes ditulis sebelum implementasi).
    * **Continuous Integration (CI):** Pengecekan kualitas otomatis menggunakan **GitHub Actions**.
* **Hardening (Pengerasan Keamanan & Observabilitas):**
    * **Logging:** *Structured Logging* menggunakan **Pino**.
    * **Correlation ID:** Pelacakan *request* end-to-end (`x-correlation-id`).
    * **Validasi:** Validasi *payload* ketat menggunakan **Zod**.
    * **Keamanan:** *Rate Limiting* (`express-rate-limit`) dan *Bearer Token* *dummy*.
* **Tech Stack:**
    * **Runtime:** Node.js
    * **Framework:** Express.js
    * **Bahasa:** TypeScript
    * **Testing:** Jest & Supertest
    * **API Linting:** Spectral
    * **API Mocking:** Prism

---

## 🚦 Panduan Menjalankan Proyek

Berikut adalah langkah-langkah untuk menjalankan dan menguji proyek ini secara lokal.

### 1. Persiapan

Instal semua dependensi sesuai dengan file *lock* untuk memastikan konsistensi:

```bash
npm ci
```

### 2. Menjalankan Service (Membutuhkan 2 Terminal)
Anda perlu membuka dua terminal terpisah untuk menjalankan kedua microservice secara bersamaan.

Di Terminal A (Order Service):

```Bash

npm run dev:orders
🟢 Service berjalan di -> [http://127.0.0.1:5002](http://127.0.0.1:5002)
```
Di Terminal B (Notification Service):

```Bash

npm run dev:notif
🟢 Service berjalan di -> [http://127.0.0.1:5003](http://127.0.0.1:5003)
```
### 3. Menjalankan Pengecekan Kualitas
Anda dapat menjalankan semua tes dan linting dari terminal lain.

Menjalankan Tes (Jest):

```Bash

npm test
```
**✅ Ekspektasi**: 2 suites passed, 5 tests passed
Mengecek Kontrak OpenAPI (Spectral):

```Bash

npx spectral lint openapi/api.yaml
```
**✅ Ekspektasi**: Tidak ada error
Mengecek Tipe (TypeScript):

```Bash

npm run typecheck
```
**✅ Ekspektasi**: Tidak ada error

### 📁 Artefak Proyek (Agile)
Dokumentasi perencanaan dan definisi proyek ("Sprint 0") dapat ditemukan di folder docs:

`docs/ProductGoal.md`: Tujuan utama dari sprint praktikum ini.

`docs/DoD.md`: Definition of Done (kriteria penyelesaian).

`docs/Backlog.md`: Daftar user stories dan board sederhana.
