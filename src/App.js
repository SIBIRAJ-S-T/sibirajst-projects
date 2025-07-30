import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>SIBIRAJ S T</h1>
        <p>Final Year CS Student | Developer</p>
        <p>Passionate about building high-performance apps and websites.</p>
        
        <div className="links">
          <a href="https://github.com/SIBIRAJ-S-T?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
          <Link to="/projects">Vercel Projects</Link>
        </div>

        <p>Email: sibirajstv1@gmail.com</p>
        <p>City: Coimbatore</p>
      </div>
    </div>
  );
}

function Projects() {
  const projectList = [
    { title: "AI Live Webpage Maker", url: "https://makemysite-virid.vercel.app/" },
    { title: "Live calling app", url: "https://live-calling-app.vercel.app/" },
    { title: "Gsheet DB", url: "https://multidevice.vercel.app/" },
    { title: "Games", url: "https://sibirajst-games.vercel.app/" },
    { title: "CGPA calculator", url: "https://cgpacalculator-6th.vercel.app/" },
    { title: "Multiplayer Snake Game", url: "https://snake-fours.vercel.app/" },
    { title: "Mini OLX", url: "https://zonex-ten.vercel.app/" },
    { title: "Web Store", url: "https://skcetappstore.vercel.app/" },
  ];

  return (
    <div className="container">
      <div className="card">
        <h2>SIBIRAJ S T<br></br>Vercel Projects</h2>
        <ul>
          {projectList.map((proj, index) => (
            <li key={index}>
              <a href={proj.url} target="_blank" rel="noreferrer">
                {proj.title}
              </a>
            </li>
          ))}
        </ul>
        <Link to="/" className="back">← Back to Home</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
