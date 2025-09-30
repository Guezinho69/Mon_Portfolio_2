import { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ExternalLink, Github } from 'lucide-react';
import * as THREE from 'three';

function ProjectCard3D({ rotationSpeed }: { rotationSpeed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 2, 0.1]} />
      <meshStandardMaterial
        color="#3b82f6"
        metalness={0.9}
        roughness={0.1}
        emissive="#60a5fa"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function Projects3D() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Moodly',
      description: 'Application de mood tracking destinées aux entreprises',
      image: '/images/moodly.png',
      tags: ['React Native', 'Express js', 'Mongo db', 'REST API'],
      github: 'https://github.com/Guezinho69/Moodly"',
      demo: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'LINGUAXPLORE',
      description: 'Jeu en réalité virtuelle pour l\'apprentissage des langues, V1 réalisée sur Unreal Engine',
      image: '/images/LXP.png',
      tags: ['Unreal Engine', 'Blueprint', 'Blender'],
      github: 'https://mega.nz/file/2JMmyRAY',
      demo: 'https://example.com',
      color: 'from-purple-500 to-pink-500',
    },

    {
      title: 'Train Your Lawyer',
      description: 'Plateforme d\'E-learning destinée aux étudiants en droit (Benin)',
      image: '/images/tyl.png',
      tags: ['Vue js', 'Nest js', 'MySQL'],
      github: 'https://github.com/heritier06/Train-your-Lawyer-Web',
      demo: 'https://example.com',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Obibet',
      description: 'App mobile de paris sportfs',
      image: '/images/ChatGPT Image 30 sept. 2025, 19_01_34.png',
      tags: ['React Native', 'Express js', 'Mongodb', 'Node.js'],
      github: 'https://github.com/Guezinho69/Obibet',
      demo: 'https://example.com',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl top-20 left-10 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl bottom-20 right-10 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 mx-auto mb-6" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Une sélection de mes créations les plus innovantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 z-10">
                    <Canvas>
                      <Suspense fallback={null}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <ProjectCard3D rotationSpeed={0.3 + index * 0.1} />
                      </Suspense>
                    </Canvas>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredIndex === index ? 'opacity-30 scale-110' : 'opacity-50'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600 hover:border-blue-400 hover:text-blue-400 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50 text-white rounded-lg transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>

                {hoveredIndex === index && (
                  <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl pointer-events-none animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}