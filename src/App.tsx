import Header from './components/Header';
import Hero3D from './components/Hero3D';
import About3D from './components/About3D';
import Skills3D from './components/Skills3D';
import Projects3D from './components/Projects3D';
import Contact3D from './components/Contact3D';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero3D />
      <About3D />
      <Skills3D />
      <Projects3D />
      <Contact3D />
      <Footer />
    </div>
  );
}

export default App;
