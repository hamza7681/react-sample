import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import MapIcon from '@material-ui/icons/Map';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer(){
return(
<>
<div className="container-fluid" style={{backgroundColor: 'rgb(52, 58, 64)'}}>
  
  <br/><br/>
  <div className="row">
    <div className="col-lg-7"><br/><br/><h1 style={{color: 'white', fontWeight:'bold'}}>Our Team:</h1>
      <div className="row">
        <div className="col-lg-6">
        <br/><br/>
                        <h3 style={{color: 'orangered'}}>Talha Altaf</h3>
                        <h6 style={{color: 'rgb(155, 155, 155)'}}>Front End Developer</h6>
                        <br/>
                        <h3 style={{color: 'orangered'}}>Hamza Siddique</h3>
                        <h6 style={{color: 'rgb(155, 155, 155)'}}>Front End Developer</h6>
                        <br/>
                        <h3 style={{color: 'orangered'}}>Ibrahim Iqbal</h3>
                        <h6 style={{color: 'rgb(155, 155, 155)'}}>Front End Developer</h6>
        </div>
        <div className="col-lg-6">
        <br/>
                        <h3 style={{color: 'orangered', marginTop:'4%'}}>Muaz Altaf</h3>
                        <h6 style={{color: 'rgb(155, 155, 155)'}}>Auto-Cad Expert</h6>
                        <br/>
                        <h3 style={{color: 'orangered'}}>Awais Raza</h3>
                        <h6 style={{color: 'rgb(155, 155, 155)'}}>Adobe Illustrator Expert</h6>
        </div>
      </div>
    </div>



<div className="col-lg-1"></div>



    <div className="col-lg-4">
<br/><br/>
    <h1 style={{color: 'white', fontWeight:'bold'}}>Contact Us:</h1>
                        <br/><br/>
                        <span className="icon"><MailIcon/> thdevelopers@gmail.com</span>
                        <br/><br/>
                        <span className="icon"><PhoneIcon/> +923117110211</span>
                        <br/><br/>
                        <span className="icon"><MapIcon/> Lahore, Pakistan</span>



    </div>
  </div>
  <br/><br/>
  </div>



<div className="Copy">
<CopyrightIcon/> TH-Developers, 2020
</div>


</>
);
}

export default Footer;