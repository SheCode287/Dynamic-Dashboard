import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        heading:"Weakest Topic",
        otherInfo:{photo:'/Rectangle 2370.svg',
                   Topic:"Food Safety",
                   color: '',
                   rate:'74%',
                   score:'Correct'}

    },
    {
        heading:"",
        otherInfo:{photo:'/Rectangle 2371 (1).svg',
                   Topic:"Compliance Basics Procedures",
                   color: '',
                   rate:'52%',
                   score:'Correct'}

    },
    {
        heading:"",
        otherInfo:{photo:'/Rectangle 2372.svg',
                   Topic:"Company Networking",
                   color: '',
                   rate:'36%',
                   score:'Correct'}

    },

]

export const RangeSlice = createSlice({
    name:'range',
    initialState,
    reducers:{

    },
})




export default RangeSlice.reducer;

