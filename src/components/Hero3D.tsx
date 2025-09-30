import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FloatingSphere, RotatingTorus, Particles } from './Scene3D';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero3D() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />

            <FloatingSphere position={[-3, 0, 0]} color="#3b82f6" speed={0.5} />
            <FloatingSphere position={[3, 1, -2]} color="#06b6d4" speed={0.7} />
            <RotatingTorus position={[0, -1, -3]} />
            <Particles />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="inline-block hover:scale-110 transition-transform duration-300">Obinna</span>{' '}
            <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text hover:scale-110 transition-transform duration-300 animate-gradient">
              HOUNGNIBO
            </span>
          </h1>
        </div>

        <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light animate-fade-in-delay-1">
          Chef de projet informatique, Développeur et Passionné d'innovation
        </p>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
          "Salid y Disfrutad"
        </p>

        <div className="flex gap-6 justify-center mb-12 animate-fade-in-delay-3">
          <a
            href="https://github.com/Guezinho69"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-12"
          >
            <Github className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/obinna-houngnibo-3114ba371"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-12"
          >
            <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="mailto:houngniboobinna22012004@gmail.com"
            className="group p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-12"
          >
            <Mail className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 animate-fade-in-delay-4 relative overflow-hidden"
        >
          <span className="relative z-10">Découvrir mon univers</span>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-slate-400" />
      </button>
    </section>
  );
}