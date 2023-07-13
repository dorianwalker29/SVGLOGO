class Shapes {
    constructor() {
      this.shapeColor = "";
    }
  
    setColor(color) {
      this.shapeColor = color;
    }
  }
  
  class Circle extends Shapes {
    render() {
      return `<circle cx="150" cy="100" r="82" fill="${this.shapeColor}"/>`;
    }
  }
  
  class Square extends Shapes {
    render() {
      return `<rect x="56" y="18" width="188" height="164" fill="${this.shapeColor}"/>`;
    }
  }
  
  class Triangle extends Shapes {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;
    }
  }
  
  function renderShape(shape, shapeColor) {
    let shapeObj;
  
    if (shape === 'circle') {
      shapeObj = new Circle();
    } else if (shape === 'square') {
      shapeObj = new Square();
    } else if (shape === 'triangle') {
      shapeObj = new Triangle();
    } else {
      throw new Error('Please select a valid shape from the list.');
    }
  
    shapeObj.setColor(shapeColor);
    return shapeObj.render();
  }
  
  function generateSVG(data) {
    const shapeSVG = renderShape(data.shape, data.shapeColor);
    const textSVG = `<text x="150" y="125" fill="${data.textColor}" font-size="50" text-anchor="middle">${data.text}</text>`;
  
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <g>${shapeSVG}</g>
        ${textSVG}
      </svg>`;
  }
  
  module.exports = generateSVG;
  