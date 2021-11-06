import React, { Component } from 'react'; 
import emailjs from 'emailjs-com';

class Contact extends Component {
    render() {
        function sendEmail(event){
            event.preventDefault();
        
            emailjs.sendForm('service_iiv27mk', 'template_qtpg0mf', event.target, 'user_QYBLsZwX1mO2QUvM1Q8pz')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              event.target.reset(); 
          };
        return(
            <div>
                <h1 class="h1 contact">any questions?</h1>
                <p>Feel free to send a message below!</p>
                <form id="contact-form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" className="form-control" name="name"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" id="exampleInputEmail1" className="form-control" aria-describedby="emailHelp" name="email"/>
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" className="form-control" rows="5" name="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )                    
    }
}

export default Contact; 