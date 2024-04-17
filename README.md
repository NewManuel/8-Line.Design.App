# Line Design App (SVG Logo Maker)

## PURPOSE

```bash
If you ever wanted to create your own brand no need to continue any further. This application help to create a logo for those who lack the artisic ability to create one themselves, using simpple shapes and colors.

A Node.js command-line application is built to take in a users input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.
This application uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. 
```

## User Story

```md
For a freelance web developer
YOU want a simple logo to be generated for YOUR projects
SO THAT YOU don't have to pay a graphic designer or waste time doing it yourself
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN YOU are prompted for a text
THEN YOU can enter up to three characters
WHEN YOU are prompted for the text color
THEN YOU can enter a color keyword (OR a hexadecimal number)
WHEN YOU are prompted for a shape
THEN YOU are presented with a list of shapes to choose from: circle, triangle, and square
WHEN YOU am prompted for the shape's color
THEN YOU can enter a color keyword (OR a hexadecimal number)
WHEN YOU have entered the input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN YOU open the `logo.svg` file in a browser
THEN YOU are shown a 300x200 pixel image that matches the criteria YOU entered
```

### Video

* Link: https://drive.google.com/file/d/1svGVvwr4cZn9BZ__YibJgEOPWP7s7qeW/view?usp=sharing

### Gif

The following image shows a produced logo of the generated SVG given the following input entered: `E.O.N.` for the text, `White` for the text color, `Circle` from the list of shapes, and `Blue` for the shape color.

![Image showing a blue circle with white text that reads "E.O.N.".](./Images/Image%20Preview.png)

### Url

* The URL of the GitHub repository: https://github.com/NewManuel/8-Line.Design.App