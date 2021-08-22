import {shallow} from 'enzyme'
import React from 'react'
import Card from './Card'

it("Rendering card component",()=>{
    expect.assertions(1)
    expect(shallow(<Card />)).toMatchSnapshot();
})