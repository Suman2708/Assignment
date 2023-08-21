// import React from 'react';
import './Navbar.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
const Newnav = () => {

    const history=useNavigate();
    const logout = () => {
        
        localStorage.removeItem("signUp");
        window.location.reload();
      };
    
      const deleteAccount = () => { 
        localStorage.clear();
 
        window.location.reload();
        history("/");

      };
  const [show, setShow] = useState(false);
//   const localSignUp = localStorage.getItem('signUp');
  const localEmail = localStorage.getItem('email');
//   const localMobile = localStorage.getItem('mobile');
//   const localName = localStorage.getItem('name');
  useEffect(() => {
    
    if (localEmail) {
      setShow(true);
    }
  }, []);

   const home=()=>{
      if(show){
        history('/homesection')
      }else{
        history('/');
        alert("please login first");
      }
   }

  return (
    <>
      <div className='new_nav'>
        
        <div className='right_content'>
 
       <a href='/'> <p >Sign Up</p></a>  
     <p onClick={home}>    Home </p>
         
   <div onClick={logout}><p > LogOut</p></div>   
    <p  onClick={deleteAccount}>  Delete</p> 
         
        </div>
      </div>
    </>
  );
};

export default Newnav;
