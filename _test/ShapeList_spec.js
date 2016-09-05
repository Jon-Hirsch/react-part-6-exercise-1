import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Shape from '../src/components/Shape';
import ShapeList from '../src/components/ShapeList';

describe('ShapeList', function () {
  let component, shapes;

  before(function () {
    shapes = [
      {shape:'square', color:'blue'},
      {shape:'diamond', color:'red'},
      {shape:'circle', color:'green'}
    ];
    component = shallow(<ShapeList shapes={shapes} />);
  });

  it('should contain three Shape components', function() {
    expect(component.find(Shape).length).to.equal(3);
  });

  it('should contain a blue square', function() {
    expect(component.contains(<Shape color="blue" shape="square" />)).to.equal(true);
  });

  it('should contain contain a red diamond', function() {
    expect(component.contains(<Shape color="red" shape="diamond" />)).to.equal(true);
  });

  it('should contain a green circle', function() {
    expect(component.contains(<Shape color="green" shape="circle" />)).to.equal(true);
  });

});
