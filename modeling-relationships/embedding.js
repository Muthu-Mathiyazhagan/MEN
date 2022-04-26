const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: { type: String, required: true },
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: [authorSchema],
  })
);

async function createCourse(name, author) {
  const course = new Course({
    name,
    author: author,
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

createCourse("Node Course", [
  new Author({ name: "Muthu", bio: "BioData", website: "www.muthu.com" }),
  new Author({
    name: "Mathiyazhagan",
    bio: "626204",
    website: "www.muthu.com",
  }),
  new Author({ name: "Vicky", bio: "BioData", website: "www.muthu.com" }),
  new Author({
    name: "ThekkuSeemai",
    bio: "628002",
    website: "www.muthunagar.com",
  }),
]);
// createAuthor("Mosh Hamedeni", "My bio", "My website");
