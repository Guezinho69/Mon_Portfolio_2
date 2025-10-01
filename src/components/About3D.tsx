import { useState, useEffect } from 'react';
import { Code2, Palette, Rocket, Award, Sparkles, Zap } from 'lucide-react';

export default function About3D() {
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
      title: 'Développement Web et mobile',
      description: 'Création de solutions web et mobiles efficaces',
    },
    {
      icon: Palette,
      title: 'Design Interactif',
      description: 'Interfaces modernes avec animations fluides et effets visuels',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimisation poussée pour des applications rapides et réactives',
    },
    {
      icon: Award,
      title: 'Gestion de projet',
      description: 'Organisation efficiente afin de mener a bien des projets',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Veille technologique et exploration de nouvelles solutions',
    },
    {
      icon: Zap,
      title: 'Réactivité',
      description: 'Interfaces adaptatives et expériences multi-plateformes',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl bottom-20 right-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            À Propos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 mx-auto mb-6" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionné de technologies et d'innovation, je suis toujours prêt à apprendre et à travailler sur des projets stimulants.
            Mes domaines d'expertise :
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 h-full">
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl" />

          <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-800">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
                  3+
                </div>
                <div className="text-slate-400 group-hover:text-slate-300 transition-colors">Années d'expérience</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
                  30+
                </div>
                <div className="text-slate-400 group-hover:text-slate-300 transition-colors">Projets complétés</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <div className="text-slate-400 group-hover:text-slate-300 transition-colors">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}