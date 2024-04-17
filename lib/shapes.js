// Shape Class
// This class serves as the base class for all shapes.It has a constructor that takes a color parameter and assigns it to the instance variable this.color.It defines a render method that throws an error with the message "render() method must be implemented by child classes".This method is intended to be overridden by child classes.
class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        throw new Error("render() method must be implemented by child classes");
    }
}

// Triangle Class(extends Shape)
// This class extends the Shape class, inheriting its constructor and render method.It overrides the render method to generate an SVG string for a triangle with specific points and the color inherited from the Shape class.
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Circle Class(extends Shape)
// This class extends the Shape class and overrides the render method.It generates an SVG string for a circle with a specific center(cx, cy) and radius(r), along with the inherited color.
class Circle extends Shape {
    render() {
        return `<circle cx="151" cy="101" r="80" fill="${this.color}" />`;
    }
}

// Square Class(extends Shape)
// This class extends the Shape class and overrides the render method.It generates an SVG string for a square with specific coordinates(x, y) and dimensions(width, height), along with the inherited color.
class Square extends Shape {
    render() {
        return `<rect x="56" y="18" width="188" height="164" fill="${this.color}" />`;
    }
}

// This exports the Shape, Triangle, Circle, and Square classes so that they can be imported and used in other parts of the application.
module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
};