import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
            transition: 'transform 0.3s ease-out',
            left: '10%',
            top: '20%',
          }}
        />
        <div
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`,
            transition: 'transform 0.3s ease-out',
            right: '10%',
            bottom: '20%',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div
          className="mb-8 inline-block"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="inline-block hover:scale-110 transition-transform duration-300">Votre</span>{' '}
            <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text hover:scale-110 transition-transform duration-300">
              Nom
            </span>
          </h1>
        </div>

        <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
          Développeur Full Stack & Designer
        </p>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Passionné par la création d'expériences web modernes et interactives
        </p>

        <div className="flex gap-6 justify-center mb-12">
          <a
            href="https://github.com/votreusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/votreprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="mailto:votre@email.com"
            className="group p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
        >
          Découvrir mon travail
        </button>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-slate-400" />
      </button>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNnptMCAxMGMtMi4yMDkgMC00LTEuNzkxLTQtNHMxLjc5MS00IDQtNCA0IDEuNzkxIDQgNC0xLjc5MSA0LTQgNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
    </section>
  );
}