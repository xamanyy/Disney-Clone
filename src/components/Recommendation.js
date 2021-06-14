import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectRecommend} from '../features/Movie/movie'

function Recommendation() {
const select = useSelector(selectRecommend);

  return (
    <Container>
      <Heading>Recommended For You</Heading>
      <Content>
        {select && select.map((movie, key) => <Wrap key={key}>
             {movie.id}
            <Link to ={'/details/' + movie.id}>
                <img src={movie.cardImg} alt={movie.title}/>
            </Link>
        </Wrap>)}
      </Content>
    </Container>
  );
}
const Container = styled.div``

const Heading = styled.h2`
  margin-top: 30px;
  letter-spacing: 1.2px;
  font-family: Avenir-Roman, sans-serif;
`;

const Content = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 60%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  transition: all 250ms cubic-bezier(0.25, 0.45, 0.46, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
    z-index:1;
    opacity:1;
    transition: opacity 500ms ease-in-out 0s;
  }

  &:hover {
    transform: scale(1.06);
    border-color: 3px solid rgba(249,249,249,0.8) ;
    
  }
`;


export default Recommendation
