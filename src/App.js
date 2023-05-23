import './App.css';
import { Navbar } from './component/Navbar';
import { BrowserRouter, Route } from "react-router-dom";
import Contact from './pages/contact/Contact.js'
import Skills from './pages/skills/Skills.js'
import Home from './pages/home/Home.js'
import Project from './pages/project/Project.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
