const navItems = [
  { label: "Overview", icon: "home", active: true },
  { label: "Display", icon: "display" },
  { label: "Knobs", icon: "knob" },
  { label: "Scroll Wheel", icon: "wheel" },
  { label: "System", icon: "system" },
];

const statusItems = [
  {
    icon: "battery",
    label: "Battery",
    value: "78%",
    accent: true,
    meta: null,
    progress: null,
  },
  {
    icon: "cloud",
    label: "Storage",
    value: "50%",
    meta: "32 GB / 64 GB",
    progress: 50,
  },
  {
    icon: "chip",
    label: "Firmware",
    value: "v1.0.3",
    meta: "Up to date",
    pill: true,
  },
  {
    icon: "clock",
    label: "Uptime",
    value: null,
    meta: "2d 14h 34m",
  },
];

const creditBars = [20, 31, 40, 30, 18, 12, 17, 28, 43, 52, 34, 24, 16, 22, 37, 49, 55, 32, 24];
const ramBars = Array.from({ length: 46 }, (_, index) => index);

function Icon({ name, className = "" }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `rabbit-icon ${className}`,
    "aria-hidden": "true",
  };

  if (name === "home") {
    return (
      <svg {...common}>
        <path d="M4 11.4 12 4l8 7.4" />
        <path d="M6.5 10.5V20h11v-9.5" />
      </svg>
    );
  }

  if (name === "display") {
    return (
      <svg {...common}>
        <rect x="4" y="5.5" width="16" height="11" rx="1.4" />
        <path d="M9 20h6" />
        <path d="M12 16.5V20" />
      </svg>
    );
  }

  if (name === "knob") {
    return (
      <svg {...common}>
        <path d="M12 4.5a7.5 7.5 0 0 1 7.2 5.4" />
        <path d="M19.2 14.1A7.5 7.5 0 0 1 12 19.5" />
        <path d="M4.8 14.1A7.5 7.5 0 0 1 12 4.5" />
      </svg>
    );
  }

  if (name === "wheel") {
    return (
      <svg {...common}>
        <rect x="8.3" y="3.5" width="7.4" height="17" rx="3.7" />
        <path d="M12 7.2v3.2" />
        <path d="M12 13.6v3.2" />
        <path d="m9.7 8.6 2.3-1.4 2.3 1.4" />
        <path d="m9.7 15.4 2.3 1.4 2.3-1.4" />
      </svg>
    );
  }

  if (name === "system") {
    return (
      <svg {...common}>
        <path d="M12 8.1a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8Z" />
        <path d="M12 2.9v2.2" />
        <path d="M12 18.9v2.2" />
        <path d="m4.1 6.1 1.6 1.6" />
        <path d="m18.3 16.3 1.6 1.6" />
        <path d="M2.9 12h2.2" />
        <path d="M18.9 12h2.2" />
        <path d="m4.1 17.9 1.6-1.6" />
        <path d="m18.3 7.7 1.6-1.6" />
      </svg>
    );
  }

  if (name === "battery") {
    return (
      <svg {...common}>
        <rect x="3.5" y="8" width="16" height="8" rx="1.3" />
        <path d="M21 10.4v3.2" />
      </svg>
    );
  }

  if (name === "cloud") {
    return (
      <svg {...common}>
        <path d="M7.1 17.2h9.1a4.5 4.5 0 0 0 .4-9A5.8 5.8 0 0 0 5.5 10a3.7 3.7 0 0 0 1.6 7.2Z" />
      </svg>
    );
  }

  if (name === "chip") {
    return (
      <svg {...common}>
        <rect x="7" y="7" width="10" height="10" rx="1.2" />
        <path d="M10 10h4v4h-4z" />
        <path d="M4 9h3" />
        <path d="M4 15h3" />
        <path d="M17 9h3" />
        <path d="M17 15h3" />
        <path d="M9 4v3" />
        <path d="M15 4v3" />
        <path d="M9 17v3" />
        <path d="M15 17v3" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7.8v4.7l3.3 1.7" />
      </svg>
    );
  }

  if (name === "sun") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3.7" />
        <path d="M12 3.5v2" />
        <path d="M12 18.5v2" />
        <path d="M3.5 12h2" />
        <path d="M18.5 12h2" />
        <path d="m5.9 5.9 1.4 1.4" />
        <path d="m16.7 16.7 1.4 1.4" />
        <path d="m18.1 5.9-1.4 1.4" />
        <path d="m7.3 16.7-1.4 1.4" />
      </svg>
    );
  }

  if (name === "volume") {
    return (
      <svg {...common}>
        <path d="M4 10v4h3.5l4.1 3.4V6.6L7.5 10H4Z" />
        <path d="M15.1 8.8a4.4 4.4 0 0 1 0 6.4" />
      </svg>
    );
  }

  if (name === "mouse") {
    return (
      <svg {...common}>
        <rect x="8" y="3.8" width="8" height="16.4" rx="4" />
        <path d="M12 4v6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function RabbitLogo() {
  return (
    <div className="rabbit-logo" aria-hidden="true">
      <span className="ear ear-one" />
      <span className="ear ear-two" />
      <span className="head" />
      <span className="chin" />
    </div>
  );
}

function Panel({ title, children, className = "" }) {
  return (
    <section className={`control-panel ${className}`}>
      {title ? <h2>{title}</h2> : null}
      {children}
    </section>
  );
}

function Slider({ value, tone = "gold" }) {
  return (
    <div className={`range range-${tone}`} style={{ "--value": `${value}%` }}>
      <div className="range-fill" />
      <div className="range-thumb" />
    </div>
  );
}

function Toggle({ active }) {
  return (
    <span className={`toggle ${active ? "toggle-active" : ""}`}>
      <span />
    </span>
  );
}

function SelectPill({ children }) {
  return (
    <button className="select-pill" type="button">
      <span>{children}</span>
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="m4 6 4 4 4-4" />
      </svg>
    </button>
  );
}

function StatusPanel() {
  return (
    <Panel title="Status" className="status-panel">
      <div className="status-list">
        {statusItems.map((item) => (
          <div className="status-row" key={item.label}>
            <Icon name={item.icon} />
            <div className="status-copy">
              <div className="status-line">
                <span>{item.label}</span>
                {item.value ? (
                  <strong className={item.accent ? "text-accent" : ""}>
                    {item.accent ? <span className="bolt">+</span> : null}
                    {item.value}
                  </strong>
                ) : null}
              </div>
              {item.meta ? (
                item.pill ? (
                  <span className="firmware-pill">{item.meta}</span>
                ) : (
                  <p>{item.meta}</p>
                )
              ) : null}
              {item.progress ? <Slider value={item.progress} tone="teal" /> : null}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function DeviceIllustration() {
  const pixels = [
    [8, 2], [9, 2], [8, 3], [9, 3], [7, 4], [8, 4], [9, 4], [12, 3], [13, 3],
    [12, 4], [13, 4], [11, 5], [12, 5], [10, 6], [11, 6], [7, 5], [8, 5],
    [6, 6], [7, 6], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7], [4, 8], [5, 8],
    [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [3, 9], [4, 9], [5, 9], [6, 9],
    [7, 9], [8, 9], [9, 9], [10, 9], [11, 9], [4, 10], [5, 10], [6, 10],
    [7, 10], [8, 10], [9, 10], [10, 10], [5, 11], [6, 11], [7, 11], [8, 11],
    [9, 11], [3, 11], [2, 12], [3, 12], [5, 12], [6, 12], [7, 12], [8, 12],
    [9, 12], [4, 13], [5, 13], [6, 13], [7, 13], [8, 13], [6, 14], [7, 14],
  ];

  return (
    <div className="device-wrap">
      <svg className="device-svg" viewBox="0 0 520 520" role="img" aria-label="Rabbit R2 device">
        <defs>
          <linearGradient id="bodyFace" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#4c4c4a" />
            <stop offset="0.45" stopColor="#232323" />
            <stop offset="1" stopColor="#121212" />
          </linearGradient>
          <linearGradient id="bodySide" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#3e3e3e" />
            <stop offset="1" stopColor="#181818" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#121212" />
            <stop offset="0.72" stopColor="#050505" />
            <stop offset="1" stopColor="#151515" />
          </linearGradient>
          <radialGradient id="knobGlow" cx="40%" cy="30%" r="70%">
            <stop offset="0" stopColor="#5a5a5a" />
            <stop offset="0.5" stopColor="#262626" />
            <stop offset="1" stopColor="#080808" />
          </radialGradient>
          <filter id="deviceShadow" x="-20%" y="-20%" width="140%" height="145%">
            <feDropShadow dx="12" dy="18" stdDeviation="16" floodColor="#000000" floodOpacity="0.45" />
          </filter>
          <filter id="softCyan" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#deviceShadow)">
          <path
            d="M145 115c14-26 40-40 76-46l172-27c31-5 61 16 66 47l16 220c3 37-20 70-56 80L155 463c-40 11-80-13-88-54l-20-107 47-146c8-23 26-37 51-41Z"
            fill="url(#bodySide)"
          />
          <path
            d="M116 132c12-24 32-38 60-43l197-33c34-6 65 21 62 55l-30 269c-3 29-24 53-53 59l-229 47c-42 9-80-25-73-68l43-249c3-17 11-29 23-37Z"
            fill="url(#bodyFace)"
          />
          <path
            d="M174 120 359 89c24-4 43 14 40 38l-24 172c-3 22-18 38-40 42l-199 31c-25 4-45-18-39-43l40-168c5-22 17-37 37-41Z"
            fill="url(#screenGrad)"
            stroke="#333"
            strokeWidth="2"
          />
          <g filter="url(#softCyan)" transform="translate(221 207) rotate(-13) scale(7.2)">
            {pixels.map(([x, y]) => (
              <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#48DDC8" />
            ))}
            <rect x="5" y="10" width="1" height="1" fill="#05110f" />
          </g>
          <path
            d="M406 75c25-4 45 15 42 40l-26 235c-3 27-20 48-45 58l28-261c4-36 4-52 1-72Z"
            fill="#2d2d2d"
            opacity="0.78"
          />
          <rect x="392" y="88" width="62" height="64" rx="17" fill="#111" transform="rotate(4 423 120)" />
          <rect x="404" y="101" width="38" height="34" rx="10" fill="#242424" transform="rotate(4 423 118)" />
          <circle cx="422" cy="118" r="11" fill="#050505" />
          <circle cx="425" cy="116" r="4" fill="#303030" />
          <path d="M383 187h73l-8 74h-72Z" fill="#0d0d0d" />
          <rect x="389" y="194" width="55" height="55" rx="15" fill="url(#knobGlow)" />
          <rect x="448" y="210" width="26" height="22" rx="9" fill="#3AD0B0" transform="rotate(-8 461 221)" />
          <circle cx="454" cy="221" r="6" fill="#72FFE6" opacity="0.5" />
          <g>
            <ellipse cx="150" cy="390" rx="36" ry="43" fill="#090909" opacity="0.78" />
            <circle cx="148" cy="374" r="34" fill="url(#knobGlow)" />
            <circle cx="166" cy="354" r="3.5" fill="#53F3D5" />
            <text x="139" y="331" fill="#b8b8b8" fontSize="9" fontWeight="700">Weight</text>
          </g>
          <g>
            <ellipse cx="266" cy="382" rx="40" ry="42" fill="#090909" opacity="0.78" />
            <circle cx="257" cy="365" r="38" fill="url(#knobGlow)" />
            <circle cx="231" cy="377" r="3.5" fill="#53F3D5" />
            <text x="248" y="321" fill="#b8b8b8" fontSize="9" fontWeight="700">Width</text>
          </g>
          <g>
            <ellipse cx="383" cy="366" rx="39" ry="41" fill="#090909" opacity="0.78" />
            <circle cx="378" cy="349" r="36" fill="url(#knobGlow)" />
            <circle cx="390" cy="330" r="3.5" fill="#53F3D5" />
            <text x="391" y="304" fill="#b8b8b8" fontSize="9" fontWeight="700" transform="rotate(6 391 304)">Slant</text>
          </g>
          <path d="M186 462c43 10 151 5 218-28" stroke="#070707" strokeWidth="14" strokeLinecap="round" opacity="0.55" />
          <path d="M236 439c31 3 55 2 78-2" stroke="#050505" strokeWidth="9" strokeLinecap="round" />
          <path d="M249 436c21 2 37 1 52-1" stroke="#272727" strokeWidth="3" strokeLinecap="round" />
          <g fill="#050505" opacity="0.75">
            <circle cx="137" cy="441" r="3" />
            <circle cx="158" cy="444" r="3" />
            <circle cx="346" cy="420" r="3" />
            <circle cx="371" cy="413" r="3" />
          </g>
        </g>
      </svg>
      <div className="rotate-hint">
        <Icon name="mouse" />
        <span>Drag to rotate</span>
      </div>
    </div>
  );
}

function Topbar() {
  const brand = ["R", "A", "B", "B", "I", "T", "R", "2"];

  return (
    <header className="rabbit-topbar">
      <div className="title-block">
        <h1>Overview</h1>
        <p>Customize and monitor your rabbit device</p>
      </div>
      <div className="device-brand" aria-label="Rabbit R2">
        <div className="brand-row">
          {brand.map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </div>
        <p>RABBITOS 2</p>
      </div>
      <div className="top-actions">
        <button className="save-button" type="button">Save to Device</button>
        <button className="more-button" type="button" aria-label="More options">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="rabbit-sidebar">
      <div className="sidebar-brand">
        <RabbitLogo />
        <span>Evil Rabbit</span>
      </div>
      <nav className="sidebar-nav" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.label} className={item.active ? "active" : ""} href="#top">
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="device-card">
          <p><span className="green-dot" />Device Connected</p>
          <small>R1 Serial #A1BSKFO</small>
          <div className="footer-battery">
            <span className="battery-shape" />
            <strong>+ 78%</strong>
          </div>
        </div>
        <button className="add-device" type="button">
          <span>+</span>
          Add device
        </button>
      </div>
    </aside>
  );
}

function LeftStack() {
  return (
    <div className="left-stack">
      <StatusPanel />
      <Panel title="Volume" className="volume-panel">
        <div className="setting-row">
          <Icon name="volume" />
          <span>Sound</span>
          <strong>48%</strong>
        </div>
        <Slider value={48} />
      </Panel>
      <Panel title="Theme" className="theme-panel">
        <div className="theme-tabs">
          <button className="active" type="button">Dark</button>
          <button type="button">Light</button>
        </div>
        <p>Applies to device UI</p>
      </Panel>
    </div>
  );
}

function RightStack() {
  return (
    <div className="right-stack">
      <Panel title="Display" className="display-panel glow-panel">
        <div className="setting-row">
          <Icon name="sun" />
          <span>Brightness</span>
          <strong>27%</strong>
        </div>
        <Slider value={36} />
        <div className="control-grid">
          <span>Timeout</span>
          <SelectPill>30 Sec</SelectPill>
          <span>Animation</span>
          <SelectPill>Pixel Fade</SelectPill>
        </div>
      </Panel>
      <Panel title="Scroll Wheel" className="wheel-panel glow-panel">
        <div className="setting-row">
          <Icon name="sun" />
          <span>Sensitivity</span>
          <strong>60%</strong>
        </div>
        <Slider value={36} />
        <div className="toggle-list">
          <span>Haptic Feedback</span>
          <Toggle active />
          <span>Vibration</span>
          <Toggle />
        </div>
      </Panel>
      <Panel title="Knobs" className="knobs-panel">
        <div className="control-grid knob-grid">
          <span>Function</span>
          <SelectPill>Default</SelectPill>
          <span>Weight</span>
          <SelectPill>Volume</SelectPill>
        </div>
      </Panel>
    </div>
  );
}

function CreditsChart() {
  return (
    <div className="pixel-chart" aria-hidden="true">
      {creditBars.map((height, index) => (
        <span key={index} style={{ height: `${height}px` }} />
      ))}
    </div>
  );
}

function ApiCostChart() {
  return (
    <div className="api-chart">
      <div className="donut">
        <div className="donut-burst">
          {Array.from({ length: 16 }, (_, index) => (
            <span key={index} style={{ transform: `rotate(${index * 22.5}deg)` }} />
          ))}
        </div>
      </div>
      <div className="mini-donut">AI</div>
      <div className="cost-legend">
        <p><span className="cyan-dot" />$4,524 <em>Claude</em></p>
        <p><span className="gold-dot" />$3,693 <em>Open AI</em></p>
      </div>
    </div>
  );
}

function UptimeChart() {
  return (
    <svg className="uptime-chart" viewBox="0 0 260 78" aria-hidden="true">
      <path d="M4 49H35V57H69V62H101V56H136V42H169V49H204V60H239V55H256" />
      <path className="gold-line" d="M4 68H64V68H70V43H104V51H136V42H171V46H204V53H238V51H256" />
    </svg>
  );
}

function RamChart() {
  return (
    <div className="ram-chart" aria-hidden="true">
      {ramBars.map((bar) => (
        <span key={bar} className={bar < 18 ? "active" : ""} />
      ))}
    </div>
  );
}

function MetricCard({ title, value, children }) {
  return (
    <section className="metric-card">
      <header>
        <h2>{title}</h2>
        <span>{value}</span>
      </header>
      {children}
    </section>
  );
}

export default function EvilRabbitOverviewPage() {
  return (
    <main id="top" className="rabbit-console">
      <div className="rabbit-app">
        <Sidebar />
        <section className="rabbit-main">
          <Topbar />
          <div className="rabbit-workspace">
            <LeftStack />
            <section className="device-stage">
              <DeviceIllustration />
            </section>
            <RightStack />
            <div className="metrics-grid">
              <MetricCard title="AI Credit Usage" value="1,356">
                <CreditsChart />
              </MetricCard>
              <MetricCard title="API Cost" value="$34,075">
                <ApiCostChart />
              </MetricCard>
              <MetricCard title="System Uptime" value="99%">
                <UptimeChart />
              </MetricCard>
              <MetricCard title="Ram Load" value="6/8">
                <RamChart />
              </MetricCard>
            </div>
          </div>
        </section>
      </div>
      <style>{`
        .rabbit-console {
          min-height: 100vh;
          min-height: 100dvh;
          background:
            radial-gradient(circle at 14% 6%, rgba(45, 211, 190, 0.22), transparent 26%),
            radial-gradient(circle at 73% 78%, rgba(236, 205, 44, 0.07), transparent 25%),
            #070A12;
          color: #F4F7F6;
          font-family: Manrope, ui-sans-serif, system-ui, sans-serif;
          overflow-x: hidden;
        }

        html:has(.rabbit-console),
        body:has(.rabbit-console),
        #root:has(.rabbit-console) {
          min-height: 100vh;
          min-height: 100dvh;
          background: #070A12;
        }

        .rabbit-app {
          display: grid;
          grid-template-columns: 168px minmax(0, 1fr);
          min-height: 100vh;
          min-height: 100dvh;
          background:
            linear-gradient(90deg, rgba(45, 215, 194, 0.14), transparent 18%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 23%),
            #080B13;
        }

        .rabbit-sidebar {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(82, 238, 231, 0.13);
          background:
            radial-gradient(circle at 14% 8%, rgba(60, 240, 215, 0.26), transparent 27%),
            linear-gradient(180deg, rgba(17, 50, 47, 0.48), rgba(7, 10, 18, 0.94) 38%),
            #080C15;
          box-shadow: inset 1px 0 0 rgba(91, 246, 238, 0.12);
          padding: 42px 13px 28px;
          min-width: 0;
        }

        .sidebar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 10px;
          color: #F6FFFC;
          font-size: 10px;
          font-weight: 500;
        }

        .rabbit-logo {
          position: relative;
          width: 25px;
          height: 28px;
        }

        .rabbit-logo span {
          position: absolute;
          display: block;
          background: #F6FFFC;
        }

        .rabbit-logo .ear {
          width: 7px;
          height: 16px;
          border-radius: 2px 2px 5px 5px;
          top: 0;
        }

        .rabbit-logo .ear-one {
          left: 3px;
          transform: rotate(-34deg);
        }

        .rabbit-logo .ear-two {
          right: 2px;
          transform: rotate(-38deg);
        }

        .rabbit-logo .head {
          left: 2px;
          bottom: 1px;
          width: 22px;
          height: 17px;
          border-radius: 45% 45% 50% 50%;
          clip-path: polygon(0 28%, 73% 0, 100% 14%, 100% 72%, 54% 100%, 0 76%);
        }

        .rabbit-logo .chin {
          left: 1px;
          bottom: 10px;
          width: 8px;
          height: 7px;
          transform: rotate(-35deg);
          border-radius: 1px;
        }

        .sidebar-nav {
          display: flex;
          flex: 1;
          min-height: 0;
          flex-direction: column;
          gap: 7px;
          margin-top: 46px;
          overflow-y: auto;
          padding: 0 0 20px 0;
        }

        .sidebar-nav a {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 43px;
          border: 1px solid transparent;
          border-radius: 6px;
          padding: 0 11px;
          color: rgba(230, 239, 238, 0.58);
          font-size: 10px;
          text-decoration: none;
        }

        .sidebar-nav a.active {
          border-color: rgba(91, 246, 238, 0.14);
          background:
            linear-gradient(90deg, rgba(64, 214, 203, 0.27), rgba(255, 255, 255, 0.03));
          color: #F6FFFC;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .rabbit-icon {
          width: 17px;
          height: 17px;
          flex: none;
        }

        .sidebar-footer {
          flex: none;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .device-card {
          border-radius: 5px;
          background: rgba(26, 31, 43, 0.94);
          padding: 15px 12px 16px;
          color: #F0F5F3;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .device-card p {
          display: flex;
          align-items: center;
          gap: 7px;
          margin: 0;
          font-size: 10px;
          font-weight: 500;
        }

        .green-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #54E872;
          box-shadow: 0 0 14px rgba(84, 232, 114, 0.45);
        }

        .device-card small {
          display: block;
          margin-top: 12px;
          color: rgba(230, 239, 238, 0.45);
          font-size: 8px;
        }

        .footer-battery {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 18px;
          color: #42E2D1;
          font-size: 10px;
        }

        .battery-shape {
          position: relative;
          width: 17px;
          height: 10px;
          border-radius: 2px;
          background: #3FDACA;
          box-shadow: 0 0 12px rgba(63, 218, 202, 0.34);
        }

        .battery-shape::after {
          content: "";
          position: absolute;
          right: -3px;
          top: 3px;
          width: 2px;
          height: 4px;
          border-radius: 1px;
          background: #3FDACA;
        }

        .add-device {
          display: flex;
          align-items: center;
          gap: 13px;
          border: 0;
          background: transparent;
          color: rgba(230, 239, 238, 0.7);
          font-size: 10px;
          padding: 0 10px;
        }

        .add-device span {
          color: rgba(230, 239, 238, 0.64);
          font-size: 28px;
          font-weight: 200;
          line-height: 1;
        }

        .rabbit-main {
          min-width: 0;
          height: 100vh;
          overflow-y: auto;
          padding: 38px 29px 24px;
        }

        .rabbit-topbar {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(220px, 1fr) minmax(250px, 1.2fr) minmax(220px, 1fr);
          align-items: start;
          gap: 14px;
          min-height: 78px;
        }

        .title-block h1 {
          margin: 0;
          color: #F5FFFD;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.18;
        }

        .title-block p {
          margin: 7px 0 0;
          color: rgba(219, 230, 229, 0.62);
          font-size: 9px;
        }

        .device-brand {
          justify-self: center;
          padding-top: 8px;
          text-align: center;
          color: rgba(245, 250, 249, 0.78);
        }

        .brand-row {
          display: flex;
          justify-content: center;
          gap: 17px;
          font-size: 17px;
          font-weight: 400;
          line-height: 1;
        }

        .device-brand p {
          margin: 14px 0 0;
          color: rgba(245, 250, 249, 0.42);
          font-size: 9px;
        }

        .top-actions {
          justify-self: end;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .save-button,
        .more-button {
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(24, 30, 41, 0.56);
          color: #F7FFFE;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 18px 0 32px rgba(58, 226, 224, 0.36);
        }

        .save-button {
          width: 164px;
          height: 34px;
          border-radius: 999px;
          font-size: 9px;
          font-weight: 600;
        }

        .more-button {
          display: inline-flex;
          width: 42px;
          height: 34px;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 3px;
          border-radius: 999px;
          background: rgba(27, 33, 45, 0.84);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .more-button span {
          width: 2px;
          height: 2px;
          border-radius: 999px;
          background: rgba(245, 250, 249, 0.55);
        }

        .rabbit-workspace {
          display: grid;
          grid-template-columns: 238px minmax(360px, 1fr) 238px;
          grid-template-rows: minmax(520px, 1fr) 112px;
          gap: 8px;
          min-height: calc(100vh - 140px);
        }

        .left-stack,
        .right-stack {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 8px;
        }

        .control-panel,
        .metric-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(86, 238, 235, 0.27);
          border-radius: 10px;
          background:
            linear-gradient(180deg, rgba(30, 36, 48, 0.88), rgba(18, 23, 33, 0.92)),
            #151A23;
          box-shadow:
            inset 1px 1px 0 rgba(255, 255, 255, 0.045),
            inset 0 0 38px rgba(49, 233, 216, 0.06);
        }

        .control-panel::after,
        .metric-card::after {
          content: "";
          position: absolute;
          left: 14%;
          right: 10%;
          bottom: -38px;
          height: 78px;
          border-radius: 999px;
          background: radial-gradient(ellipse, rgba(61, 225, 203, 0.24), transparent 64%);
          pointer-events: none;
        }

        .glow-panel::after {
          background:
            radial-gradient(ellipse at 72% 40%, rgba(248, 203, 46, 0.24), transparent 56%),
            radial-gradient(ellipse at 20% 70%, rgba(61, 225, 203, 0.12), transparent 64%);
        }

        .control-panel h2,
        .metric-card h2 {
          position: relative;
          z-index: 1;
          margin: 0;
          color: #F5FBFA;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.2;
        }

        .status-panel {
          min-height: 294px;
          padding: 17px 12px 16px;
        }

        .status-list {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          margin-top: 20px;
        }

        .status-row {
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 12px;
          min-height: 63px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          color: rgba(238, 247, 246, 0.88);
        }

        .status-row:last-child {
          border-bottom: 0;
        }

        .status-row .rabbit-icon {
          margin-top: 3px;
          color: rgba(245, 250, 249, 0.9);
        }

        .status-copy {
          min-width: 0;
        }

        .status-line,
        .setting-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .status-line span,
        .setting-row span,
        .control-grid span,
        .toggle-list span {
          color: rgba(240, 248, 247, 0.82);
          font-size: 10px;
        }

        .status-line strong,
        .setting-row strong {
          margin-left: auto;
          color: rgba(240, 248, 247, 0.44);
          font-size: 9px;
          font-weight: 500;
        }

        .status-line strong.text-accent {
          color: #39DDD2;
          font-size: 10px;
          font-weight: 700;
        }

        .bolt {
          display: inline-block;
          margin-right: 7px;
          color: #31F4EB;
          font-size: 12px;
          transform: rotate(18deg);
        }

        .status-copy p {
          margin: 10px 0 6px;
          color: rgba(238, 247, 246, 0.92);
          font-size: 10px;
        }

        .firmware-pill {
          display: inline-flex;
          align-items: center;
          height: 18px;
          margin-top: 10px;
          border-radius: 999px;
          background: rgba(45, 211, 197, 0.30);
          color: rgba(75, 239, 231, 0.88);
          font-size: 7px;
          padding: 0 9px;
        }

        .volume-panel,
        .theme-panel {
          min-height: 117px;
          padding: 15px 12px;
        }

        .volume-panel .setting-row,
        .display-panel .setting-row,
        .wheel-panel .setting-row {
          position: relative;
          z-index: 1;
          margin-top: 24px;
        }

        .volume-panel .setting-row {
          margin-top: 25px;
        }

        .range {
          --track-height: 13px;
          position: relative;
          z-index: 1;
          height: var(--track-height);
          margin-left: 34px;
          margin-top: 12px;
          border-radius: 3px;
          background: rgba(61, 55, 54, 0.78);
          overflow: visible;
        }

        .range-fill {
          position: absolute;
          left: 0;
          top: 0;
          width: var(--value);
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #FFB345, #F6D336);
        }

        .range-teal {
          height: 6px;
          margin-left: 0;
          margin-top: 9px;
          background: rgba(255, 255, 255, 0.08);
        }

        .range-teal .range-fill {
          background: linear-gradient(90deg, #27E0E0, #76F0C9);
        }

        .range-thumb {
          position: absolute;
          left: var(--value);
          top: 50%;
          width: 6px;
          height: calc(var(--track-height) + 2px);
          border: 2px solid #F5CF24;
          border-radius: 3px;
          background: rgba(19, 22, 28, 0.9);
          transform: translate(-50%, -50%);
        }

        .range-teal .range-thumb {
          display: none;
        }

        .theme-tabs {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 25px;
        }

        .theme-tabs button {
          height: 33px;
          border: 0;
          border-radius: 6px;
          background: transparent;
          color: rgba(240, 248, 247, 0.55);
          font-size: 10px;
        }

        .theme-tabs button.active {
          border: 1px solid rgba(71, 238, 231, 0.18);
          background: rgba(12, 16, 24, 0.42);
          color: #F7FFFE;
        }

        .theme-panel p {
          position: relative;
          z-index: 1;
          margin: 14px 0 0;
          color: rgba(240, 248, 247, 0.43);
          font-size: 9px;
        }

        .device-stage {
          position: relative;
          min-width: 0;
          min-height: 520px;
          display: grid;
          place-items: center;
          overflow: visible;
        }

        .device-stage::before {
          content: "";
          position: absolute;
          inset: 4% 8% 5%;
          background:
            radial-gradient(circle at 55% 48%, rgba(75, 240, 225, 0.11), transparent 36%),
            radial-gradient(circle at 50% 92%, rgba(248, 203, 46, 0.10), transparent 34%);
          filter: blur(10px);
        }

        .device-wrap {
          position: relative;
          width: min(100%, 440px);
          margin-top: 30px;
        }

        .device-svg {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          height: auto;
        }

        .rotate-hint {
          position: absolute;
          z-index: 2;
          right: 4%;
          bottom: 14%;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-width: 106px;
          height: 49px;
          border: 1px solid rgba(255, 255, 255, 0.27);
          border-radius: 24px;
          background: rgba(24, 27, 33, 0.62);
          color: rgba(250, 255, 254, 0.9);
          padding: 0 16px;
          font-size: 8px;
          backdrop-filter: blur(9px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .rotate-hint .rabbit-icon {
          width: 18px;
          height: 18px;
        }

        .right-stack .control-panel {
          padding: 15px 12px;
        }

        .display-panel {
          min-height: 205px;
        }

        .wheel-panel {
          min-height: 191px;
        }

        .knobs-panel {
          min-height: 138px;
        }

        .control-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 73px;
          align-items: center;
          gap: 8px 13px;
          margin-top: 30px;
        }

        .knob-grid {
          margin-top: 28px;
        }

        .select-pill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 5px;
          height: 26px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          background: rgba(18, 22, 31, 0.82);
          color: rgba(247, 255, 254, 0.78);
          font-size: 7px;
          padding: 0 8px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .select-pill span {
          white-space: nowrap;
        }

        .select-pill svg {
          width: 11px;
          height: 11px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .toggle-list {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 10px;
          margin-top: 31px;
        }

        .toggle {
          width: 35px;
          height: 20px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.09);
          padding: 3px;
        }

        .toggle span {
          display: block;
          width: 14px;
          height: 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.38);
        }

        .toggle-active {
          background: rgba(255, 255, 255, 0.12);
        }

        .toggle-active span {
          margin-left: auto;
          background: #31DCCA;
          box-shadow: 0 0 16px rgba(49, 220, 202, 0.66);
        }

        .metrics-grid {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 8px;
          min-width: 0;
        }

        .metric-card {
          min-height: 112px;
          padding: 15px 12px 10px;
        }

        .metric-card header {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: start;
          justify-content: space-between;
          gap: 10px;
        }

        .metric-card header span {
          color: rgba(242, 248, 248, 0.38);
          font-size: 9px;
        }

        .pixel-chart {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: end;
          gap: 4px;
          height: 64px;
          margin-top: 13px;
        }

        .pixel-chart span {
          width: 8px;
          min-height: 5px;
          background:
            repeating-linear-gradient(
              to top,
              #48E8D7 0,
              #48E8D7 3px,
              transparent 3px,
              transparent 6px
            );
          opacity: 0.95;
        }

        .api-chart {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 64px 42px 1fr;
          align-items: end;
          gap: 9px;
          margin-top: 17px;
        }

        .donut,
        .mini-donut {
          position: relative;
          display: grid;
          place-items: center;
          border-radius: 999px;
        }

        .donut {
          width: 58px;
          height: 58px;
          background: conic-gradient(#31DED2 0 74%, rgba(255, 255, 255, 0.08) 74% 100%);
        }

        .donut::before {
          content: "";
          position: absolute;
          inset: 6px;
          border-radius: inherit;
          background: #15202A;
        }

        .donut-burst {
          position: relative;
          z-index: 1;
          width: 26px;
          height: 26px;
        }

        .donut-burst span {
          position: absolute;
          left: 12px;
          top: 2px;
          width: 2px;
          height: 22px;
          border-radius: 2px;
          background: #31DED2;
          transform-origin: 1px 11px;
        }

        .mini-donut {
          width: 40px;
          height: 40px;
          border: 2px solid rgba(249, 207, 43, 0.75);
          color: #F5CE2B;
          font-size: 8px;
          box-shadow: inset 0 0 0 8px rgba(249, 207, 43, 0.04);
        }

        .cost-legend {
          padding-bottom: 2px;
        }

        .cost-legend p {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 12px;
          color: rgba(244, 249, 249, 0.82);
          font-size: 9px;
        }

        .cost-legend em {
          color: rgba(244, 249, 249, 0.34);
          font-style: normal;
        }

        .cyan-dot,
        .gold-dot {
          width: 8px;
          height: 8px;
          flex: none;
          border-radius: 999px;
        }

        .cyan-dot {
          background: #2DDBD7;
        }

        .gold-dot {
          background: #F2CD2D;
        }

        .uptime-chart {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 72px;
          margin-top: 12px;
        }

        .uptime-chart path {
          fill: none;
          stroke: #4FE5CC;
          stroke-width: 2;
        }

        .uptime-chart .gold-line {
          stroke: #E7CD39;
        }

        .ram-chart {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: end;
          gap: 4px;
          height: 65px;
          margin-top: 14px;
        }

        .ram-chart span {
          width: 3px;
          height: 42px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.12);
        }

        .ram-chart span.active {
          background: linear-gradient(180deg, #FFDD45, #FFB243);
          box-shadow: 0 0 12px rgba(248, 203, 46, 0.18);
        }

        @media (max-width: 1120px) {
          .rabbit-app {
            grid-template-columns: 148px minmax(0, 1fr);
          }

          .rabbit-main {
            padding-left: 18px;
            padding-right: 18px;
          }

          .rabbit-workspace {
            grid-template-columns: 220px minmax(330px, 1fr) 220px;
          }

          .brand-row {
            gap: 12px;
          }
        }

        @media (max-width: 940px) {
          .rabbit-app {
            display: block;
          }

          .rabbit-sidebar {
            position: relative;
            height: auto;
            padding: 24px 18px;
            border-right: 0;
            border-bottom: 1px solid rgba(82, 238, 231, 0.13);
          }

          .sidebar-nav {
            flex-direction: row;
            margin-top: 20px;
            overflow-x: auto;
            padding-bottom: 4px;
          }

          .sidebar-nav a {
            min-width: max-content;
          }

          .sidebar-footer {
            margin-top: 18px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .device-card {
            min-width: 210px;
          }

          .rabbit-main {
            height: auto;
            overflow: visible;
          }

          .rabbit-topbar {
            grid-template-columns: 1fr;
          }

          .device-brand,
          .top-actions {
            justify-self: start;
          }

          .rabbit-workspace {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            min-height: 0;
          }

          .device-stage {
            min-height: 430px;
            order: -1;
          }

          .metrics-grid {
            grid-column: auto;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .rabbit-main {
            padding: 24px 14px;
          }

          .sidebar-footer {
            align-items: stretch;
            flex-direction: column;
          }

          .top-actions {
            width: 100%;
          }

          .save-button {
            flex: 1;
            width: auto;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
          }

          .device-wrap {
            width: min(100%, 360px);
          }

          .brand-row {
            justify-content: flex-start;
            gap: 9px;
          }

          .control-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
