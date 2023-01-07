import React from 'react'
import NavForAll from '../NavForAll'
import Header from '../../Component/navbar/Header'
import ContactForm from './ContactForm'
import Footer from '../../Component/footer/Footer'
function ContactUs() {

  function postdata (data){
    fetch('https://react-project-ec784-default-rtdb.firebaseio.com/data.json',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
    })
  }
  return (
    <div>
       <NavForAll/>
       <Header/>
        <ContactForm  onpostdata = {postdata}/>
       <Footer/>
    </div>
  )
}

export default ContactUs
