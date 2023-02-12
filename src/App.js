import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app} from "./Firebase"
// import {getDatabase, ref} from "firebase/database";
// import { app } from "./components/firebase/Firebase";
import './App.css';
import LoginPage from './components/loginPage/LoginPage';
import SignUp from './components/signUppage/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar";
import Home from './components/home/Home';

const auth = getAuth(app)
function App() {
const signupUser = () => {
  createUserWithEmailAndPassword(auth, 'aliraza@gmail.com', "password321").then((value) => console.log(value))
}

  return (
   <div className="App">

      <SignUp/> 
      <Routes>

  <Route path="/signup" element={<SignUp/>} />
  {/* <Route path="/" element={<Home/>} /> */}
  </Routes>

   </div>

  );
}

export default App;










// const dp = getDatabase(app)

// function App() {

//   const putData = () =>{
//     set(ref(dp,'users/raza'),{
//       id: 1,
//       name: 'Aliraza',
//       age : '20'
//     })
//   }
