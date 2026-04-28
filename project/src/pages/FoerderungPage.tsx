import { useEffect, useState } from 'react';
import SwissMap from '../components/SwissMap';
import InfoPanel from '../components/InfoPanel';
import PostalSearch from '../components/PostalSearch';
import ThemeToggle from '../components/ThemeToggle';
import Navbar from '../components/Navbar';
import FoerderungFAQ from '../components/FoerderungFAQ';
import { CantonSubsidy } from '../lib/data/cantons';

const SITE_URL = 'https://www.malim.online';
const PAGE_URL = `${SITE_URL}/foerderung`;
const PAGE_TITLE = 'Förderung für Ladeinfrastruktur in der Schweiz | Malim';
const PAGE_DESCRIPTION =
  'Prüfen Sie Förderungen für Ladeinfrastruktur in der Schweiz. Malim unterstützt Unternehmen, Immobilien, Gemeinden und Institutionen bei Fördercheck, Planung und Umsetzung.';
const OG_IMAGE = 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80';

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;

  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta') as
      | HTMLMetaElement
      | HTMLLinkElement;
    document.head.appendChild(el);
  }

  Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value));
}

function upsertJsonLd(id: string, data: unknown) {
  let script = document.getElementById(id) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export default function FoerderungPage() {
  const [selectedCanton, setSelectedCanton] = useState<CantonSubsidy | null>(null);
  const [zoomToCanton, setZoomToCanton] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.title = PAGE_TITLE;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: PAGE_DESCRIPTION,
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: PAGE_TITLE,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: PAGE_DESCRIPTION,
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: PAGE_URL,
    });
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: OG_IMAGE,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: PAGE_TITLE,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: PAGE_DESCRIPTION,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: OG_IMAGE,
    });
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content:
        'Förderung Ladeinfrastruktur Schweiz, Subvention Ladestation Schweiz, Fördercheck E-Mobilität Schweiz, Ladeinfrastruktur Förderung Unternehmen, Ladeinfrastruktur Förderung Immobilien, Malim',
    });
    upsertMeta('meta[name="language"]', {
      name: 'language',
      content: 'de-CH',
    });

    upsertMeta('link[rel="canonical"]', {
      rel: 'canonical',
      href: PAGE_URL,
    });

    upsertJsonLd('malim-foerderung-webpage', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: PAGE_TITLE,
      url: PAGE_URL,
      description: PAGE_DESCRIPTION,
      inLanguage: 'de-CH',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Malim',
        url: SITE_URL,
      },
      about: [
        'Ladeinfrastruktur',
        'Förderung',
        'Elektromobilität',
        'Schweiz',
      ],
    });

    upsertJsonLd('malim-foerderung-service', {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Fördercheck Ladeinfrastruktur Schweiz',
      provider: {
        '@type': 'Organization',
        name: 'Malim',
        url: SITE_URL,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Switzerland',
      },
      serviceType: 'Fördercheck und Projektberatung für Ladeinfrastruktur',
      url: PAGE_URL,
      description: PAGE_DESCRIPTION,
    });

    upsertJsonLd('malim-foerderung-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist die Förderung für Ladeinfrastruktur in der Schweiz?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Förderung für Ladeinfrastruktur in der Schweiz umfasst kantonale und nationale Subventionen für den Aufbau von Ladestationen für Elektrofahrzeuge. Verschiedene Kantone wie Zürich, Bern, Genf, Basel-Stadt und andere bieten finanzielle Unterstützung für Unternehmen, Immobilieneigentümer, Gemeinden und Institutionen an.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche Kantone fördern Ladeinfrastruktur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aktuell fördern unter anderem die Kantone Zürich (ZH), Bern (BE), Genf (GE), Waadt (VD), Neuenburg (NE), Basel-Stadt (BS), Tessin (TI), Thurgau (TG) und Graubünden (GR) Ladeinfrastruktur. Die Förderbedingungen und -höhen variieren je nach Kanton.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie unterstützt Malim bei Förderprojekten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Malim unterstützt Unternehmen, Immobilieneigentümer und Institutionen bei der Prüfung von Fördermöglichkeiten, der Projektklärung, Planung und Umsetzung von Ladeinfrastruktur. Wir begleiten Sie vom Fördercheck über die Antragstellung bis zur technischen Realisierung.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wer kann Förderung für Ladeinfrastruktur beantragen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Förderungen können in der Regel von Unternehmen, Immobilieneigentümern, Verwaltungen von Mehrfamilienhäusern, Gemeinden und öffentlichen Institutionen beantragt werden. Die genauen Voraussetzungen variieren je nach Kanton und Förderprogramm.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie hoch sind die Förderungen für Ladeinfrastruktur in der Schweiz?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Förderhöhe variiert stark je nach Kanton und Projekttyp. Sie kann von einigen tausend Franken bis zu mehreren zehntausend Franken pro Projekt reichen. Einige Kantone fördern prozentual (z.B. 30-50% der Investitionskosten), andere mit Pauschalen pro Ladepunkt.',
          },
        },
        {
          '@type': 'Question',
          name: 'Gibt es auch nationale Förderungen für Ladeinfrastruktur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, neben kantonalen Förderungen gibt es auch nationale Programme und Initiativen des Bundes zur Förderung der Elektromobilität und Ladeinfrastruktur. Diese können teilweise mit kantonalen Förderungen kombiniert werden.',
          },
        },
      ],
    });
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDark ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      <Navbar />

      <main className="flex-1 pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10 gap-6">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${
                isDark ? 'text-teal-300' : 'text-teal-600'
              }`}>
                Förder-Check Schweiz
              </p>
              <h1 className={`text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Förderung für Ladeinfrastruktur in der Schweiz
              </h1>
              <p className={`text-lg max-w-3xl ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Prüfen Sie kantonale und nationale Fördermöglichkeiten für Ladeinfrastruktur in der Schweiz – als Einstieg für Projektklärung, Planung und Umsetzung mit Malim.
              </p>
            </div>
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          </div>

          <div className={`mb-8 rounded-2xl border p-5 ${
            isDark ? 'border-slate-800 bg-slate-900/70 text-slate-300' : 'border-slate-200 bg-white text-slate-600'
          }`}>
            <p className="leading-relaxed">
              Diese Seite ist als direkt teilbarer Einstieg für Förderungen rund um E-Mobilität, Ladeinfrastruktur,
              Mehrfamilienhäuser, Unternehmen und institutionelle Projekte in der Schweiz gedacht.
            </p>
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

          <div className="mt-14">
            <FoerderungFAQ isDark={isDark} />
          </div>
        </div>
      </main>

      <footer className={`bg-slate-950 text-slate-400 py-14 transition-colors duration-300 ${
        isDark ? 'border-t border-slate-800' : 'border-t border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 pb-10 border-b border-white/10">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/malim.svg" alt="Malim" className="h-10 w-auto" />
                <span className="text-white font-bold text-2xl tracking-tight">Malim</span>
              </div>
              <p className="text-base text-slate-300 leading-relaxed max-w-xl mb-6">
                Nachhaltige, inklusive und intelligente Mobilität für Gemeinden, Unternehmen und Institutionen in der Schweiz.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">Ladeinfrastruktur</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">Fördercheck Schweiz</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">Nachhaltige Mobilität</span>
              </div>
            </div>

            <div className="lg:pl-6 lg:flex lg:flex-col lg:justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300 mb-3">Über Malim</p>
              <p className="text-sm leading-relaxed text-slate-300 max-w-lg mb-4">
                Schweizer Beratung für Ladeinfrastruktur, Förderung und nachhaltige Mobilität.
              </p>
              <Link
                to="/ueber-malim"
                className="inline-flex items-center text-sm font-medium text-teal-200 hover:text-white transition-colors"
              >
                Mehr über Malim
              </Link>
            </div>
          </div>

          <div className="pt-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-sm text-slate-500">
            <p>© 2026 Malim. Alle Rechte vorbehalten.</p>
            <p>Schweiz · Ladeinfrastruktur · Förderung · Mobilitätsprojekte</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
