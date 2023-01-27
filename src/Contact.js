import Formspree from "./Form";
import Social from "./SocialMedia";

function Contact(){

    return (<div>
        <div className="container">
        <h1>Send us a message</h1>
        </div>
        <div className="container">
         <Formspree/>
        </div>

<div>
    <Social/>
</div>


        </div>)
}

export default Contact;