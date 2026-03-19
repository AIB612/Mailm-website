import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
            <img src="/malim.svg" alt="Malim" className="h-8 w-auto" />
            <span className="text-2xl font-bold text-slate-900">Malim</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Lösungen Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-slate-700 hover:text-teal-600 transition-colors font-medium py-2">
                <span>Lösungen</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-slate-100" style={{paddingTop: '8px'}}>
                  <div className="absolute -top-2 left-0 right-0 h-2" />
                  <div className="py-2">
                    <a href="#" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-teal-600 transition-colors">Hotellerie & Gastronomie</a>
                    <a href="#" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-teal-600 transition-colors">Gewerbe & Flotten</a>
                    <a href="#" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-teal-600 transition-colors">Wohnimmobilien</a>
                    <a href="#" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-teal-600 transition-colors">Behörden & Institutionen</a>
                  </div>
                </div>
              )}
            </div>

            {/* Leistungen Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-slate-700 hover:text-teal-600 transition-colors font-medium py-2">
                <span>Leistungen</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-slate-100" style={{paddingTop: '8px'}}>
                  <div className="absolute -top-2 left-0 right-0 h-2" />
                  <div className="py-2">
                    <a href="#" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-teal-600 transition-colors">Planung & Konzepte</a>
                    <a href="#" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-teal-600 transition-colors">Installation</a>
                    <a href="#" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-teal-600 transition-colors">Betrieb & Wartung</a>
                  </div>
                </div>
              )}
            </div>

            <Link to="/foerderung" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
              Förderung
            </Link>
            <a href="#" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">Über uns</a>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-5 py-2.5 text-slate-700 hover:text-teal-600 font-medium transition-colors">Kontakt</button>
            <a
              href="https://calendly.com/markus-malim/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-sm hover:shadow-md"
            >
              Booking
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-2">
              <p className="font-semibold text-slate-900 text-sm">Lösungen</p>
              <a href="#" className="block pl-4 py-2 text-slate-600 hover:text-teal-600">Hotellerie & Gastronomie</a>
              <a href="#" className="block pl-4 py-2 text-slate-600 hover:text-teal-600">Gewerbe & Flotten</a>
              <a href="#" className="block pl-4 py-2 text-slate-600 hover:text-teal-600">Wohnimmobilien</a>
              <a href="#" className="block pl-4 py-2 text-slate-600 hover:text-teal-600">Behörden & Institutionen</a>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-900 text-sm">Leistungen</p>
              <a href="#" className="block pl-4 py-2 text-slate-600 hover:text-teal-600">Planung & Konzepte</a>
              <a href="#" className="block pl-4 py-2 text-slate-600 hover:text-teal-600">Installation</a>
              <a href="#" className="block pl-4 py-2 text-slate-600 hover:text-teal-600">Betrieb & Wartung</a>
            </div>
            <Link to="/foerderung" className="block py-2 text-slate-700 hover:text-teal-600 font-medium">Förderung</Link>
            <a href="#" className="block py-2 text-slate-700 hover:text-teal-600 font-medium">Über uns</a>
            <div className="pt-4 space-y-3">
              <button className="w-full py-3 text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50">Kontakt</button>
              <a
                href="https://calendly.com/markus-malim/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-teal-600 text-white rounded-lg text-center hover:bg-teal-700"
              >
                Booking
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
