import StickyHeader from "@/components/StickyHeader";
import SectionHeader from "@/components/SectionHeader";
import CandidateRow from "@/components/CandidateRow";
import ProposalGallery from "@/components/ProposalGallery";


const boardRows = [
{
  title: "PRIMER RENGLÓN",
  principal: { name: "BLANCA RUIZ", role: "Principal" as const, bio: "Ingeniera eléctrica (1989) con especializaciones en automatización, finanzas y derecho de los negocios\n\nEn Uniandinos he sido: Vicepresidente de capítulos, miembro de la Junta Directiva de Uniandinos, presidente de varios capítulos y asambleista.\n\nMiembro de las juntas directivas del CIDET en Colombia y de TGOOD Holdings de Hong Kong.\n\nExperiencia en multinacionales como gerente general y regional.\n\nEstructuración de proyectos hasta 250 MUSD y responsabilidad de P&G hasta 30MUSD", photo: "/lovable-uploads/0d51b498-e98c-4165-8600-76529c7e9abb.jpg" },
  substitute: { name: "DAVID VÁSQUEZ", role: "Substitute" as const, bio: "Geociencias (20xx) experto en \n\nEn Uniandinos: expresidente del capítulo Geociencias y asambleista.\n\nCientífico de datos con experiencia en resolución de problemas en tecnología.\n\nExperiencia en modelos analíticos.\n\nExperto en aprendizaje automático, incluyendo el desarrollo e implementación de modelos de aprendizaje automático, el ajuste de hiperparámetros y la evaluación de modelos, así como en teledetección, sistemas de información geográfica y análisis de datos espaciales.​", photo: "/lovable-uploads/366728c3-89ed-4e6f-9522-4ecd0c08609f.jpg" }
},
{
  title: "SEGUNDO RENGLÓN",
  principal: { name: "LUZ ELENA THOMPSON", role: "Principal" as const, bio: "Ingeniera de sistemas (1998)\n\nEn Uniandinos: ex-vicepresidente de Caminandes y miembro de Chosen Futures, comprometida con la construcción de comunidad.\n\nArquitecta de Datos en Analítica, con cerca de 30 años de experiencia en iniciativas corporativas y regionales.\n\nEmpresaria y socia desde hace 15 años, con experiencia en gobierno y gestión de equipos.\n\nExperta en articulación entre negocio y tecnología, con pensamiento estructurado y visión estratégica.", photo: "/lovable-uploads/437f68b4-5cf0-4567-9339-8552c3152dcb.jpg" },
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

            className="inline-block bg-primary text-primary-foreground font-display font-extrabold uppercase tracking-widest text-sm md:text-base px-10 py-4 hover:opacity-90 transition-opacity" href="https://elecciones.uniandinos.org.co/">ACCESO AL PORTAL DE VOTACIÓN


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

      {/* Social Media Bar */}
      <div className="bg-muted border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-center gap-4">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#25D366' }}
          aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-80"
          aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground text-background transition-opacity hover:opacity-80"
          aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a href="mailto:contacto@example.com" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground transition-opacity hover:opacity-80"
          aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>

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