import { createSlice } from '@reduxjs/toolkit'

export const technicals = createSlice({
  name: 'technicals',
  initialState: {
    listing: 'india',
    symbol: 'BSE:CDSL'
  },
  reducers: {
    setListing: (state, action) => {
      state.listing = action.payload
    },
    setSymbol: (state, action) => {
      state.symbol = action.payload
    }
  }
})

export const { setListing, setSymbol } = technicals.actions

export default technicals.reducer
