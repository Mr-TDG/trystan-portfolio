const sections = [
  {
    number: "01",
    title: "The problem",
    body: "NOVA started from a practical business question: what happens when an organization has useful data, workflows, and AI capabilities, but the systems around them are disconnected? The product is designed around turning operational information into structured work and decisions.",
  },
  {
    number: "02",
    title: "The product",
    body: "The first release is a multi-tenant SaaS workspace with authenticated users, tenant-scoped data, lead operations, integrations, AI-assisted workflows, audit logging, and a controlled Self-Fix control plane. V2 is being shaped around two experiences: management runs the organization; employees work within it.",
  },
  {
    number: "03",
    title: "The architecture",
    body: "The application is built with Next.js and TypeScript, backed by Supabase/PostgreSQL. Authentication and authorization stay server-side. Data access is tenant-scoped, integrations are handled through server routes, and the AI layer is separated behind an application gateway.",
  },
  {
    number: "04",
    title: "AI security",
    body: "The AI layer does not receive authority simply because a model can generate an answer. NOVA uses prompt-extraction defenses, sensitive-output guards, structured inputs and outputs, allowlisted read-only tools, tenant scoping, rate limits, audit events, and deterministic regression tests.",
  },
  {
    number: "05",
    title: "Controlled automation",
    body: "Self-Fix was designed as a control plane rather than an autonomous production deployer. Incidents become diagnoses and proposals; approved work moves to an isolated worker, runs verification, and reports back. Production authority remains outside the model.",
  },
  {
    number: "06",
    title: "What broke",
    body: "Building a real product exposed real failures: mismatched database assumptions, demo provisioning constraints, integration-state issues, and an AI prompt-security gap. Each was treated as an engineering problem: reproduce, inspect the actual system, fix the boundary, verify, and document the lesson.",
  },
];

export default function NovaCaseStudy() {
  return (
    <main className="case-study">
      <nav className="nav shell case-nav">
        <a className="brand" href="/">TDG<span>.</span></a>
        <div className="case-nav-links">
          <a href="/">Portfolio</a>
          <a href="https://nova-tdg.vercel.app" target="_blank" rel="noreferrer">Live NOVA <span>↗</span></a>
        </div>
      </nav>

      <section className="case-hero shell">
        <div className="eyebrow"><span className="status-dot" /> Featured case study · NOVA</div>
        <h1>Building a SaaS<br /><em>from the business problem up.</em></h1>
        <p>
          NOVA is my first serious SaaS project: a multi-tenant platform where business
          operations, AI, security, automation, and product thinking meet.
        </p>
        <div className="case-hero-actions">
          <a className="button primary" href="https://nova-tdg.vercel.app" target="_blank" rel="noreferrer">Open NOVA <span>↗</span></a>
          <a className="button secondary" href="/">Back to portfolio</a>
        </div>
      </section>

      <section className="case-stats">
        <div className="shell case-stats-grid">
          <div><span>Role</span><strong>Product · Business · AI · Full-stack</strong></div>
          <div><span>Stack</span><strong>Next.js · TypeScript · Supabase</strong></div>
          <div><span>AI</span><strong>OpenAI · security gateway</strong></div>
          <div><span>Delivery</span><strong>GitHub · CI/CD · Vercel</strong></div>
        </div>
      </section>

      <section className="case-content shell">
        <div className="case-intro">
          <span className="section-label">The build</span>
          <h2>Not a tutorial project.<br /><em>A real product under iteration.</em></h2>
          <p>
            The goal was never to make a convincing screenshot. The goal was to take an
            idea through product decisions, implementation, deployment, failure, correction,
            and verification.
          </p>
        </div>

        <div className="case-sections">
          {sections.map((section) => (
            <article key={section.number} className="case-section">
              <span>{section.number}</span>
              <div>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-architecture dark-section">
        <div className="shell">
          <div className="section-label light">System thinking</div>
          <div className="architecture">
            <div className="arch-node">User</div>
            <div className="arch-arrow">↓</div>
            <div className="arch-node">Authentication + tenant authorization</div>
            <div className="arch-arrow">↓</div>
            <div className="arch-node">NOVA application + data layer</div>
            <div className="arch-arrow">↓</div>
            <div className="arch-node">AI gateway / allowlisted tools</div>
            <div className="arch-arrow">↓</div>
            <div className="arch-node">Validated output / controlled action</div>
          </div>
          <p className="architecture-note">
            The important boundary is not the model. The application remains the authority.
          </p>
        </div>
      </section>

      <section className="case-close shell">
        <div className="section-label">What&apos;s next</div>
        <h2>V2 moves from business operations to <em>organization management.</em></h2>
        <p>
          The next release is being designed around two interfaces: a management experience
          for running the organization and an employee experience for working within it.
          The core stays industry-agnostic.
        </p>
        <a className="text-link" href="/">Return to portfolio <span>↗</span></a>
      </section>
    </main>
  );
}
