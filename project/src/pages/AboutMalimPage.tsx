import { useEffect } from 'react';
import { ArrowRight, Building2, CheckCircle2, Compass, Handshake, MapPinned } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PAGE_TITLE = 'Über Malim | Beratung für Ladeinfrastruktur und Mobilität in der Schweiz';
const PAGE_DESCRIPTION =
  'Malim ist ein Schweizer Beratungsunternehmen für Ladeinfrastruktur, Förderung und nachhaltige Mobilität. Erfahren Sie mehr über Arbeitsweise, Schwerpunkte und Zielgruppen.';
const PAGE_URL = 'https://www.malim.online/ueber-malim';

export default function AboutMalimPage() {
  useEffect(() => {
    document.title = PAGE_TITLE;

    const upsertMeta = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (!el) {
        el = document.createElement(selector.startsWith('link') ? 'link' : 'meta') as
          | HTMLMetaElement
          | HTMLLinkElement;
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value));
    };

    upsertMeta('meta[name="description"]', { name: 'description', content: PAGE_DESCRIPTION });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: PAGE_TITLE });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: PAGE_DESCRIPTION });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: PAGE_URL });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: PAGE_TITLE });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: PAGE_DESCRIPTION });
    upsertMeta('link[rel="canonical"]', { rel: 'canonical', href: PAGE_URL });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="pt-28 pb-20">
        <section className="pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-0">
                <div className="p-8 sm:p-10 lg:p-14">
                  <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 mb-6">
                    <Building2 className="w-4 h-4" />
                    Über Malim
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                    Beratung für Ladeinfrastruktur, Förderung und nachhaltige Mobilität in der Schweiz
                  </h1>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                    Malim begleitet Gemeinden, Unternehmen, Immobilieneigentümer und Institutionen bei der Planung,
                    Förderabklärung und Umsetzung zukunftsfähiger Mobilitätsprojekte.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">Ladeinfrastruktur</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">Fördercheck Schweiz</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">Firmenmobilität</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">Urbane Mobilität</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-slate-900 p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-center">
                  <p className="text-sm uppercase tracking-[0.2em] text-teal-100/80 mb-3">Wofür wir stehen</p>
                  <div className="space-y-4 text-slate-100/90 leading-relaxed">
                    <p>Wir verbinden Strategie, Förderung, Technik und Umsetzbarkeit zu klaren Entscheidungen.</p>
                    <p>Unser Fokus liegt auf Projekten mit echter Wirkung – pragmatisch, kooperativ und realistisch.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <Compass className="w-8 h-8 text-teal-600 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Schwerpunkte</h2>
              <p className="text-slate-600 leading-relaxed">
                Ladeinfrastruktur, Förderprogramme, Firmenmobilität, urbane Mobilität und Transformationsprozesse.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <Handshake className="w-8 h-8 text-teal-600 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Arbeitsweise</h2>
              <p className="text-slate-600 leading-relaxed">
                Wir arbeiten pragmatisch, kooperativ und umsetzungsorientiert – von der ersten Einordnung bis zur Realisierung.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <MapPinned className="w-8 h-8 text-teal-600 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Zielgruppen</h2>
              <p className="text-slate-600 leading-relaxed">
                Gemeinden, Unternehmen, Eigentümerschaften, Verwaltungen und Institutionen in der ganzen Schweiz.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 lg:p-12 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Was Malim konkret unterstützt</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  'Fördercheck für Ladeinfrastruktur in der Schweiz',
                  'Projektklärung für Mehrfamilienhäuser, Unternehmen und öffentliche Standorte',
                  'Strategien für Firmenmobilität und Flottenentwicklung',
                  'Einordnung von Standort, Bedarf und Ausbaupfaden',
                  'Begleitung von Beteiligungs- und Abstimmungsprozessen',
                  'Verbindung von Mobilitätszielen mit realistischen Umsetzungsschritten',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] bg-slate-950 text-white p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-teal-300 mb-3">Nächster Schritt</p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">Sie möchten Ihr Projekt strukturieren oder Förderpotenziale prüfen?</h2>
                <p className="text-slate-300 max-w-2xl">
                  Nutzen Sie den Förder-Check oder sprechen Sie direkt mit Malim über Ihr Vorhaben.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/foerderung" className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 rounded-xl hover:bg-teal-400 transition-colors font-semibold">
                  Zum Förder-Check
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/" className="inline-flex items-center justify-center px-6 py-3 border border-white/15 rounded-xl hover:bg-white/5 transition-colors font-semibold">
                  Zur Startseite
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
