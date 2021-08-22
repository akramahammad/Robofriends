import {REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_FAILED,CHANGE_SEARCHFIELD} from './constants'
import * as reducers from './reducers'

describe("Testing reducers",()=>{
    it("Search robots initial state",()=>{
        expect(reducers.searchRobots(undefined,{})).toEqual({searchField:""})
    })

    it("Search robots for action CHANGE_SEARCH_FIELD",()=>{
        const initialState={
            searchField:""
        }
        expect(reducers.searchRobots(initialState,{
            type:CHANGE_SEARCHFIELD,
            payload:"abc"
        })).toEqual({searchField:"abc"})
    })

    it("Request robots initial state",()=>{
        expect(reducers.requestRobots(undefined,{})).toEqual({robots:[],isPending:true,error:''})
    })

    it("Request robots action REQUEST_ROBOTS_SUCCESS",()=>{
        const initialState={
            robots: [],
            isPending: true,
            error:''
        }
        expect(reducers.requestRobots(initialState,{
            type:REQUEST_ROBOTS_SUCCESS,
            payload:[{
                id:1,
                name:"John",
                email:"john@email.com"
            }]
        })).toEqual({robots:[{
                id:1,
                name:"John",
                email:"john@email.com"
            }],
            isPending:false,error:''})
    })
})