console.log("Before");

getUser(1, displayUser);

console.log("After");

function displayUser(user) {
  console.log(user.gitHubName);
  getRepositories(user.gitHubName, getRespositories);
}

function getRespositories(repos) {
  if (repos.length == 0)
    return console.log(
      `!...No Data available for given Name  in the Repositories...!`
    );

  console.log("Repos are : ", repos);
  getCommit(repos[1], displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading user details from DB");
    callback({ id: 1, gitHubName: "muthu" });
  }, 2000);
}

function getRepositories(name, callback) {
  const muthu = ["Vidly", "E-Commerce", "Booking Site"];
  const mathiyazhagan = ["C-Sharp & Dot Net", "Python-Flask", "React-Native"];

  setTimeout(() => {
    if (name == "muthu") {
      callback(muthu);
    } else if (name == "mathiyazhagan") {
      callback(mathiyazhagan);
    } else {
      callback([]);
    }
  }, 2000);
}

function getCommit(repos, callback) {
  const vidly = [
    "Setting up the Environment",
    "genres API Created",
    "Connected with Mongo DB",
    "Authentication and Authorization",
  ];
  const e_commerce = [
    "Setting up the Environment",
    "Banner API Completed",
    "Cart API Completed",
    "Order API Completed",
    "Authentication and Authorization",
  ];
  setTimeout(() => {
    if (repos == "Vidly") {
      callback(vidly);
    } else if (repos == "E-Commerce") {
      callback(e_commerce);
    } else callback(["404 - Commits not found.!"]);
  }, 2000);
}
