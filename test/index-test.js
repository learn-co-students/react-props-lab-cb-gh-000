const React = require('react');
const { shallow } = require('enzyme');

const Car = require('../components/Car');

describe('<Car />', () => {
  describe('Props', function () {

    describe('name', function () {
      it('should render a `name` prop', () => {
        const wrapper = shallow(<Car name="WarBoyTruck" />);
        expect(wrapper.text().includes('WarBoyTruck')).toBeTruthy('The `name` prop is not being used in the render() function.');
      });
    });

    describe('horsepower', function () {
      it('should render a `horsepower` prop', () => {
        const wrapper = shallow(<Car horsepower={500} />);
        expect(wrapper.text().includes(500)).toBeTruthy('The `horsepower` prop is not being used in the render() function.');
      });
    });

    describe('hasRockets', function () {
      it('should default to false', () => {
        expect(Car.defaultProps.hasRockets).toEqual(false);
      });
    });

    describe('colors', function () {
      it("should default to `['black', 'red']`", () => {
        expect(Car.defaultProps.colors).toEqual(['black', 'red']);
      });

      it('should render the given colors', () => {
        const wrapper = shallow(<Car colors={['green', 'magenta']} />);
        expect(wrapper.text().includes('green')).toBeTruthy('The `colors` prop is not being used in the render() function.');
        expect(wrapper.text().includes('magenta')).toBeTruthy('The `colors` prop is not being used in the render() function.');
      });
    });
  });
});
