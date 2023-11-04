const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;



// Root route
app.get("/", (req, res) => {
  return res.send("Chatbot Funcionando 🤖🤖🤖");
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
