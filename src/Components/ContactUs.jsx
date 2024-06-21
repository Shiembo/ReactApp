import React from "react"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export default function ContactUs (){

    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')


return(
    <div>
    
      <br></br>
      <br></br>


     <form action="" class="reg-form "style={{ textAlign: 'center' }}>
     <button type="button"style={{ textAlign: 'center' }} class="btn btn-warning p-1">Users Registration</button>
     <br></br>
     <br></br>



     username : <input type='Text'username='required'placeholder=' username ! '></input>
      <br></br>
      <br></br>
      password : <input type='Text'username='required'placeholder=' password ! '></input>
      <br></br>
      <br></br>

      <button class='btn btn-primary' type="submit">Register</button>

     </form>


      
      </div>

)

}