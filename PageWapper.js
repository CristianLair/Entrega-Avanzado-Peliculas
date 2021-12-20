import React,{useState, useRef} from "react";
import emailjs from "emailjs-com";
import { Redirect } from "react-router-dom";
import "../src/components/Contact.css"
import "../src/components/CerrarSession.css"

const Result = () =>{
    return(
        <div>
            <p>Data loaded successfully</p>
        <Redirect to = "/signup"  />
        </div>
    )
}


function PageWapper (props){
    const [result,SetResult] = useState(false)
    const form = useRef(); 
    const[isUser,setIsUser] = useState(true)
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9solm08', 'template_k4npkac', e.target, 'user_V3KKPuddQBtFMV2u8yS66')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        SetResult(true)
    };

    const clickSingOut = (event) =>{
        
        console.log("funca")
        localStorage.removeItem("jwt")
        setIsUser (null)
        window.location.reload(false)
    }
    return (
        <div> 
        
      






<header className="ht-header">
  <div className="container">
      <nav className="navbar navbar-default navbar-custom" />
              
              <div className="navbar-header logo">
                  
                  <a href="/"><img className="logo" src="images/logo1.png" alt="" width="119" height="58" /></a> 
              
              <div className="d-flex justify-content-end " > 
              <button onClick={clickSingOut} >
              Sign off
              </button>
              
              </div>
      
              </div>
      
  </div>
</header>


<div className="hero common-hero">
  <div className="container">
      <div className="row">
          <div className="col-md-12">
              <div className="hero-ct">
                  <h1> Welcome to Block Buster</h1>
                  <ul className="breadcumb">
                      
                      <li>  movie listing</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</div>
<div className="page-single movie_list">
  <div className="container">
      <div className="row ipad-width2">
          <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="topbar">
                  <p>Found <span>1,608 movies</span> in total</p>
                  
                  
                  
              </div>
             {props.children}
              
              
           
             
             
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="sidebar">
                  <div className="searh-form">
                      <h4 className="sb-title">Contact for movie</h4>
                      <form className="form-style-1" ref={form} onSubmit={sendEmail}>
                      <div className="form-Contact">
           <div className="container-Contact">
        <div className="formWord">  
                <h2 >Enter your data</h2>
                <span>Full name</span>
                <br />
                <input className="input100" type="text" name="fullName" required />
                <br />
                <span>Matter</span>
                <br />
                <input className="input100" type="text" name="matter" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input className="input100" type="text" name="email" required />
                <br />
              </div>
              <div className="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>
                <div className="row-Contact" > {
                    result ? <Result /> : null
                }
                    <h3> 
                            Thank you for contacting us</h3>
                </div>
                </div>
        </div>
       </div>
                      </form>
                  </div>
                  <div className="ads">
                      <img src="images/uploads/ads1.png" alt="" />
                  </div>
                  <div className="sb-facebook sb-it">
                      <h4 className="sb-title">Shipping all over the country</h4>
                      
                  </div>
                 
              </div>
          </div>
      </div>
  </div>
</div>

<footer className="ht-footer">
  <div className="container">
      <div className="flex-parent-ft">
          <div className="flex-child-ft item1">
               <a href="index-2.html"><img className="logo" src="images/logo1.png" alt="" /></a>
               <p>Encontranos en Resistencia-Chaco<br/> </p>
              
              
          </div>
          <div className="flex-child-ft item2">
              <h4>Siguenos en nuestras redes sociales </h4>
              <ul>
                  <li><a href="https://www.facebook.com/cristian.lair">Facebook</a> <img src="images/FB.svg"></img></li> 
                  
                 
                  <li><a href="https://www.instagram.com/cristianlair">Instagram</a> <img src="images/inst.svg"></img></li>
                  
                 
                  
              </ul>
          </div>
         
          
         
      </div>
  </div>
  
</footer>
</div>
    )
}

export default PageWapper;