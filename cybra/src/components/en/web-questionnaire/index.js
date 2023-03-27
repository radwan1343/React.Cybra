import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './../footer';
import { } from './style.css'


const WebQue = () => {
    return (
     <div className="scratch-1">
         <div className="container">
<br/>
        <h5 className="scratch-1-title">
        A brief about your business:

        </h5>
        <textarea
         placeholder=""
         
         rows={3}
         cols={3}
         />
         <div className="question-list">

          <p>Have you registered the domain name for your website?</p>
          <form className="form">

  <input className="input1" type="radio" id="male" name="gender"/>
  <label for="male">Yes</label>
  <input className="input1" type="radio" id="female" name="gender" />
  <label for="female">No</label>
          </form>
         <br/>
         <p>Do you have a hosting for this website already?
</p>
<form className="form">
  <input className="input1" type="radio" id="male" name="gender" />
  <label for="male">Yes</label>
  <input className="input1"  type="radio" id="female" name="gender" />
  <label for="female">No</label>
  </form>
         <br/>
         <p>Does your company have established branding? </p>
         <form className="form">

  <input className="input1" type="radio" id="male" name="gender" />
  <label for="male">Yes</label>
  <input className="input1" type="radio" id="female" name="gender" />
  <label for="female">No</label>
  <input className="input1" type="radio" id="femle" name="gender" />
  <label for="female">I only have a logo</label>
  </form>

         <br/>
         <p>What color scheme do you have in mind?</p>
         <input className="input" type="text" id="" name="" placeholder=""/>
         <br/>
         
        
         <br/>
         <br/>
         <br/>
         <p>Any current websites that you like the look and feel of? </p>
         <input className="input" type="text" id="" name="" placeholder="https://example1.com"/>
         <br/>

         <input className="input" type="text" id="" name="" placeholder="https://example2.com"/>
         <br/>

         <input className="input" type="text" id="" name="" placeholder="https://example3.com"/>
         <br/>
         <p>Can you give us a summarized start to finish flow write up and 
what you’re planning to accomplish with your website?</p>
        <textarea
         placeholder=""
         
         rows={3}
         cols={3}
         />
          <br/>
          <p>Any current websites that you like the look and feel of? </p>
         <input className="input" type="text" id="" name="" placeholder="#1"/>
         <br/>

         <input className="input" type="text" id="" name="" placeholder="#2"/>
         <br/>

         <input className="input" type="text" id="" name="" placeholder="#3"/>
         <br/>
         

       <input className="input" type="text" id="" name="" placeholder="#4"/>
<br/>

       <input className="input" type="text" id="" name="" placeholder="#5"/>
<br/>

       <input className="input" type="text" id="" name="" placeholder="#6"/>
<br/>

       <input className="input" type="text" id="" name="" placeholder="#7"/>
       <br/>
       <p>Do you require eCommerce capabilities?
</p>
          <form className="form">

  <input className="input1" type="radio" id="male" name="gender"/>
  <label for="male">Yes</label>
  <input className="input1" type="radio" id="female" name="gender" />
  <label for="female">No</label>
          </form>
          <br/>
         <p>Who will provide content for the new website?</p>
         <input className="input" type="text" id="" name="" placeholder=""/>
         <br/>
         <p>Who will provide content for the new website?</p>
         <input className="budget" type="text" id="" name="" placeholder="$min."/><span className="span1">_</span> <input className="budget" type="text" id="" name="" placeholder="$max."/>

         <br/>
         <p>What timeline are you looking at for delivery?</p>
         <input className="input" type="text" id="" name="" placeholder=""/>
         <br/>
         <p>Do you want us to handle maintenance?
</p>
          <form className="form">

  <input className="input1" type="radio" id="male" name="gender"/>
  <label for="male">Yes</label>
  <input className="input1" type="radio" id="female" name="gender" />
  <label for="female">No</label>
          </form>
          <br/>
          <div className="row">
                 <div className="col-md-12">

          <button className="send" type="submit">Send</button>
                 </div>
          </div>
          <br/>
          
         </div>
         </div>
       
            <Footer />
    </div>
    )
}
export default WebQue;