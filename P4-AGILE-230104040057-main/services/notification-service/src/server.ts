import app from "./index";

const PORT = 5003;

app.listen(PORT, () => {
  console.log(`✅ Notification Service running on http://127.0.0.1:${PORT}`);
});
