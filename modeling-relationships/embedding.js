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
    authors: [authorSchema],
  })
);

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors: authors,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log("courses[0]: ", courses[0]);
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

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.__v++;
  course.save();
  console.log("course", course);
}

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  // course.__v++;
  let author = course.authors.id(authorId);
  author.remove();

  course.save();
  console.log("course removed: " + course);
}

// removeAuthor("62683651101bb1a258d48e73", "62683651101bb1a258d48e72");

// addAuthor(
//   "62683651101bb1a258d48e73",
//   new Author({ name: "John Hennur", bio: "BioData", website: "www.muthu.com" })
// );

listCourses();

// createCourse("Node Course", [
//   new Author({ name: "Muthu", bio: "BioData", website: "www.muthu.com" }),
//   new Author({
//     name: "Mathiyazhagan",
//     bio: "626204",
//     website: "www.muthu.com",
//   }),
//   new Author({ name: "Vicky", bio: "BioData", website: "www.muthu.com" }),
//   new Author({
//     name: "ThekkuSeemai",
//     bio: "628002",
//     website: "www.muthunagar.com",
//   }),
// ]);

// createAuthor("Mosh Hamedeni", "My bio", "My website");
