import {createSlice} from '@reduxjs/toolkit'

const universalSlice = createSlice({
   name: 'universal',
   initialState: {
      modal1: false,
      success: false,
      dropState: false,
   },
   reducers: {
      setModalState: (state,{payload}) => {
          state.modal1 = !state.modal1
      },
      setSuccess: (state,{payload}) => {
          state.success = !state.success
      },
      setDropState: (state, {payload}) => {
          state.dropState = !state.dropState
      }
   }
})

export const {setModalState, setSuccess, setDropState} = universalSlice.actions

 export default universalSlice.reducer