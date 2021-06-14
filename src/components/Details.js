import React from "react";
import styled from "styled-components";
import { useState } from "react";
import db from "../firebase";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Details(props) {
  const { id } = useParams();
  const  [detail, setDetail ] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetail(doc.data());
        } else {
          console.log("No file in Firebase");
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img alt={detail.title} src={detail.backgroundImg} />
      </Background>
      <Wrap>
        <img src={detail.titleImg} alt={detail.title} />
      </Wrap>

      <Content>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="..." />
          <h3>Play</h3>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt=".." />
          <h3>Trailer</h3>
        </TrailerButton>
        <AddList>
          <span />
          <span />
        </AddList>
        <GroupList>
          <img src="/images/group-icon.png" alt="..." />
        </GroupList>
      </Content>
      <Subtitle>
        <p>{detail.subTitle}</p>
      </Subtitle>
      <Description>
        <p>{detail.description}</p>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  display: block;
  top: 90px;
  z-index: 1;
  overflow: hidden;
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
const Wrap = styled.div`
margin-left: 25px;
  img {
    width: 30vw;
    height: auto;
    min-width: 360px;
    padding-top: 25px;
  }
`;
const PlayButton = styled.div`
  text-transform: uppercase;
  background-color: white;
  width: 110px;
  height: 56px;
  display: grid;
  place-content: center;
  border-radius: 4px;
  margin-top: 45px;
  margin-left: 25px;
  border: 2px solid white;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  h3 {
    color: black;
    letter-spacing: 1px;
    text-align: center;
    font-size: 17px;
    padding: 7px;
    opacity: 0.8;
  }

  img {
    text-align: center;
    width: 36px;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    width: 85px;

    h3 {
      font-size: 13px;
      padding: 4px;
    }
    img {
      width: 26px;
    }
  }
`;

const TrailerButton = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  display: grid;
  place-content: center;
  width: 140px;
  height: 56px;
  margin-top: 45px;
  border-radius: 4px;
  padding: 7px;
  cursor: pointer;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  h3 {
    text-transform: upperCase;
    font-size: 17px;
    color: rgb(249, 249, 249);
    opacity: 1;
    padding: 7px;
  }
  img {
    width: 32px;
  }

  @media (max-width: 768px) {
    height: 46px;
    width: 100px;

    h3 {
      font-size: 13px;
      padding: 6px;
    }
    img {
      width: 22px;
    }
  }
  &:hover {
    background-color: #000;
  }
`;
const AddList = styled.div`
  background: rgba(0, 0, 0, 0.3);
  height: 56px;
  width: 56px;
  margin-top: 45px;
  cursor: pointer;
  margin-left: 20px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1.5px, 0px) rotate(0deg);
      width: 18px;
    }
    &:nth-child(2) {
      height: 18px;
      width: 2px;
      transform: translateX(-8px);
    }
  }
  @media (max-width: 768px) {
    width: 46px;
    height: 46px;
    span {
      &:first-child {
        height: 1px;
      }
      &:nth-child(2) {
        width: 1px;
      }
    }
  }
`;

const GroupList = styled.div`
  height: 56px;
  background-color: black;
  width: 56px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  border: 2px solid rgb(249, 249, 249);
  margin-top: 45px;
  margin-left: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 46px;
    width: 46px;
  }
`;

const Subtitle = styled.div`
  margin-top: 45px;
  margin-left: 25px;

  p {
    font-size: 18px;
    color: rgb(249, 249, 249);
    width: 100%;
    height: auto;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const Description = styled.div`
  margin-top: 45px;
  margin-left: 25px;

  height: auto;

  p {
    width: 100%;
    font-size: 17px;
    color: rgb(249, 249, 249);
    min-width: 200px;
    max-width: 1000px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
export default Details;
