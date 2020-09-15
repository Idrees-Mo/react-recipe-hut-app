import React from 'react'
import background from '../assets/background.jpg'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Recipe Hunt</h1>
      <h2>Never wonder what to cook!</h2>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
background-color: #251E0E;
background-image:url("${background}");
// background-repeat: no-repeat repeat;
// background-size: cover;
background-position: top;
height: 20vh;
display: flex;
flex-direction: column;
justify-content: center;
padding: 2rem;
color: #fafafa;

h1 {
  font-size: 3rem;
}

h2 {
  color: #F5F3BB;
  font-weight: 400;
  font-size: 1.5rem;
}
`
export default Header