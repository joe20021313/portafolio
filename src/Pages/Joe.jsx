import "../App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import mainBike from '../assets/proxy-image-Photoroom.jpeg';

function Joe() {
  return (
    <div style={{ 
      paddingTop: "2rem", 
      backgroundImage: `url(${mainBike})`, // Use backticks and ${} for string interpolation
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed' ,
      height: '100vh',
    }}>
     
      <h1 style={{ color: "white", textAlign: "center" }}>dsds</h1>
    </div>
  );
}

export default Joe;
