const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "20mb" }));

// Routes
const messengerRoutes = require("./Facebook/facebookBot");
app.use("/messenger", messengerRoutes);

// Root route
app.get("/", (req, res) => {
  return res.send("Chatbot Funcionando 🤖🤖🤖");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
