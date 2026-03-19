const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.static("public"));

const routes = require("./routes");

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server is live on port", PORT);
});
