const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "MongoDB" },
  { id: 2, name: "Express JS" },
  { id: 3, name: "React JS" },
  { id: 4, name: "Node JS" },
];
//Send all courses details
router.get("/", (req, res) => {
  console.log("Courses Router Module");

  res.send(JSON.stringify(courses) + "\n\n" + "Test Text");
});

//Send only Particular course details
router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The Course of Given ID was not found");
  res.send(course);

  // res.send(JSON.stringify(courses[req.params.id - 1]) + req.query); //Old Own Logic
});

//Create course using POST method

router.post("/", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

//Create course using GET method
router.get("/create/:name", (req, res) => {
  let names = req.params.name;

  const course = {
    id: courses.length + 1,
    name: names,
  };
  courses.push(course);
  res.send(course);
});

module.exports = router;
