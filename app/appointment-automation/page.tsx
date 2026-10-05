import InteractiveShell from "../components/InteractiveShell";

const sections = [
  ["01", "The business problem", "Appointment requests often arrive with incomplete information, ambiguous intent, or a time that is already occupied. The workflow needs to qualify the request, check availability, and either schedule it or ask for what is missing."],
  ["02", "Intake and validation", "A webhook receives the appointment request. Edit Fields normalizes the data, then a validation gate rejects requests missing required scheduling information before the workflow proceeds."],
  ["03", "AI appointment classification", "The AI agent identifies the appointment type, urgency, whether the request is ready to schedule, and the reason for that decision using structured output."],
  ["04", "Calendar availability", "Ready requests are normalized into an appointment payload, including date, preferred time, duration, and timezone. Google Calendar is queried before any booking is created."],
  ["05", "Controlled scheduling", "If the requested slot is available, the workflow creates the calendar event and sends a confirmation email. If the slot is occupied, the workflow stops the booking path and asks for another time."],
  ["06", "Timezone handling", "The appointment timezone belongs to the lead's requested appointment, not the automation operator's physical location. The verified test used America/Chicago and produced a 2:00 PM to 3:00 PM calendar event when the calendar was configured for Central Time."],
];

const testCases = [
  ["01", "Valid appointment request", "Created calendar event + confirmation email", "PASS"],
  ["02", "Occupied appointment slot", "Booking stopped + unavailable email", "PASS"],
  ["03", "Missing required information", "Rejected before scheduling", "PASS"],
  ["04", "AI not ready to schedule", "More-information email sent", "PASS"],
];

export default function AppointmentAutomationCaseStudy() {
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
          <h1>Appointment requests<br /><em>to confirmed bookings.</em></h1>
          <p>
            An AI-powered appointment scheduling workflow built in n8n. It validates
            incoming requests, classifies scheduling intent, checks Google Calendar
            availability, creates the appointment when possible, and handles conflicts
            or missing information without forcing a booking.
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
            <div><span>Actions</span><strong>Google Calendar + Gmail</strong></div>
          </div>
        </section>

        <section id="workflow" className="case-content shell" data-reveal>
          <div className="case-intro">
            <div>
              <span className="section-label">The system</span>
              <h2>Check first.<br /><em>Then schedule.</em></h2>
            </div>
            <p>
              The workflow keeps booking decisions controlled. Required fields are
              validated before AI processing, structured output determines whether the
              request is ready, and Google Calendar availability is checked before an
              event can be created.
            </p>
          </div>

          <div className="automation-flow">
            <div className="flow-node">Appointment Request Webhook</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node">Edit Fields</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node">Validate Appointment Request</div>
            <div className="flow-split">
              <div className="flow-path invalid">
                <span>FALSE</span>
                <div className="flow-node small">Reject Invalid Appointment</div>
              </div>
              <div className="flow-path valid">
                <span>TRUE</span>
                <div className="flow-arrow">↓</div>
                <div className="flow-node">AI Appointment Classifier</div>
                <div className="flow-arrow">↓</div>
                <div className="flow-node">Ready to Schedule?</div>
                <div className="flow-outcomes">
                  <div><strong>FALSE</strong><span>Request More Information</span></div>
                  <div><strong>TRUE</strong><span>Prepare Appointment</span></div>
                </div>
              </div>
            </div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node">Google Calendar Availability Check</div>
            <div className="flow-outcomes">
              <div><strong>AVAILABLE</strong><span>Create Appointment + Confirmation</span></div>
              <div><strong>OCCUPIED</strong><span>Slot Unavailable + Email</span></div>
            </div>
          </div>
        </section>

        <section className="dark-section automation-output" data-reveal>
          <div className="shell">
            <div className="section-label light">AI decision</div>
            <div className="output-grid">
              <div>
                <h2>Structured output keeps scheduling <em>controlled.</em></h2>
                <p>
                  The AI agent returns appointment type, urgency, readiness to schedule,
                  and a reason. Those fields inform the workflow rather than allowing
                  free-form model output to directly create a booking.
                </p>
              </div>
              <div className="output-card">
                <div><span>appointment_type</span><strong>PROPERTY_TOUR</strong></div>
                <div><span>urgency</span><strong>MEDIUM</strong></div>
                <div><span>ready_to_schedule</span><strong>true</strong></div>
                <div><span>timezone</span><strong>America/Chicago</strong></div>
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
            <h2>Core paths.<br /><em>Verified end to end.</em></h2>
            <p>
              Testing covered successful scheduling, occupied-slot handling, invalid
              requests, and requests that needed more information before scheduling.
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
              <div className="arch-node">Validate required scheduling fields</div>
              <div className="arch-arrow">↓</div>
              <div className="arch-node">AI returns structured scheduling intent</div>
              <div className="arch-arrow">↓</div>
              <div className="arch-node">Prepare normalized date, time, duration, and timezone</div>
              <div className="arch-arrow">↓</div>
              <div className="arch-node">Check Google Calendar before creating an event</div>
              <div className="arch-arrow">↓</div>
              <div className="arch-node">Create appointment or handle conflict</div>
            </div>
            <p className="architecture-note">
              The workflow does not assume availability. It validates, reasons, checks,
              and then takes the appropriate action.
            </p>
          </div>
        </section>

        <section className="case-close shell" data-reveal>
          <div className="section-label">What this demonstrates</div>
          <h2>Automation that knows <em>when to wait.</em></h2>
          <p>
            This project demonstrates practical scheduling automation, structured AI
            classification, input validation, calendar availability checks, timezone
            handling, conflict handling, automated confirmations, and failure paths.
            No production booking-volume or time-saved claim is made because this is a
            portfolio workflow rather than a live client deployment.
          </p>
          <a className="text-link" href="/">Return to portfolio <span>↗</span></a>
        </section>
      </main>
    </InteractiveShell>
  );
}
