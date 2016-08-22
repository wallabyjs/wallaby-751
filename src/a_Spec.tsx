import * as React from 'react'
import {mount, render, shallow} from 'enzyme'
import {expect} from 'chai'

class Fixture extends React.Component {
    render () {
        return (
            <div>
                <input id='checked' defaultChecked />
                <input id='not' defaultChecked={false} />
            </div>
        )
    }
}

describe('should render', () => {
   it('fixture', () => {
       const wrapper = shallow(<Fixture />);
       expect(wrapper.find('#checked')).to.be.checked()
       expect(wrapper.find('#not')).to.not.be.checked()
   })
});