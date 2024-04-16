const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");
const designQnA = [
    {
        type: "list",
        name: "shape",
        message: "What shape would you like to use in creating a logo?",
        choices: ["Square", "Circle", "Triangle"],
    },
    {
        type: "input",
        name: "color",
        message: "What color would you like to use in designing your logo?",
    },
    {
        type: "input",
        name: "text",
        message: "What text do you want for your logo (enter 3 or more)?",
    },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like your text to be (enter a name or the hexidecimal)?",
    },
];