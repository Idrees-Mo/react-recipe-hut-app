import React from "react";
import styled from "styled-components";
export default ({ ing }) => {
  return (
    <List>
      {ing.map((li) => (
        <li>{li}</li>
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
  }
  li:nth-child(even) {
    background-color: rgba(0,0,0,0.04);
       color: #111;
  }
`;
