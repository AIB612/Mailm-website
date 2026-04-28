import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Car,
  CheckCircle2,
  CircleDashed,
  Globe2,
  Handshake,
  Leaf,
  Lightbulb,
  MapPinned,
  Phone,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { useEffect } from 'react';
import AboutMalim from './components/AboutMalim';
import Navbar from './components/Navbar';
const businessFields = [
  {
    title: 'Elektromobilität & Ladeinfrastruktur',
    description:
      'Wir entwickeln praxistaugliche Ladeinfrastruktur für Wohn-, Gewerbe- und öffentliche Umfelder – von der Analyse bis zur Umsetzung.',
    points: [
      'Ladeinfrastruktur für Mehrfamilienhäuser und Mietobjekte',
      'Entscheidungsgrundlagen für Verwaltungen und Eigentümerschaften',
      'Betreiber- und Finanzierungsmodelle',
    ],
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Ladeinfrastruktur an einem modernen Standort',
  },
  {
    title: 'Effiziente Mobilität & Firmenmobilität',
    description:
      'Wir optimieren betriebliche Mobilität mit intelligenten Strategien für Pendler-, Flotten- und Sharing-Lösungen.',
    points: [
      'Mobilitätsstrategien für Unternehmen',
      'Car-, Bike- und Ride-Sharing-Konzepte',
      'Richtlinien für nachhaltige Pendler- und Dienstmobilität',
    ],
    icon: Car,
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Team mit moderner Mobilitätsplanung',
  },
  {
    title: 'Urbane Mobilität & Raumqualität',
    description:
      'Wir begleiten Städte und Gemeinden bei der Gestaltung lebenswerter, klimafreundlicher und funktionaler Mobilitätsräume.',
    points: [
      'Begegnungszonen, Verkehrsberuhigung und Entsiegelung',
      'Wirkungsanalysen zu Sicherheit, Klima und Aufenthaltsqualität',
      'Integration von Mikromobilität, ÖV und Fussverkehr',
    ],
    icon: MapPinned,
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Städtischer Mobilitätsraum mit hoher Aufenthaltsqualität',
  },
  {
    title: 'Inklusion, Diversität & Fachkräftesicherung',
    description:
      'Wir stärken die menschliche Dimension der Mobilität durch Beteiligung, Weiterbildung und zukunftsfähige Organisationsentwicklung.',
    points: [
      'Moderation von Stakeholderprozessen',
      'Schulung und Weiterbildung im Mobilitätsbereich',
      'Strategien gegen Fachkräftemangel und für Diversität',
    ],
    icon: Users,
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Workshop und partizipativer Stakeholder-Prozess',
  },
];

const crossTopics = [
  {
    title: 'Nachhaltigkeit & ESG',
    text: 'CO₂-Analysen, Umweltkommunikation und Nachhaltigkeitsberichte für glaubwürdige Transformation.',
    icon: Leaf,
  },
  {
    title: 'Digitalisierung',
    text: 'Datenbasierte Entscheidungsunterstützung, intelligente Plattformen und klare Auswertungen.',
    icon: CircleDashed,
  },
  {
    title: 'Kommunikation & Change Management',
    text: 'Akzeptanz, Beteiligung und tragfähige Prozesse für Veränderungen mit Wirkung.',
    icon: Handshake,
  },
];

const values = [
  {
    title: 'Pragmatisch',
    text: 'Wir liefern Lösungen, die umsetzbar sind – nicht nur schöne Konzepte.',
    icon: CheckCircle2,
  },
  {
    title: 'Kooperativ',
    text: 'Wir moderieren, vernetzen und beziehen die relevanten Akteur:innen aktiv ein.',
    icon: Users,
  },
  {
    title: 'Innovativ',
    text: 'Wir verbinden technische, soziale und planerische Perspektiven zu tragfähigen Lösungen.',
    icon: Lightbulb,
  },
  {
    title: 'Nachhaltig',
    text: 'Wir denken in Wirkung, nicht in Beton.',
    icon: ShieldCheck,
  },
];

const synergies = [
  'Elektromobilität + Firmenmobilität: Lade- und Flottenlösungen für Betriebe',
  'Urbane Mobilität + Inklusion: barrierefreie und sozial gerechte Mobilitätsräume',
  'Effizienz + Digitalisierung: datengestützte Verkehrs- und Mobilitätsoptimierung',
  'Diversität + Ausbildung: Qualifizierung für neue Mobilitätsberufe',
];

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'malim-organization-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Malim',
      url: 'https://www.malim.online/',
      logo: 'https://www.malim.online/malim.svg',
      description:
        'Schweizer Beratungsunternehmen für nachhaltige Mobilität, Ladeinfrastruktur und urbane Transformation. Wir unterstützen Gemeinden, Unternehmen und Institutionen bei Fördercheck, Planung und Umsetzung von Mobilitätsprojekten.',
      areaServed: {
        '@type': 'Country',
        name: 'Switzerland',
      },
      knowsAbout: [
        'Ladeinfrastruktur',
        'Förderung Elektromobilität',
        'Firmenmobilität',
        'Urbane Mobilität',
        'Nachhaltige Mobilität',
        'Verkehrsberuhigung',
        'Stakeholder-Prozesse',
      ],
      serviceType: [
        'Ladeinfrastruktur Beratung',
        'Fördercheck Schweiz',
        'Mobilitätsstrategie',
        'Urbane Transformation',
      ],
    });
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('malim-organization-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden pt-24 min-h-[78vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.16),transparent_28%),linear-gradient(180deg,#f8fafc_0%,#ffffff_52%,#f8fafc_100%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 mb-6">
                Ladeinfrastruktur, Förderung und nachhaltige Mobilität
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
                Wir verbinden Fördercheck, Technik, Raum und Mensch.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
                Strategien und Umsetzungen für Ladeinfrastruktur, Förderungen und nachhaltige Mobilität in Gemeinden, Unternehmen und Institutionen der Schweiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#geschaeftsfelder"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all font-semibold shadow-lg shadow-teal-600/20"
                >
                  Leistungen entdecken
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link
                  to="/foerderung"
                  className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-800 rounded-xl hover:bg-white transition-all font-semibold"
                >
                  Förderung prüfen
                </Link>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl max-w-lg lg:ml-auto">
              <img
                src="/og/foerderung-map-user.png"
                alt="Förderkarte für Ladeinfrastruktur in der Schweiz"
                className="h-72 w-full object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe2 className="w-8 h-8 text-teal-600 flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-slate-900">Wofür Malim steht</h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Praxisnahe Lösungen für Ladeinfrastruktur, Firmenmobilität, urbane Raumqualität und inklusive Transformationsprozesse.
                  </p>
                  <p>
                    Wir begleiten Projekte von der Strategie über Beteiligung und Kommunikation bis zur Umsetzung.
                  </p>
                  <p className="text-slate-900 font-medium">
                    Für Gemeinden, Unternehmen und Institutionen in der Schweiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="geschaeftsfelder" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 mb-3">Geschäftsfelder</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vier Felder, ein Ziel: Mobilität mit Wirkung</h2>
            <p className="text-lg text-slate-600">
              Unsere Leistungen reichen von Ladeinfrastruktur und Firmenmobilität bis zu urbaner Raumqualität und inklusiven Beteiligungsprozessen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {businessFields.map(({ title, description, points, icon: Icon, image, imageAlt }) => (
              <div key={title} className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                <img src={image} alt={imageAlt} className="h-60 w-full object-cover" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold leading-tight whitespace-nowrap overflow-hidden text-ellipsis">{title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
                  <ul className="space-y-3">
                    {points.map((point) => (
                      <li key={point} className="flex items-start text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 mb-3">Querschnittsthemen</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Transformation braucht mehr als Technik</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Wir denken Mobilität als Zusammenspiel von Infrastruktur, Organisation, Raumqualität und gesellschaftlicher Akzeptanz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-12 border-t border-slate-200 pt-10">
            {crossTopics.map(({ title, text, icon: Icon }) => (
              <div key={title} className="min-w-0">
                <div className="flex items-center gap-3 mb-5 min-w-0">
                  <Icon className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <h3 className="text-xl font-semibold leading-snug">{title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#041412] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300 mb-3">Synergien</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">Wir arbeiten vernetzt statt in Silos</h2>
              <div className="rounded-3xl overflow-hidden border border-white/10 mb-5">
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
                  alt="Intermodale Mobilität im urbanen Kontext"
                  className="h-56 w-full object-cover opacity-90"
                />
              </div>
              <div className="space-y-3">
                {synergies.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300 mb-3">Werte & Arbeitsweise</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">So arbeiten wir</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map(({ title, text, icon: Icon }) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center gap-3 mb-2 min-w-0">
                      <Icon className="w-6 h-6 text-teal-300 flex-shrink-0" />
                      <h3 className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{title}</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-slate-50 overflow-hidden">
            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-0 items-stretch">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 mb-3">Förder-Check</p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Förderungen für Ladeinfrastruktur schnell prüfen</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Nutzen Sie unseren Förder-Check für eine erste Orientierung zu kantonalen und nationalen Programmen in der Schweiz – als praktischen Einstieg in Ihr Projekt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/foerderung"
                    className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all font-semibold shadow-lg shadow-teal-600/20"
                  >
                    Zum Förder-Check
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-800 rounded-xl hover:bg-white transition-all font-semibold"
                  >
                    Projekt besprechen
                  </a>
                </div>
              </div>
              <div className="relative min-h-[320px] lg:min-h-full bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1400&q=80"
                  alt="Elektroauto an moderner Ladeinfrastruktur"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                alt="Beratung und Projektbesprechung"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 mb-3">Kontakt</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Lassen Sie uns Ihr Mobilitätsprojekt konkret machen</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Ob Ladeinfrastruktur, Firmenmobilität oder urbane Transformationsprozesse: Wir unterstützen Sie vom ersten Konzept bis zur Umsetzung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://calendly.com/markus-malim/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-semibold"
                >
                  Erstgespräch vereinbaren
                </a>
                <a
                  href="tel:+41000000000"
                  className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-800 rounded-xl hover:bg-white transition-all font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutMalim />

      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <img src="/malim.svg" alt="Malim" className="h-10 w-auto" />
              <span className="text-white font-bold text-xl">Malim</span>
            </div>
            <p className="text-sm max-w-xl">
              Nachhaltige, inklusive und intelligente Mobilität für Gemeinden, Unternehmen und Institutionen.
            </p>
          </div>
          <div className="text-sm text-slate-500">© 2026 Malim. Alle Rechte vorbehalten.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
