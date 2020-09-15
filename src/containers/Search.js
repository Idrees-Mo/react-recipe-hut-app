import React, { useState, useContext } from 'react'
import Context from '../context/Context'
import styled from 'styled-components'

function Search() {
  const { FETCH_LIST } = useContext(Context)
  const [search, setSearch] = useState('')
  const onsubmit = (e) => {
    e.preventDefault()
    FETCH_LIST(search)
    setSearch('')
  }
  const disabled = search === ''
  return (
    <SearchStyle>
      <form onSubmit={onsubmit}>
        <label htmlFor="search">
          What is your craving?
      </label>
        <input
          className="search"
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <input
          disabled={disabled}
          className="btn"
          type="submit"
          value="Get recipes"
        />
      </form>
    </SearchStyle>
  )

}

const SearchStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
   padding: 2rem;
    label {
      display:block;
      margin-bottom: 1rem;
      font-size: 2rem;
    }
    .search {
      display: block;
      width: 30rem;
      height: 3rem;
      font-size: 2rem;
      padding: 1rem;
      border: 1px solid #cccccc;
      margin-bottom: 1rem;
    }
    .btn {
      display: block;
      border: 1.5px solid black;
      width: 100%;
      background: #017933;
      padding: 0.5rem;
      font-size: 2.1rem;
      color: #fafafa;
          }
    .btn:hover {
      cursor: pointer;
   
    }
    .btn:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
`

export default Search