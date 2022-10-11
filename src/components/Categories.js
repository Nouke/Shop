//import { styled } from 'styled-components';
//import { styled } from "styled-components";
import styled from 'styled-components';
import React from 'react';
import { categories } from "../data";
//import CategoryItem  from "./CategoryItem";
const Container = styled.div`

`; 
const Categories = () => {
  return (
           <Container>
               {categories.map( item => (
               // <CategoryItem item = {item}/>
               <div key= {item.id}>
                {item.name}
               </div>
                ))
               }
          </Container>
  )
};

export default Categories;
