import React from 'react'
import styled from 'styled-components'
import { auth,provider } from '../firebase'
import {useDispatch , useSelector } from 'react-redux'
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, signOutState } from '../features/user/Userslice'
import { useHistory } from 'react-router-dom'
import {useEffect} from 'react'

export default function Header(props) {

const dispatch = useDispatch();
const history = useHistory();
const userName = useSelector(selectUserName);
const userEmail = useSelector(selectUserEmail);
const userPhoto = useSelector(selectUserPhoto);


useEffect(() => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      setUser(user);
      history.push("/home");
    }
  });
}, [userName]);

const handleAuth = () =>{
if(!userName){

  auth.signInWithPopup(provider).then((result) =>{
setUser(result.user);
  }).catch((error)=>{
    alert(error.message)
  })
}
else if (userName){
  auth.signOut().then(() =>{
    dispatch(signOutState())
    history.push("/");
  })
}
}


const setUser = (user) =>{
  dispatch(
    setUserLoginDetails(
      {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }
    )
  )
}

  return (
    <div>
      <Container>
        <Logo src="/images/logo.svg" />
        {!userName ? (
          <Login onClick={handleAuth}>Login</Login>
        ) : (
          <>
            <Nav>
              <ul>
                <li>
                  <img src="./images/home-icon.svg" alt=".." />
                  <span>Home</span>
                </li>
                <li>
                  <img src="./images/search-icon.svg" alt=".." />
                  <span>search</span>
                </li>
                <li>
                  <img src="./images/watchlist-icon.svg" alt=".." />
                  <span>watchlist</span>
                </li>
                <li>
                  <img src="./images/original-icon.svg" alt=".." />
                  <span>originals</span>
                </li>
                <li>
                  <img src="./images/movie-icon.svg" alt=".." />
                  <span>movies</span>
                </li>
                <li>
                  <img src="./images/series-icon.svg" alt=".." />
                  <span>series</span>
                </li>
              </ul>
            </Nav>
            <UserPhoto>
             <img src={userPhoto} alt={userName} />

             <DropDown>
          <span onClick= {handleAuth}>Sign out</span>

             </DropDown>
            </UserPhoto>
          </>
        )}
      </Container>
    </div>
  );
}

const DropDown = styled.div`

position: absolute;
display: flex;
justify-content: center;
align-items: center;
background: rgb(19,19,19);
top: 55px;
right:28px;
border:1px solid rgba(151,151,151,0.34);
height: 38px;
width: 110px;
text-align: center;
border-radius: 4px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 11px;
opacity: 0;

span{
letter-spacing: 4px;
cursor: pointer;
font-size:14px;
}

`

const UserPhoto = styled.div`
  margin-right: 30px;

  img {
    height: 74px;
    border-radius: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 350ms ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition: all 300ms ease-in-out;
    }
  }
`;

const Container = styled.nav`
position: fixed;
top: 0
left: 0;
right: 0;
background-color:#090b13;
height:90px;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
z-index:3;
`

const Logo =styled.img`

height: 100%;
padding:14px;
margin-left: 16px;

`
const Login = styled.p`
  margin-right: 25px;
  font-size: 19px;
  letter-spacing: 1.9px;
  border: 1.1px solid #f9f9f9;
  padding: 8.5px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  background-color:rgb(0,0,0,0.6);
  transition: all 0.2s ease ;


&:hover{
  background-color:#f9f9f9;
  color: black;
  border-color: transparent;
}

`;


const Nav = styled.nav`
  display: flex;
  flex: 1;
  margin-left: 15px;

  ul {
    display: flex;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin: 0 10px;
    cursor: pointer;
    img {
      height: 30px;
      padding: 2px;
    }

    span {
      text-decoration: none;
      font-size: 14px;
      color: rgb(249, 249, 249);
      text-transform: uppercase;
      padding: 4px;
      letter-spacing: 1.56px;
      line-height: 1.08;
      position: relative;

      &:before {
        /* display: block; */
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition:all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span::before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;