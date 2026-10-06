import InteractiveShell from "../components/InteractiveShell";

const sections = [
  ["01", "The business problem", "Business performance data can contain several signals at once. The workflow turns supplied revenue, lead, qualification, close, and response-time metrics into a concise operational analysis and a priority level."],
  ["02", "Intake and validation", "A webhook receives the business data. Edit Fields prepares the input, then a validation gate checks the required fields before any KPI calculation or AI analysis proceeds."],
  ["03", "KPI calculation", "The workflow calculates the KPI values before the model sees them. Revenue change, lead change, qualification rate, close rate, and response-time change are passed to the analyst as supplied metrics."],
  ["04", "AI business analysis", "The AI Business Analyst identifies the primary risk, primary opportunity, finding, and recommended action. Its instructions explicitly prohibit invented causes, customers, events, or business conditions."],
  ["05", "Structured priority routing", "The model returns a structured priority value. Deterministic branches then route the result to High, Medium, or Low priority Gmail alerts."],
  ["06", "Webhook response", "A Respond to Webhook node returns a JSON response with the analysis status, priority, and trend while the notification path handles the operational alert."],
];

const testCases = [
  ["01", "High priority analysis", "High Priority Gmail alert", "PASS"],
  ["02", "Medium priority analysis", "Medium Priority Gmail alert", "PASS"],
  ["03", "Low priority analysis", "Low Priority Gmail alert", "PASS"],
  ["04", "Invalid business data", "Rejected before AI analysis", "PASS"],
];

export default function BusinessIntelligenceAutomationCaseStudy() {
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
          <h1>Business data<br /><em>to the next action.</em></h1>
          <p>
            An AI-powered business intelligence workflow built in n8n. It validates
            incoming metrics, works from pre-calculated KPIs, produces a structured
            business analysis, assigns a priority level, and sends the appropriate
            Gmail alert.
          </p>
          <div className="case-hero-actions">
            <a className="button primary" href="#workflow">See the workflow <span>↓</span></a>
            <a className="button secondary" href="/">Back to portfolio</a>
          </div>
        </section>

        <section className="case-stats" data-reveal>
          <div className="shell case-stats-grid">
            <div><span>Role</span><strong>Automation · AI · BI workflow design</strong></div>
            <div><span>Platform</span><strong>n8n Cloud</strong></div>
            <div><span>AI</span><strong>OpenAI Chat Model</strong></div>
            <div><span>Actions</span><strong>Gmail alerts + webhook response</strong></div>
          </div>
        </section>

        <section id="workflow" className="case-content shell" data-reveal>
          <div className="case-intro">
            <div>
              <span className="section-label">The system</span>
              <h2>Analyze first.<br /><em>Then prioritize.</em></h2>
            </div>
            <p>
              The workflow separates data validation, KPI calculation, AI interpretation,
              and action routing. Invalid data stops before AI. Valid analysis is returned
              in a structured format, then a deterministic priority router chooses the
              appropriate alert.
            </p>
          </div>

          <figure className="automation-screenshot">
            <img src="/project4-workflow.svg" alt="AI business intelligence and priority alert workflow" />
            <figcaption>Workflow overview: validation, KPI calculation, AI analysis, deterministic priority routing, Gmail alerts, and webhook response.</figcaption>
          </figure>

          <div className="automation-flow">
            <div className="flow-node">Business Intelligence Webhook</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node">Edit Fields</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node">Validate Business Data</div>
            <div className="flow-split">
              <div className="flow-path invalid">
                <span>FALSE</span>
                <div className="flow-node small">Reject Invalid Data</div>
              </div>
              <div className="flow-path valid">
                <span>TRUE</span>
                <div className="flow-arrow">↓</div>
                <div className="flow-node">Calculate KPIs</div>
                <div className="flow-arrow">↓</div>
                <div className="flow-node">AI Business Analyst</div>
                <div className="flow-arrow">↓</div>
                <div className="flow-node">Priority Router</div>
                <div className="flow-outcomes">
                  <div><strong>HIGH</strong><span>High Priority Alert</span></div>
                  <div><strong>MEDIUM</strong><span>Medium Priority Alert</span></div>
                  <div><strong>LOW</strong><span>Low Priority Alert</span></div>
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
                <h2>Business analysis with <em>bounded reasoning.</em></h2>
                <p>
                  The model is instructed to use only supplied data, avoid inventing
                  business conditions, distinguish facts from interpretation, and keep
                  recommendations directly tied to the provided metrics.
                </p>
              </div>
              <div className="output-card">
                <div><span>overall_status</span><strong>ATTENTION_NEEDED</strong></div>
                <div><span>trend</span><strong>MIXED</strong></div>
                <div><span>priority</span><strong>MEDIUM</strong></div>
                <div><span>output</span><p>Primary risk, primary opportunity, finding, and recommended action are returned as structured fields.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-content shell" data-reveal>
          <div className="section-label">How it works</div>
          <div className="case-sections">
            {sections.map(([number, title, body]) => (
              <article key={number} className="case-section">
                <span>{number}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="automation-tests shell" data-reveal>
          <div className="section-label">Verification</div>
          <div className="test-header">
            <h2>Four paths.<br /><em>Four successful checks.</em></h2>
            <p>
              End-to-end testing covered high, medium, and low priority routing plus
              invalid business data. Each path was observed in the n8n execution view,
              with Gmail alerts confirmed for the priority branches.
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
              <div className="arch-node">Validate required business fields before analysis</div>
              <div className="arch-arrow">↓</div>
              <div className="arch-node">Calculate and pass KPI values to the analyst</div>
              <div className="arch-arrow">↓</div>
              <div className="arch-node">AI returns structured business analysis</div>
              <div className="arch-arrow">↓</div>
              <div className="arch-node">Deterministic High / Medium / Low routing</div>
              <div className="arch-arrow">↓</div>
              <div className="arch-node">Gmail alert + webhook response</div>
            </div>
            <p className="architecture-note">
              The AI interprets the metrics. The workflow controls validation, routing,
              notifications, and the HTTP response.
            </p>
          </div>
        </section>

        <section className="case-close shell" data-reveal>
          <div className="section-label">What this demonstrates</div>
          <h2>Turning business metrics into <em>operational decisions.</em></h2>
          <p>
            This project demonstrates webhook intake, data validation, KPI-driven analysis,
            structured AI output, deterministic priority routing, Gmail notifications, and
            end-to-end testing. It is a portfolio workflow, so no production volume or
            business impact claim is made.
          </p>
          <a className="text-link" href="/">Return to portfolio <span>↗</span></a>
        </section>
      </main>
    </InteractiveShell>
  );
}
