class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(obj) {
    let area = 0;
    if (obj == square) {
      area = obj.side * 4;
      return area;
    } else if (obj == rectangle) {
      area = obj.width * obj.height;
      return area;
    } else if (obj == circle) {
      area = obj.radius * obj.radius * 3.14;
      return area;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
