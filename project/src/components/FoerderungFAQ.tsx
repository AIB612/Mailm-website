import { ChevronDown } from 'lucide-react';
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
    <section className="py-16">
      <div className="max-w-4xl">
        <div className="mb-10">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${
              isDark ? 'text-teal-300' : 'text-teal-600'
            }`}
          >
            FAQ
          </p>
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Häufige Fragen zur Förderung von Ladeinfrastruktur
          </h2>
          <p className={`text-lg leading-relaxed max-w-3xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Die wichtigsten Antworten zu Fördermöglichkeiten, Voraussetzungen und den nächsten Schritten in der Schweiz.
          </p>
        </div>

        <div className={`rounded-2xl border overflow-hidden ${isDark ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-white'}`}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`${index !== faqData.length - 1 ? (isDark ? 'border-b border-slate-800' : 'border-b border-slate-200') : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full px-6 py-5 sm:px-7 sm:py-6 flex items-start justify-between gap-4 text-left ${
                    isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-slate-50/70'
                  } transition-colors`}
                >
                  <span
                    className={`block pr-4 text-base sm:text-lg font-medium leading-snug ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 mt-1 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    } ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                  />
                </button>
                {isOpen && (
                  <div className={`px-6 pb-6 sm:px-7 sm:pb-7 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    <p className="leading-8 text-[15px] sm:text-base">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          className={`mt-8 rounded-2xl px-6 py-5 sm:px-7 sm:py-6 ${
            isDark ? 'bg-slate-900/60 text-slate-300' : 'bg-slate-100 text-slate-700'
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
