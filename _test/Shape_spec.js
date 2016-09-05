import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Shape from '../src/components/Shape';

describe('Shape', function () {
  let blueSquare, redDiamond, greenCircle, defaultShape, invalidPropsShape;

  before(function () {
    blueSquare = shallow(<Shape color="blue" shape="square" />);
    redDiamond = shallow(<Shape color="red" shape="diamond" />);
    greenCircle = shallow(<Shape color="green" shape="circle" />);
    invalidPropsShape = shallow(<Shape color="purple" shape="trapazoid" />);
    defaultShape = shallow(<Shape />);
  });

  it('should contain a div', function() {
    expect(blueSquare.find('div').length).to.equal(1);
  });

  it('should apply the class red to the div if the color property is "red"', function() {
    expect(redDiamond.find('div.red').length).to.equal(1);
  });

  it('should apply the class green to the div if the color property is "green"', function() {
    expect(greenCircle.find('div.green').length).to.equal(1);
  });

  it('should apply the class blue to the div if the color property is "blue"', function() {
    expect(blueSquare.find('div.blue').length).to.equal(1);
  });

  it('should apply the class red to the div if the color property is not set', function() {
    expect(defaultShape.find('div.red').length).to.equal(1);
  });

  it('should apply the class red to the div if the color property is any other value', function() {
    expect(invalidPropsShape.find('div.red').length).to.equal(1);
  });

  it('should apply the class square to the div if the shape property is "square"', function() {
    expect(blueSquare.find('div.square').length).to.equal(1);
  });

  it('should apply the class diamond to the div if the shape property is "diamond"', function() {
    expect(redDiamond.find('div.diamond').length).to.equal(1);
  });

  it('should apply the class circle to the div if the shape property is "circle"', function() {
    expect(greenCircle.find('div.circle').length).to.equal(1);
  });

  it('should apply the class square to the div if the shape property is not set', function() {
    expect(blueSquare.find('div.square').length).to.equal(1);
  });

  it('should apply the class square to the div if the shape property is any other value', function() {
    expect(invalidPropsShape.find('div.square').length).to.equal(1);
  });

});
