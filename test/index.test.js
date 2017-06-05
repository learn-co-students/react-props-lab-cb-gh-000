import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Spaceship from '../src/components/Spaceship';

describe('<Spaceship />', () => {
  
  describe('Props', () => {

    describe('name', () => {
      it('should render a `name` prop', () => {
        const wrapper = shallow(<Spaceship name="Millennium Falcon" />);

        expect(wrapper.text().includes('Millennium Falcon'), 'The `name` prop is not being used in the render() function.').to.be.true;
      });
    });

    describe('speed', () => {
      it('should default to slow', () => {
        expect(Spaceship.defaultProps.speed).to.equal('slow');
      });

      it('should render a `speed` prop', () => {
        const wrapper = shallow(
          <Spaceship 
            name="Millennium Falcon" 
            speed={500} 
          />
        );

        expect(wrapper.text().includes(500), 'The `speed` prop is not being used in the render() function.').to.be.true;
      });
    });

    describe('hasRockets', () => {
      it('should default to false', () => {
        expect(Spaceship.defaultProps.hasRockets).to.equal(false);
      });
    });

    describe('colors', () => {
      it("should default to `['black', 'red']`", () => {
        const wrapper = shallow(
          <Spaceship 
            name="Millennium Falcon" 
          />
        );
        expect(wrapper.text().includes('black')).to.be.true;
        expect(wrapper.text().includes('red')).to.be.true;
      });

      it('should render the given colors', () => {
        const wrapper = shallow(
          <Spaceship 
            name="Millennium Falcon" 
            colors={['green', 'magenta']} 
          />
        );

        expect(wrapper.text().includes('green'), 'The `colors` prop is not being used in the render() function.').to.be.true;
        expect(wrapper.text().includes('magenta'), 'The `colors` prop is not being used in the render() function.').to.be.true;
      });
    });
  });
});
