import { Building2 } from 'lucide-react';

export default function AboutMalim() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="w-8 h-8 text-teal-600 flex-shrink-0" />
          <h2 className="text-3xl font-bold text-slate-900">Über Malim</h2>
        </div>
        
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            <strong className="text-slate-900">Malim</strong> ist ein Schweizer Beratungsunternehmen für nachhaltige Mobilität, Ladeinfrastruktur und urbane Transformation.
          </p>
          
          <p>
            Wir unterstützen <strong className="text-slate-900">Gemeinden, Unternehmen, Immobilieneigentümer und Institutionen</strong> bei der Planung, Förderung und Umsetzung von Mobilitätsprojekten in der Schweiz.
          </p>
          
          <p>
            Unsere Leistungen umfassen:
          </p>
          
          <ul className="space-y-3 ml-6 list-disc marker:text-teal-600">
            <li><strong className="text-slate-900">Ladeinfrastruktur:</strong> Fördercheck, Planung und Umsetzung für Mehrfamilienhäuser, Unternehmen und öffentliche Standorte</li>
            <li><strong className="text-slate-900">Firmenmobilität:</strong> Mobilitätsstrategien, Flottenlösungen und Sharing-Konzepte</li>
            <li><strong className="text-slate-900">Urbane Mobilität:</strong> Verkehrsberuhigung, Begegnungszonen und klimafreundliche Raumgestaltung</li>
            <li><strong className="text-slate-900">Beteiligung & Change:</strong> Stakeholder-Prozesse, Weiterbildung und Diversitätsstrategien</li>
          </ul>
          
          <p>
            Wir arbeiten <strong className="text-slate-900">pragmatisch, kooperativ und innovativ</strong> – mit dem Ziel, Mobilität mit echter Wirkung zu gestalten.
          </p>
          
          <p className="text-slate-600 text-base pt-4 border-t border-slate-200">
            <strong className="text-slate-900">Standort:</strong> Schweiz<br />
            <strong className="text-slate-900">Tätigkeitsbereich:</strong> Ladeinfrastruktur, Förderung, nachhaltige Mobilität, urbane Transformation
          </p>
        </div>
      </div>
    </section>
  );
}
