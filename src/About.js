import image from './cafe.jpg';
import './App.css';

function About () {
    return (
<div className="center"> 
<h1> We are coffee holists. We roast coffee, prepare coffee, drink coffee. 
    We care about everything - from the quality and origin of the grain to fair access to farmers to coffee technology and barista practice. 
    We believe that thanks to this approach, we will achieve the best taste in every cup of coffee you taste with us. </h1>
<img src={image} className="center" width="800px" height="400px" alt="img" />
</div>
    );

}
export default About;