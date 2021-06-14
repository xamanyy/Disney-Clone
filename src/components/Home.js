import React from 'react'
import styled from "styled-components";
import Img from './ImageSlider';
import Viewers from './Viewers';
import Recommendation from './Recommendation';
import NewDisney from './NewDisney';
import Originals from './Originals';
import {useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux'
import {setMovie}  from '../features/Movie/movie'
import {selectUserName} from '../features/user/Userslice'
import db from '../firebase'

export const Home = (props) => {

  const dispatch =useDispatch();
  const username = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];
  let originals =[];



//React Hook

useEffect(() => {

db.collection("movies").onSnapshot((snapshot) => {
  snapshot.docs.map((doc) => {
    // eslint-disable-next-line default-case
    switch (doc.data().type) {
      case "recommend":
        recommends = [...recommends, { id: doc.id, ...doc.data() }];
        break;

      case "original":
        originals = [...originals, { id: doc.id, ...doc.data() }];
        break;
      case "newDisney":
        newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
        break;
    }
  });

  dispatch(
    setMovie({
      recommend: recommends,
      original: originals,
      newDisney: newDisney,
    })
  );
});

}, [username])

  return (
    <Container>
      <Img/>
      <Viewers/>
      <Recommendation/>
      <NewDisney/>
      <Originals/>
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 90px);
  top: 90px;
  overflow-x: hidden;
  display: block;
  padding:0 calc(3.5vw + 5px);
  padding-top:10px;
  &:after {
    position: absolute;
    z-index: -1;
    content: "";
    background: url("./images/home-background.png") center center / cover
      no-repeat fixed;
    inset: 0px;
    opacity:1;
  }
`;
export default Home;