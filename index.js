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

function intialize() {
    inquirer.prompt(designQnA).then((answers) => {
        console.log(answers);
        const inputShape = answers;
        fileCreate("./distro/logo.svg", inputShape);
    });
};

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