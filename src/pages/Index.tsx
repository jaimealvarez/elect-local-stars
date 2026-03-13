import StickyHeader from "@/components/StickyHeader";
import SectionHeader from "@/components/SectionHeader";
import CandidateRow from "@/components/CandidateRow";
import ProposalGallery from "@/components/ProposalGallery";

import propBudget from "@/assets/proposal-budget.jpg";
import propInfra from "@/assets/proposal-infrastructure.jpg";
import propSafety from "@/assets/proposal-safety.jpg";
import propEducation from "@/assets/proposal-education.jpg";
import propEconomy from "@/assets/proposal-economy.jpg";
import propRural from "@/assets/proposal-rural.jpg";

const boardRows = [
{
  title: "PRIMER RENGLÓN",
  principal: { name: "BLANCA RUIZ", role: "Principal" as const, bio: "Ingeniera eléctrica (1989) con especializaciones en automatización, finanzas y derecho de los negocios\n\nEn Uniandinos he sido: Vicepresidente de capítulos, miembro de la Junta Directiva de Uniandinos, presidente de varios capítulos y asambleista.\n\nMiembro de las juntas directivas del CIDET en Colombia y de TGOOD Holdings de Hong Kong.\n\nExperiencia en multinacionales como gerente general y regional.\n\nEstructuración de proyectos hasta 250 MUSD y responsabilidad de P&G hasta 30MUSD", photo: "/lovable-uploads/d715c6bf-7485-4421-af1f-d19acc78da47.jpg" },
  substitute: { name: "DAVID VÁSQUEZ", role: "Substitute" as const, bio: "Geociencias (20xx) experto en \n\nEn Uniandinos: expresidente del capítulo Geociencias y asambleista.\n\nCientífico de datos con experiencia en resolución de problemas en tecnología.\n\nExperiencia en modelos analíticos.\n\nExperto en aprendizaje automático, incluyendo el desarrollo e implementación de modelos de aprendizaje automático, el ajuste de hiperparámetros y la evaluación de modelos, así como en teledetección, sistemas de información geográfica y análisis de datos espaciales.​", photo: "/lovable-uploads/366728c3-89ed-4e6f-9522-4ecd0c08609f.jpg" }
},
{
  title: "SEGUNDO RENGLÓN",
  principal: { name: "LUZ ELENA THOMPSON", role: "Principal" as const, bio: "Ingeniera de sistemas (1998)\n\nEn Uniandinos: ex-vicepresidente de Caminandes y miembro de Chosen Futures, comprometida con la construcción de comunidad.\n\nArquitecta de Datos en Analítica, con cerca de 30 años de experiencia en iniciativas corporativas y regionales.\n\nEmpresaria y socia desde hace 15 años, con experiencia en gobierno y gestión de equipos.\n\nExperta en articulación entre negocio y tecnología, con pensamiento estructurado y visión estratégica.", photo: "/lovable-uploads/dcd688e3-ac62-4e78-a91f-7920ee36dfde.jpg" },
  substitute: { name: "MERCEDES GUARÍN", role: "Substitute" as const, bio: "En Uniandinos: Expresidente de Caminandes.\n\nPsicóloga con experiencia en psicología clínica\n\nEmprendedora en producción y comercialización de prendas de vestir.", photo: "/lovable-uploads/e1412c7b-5e1f-4a8c-9515-509457ca0220.jpg" }
}];


const assemblyRows = [
{
  title: "PRIMER RENGLÓN",
  principal: { name: "JOHANNA ZAMBRANO", role: "Principal" as const, bio: "Ingeniera de sistemas (2005) y Maestría en ingeniería (2008)", photo: "/lovable-uploads/9e5584d7-21a4-4180-bea2-e6505e869aa5.jpg" },
  substitute: { name: "JOSÉ LUIS SANTIAGO", role: "Substitute" as const, bio: "Ingeniero eléctrico, MBA (2018)", photo: "/lovable-uploads/ad1e0870-e4e2-4e30-9bc5-bf5a00b4da91.jpg" }
},
{
  title: "SEGUNDO RENGLÓN",
  principal: { name: "JUAN JOSÉ GARZÓN", role: "Principal" as const, bio: "Geociencias (2021)", photo: "/lovable-uploads/6d45ddc7-e1c0-4829-91e5-a1f1a71ffe58.jpg" },
  substitute: { name: "NATALIA DURÁN", role: "Substitute" as const, bio: "Ingeniería biomédica (2020)", photo: "/lovable-uploads/dc6cc85f-e7b8-4e05-ade8-e348dbe6b6d0.jpg" }
},
{
  title: "TERCER RENGLÓN",
  principal: { name: "JUAN DIEGO QUINTERO", role: "Principal" as const, bio: "Ingeniero civil (1988)\n\nMaestría en restauración de edificios\n\nEn Uniandinos ha sido: presidente de Caminandes, miembro de la Junta Directiva de Uniandinos, asambleista y miembro de varios comités, entre ellos el de infraestructura.\n\nEmpresario en el área de reconstrucción de edificios de patrimonio y en obras civiles.", photo: "/lovable-uploads/3f1c4fc6-ca92-4d89-929b-89509a33f745.jpg" },
  substitute: { name: "FERNANDO ROCHA", role: "Substitute" as const, bio: "Lenguas modernas (1989)\n\nEspecialización en gerencia de\nMercados y MBA con énfasis en mercadeo de la universidad de Los Andes.\n\nEn Uniandinos: presidente del capítulo Civitas.\n\nHa trabajado toda su vida profesional en la industria de la tecnología en roles de desarrollo de canales de distribución y de mercado para compañías como IBM, HP, Xerox, Epson, Zebra y actualmente en Toshiba. Ha tenido regionales en toda Latinoamérica, manejando clientes corporativos en diferentes industrias con un alto énfasis en las industrias de mercadeo, publicidad y retail.", photo: "/lovable-uploads/d659a79b-5375-4387-8eb3-5fc7b527dbdf.jpg" }
},
{
  title: "CUARTO RENGLÓN",
  principal: { name: "CECILIA ROMERO", role: "Principal" as const, bio: "Ingeniera industrial (1978)", photo: "/lovable-uploads/78134b8b-4201-46e8-a367-f82a5495d4fa.jpg" },
  substitute: { name: "JAIME GUERRERO", role: "Substitute" as const, bio: "Ingeniero industrial (1977)", photo: "/lovable-uploads/ccb704e6-a472-4d0b-9865-5240335d047f.jpg" }
}];


const boardProposals = [
{ title: "SOSTENIBILIDAD Y CRECIMIENTO", description: "Contratar un estructurador para el plan parcial, con términos de referencia que blinden cualquier riesgo de ejecución y garanticen la sede que necesitamos.\n\nFormular adecuadamente todos los demás proyectos de inversión y aumentar la capacidad de gestión de proyectos en la asociación.\n\nFortalecimiento de los comités de junta directiva y procesos que permitan aprovechar el conocimiento y experiencia de los asociados. En particular: reactivar el Comité de tecnología y el Consejo de Equidad y Diversidad \n\nMejorar la oferta de valor para afiliados y familias: convenios, empleabilidad, networking.\n\nEliminar la interinidad en cargos clave de la Asociación: Gerencia General y en otras áreas de Uniandinos.", image: propBudget },
{ title: "FORTALECIMIENTO DE LA COMUNIDAD", description: "Aumentar la relevancia de Uniandinos en el sector empresarial para apoyar emprendedores y profesionales.\n\nEmpoderar los capítulos profesionales, de afinidad y grupos de interés, como motores de la comunidad y catalizadores de la continuidad de los lazos con la Universidad.\n\nFortalecer los programas de empleabilidad, emprendimiento y financiación de estudios.\n\nMantener y ampliar los programas de filantropía.\n\nAcercar a todos los egresados para conocer sus necesidades e invitarlos a afiliarse.\n\nAcercar a los miembros del consejo estudiantil a los capítulos e integrarlos a nuestra comunidad.\n\nMejorar la experiencia tecnológica para los asociados.", image: propInfra },
{ title: "PARTICIPACIÓN DE LA COMUNIDAD", description: "Liderar la revisión del direccionamiento estratégico y presentar sus resultados a la Asamblea, en un proceso que debe realizarse cada cinco años.\n\nFortalecer la alianza con la Universidad de los Andes, promoviendo una integración funcional, bidireccional y autónoma entre ambas instituciones.\n\nCrear redes de participación que integren a asociados, estudiantes y profesores de la Universidad, fomentando el intercambio de conocimiento y la construcción de comunidad.\n\nPromover la realización de encuentros con estudiantes, incluyendo la creación de un capítulo estudiantil que los vincule a la comunidad, con el fin de comprender sus necesidades y desarrollar iniciativas que les generen valor.\n\nReactivar el consejo de jóvenes, orientándolo al diseño de propuestas de valor y espacios de participación para este grupo etario.", image: propSafety }];


const assemblyProposals = [
{ title: "SOSTENIBILIDAD Y CRECIMIENTO", description: "Vigilar el manejo adecuado de riesgos en las inversiones.\n\nSeguimiento y auditoría a la interacción efectiva de los comités con el equipo de Uniandinos.\n\nConocer los intereses y necesidades de distintas generaciones de afiliados.\n\nEvaluar y aprobar decisiones estratégicas con perspectiva de comunidad.", image: propEducation },
{ title: "FORTALECIMIENTO DE LA COMUNIDAD", description: "Promover mayor integración en la comunidad (Sede principal, regionales y nodos).\n\nFortalecer la cultura Uniandina: ética, transparencia y valores compartidos.\n\nFacilitar la comunicación entre emprendedores, empresarios, egresados y estudiantes.", image: propEconomy },
{ title: "PARTICIPACIÓN DE LA COMUNIDAD", description: "Revisar el direccionamiento estratégico: metas, estrategias e intereses de la comunidad.\n\nCrear canales de participación con énfasis especial en escuchar a los jóvenes y facilitar beneficios especiales para estudiantes.\n\nConstruir un camino para mayor participación de los capítulos en todas las instancias.", image: propRural }];


export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyHeader
        title="LISTA #1 A LA JUNTA DIRECTIVA Y LISTA #2 A LA ASAMBLEA"
        subtitle="ELECCIONES UNIANDINOS 2026"
        slogan="Juntos construimos el Uniandinos que queremos" />
      

      <main className="max-w-6xl mx-auto px-6">
        {/* Candidates — Board of Directors */}
        <SectionHeader title="LISTA PARA LA JUNTA DIRECTIVA" id="candidates" />
        {boardRows.map((row, i) =>
        <div key={i}>
            <CandidateRow title={row.title} principal={row.principal} substitute={row.substitute} />
            {i < boardRows.length - 1 && <hr className="border-border" />}
          </div>
        )}

        {/* Candidates — Assembly */}
        <SectionHeader title="LISTA PARA LA ASAMBLEA" id="assembly" />
        {assemblyRows.map((row, i) =>
        <div key={i}>
            <CandidateRow title={row.title} principal={row.principal} substitute={row.substitute} />
            {i < assemblyRows.length - 1 && <hr className="border-border" />}
          </div>
        )}

        {/* Proposals — Board of Directors */}
        <SectionHeader title="PROPUESTAS PARA LA JUNTA DIRECTIVA" id="proposals" />
        <div className="py-8 md:py-12">
          <ProposalGallery proposals={boardProposals} />
        </div>

        {/* Proposals — Assembly */}
        <SectionHeader title="PROPUESTAS PARA LA ASAMBLEA" id="assembly-proposals" />
        <div className="py-8 md:py-12">
          <ProposalGallery proposals={assemblyProposals} />
        </div>

        {/* Vote Here */}
        <SectionHeader title="VOTE AQUÍ" id="vote" />
        <div className="py-12 md:py-20">
          <p className="body-serif text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mb-8">Unidos, garantizaremos que la gestión refleje la voluntad de la comunidad

          </p>
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground font-display font-extrabold uppercase tracking-widest text-sm md:text-base px-10 py-4 hover:opacity-90 transition-opacity">ACCESO AL PORTAL DE VOTACIÓN


          </a>
        </div>

        {/* Contact Us */}
        <SectionHeader title="CONTÁCTENOS" id="contact" />
        <div className="py-12 md:py-20 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Email
              </h3>
              <a href="mailto:blancamruiz@gmail.com" className="body-serif text-base underline decoration-1 underline-offset-4 hover:text-primary transition-colors">blancamruiz@gmail.com

              </a>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">EMAIL

              </h3>
              <p className="body-serif text-base text-muted-foreground leading-relaxed">johanna@neiatec.com
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">TELÉFONO

              </h3>
              <a href="tel:3183724620" className="body-serif text-base underline decoration-1 underline-offset-4 hover:text-primary transition-colors">3183724620

              </a>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">TELÉFONO

              </h3>
              <p className="body-serif text-base text-muted-foreground leading-relaxed">3005626257</p>
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
    </div>);
}
