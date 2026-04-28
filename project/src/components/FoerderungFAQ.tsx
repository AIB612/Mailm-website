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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${
              isDark ? 'text-teal-300' : 'text-teal-600'
            }`}
          >
            Häufig gestellte Fragen
          </p>
          <h2
            className={`text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Förderung für Ladeinfrastruktur in der Schweiz
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Antworten auf die wichtigsten Fragen zu Fördermöglichkeiten, Antragsverfahren und
            Unterstützung durch Malim.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-colors ${
                isDark
                  ? 'border-slate-800 bg-slate-900/50'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors ${
                  isDark ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'
                }`}
              >
                <span
                  className={`font-semibold text-lg pr-4 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  } ${isDark ? 'text-teal-400' : 'text-teal-600'}`}
                />
              </button>
              {openIndex === index && (
                <div
                  className={`px-6 pb-5 pt-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className={`mt-10 p-6 rounded-xl border ${
            isDark
              ? 'border-slate-800 bg-slate-900/50 text-slate-300'
              : 'border-slate-200 bg-slate-50 text-slate-600'
          }`}
        >
          <p className="leading-relaxed">
            <strong className={isDark ? 'text-white' : 'text-slate-900'}>
              Weitere Fragen?
            </strong>{' '}
            Kontaktieren Sie uns für eine individuelle Beratung zu Fördermöglichkeiten und
            Ladeinfrastruktur-Projekten in der Schweiz.
          </p>
        </div>
      </div>
    </section>
  );
}
