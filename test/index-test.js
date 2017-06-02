import React from 'react'
import { shallow } from 'enzyme';

import Spaceship from '../components/Spaceship';

describe('<Spaceship />', () => {
  describe('Props', function () {

    describe('name', function () {
      it('should render a `name` prop', () => {
        const wrapper = shallow(<Spaceship name="Millennium Falcon" />);
        expect(wrapper.text().includes('Millennium Falcon')).toBeTruthy('The `name` prop is not being used in the render() function.');
      });
    });

    describe('speed', function () {
      it('should render a `speed` prop', () => {
        const wrapper = shallow(<Spaceship speed={500} />);
        expect(wrapper.text().includes(500)).toBeTruthy('The `speed` prop is not being used in the render() function.');
      });
    });

    describe('hasRockets', function () {
      it('should default to false', () => {
        expect(Spaceship.defaultProps.hasRockets).toEqual(false);
      });
    });

    describe('colors', function () {
      it("should default to `['black', 'red']`", () => {
        expect(Spaceship.defaultProps.colors).toInclude(['black', 'red']);
      });

      it('should render the given colors', () => {
        const wrapper = shallow(<Spaceship colors={['green', 'magenta']} />);
        expect(wrapper.text().includes('green')).toBeTruthy('The `colors` prop is not being used in the render() function.');
        expect(wrapper.text().includes('magenta')).toBeTruthy('The `colors` prop is not being used in the render() function.');
      });
    });
  });
});
