
import './App.css';
import './assets/css/style.css'; 
// import img1 from './img/rh.jpg';
import img2 from './components/img2.jpg'
function App () {
  return (
    <div  classname="title">
     <h1> Project X </h1>
     <div className="img">
     <img className="img1" src='./img/rh.jpg' alt="" />
     <img className="img2" src ={img2} alt=""/>
     </div>
     </div>
  );
}

export default App;
