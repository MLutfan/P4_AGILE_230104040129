import app from "./index";

const PORT = 5002;

app.listen(PORT, () => {
  console.log(`✅ Order Service running on http://127.0.0.1:${PORT}`);
});
