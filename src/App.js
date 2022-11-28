import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import About from './Components/About'
function App() {
  return (
    <div className="App">
      <div>

        <Header />
        <About />
        <Projects />
        <Footer />
      </div>

    </div>
  );
}

export default App;
