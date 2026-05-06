const tabs = ["Overview", "Biomarkers", "Reports", "Insights"];

const riskBars = [
  18, 38, 52, 38, 22, 30, 65, 66, 67, 58, 30, 22, 13, 14, 15, 16, 15, 14,
  16, 16, 17, 16, 16, 15,
];

const riskStats = [
  { label: "Signals Processed", value: "578", dot: "blue" },
  { label: "Scan Speed", value: "Real-time", dot: "dark" },
  { label: "Accuracy Level", value: "98%", dot: "pale" },
];

const neuralMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const vitals = [
  { label: "Blood Pressure", value: "120/70", status: "Normal", tone: "normal" },
  { label: "Temperature", value: "36.8", status: "Normal", tone: "normal" },
  { label: "Heart Rate", value: "64 bpm", status: "Normal", tone: "normal" },
  { label: "Oxygen", value: "87%", status: "Low", tone: "low" },
];

const vitalMonths = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep"];

function Icon({ name, className = "" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (name) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="10.8" cy="10.8" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.2 13.4a7.7 7.7 0 0 0 .1-1.4 7.7 7.7 0 0 0-.1-1.4l2-1.5-2-3.4-2.4 1a7.6 7.6 0 0 0-2.4-1.4L14 2.7h-4l-.4 2.6a7.6 7.6 0 0 0-2.4 1.4l-2.4-1-2 3.4 2 1.5a7.7 7.7 0 0 0-.1 1.4 7.7 7.7 0 0 0 .1 1.4l-2 1.5 2 3.4 2.4-1a7.6 7.6 0 0 0 2.4 1.4l.4 2.6h4l.4-2.6a7.6 7.6 0 0 0 2.4-1.4l2.4 1 2-3.4z" />
        </svg>
      );
    case "upload":
      return (
        <svg {...common}>
          <path d="M12 15V4" />
          <path d="m7.5 8.5 4.5-4.5 4.5 4.5" />
          <path d="M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M18 9.8a6 6 0 1 0-12 0c0 7-2.3 7.2-2.3 7.2h16.6S18 16.8 18 9.8Z" />
          <path d="M9.7 20a2.6 2.6 0 0 0 4.6 0" />
        </svg>
      );
    case "brain":
      return (
        <svg {...common}>
          <path d="M8.1 7.3a3 3 0 0 1 3.2-3.5 3.5 3.5 0 0 1 5.9 2.5 3.7 3.7 0 0 1 2.1 6.7 3.5 3.5 0 0 1-3.5 4.8 3.4 3.4 0 0 1-6.2.8 3.7 3.7 0 0 1-4.8-5.2 3.5 3.5 0 0 1 3.3-6.1Z" />
          <path d="M11.2 4.1v15.2" />
          <path d="M7.7 10.5c1.6.1 2.7.9 3.4 2.2" />
          <path d="M16.8 8.8c-1.9.2-3.2 1.2-3.8 2.8" />
        </svg>
      );
    default:
      return null;
  }
}

function RiskReductionCard() {
  return (
    <section className="vyra-card risk-card" aria-label="Risk Reduction">
      <h2>Risk Reduction</h2>
      <div className="risk-chart" aria-hidden="true">
        <div className="risk-bars">
          {riskBars.map((height, index) => (
            <span
              className={index > 11 ? "risk-bar ghost" : "risk-bar"}
              key={`risk-${index}`}
              style={{ "--bar-height": `${height}%` }}
            />
          ))}
        </div>
        <div className="risk-range">
          <span />
        </div>
      </div>
      <div className="risk-stats">
        {riskStats.map((stat) => (
          <div className="risk-stat" key={stat.label}>
            <span className={`status-dot ${stat.dot}`} />
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProgressMetric({ label, value, marker }) {
  return (
    <div className="progress-metric">
      <div className="progress-label">{label}</div>
      <div className="progress-track">
        <span className="progress-fill" style={{ width: `${value}%` }} />
        <i className="progress-marker" style={{ left: `${marker}%` }} />
      </div>
    </div>
  );
}

function BiomarkersCard() {
  return (
    <section className="vyra-card biomarkers-card" aria-label="Biomarkers Detected">
      <ProgressMetric label="Biomarkers Detected" value={88} marker={88} />
      <ProgressMetric label="Risk Analysis" value={67} marker={67} />
    </section>
  );
}

function HealthScoreCard() {
  const dots = Array.from({ length: 36 }, (_, index) => ({
    angle: index * 10,
    size: index % 5 === 0 ? 5 : 4,
    depth: 78 + (index % 4) * 7,
  }));

  return (
    <section className="vyra-card health-score-card" aria-label="Health Score">
      <h2>Health Score</h2>
      <div className="health-orbit" aria-hidden="true">
        {dots.map((dot) => (
          <span
            className="orbit-dot"
            key={`orbit-${dot.angle}`}
            style={{
              "--angle": `${dot.angle}deg`,
              "--depth": `${dot.depth}px`,
              "--dot-size": `${dot.size}px`,
            }}
          />
        ))}
        <div className="orbit-center">
          <strong>92%</strong>
          <span>Vital Score</span>
        </div>
      </div>
    </section>
  );
}

function NeuralCard() {
  return (
    <section className="vyra-card neural-card" aria-label="Neural Stability Score">
      <div className="neural-head">
        <div>
          <span className="score-large">
            82<small>/100</small>
          </span>
          <p>Neural Stability Score</p>
        </div>
        <span className="stable-chip">Stable</span>
      </div>
      <div className="neural-plot">
        <svg viewBox="0 0 320 58" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0 34 C22 32 34 33 48 34 C66 35 74 28 92 29 C108 30 112 25 128 28 C144 32 148 35 164 31 C180 27 194 25 208 29 C226 33 238 32 254 32 C276 32 288 27 304 26 C314 28 318 31 320 31"
            fill="none"
            stroke="#A9C7DF"
            strokeWidth="2"
          />
          <line x1="176" x2="176" y1="9" y2="57" stroke="#87BCD8" strokeDasharray="2 3" />
          <circle cx="176" cy="28" r="4" fill="#84B7DB" stroke="#fff" strokeWidth="2" />
        </svg>
        <div className="neural-tooltip">
          <strong>84</strong>
          <span>Sep 16</span>
        </div>
      </div>
      <div className="month-row">
        {neuralMonths.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </section>
  );
}

function AiMedicineCard() {
  return (
    <section className="vyra-card ai-card" aria-label="The power of AI in medicine">
      <div>
        <h2>The power of AI in medicine</h2>
        <p>Each session captures and interprets a wide range of biometric indicators in real time.</p>
      </div>
      <button type="button">Try the Capsule</button>
    </section>
  );
}

function ScanResultCard() {
  return (
    <section className="vyra-card scan-card" aria-label="Scan result">
      <div className="scan-copy">
        <h2>Scan result</h2>
        <p>
          Your scan indicates a generally stable condition with mild signs of respiratory strain. No
          critical risks detected.
        </p>
        <div className="vitals-grid">
          {vitals.map((vital) => (
            <div className="vital-item" key={vital.label}>
              <span>{vital.label}</span>
              <strong>{vital.value}</strong>
              <em className={vital.tone}>{vital.status}</em>
            </div>
          ))}
        </div>
      </div>
      <div className="portrait-card" aria-label="Cognitive state scan">
        <HumanProfile />
        <div className="neck-marker" aria-hidden="true">
          <span />
        </div>
        <div className="cognitive-badge">
          <span className="brain-icon">
            <Icon name="brain" className="icon-sm" />
          </span>
          <strong>Cognitive State</strong>
          <em>Optimal</em>
        </div>
      </div>
    </section>
  );
}

function HumanProfile() {
  return (
    <svg className="human-profile" viewBox="0 0 250 280" role="img" aria-label="Side profile scan">
      <defs>
        <radialGradient id="headGlowRegenerated" cx="45%" cy="30%" r="62%">
          <stop offset="0%" stopColor="#4F4A48" />
          <stop offset="55%" stopColor="#1F1D22" />
          <stop offset="100%" stopColor="#0E0D12" />
        </radialGradient>
        <linearGradient id="skinEdgeRegenerated" x1="0%" y1="10%" x2="100%" y2="90%">
          <stop offset="0%" stopColor="#201A1B" />
          <stop offset="50%" stopColor="#2A2527" />
          <stop offset="100%" stopColor="#C4B6A8" />
        </linearGradient>
        <filter id="softEdgeRegenerated">
          <feGaussianBlur stdDeviation="0.35" />
        </filter>
      </defs>
      <path
        d="M148 21c47 6 71 40 71 83 0 27-10 45-22 61-9 12-16 21-18 43-2 22 7 37 23 48H88c14-17 19-33 16-49-3-16-17-23-35-33-20-11-32-28-34-49-4-39 19-78 54-95 17-8 38-12 59-9Z"
        fill="#EAF2FF"
        opacity="0.92"
        filter="url(#softEdgeRegenerated)"
      />
      <path
        d="M138 28c44 4 68 34 69 75 1 35-18 57-34 76-9 11-12 28-9 48 3 18 15 30 31 42H81c15-15 20-31 16-49-3-14-13-21-30-30-21-11-36-27-38-49-3-35 19-72 51-92 16-10 36-24 58-21Z"
        fill="url(#headGlowRegenerated)"
      />
      <path
        d="M71 99c-4 13-4 32 1 44 5 13 16 25 29 30 9 4 19 3 27-2 8-4 14-12 17-20 5-12 11-24 23-34 9-7 14-18 13-29-2-24-18-40-41-44-30-5-59 22-69 55Z"
        fill="url(#skinEdgeRegenerated)"
        opacity="0.88"
      />
      <path
        d="M87 132c12 2 23-3 30-12 7-10 8-22 4-32-9 10-19 17-30 22-12 5-22 9-30 18 7 1 15 2 26 4Z"
        fill="#151319"
        opacity="0.85"
      />
      <path d="M72 149c10 6 22 7 36 3" fill="none" stroke="#BDAEA4" strokeWidth="3" opacity="0.45" />
      <path d="M75 120c8-5 16-6 25-3" fill="none" stroke="#0A0910" strokeWidth="3" />
      <path d="M121 143c8 3 16 2 24-3" fill="none" stroke="#BDAEA4" strokeWidth="2" opacity="0.5" />
      <path
        d="M161 180c13 10 23 28 28 55 2 12 11 23 26 34H86c18-13 31-30 39-52 5-16 14-31 36-37Z"
        fill="#E4D9CF"
        opacity="0.88"
      />
      <path d="M184 220c10 21 21 35 37 46H101c35-5 61-21 83-46Z" fill="#F3EFE9" opacity="0.72" />
    </svg>
  );
}

function VitalScoreCard() {
  const points = [
    [0, 64],
    [74, 64],
    [148, 64],
    [222, 42],
    [296, 72],
    [370, 62],
    [444, 56],
    [520, 52],
  ];

  return (
    <section className="vyra-card vital-score-card" aria-label="Vital Score">
      <h2>Vital Score</h2>
      <div className="vital-chart">
        <div className="axis-labels" aria-hidden="true">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0</span>
        </div>
        <div className="plot-area">
          <svg viewBox="0 0 520 148" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="vitalFillRegenerated" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C8DCEC" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#C8DCEC" stopOpacity="0.04" />
              </linearGradient>
            </defs>
            <g className="grid-lines">
              <path d="M0 12H520M0 49H520M0 86H520M0 123H520" />
              <path d="M0 0V148M74 0V148M148 0V148M222 0V148M296 0V148M370 0V148M444 0V148M520 0V148" />
            </g>
            <path
              d="M0 64 L74 64 L148 64 L222 42 L296 72 L370 62 L444 56 L520 52"
              fill="none"
              stroke="#80ABC9"
              strokeWidth="2"
              strokeDasharray="2 3"
            />
            <path
              d="M0 148 L0 64 L74 64 L148 64 L222 42 L296 72 L370 62 L444 56 L520 52 L520 148Z"
              fill="url(#vitalFillRegenerated)"
            />
            {points.map(([x, y], index) => (
              <circle
                cx={x}
                cy={y}
                fill="#83B3D6"
                key={`${x}-${y}`}
                r={index === 3 ? 5 : 3}
                stroke="#E8F2FF"
                strokeWidth="1.5"
              />
            ))}
          </svg>
          <div className="vital-tooltip">
            <span>Apr 24, 2026</span>
            <strong>
              82 / 100 <em>Good</em>
            </strong>
          </div>
          <div className="vital-months">
            {vitalMonths.map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VyraHealthPage() {
  return (
    <main className="vyra-page">
      <div className="data-cloud cloud-one" aria-hidden="true" />
      <div className="data-cloud cloud-two" aria-hidden="true" />
      <div className="data-cloud cloud-three" aria-hidden="true" />

      <section className="vyra-dashboard" aria-label="Vyra health intelligence dashboard">
        <header className="vyra-topbar">
          <a className="vyra-brand" href="/" aria-label="Vyra home">
            <span className="vyra-mark" aria-hidden="true" />
            <span>Vyra</span>
          </a>

          <nav className="vyra-tabs" aria-label="Health sections">
            {tabs.map((tab) => (
              <button className={tab === "Overview" ? "active" : ""} key={tab} type="button">
                {tab}
              </button>
            ))}
          </nav>

          <div className="top-actions">
            <button className="glass-icon" type="button" aria-label="Search">
              <Icon name="search" className="icon-md" />
            </button>
            <button className="glass-icon" type="button" aria-label="Settings">
              <Icon name="settings" className="icon-md" />
            </button>
          </div>
        </header>

        <section className="vyra-hero">
          <div className="hero-copy">
            <h1>Health Intelligence Overview</h1>
            <p>
              AI-powered interpretation of your body's key signals, combining biomarkers, neural
              activity, and predictive health insights.
            </p>
          </div>
          <div className="hero-actions">
            <button className="share-button" type="button">
              <span>Share Report</span>
              <Icon name="upload" className="icon-sm" />
            </button>
            <button className="glass-icon" type="button" aria-label="Notifications">
              <Icon name="bell" className="icon-sm" />
            </button>
          </div>
        </section>

        <section className="dashboard-layout" aria-label="Health intelligence overview cards">
          <div className="left-dashboard-grid">
            <RiskReductionCard />
            <BiomarkersCard />
            <HealthScoreCard />
            <NeuralCard />
            <AiMedicineCard />
          </div>
          <div className="right-dashboard-stack">
            <ScanResultCard />
            <VitalScoreCard />
          </div>
        </section>
      </section>

      <style>{`
        .vyra-page {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 78% 0%, rgba(255, 255, 255, 0.22), transparent 30%),
            radial-gradient(circle at 50% 8%, rgba(255, 255, 255, 0.16), transparent 25%),
            linear-gradient(180deg, #6e9acc 0%, #8eb5e2 55%, #dcecff 100%);
          color: #171726;
          font-family: Manrope, ui-sans-serif, system-ui, sans-serif;
          padding: clamp(28px, 5.2vw, 62px) clamp(18px, 4vw, 48px) 58px;
        }

        .vyra-dashboard {
          position: relative;
          z-index: 2;
          width: min(1200px, 100%);
          margin: 0 auto;
        }

        .data-cloud {
          position: absolute;
          width: 385px;
          height: 196px;
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.31) 0 1.2px, transparent 1.7px);
          background-size: 8px 8px;
          opacity: 0.5;
          pointer-events: none;
          -webkit-mask-image: radial-gradient(ellipse at center, #000 0 50%, transparent 72%);
          mask-image: radial-gradient(ellipse at center, #000 0 50%, transparent 72%);
        }

        .cloud-one {
          top: 155px;
          left: 33%;
          transform: rotate(-8deg);
        }

        .cloud-two {
          top: 135px;
          right: 11%;
          width: 350px;
          height: 175px;
          transform: rotate(7deg);
          opacity: 0.42;
        }

        .cloud-three {
          top: 190px;
          left: 54%;
          width: 250px;
          height: 145px;
          opacity: 0.28;
        }

        .vyra-topbar {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          min-height: 43px;
        }

        .vyra-brand {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          justify-self: start;
          color: #fff;
          font-family: Georgia, Times New Roman, serif;
          font-size: 25px;
          line-height: 1;
          text-decoration: none;
          text-shadow: 0 1px 1px rgba(32, 63, 103, 0.14);
        }

        .vyra-mark {
          position: relative;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #fff;
          display: inline-block;
        }

        .vyra-mark::after {
          content: "";
          position: absolute;
          width: 19px;
          height: 19px;
          right: -9px;
          top: 6px;
          border-radius: 50%;
          background: #fff;
        }

        .vyra-tabs {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: center;
          width: 365px;
          height: 40px;
          padding: 3px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.18);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.48),
            inset 0 -1px 2px rgba(52, 82, 121, 0.12);
          backdrop-filter: blur(9px);
        }

        .vyra-tabs button {
          height: 34px;
          border: 0;
          border-radius: 999px;
          background: transparent;
          color: rgba(255, 255, 255, 0.93);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0;
        }

        .vyra-tabs button.active {
          color: #171726;
          background: rgba(255, 255, 255, 0.94);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.85),
            0 1px 2px rgba(39, 67, 105, 0.10);
        }

        .top-actions {
          justify-self: end;
          display: flex;
          gap: 8px;
        }

        .glass-icon,
        .share-button {
          border: 0;
          color: #fff;
          background: rgba(255, 255, 255, 0.18);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.56),
            inset 0 -1px 2px rgba(57, 87, 126, 0.14);
          backdrop-filter: blur(10px);
        }

        .glass-icon {
          display: inline-grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
        }

        .icon-md {
          width: 19px;
          height: 19px;
        }

        .icon-sm {
          width: 17px;
          height: 17px;
        }

        .vyra-hero {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 28px;
          margin-top: 70px;
          color: #fff;
        }

        .hero-copy {
          width: min(640px, 100%);
        }

        .vyra-hero h1 {
          margin: 0;
          font-family: Georgia, Times New Roman, serif;
          font-size: clamp(34px, 3.45vw, 41px);
          font-weight: 400;
          line-height: 1.04;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .vyra-hero p {
          max-width: 465px;
          margin: 15px 0 0;
          color: rgba(255, 255, 255, 0.90);
          font-size: 13px;
          font-weight: 500;
          line-height: 1.45;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 3px;
        }

        .share-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 42px;
          padding: 0 16px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
        }

        .dashboard-layout {
          display: flex;
          gap: 12px;
          margin-top: 34px;
        }

        .left-dashboard-grid {
          flex: 0 0 665px;
          display: grid;
          grid-template-columns: 393px 263px;
          grid-template-rows: 116px 170px 155px 104px;
          gap: 12px 9px;
          min-width: 0;
        }

        .right-dashboard-stack {
          flex: 1 1 auto;
          min-width: 0;
          display: grid;
          grid-template-rows: 325px 244px;
          gap: 12px;
        }

        .vyra-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(223, 231, 243, 0.86);
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 1px 2px rgba(31, 54, 84, 0.04);
        }

        .vyra-card h2 {
          margin: 0;
          color: #171726;
          font-family: Georgia, Times New Roman, serif;
          font-size: 25px;
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: 0;
        }

        .risk-card {
          grid-column: 1;
          grid-row: 1 / span 2;
          padding: 19px 18px 0;
        }

        .risk-chart {
          height: 139px;
          margin: 5px -18px 0;
          padding: 0 15px;
          border-bottom: 1px solid #e9edf5;
        }

        .risk-bars {
          display: grid;
          grid-template-columns: repeat(24, minmax(3px, 1fr));
          align-items: end;
          gap: 10px;
          height: 106px;
          padding: 2px 0 0;
        }

        .risk-bar {
          display: block;
          height: var(--bar-height);
          min-height: 12px;
          border-radius: 999px 999px 2px 2px;
          background: linear-gradient(180deg, #9cc9e9 0%, #619bc6 100%);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.55);
        }

        .risk-bar.ghost {
          background: linear-gradient(180deg, rgba(224, 230, 243, 0.78), rgba(236, 240, 248, 0.42));
          box-shadow: none;
        }

        .risk-range {
          height: 21px;
          padding: 6px 41px 0;
        }

        .risk-range span {
          display: block;
          width: 175px;
          height: 10px;
          border-radius: 999px;
          background: #e2eaf7;
          border-left: 1px solid #89a8c5;
          border-right: 1px solid #89a8c5;
        }

        .risk-stats {
          margin: 0 -18px;
        }

        .risk-stat {
          display: grid;
          grid-template-columns: 13px 1fr auto;
          align-items: center;
          height: 36px;
          padding: 0 20px;
          border-top: 1px solid #e9edf4;
          color: #222431;
          font-size: 12px;
          line-height: 1;
        }

        .risk-stat strong {
          font-size: 12px;
          font-weight: 800;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .status-dot.blue {
          background: #88B6DA;
        }

        .status-dot.dark {
          background: #050507;
        }

        .status-dot.pale {
          background: #E7ECF8;
        }

        .biomarkers-card {
          grid-column: 2;
          grid-row: 1;
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .progress-label {
          color: #272A36;
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 8px;
        }

        .progress-track {
          position: relative;
          height: 16px;
          border-radius: 2px;
          background: #EBEEF6;
          overflow: visible;
        }

        .progress-fill {
          display: block;
          height: 100%;
          border-radius: 2px 0 0 2px;
          background: linear-gradient(180deg, #9bc9ec, #75afd9);
        }

        .progress-marker {
          position: absolute;
          top: -12px;
          bottom: -2px;
          width: 1px;
          border-left: 1px dotted #6b93ba;
        }

        .progress-marker::before {
          content: "";
          position: absolute;
          top: -1px;
          left: -2px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #3D8CCF;
        }

        .health-score-card {
          grid-column: 2;
          grid-row: 2 / span 2;
          padding: 20px 18px 18px;
        }

        .health-orbit {
          position: absolute;
          left: 50%;
          top: 53%;
          width: 230px;
          height: 230px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }

        .health-orbit::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            radial-gradient(circle, transparent 0 38%, rgba(211, 226, 239, 0.42) 38.5%, transparent 39%),
            repeating-conic-gradient(from -5deg, rgba(180, 204, 224, 0.38) 0deg 1deg, transparent 1deg 10deg);
          -webkit-mask-image: radial-gradient(circle, transparent 0 29%, #000 30% 74%, transparent 75%);
          mask-image: radial-gradient(circle, transparent 0 29%, #000 30% 74%, transparent 75%);
        }

        .orbit-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: var(--dot-size);
          height: var(--dot-size);
          border-radius: 50%;
          background: #82B3D6;
          box-shadow: 0 0 0 2px rgba(130, 179, 214, 0.10);
          transform: translate(-50%, -50%) rotate(var(--angle)) translateY(calc(-1 * var(--depth)));
        }

        .orbit-center {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 2;
          transform: translate(-50%, -50%);
          display: grid;
          place-items: center;
          width: 112px;
          height: 90px;
          color: #171726;
          text-align: center;
        }

        .orbit-center strong {
          display: block;
          font-family: Georgia, Times New Roman, serif;
          font-size: 29px;
          font-weight: 400;
          line-height: 1;
        }

        .orbit-center span {
          margin-top: -18px;
          color: #7C818B;
          font-size: 11px;
          font-weight: 500;
        }

        .neural-card {
          grid-column: 1;
          grid-row: 3;
          padding: 15px 18px 12px;
        }

        .neural-head {
          display: flex;
          justify-content: space-between;
          gap: 14px;
        }

        .score-large {
          display: block;
          font-family: Georgia, Times New Roman, serif;
          font-size: 33px;
          font-weight: 400;
          line-height: 1;
        }

        .score-large small {
          margin-left: 1px;
          color: #3A3E4B;
          font-family: Manrope, ui-sans-serif, system-ui, sans-serif;
          font-size: 9px;
        }

        .neural-head p {
          margin: 7px 0 0;
          color: #5E6470;
          font-size: 12px;
          line-height: 1;
        }

        .stable-chip {
          align-self: flex-start;
          height: 14px;
          padding: 2px 8px 0;
          border: 1px solid #e7ecf5;
          border-radius: 999px;
          color: #6B717E;
          font-size: 7px;
          font-weight: 700;
          line-height: 1.2;
        }

        .neural-plot {
          position: relative;
          height: 57px;
          margin-top: 5px;
          background: linear-gradient(180deg, rgba(246, 249, 253, 0.96), rgba(248, 250, 254, 0.7));
        }

        .neural-plot svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .neural-tooltip {
          position: absolute;
          left: 178px;
          top: -34px;
          width: 57px;
          height: 34px;
          border-radius: 8px;
          background: #191936;
          color: #fff;
          display: grid;
          place-items: center;
          padding: 4px 0;
          box-shadow: 0 6px 12px rgba(24, 24, 54, 0.12);
        }

        .neural-tooltip::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -5px;
          transform: translateX(-50%);
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid #191936;
        }

        .neural-tooltip strong {
          font-size: 11px;
          line-height: 1;
        }

        .neural-tooltip span {
          font-size: 9px;
          line-height: 1;
          color: rgba(255, 255, 255, 0.78);
        }

        .month-row {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 2px;
          color: #89909C;
          font-size: 8px;
          line-height: 1;
        }

        .ai-card {
          grid-column: 1 / span 2;
          grid-row: 4;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 21px;
          padding: 18px;
        }

        .ai-card p {
          max-width: 442px;
          margin: 12px 0 0;
          color: #6D737E;
          font-size: 12px;
          line-height: 1.35;
        }

        .ai-card button {
          flex: 0 0 auto;
          width: 130px;
          height: 49px;
          border: 0;
          border-radius: 9px;
          background: linear-gradient(135deg, #121231 0%, #343346 100%);
          color: #fff;
          font-size: 14px;
          font-weight: 800;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.18),
            inset 0 -1px 2px rgba(0, 0, 0, 0.22);
        }

        .scan-card {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 259px;
          gap: 16px;
          padding: 16px;
        }

        .scan-copy {
          min-width: 0;
          padding: 2px 0 0;
        }

        .scan-copy p {
          margin: 21px 0 0;
          color: #777B84;
          font-size: 13px;
          line-height: 1.45;
        }

        .vitals-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 23px;
          row-gap: 22px;
          margin-top: 23px;
        }

        .vital-item span {
          display: block;
          color: #7A7F89;
          font-size: 12px;
          line-height: 1;
        }

        .vital-item strong {
          display: block;
          margin-top: 8px;
          color: #0F1017;
          font-size: 18px;
          line-height: 1;
        }

        .vital-item em {
          display: block;
          margin-top: 7px;
          font-size: 9px;
          font-style: normal;
          font-weight: 800;
          line-height: 1;
        }

        .vital-item em::before {
          content: "";
          display: inline-block;
          width: 11px;
          height: 7px;
          margin-right: 3px;
          border-top: 2px solid currentColor;
          border-left: 2px solid currentColor;
          transform: skew(-20deg) translateY(-1px);
        }

        .vital-item em.normal {
          color: #3D8F28;
        }

        .vital-item em.low {
          color: #C78124;
        }

        .portrait-card {
          position: relative;
          overflow: hidden;
          border-radius: 9px;
          background:
            radial-gradient(circle at 43% 24%, rgba(255, 255, 255, 0.86), transparent 30%),
            linear-gradient(180deg, #EDF4FF 0%, #E8F0FB 100%);
        }

        .portrait-card::before {
          content: "";
          position: absolute;
          top: 22px;
          left: 49px;
          width: 177px;
          height: 210px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.68);
          opacity: 0.8;
        }

        .human-profile {
          position: absolute;
          right: 6px;
          bottom: -2px;
          width: 249px;
          height: 300px;
        }

        .neck-marker {
          position: absolute;
          left: 149px;
          bottom: 47px;
          height: 64px;
          border-left: 1px dotted rgba(255, 255, 255, 0.75);
        }

        .neck-marker span {
          position: absolute;
          left: -6px;
          top: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(23, 25, 38, 0.18);
        }

        .cognitive-badge {
          position: absolute;
          right: 11px;
          bottom: 11px;
          display: flex;
          align-items: center;
          gap: 9px;
          height: 39px;
          padding: 0 9px 0 8px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.90);
          color: #242533;
          box-shadow: 0 6px 14px rgba(41, 54, 74, 0.10);
        }

        .brain-icon {
          display: inline-grid;
          place-items: center;
          width: 29px;
          height: 29px;
          border-radius: 50%;
          color: #fff;
          background: #171736;
        }

        .cognitive-badge strong {
          font-size: 12px;
          white-space: nowrap;
        }

        .cognitive-badge em {
          display: inline-flex;
          align-items: center;
          height: 29px;
          padding: 0 9px;
          border-radius: 999px;
          background: #fff;
          color: #171726;
          font-size: 12px;
          font-style: normal;
          font-weight: 800;
        }

        .vital-score-card {
          padding: 18px 16px 12px;
        }

        .vital-chart {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 7px;
          height: 185px;
          margin-top: 11px;
        }

        .axis-labels {
          display: grid;
          grid-template-rows: repeat(5, 1fr);
          align-items: start;
          color: #8A909C;
          font-size: 8px;
          line-height: 1;
        }

        .plot-area {
          position: relative;
          min-width: 0;
          padding-bottom: 21px;
        }

        .plot-area svg {
          width: 100%;
          height: 162px;
          display: block;
        }

        .grid-lines path {
          stroke: rgba(226, 232, 241, 0.72);
          stroke-width: 1;
        }

        .vital-tooltip {
          position: absolute;
          left: 36.8%;
          top: -28px;
          width: 96px;
          height: 44px;
          display: grid;
          place-items: center;
          padding: 6px 0;
          border-radius: 8px;
          background: #191936;
          color: #fff;
          box-shadow: 0 7px 16px rgba(24, 24, 54, 0.13);
        }

        .vital-tooltip::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -6px;
          transform: translateX(-50%);
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid #191936;
        }

        .vital-tooltip span {
          color: rgba(255, 255, 255, 0.72);
          font-size: 9px;
          line-height: 1;
        }

        .vital-tooltip strong {
          font-size: 14px;
          line-height: 1;
        }

        .vital-tooltip em {
          color: rgba(255, 255, 255, 0.75);
          font-size: 9px;
          font-style: normal;
          font-weight: 500;
        }

        .vital-months {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          color: #8B929E;
          font-size: 8px;
          line-height: 1;
        }

        @media (max-width: 1180px) {
          .dashboard-layout {
            flex-direction: column;
          }

          .left-dashboard-grid {
            flex: none;
            width: 100%;
            grid-template-columns: minmax(0, 1.5fr) minmax(250px, 1fr);
          }

          .right-dashboard-stack {
            grid-template-rows: 325px 244px;
          }
        }

        @media (max-width: 760px) {
          .vyra-page {
            padding: 20px 16px 42px;
          }

          .vyra-topbar {
            grid-template-columns: 1fr auto;
            gap: 14px;
          }

          .vyra-tabs {
            grid-column: 1 / -1;
            grid-row: 2;
            justify-self: stretch;
            width: 100%;
          }

          .top-actions {
            grid-column: 2;
            grid-row: 1;
          }

          .vyra-hero {
            align-items: flex-start;
            flex-direction: column;
            margin-top: 44px;
          }

          .vyra-hero h1 {
            white-space: normal;
          }

          .hero-actions {
            padding-bottom: 0;
          }

          .dashboard-layout {
            margin-top: 26px;
          }

          .left-dashboard-grid,
          .right-dashboard-stack {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }

          .risk-card {
            height: 298px;
          }

          .biomarkers-card {
            height: 116px;
          }

          .health-score-card {
            height: 335px;
          }

          .neural-card {
            height: 155px;
          }

          .ai-card {
            align-items: flex-start;
            flex-direction: column;
            height: auto;
          }

          .scan-card {
            grid-template-columns: 1fr;
          }

          .portrait-card {
            height: 298px;
          }

          .vital-score-card {
            height: 256px;
          }
        }
      `}</style>
    </main>
  );
}
