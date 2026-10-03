import InteractiveShell from "../components/InteractiveShell";

const testCases = [
  ["01", "FAQ / business hours", "Automated response", "PASS"],
  ["02", "Billing / account update", "Automated response", "PASS"],
  ["03", "Duplicate charge + refund", "Human escalation", "PASS"],
  ["04", "Missing required name", "Rejected before AI", "PASS"],
];

const sections = [
  ["01", "The business problem", "Support requests need different handling. Some questions can be automated, while requests requiring account access, investigation, or judgment should reach a human."],
  ["02", "Intake and validation", "A webhook receives the customer name, email, and message. Edit Fields normalizes the input, then a validation gate stops incomplete requests before AI processing."],
  ["03", "AI triage", "The classifier returns structured category, urgency, needs_human, and reason fields instead of an unrestricted response."],
  ["04", "Controlled routing", "A deterministic Needs Human? branch uses the structured needs_human value to choose automated support or human escalation."],
  ["05", "Automated support", "Requests that do not require intervention receive a Gmail response containing the request and its classification."],
  ["06", "Human escalation", "Requests requiring investigation are sent to a human escalation inbox with customer details, category, urgency, reason, and action."],
];

export default function CustomerSupportAutomationCaseStudy() {
  return (
    <InteractiveShell>
      <main className="automation-case">
        <nav className="nav shell case-nav">
          <a className="brand" href="/">TDG<span>.</span></a>
          <div className="case-nav-links">
            <a href="/">Portfolio</a>
            <a href="https://github.com/Mr-TDG" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
        </nav>

        <section className="case-hero shell" data-reveal>
          <div className="eyebrow"><span className="status-dot" /> Case study · AI automation</div>
          <h1>Customer requests<br /><em>to the right action.</em></h1>
          <p>An AI-powered customer support triage workflow built in n8n. It validates requests, classifies the issue, decides whether human intervention is required, and routes the request accordingly.</p>
          <div className="case-hero-actions">
            <a className="button primary" href="#workflow">See the workflow <span>↓</span></a>
            <a className="button secondary" href="/">Back to portfolio</a>
          </div>
        </section>

        <section className="case-stats" data-reveal>
          <div className="shell case-stats-grid">
            <div><span>Role</span><strong>Automation · AI · Workflow design</strong></div>
            <div><span>Platform</span><strong>n8n Cloud</strong></div>
            <div><span>AI</span><strong>OpenAI Chat Model</strong></div>
            <div><span>Actions</span><strong>Gmail response + escalation</strong></div>
          </div>
        </section>

        <section id="workflow" className="case-content shell" data-reveal>
          <div className="case-intro">
            <div><span className="section-label">The system</span><h2>Classify first.<br /><em>Then choose the action.</em></h2></div>
            <p>The workflow keeps action logic outside the model. Required input is validated before AI processing, structured output captures the triage decision, and a deterministic branch decides between automated support and human escalation.</p>
          </div>

          <figure className="automation-screenshot">
            <img src="/project2-workflow.svg" alt="AI customer support classification and escalation workflow" />
            <figcaption>Workflow overview: intake, validation, AI triage, deterministic routing, automated support, and human escalation.</figcaption>
          </figure>

          <div className="automation-flow">
            <div className="flow-node">Customer Inquiry Webhook</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node">Edit Fields</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node">Validate Request</div>
            <div className="flow-split">
              <div className="flow-path invalid"><span>FALSE</span><div className="flow-node small">Invalid Request</div></div>
              <div className="flow-path valid">
                <span>TRUE</span>
                <div className="flow-arrow">↓</div>
                <div className="flow-node">AI Support Classifier</div>
                <div className="flow-arrow">↓</div>
                <div className="flow-node">Needs Human?</div>
                <div className="flow-outcomes">
                  <div><strong>TRUE</strong><span>Human Escalation</span></div>
                  <div><strong>FALSE</strong><span>Automated Support Reply</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dark-section automation-output" data-reveal>
          <div className="shell">
            <div className="section-label light">AI decision</div>
            <div className="output-grid">
              <div><h2>Structured triage keeps the next step <em>controlled.</em></h2><p>The classifier returns category, urgency, needs_human, and reason. Those fields become inputs to the workflow rather than a free-form AI response being trusted as the action.</p></div>
              <div className="output-card">
                <div><span>category</span><strong>BILLING</strong></div>
                <div><span>urgency</span><strong>HIGH</strong></div>
                <div><span>needs_human</span><strong>true</strong></div>
                <div><span>reason</span><p>Duplicate charge and refund request require account investigation and manual processing.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-content shell" data-reveal>
          <div className="section-label">How it works</div>
          <div className="case-sections">
            {sections.map(([number, title, body]) => <article key={number} className="case-section"><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
          </div>
        </section>

        <section className="automation-tests shell" data-reveal>
          <div className="section-label">Verification</div>
          <div className="test-header">
            <h2>Four scenarios.<br /><em>Four successful checks.</em></h2>
            <p>Testing covered an informational FAQ, a billing request that could be answered automatically, a billing request requiring human investigation, and an invalid request stopped before AI processing.</p>
          </div>
          <div className="test-table">
            {testCases.map(([number, scenario, behavior, result]) => <div className="test-row" key={number}><span>{number}</span><strong>{scenario}</strong><span>{behavior}</span><b>{result}</b></div>)}
          </div>
        </section>

        <section className="case-architecture dark-section" data-reveal>
          <div className="shell">
            <div className="section-label light">Engineering decisions</div>
            <div className="architecture">
              <div className="arch-node">Validate required fields before AI</div><div className="arch-arrow">↓</div>
              <div className="arch-node">AI classifies into structured fields</div><div className="arch-arrow">↓</div>
              <div className="arch-node">Deterministic needs_human decision</div><div className="arch-arrow">↓</div>
              <div className="arch-node">Automated response or human escalation</div>
            </div>
            <p className="architecture-note">AI performs triage, while the workflow controls whether automation or human intervention follows.</p>
          </div>
        </section>

        <section className="case-close shell" data-reveal>
          <div className="section-label">What this demonstrates</div>
          <h2>Knowing when to automate, <em>and when not to.</em></h2>
          <p>This project demonstrates customer support automation, structured AI classification, validation, branching logic, automated responses, human escalation, and end-to-end testing. No production volume or time-saved claim is made because this is a portfolio workflow rather than a live client deployment.</p>
          <a className="text-link" href="/">Return to portfolio <span>↗</span></a>
        </section>
      </main>
    </InteractiveShell>
  );
}