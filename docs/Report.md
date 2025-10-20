# Laporan Praktikum #4 – Web Service Development Methodologies (AGILE)
**Nama/NIM**: <Muhammad Fahrul Bahri, Muhammad Raihan Azmi, Febi Novia Putri, Najwa Dinda Aprilia>  
**Kelas**: <TI23B>  
**Repo/zip**: <https://github.com/Theseadev/P4-AGILE-230104040057>  
**Tanggal**: <2025-10-20>  

---

## 1. Tujuan
Mendemonstrasikan siklus **Agile (Mini-Sprint)** untuk layanan web:  
Design-First ➜ Mock-First (OpenAPI + Prism) ➜ Test-First (Jest + Supertest) ➜ Implementasi (GREEN) ➜ CI (lint+typecheck+test) ➜ Hardening (observability & security).

---

## 2. Ringkasan Arsitektur
**Services**: `order-service`, `notification-service`  
**Kontrak**: `openapi.api.yaml` (lint 0 error)  
**Test**: Jest + Supertest  
**CI**: GitHub Actions (`.github/workflows/ci.yml`)  
**Observability**: Pino (JSON), `x-correlation-id`  
**Security**: Auth Bearer (dummy), Helmet, Rate-Limit, Validasi (Zod)

---

## 3. Hasil Utama
- **Lihat OpenAPI**: LULUS (lihat `docs/spectral_pass.png`)
- **Unit tests**: ✅ passed, 5 tests (lihat `docs/npm_test_pass.png`)
- **CI**: ✅ Hijau (lihat `docs/ci_pass.png`)
- **Mock-First bukti**: lihat `mock_logs/…`
- **Hardening bukti**: lihat `hardening_logs/…`

---

## 4. Bukti Eksekusi (tautan cepat)
### 4.1 Mock-First
- 201 Created → `mock_logs/ts>20251020_140337_201_orders.txt`
- 200 OK → `mock_logs/ts>20251020_133726_200_notifications.txt`
- 401 Unauthorized → `mock_logs/ts>20251020_133726_401_notifications.txt`
- 400 Bad Request → `mock_logs/ts>20251020_133726_400_orders.txt`

### 4.2 Hardening (Runtime)
- 201 Created (orders) → `hardening_logs/ts>20251020_135213_201_orders.txt`
- 200 OK (notifications) → `hardening_logs/ts>20251020_135213_200_notifications.txt`
- 401 Unauthorized (orders, tanpa bearer) → `hardening_logs/ts>20251020_135213_401_orders.txt`
- 400 ValidationError (orders) → `hardening_logs/ts>20251020_135213_400_orders_validation.txt`
- 400 Handled (JSON parse error) → `hardening_logs/ts>20251020_135213_400_orders_badjson.txt`

> **Cek header**: `x-correlation-id` muncul di response;  
> **Cek HTTP security headers** (CSP, X-Frame-Options, X-Content-Type-Options, dll.) muncul di 200/201.

---

## 5. Penjelasan Hardening
- **Logging**: Pino (JSON) – field sensitif (`authorization`, `cookie`) ***[REDACTED]***.
- **Tracing**: `x-correlation-id` disisipkan lebih awal & konsisten di log & response.
- **Error handling**:
  - 500 rusak → **#400 BAD_JSON** (bukan 500).
  - Validasi bisnis gagal → **400 ValidationError**.
  - Tanpa Bearer → **401 UNAUTH**.
- **Rate-Limit**: 60/min (orders), 120/min (notif).
- **Helmet headers**: aktif (CSP, X-Frame-Options, HSTS, dsb).

---

## 6. Cara Reproduksi (singkat)
```bash
npm ci
npm run dev:orders    # :5002
npm run dev:notifications   # :5003
# gunakan curl.exe (Windows) sesuai lampiran perintah uji
