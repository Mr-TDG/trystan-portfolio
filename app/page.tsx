import InteractiveShell from "./components/InteractiveShell";
import CopyEmailButton from "./components/CopyEmailButton";

const capabilities = [
  {
    number: "01",
    title: "Business systems",
    text: "I turn messy operational problems into structured software, workflows, and measurable processes.",
  },
  {
    number: "02",
    title: "AI engineering",
    text: "I use AI where it creates leverage while keeping authorization, validation, and business rules outside the model.",
  },
  {
    number: "03",
    title: "Product building",
    text: "I take products from idea through architecture, implementation, deployment, QA, and iteration.",
  },
];

const engineering = [
  "Next.js / TypeScript",
  "Supabase / PostgreSQL",
  "OpenAI integrations",
  "GitHub / CI/CD",
  "Vercel deployment",
  "Multi-tenant architecture",
  "AI security boundaries",
  "Workflow automation",
];

const proofPoints = [
  ["01", "Built", "A real multi-tenant SaaS product"],
  ["02", "Secured", "AI behind server-enforced boundaries"],
  ["03", "Deployed", "GitHub → CI → Vercel → production"],
  ["04", "Learned", "From real production failures and fixes"],
];

export default function Home() {
  return (
    <InteractiveShell>
      <main>
        <nav className="nav shell">
        <a className="brand" href="#">TDG<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#engineering">Engineering</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-cta" href="https://github.com/Mr-TDG" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
        </nav>

        <section className="hero shell" data-reveal>
        <div className="eyebrow"><span className="status-dot" /> Product builder · AI automation · software</div>
        <h1>I build software<br /><em>for real business problems.</em></h1>
        <p className="hero-copy">
          I combine business development, automation, AI, and full-stack engineering
          to turn operational problems into practical software.
        </p>
        <div className="hero-actions">
          <a className="button primary magnetic" href="#work">Explore my work <span>↓</span></a>
          <a className="button secondary magnetic" href="#about">About me</a>
        </div>
        <div className="hero-meta">
          <span>Philippines · open to opportunities</span>
          <span>Building with AI, not hiding behind it.</span>
        </div>
      </section>

      <section id="work" className="feature shell" data-reveal>
        <div className="section-label">Featured project / 01</div>
        <div className="nova-card">
          <div className="nova-top">
            <div>
              <div className="project-kicker">NOVA</div>
              <h2>Organization management<br />& intelligence platform.</h2>
            </div>
            <div className="project-mark">N</div>
          </div>
          <p className="nova-description">
            A multi-tenant SaaS platform built to help organizations manage operations,
            connect business data, use AI safely, and move from information to action.
          </p>
          <div className="nova-proof">
            <div><strong>Product</strong><span>End-to-end SaaS build</span></div>
            <div><strong>AI</strong><span>Secure assistant architecture</span></div>
            <div><strong>Automation</strong><span>Controlled Self-Fix system</span></div>
          </div>
          <div className="nova-tags">
            <span>Next.js</span><span>TypeScript</span><span>Supabase</span><span>OpenAI</span><span>Vercel</span>
          </div>
          <div className="nova-bottom">
            <div>
              <span className="muted">Role</span>
              <strong>Product · Business · AI · Full-stack</strong>
            </div>
            <div className="project-actions">
              <a href="/nova">Case study <span>↗</span></a>
              <a href="https://nova-tdg.vercel.app" target="_blank" rel="noreferrer">Open NOVA <span>↗</span></a>
            </div>
          </div>
        </div>
        <div className="case-note">
          <span>Why it matters</span>
          <p>NOVA is the project where product thinking, AI engineering, security, deployment, and real-world debugging meet.</p>
          <a href="/nova">Read the case study <span>→</span></a>
        </div>
      </section>


      <section className="automation-feature shell" data-reveal>
        <div className="section-label">Case study / 02 · AI automation</div>
        <div className="automation-card">
          <div>
            <div className="project-kicker">N8N + OPENAI</div>
            <h2>AI Real Estate Lead<br /><em>Qualification & Follow-Up</em></h2>
            <p>
              A production-style workflow that validates incoming leads, qualifies buying
              intent with structured AI output, routes HOT/WARM/COLD leads, and sends the
              appropriate Gmail follow-up.
            </p>
          </div>
          <div className="automation-card-bottom">
            <div className="automation-tags">
              <span>n8n</span><span>OpenAI</span><span>Webhooks</span><span>Gmail</span><span>Validation</span>
            </div>
            <a className="button secondary" href="/real-estate-lead-automation">Read case study <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="automation-feature shell" data-reveal>
        <div className="section-label">Case study / 03 · AI automation</div>
        <div className="automation-card">
          <div>
            <div className="project-kicker">N8N + OPENAI</div>
            <h2>AI Customer Support<br /><em>Classification & Escalation</em></h2>
            <p>
              A customer support triage workflow that validates requests, classifies
              the issue with structured AI output, and decides between automated support
              and human escalation.
            </p>
          </div>
          <div className="automation-card-bottom">
            <div className="automation-tags">
              <span>n8n</span><span>OpenAI</span><span>Webhooks</span><span>Gmail</span><span>Escalation</span>
            </div>
            <a className="button secondary" href="/customer-support-automation">Read case study <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="proof-strip" data-reveal>
        <div className="shell proof-grid">
          {proofPoints.map(([number, title, text]) => (
            <div className="proof-item" key={number}>
              <span>{number}</span>
              <div><strong>{title}</strong><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="engineering" className="dark-section" data-reveal>
        <div className="shell">
          <div className="section-label light">How I build</div>
          <div className="split-heading">
            <h2>Business thinking.<br /><em>Engineering discipline.</em></h2>
            <p>
              I care about the part between the idea and the demo: architecture,
              authorization, data boundaries, testing, deployment, and what happens
              when something inevitably breaks.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.number} className="capability">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="stack-row">
            {engineering.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section id="about" className="about shell" data-reveal>
        <div className="section-label">About</div>
        <div className="about-grid">
          <h2>I&apos;m interested in the space where <em>business problems become systems.</em></h2>
          <div className="about-copy">
            <p>
              My background combines business development, customer support, lead generation,
              and hands-on software building. That combination shapes how I approach products:
              start with the operation, understand the people using it, then build the technology
              around the actual problem.
            </p>
            <p>
              NOVA is my first serious SaaS project and the clearest expression of that approach.
              I&apos;m using it to demonstrate not only that I can build software, but that I can
              reason about product decisions, AI safety, security, and operational workflows.
            </p>
            <a className="text-link" href="https://github.com/Mr-TDG" target="_blank" rel="noreferrer">See my GitHub <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="principles shell" data-reveal>
        <div className="section-label">Build principles</div>
        <div className="principle-grid">
          <div><strong>01</strong><span>Useful beats impressive.</span></div>
          <div><strong>02</strong><span>Security is architecture, not a button.</span></div>
          <div><strong>03</strong><span>AI assists decisions; it doesn&apos;t become the authority.</span></div>
          <div><strong>04</strong><span>Every production failure is documentation.</span></div>
        </div>
      </section>

      <footer id="contact" className="footer dark-section" data-reveal>
        <div className="shell">
          <div className="section-label light">Contact</div>
          <h2>Building something<br /><em>worth solving?</em></h2>
          <p>Start with the business problem. The software comes after.</p>
          <div className="footer-actions">
            <a className="button footer-button" href="https://mail.google.com/mail/?view=cm&fs=1&to=deguzmantrystan%40gmail.com" target="_blank" rel="noreferrer">Email me <span>↗</span></a>
            <a className="button footer-button" href="https://github.com/Mr-TDG" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <CopyEmailButton />
            <a className="button footer-button secondary-dark" href="https://nova-tdg.vercel.app" target="_blank" rel="noreferrer">View NOVA <span>↗</span></a>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Trystan De Guzman</span>
            <span>Business × AI × Software</span>
          </div>
        </div>
        </footer>
      </main>
    </InteractiveShell>
  );
}
