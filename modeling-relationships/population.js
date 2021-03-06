const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("Connected to MongoDB...");
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
  let id = result._id.toString();
  let split = id.split('"')[0];
  console.log(split);
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
    .select("name author _id")
    .populate("author");
  console.log(courses);
}

async function removeLast() {
  // Remove last document from the database
  Course.findOneAndDelete().then((result) => {
    console.log("Removed from MongoDB...: ", result);
  });
}

async function updateAuthor(authorId, authorName) {
  const author = await Author.findById(authorId);
  author.name = authorName;
  author.__v++;
  author.save();
  console.log("author updated : \n", author);
}

async function updateCourse(courseId, courseName) {
  const course = await Course.findByIdAndUpdate(
    courseId,
    {
      $set: {
        name: courseName,
      },
      $inc: { __v: 1 },
    },
    {
      new: true,
    }
  );
  console.log("Course updated." + course);
}

// createAuthor("Muthu", "My bio", "my website");

// createCourse("Digital Signal Processing", "6267c0fcdc9611a5f5742712");

// listCourses();

// removeLast();

updateAuthor("6267c0fcdc9611a5f5742712", "Muthu Mathiyazhagan");

// updateCourse("626676197fba2367e9f8cd50", "Node JS");
