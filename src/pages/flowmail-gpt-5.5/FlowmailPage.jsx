import avatarUrl from "./assets/john-doe-avatar.png";
import "./flowmail.css";

function Icon({ name, className = "" }) {
  const common = {
    className: `fm-icon ${className}`,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    grid: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1.5" />
        <rect x="14" y="4" width="6" height="6" rx="1.5" />
        <rect x="4" y="14" width="6" height="6" rx="1.5" />
        <rect x="14" y="14" width="6" height="6" rx="1.5" />
      </>
    ),
    mail: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="3" />
        <path d="m5.8 8.3 6.2 4.6 6.2-4.6" />
      </>
    ),
    automation: (
      <>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7.5v4.3M7 17.5l3.6-4.2M17 17.5l-3.6-4.2" />
      </>
    ),
    users: (
      <>
        <path d="M16 19c0-2.1-1.8-3.8-4-3.8s-4 1.7-4 3.8" />
        <circle cx="12" cy="10" r="3" />
        <path d="M5.4 16.8c-.9-.4-1.9-.6-3-.6M21.6 16.2c-1.1 0-2.1.2-3 .6M6.2 11.2a2.4 2.4 0 1 1 1.1-4.6M16.7 6.6a2.4 2.4 0 1 1 1.1 4.6" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 3.2-3.1 3.1 2.1L18 8.5" />
        <path d="M18 8.5v4.2M18 8.5h-4.2" />
      </>
    ),
    templates: (
      <>
        <rect x="6.5" y="4" width="11" height="15" rx="2.2" transform="rotate(14 12 11.5)" />
        <path d="M10 8.2h5M9.3 11h5M8.6 13.8h3" />
      </>
    ),
    flame: (
      <>
        <path
          d="M12 21c4.2-1.5 6-4.1 6-7.1 0-2.6-1.3-4.7-3.7-6.1.2 2.5-.8 3.9-2.2 4.6.2-2.9-1.2-5.6-3.5-7.4.3 3.6-2.6 5.5-2.6 8.8 0 3.1 2 5.7 6 7.2Z"
          fill="currentColor"
          stroke="none"
        />
        <path d="M12.2 18.4c1.6-.8 2.4-1.9 2.4-3.3 0-1.2-.6-2.2-1.7-2.9 0 1.2-.6 2.1-1.6 2.6.1-1.4-.6-2.6-1.6-3.4.1 1.8-1.2 2.8-1.2 4.3 0 1.2.8 2.2 3.7 2.7Z" />
      </>
    ),
    forms: (
      <>
        <rect x="5" y="4" width="11" height="15" rx="2.4" />
        <rect x="9" y="8" width="10" height="12" rx="2.4" />
        <path d="M8 8h4M8 11h3" />
      </>
    ),
    settings: (
      <>
        <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
        <path d="m19 12 .9-1.7-1.8-3.1-1.9.1a7.4 7.4 0 0 0-1.5-.9L13.8 4h-3.6l-.8 2.4c-.5.2-1 .5-1.5.9L6 7.2l-1.8 3.1L5 12l-.8 1.7L6 16.8l1.9-.1c.5.4 1 .7 1.5.9l.8 2.4h3.6l.8-2.4c.5-.2 1-.5 1.5-.9l1.9.1 1.8-3.1L19 12Z" />
      </>
    ),
    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.6" />
        <path d="m16 16 4.2 4.2" />
      </>
    ),
    bell: (
      <>
        <path d="M18 9.8a6 6 0 1 0-12 0c0 7-2.4 6.4-2.4 8h16.8c0-1.6-2.4-1-2.4-8Z" />
        <path d="M9.8 20a2.4 2.4 0 0 0 4.4 0" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    spark: (
      <>
        <path
          d="M12 2.5 14.1 9l6.4 2-6.4 2L12 19.5 9.9 13l-6.4-2 6.4-2L12 2.5Z"
          fill="currentColor"
          stroke="none"
        />
        <path
          d="M19 3.5 20 6l2.5 1-2.5 1-1 2.5L18 8l-2.5-1L18 6l1-2.5Z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),
    checkCircle: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.7 12.2 2.2 2.2 4.7-5" />
      </>
    ),
    link: (
      <>
        <path d="M10.4 13.6a4 4 0 0 0 5.7.1l2-2a4 4 0 0 0-5.6-5.7l-1.1 1" />
        <path d="M13.6 10.4a4 4 0 0 0-5.7-.1l-2 2a4 4 0 0 0 5.6 5.7l1.1-1" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="10" height="12" rx="2" />
        <path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </>
    ),
    sync: (
      <>
        <path d="M17 3v5h-5" />
        <path d="M7 21v-5h5" />
        <path d="M17 8a6.5 6.5 0 0 0-10.7-2.5" />
        <path d="M7 16a6.5 6.5 0 0 0 10.7 2.5" />
      </>
    ),
    trend: (
      <>
        <path d="m5 15 4.2-4.1 3.2 2.4L19 7" />
        <path d="M19 7v5h-5" />
      </>
    ),
    dots: (
      <>
        <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),
    chevron: <path d="m7 10 5 5 5-5" />,
    volume: (
      <>
        <path d="M5 14.5h3.5L14 19V5L8.5 9.5H5v5Z" fill="currentColor" stroke="none" />
        <path d="M17.5 8.5a6 6 0 0 1 0 7" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function FlowMailLogo() {
  return (
    <div className="fm-brand-mark" aria-hidden="true">
      <svg viewBox="0 0 36 36" fill="none">
        <rect x="3.5" y="3.5" width="29" height="29" rx="8.5" stroke="rgba(255,255,255,.42)" strokeWidth="2" />
        <rect x="8.5" y="10" width="19" height="14.5" rx="4" stroke="white" strokeWidth="2.2" />
        <path d="m10.8 13.7 6.8 5 7.6-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

const navItems = [
  ["Dashboard", "grid"],
  ["Campaigns", "mail"],
  ["Automations", "automation"],
  ["Audience", "users"],
  ["Analytics", "chart"],
  ["Templates", "templates"],
  ["Integrations", "flame"],
  ["Forms", "forms"],
  ["Settings", "settings"],
];

const stats = [
  { label: "Total Available", value: "24", change: "+6%", icon: "checkCircle" },
  { label: "Connected", value: "09", change: "+2%", icon: "link" },
  { label: "Categories", value: "08", change: "+5%", icon: "copy" },
  { label: "Last Synced", value: "2m", change: "Live", icon: "sync", live: true },
];

const integrations = [
  {
    name: "Slack",
    description: "Streamline team collaboration with timelines and customizable workflows.",
    brand: "slack",
    active: true,
  },
  {
    name: "Trello",
    description: "Visual project management using boards, lists, and cards for flexible task tracking.",
    brand: "trello",
    active: true,
  },
  {
    name: "Monday.com",
    description: "Optimize workflow automation and visualize progress with customizable dashboards.",
    brand: "monday",
    active: true,
  },
  {
    name: "Notion",
    description: "Unify tasks, notes, and files for better project and team oversight.",
    brand: "notion",
    active: false,
  },
  {
    name: "Jira",
    description: "Manage complex projects with advanced issue tracking and agile planning capabilities.",
    brand: "jira",
    active: true,
  },
  {
    name: "Asana",
    description: "Improve team coordination, task management, and project tracking.",
    brand: "asana",
    active: true,
  },
  {
    name: "ClickUp",
    description: "Coordinate docs, goals, and workflows across every project space.",
    brand: "clickup",
    active: true,
  },
  {
    name: "Basecamp",
    description: "Keep projects, messages, and schedules together for focused teamwork.",
    brand: "basecamp",
    active: false,
  },
  {
    name: "Wrike",
    description: "Enhance productivity with real-time planning and workflow visibility.",
    brand: "wrike",
    active: true,
  },
];

function BrandIcon({ brand }) {
  return <span className={`fm-integration-logo fm-logo-${brand}`} aria-hidden="true" />;
}

function Sidebar() {
  return (
    <aside className="fm-sidebar">
      <div className="fm-brand">
        <FlowMailLogo />
        <span>FlowMail</span>
        <button className="fm-sidebar-toggle" aria-label="Collapse sidebar">
          <Icon name="volume" />
        </button>
      </div>

      <nav className="fm-nav" aria-label="Primary navigation">
        {navItems.map(([label, icon]) => (
          <button
            className={`fm-nav-item ${label === "Integrations" ? "is-active" : ""}`}
            type="button"
            key={label}
          >
            <Icon name={icon} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <button className="fm-profile" type="button">
        <img src={avatarUrl} alt="John Doe" />
        <span className="fm-profile-text">
          <strong>John Doe</strong>
          <span>Pro Plan</span>
        </span>
        <Icon name="chevron" />
      </button>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="fm-topbar">
      <h2>Integrations</h2>
      <div className="fm-topbar-actions">
        <label className="fm-search fm-global-search">
          <Icon name="search" />
          <input type="search" placeholder="Search here..." aria-label="Search here" />
        </label>
        <button className="fm-bell" type="button" aria-label="Notifications">
          <Icon name="bell" />
        </button>
        <button className="fm-ai-button" type="button">
          <Icon name="spark" />
          <span>Get Ai Insight</span>
        </button>
      </div>
    </header>
  );
}

function StatCard({ stat }) {
  return (
    <article className="fm-stat-card">
      <div className="fm-stat-head">
        <span className="fm-mini-icon">
          <Icon name={stat.icon} />
        </span>
        <h3>{stat.label}</h3>
        <button className="fm-dots" type="button" aria-label={`${stat.label} options`}>
          <Icon name="dots" />
        </button>
      </div>
      <div className="fm-stat-well">
        <strong>{stat.value}</strong>
        <span className={stat.live ? "fm-live-badge" : "fm-change-badge"}>
          {!stat.live && <Icon name="trend" />}
          {stat.change}
        </span>
      </div>
    </article>
  );
}

function Switch({ active }) {
  return (
    <button
      type="button"
      className={`fm-switch ${active ? "is-on" : ""}`}
      aria-pressed={active}
      aria-label={active ? "Disable integration" : "Enable integration"}
    >
      <span />
    </button>
  );
}

function IntegrationCard({ item }) {
  return (
    <article className="fm-integration-card">
      <button className="fm-card-menu" type="button" aria-label={`${item.name} options`}>
        <Icon name="dots" />
      </button>
      <div className="fm-card-body">
        <BrandIcon brand={item.brand} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <footer className="fm-card-footer">
        <div className="fm-footer-actions">
          <button className="fm-icon-action" type="button" aria-label={`${item.name} settings`}>
            <Icon name="settings" />
          </button>
          <button className="fm-details" type="button">
            Details
          </button>
        </div>
        <Switch active={item.active} />
      </footer>
    </article>
  );
}

export default function FlowmailPage() {
  return (
    <div className="fm-shell">
      <Sidebar />
      <main className="fm-main">
        <Topbar />
        <div className="fm-main-scroll">
          <section className="fm-hero">
            <div>
              <h1>Integrations</h1>
              <p>Connect FlowMail with your favorite tools</p>
            </div>
            <button className="fm-request" type="button">
              <Icon name="plus" />
              <span>Request Integration</span>
            </button>
          </section>

          <section className="fm-stats-grid" aria-label="Integration summary">
            {stats.map((stat) => (
              <StatCard stat={stat} key={stat.label} />
            ))}
          </section>

          <section className="fm-catalog">
            <div className="fm-catalog-head">
              <h2>All Integrations</h2>
              <div className="fm-catalog-controls">
                <label className="fm-search fm-integration-search">
                  <Icon name="search" />
                  <input type="search" placeholder="Search Integrations..." aria-label="Search Integrations" />
                </label>
                <div className="fm-tabs" role="tablist" aria-label="Integration status">
                  <button className="is-active" type="button" role="tab" aria-selected="true">
                    All
                  </button>
                  <button type="button" role="tab" aria-selected="false">
                    Available
                  </button>
                  <button type="button" role="tab" aria-selected="false">
                    Connected
                  </button>
                </div>
              </div>
            </div>

            <div className="fm-integrations-grid">
              {integrations.map((item) => (
                <IntegrationCard item={item} key={item.name} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
