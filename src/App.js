import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Qna from './Components/Qna';
import Question_page from './Components/Question_page';
import GiveAnswer from './Components/GiveAnswer';
import Comments_for_an_answer from './Components/Comments_for_an_answer';
import Write_a_comment from './Components/Write_a_comment';
import Opportunities from './Components/Opportunities';
import Blogs from './Components/Blogs';
import AboutUs from './Components/AboutUs';
import Profile from './Components/Profile';
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/"  element={ <Qna />} />           
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/opportunities" element={ <Opportunities />} />
          <Route exact path="/question" element={ <Question_page/>} />
          <Route exact path="/giveanswer" element={ <GiveAnswer/>} />
          <Route exact path="/question/postComment" element={ <Question_page postComment={<Write_a_comment/>}/>} />
          <Route exact path="/question/viewComments" element={ <Question_page viewComments={<Comments_for_an_answer/>} />}/>
          <Route exact path="/myprofile" element={<Profile/>}/>
        </Routes>
      </Router>
      {/* <Qna /> */}
      {/* <Question_page/>  */}
      {/* <GiveAnswer/> */}
      {/* <Write_a_comment/> */}
      {/* <Comments_for_an_answer/> */}
    </>
  );
}

export default App;

