import * as React from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';

const Backdiv = styled.div`
  border-radius: 19px 19px 19px 19px;
  position:absolute;
  height:100%;
  width:100%;
  top:0;
  left:0;
  background-color: black;
  transition: 0.9s;
  transform: rotateY(180deg);
  backface-visibility:hidden;
  color:white;
  margine:auto;
  text-content:centre;
`
const FrontDiv = styled.div`
  transform: rotateY(360deg);
  border: 1px solid pink;
  min-width: 150px;
  min-height: 150px;
  line-height: 150px;
  margin: 5px;
  font-size: 56px;
  color: darkblue;
  background-color: #e7a61a;
  transition: 0.9s;
  backface-visibility:hidden;
  box-shadow: -webkit-box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);
  -moz-box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);
  box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);,
  borderRadius: border-radius: 19px 19px 19px 19px;
  -moz-border-radius: 19px 19px 19px 19px;
  -webkit-border-radius: 19px 19px 19px 19px;
  border: 0px solid #000000;
`

const CardDiv = styled.div`
  :hover ${FrontDiv}{
    transform: rotateY(180deg);
  };
  :hover ${Backdiv}{
    transform: rotateY(360deg);
  };
  position:relative;
`
const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
  font-family:sans-serif;
  perspective:1000px;
`

let Paper = () => {
  const count = useSelector(state => state.items.count)
  console.log('i am count from useSelector im paper.jsx', count);
  return (<Div>
    {[...Array(count)].map((_, index) =>
      <CardDiv>
        <FrontDiv key={index}>
          {index}
        </FrontDiv>
        <Backdiv>иди нахуй</Backdiv>
      </CardDiv>
    )}
  </Div>)
}
export default Paper;