const generateSVG = require('./generateSVG.js');

describe('generateSVG', () => {
  it('should throw an error if the number of characters is greater than 3', () => {
    const data = {
      shape: 'circle',
      shapeColor: 'green',
      text: 'abcd',
      textColor: 'black'
    };
    expect(() => generateSVG(data)).toThrow('Please enter up to three characters for your logo.');
  });

  it('should return an SVG with a green circle', () => {
    const data = {
      shape: 'circle',
      shapeColor: 'green',
      text: 'ABC',
      textColor: 'black'
    };
    const svg = generateSVG(data);
    expect(svg).toContain('<circle cx="150" cy="100" r="82" fill="green"/>');
  });

  it('should return an SVG with a red square', () => {
    const data = {
      shape: 'square',
      shapeColor: 'red',
      text: 'DEF',
      textColor: 'black'
    };
    const svg = generateSVG(data);
    expect(svg).toContain('<rect x="56" y="18" width="188" height="164" fill="red"/>');
  });

  it('should return an SVG with a blue triangle', () => {
    const data = {
      shape: 'triangle',
      shapeColor: 'blue',
      text: 'GHI',
      textColor: 'black'
    };
    const svg = generateSVG(data);
    expect(svg).toContain('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
  });
});
