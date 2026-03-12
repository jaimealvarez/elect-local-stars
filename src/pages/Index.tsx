import StickyHeader from "@/components/StickyHeader";
import SectionHeader from "@/components/SectionHeader";
import CandidateRow from "@/components/CandidateRow";
import ProposalGallery from "@/components/ProposalGallery";

// import c1 from "@/assets/candidate-1.jpg";
import c2 from "@/assets/candidate-2.jpg";
import c3 from "@/assets/candidate-3.jpg";
import c4 from "@/assets/candidate-4.jpg";
import c5 from "@/assets/candidate-5.jpg";
import c6 from "@/assets/candidate-6.jpg";
import c7 from "@/assets/candidate-7.jpg";
import c8 from "@/assets/candidate-8.jpg";
import c9 from "@/assets/candidate-9.jpg";
import c10 from "@/assets/candidate-10.jpg";
import c11 from "@/assets/candidate-11.jpg";
import c12 from "@/assets/candidate-12.jpg";

import propBudget from "@/assets/proposal-budget.jpg";
import propInfra from "@/assets/proposal-infrastructure.jpg";
import propSafety from "@/assets/proposal-safety.jpg";
import propEducation from "@/assets/proposal-education.jpg";
import propEnvironment from "@/assets/proposal-environment.jpg";
import propEconomy from "@/assets/proposal-economy.jpg";
import propRural from "@/assets/proposal-rural.jpg";
import propCulture from "@/assets/proposal-culture.jpg";

const boardRows = [
  {
    title: "PRIMER RENGLÓN",
    principal: { name: "BLANCA RUIZ", role: "Principal" as const, bio: "Ingeniera eléctrica (1989) con especializaciones en automatización, finanzas y derecho de los negocios\n\nEn Uniandinos he sido: Vicepresidente de capítulos, miembro de la Junta Directiva de Uniandinos, presidente de varios capítulos y asambleista.\n\nMiembro de las juntas directivas del CIDET en Colombia y de TGOOD Holdings de Hong Kong.\n\nExperiencia en multinacionales como gerente general y regional.\n\nEstructuración de proyectos hasta 250 MUSD y responsabilidad de P&G hasta 30MUSD", photo: "/lovable-uploads/29b89cd1-c653-46d1-a0a7-afa98e8db9d3.jpg" },
    substitute: { name: "LUCÍA CONTRERAS", role: "Substitute" as const, bio: "Geociencias (20xx) experto en \n\nEn Uniandinos: expresidente del capítulo Geociencias y asambleista.\n\nCientífico de datos con experiencia en resolución de problemas en tecnología.\n\nExperiencia en modelos analíticos.\n\nExperto en aprendizaje automático, incluyendo el desarrollo e implementación de modelos de aprendizaje automático, el ajuste de hiperparámetros y la evaluación de modelos, así como en teledetección, sistemas de información geográfica y análisis de datos espaciales.​", photo: "/lovable-uploads/d78d7aed-e2fb-4018-a19e-b18857406814.jpg" },
  },
  {
    title: "SEGUNDO RENGLÓN",
    principal: { name: "LUZ ELENA THOMPSON", role: "Principal" as const, bio: "Ingeniera de sistemas (1998)\n\nEn Uniandinos: ex-vicepresidente de Caminandes y miembro de Chosen Futures, comprometida con la construcción de comunidad.\n\nArquitecta de Datos en Analítica, con cerca de 30 años de experiencia en iniciativas corporativas y regionales.\n\nEmpresaria y socia desde hace 15 años, con experiencia en gobierno y gestión de equipos.\n\nExperta en articulación entre negocio y tecnología, con pensamiento estructurado y visión estratégica.", photo: "/lovable-uploads/e6e2f408-6ead-4834-a2e3-99afc5f76e58.jpg" },
    substitute: { name: "MERCEDES GUARÍN", role: "Substitute" as const, bio: "En Uniandinos: Expresidente de Caminandes.\n\nPsicóloga con experiencia en psicología clínica\n\nEmprendedora en producción y comercialización de prendas de vestir.", photo: c4 },
  },
];

const assemblyRows = [
  {
    title: "PRIMER RENGLÓN",
    principal: { name: "JOHANNA ZAMBRANO", role: "Principal" as const, bio: "Ingeniera de sistemas (2005) y Maestría en ingeniería (2008)", photo: "/lovable-uploads/880d155a-8c61-4d7b-a580-3d13202871ae.jpg" },
    substitute: { name: "JOSÉ LUIS SANTIAGO", role: "Substitute" as const, bio: "Ingeniero eléctrico, MBA (2018)", photo: "/lovable-uploads/cdd0127c-eccc-4ad1-b5b8-5e890089118a.jpg" },
  },
  {
    title: "SEGUNDO RENGLÓN",
    principal: { name: "JUAN JOSÉ GARZÓN", role: "Principal" as const, bio: "Geociencias (2021)", photo: "/lovable-uploads/00bbd3ba-db3b-47d5-acc0-f559cc29923d.jpg" },
    substitute: { name: "NATALIA DURÁN", role: "Substitute" as const, bio: "Ingeniería biomédica (2020)", photo: "/lovable-uploads/238449b4-0e24-41e3-84fd-b1d378bcc7af.jpg" },
  },
  {
    title: "TERCER RENGLÓN",
    principal: { name: "JUAN DIEGO QUINTERO", role: "Principal" as const, bio: "Ingeniero civil (1988)\n\nMaestría en restauración de edificios\n\nEn Uniandinos ha sido: presidente de Caminandes, miembro de la Junta Directiva de Uniandinos, asambleista y miembro de varios comités, entre ellos el de infraestructura.\n\nEmpresario en el área de reconstrucción de edificios de patrimonio y en obras civiles.", photo: "/lovable-uploads/56e2453c-9369-43c3-9d93-b5f61989c58c.jpg" },
    substitute: { name: "NORMA GARCÍA", role: "Substitute" as const, bio: "Lenguas modernas (1989)\n\nEspecialización en gerencia de\nMercados y MBA con énfasis en mercadeo de la universidad de Los Andes.\n\nEn Uniandinos: presidente del capítulo Civitas.\n\nHa trabajado toda su vida profesional en la industria de la tecnología en roles de desarrollo de canales de distribución y de mercado para compañías como IBM, HP, Xerox, Epson, Zebra y actualmente en Toshiba. Ha tenido regionales en toda Latinoamérica, manejando clientes corporativos en diferentes industrias con un alto énfasis en las industrias de mercadeo, publicidad y retail.", photo: "/lovable-uploads/def2f750-3c1d-4fd5-95c2-9f0967f37b1f.jpg" },
  },
  {
    title: "CUARTO RENGLÓN",
    principal: { name: "CECILIA ROMERO", role: "Principal" as const, bio: "Ingeniera industrial (1978)", photo: "/lovable-uploads/2e6c0503-a39a-4203-bddf-b6e47cacd5b1.jpg" },
    substitute: { name: "JAIME GUERRERO", role: "Substitute" as const, bio: "Ingeniero industrial (1977)", photo: "/lovable-uploads/ed8cb5ef-4f84-48d9-bb77-0ebe4d1e5948.jpg" },
  },
];

const boardProposals = [
  { title: "SOSTENIBILIDAD Y CRECIMIENTO", description: "Contratar un estructurador para el plan parcial, con términos de referencia que blinden cualquier riesgo de ejecución y garanticen la sede que necesitamos.\n\nFormular adecuadamente todos los demás proyectos de inversión y aumentar la capacidad de gestión de proyectos en la asociación.\n\nFortalecimiento de los comités de junta directiva y procesos que permitan aprovechar el conocimiento y experiencia de los asociados. En particular: reactivar el Comité de tecnología y el Consejo de Equidad y Diversidad \n\nMejorar la oferta de valor para afiliados y familias: convenios, empleabilidad, networking.\n\nEliminar la interinidad en cargos clave de la Asociación: Gerencia General y en otras áreas de Uniandinos.", image: propBudget },
  { title: "FORTALECIMIENTO DE LA COMUNIDAD", description: "Aumentar la relevancia de Uniandinos en el sector empresarial para apoyar emprendedores y profesionales.\n\nEmpoderar los capítulos profesionales, de afinidad y grupos de interés, como motores de la comunidad y catalizadores de la continuidad de los lazos con la Universidad.\n\nFortalecer los programas de empleabilidad, emprendimiento y financiación de estudios.\n\nMantener y ampliar los programas de filantropía.\n\nAcercar a todos los egresados para conocer sus necesidades e invitarlos a afiliarse.\n\nAcercar a los miembros del consejo estudiantil a los capítulos e integrarlos a nuestra comunidad.\n\nMejorar la experiencia tecnológica para los asociados.", image: propInfra },
  { title: "PARTICIPACIÓN DE LA COMUNIDAD", description: "Liderar la revisión del direccionamiento estratégico y presentar sus resultados a la Asamblea, en un proceso que debe realizarse cada cinco años.\n\nFortalecer la alianza con la Universidad de los Andes, promoviendo una integración funcional, bidireccional y autónoma entre ambas instituciones.\n\nCrear redes de participación que integren a asociados, estudiantes y profesores de la Universidad, fomentando el intercambio de conocimiento y la construcción de comunidad.\n\nPromover la realización de encuentros con estudiantes, incluyendo la creación de un capítulo estudiantil que los vincule a la comunidad, con el fin de comprender sus necesidades y desarrollar iniciativas que les generen valor.\n\nReactivar el consejo de jóvenes, orientándolo al diseño de propuestas de valor y espacios de participación para este grupo etario.", image: propSafety },
  { title: "Environmental Responsibility", description: "Establish a municipal sustainability office to oversee waste reduction targets, green space preservation, and renewable energy adoption in public facilities.", image: propEnvironment },
];

const assemblyProposals = [
  { title: "Education and Youth Development", description: "Expand after-school programs, vocational training partnerships, and scholarship opportunities for local students in collaboration with regional institutions.", image: propEducation },
  { title: "Economic Development", description: "Support local entrepreneurship through micro-loan programs, business incubators, and streamlined permitting processes for small and medium enterprises.", image: propEconomy },
  { title: "Rural Development", description: "Strengthen agricultural cooperatives, improve rural road networks, and expand water management systems to support food security across the district.", image: propRural },
  { title: "Cultural Heritage", description: "Preserve local traditions and expand community cultural spaces through arts programs, heritage site restoration, and public festival support.", image: propCulture },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyHeader
        title={`LISTA #1 A LA JUNTA DIRECTIVA\nLISTA #2 A LA ASAMBLEA`}
        subtitle="ELECCIONES UNIANDINOS 2026"
        slogan="Juntos construimos el Uniandinos que queremos"
      />

      <main className="max-w-6xl mx-auto px-6">
        {/* Candidates — Board of Directors */}
        <SectionHeader title="LISTA PARA LA JUNTA DIRECTIVA" id="candidates" />
        {boardRows.map((row, i) => (
          <div key={i}>
            <CandidateRow title={row.title} principal={row.principal} substitute={row.substitute} />
            {i < boardRows.length - 1 && <hr className="border-border" />}
          </div>
        ))}

        {/* Candidates — Assembly */}
        <SectionHeader title="Assembly" id="assembly" />
        {assemblyRows.map((row, i) => (
          <div key={i}>
            <CandidateRow title={row.title} principal={row.principal} substitute={row.substitute} />
            {i < assemblyRows.length - 1 && <hr className="border-border" />}
          </div>
        ))}

        {/* Proposals — Board of Directors */}
        <SectionHeader title="Board of Directors Proposals" id="proposals" />
        <div className="py-8 md:py-12">
          <ProposalGallery proposals={boardProposals} />
        </div>

        {/* Proposals — Assembly */}
        <SectionHeader title="Assembly Proposals" id="assembly-proposals" />
        <div className="py-8 md:py-12">
          <ProposalGallery proposals={assemblyProposals} />
        </div>

        {/* Vote Here */}
        <SectionHeader title="Vote Here" id="vote" />
        <div className="py-12 md:py-20">
          <p className="body-serif text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mb-8">
            Exercise your civic duty. Voting is the most direct way to shape the future of our community. Click below to access the official voting portal.
          </p>
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground font-display font-extrabold uppercase tracking-widest text-sm md:text-base px-10 py-4 hover:opacity-90 transition-opacity"
          >
            Access Voting Portal
          </a>
        </div>

        {/* Contact Us */}
        <SectionHeader title="Contact Us" id="contact" />
        <div className="py-12 md:py-20 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Email
              </h3>
              <a href="mailto:contact@civicassembly.org" className="body-serif text-base underline decoration-1 underline-offset-4 hover:text-primary transition-colors">
                contact@civicassembly.org
              </a>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Office
              </h3>
              <p className="body-serif text-base text-muted-foreground leading-relaxed">
                123 Municipal Avenue<br />
                Suite 400<br />
                District Center, 10001
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Phone
              </h3>
              <a href="tel:+15551234567" className="body-serif text-base underline decoration-1 underline-offset-4 hover:text-primary transition-colors">
                +1 (555) 123-4567
              </a>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Hours
              </h3>
              <p className="body-serif text-base text-muted-foreground leading-relaxed">
                Monday — Friday<br />
                9:00 AM — 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">
            © 2026 Civic Assembly. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
