import React from "react";
import styled from "styled-components";

const categories = [
  {
    name: "all",
    text: "전체보기"
  },
  {
    name: "business",
    text: "business"
  },
  {
    name: "entertainment",
    text: "entertainment"
  },
  {
    name: "health",
    text: "health"
  },
  {
    name: "science",
    text: "science"
  },
  {
    name: "sports",
    text: "sports"
  },
  {
    name: "technology",
    text: "technology"
  }
];

const CategoriesBlock = styled.div`
  padding-bottom: 3rem;
  width: 960px;
  margin: 0 auto;
  margin-top: 1rem;

  ul {
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
`;

const Category = styled.li`
  float: left;
  list-style-type: none;
  color: inherit;
  text-decoration: none;

  span {
    display: block;
    padding: 0.25rem 0.5rem;
    cursor: pointer;

    ${props => props.active && `color: red`}
  }
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category
          key={c.name}
          onClick={() => onSelect(c.name)}
          active={category === c.name}
        >
          <span>{c.text}</span>
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
