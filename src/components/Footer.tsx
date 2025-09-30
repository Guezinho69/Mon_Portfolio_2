import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-4">
              Portfolio
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Développeur passionné créant des expériences web modernes et interactives.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Accueil', 'À Propos', 'Compétences', 'Projets', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const id = item === 'Accueil' ? 'home' :
                                 item === 'À Propos' ? 'about' :
                                 item === 'Compétences' ? 'skills' :
                                 item === 'Projets' ? 'projects' : 'contact';
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Réseaux</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/votreusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/votreprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:votre@email.com"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              {currentYear} Portfolio. Tous droits réservés.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-2">
              Créé avec <Heart className="w-4 h-4 text-red-500 fill-current" /> en utilisant React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}