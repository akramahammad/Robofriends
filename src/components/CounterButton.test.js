import {shallow} from 'enzyme'
import React from 'react'
import CounterButton from './CounterButton'



it("Rendering Counter button component",()=>{
    expect.assertions(1)
    const mockColor='red'
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
})

it('Correctly increments counter',()=>{
    const mockColor='red'
    const wrapper = shallow(<CounterButton color={mockColor} />)
    expect(wrapper.state().count).toEqual(1)
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state().count).toEqual(2)
    expect(wrapper.props().color).toEqual('red')
})
