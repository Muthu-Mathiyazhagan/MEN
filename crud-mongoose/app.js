const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/cacheDB")
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

async function getCourse() {
  const course = await Course.find({ author: /mosh/i })
    .limit(10)
    .sort({ date: -1 })
    .select({ _id: false, name: true, tags: true, date: true })
    .where("date")
    .lte(1650445604259);
  console.log("course", course);
}

getCourse();

async function saveCourse() {
  const course = new Course({
    name: "React Js",
    tags: ["React", "frontend"],
    author: "Mosh",
    isPublished: false,
  });

  const result = await course.save();
  console.log(result);
  process.exit(0);
}
// saveCourse();
