const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then((client) => {
    console.log("MongoDB Connected");
    // console.log(client);
  })
  .catch((err) => console.error(err));


const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

async function createCourse() {
  const Course = mongoose.model("Course", courseSchema);
  const course = new Course({
    name: "Angular Js Course",
    author: "Mosh",
    tags: ["angular", "frontend"],
    isPublished: true,
  });

  console.log(await course.save());
  process.exit(0);
}
createCourse();

