import React from 'react';
import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Search from './containers/Search'
import Main from './containers/Main'

function App() {
  return (
    <AppStyle >
      <Header />
      <Search />
      <Main />
    </AppStyle>
  );
}

const AppStyle = styled.div`
background:#fafafa;
color: #212121;
min-height: 100vh;
`
export default App;