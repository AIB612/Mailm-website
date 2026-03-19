import { useState } from 'react';
import SwissMap from '../components/SwissMap';
import InfoPanel from '../components/InfoPanel';
import PostalSearch from '../components/PostalSearch';
import ThemeToggle from '../components/ThemeToggle';
import Navbar from '../components/Navbar';
import { CantonSubsidy } from '../lib/data/cantons';

export default function FoerderungPage() {
  const [selectedCanton, setSelectedCanton] = useState<CantonSubsidy | null>(null);
  const [zoomToCanton, setZoomToCanton] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDark ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      <Navbar />

      {/* Content - pt-20 to account for fixed navbar */}
      <main className="flex-1 pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className={`text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>Förderung</h1>
              <p className={`text-lg max-w-2xl ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Entdecken Sie kantonale und nationale Subventionen für Ihre Ladeinfrastruktur in der Schweiz.
              </p>
            </div>
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          </div>

          <div className="mb-6">
            <PostalSearch
              locale="de"
              onSearch={(_, canton) => {
                setSelectedCanton(canton);
                if (canton) setZoomToCanton(canton.id);
              }}
              isDark={isDark}
            />
          </div>

          <div
            className={`relative rounded-2xl overflow-hidden border transition-colors duration-300 ${
              isDark ? 'border-slate-800' : 'border-slate-200 shadow-lg'
            }`}
            style={{ height: '70vh', minHeight: '500px' }}
          >
            <SwissMap
              onSelectCanton={setSelectedCanton}
              selectedCanton={selectedCanton}
              locale="de"
              zoomToCanton={zoomToCanton}
              isDark={isDark}
            />
            <InfoPanel
              canton={selectedCanton}
              onClose={() => setSelectedCanton(null)}
              locale="de"
              isDark={isDark}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`border-t py-6 transition-colors duration-300 ${
        isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm ${
          isDark ? 'text-slate-500' : 'text-slate-400'
        }`}>
          &copy; 2026 Malim. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}
