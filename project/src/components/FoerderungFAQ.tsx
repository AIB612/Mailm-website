import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Was ist die Förderung für Ladeinfrastruktur in der Schweiz?',
    answer:
      'Die Förderung für Ladeinfrastruktur in der Schweiz umfasst kantonale und nationale Subventionen für den Aufbau von Ladestationen für Elektrofahrzeuge. Verschiedene Kantone wie Zürich, Bern, Genf, Basel-Stadt und andere bieten finanzielle Unterstützung für Unternehmen, Immobilieneigentümer, Gemeinden und Institutionen an.',
  },
  {
    question: 'Welche Kantone fördern Ladeinfrastruktur?',
    answer:
      'Aktuell fördern unter anderem die Kantone Zürich (ZH), Bern (BE), Genf (GE), Waadt (VD), Neuenburg (NE), Basel-Stadt (BS), Tessin (TI), Thurgau (TG) und Graubünden (GR) Ladeinfrastruktur. Die Förderbedingungen und -höhen variieren je nach Kanton.',
  },
  {
    question: 'Wie unterstützt Malim bei Förderprojekten?',
    answer:
      'Malim unterstützt Unternehmen, Immobilieneigentümer und Institutionen bei der Prüfung von Fördermöglichkeiten, der Projektklärung, Planung und Umsetzung von Ladeinfrastruktur. Wir begleiten Sie vom Fördercheck über die Antragstellung bis zur technischen Realisierung.',
  },
  {
    question: 'Wer kann Förderung für Ladeinfrastruktur beantragen?',
    answer:
      'Förderungen können in der Regel von Unternehmen, Immobilieneigentümern, Verwaltungen von Mehrfamilienhäusern, Gemeinden und öffentlichen Institutionen beantragt werden. Die genauen Voraussetzungen variieren je nach Kanton und Förderprogramm.',
  },
  {
    question: 'Wie hoch sind die Förderungen für Ladeinfrastruktur in der Schweiz?',
    answer:
      'Die Förderhöhe variiert stark je nach Kanton und Projekttyp. Sie kann von einigen tausend Franken bis zu mehreren zehntausend Franken pro Projekt reichen. Einige Kantone fördern prozentual (z.B. 30-50% der Investitionskosten), andere mit Pauschalen pro Ladepunkt.',
  },
  {
    question: 'Gibt es auch nationale Förderungen für Ladeinfrastruktur?',
    answer:
      'Ja, neben kantonalen Förderungen gibt es auch nationale Programme und Initiativen des Bundes zur Förderung der Elektromobilität und Ladeinfrastruktur. Diese können teilweise mit kantonalen Förderungen kombiniert werden.',
  },
];

export default function FoerderungFAQ({ isDark = false }: { isDark?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium mb-5 ${
              isDark
                ? 'border-teal-400/20 bg-teal-400/10 text-teal-200'
                : 'border-teal-200 bg-teal-50 text-teal-700'
            }`}
          >
            <MessageCircleQuestion className="w-4 h-4" />
            FAQ Förderungen
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Häufige Fragen zur Förderung von Ladeinfrastruktur
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Antworten auf die wichtigsten Fragen zu Fördermöglichkeiten, Voraussetzungen und dem Einstieg in Ladeinfrastruktur-Projekte in der Schweiz.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                  isDark
                    ? isOpen
                      ? 'border-teal-400/30 bg-slate-900 shadow-[0_0_0_1px_rgba(45,212,191,0.08)]'
                      : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                    : isOpen
                      ? 'border-teal-200 bg-white shadow-lg shadow-slate-200/70'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full px-6 py-5 sm:px-7 sm:py-6 flex items-start justify-between gap-4 text-left transition-colors ${
                    isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-slate-50/80'
                  }`}
                >
                  <div className="min-w-0">
                    <span className={`block text-xs font-semibold uppercase tracking-[0.18em] mb-2 ${isDark ? 'text-teal-300' : 'text-teal-600'}`}>
                      Frage {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`block font-semibold text-lg sm:text-xl leading-snug ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`mt-1 flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                      isDark
                        ? isOpen
                          ? 'border-teal-400/30 bg-teal-400/10 text-teal-300'
                          : 'border-slate-700 bg-slate-800 text-slate-400'
                        : isOpen
                          ? 'border-teal-200 bg-teal-50 text-teal-600'
                          : 'border-slate-200 bg-slate-50 text-slate-500'
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                {isOpen && (
                  <div className={`px-6 pb-6 sm:px-7 sm:pb-7 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    <div className={`border-t pt-5 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                      <p className="leading-8 text-[15px] sm:text-base">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          className={`mt-10 rounded-2xl border px-6 py-5 sm:px-7 sm:py-6 ${
            isDark
              ? 'border-teal-400/20 bg-teal-400/10 text-slate-200'
              : 'border-teal-100 bg-teal-50/80 text-slate-700'
          }`}
        >
          <p className="leading-relaxed">
            <strong className={isDark ? 'text-white' : 'text-slate-900'}>Weitere Fragen?</strong>{' '}
            Malim unterstützt Sie bei Fördercheck, Projektklärung und den nächsten Schritten für Ladeinfrastruktur in der Schweiz.
          </p>
        </div>
      </div>
    </section>
  );
}
