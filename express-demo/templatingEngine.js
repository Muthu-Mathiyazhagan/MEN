const express = require("express");
const app = express();

app.use(express.json());

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Muthu the Best FSD.!",
    name: "Muthu @ Mathiyazhagan K",
    message: "Am the best fullStack Developer Ever.!  :)",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening  On http://localhost:${port}`));
