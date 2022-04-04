const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "MongoDB" },
  { id: 2, name: "Express JS" },
  { id: 3, name: "React JS" },
  { id: 4, name: "Node JS" },
];

// console.log(process.env.PORT);

app.get("/", (req, res) => {
  res.send("Hello Wordl");
});

//Send all courses details
app.get("/api/courses", (req, res) => {
  res.send(JSON.stringify(courses) + "\n\n" + "Test");
});

//Send only Particular course details
app.get("/api/courses/:id", (req, res) => {
  // if (req.query) return res.send(JSON.stringify(req.query));
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("The Course of Given ID was not found");
  }
  res.send(course);

  // res.send(JSON.stringify(courses[req.params.id - 1]) + req.query); //Old Own Logic
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening  On http://localhost:${port}`));
