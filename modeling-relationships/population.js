const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("Connected to MongoDB...");
    console.log("test");
  })
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const Author = mongoose.model(
  "Author",
  new mongoose.Schema({
    name: String,
    bio: String,
    website: String,
  })
);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  })
);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find()
    .select("name author -_id")
    .populate("author", "name");
  console.log(courses);
}

async function removeLast() {
  // Remove last document from the database
  Course.findOneAndDelete().then((result) => {
    console.log("Removed from MongoDB...: ", result);
  });
}

// createAuthor("Muthu", "My bio", "my website");

// createCourse("4", "6266606c24a509336352ea9f");

// listCourses();

removeLast();
