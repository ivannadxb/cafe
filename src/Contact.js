import image from './barista.jpg';
import './App.css';

function Contact () {
    return (
        <div className="center"> 
        <h1> Enjoy the best taste and aroma in every cup of coffee with us. <br></br> Make an order Online: <br></br>Phone: +971569979007</h1>
        
<img src={image} className="center" width="700px" height="400px" alt="img" />

        </div>
            );
    
    }

export default Contact;