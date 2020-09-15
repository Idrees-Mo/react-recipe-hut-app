import React, { useReducer } from 'react'
import Context from './Context'
import { GET_FOODLIST, SET_LOADING, SET_ERROR } from './Types'
import reducer from './Reducer'

let recipehuntAppId;
let recipehuntAPIKey

if (process.env.NODE_ENV !== 'production') {
  recipehuntAppId = process.env.REACT_APP_RECIPEHUNT_APP_ID;
  recipehuntAPIKey = process.env.REACT_APP_RECIPEHUNT_API_KEY
} else {
  app_id = process.env.RECIPEHUNT_APP_ID;
  api_key = process.env.RECIPEHUNT_API_KEY
}

function State(props) {
  const initialState = {
    loading: false,
    search: null,
    error: null,
    foodlist: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const FETCH_LIST = async (foodname) => {
    dispatch({
      type: SET_LOADING
    })
    const url = `https://api.edamam.com/search?q=${foodname}&app_id=${recipehuntAppId}&app_key=${recipehuntAPIKey}&from=0&to=30`
    try {
      const res = await fetch(url)
      const data = await res.json()
      dispatch({
        type: GET_FOODLIST,
        payload: {
          search: data.q,
          recipes: data.hits
        }
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error
      })
    }
  }
  return (
    <Context.Provider value={{
      loading: state.loading,
      search: state.search,
      error: state.error,
      foodlist: state.foodlist,
      FETCH_LIST
    }}>
      {props.children}
    </Context.Provider >
  )
}

export default State