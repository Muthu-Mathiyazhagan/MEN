const express = require("express");
const app = express();
const loggerMiddleware = require("./middleware/logger");
const courses = require("./routes/courses");
const home = require("./routes/home");

app.use(loggerMiddleware);

app.use(express.json());
app.use("/api/courses", courses);
app.use("/", home);

// console.log(process.env.PORT);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening  On http://localhost:${port}`));
