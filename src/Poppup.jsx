
import React, {  useState } from "react";
import './popup.css';
import emailjs from '@emailjs/browser';


function Demo({isPopup}) {
 

const [ click , isclick] = useState(true);
 const [data , isData] = useState({
  Name:'',
  Mobile:''

 });

  const emaildata = {
    Name:data.Name,
    mobile: data.Mobile
  }

 


const handleSubmit = (e) => {
  e.preventDefault();

  const serviceid = process.env.REACT_APP_Serviceid 
 const templatid =  process.env.REACT_APP_Templatid
 const publickey =  process.env.REACT_APP_Publickey

 const templateparam ={
  from_name: emaildata.Name,
  from_mobile: emaildata.mobile,
  to_name : 'we wizerd',
 }


  emailjs.send(serviceid, templatid, templateparam, publickey)
    .then((response) => {
        console.log('email is send', response);
        
    }, (error) => {
        console.log('email is not send', error);
    });
    isclick(false);
    
};




 if(click === true){
   return(
    <div className="container-p">
   
    <button  className="button-p" onClick={() => isPopup(false)}>X</button>
    <div>
      <div className="text-k">Request a Call Back</div>

      <form  onSubmit={handleSubmit}>
    
      <input className="name-h" type="text" placeholder="Enter Name" name="user_name"  value={data.Name} onChange={(e) => isData(e.target.value)}  required />
      
      
      <input className="name-h" type="phone" placeholder="Enter Mobile" name="user_mobile" value={data.Mobile} onChange={(e) => isData(e.target.value)} required />
      
      <button className="button-k" type="submit">Request a call back </button>
     
      </form>
     
    </div>
 
  </div>


   )
 }else{
 
return (
  
  <div className="container-p">
   
    <button  className="button-p" onClick={() => isPopup(false)}>X</button>
    <div>
      <div className="text-k">Request a Call Back</div>
      <div className="text-r" style={{margin:'30px', padding:'10px'}}>Our Tearm will call you shorty in<br></br> 12-24 hrs <br></br>Can't you wait for call?</div>

      
      
    
      <button className="button-l"  onClick={() => isPopup(false)}>Check another video  </button>
     
   

    </div>
  </div>


  ); 
}  

}

export default Demo;
