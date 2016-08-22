import * as React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'

const Fixture = () => (<div><input id='checked' defaultChecked /></div>);

describe('should render', () => {
   it('fixture', () => {
       const wrapper = shallow(<Fixture />);
       expect(wrapper.find('#checked')).to.be.checked();
   })
});