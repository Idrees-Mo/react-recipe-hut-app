import React from 'react'
import FoodCard from './FoodCard'
import styled from 'styled-components'

const FoodList = ({ list }) => {
  return (
    <ListStyle >
      {list.map(food => <FoodCard key={food.id} food={food} />)}
    </ListStyle>
  )

}
const ListStyle = styled.div`
display:flex;
justify-content: center;
flex-wrap:wrap;
margin:2rem;
`

export default FoodList