import React, { useContext } from 'react'
import Context from '../context/Context'
import FoodList from '../components/FoodList'
import Loader from '../components/Loader'
import Error from '../components/Error'
import styled from 'styled-components'

function Main() {
  const { foodlist, search, loading, error } = useContext(Context)
  if (loading) return <MainStyle> <Loader /> </MainStyle>
  else if (foodlist.length === 0 && search) return <MainStyle><Error search_err={search} /></MainStyle>
  else if (error) return <MainStyle><Error error={error} /></MainStyle>
  return <MainStyle> <FoodList list={foodlist} /> </MainStyle>
}

const MainStyle = styled.main`
max-width: 96%;
margin:auto;
display:flex;
justify-content:center;
alignitem:center;
`
export default Main