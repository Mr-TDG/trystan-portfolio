const capabilities = [
  {
    number: "01",
    title: "Business Systems",
    text: "I translate messy operational problems into structured software, workflows, and measurable processes.",
  },
  {
    number: "02",
    title: "AI Engineering",
    text: "I integrate AI where it creates leverage while keeping authorization, validation, and business rules outside the model.",
  },
  {
    number: "03",
    title: "Product Building",
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

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#">TDG<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#engineering">Engineering</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero shell">
        <div className="eyebrow"><span className="status-dot" /> Product builder · AI automation · software</div>
        <h1>I build software<br /><em>for real business problems.</em></h1>
        <p className="hero-copy">
          I combine business development, automation, AI, and full-stack engineering
          to turn operational problems into practical software.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">Explore my work <span>↓</span></a>
          <a className="button secondary" href="#about">About me</a>
        </div>
        <div className="hero-meta">
          <span>Based in the Philippines</span>
          <span>Building with AI, not hiding behind it.</span>
        </div>
      </section>

      <section id="work" className="feature shell">
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
          <div className="nova-tags">
            <span>Next.js</span><span>TypeScript</span><span>Supabase</span><span>OpenAI</span><span>Vercel</span>
          </div>
          <div className="nova-bottom">
            <div>
              <span className="muted">Role</span>
              <strong>Product · Business · AI · Full-stack</strong>
            </div>
            <a href="https://nova-tdg.vercel.app" target="_blank" rel="noreferrer">Open NOVA <span>↗</span></a>
          </div>
        </div>
        <div className="case-note">
          <span>Case study</span>
          <p>From business problem → architecture → AI security → controlled automation → production.</p>
          <span className="soon">Full case study in progress</span>
        </div>
      </section>

      <section id="engineering" className="dark-section">
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

      <section id="about" className="about shell">
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
          </div>
        </div>
      </section>

      <section className="principles shell">
        <div className="section-label">Build principles</div>
        <div className="principle-grid">
          <div><strong>01</strong><span>Useful beats impressive.</span></div>
          <div><strong>02</strong><span>Security is architecture, not a button.</span></div>
          <div><strong>03</strong><span>AI assists decisions; it doesn&apos;t become the authority.</span></div>
          <div><strong>04</strong><span>Every production failure is documentation.</span></div>
        </div>
      </section>

      <footer id="contact" className="footer dark-section">
        <div className="shell">
          <div className="section-label light">Contact</div>
          <h2>Have a business problem<br /><em>worth building around?</em></h2>
          <p>Let&apos;s talk about the problem first. The software comes after.</p>
          <a className="button primary footer-button" href="mailto:hello@trystandeguzman.dev">Get in touch <span>↗</span></a>
          <div className="footer-bottom">
            <span>© 2026 Trystan De Guzman</span>
            <span>Business × AI × Software</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
