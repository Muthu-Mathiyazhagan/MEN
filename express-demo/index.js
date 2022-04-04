const express = require("express");
const app = express();

app.use(express.json());

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
  res.send(JSON.stringify(courses) + "\n\n" + "Test Text");
});

//Send only Particular course details
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The Course of Given ID was not found");
  res.send(course);

  // res.send(JSON.stringify(courses[req.params.id - 1]) + req.query); //Old Own Logic
});

//Create course using POST method

app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

//Create course using GET method
app.get("/api/courses/create/:name", (req, res) => {
  let names = req.params.name;
  const course = {
    id: courses.length + 1,
    name: names,
  };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening  On http://localhost:${port}`));
