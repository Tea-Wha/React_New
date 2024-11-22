import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Layout from "./styles/Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/Articles/:id" element={<Article />} />
            <Route path="/profile/:username" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
