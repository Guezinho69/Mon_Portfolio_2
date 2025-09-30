import { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function SkillCube({ position, color, label, index }: { position: [number, number, number], color: string, label: string, index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 + index;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 + index;

      const scale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={hovered ? 0.5 : 0.2}
      />
    </mesh>
  );
}

function SkillsScene() {
  const skills = [
    { label: 'React', color: '#61dafb', position: [-3, 2, 0] as [number, number, number] },
    { label: 'Three.js', color: '#049ef4', position: [0, 2, 0] as [number, number, number] },
    { label: 'TypeScript', color: '#3178c6', position: [3, 2, 0] as [number, number, number] },
    { label: 'Node.js', color: '#68a063', position: [-3, 0, 0] as [number, number, number] },
    { label: 'Next.js', color: '#ffffff', position: [0, 0, 0] as [number, number, number] },
    { label: 'Python', color: '#ffd43b', position: [3, 0, 0] as [number, number, number] },
    { label: 'Docker', color: '#2496ed', position: [-3, -2, 0] as [number, number, number] },
    { label: 'Git', color: '#f05032', position: [0, -2, 0] as [number, number, number] },
    { label: 'Tailwind', color: '#06b6d4', position: [3, -2, 0] as [number, number, number] },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#06b6d4" intensity={0.5} />

      {skills.map((skill, index) => (
        <SkillCube
          key={skill.label}
          position={skill.position}
          color={skill.color}
          label={skill.label}
          index={index}
        />
      ))}

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        maxDistance={12}
        minDistance={6}
      />
    </>
  );
}

export default function Skills3D() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'API REST', 'Docker'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Outils & Design',
      skills: ['Git', 'Figma', 'Blender', 'WebGL', 'GSAP'],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 mx-auto mb-6" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Technologies et outils que je maîtrise pour créer des expériences immersives
          </p>
        </div>

        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 shadow-2xl" style={{ height: '500px' }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
              <Suspense fallback={null}>
                <SkillsScene />
              </Suspense>
            </Canvas>
          </div>
          <p className="text-center text-slate-400 mt-4">
            Faites glisser pour explorer les technologies en 3D
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} text-transparent bg-clip-text mb-6`}>
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-3 text-slate-300 group-hover:text-white transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}