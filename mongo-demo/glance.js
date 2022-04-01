const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/glance")
  .then((client) => {
    console.log("MongoDB Connected");
    // console.log(client);
  })
  .catch((err) => console.error(err));

const Schema = new mongoose.Schema({
  keyword: String,
  admin: String,
  groupName: String,
  noOfMembers: String,
  date: { type: Date, default: Date.now },
  postPer: String,
  isSuccess: Boolean,
});

async function createReport(
  groupName,
  noOfMembers,
  postPer,
  isSuccess,
  keyword,
  admin
) {
  const Report = mongoose.model("fly", Schema);
  const report = new Report({
    keyword: keyword,
    admin: admin,
    groupName: groupName,
    noOfMembers: noOfMembers,
    postPer: postPer,
    isSuccess: isSuccess,
  });
  console.log(await report.save());
  console.log(Report.find({}));
  process.exit(0);
}

createReport("Ethavathu", "66 k", "66 per Week", true, "Pongal", "Krishnan");
