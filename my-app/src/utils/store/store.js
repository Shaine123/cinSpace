import { configureStore } from '@reduxjs/toolkit'
import { default as  universalReducer } from '../State/universalSlice'

const Store = configureStore({ 
   reducer: {
      universal: universalReducer
   },
})

export default Store