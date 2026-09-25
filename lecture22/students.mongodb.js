use("collegedb");
// db.createCollection("students2");

// db.students2.insertMany([{

//     name : "Tanish",
//     age: 20,
//     city: "New York",
//     semester: "3",
//     marks:80,
//     course: "B.tech",
//     fees: 50000
// },
// {
//     name: "Jay",
//     age: 22,
//     city: "Gurugram",
//     semester: "4",
//     marks:77,
//     course: "B.tech",
//     fees: 80000

// },
// {
//     name: "Ayush",
//     age: 19,
//     city: "Noida",
//     semester: "3",
//     marks:82,
//     course: "B.tech",
//     fees: 120000
// },
// {
//     name: "Shivam",
//     age: 21,
//     city: "Gurugram",
//     semester: "3",
//     marks:82,
//     course: "B.tech",
//     fees: 110000
// }


// ]);

// db.students2.findOne()
// db.students2.find({marks: {$lt: 80}});
// db.students2.find({marks: {$gt: 80}});
// db.students2.find({$or:{
//     {city: "Gurugram"},
//     {marks: {$gt: 80}}
// }})

// db.students2.find({$or: [{city: "Gurugram"}, {marks: {$gt: 80}}]})

// db.students2.find({},{name:1,semester:1,course:1,_id:0}) //Projection

// db.students2.find().sort({
//     age:-1
// })

// db.students2.find().sort({
//     age:1
// })

// db.students2.find().limit(2)

// db.students2.find().skip(3)

// db.students2.find().skip(2).limit(3)

// db.students2.insertMany([{

//     name : "Deepak",
//     age: 25,
//     city: "Noida",
//     semester: "5",
//     marks:60,
//     course: "B.tech",
//     fees:40000
// },
// {
//     name: "Tejas",
//     age: 23,
//     city: "Gurugram",
//     semester: "3",
//     marks:77,
//     course: "B.Com",
//     fees: 80000

// },
// ])

// find students which are in 3rd sem or Btech ,descending order mark and limit it two with skip one value
db.students2.find({$or: [{semester: "3"}, {course: "B.tech"}]}).sort({marks:-1}).skip(1).limit(2)