import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Leistungen', href: '/#geschaeftsfelder' },
  { label: 'Förderung', href: '/foerderung' },
  { label: 'Über uns', href: '/#kontakt' },
  { label: 'Kontakt', href: '/#kontakt' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
            <img src="/malim.svg" alt="Malim" className="h-8 w-auto" />
            <span className="text-2xl font-bold text-slate-900">Malim</span>
          </Link>

          <div className="hidden lg:flex items-center flex-1 ml-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((item) =>
                item.href === '/foerderung' ? (
                  <Link
                    key={item.label}
                    to="/foerderung"
                    className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://calendly.com/markus-malim/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-sm hover:shadow-md"
            >
              Erstgespräch
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((item) =>
              item.href === '/foerderung' ? (
                <Link
                  key={item.label}
                  to="/foerderung"
                  className="block py-2 text-slate-700 hover:text-teal-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-slate-700 hover:text-teal-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
            <div className="pt-4">
              <a
                href="https://calendly.com/markus-malim/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-teal-600 text-white rounded-lg text-center hover:bg-teal-700"
              >
                Erstgespräch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
