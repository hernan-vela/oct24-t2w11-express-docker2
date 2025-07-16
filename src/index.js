const express = require("express");
const mongoose = require("mongoose");

// Require and immediately use vs require and save as variable
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

console.log("PORT is " + process.env.PORT);

let {
    PORT,
    NODE_ENV,
    DATABASE_URL
} = process.env;

console.log(PORT, NODE_ENV, DATABASE_URL);

if (PORT == undefined){
    PORT = 3000;
}

const app = express();

app.get("/", (request, response) => {
    console.log("Homepage of API requested!");
    response.json({
        message:"Hello, world!"
    });
});

async function main(){
    await mongoose.connect(DATABASE_URL);
    console.log("Database connected");

    app.listen(PORT, () => {
        console.log("Server is listening on http://localhost:" + PORT);
    });
}
main();

// This option is valid but is prone to errors due to nesting, many brackets
// mongoose.connect("database url goes here").then(() => {
//     console.log("Database connected")
// });

// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });

// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });