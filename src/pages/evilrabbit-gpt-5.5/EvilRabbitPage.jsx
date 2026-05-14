import "./evilrabbit.css";
import deviceImage from "./assets/rabbit-r2-device-clean.png";

const navItems = [
  { id: "overview", label: "Overview", icon: "home", active: true },
  { id: "display", label: "Display", icon: "monitor" },
  { id: "knobs", label: "Knobs", icon: "loader" },
  { id: "scroll", label: "Scroll Wheel", icon: "scroll" },
  { id: "system", label: "System", icon: "settings" },
];

const statusRows = [
  { label: "Battery", value: "78%", icon: "battery", highlight: true },
  {
    label: "Storage",
    value: "50%",
    detail: "32 GB / 64 GB",
    icon: "cloud",
    progress: 50,
  },
  {
    label: "Firmware",
    value: "v1.0.3",
    detail: "Up to date",
    icon: "chip",
    badge: true,
  },
  { label: "Uptime", detail: "2d 14h 34m", icon: "clock" },
];

const displaySettings = [
  { label: "Brightness", value: "27%", icon: "sun", progress: 27 },
  { label: "Timeout", value: "30 Sec", select: true },
  { label: "Animation", value: "Pixel Fade", select: true },
];

const scrollSettings = [
  { label: "Sensitivity", value: "60%", icon: "sun", progress: 60 },
  { label: "Haptic Feedback", toggle: true, enabled: true },
  { label: "Vibration", toggle: true, enabled: false },
];

const knobSettings = [
  { label: "Function", value: "Default" },
  { label: "Weight", value: "Volume" },
];

const aiBars = [
  18, 24, 31, 28, 20, 15, 18, 31, 43, 52, 41, 24, 16, 20, 30, 44, 56, 36, 25,
  31, 39, 47, 32,
];

const ramBars = Array.from({ length: 48 }, (_, index) =>
  index < 17 ? 78 : Math.max(16, 70 - index * 1.1),
);

function Icon({ name, className = "" }) {
  const common = {
    className: `er-icon ${className}`,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.85,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="m3.5 11.1 8.5-7.5 8.5 7.5" />
          <path d="M5.7 10.4v9.1h12.6v-9.1" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="11.5" rx="1.7" />
          <path d="M8.8 20h6.4" />
          <path d="M12 16.5V20" />
        </svg>
      );
    case "loader":
      return (
        <svg {...common}>
          <path d="M12 3.2v3" />
          <path d="M12 17.8v3" />
          <path d="M3.2 12h3" />
          <path d="M17.8 12h3" />
          <path d="m5.8 5.8 2.1 2.1" />
          <path d="m16.1 16.1 2.1 2.1" />
          <path d="m18.2 5.8-2.1 2.1" />
          <path d="m7.9 16.1-2.1 2.1" />
        </svg>
      );
    case "scroll":
      return (
        <svg {...common}>
          <rect x="8" y="3.5" width="8" height="17" rx="4" />
          <path d="m12 7.1-2 2.2" />
          <path d="m12 7.1 2 2.2" />
          <path d="m12 16.9 2-2.2" />
          <path d="m12 16.9-2-2.2" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
          <path d="m18.4 13.7 1.8 1.2-1.9 3.3-2.2-.9c-.5.4-1 .7-1.7.9l-.3 2.3h-4l-.3-2.3a7 7 0 0 1-1.7-.9l-2.2.9-1.9-3.3 1.8-1.2a7.3 7.3 0 0 1 0-1.7L4 10.8l1.9-3.3 2.2.9c.5-.4 1-.7 1.7-.9l.3-2.3h4l.3 2.3c.6.2 1.2.5 1.7.9l2.2-.9 1.9 3.3-1.8 1.2c.1.6.1 1.1 0 1.7Z" />
        </svg>
      );
    case "battery":
      return (
        <svg {...common}>
          <rect x="3.8" y="7.5" width="14.8" height="9" rx="1.4" />
          <path d="M20.5 10.4v3.2" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18h9.3a4.1 4.1 0 0 0 .4-8.2A5.4 5.4 0 0 0 6.6 7.9 4.9 4.9 0 0 0 7 18Z" />
        </svg>
      );
    case "chip":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="1.4" />
          <path d="M9 3.2v2.4" />
          <path d="M15 3.2v2.4" />
          <path d="M9 18.4v2.4" />
          <path d="M15 18.4v2.4" />
          <path d="M3.2 9h2.4" />
          <path d="M3.2 15h2.4" />
          <path d="M18.4 9h2.4" />
          <path d="M18.4 15h2.4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7.5v5l3.3 2" />
        </svg>
      );
    case "speaker":
      return (
        <svg {...common}>
          <path d="M4 9.4h4l5-4v13.2l-5-4H4Z" />
          <path d="M16.1 9.2a4.8 4.8 0 0 1 0 5.6" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 2.8v3" />
          <path d="M12 18.2v3" />
          <path d="M2.8 12h3" />
          <path d="M18.2 12h3" />
          <path d="m4.9 4.9 2.1 2.1" />
          <path d="m17 17 2.1 2.1" />
          <path d="m19.1 4.9-2.1 2.1" />
          <path d="m7 17-2.1 2.1" />
        </svg>
      );
    case "mouse":
      return (
        <svg {...common}>
          <rect x="7.4" y="3.3" width="9.2" height="17.4" rx="4.6" />
          <path d="M12 3.3v6.7" />
          <path d="M7.5 10h9" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path d="m7 9 5 5 5-5" />
        </svg>
      );
    case "zap":
      return (
        <svg {...common}>
          <path d="m13 2-7 12h5l-1 8 7-12h-5Z" />
        </svg>
      );
    case "more":
      return (
        <svg {...common}>
          <path d="M12 5.2h.01" />
          <path d="M12 12h.01" />
          <path d="M12 18.8h.01" />
        </svg>
      );
    default:
      return null;
  }
}

function RabbitMark() {
  return (
    <svg className="er-logo-mark" viewBox="0 0 40 40" aria-hidden="true">
      <path
        d="M6 11.4 17.4 7l6.8 8.5-1.5 10.6-8.5 4.7-8.7-4V14.7Z"
        fill="currentColor"
      />
      <path d="m20.6 5.8 5.2 3.2.4 11.8-5.3-5.6Z" fill="currentColor" />
      <path
        d="m25.8 12.2 7.3 5.4v10.1l-8.8 4.7-8.1-4.9 7.6-4.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Sidebar() {
  return (
    <aside className="er-sidebar" aria-label="Evil Rabbit navigation">
      <div className="er-brand">
        <RabbitMark />
        <span>Evil Rabbit</span>
      </div>

      <nav className="er-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            className={`er-nav-item${item.active ? " is-active" : ""}`}
            type="button"
            key={item.id}
            aria-current={item.active ? "page" : undefined}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="er-sidebar-footer">
        <section className="er-connection-card" aria-label="Device connected">
          <div className="er-connection-title">
            <span className="er-online-dot" />
            <span>Device Connected</span>
          </div>
          <p>R1 Serial #AIBSKF0</p>
          <div className="er-connection-stats">
            <Icon name="battery" />
            <Icon name="zap" className="er-teal" />
            <strong>78%</strong>
          </div>
        </section>
        <button className="er-add-device" type="button">
          <Icon name="plus" />
          <span>Add device</span>
        </button>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="er-header">
      <div className="er-title-stack">
        <h1>Overview</h1>
        <p>Customize and monitor your rabbit device</p>
      </div>

      <div className="er-product-heading" aria-label="Rabbit R2 RabbitOS 2">
        <h2>RABBIT R2</h2>
        <p>RABBITOS 2</p>
      </div>

      <div className="er-header-actions">
        <button className="er-save-button" type="button">
          Save to Device
        </button>
        <button className="er-more-button" type="button" aria-label="More actions">
          <Icon name="more" />
        </button>
      </div>
    </header>
  );
}

function Panel({ title, className = "", children }) {
  return (
    <section className={`er-panel ${className}`} aria-label={title}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function Progress({ value, tone = "teal" }) {
  return (
    <div className={`er-progress er-progress-${tone}`} aria-hidden="true">
      <span style={{ width: `${value}%` }} />
    </div>
  );
}

function SelectPill({ value }) {
  return (
    <button className="er-select-pill" type="button">
      <span>{value}</span>
      <Icon name="chevron" />
    </button>
  );
}

function Toggle({ enabled }) {
  return (
    <button
      type="button"
      className={`er-toggle${enabled ? " is-on" : ""}`}
      aria-pressed={enabled}
    >
      <span />
    </button>
  );
}

function StatusPanel() {
  return (
    <Panel title="Status" className="er-status-panel">
      <div className="er-status-list">
        {statusRows.map((item) => (
          <div className="er-status-row" key={item.label}>
            <Icon name={item.icon} />
            <div className="er-row-body">
              <div className="er-row-main">
                <span>{item.label}</span>
                {item.value ? (
                  <strong className={item.highlight ? "er-teal" : ""}>
                    {item.value}
                  </strong>
                ) : null}
              </div>
              {item.detail ? (
                item.badge ? (
                  <span className="er-firmware-badge">{item.detail}</span>
                ) : (
                  <p>{item.detail}</p>
                )
              ) : null}
              {item.progress ? <Progress value={item.progress} /> : null}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function VolumePanel() {
  return (
    <Panel title="Volume" className="er-volume-panel">
      <div className="er-setting-row">
        <Icon name="speaker" />
        <div className="er-row-body">
          <div className="er-row-main">
            <span>Sound</span>
            <strong>48%</strong>
          </div>
          <Progress value={48} tone="gold" />
        </div>
      </div>
    </Panel>
  );
}

function ThemePanel() {
  return (
    <Panel title="Theme" className="er-theme-panel">
      <div className="er-theme-toggle" role="group" aria-label="Theme">
        <button type="button" className="is-selected">
          Dark
        </button>
        <button type="button">Light</button>
      </div>
      <p>Applies to device UI</p>
    </Panel>
  );
}

function RightSettingsPanel({ title, items }) {
  return (
    <Panel title={title} className={`er-settings-panel er-${title.toLowerCase().replaceAll(" ", "-")}`}>
      <div className="er-settings-list">
        {items.map((item) => (
          <div className="er-setting-row" key={item.label}>
            {item.icon ? <Icon name={item.icon} /> : <span className="er-icon-spacer" />}
            <div className="er-row-body">
              <div className="er-row-main">
                <span>{item.label}</span>
                {item.value && !item.select ? <strong>{item.value}</strong> : null}
                {item.select ? <SelectPill value={item.value} /> : null}
                {item.toggle ? <Toggle enabled={item.enabled} /> : null}
              </div>
              {item.progress ? <Progress value={item.progress} tone="gold" /> : null}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function KnobsPanel() {
  return (
    <Panel title="Knobs" className="er-settings-panel er-knobs-panel">
      <div className="er-settings-list">
        {knobSettings.map((item) => (
          <div className="er-setting-row er-compact-setting" key={item.label}>
            <span>{item.label}</span>
            <SelectPill value={item.value} />
          </div>
        ))}
      </div>
    </Panel>
  );
}

function DeviceStage() {
  return (
    <section className="er-device-stage" aria-label="Rabbit R2 device preview">
      <div className="er-device-glow" />
      <img src={deviceImage} alt="Rabbit R2 device" />
      <button className="er-drag-pill" type="button">
        <Icon name="mouse" />
        <span>Drag to rotate</span>
      </button>
    </section>
  );
}

function AiCreditCard() {
  return (
    <Panel title="AI Credit Usage" className="er-metric-card er-ai-card">
      <span className="er-metric-value">1,356</span>
      <div className="er-bars" aria-hidden="true">
        {aiBars.map((height, index) => (
          <i key={index} style={{ height: `${height}%` }} />
        ))}
      </div>
    </Panel>
  );
}

function ApiCostCard() {
  return (
    <Panel title="API Cost" className="er-metric-card er-api-card">
      <span className="er-metric-value">$34,075</span>
      <div className="er-api-chart">
        <div className="er-ring er-ring-main" />
        <div className="er-ring er-ring-small" />
        <div className="er-api-legend">
          <span>
            <i className="er-dot-teal" /> $4,524 <em>Claude</em>
          </span>
          <span>
            <i className="er-dot-gold" /> $3,693 <em>Open AI</em>
          </span>
        </div>
      </div>
    </Panel>
  );
}

function SystemUptimeCard() {
  return (
    <Panel title="System Uptime" className="er-metric-card er-uptime-card">
      <span className="er-metric-value">99%</span>
      <svg viewBox="0 0 320 96" className="er-line-chart" aria-hidden="true">
        <polyline
          points="0,32 38,32 38,44 76,44 76,55 116,55 116,42 160,42 160,26 202,26 202,48 244,48 244,59 284,59 284,51 320,51"
          className="er-line-teal"
        />
        <polyline
          points="0,70 38,70 38,62 76,62 76,38 116,38 116,34 160,34 160,49 202,49 202,45 244,45 244,57 284,57 284,55 320,55"
          className="er-line-gold"
        />
      </svg>
    </Panel>
  );
}

function RamLoadCard() {
  return (
    <Panel title="Ram Load" className="er-metric-card er-ram-card">
      <span className="er-metric-value">6/8</span>
      <div className="er-ram-bars" aria-hidden="true">
        {ramBars.map((height, index) => (
          <i key={index} style={{ height: `${height}%` }} />
        ))}
      </div>
    </Panel>
  );
}

function Metrics() {
  return (
    <section className="er-metrics" aria-label="Device metrics">
      <AiCreditCard />
      <ApiCostCard />
      <SystemUptimeCard />
      <RamLoadCard />
    </section>
  );
}

export default function EvilRabbitPage() {
  return (
    <main className="evilrabbit-page">
      <div className="er-shell">
        <Sidebar />
        <div className="er-main-scroll">
          <div className="er-dashboard">
            <Header />
            <section className="er-board" aria-label="Device overview dashboard">
              <div className="er-left-column">
                <StatusPanel />
                <VolumePanel />
                <ThemePanel />
              </div>

              <DeviceStage />

              <div className="er-right-column">
                <RightSettingsPanel title="Display" items={displaySettings} />
                <RightSettingsPanel title="Scroll Wheel" items={scrollSettings} />
                <KnobsPanel />
              </div>
            </section>
            <Metrics />
          </div>
        </div>
      </div>
    </main>
  );
}
