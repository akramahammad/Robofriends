import {shallow} from 'enzyme'
import React from 'react'
import CardList from './CardList'

const mockRobots=[{
    id:1,
    name:'John',
    email:"john@email.com",
    username:"John"
}]

it("Rendering Card list component",()=>{
    expect.assertions(1)
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})