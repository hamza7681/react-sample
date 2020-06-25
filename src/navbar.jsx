import React from "react";
import styled from "styled-components";
import logo3 from "./logo3.png"

const Nav=styled.nav`
width:100%;
height: 80px;
background-color:rgb(52, 58, 64);
border-bottom: 2px soplid #f1f1f1;
padding: 0 20px;
display: flex;
justify-content: space-between;

.image{
padding: 15px 0;
position:absolute;
top:-80px;
}
`

function Navbar(){
return(
<>
<Nav className="NavBar">
  
    <img src={logo3} alt="" className="image"/>
  

  
</Nav>
</>
)
}

export default Navbar;