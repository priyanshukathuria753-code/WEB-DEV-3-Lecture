use("collegedb")

// db.createCollection("students")
// db.students.insertOne ({
//     "name": "John Doe",
//     "age": 20,
//     "major": "Computer Science",
//     "courses": ["CS101", "CS102", "MATH201"],
//     "gpa": 3.5,
//     "graduationYear": 2024
// })

// db.students.insertMany([
//     {
//         "name": "Jane Smith",
//         "age": 22,
//         "major": "Mathematics",
//         "courses": ["MATH201", "MATH202", "PHYS101"],
//         "gpa": 3.8,
//         "graduationYear": 2024
//     },
//     {
//         "name": "Alice Johnson",
//         "age": 21,
//         "major": "Physics",
//         "courses": ["PHYS101", "PHYS102", "MATH201"],
//         "gpa": 3.9,
//         "graduationYear": 2024
//     }
// ])

// db.students.insert({
//     "name": "Bob Brown",
//     "age": 23,
    
// })

////Read operations
db.students.findOne(); //return one document from the collection
db.students.find(); //return all documents from the collection
db.students.find(
    {"graduationYear": 2024}
)
db.students.find(
    {"major": "Computer Science"}
)
db.students.find({
    name: "John Doe"
})
//update document
db.students.updateOne(
    {"name": "John Doe"},
    {$set: {courses:"UIUX", gpa: 7.6 }}
)
db.students.updateMany(
    {"name": "Jane Smith"},
    {$set: {courses: "Data Science", gpa: 6.9}},
)
db.students.updateOne(
    {name: "Alice Johnson"},
    {$set: {courses: "FSD", gpa: 8.6}}
)
db.students.updateOne(
    {name: "Jane Smith"},
    {$set: {gpa: 7.6}}
)
db.students.updateMany(
    {gpa:7.6},
    {$set:{gpa: 8.0}}
)

db.students.deleteOne(
    {"name": "Bob Brown"}
);

// db.students.deleteMany(
//     {"graduationYear": 2024}
// );

db.students.deleteMany