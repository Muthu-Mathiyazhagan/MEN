const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to MongoDB"));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean,
  tags: [String],
  date: { type: String, default: new Date() },
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

Course.find({
  isPublished: true,
  $in: [{ tags: "frontend" }, { tags: "backend" }],
})
  //   .or([{ tags: "frontend" }, { tags: "backend" }])
  .sort({ price: -1 })
  //   .select("name author -_id")
  .then((result) => {
    console.log("Result: " + result);
    console.log("result length: ", result.length);
    process.exit();
  });
