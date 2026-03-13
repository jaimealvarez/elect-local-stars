import StickyHeader from "@/components/StickyHeader";
import SectionHeader from "@/components/SectionHeader";
import CandidateRow from "@/components/CandidateRow";
import ProposalGallery from "@/components/ProposalGallery";

import c1 from "@/assets/candidate-1.jpg";
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
  title: "Governance & Administration",
  principal: { name: "Roberto Méndez", role: "Principal" as const, bio: "20 years of experience in public administration. Former municipal planning director committed to transparent governance and fiscal responsibility.", photo: c1 },
  substitute: { name: "Lucía Contreras", role: "Substitute" as const, bio: "Community organizer and attorney specializing in municipal law. Advocate for equitable resource distribution and citizen engagement.", photo: c2 }
},
{
  title: "Infrastructure & Sustainability",
  principal: { name: "Andrés Villalobos", role: "Principal" as const, bio: "Civil engineer with a decade of infrastructure development experience. Focused on sustainable urban growth and modernizing public services.", photo: c3 },
  substitute: { name: "Camila Ríos", role: "Substitute" as const, bio: "Environmental policy specialist and educator. Dedicated to integrating ecological standards into local governance and community planning.", photo: c4 }
}];


const assemblyRows = [
{
  title: "Education & Social Services",
  principal: { name: "Ernesto Salazar", role: "Principal" as const, bio: "Retired school principal with 30 years in education. Champion of accessible public education and youth development programs.", photo: c5 },
  substitute: { name: "Patricia Duarte", role: "Substitute" as const, bio: "Social worker and neighborhood council leader. Committed to healthcare access and support services for vulnerable populations.", photo: c6 }
},
{
  title: "Economic Development",
  principal: { name: "Fernando Castillo", role: "Principal" as const, bio: "Small business owner and chamber of commerce member. Advocate for local economic development and entrepreneurship support.", photo: c7 },
  substitute: { name: "Diana Morales", role: "Substitute" as const, bio: "Public health researcher and community volunteer. Focused on preventive health initiatives and public safety improvements.", photo: c8 }
},
{
  title: "Labor & Cultural Affairs",
  principal: { name: "Alejandro Paredes", role: "Principal" as const, bio: "Labor rights attorney and mediator. Experienced in conflict resolution and committed to fair employment practices in the district.", photo: c9 },
  substitute: { name: "Valentina Cruz", role: "Substitute" as const, bio: "Cultural program coordinator and arts educator. Passionate about preserving local heritage and expanding community cultural spaces.", photo: c10 }
},
{
  title: "Rural Development & Accountability",
  principal: { name: "Héctor Ramírez", role: "Principal" as const, bio: "Agricultural cooperative leader with deep rural community ties. Focused on food security, water management, and rural infrastructure.", photo: c11 },
  substitute: { name: "Gloria Espinoza", role: "Substitute" as const, bio: "Former municipal auditor and public finance expert. Dedicated to accountability, anti-corruption measures, and transparent budgeting.", photo: c12 }
}];


const boardProposals = [
{ title: "Transparent Budgeting", description: "Implement an open-access digital platform for real-time tracking of all municipal expenditures, ensuring every citizen can verify how public funds are allocated.", image: propBudget },
{ title: "Infrastructure Modernization", description: "Prioritize the renovation of roads, water systems, and public buildings with a 5-year capital improvement plan developed through community input sessions.", image: propInfra },
{ title: "Community Safety", description: "Increase investment in community policing, public lighting, and emergency response infrastructure while maintaining full civilian oversight of law enforcement.", image: propSafety },
{ title: "Environmental Responsibility", description: "Establish a municipal sustainability office to oversee waste reduction targets, green space preservation, and renewable energy adoption in public facilities.", image: propEnvironment }];


const assemblyProposals = [
{ title: "Education and Youth Development", description: "Expand after-school programs, vocational training partnerships, and scholarship opportunities for local students in collaboration with regional institutions.", image: propEducation },
{ title: "Economic Development", description: "Support local entrepreneurship through micro-loan programs, business incubators, and streamlined permitting processes for small and medium enterprises.", image: propEconomy },
{ title: "Rural Development", description: "Strengthen agricultural cooperatives, improve rural road networks, and expand water management systems to support food security across the district.", image: propRural },
{ title: "Cultural Heritage", description: "Preserve local traditions and expand community cultural spaces through arts programs, heritage site restoration, and public festival support.", image: propCulture }];


export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyHeader
        title="Civic Assembly"
        subtitle="Local Elections 2026"
        slogan="Clarity in governance. Accountability in action." />
      

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
        <SectionHeader title="Assembly Proposals" id="assembly-proposals" />
        <div className="py-8 md:py-12">
          <ProposalGallery proposals={assemblyProposals} />
        </div>

        {/* Vote Here */}
        <SectionHeader title="Vote Here" id="vote" />
        <div className="py-12 md:py-20">
          <p className="body-serif text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mb-8">Unidos, garantizaremos que la gestión refleje la voluntad de la comunidad

          </p>
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground font-display font-extrabold uppercase tracking-widest text-sm md:text-base px-10 py-4 hover:opacity-90 transition-opacity">ACCESO AL PORTAL DE VOTACIÓN


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
              <a href="mailto:contact@civicassembly.org" className="body-serif text-base underline decoration-1 underline-offset-4 hover:text-primary transition-colors">blancamruiz@gmail.com

              </a>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">EMAIL

              </h3>
              <p className="body-serif text-base text-muted-foreground leading-relaxed">johanna@neiatec.com

                <br />
                Suite 400<br />
                District Center, 10001
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">TELÉFONO

              </h3>
              <a href="tel:+15551234567" className="body-serif text-base underline decoration-1 underline-offset-4 hover:text-primary transition-colors">3183724620

              </a>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">TELÉFONO

              </h3>
              <p className="body-serif text-base text-muted-foreground leading-relaxed">3005626257
                <br />
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
    </div>);
}