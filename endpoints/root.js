const path = require("path");

const homePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "public", "index.html"), (err) => {
    if (err) {
      res.status(err.status || 500).send("Error sending html file");
    }
  });
};

module.exports = homePage;
