import React from "react";
import "../css/Login_Signup.css";
import logo from "../img/logo_weob.jpg";
import google_logo from "../img/google_logo.png";

const SignUp = () => {
   return (
      <>
         <form class="form-signup" method="POST">
            <input type="hidden" name="csrfmiddlewaretoken"
               value="p5Jg4FfGW0yRiUzGw6XsqXDpmPBaeHKH0EOJLuQcrX3ghHEUttkP7xBFm4QHXpJ1"></input>
            <div class="text-center mb-4">
               <img class="mt-3" src={logo} alt="" width="100" height="100"></img>
               <h1 class="h3 mb-3 font-weight-normal">Login</h1>
            </div>

            <div class="form-label-group">
               <input type="text" id="inputText" class="form-control" placeholder="Username" required autofocus
                  name="username"></input>
               <label for="inputText">Username / Email address</label>
            </div>

            <div class="form-label-group">
               <input type="password" id="inputPassword" class="form-control" placeholder="Password" required
                  name="password1"></input>
               <label for="inputPassword">Password</label>
            </div>

            <button class="btn btn-lg btn-secondary btn-block" type="submit">Login</button>
            <div class="text-center pt-3 p-b-15">
               <span class="txt1">
                  Or login with
         </span>
            </div>
            <br></br>
            <div class="flex-c p-b-20 text-center" >
               {/* <a href="/accounts/facebook/login/" class="login100-social-item">
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
         </a> */}
               <a href="/accounts/google/login/" class="login100-social-item">
                  <img src={google_logo} alt="GOOGLE" width="50" height="50"></img>
               </a>
            </div>
            <div class="text-center p-b-10">
               <span class="txt1">
                  Forgot your password ?</span>
            </div>
            <div class="text-center ">
               <a href="/accounts/password/reset/" class="txt2 hov1">
                  Reset password</a>
            </div>
            <div class="text-center pt-3 p-b-10">
               <span class="txt1">
                  Don't have an account ?</span>
            </div>
            <div class="text-center">
               <div>
                  <a href="/accounts/login/" class="txt2 hov1">
                     Sign Up
            </a>
               </div>
            </div>
         </form>
      </>
   );
};

export default SignUp;