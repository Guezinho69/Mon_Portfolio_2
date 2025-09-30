import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

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
      title: 'Application E-commerce',
      description: 'Plateforme de vente en ligne complète avec panier, paiement et gestion des commandes',
      image: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Interface de visualisation de données en temps réel avec graphiques interactifs',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'TypeScript', 'D3.js', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Portfolio 3D',
      description: 'Site portfolio interactif avec animations 3D et effets visuels immersifs',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Three.js', 'GSAP', 'WebGL'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Application Mobile',
      description: 'Application de gestion de tâches avec synchronisation cloud et notifications',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Redux', 'Push Notifications'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'API REST',
      description: 'API robuste et scalable avec authentification JWT et documentation complète',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'Plateforme SaaS',
      description: 'Solution SaaS complète avec système d\'abonnement et tableau de bord',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Supabase', 'Stripe', 'Vercel'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-blue-600 to-violet-600',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 left-10" />
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl bottom-20 right-10" />
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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Une sélection de mes réalisations récentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
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
                      className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600"
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
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors group/link"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50 text-white rounded-lg transition-all group/link"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>

              {activeProject === index && (
                <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}