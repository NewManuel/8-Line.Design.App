// Importing Dependencies
// These file imports necessary modules such as inquirer for user prompts, fs for file system operations, and the shape classes(Triangle, Circle, Square) from a local file(./lib/shapes).
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

// Prompting User for Design Details
// This defines an array of questions(designQnA) using Inquirer.js.These questions ask the user about the shape, color, text, and text color they want for their logo.
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

// Logo File Creation Function
// The fileCreate function takes a file name and user answers as parameters. It generates an SVG string based on the user's choices for shape, color, text, and text color. Depending on the selected shape(Triangle, Square, Circle), it instantiates the corresponding shape class and adds the SVG elements for the shape to the SVG string. It also adds SVG text elements for the specified text, using the provided text color. After constructing the SVG string, it writes the string to a file using fs.writeFile.
function fileCreate(fileName, answers) {
    let svgString = "";
    svgString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";

    let shapeChoice;

    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.color}"/>`;
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.color}"/>`;
    } else {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.color}"/>`;
    }
    console.log(answers.shape);
    const text = answers.text;
    const capitalText = text.toUpperCase();

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${capitalText}</text>`;

    svgString += "</g>";

    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
};

// Initialization Function
// This initialize the function and uses inquirer.prompt to ask the questions defined earlier. Upon receiving answers from the user, it logs the answers and proceeds to create the logo file.
function intialize() {
    inquirer.prompt(designQnA).then((answers) => {
        console.log(answers);
        const inputShape = answers;
        fileCreate("./distro/logo.svg", inputShape);
    });
};

// This initialize the function and is called to start the application, prompting the user for design details and creating the logo file accordingly.
intialize();