import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import React from 'react'

function ImageSlider() {
  let settings = {
    dots:true,
    infinite:true,
    speed:500,
    slideToShow:1,
    slideToScroll:1,
    autoplay:true
  }
  return (
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src="./images/slider-badag.jpg" alt="..." />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="./images/slider-badging.jpg" alt="..." />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="./images/slider-scale.jpg" alt="..." />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="./images/slider-scales.jpg" alt="..." />
          </a>
        </Wrap>
      </Carousel>

  )
}

const Carousel = styled(Slider)`
margin-top: 30px;

& > button {
opacity:0;
height:100%;
z-index: 1;
&:hover {
  opacity:1;
  transition:opacity 0.2s ease-in-out 0;
}
}
ul li button {
  &:before {
  font-size:10px;
  color: rgb(150,150,171);
  }
}

li.slick-active button:before {
coloe:white;
}

.slick-list{
  overflow:initial;
}
.slick-prev{
  left:-60px;
}
.slick-next{
  right:-60px;
}
`

const Wrap =styled.div`
position:relative;
cursor:pointer;
border-radius: 4px;

a{
  border-radius:4px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor:pointer;
  display:block;
  position:relative;
  padding: 4px;

  img{
    height:100%;
    width:100%;

    &:hover {
      border: 4px solid rgba(249,249,249,0.8);
      transition: border 300ms ease 0;
    }
  }
}
`
export default ImageSlider
