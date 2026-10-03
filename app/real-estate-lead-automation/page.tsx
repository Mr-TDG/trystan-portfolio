"use client";

import InteractiveShell from "../components/InteractiveShell";

const sections = [
  {
    number: "01",
    title: "The business problem",
    body: "Real estate teams can receive leads with very different levels of buying intent. Manually reviewing every lead, deciding who needs attention first, and sending the appropriate follow-up creates repetitive operational work.",
  },
  {
    number: "02",
    title: "The workflow",
    body: "A webhook receives the lead, Edit Fields normalizes the incoming data, and a validation gate checks that the required name and email fields exist before the lead reaches the AI qualification stage.",
  },
  {
    number: "03",
    title: "AI qualification",
    body: "The AI analyzes only the supplied lead information and returns a structured score from 0 to 100, a HOT/WARM/COLD temperature, a reason for the decision, and a recommended next action.",
  },
  {
    number: "04",
    title: "Automated routing",
    body: "The structured qualification result is passed to a routing step. HOT, WARM, and COLD leads each follow a separate Gmail follow-up path, so the sales response matches the qualification state.",
  },
  {
    number: "05",
    title: "Failure handling",
    body: "Invalid submissions do not reach the AI. Missing name or email data is routed to an explicit rejection path with a clear validation error, preventing incomplete inputs from continuing through the workflow.",
  },
  {
    number: "06",
    title: "Verification",
    body: "The workflow was tested with HOT, WARM, and COLD scenarios, missing-name and missing-email failures, and a valid HOT regression test after validation was added. The final end-to-end HOT execution completed successfully.",
  },
];

const testCases = [
  ["01", "HOT lead", "AI qualification + HOT email", "PASS"],
  ["02", "WARM lead", "AI qualification + WARM email", "PASS"],
  ["03", "COLD lead", "AI qualification + COLD email", "PASS"],
  ["04", "Missing name", "Rejected before AI", "PASS"],
  ["05", "HOT after validation change", "Regression check + HOT email", "PASS"],
  ["06", "Missing email", "Rejected before AI", "PASS"],
];

export default function RealEstateAutomationCaseStudy() {
  return (
    <InteractiveShell>
      <main className="automation-case">
        <nav className="nav shell case-nav">
          <a className="brand" href="/">TDG<span>.</span></a>
          <div className="case-nav-links">
            <a href="/">Portfolio</a>
            <a href="https://nova-tdg.vercel.app" target="_blank" rel="noreferrer">Live NOVA <span>↗</span></a>
          </div>
        </nav>

        <section className="case-hero shell" data-reveal>
          <div className="eyebrow"><span className="status-dot" /> Featured case study · AI automation</div>
          <h1>Real estate leads<br /><em>from intake to action.</em></h1>
          <p>
            An AI-powered lead qualification and follow-up workflow built in n8n.
            It validates incoming data, qualifies buying intent, routes the result,
            and sends the appropriate follow-up automatically.
          </p>
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
            <div><span>Actions</span><strong>Gmail follow-up</strong></div>
          </div>
        </section>

        <section id="workflow" className="case-content shell" data-reveal>
          <div className="case-intro">
            <div>
              <span className="section-label">The system</span>
              <h2>Validate first.<br /><em>Then let AI decide.</em></h2>
            </div>
            <p>
              The workflow keeps the business logic around the model. Required input
              is validated before AI processing, structured output controls the next
              routing step, and invalid leads are rejected instead of being silently
              passed downstream.
            </p>
          </div>

          <figure className="automation-screenshot">
            <img src="/project1-workflow.svg" alt="Project 1 AI real estate lead qualification and routing workflow" />
            <figcaption>Workflow overview: intake, validation, AI qualification, routing, and automated follow-up.</figcaption>
          </figure>

          <div className="automation-flow">
            <div className="flow-node">Lead Webhook</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node">Edit Fields</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node">Validate Lead</div>
            <div className="flow-split">
              <div className="flow-path invalid">
                <span>FALSE</span>
                <div className="flow-node small">Reject Invalid Lead</div>
              </div>
              <div className="flow-path valid">
                <span>TRUE</span>
                <div className="flow-arrow">↓</div>
                <div className="flow-node">AI Lead Qualification</div>
                <div className="flow-arrow">↓</div>
                <div className="flow-node">Route by Lead Temperature</div>
                <div className="flow-outcomes">
                  <div><strong>HOT</strong><span>HOT Lead Follow-Up</span></div>
                  <div><strong>WARM</strong><span>WARM Lead Follow-Up</span></div>
                  <div><strong>COLD</strong><span>COLD Lead Follow-Up</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dark-section automation-output" data-reveal>
          <div className="shell">
            <div className="section-label light">AI decision</div>
            <div className="output-grid">
              <div>
                <h2>Structured output keeps the next step <em>predictable.</em></h2>
                <p>
                  The qualification stage returns four fields used by the workflow:
                  score, temperature, reason, and recommended action.
                </p>
              </div>
              <div className="output-card">
                <div><span>lead_score</span><strong>90</strong></div>
                <div><span>lead_temperature</span><strong>HOT</strong></div>
                <div><span>reason</span><p>Clear near-term buying intent, defined budget, target location, timeline, and contact information.</p></div>
                <div><span>recommended_action</span><p>Contact the lead within 24 to 48 hours and continue qualification.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-content shell" data-reveal>
          <div className="section-label">How it works</div>
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

        <section className="automation-tests shell" data-reveal>
          <div className="section-label">Verification</div>
          <div className="test-header">
            <h2>Six scenarios.<br /><em>Six successful checks.</em></h2>
            <p>
              Testing covered the three qualification paths, both required-field
              failure conditions, and a regression test after validation was introduced.
            </p>
          </div>
          <div className="test-table">
            {testCases.map(([number, scenario, behavior, result]) => (
              <div className="test-row" key={number}>
                <span>{number}</span>
                <strong>{scenario}</strong>
                <span>{behavior}</span>
                <b>{result}</b>
              </div>
            ))}
          </div>
        </section>

        <section className="case-architecture dark-section" data-reveal>
          <div className="shell">
            <div className="section-label light">Engineering decisions</div>
            <div className="architecture">
              <div className="arch-node">Input validation before AI</div>
              <div className="arch-arrow">↓</div>
              <div className="arch-node">AI receives only supplied lead information</div>
              <div className="arch-arrow">↓</div>
              <div className="arch-node">Structured score + temperature + reason + action</div>
              <div className="arch-arrow">↓</div>
              <div className="arch-node">Deterministic HOT / WARM / COLD routing</div>
              <div className="arch-arrow">↓</div>
              <div className="arch-node">Automated Gmail follow-up</div>
            </div>
            <p className="architecture-note">
              The goal is not to make the model the authority. The workflow controls what
              enters the model, what comes out, and what action follows.
            </p>
          </div>
        </section>

        <section className="case-close shell" data-reveal>
          <div className="section-label">What this demonstrates</div>
          <h2>Business workflow thinking, <em>not just an AI demo.</em></h2>
          <p>
            This project demonstrates practical workflow automation, structured AI
            integration, validation, branching logic, failure handling, testing, and
            automated business actions. No sales conversion or time-saved claim is made
            because this portfolio build has not yet been measured in a live client
            environment.
          </p>
          <a className="text-link" href="/">Return to portfolio <span>↗</span></a>
        </section>
      </main>
    </InteractiveShell>
  );
}
