let str = `Fashion, LifeStyle, Clothing, Entertainment - Swaggy StorePublic group 92K members 25 unread postsMember since January 2022`;
console.log("Original \n",str);

let strR = str.replace("members", "members ");
let strM = strR.replace("Public","\n Public")
let strR2 = strM.replace(" · ", "");
console.log("Full Str");

console.log("String:\n", strR2.substring(0, 200));

// let postCount = /\w+(?=\s+posts)/.exec(strR2); // For No of Posts
// postCount = postCount[0];
// console.log("Post Count: ", postCount);

let membersCount = /(?<=group\s).*(?=\members)/.exec(strR2); // For No of Members
membersCount = membersCount[0];
console.log("Member Count: ", membersCount);
let noOfMembers = membersCount;

// let timeSpan = /(?<=\bposts a\s)(\w+)/.exec(strR2); // For No of Members
// timeSpan = timeSpan[0];
// console.log("Time Span: ", timeSpan);

