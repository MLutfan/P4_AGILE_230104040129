# Definition of Done (DoD)
- OpenAPI valid dan lulus `spectral lint`.
- Mock server terbukti 3 skenario (201/200, 400, 401) dengan bukti tangkapan layar/hasil curl.
- ≥ 6 test lulus (Jest + Supertest).
- Endpoint lokal berjalan (POST /orders, GET /notifications).
- Auth Bearer dummy, rate-limit aktif, error 400/401 rapi `{ message, code }`.
- Logging JSON + header `x-correlation-id` di response.
- CI GitHub Actions hijau.
- README berisi cara jalan & endpoint.