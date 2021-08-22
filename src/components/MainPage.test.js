import {shallow} from 'enzyme'
import React from 'react'
import MainPage from './MainPage'

let wrapper;

beforeEach(()=>{
    const mockProps={
        robots:[],
        searchField:'',
        onRequestRobots:jest.fn(),
        isPending:false
    }
    wrapper=shallow(<MainPage {...mockProps} />)
})

it("Rendering MainPage component",()=>{
    expect.assertions(1)
    expect(wrapper).toMatchSnapshot();
})

it("Filters robots correctly",()=>{
    const mockProps2={
        robots:[
        ],
        searchField:'',
        onRequestRobots:jest.fn(),
        isPending:false
    }
    const wrapper2=shallow(<MainPage {...mockProps2} />)
    expect(wrapper2.instance().filterRobots()).toEqual([])
}) 

it("Filters robots correctly 2",()=>{
    const mockProps3={
        robots:[{
            name:"John",
            email:"John@email.com"
        }
        ],
        searchField:'jo',
        onRequestRobots:jest.fn(),
        isPending:false
    }
    const wrapper3=shallow(<MainPage {...mockProps3} />)
    expect(wrapper3.instance().filterRobots()).toEqual([{
        name:"John",
        email:"John@email.com"
    }])
})

it("Filters robots correctly 3",()=>{
    const mockProps4={
        robots:[{
            name:"John",
            email:"John@email.com"
        }
        ],
        searchField:'helloo',
        onRequestRobots:jest.fn(),
        isPending:false
    }
    const wrapper4=shallow(<MainPage {...mockProps4} />)
    expect(wrapper4.instance().filterRobots()).toEqual([])
})