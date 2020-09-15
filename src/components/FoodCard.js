import React, { useState } from "react";
import styled from "styled-components";
import Ingredient from "./Ingredients";
import Nutrations from "./Nutrations";

export default ({ food }) => {
  const [active, setActive] = useState({ ingBtn: true })
  const onclick = (e) => {
    setActive({ [e.target.name]: true })
  }
  return (
    <Card>
      <figure className="food-img">
        <img
          src={food.image}
          alt="chicken"
        />
        {food.dietLabels.length > 0 && <span className="food-tag">{food.dietLabels[0]}</span>}
      </figure>
      <div className="food-info">
        <h2>{food.label}</h2>
        <div className="btn-tab">
          <button name="ingBtn" className={`${active.ingBtn && "active"}`} onClick={onclick}>Ingredients</button>
          <button name="nutBtn" className={`${active.nutBtn && "active"}`} onClick={onclick}>Nutritions</button>
        </div>
        <div className="food-content">
          {active.ingBtn ? <Ingredient ing={food.ingredientLines} /> :
            <Nutrations nut={food.digest} />
          }
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
display: flex;
flex-direction:column;
margin:2rem;
width: 26rem;
height:40rem;
box-shadow: 0px 1.5px 5px 0px rgba(0, 0, 0, 0.4);

.food-img {
  position: relative;
  max-width:100%;
  max-height:40%;
  img {
    max-height:100%;
    min-width:100%;
      }
  .food-tag {
    position: absolute;
    text-align:center;
    top: 0;
    right: 0.5rem;
    color: #fff;
    font-size:1rem;
    background-color: rgba(0,0,0,0.7);
    min-width: 9rem;
    padding: 0.6rem;
    text-transform:uppercase;    
  }
}

.food-info {
  width: 100%;
  height:100%;
  .food-content {
   overflow:auto;
   max-height:17rem;
   transition: 0.3s;
   &::-webkit-scrollbar {
    width: 0.4em;
    }
    &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    }
    &::-webkit-scrollbar-thumb {
    background-color: #333;
    }
  }
  h2 {
    background-color:#231F20;
    color:#fff;
    text-align: center;
    font-size:1.9em;
    padding: 0.5rem;
    max-height:3.1rem;
    overflow:hidden;        
         }
  .btn-tab {
    display: flex;
    margin-bottom: 0.5rem;
    button {
      background-color: #999;
      font-size:1.4rem;
      color: #222;
      width: 50%;
      outline: none;
      border:none;
      cursor: pointer;
      padding: 4px 16px;
      transition: 0.3s;
      opacity:0.9;
        }
    button:not(.active):hover {
          color: #fff;
          background-color: tomato;
               }
    button.active {
      color: #F5F3BB;
      background-color: #231F20;
      background-color: #231F20;
            }
        }    
`;
