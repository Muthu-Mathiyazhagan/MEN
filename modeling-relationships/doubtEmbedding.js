const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author_name: String,
    author_bio: String,
    author_website: String,
  })
);

async function createCourse(name, author_name, author_bio, author_website) {
  const course = new Course({
    name,
    author_name,
    author_bio,
    author_website,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });

  const result = await author.save();
  console.log("result" + result);
  let id = result._id.toString();
  let split = id.split('"')[0];
  console.log(split);
}

createCourse("Node Course", "Mugil", "VelliSanthai", "StudyMaterials.com");
// createCourse("Node Course", new Author({ name: "Mosh" }));
// createAuthor("Mosh Hamedeni", "My bio", "My website");
