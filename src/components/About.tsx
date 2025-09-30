import { useState, useEffect } from 'react';
import { Code2, Palette, Rocket, Award } from 'lucide-react';

export default function About() {
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

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code2,
      title: 'Développement',
      description: 'Création d\'applications web performantes avec les technologies modernes',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Interfaces utilisateur élégantes et expériences intuitives',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimisation et déploiement de solutions scalables',
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Code propre, testé et maintenable',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            À Propos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Développeur passionné avec plusieurs années d'expérience dans la création
            de solutions web innovantes. Je transforme des idées en expériences digitales
            exceptionnelles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-block p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
                5+
              </div>
              <div className="text-slate-400">Années d'expérience</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-slate-400">Projets complétés</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-slate-400">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}