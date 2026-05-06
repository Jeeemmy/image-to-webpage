import MobileStatusBar from "../../framework/MobileStatusBar.jsx";
import avatarImage from "./assets/avatar.png";
import classSummaryImage from "./assets/class-summary-visual.png";
import travelJournalImage from "./assets/travel-journal-visual.png";
import "./SmartnoteSinglePage.css";

const BODY_FONT_STACK =
  '"SF Pro Display", "SF Pro Text", Manrope, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

function Icon({ name, className = "", strokeWidth = 2 }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (name) {
    case "sparkles":
      return (
        <svg {...common}>
          <path d="M8.2 4.5 9.9 8l3.6 1.7-3.6 1.7-1.7 3.6-1.7-3.6-3.6-1.7L6.5 8l1.7-3.5Z" />
          <path d="m17.2 3.7.7 1.5 1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7 1.5-.7.7-1.5Z" />
          <path d="m16.5 13.3 1 2.1 2.1 1-2.1 1-1 2.1-1-2.1-2.1-1 2.1-1 1-2.1Z" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
          <path d="M19.4 13.7a7.6 7.6 0 0 0 .1-1.7l2-1.5-2-3.4-2.4 1a8.3 8.3 0 0 0-1.5-.9L15.2 4h-4l-.4 3.2a8.3 8.3 0 0 0-1.5.9l-2.4-1-2 3.4 2 1.5a7.6 7.6 0 0 0 .1 1.7l-2 1.5 2 3.4 2.4-1a7.2 7.2 0 0 0 1.5.9l.4 3.2h4l.4-3.2a7.2 7.2 0 0 0 1.5-.9l2.4 1 2-3.4-2.2-1.5Z" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="10.6" cy="10.6" r="6.1" />
          <path d="m15.2 15.2 4.2 4.2" />
        </svg>
      );
    case "suitcase":
      return (
        <svg {...common}>
          <path d="M9 7V5.7A1.7 1.7 0 0 1 10.7 4h2.6A1.7 1.7 0 0 1 15 5.7V7" />
          <path d="M5.2 8.2h13.6a1.8 1.8 0 0 1 1.8 1.8v7.2a2.8 2.8 0 0 1-2.8 2.8H6.2a2.8 2.8 0 0 1-2.8-2.8V10a1.8 1.8 0 0 1 1.8-1.8Z" />
          <path d="M8.4 12.7h7.2" />
          <path d="M8.4 15.5h7.2" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M6.7 4.5h9.1a2 2 0 0 1 2 2v13H8.1a2.4 2.4 0 0 1-2.4-2.4V5.5a1 1 0 0 1 1-1Z" />
          <path d="M8.1 17.5h9.7" />
          <path d="M8.6 8.4h5.5" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common}>
          <path d="m7 10 5 5 5-5" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <path d="M7.6 3.8v3.4M16.4 3.8v3.4" />
          <path d="M4.9 8.3h14.2" />
          <path d="M6.1 5.5h11.8a1.8 1.8 0 0 1 1.8 1.8v10.8a1.8 1.8 0 0 1-1.8 1.8H6.1a1.8 1.8 0 0 1-1.8-1.8V7.3a1.8 1.8 0 0 1 1.8-1.8Z" />
          <path d="M8 12.1h2.2M13.8 12.1H16M8 15.7h2.2M13.8 15.7H16" />
        </svg>
      );
    case "dots":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <circle cx="6" cy="12" r="1.9" />
          <circle cx="12" cy="12" r="1.9" />
          <circle cx="18" cy="12" r="1.9" />
        </svg>
      );
    case "home-note":
      return (
        <svg {...common}>
          <path d="M7.2 10.7 12 6.6l4.8 4.1v7.1a1.5 1.5 0 0 1-1.5 1.5H8.7a1.5 1.5 0 0 1-1.5-1.5v-7.1Z" />
          <path d="M9.5 16.1h5" />
        </svg>
      );
    case "mic":
      return (
        <svg {...common}>
          <rect x="8.2" y="3.6" width="7.6" height="11.4" rx="3.8" />
          <path d="M5.2 11.2a6.8 6.8 0 0 0 13.6 0" />
          <path d="M12 18.1v3" />
        </svg>
      );
    case "pencil":
      return (
        <svg {...common}>
          <path d="m4.7 16.8-.8 3.3 3.3-.8 10.6-10.6-2.5-2.5L4.7 16.8Z" />
          <path d="m13.8 7.7 2.5 2.5" />
        </svg>
      );
    case "add-note":
      return (
        <svg {...common}>
          <path d="M8.2 5.4h6.4l3.2 3.2v9.6a1.8 1.8 0 0 1-1.8 1.8H8.2a1.8 1.8 0 0 1-1.8-1.8v-11a1.8 1.8 0 0 1 1.8-1.8Z" />
          <path d="M14.5 5.4v3.5h3.3" />
          <path d="M4.1 12h5.8" />
          <path d="M7 9.1v5.8" />
        </svg>
      );
    default:
      return null;
  }
}

function TopControls() {
  return (
    <div className="smartnote-top-controls">
      <button className="smartnote-model-chip" type="button">
        <span className="smartnote-model-icon">
          <Icon name="sparkles" className="smartnote-icon smartnote-icon--sparkles" strokeWidth={1.9} />
        </span>
        <span>Gemini &amp; GPT-4.1</span>
      </button>
      <button className="smartnote-round-control smartnote-round-control--settings" type="button" aria-label="Settings">
        <Icon name="settings" className="smartnote-icon smartnote-icon--settings" strokeWidth={1.9} />
      </button>
      <img className="smartnote-avatar" src={avatarImage} alt="" />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="smartnote-search" role="search">
      <span className="smartnote-search-icon">
        <Icon name="search" className="smartnote-icon smartnote-icon--search" strokeWidth={1.9} />
      </span>
      <span className="smartnote-search-placeholder">Search</span>
    </div>
  );
}

function AgentCard({ title, icon, image, variant }) {
  return (
    <article className={`smartnote-agent-card smartnote-agent-card--${variant}`}>
      <div className="smartnote-agent-card-top">
        <span className="smartnote-agent-card-icon">
          <Icon name={icon} className="smartnote-icon smartnote-icon--card" strokeWidth={1.75} />
        </span>
        <h2 className="smartnote-agent-card-title">{title}</h2>
      </div>
      <img className="smartnote-agent-card-image" src={image} alt="" draggable="false" />
    </article>
  );
}

function AgentSection() {
  return (
    <section className="smartnote-agent-section" aria-label="AI Note Agent">
      <div className="smartnote-section-heading">
        <h2>AI Note Agent</h2>
        <a href="#">See More</a>
      </div>
      <div className="smartnote-agent-row">
        <AgentCard
          icon="suitcase"
          image={travelJournalImage}
          title="Travel Journal"
          variant="travel"
        />
        <AgentCard
          icon="book"
          image={classSummaryImage}
          title="Class Summary"
          variant="class"
        />
      </div>
    </section>
  );
}

function KnowledgeHub() {
  return (
    <section className="smartnote-hub" aria-label="Knowledge Hub">
      <div className="smartnote-hub-heading">
        <h2>Knowledge Hub</h2>
        <a href="#">See More</a>
      </div>
      <div className="smartnote-filter-row">
        <button className="smartnote-filter smartnote-filter--active" type="button">
          Note
        </button>
        <button className="smartnote-filter smartnote-filter--source" type="button">
          <span>All Sources</span>
          <Icon name="chevron-down" className="smartnote-icon smartnote-icon--chevron" strokeWidth={2} />
        </button>
      </div>
      <article className="smartnote-note-card">
        <div className="smartnote-note-card-top">
          <h3>Introduction to Knotes</h3>
          <button type="button" aria-label="More note actions">
            <Icon name="dots" className="smartnote-icon smartnote-icon--dots" />
          </button>
        </div>
        <p>&gt; A smarter way to record, thinki and m....</p>
        <div className="smartnote-note-meta">
          <span className="smartnote-date">
            <Icon name="calendar" className="smartnote-icon smartnote-icon--calendar" strokeWidth={1.8} />
            <span>2025-08-22</span>
          </span>
          <span>AI Note Agent</span>
        </div>
      </article>
    </section>
  );
}

function BottomDock() {
  const actions = [
    { name: "home-note", label: "Notes", active: true },
    { name: "mic", label: "Voice" },
    { name: "pencil", label: "Write" },
    { name: "add-note", label: "New note", detached: true },
  ];

  return (
    <nav className="smartnote-bottom-dock" aria-label="Quick note actions">
      <div className="smartnote-dock-group">
        {actions.slice(0, 3).map((action) => (
          <button
            aria-label={action.label}
            className={`smartnote-dock-button ${action.active ? "smartnote-dock-button--active" : ""}`}
            key={action.name}
            type="button"
          >
            <Icon name={action.name} className="smartnote-icon smartnote-icon--dock" strokeWidth={1.9} />
          </button>
        ))}
      </div>
      <button
        aria-label={actions[3].label}
        className="smartnote-dock-button smartnote-dock-button--detached"
        type="button"
      >
        <Icon name={actions[3].name} className="smartnote-icon smartnote-icon--dock" strokeWidth={1.9} />
      </button>
    </nav>
  );
}

export default function SmartnoteSinglePage() {
  return (
    <main className="smartnote-page" style={{ fontFamily: BODY_FONT_STACK }}>
      <div className="smartnote-phone">
        <MobileStatusBar tone="light" />
        <TopControls />
        <section className="smartnote-hero" aria-label="Smart note search">
          <h1>Hey, smarter notes start with AI</h1>
          <SearchBar />
        </section>
        <AgentSection />
        <KnowledgeHub />
        <BottomDock />
      </div>
    </main>
  );
}
