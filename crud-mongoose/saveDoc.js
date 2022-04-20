const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/test")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean,
  tags: [String],
  date: { type: String, default: new Date() },
});

const Course = mongoose.model("Course", courseSchema);

async function saveCourse() {
  await new Course({
    name: "Node Js",
    tags: ["Anguar JS", "frontend"],
    author: "Mosh",
    isPublished: false,
  }).save();

  console.log(await Course.find());
  process.exit(0);
}
saveCourse();
