import React from "react";
import styled from "styled-components";
export default ({ nut }) => {
  return (
    <List>
      {nut.map((li) => (
        <li>{li.label}<span>{li.total.toFixed(2)} {li.unit}</span></li>
      ))}
    </List>
  );
};

const List = styled.ul`
  text-align: left;
  padding-bottom: 1rem;
  list-style: none;
  li {
    padding: 0.5rem;
       font-size:1.3rem;
       span{
         float:right
       }
  }
  li:nth-child(even) {
    background-color: rgba(0,0,0,0.04);
       color: #111;
  }
`;
