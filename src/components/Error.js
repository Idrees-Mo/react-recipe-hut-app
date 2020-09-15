import React from 'react'
import styled from 'styled-components'

const Error = ({ error, search_err }) => {
  if (error) return <ErrorStyle> <h3>Opps! something went <span>wrong</span></h3><p>Please, Try again</p></ErrorStyle>
  return <ErrorStyle><h3>Sorry,cannot find recipes for <span>{search_err}</span></h3>
    <p>Try, something else please.</p></ErrorStyle>
}

const ErrorStyle = styled.div`
  margin-top:4rem;
   h3 {
     padding-bottom:1rem 
        }
  span {
    color:red;
    font-s
  }
`

export default Error
