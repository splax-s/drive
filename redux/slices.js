import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin:{"Location": {"lat": 6.400036599999999, "lng": 5.607577699999999}, "description": "Iknow Aguy Enterprise, Sam Guobadia St, Benin City, Nigeria"},
    destination: {"Location": {"lat": 6.400036599999999, "lng": 5.607577699999999}, "description": "Iknow Aguy Enterprise, Sam Guobadia St, Benin City, Nigeria"},
    travelTimeInformation:  null,
    home: {"Location": {"lat": 6.400036599999999, "lng": 5.607577699999999}, "description": "Iknow Aguy Enterprise, Sam Guobadia St, Benin City, Nigeria"},
    work: {"Location": {"lat": 6.400036599999999, "lng": 5.607577699999999}, "description": "Iknow Aguy Enterprise, Sam Guobadia St, Benin City, Nigeria"},
    profilePic:  null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState: initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
            // console.log(action.payload)
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        },
        setHome: (state, action) => {
            state.home = action.payload
        },
        setWork: (state, action) => {
            state.work = action.payload
        },
        setProfilePic: (state, action) => {
            state.profilePic = action.payload
        }
    }
})

export const {setOrigin, setDestination, setTravelTimeInformation, setHome, setWork, setProfilePic} = navSlice.actions


export const selectOrigin = (state, action) => state.nav.origin
export const selectDestination = (state, action) => state.nav.destination
export const selectTravelTimeInformation = (state, action) => state.nav.travelTimeInformation
export const selectHome = (state, action) => state.nav.home
export const selectWork = (state, action) => state.nav.work
export const selectProfilePic = (state, action) => state.nav.profilePic

export default navSlice.reducer
