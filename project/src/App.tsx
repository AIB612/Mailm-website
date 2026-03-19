import { Link } from 'react-router-dom';
import {
  FileText,
  HardHat,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Phone,
  Calendar
} from 'lucide-react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000"
            alt="Engineering consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Ladeinfrastruktur aus einer Hand. Von der Planung bis zum Betrieb.
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              Wir sind Ihr Generalunternehmer für E-Mobilität. Maßgeschneiderte Ladelösungen für Hotels und Unternehmen – ohne Investitionsrisiko.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all font-semibold shadow-lg hover:shadow-xl flex items-center justify-center group">
                Standort-Check anfordern
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-all font-semibold">
                Unsere Projekte
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core USPs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-teal-50 transition-all duration-300 border border-slate-100 hover:border-teal-200 hover:shadow-lg">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                <FileText className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Individuelle Konzepte</h3>
              <p className="text-slate-600 leading-relaxed">
                Jeder Standort ist anders. Wir analysieren Ihre Anschlussleistung und erstellen ein zukunftssicheres Konzept – inklusive Prüfung von kantonalen Fördergeldern.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-teal-50 transition-all duration-300 border border-slate-100 hover:border-teal-200 hover:shadow-lg">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                <HardHat className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Schlüsselfertige Installation</h3>
              <p className="text-slate-600 leading-relaxed">
                Keine Koordination von Subunternehmern nötig. Wir übernehmen das gesamte Projektmanagement, vom Tiefbau bis zur elektrischen Abnahme durch zertifizierte Partner.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-teal-50 transition-all duration-300 border border-slate-100 hover:border-teal-200 hover:shadow-lg">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                <CreditCard className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Automatisierte Abrechnung</h3>
              <p className="text-slate-600 leading-relaxed">
                Wir übernehmen die Rechnungsstellung an Ihre Nutzer. Sie erhalten monatlich Ihre Gutschrift – komplett ohne administrativen Aufwand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ihr Weg zur eigenen Ladeinfrastruktur
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Beratung & Check</h3>
                <p className="text-slate-600 leading-relaxed">
                  Kostenlose Machbarkeitsstudie und Bedarfsanalyse direkt bei Ihnen vor Ort.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Planung & Bau</h3>
                <p className="text-slate-600 leading-relaxed">
                  Professionelle Installation und Netzanschluss. Sauber, schnell und normgerecht.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Betrieb & Service</h3>
                <p className="text-slate-600 leading-relaxed">
                  24/7 Monitoring, proaktive Wartung und automatischer Abrechnungsservice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions/Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Flexible Modelle für Ihren Bedarf
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Purchase Model */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Kauf & Betrieb</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Sie investieren in die Hardware, wir managen den technischen Betrieb und die Software.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Einmalige Investition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Volle Kontrolle über Assets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Service-Paket inklusive</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors font-semibold">
                Mehr erfahren
              </button>
            </div>

            {/* Rental Model - Highlighted */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-8 rounded-2xl border-2 border-teal-500 shadow-xl hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 right-8 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                Empfohlen
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Charging-as-a-Service</h3>
              <p className="text-teal-50 leading-relaxed mb-6">
                Null Investitionskosten. Wir finanzieren, installieren und betreiben die komplette Infrastruktur für Sie.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Keine Anfangsinvestition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Sofort einsatzbereit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Rundum-Sorglos-Paket</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Planbare monatliche Kosten</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition-colors font-semibold shadow-md">
                Jetzt starten
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bereit für Ihre Ladeinfrastruktur?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Vereinbaren Sie jetzt ein kostenloses Erstgespräch mit unseren Experten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all font-semibold shadow-lg hover:shadow-xl flex items-center justify-center group">
              <Calendar className="w-5 h-5 mr-2" />
              Termin vereinbaren
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-all font-semibold flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              +41 XX XXX XX XX
            </button>
          </div>
        </div>
      </section>

      {/* Förderung Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Förderung</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Entdecken Sie kantonale und nationale Subventionen für Ihre Ladeinfrastruktur in der Schweiz.
          </p>
          <Link
            to="/foerderung"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all font-semibold shadow-lg hover:shadow-xl group"
          >
            Förderung entdecken
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/malim.svg" alt="Malim" className="h-10 w-auto" />
                <h3 className="text-white font-bold text-xl">Malim</h3>
              </div>
              <p className="text-sm">
                Ihr Partner für professionelle E-Ladeinfrastruktur in der Schweiz.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Lösungen</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Hotellerie & Gastronomie</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Gewerbe & Flotten</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Immobilien</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Planung & Konzepte</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Installation</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Betrieb & Wartung</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Referenzen</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Kontakt</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 Malim. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-teal-400 transition-colors">Impressum</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-teal-400 transition-colors">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
