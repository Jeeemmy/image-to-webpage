const BLUE = "#0836D9";

const navItems = [
  { icon: "grid", label: "Dashboard", active: true },
  { icon: "truck", label: "Vehicles" },
  { icon: "map", label: "Map" },
  { icon: "list", label: "Documents" },
  { icon: "users", label: "Team" },
  { icon: "truck", label: "Shipments" },
  { icon: "id", label: "Cards" },
  { icon: "settings", label: "Settings" },
];

const metrics = [
  {
    icon: "truck",
    title: "Vehicles",
    subtitle: "in Transit",
    period: "This month",
    value: "13",
    faint: "/20",
    badge: "+2",
    trend: "donut",
  },
  {
    icon: "calendar",
    title: "Total",
    subtitle: "Shipments",
    period: "30-days",
    value: "26",
    badge: "+12%",
    badgeTone: "success",
    trend: "bars",
  },
  {
    icon: "check",
    title: "Finalized",
    subtitle: "Shipments",
    period: "Annualy",
    value: "852",
    badge: "-3%",
    badgeTone: "error",
    trend: "donut",
  },
];

const alerts = [
  {
    icon: "vehicle-card",
    title: "MOT Inspection",
    warning: "Expires in 7 days",
    meta: "Vehicle V-10",
  },
  {
    avatar: "driver-1",
    title: "Driver Medical Exam",
    warning: "Expires in 14 days",
    meta: "J. Smithson",
  },
];

const shipments = [
  {
    id: "S-8539",
    route: ["Warsaw", "Berlin"],
    status: "In Transit",
    tone: "blue",
    customer: "Polmlek Sp. z o.o.",
    time: "30 Apr · 08:00",
    vehicle: "V-023",
    driver: "driver-2",
  },
  {
    id: "S-4920",
    route: ["Lodz", "Munich"],
    status: "In Transit",
    tone: "blue",
    customer: "Foodex GmbH",
    time: "29 Apr · 14:30",
    vehicle: "V-021",
    driver: "driver-1",
  },
  {
    id: "S-1583",
    route: ["Cracow", "Vienna"],
    status: "Picked Up",
    tone: "yellow",
    customer: "ChemPol S.A.",
    time: "29 Apr · 09:15",
    vehicle: "V-012",
    driver: "driver-3",
  },
  {
    id: "S-2857",
    route: ["Gdansk", "Hamburg"],
    status: "Assigned",
    tone: "orange",
    customer: "NordSped GmbH",
    time: "30 Apr · 16:45",
    vehicle: "V-015",
    driver: "driver-4",
  },
  {
    id: "S-3857",
    route: ["Wroclaw", "Prague"],
    status: "Delivered",
    tone: "green",
    customer: "BCD Logistics",
    time: "01 May · 06:00",
    vehicle: "V-007",
    driver: "driver-5",
  },
];

const profitBars = [
  { day: "Mon", value: "16K", profit: 52, cost: 92 },
  { day: "Tue", value: "17K", profit: 58, cost: 70 },
  { day: "Wed", value: "13K", profit: 44, cost: 92 },
  { day: "Thu", value: "18K", profit: 62, cost: 68 },
  { day: "Fri", value: "21K", profit: 70, cost: 96 },
  { day: "Sat", value: "9K", profit: 34, cost: 84 },
  { day: "Sun", value: "13K", profit: 44, cost: 92 },
];

const financeCards = [
  { value: "323K PLN", label: "Total Revenue" },
  { value: "216K PLN", label: "Total Cost" },
  { value: "107K PLN", label: "Net Profit" },
];

const documents = [
  {
    id: "INV-2026-04-0134",
    value: "€3,250.00",
    issued: "Issued 18 Apr 2026",
    due: "Due 02 May 2026",
  },
  {
    id: "INV-2026-03-0098",
    value: "€5,000.00",
    issued: "Issued 10 Mar 2026",
    due: "Due 02 April 2026",
  },
  {
    id: "INV-2026-03-0098",
    value: "€2,400.00",
    issued: "Issued 05 Mar 2026",
    due: "Due 02 April 2026",
  },
];

function Icon({ name, className = "h-4 w-4", strokeWidth = 2 }) {
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
    case "grid":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="6" height="6" rx="1.5" />
          <rect x="14" y="4" width="6" height="6" rx="1.5" />
          <rect x="4" y="14" width="6" height="6" rx="1.5" />
          <rect x="14" y="14" width="6" height="6" rx="1.5" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path d="M3.8 6.5h10.8v9H3.8z" />
          <path d="M14.6 9h3.2l2.4 3v3.5h-5.6z" />
          <circle cx="8" cy="17.2" r="1.6" />
          <circle cx="17.4" cy="17.2" r="1.6" />
          <path d="M6.1 10h4.8M6.1 12.5h3.2" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="m4 6.5 5-2 6 2 5-2v13l-5 2-6-2-5 2z" />
          <path d="M9 4.5v13M15 6.5v13" />
        </svg>
      );
    case "list":
      return (
        <svg {...common}>
          <rect x="5" y="4.5" width="14" height="15" rx="2" />
          <path d="M8.5 8h7M8.5 12h7M8.5 16h5" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8.2" r="2.8" />
          <circle cx="16.5" cy="9.2" r="2.2" />
          <path d="M4 19c.7-3.1 2.4-4.7 5-4.7s4.3 1.6 5 4.7" />
          <path d="M14.7 15.2c2.5.2 4.1 1.5 4.8 3.8" />
        </svg>
      );
    case "id":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="2.2" />
          <path d="M8 9h4M8 13h8M8 16h6" />
          <path d="M15.5 8.6h1.8v1.8h-1.8z" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19 13.8a1.5 1.5 0 0 0 .2 1.7l.1.1-1.6 2.8-2-.6-.3.2a1.5 1.5 0 0 0-1.5 1.2L13.4 21h-2.8l-.5-1.8A1.5 1.5 0 0 0 8.6 18l-.3-.2-2 .6-1.6-2.8.1-.1a1.5 1.5 0 0 0 .2-1.7l-.1-.3-1.9-.5v-3l1.9-.5.1-.3a1.5 1.5 0 0 0-.2-1.7l-.1-.1 1.6-2.8 2 .6.3-.2a1.5 1.5 0 0 0 1.5-1.2L10.6 3h2.8l.5 1.8A1.5 1.5 0 0 0 15.4 6l.3.2 2-.6 1.6 2.8-.1.1a1.5 1.5 0 0 0-.2 1.7l.1.3 1.9.5v3z" />
        </svg>
      );
    case "send":
      return (
        <svg {...common}>
          <path d="m4 12.5 16-8-5.2 15-3.2-6.2z" />
          <path d="m11.6 13.3 3.8-4.5" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M5 7h10M5 12h14M5 17h10" />
          <path d="m18 8 2 2-2 2" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="10.8" cy="10.8" r="6.2" />
          <path d="m16 16 4 4" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M18 10a6 6 0 0 0-12 0c0 6.2-2 7-2 7h16s-2-.8-2-7Z" />
          <path d="M9.8 20a2.6 2.6 0 0 0 4.4 0" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 2.8v2M12 19.2v2M4.4 4.4l1.4 1.4M18.2 18.2l1.4 1.4M2.8 12h2M19.2 12h2M4.4 19.6l1.4-1.4M18.2 5.8l1.4-1.4" />
        </svg>
      );
    case "moon":
      return (
        <svg {...common}>
          <path d="M18.5 15.4A7.4 7.4 0 0 1 8.6 5.5 7.5 7.5 0 1 0 18.5 15.4Z" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M5 19V5M5 19h14" />
          <path d="m8 15 3.5-4 3 2 4-6" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m8.5 12.2 2.3 2.3 4.8-5.2" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="4" y="5.5" width="16" height="14" rx="2" />
          <path d="M8 3.5v4M16 3.5v4M4 10h16" />
        </svg>
      );
    case "external":
      return (
        <svg {...common}>
          <path d="M8 16 16 8M10 8h6v6" />
        </svg>
      );
    case "more":
      return (
        <svg {...common}>
          <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
          <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <rect x="6" y="4" width="12" height="16" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h3" />
        </svg>
      );
    case "copy":
      return (
        <svg {...common}>
          <rect x="4" y="4.5" width="11" height="11" rx="2.2" />
          <rect x="9" y="9" width="11" height="11" rx="2.2" />
          <path d="M12 14.5h5M14.5 12v5" />
        </svg>
      );
    default:
      return null;
  }
}

function Avatar({ id, className = "h-8 w-8" }) {
  const variants = {
    "driver-1": "from-[#f2c8a8] via-[#93bdd1] to-[#102b44]",
    "driver-2": "from-[#f8cfad] via-[#2b4d62] to-[#071426]",
    "driver-3": "from-[#d6a275] via-[#162236] to-[#071426]",
    "driver-4": "from-[#d9b181] via-[#244a3b] to-[#10251d]",
    "driver-5": "from-[#e7b9a7] via-[#294959] to-[#102331]",
    user: "from-[#f3c6a8] via-[#54718e] to-[#061226]",
  };

  return (
    <div
      className={`${className} relative overflow-hidden rounded-[9px] bg-gradient-to-br ${
        variants[id] ?? variants.user
      } shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55)]`}
    >
      <div className="absolute left-1/2 top-[22%] h-[28%] w-[28%] -translate-x-1/2 rounded-full bg-[#f7d3bb]" />
      <div className="absolute bottom-[-16%] left-1/2 h-[48%] w-[70%] -translate-x-1/2 rounded-t-full bg-[#0f2741]" />
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="hidden h-screen w-[60px] shrink-0 flex-col items-center justify-between bg-[#F3F6FF] py-8 text-[#121945] lg:flex">
      <div className="flex flex-col items-center gap-7">
        <div className="text-[#0736D7]">
          <Icon name="copy" className="h-7 w-7" strokeWidth={2.2} />
        </div>
        <nav className="flex flex-col items-center gap-2.5" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={`${item.icon}-${item.label}`}
              aria-label={item.label}
              className={`grid h-10 w-10 place-items-center rounded-[8px] transition ${
                item.active
                  ? "bg-[#0836D9] text-white shadow-[0_9px_16px_rgba(8,54,217,0.2)]"
                  : "bg-white/88 text-[#121945] shadow-[inset_0_0_0_1px_rgba(226,232,246,0.75)]"
              }`}
              type="button"
            >
              <Icon name={item.icon} className="h-[17px] w-[17px]" />
            </button>
          ))}
        </nav>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          aria-label="Send"
          className="grid h-10 w-10 place-items-center rounded-[8px] bg-white/82 text-[#0836D9] shadow-[inset_0_0_0_1px_rgba(226,232,246,0.65)]"
          type="button"
        >
          <Icon name="send" className="h-[18px] w-[18px]" />
        </button>
        <div className="h-px w-8 bg-[#E2E8F6]" />
        <button
          aria-label="Collapse"
          className="grid h-10 w-10 place-items-center rounded-[8px] bg-white/82 text-[#121945] shadow-[inset_0_0_0_1px_rgba(226,232,246,0.65)]"
          type="button"
        >
          <Icon name="menu" className="h-[18px] w-[18px]" />
        </button>
      </div>
    </aside>
  );
}

function MobileNav() {
  return (
    <nav className="flex gap-2 overflow-x-auto bg-[#F3F6FF] px-4 py-3 lg:hidden">
      {navItems.map((item) => (
        <button
          key={item.label}
          aria-label={item.label}
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-[8px] ${
            item.active ? "bg-[#0836D9] text-white" : "bg-white text-[#121945]"
          }`}
          type="button"
        >
          <Icon name={item.icon} className="h-4 w-4" />
        </button>
      ))}
    </nav>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-[82px] items-center justify-between bg-[#F3F6FF]/96 px-4 backdrop-blur sm:px-6 lg:px-6">
      <div className="flex min-w-0 items-center gap-2">
        <h1 className="truncate text-[27px] font-semibold leading-none text-[#111640]">
          Dashboard
        </h1>
        <span className="text-[13px] font-semibold text-[#0836D9]">·</span>
        <span className="hidden text-[11px] font-semibold text-[#9EA8C6] sm:inline">
          Fleety
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          aria-label="Add"
          className="grid h-[34px] w-[34px] place-items-center rounded-[8px] bg-[#0836D9] text-white shadow-[0_10px_18px_rgba(8,54,217,0.18)]"
          type="button"
        >
          <Icon name="plus" className="h-[18px] w-[18px]" />
        </button>
        <button
          aria-label="Search"
          className="grid h-[34px] w-[34px] place-items-center rounded-[8px] bg-white text-[#111640] shadow-[inset_0_0_0_1px_rgba(226,232,246,0.75)]"
          type="button"
        >
          <Icon name="search" className="h-[16px] w-[16px]" />
        </button>
        <button
          aria-label="Notifications"
          className="relative grid h-[34px] w-[34px] place-items-center rounded-[8px] bg-white text-[#111640] shadow-[inset_0_0_0_1px_rgba(226,232,246,0.75)]"
          type="button"
        >
          <Icon name="bell" className="h-[16px] w-[16px]" />
          <span className="absolute -right-1 -top-1 grid h-[16px] min-w-[16px] place-items-center rounded-full bg-[#D92A58] px-1 text-[9px] font-bold leading-none text-white">
            9
          </span>
        </button>
        <div className="hidden h-[34px] items-center gap-1 rounded-[8px] bg-white px-2 text-[#111640] shadow-[inset_0_0_0_1px_rgba(226,232,246,0.75)] sm:flex">
          <button aria-label="Light mode" className="grid h-6 w-6 place-items-center" type="button">
            <Icon name="sun" className="h-[15px] w-[15px]" />
          </button>
          <button aria-label="Dark mode" className="grid h-6 w-6 place-items-center" type="button">
            <Icon name="moon" className="h-[15px] w-[15px]" />
          </button>
        </div>
        <Avatar id="user" className="h-[34px] w-[34px]" />
      </div>
    </header>
  );
}

function MetricTrend({ type }) {
  if (type === "bars") {
    return (
      <div className="flex h-[38px] items-end gap-[5px]">
        {[30, 40, 34].map((height, index) => (
          <div key={height} className="relative flex h-[38px] w-[9px] items-end overflow-hidden rounded-full bg-[repeating-linear-gradient(135deg,#d4dcf2_0,#d4dcf2_2px,transparent_2px,transparent_5px)]">
            <span
              className="block w-full rounded-full bg-[#0836D9]"
              style={{ height: `${height - index * 2}px` }}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-[42px] w-[42px] rounded-full bg-[conic-gradient(#0836D9_0_255deg,#D9E1F5_255deg_360deg)]">
      <div className="absolute inset-[9px] rounded-full bg-white" />
      <div className="absolute -left-1 inset-y-0 w-4 bg-[repeating-linear-gradient(135deg,#d7def2_0,#d7def2_2px,transparent_2px,transparent_5px)] opacity-70" />
    </div>
  );
}

function MetricCard({ metric }) {
  return (
    <section className="min-h-[108px] rounded-[14px] border border-[#ECF1FB] bg-white px-5 py-4 shadow-[0_10px_24px_rgba(37,53,103,0.045)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] bg-[#F5F8FF] text-[#0836D9]">
            <Icon name={metric.icon} className="h-[17px] w-[17px]" />
          </span>
          <div className="min-w-0">
            <p className="text-[12px] font-bold leading-[15px] text-[#111640]">
              {metric.title}
              <br />
              {metric.subtitle}
            </p>
          </div>
        </div>
        <button
          className="flex shrink-0 items-center gap-1 pt-1 text-[9px] font-semibold text-[#9CA7C5]"
          type="button"
        >
          {metric.period}
          <span className="text-[#0836D9]">▾</span>
        </button>
      </div>
      <div className="mt-8 flex items-end justify-between gap-4">
        <div className="flex items-center gap-2">
          <p className="text-[31px] font-medium leading-none text-[#0836D9]">
            {metric.value}
            {metric.faint ? (
              <span className="font-light text-[#D2DBEE]">{metric.faint}</span>
            ) : null}
          </p>
          <span
            className={`rounded-[4px] px-1.5 py-1 text-[10px] font-bold ${
              metric.badgeTone === "success"
                ? "bg-[#DDF8EC] text-[#12A66C]"
                : metric.badgeTone === "error"
                  ? "bg-[#FFE8EE] text-[#D82955]"
                  : "text-[#0836D9]"
            }`}
          >
            {metric.badge}
          </span>
        </div>
        <MetricTrend type={metric.trend} />
      </div>
    </section>
  );
}

function LiveMap() {
  const points = [
    [10, 65],
    [18, 83],
    [39, 76],
    [55, 23],
    [72, 50],
    [82, 82],
    [96, 61],
  ];

  return (
    <section className="relative min-h-[150px] overflow-hidden rounded-[14px] border border-[#E6ECF8] bg-[#F2F7FB] shadow-[0_10px_24px_rgba(37,53,103,0.035)]">
      <div className="absolute inset-0 opacity-75">
        <svg className="h-full w-full" viewBox="0 0 420 154" preserveAspectRatio="none">
          <defs>
            <pattern id="mapGrid" width="36" height="26" patternUnits="userSpaceOnUse">
              <path d="M36 0H0v26" fill="none" stroke="#D9E5EF" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="420" height="154" fill="url(#mapGrid)" />
          <path d="M-5 92C52 60 78 118 122 82s58-72 102-38 64 87 118 44 63-27 84-4" fill="none" stroke="#C7D7E4" strokeWidth="2" />
          <path d="M8 30c48 38 80 6 126 30s74 4 114-14 104 14 168-18" fill="none" stroke="#D5E2EC" strokeWidth="1.4" />
          <path d="M44 150c36-52 83-43 111-20s76-32 114-15 67 30 154-29" fill="none" stroke="#D3E0EA" strokeWidth="1.4" />
          <path d="M198 0c-4 32-20 48-5 78s-3 47-22 76" fill="none" stroke="#D5E2EC" strokeWidth="1.4" />
        </svg>
      </div>

      <div className="absolute left-5 top-4 z-10 flex items-center rounded-[8px] bg-white shadow-[0_7px_18px_rgba(39,58,105,0.08)]">
        <span className="px-5 py-3 text-[12px] font-bold text-[#111640]">Live Tracking</span>
        <button className="border-l border-[#ECF1FB] px-4 py-3 text-[11px] font-bold text-[#0836D9]" type="button">
          More
        </button>
      </div>

      {points.map(([x, y]) => (
        <span
          key={`${x}-${y}`}
          className="absolute z-10 h-[13px] w-[13px] rounded-full border-[3px] border-[#0836D9] bg-white shadow-[0_0_0_3px_rgba(8,54,217,0.12)]"
          style={{ left: `${x}%`, top: `${y}%` }}
        />
      ))}

      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 rounded-[7px] bg-white px-2.5 py-1.5 text-[10px] font-bold text-[#111640] shadow-[0_7px_18px_rgba(39,58,105,0.08)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0836D9]" />
        In Transit
        <span className="text-[#0836D9]">▾</span>
      </div>
      <div className="absolute bottom-3 right-3 z-10 flex overflow-hidden rounded-[8px] bg-white shadow-[0_7px_18px_rgba(39,58,105,0.08)]">
        <button className="grid h-10 w-10 place-items-center border-r border-[#ECF1FB] text-2xl font-light text-[#111640]" type="button">
          +
        </button>
        <button className="grid h-10 w-10 place-items-center text-2xl font-light text-[#111640]" type="button">
          −
        </button>
      </div>
    </section>
  );
}

function AlertIcon({ alert }) {
  if (alert.avatar) {
    return <Avatar id={alert.avatar} className="h-[42px] w-[42px]" />;
  }

  return (
    <div className="grid h-[42px] w-[42px] place-items-center rounded-[9px] bg-[#EAF1FF]">
      <div className="relative h-[25px] w-[23px] rounded-[3px] bg-[#EFE9DB] shadow-[inset_0_0_0_2px_#17223B]">
        <div className="absolute -bottom-1 left-1 h-1.5 w-1.5 rounded-full bg-[#17223B]" />
        <div className="absolute -bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-[#17223B]" />
        <div className="absolute inset-x-1 top-1 h-1.5 rounded-sm bg-[#17223B]" />
      </div>
    </div>
  );
}

function AlertCard({ alert }) {
  return (
    <article className="flex min-h-[68px] items-center gap-4 rounded-[14px] border border-[#E9EEF9] bg-white px-5 py-3 shadow-[0_10px_24px_rgba(37,53,103,0.035)]">
      <div className="h-[43px] w-[2px] rounded-full bg-[#D92A58]" />
      <AlertIcon alert={alert} />
      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-bold text-[#111640]">{alert.title}</p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="rounded-[4px] bg-[#FFE8EE] px-2 py-1 text-[10px] font-semibold text-[#D82955]">
            {alert.warning}
          </span>
          <span className="text-[10px] font-semibold text-[#083181]">{alert.meta}</span>
        </div>
      </div>
      <button
        aria-label={`Open ${alert.title}`}
        className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] bg-[#F7F9FE] text-[#0836D9]"
        type="button"
      >
        <Icon name="external" className="h-[17px] w-[17px]" />
      </button>
    </article>
  );
}

function StatusBadge({ tone, children }) {
  const classes = {
    blue: "bg-[#EEF3FF] text-[#0836D9]",
    yellow: "bg-[#FFF3CF] text-[#D9A000]",
    orange: "bg-[#FFF1DD] text-[#E49B34]",
    green: "bg-[#DDF8EC] text-[#12A66C]",
  };

  return (
    <span className={`inline-flex rounded-[4px] px-2 py-1 text-[10px] font-bold ${classes[tone]}`}>
      {children}
    </span>
  );
}

function RouteCell({ from, to }) {
  return (
    <div className="flex min-w-[112px] items-center gap-2 text-[11px] font-semibold text-[#111640]">
      <span>{from}</span>
      <span className="relative h-px w-5 bg-[#C8D3EA]">
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#0836D9] bg-white" />
      </span>
      <span>{to}</span>
    </div>
  );
}

function ShipmentsTable() {
  return (
    <section className="rounded-[14px] border border-[#E7EDF8] bg-white px-5 pb-5 pt-5 shadow-[0_10px_24px_rgba(37,53,103,0.045)]">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-[8px] bg-[#F5F8FF] text-[#0836D9]">
            <Icon name="truck" className="h-[17px] w-[17px]" />
          </span>
          <h2 className="text-[17px] font-bold text-[#111640]">Latest Shipments</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-[8px] bg-[#F8FAFF] px-3 py-2 text-[11px] font-bold text-[#0836D9]" type="button">
            View All
          </button>
          <button aria-label="More shipments" className="grid h-8 w-8 place-items-center rounded-[8px] bg-[#F8FAFF] text-[#0836D9]" type="button">
            <Icon name="more" className="h-[17px] w-[17px]" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[710px] border-collapse text-left">
          <thead>
            <tr className="text-[10px] font-semibold text-[#9AA5C3]">
              {["Shipments", "Route", "Status", "Customer", "Time", "Vehicle", "Driver"].map((head) => (
                <th key={head} className="px-3 pb-3 font-semibold">
                  <span className="inline-flex items-center gap-2">
                    {head}
                    <span className="text-[#0836D9]">▾</span>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment, index) => (
              <tr
                key={shipment.id}
                className={`border-t border-[#E8EDF8] text-[11px] font-semibold text-[#111640] ${
                  index % 2 === 0 ? "bg-[#F6F8FF]" : "bg-white"
                }`}
              >
                <td className="px-3 py-3">
                  <span
                    className={`mr-3 inline-block h-4 w-[3px] rounded-full ${
                      shipment.tone === "green"
                        ? "bg-[#14B87A]"
                        : shipment.tone === "yellow"
                          ? "bg-[#F4B51B]"
                          : shipment.tone === "orange"
                            ? "bg-[#F0A044]"
                            : "bg-[#0836D9]"
                    }`}
                  />
                  {shipment.id}
                </td>
                <td className="px-3 py-3">
                  <RouteCell from={shipment.route[0]} to={shipment.route[1]} />
                </td>
                <td className="px-3 py-3">
                  <StatusBadge tone={shipment.tone}>{shipment.status}</StatusBadge>
                </td>
                <td className="px-3 py-3">{shipment.customer}</td>
                <td className="px-3 py-3">{shipment.time}</td>
                <td className="px-3 py-3 text-[#083181]">{shipment.vehicle}</td>
                <td className="px-3 py-2">
                  <Avatar id={shipment.driver} className="h-7 w-7" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ProfitabilityChart() {
  return (
    <div className="mt-5">
      <div className="flex h-[146px] items-end justify-between gap-2">
        {profitBars.map((bar) => (
          <div key={bar.day} className="flex flex-1 flex-col items-center gap-2">
            <div className="relative flex h-[120px] w-full max-w-[36px] items-end overflow-hidden rounded-[7px] bg-[repeating-linear-gradient(135deg,#d5dced_0,#d5dced_2px,transparent_2px,transparent_5px)]">
              <div
                className="flex w-full items-start justify-center rounded-t-[6px] bg-[#0836D9] pt-2 text-[9px] font-bold text-white"
                style={{ height: `${bar.profit}%` }}
              >
                {bar.value}
              </div>
            </div>
            <span className="text-[9px] font-medium text-[#8D97BB]">{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinanceCards() {
  return (
    <div className="mt-5 grid grid-cols-3 gap-1.5">
      {financeCards.map((card) => (
        <div key={card.label} className="rounded-[6px] border border-[#E5EBF7] bg-white px-3 py-3">
          <p className="text-[14px] font-bold leading-none text-[#111640]">{card.value}</p>
          <p className="mt-1 text-[10px] font-medium text-[#9AA5C3]">{card.label}</p>
        </div>
      ))}
    </div>
  );
}

function DocumentsList() {
  return (
    <section className="mt-5 border-t border-[#E7EDF8] pt-5">
      <h3 className="mb-3 text-[12px] font-semibold text-[#A1AAC6]">Recent Documents</h3>
      <div className="space-y-2">
        {documents.map((doc, index) => (
          <article key={`${doc.id}-${doc.value}`} className="flex items-center gap-3 rounded-[7px] bg-[#F6F8FF] px-3 py-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[7px] bg-white text-[#0836D9]">
              <Icon name="doc" className="h-[15px] w-[15px]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-bold text-[#111640]">{doc.id}</p>
              <p className="text-[9px] font-medium text-[#9AA5C3]">{doc.issued}</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold text-[#0836D9]">{doc.value}</p>
              <p className="text-[9px] font-medium text-[#9AA5C3]">{doc.due}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProfitabilityPanel() {
  return (
    <aside className="rounded-[14px] border border-[#E7EDF8] bg-white p-5 shadow-[0_10px_24px_rgba(37,53,103,0.045)] xl:min-h-[672px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-[8px] bg-[#F5F8FF] text-[#0836D9]">
            <Icon name="chart" className="h-[17px] w-[17px]" />
          </span>
          <h2 className="text-[17px] font-bold text-[#111640]">Profitability</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-[8px] bg-[#F8FAFF] px-3 py-2 text-[11px] font-bold text-[#0836D9]" type="button">
            Details
          </button>
          <button aria-label="More profitability actions" className="grid h-8 w-8 place-items-center rounded-[8px] bg-[#F8FAFF] text-[#0836D9]" type="button">
            <Icon name="more" className="h-[16px] w-[16px]" />
          </button>
        </div>
      </div>

      <section className="mt-7 rounded-[12px] bg-[#F7F9FF] px-5 py-5">
        <p className="text-[35px] font-medium leading-none text-[#0836D9]">€24,850.00</p>
        <div className="mt-5 border-t border-[#E2E8F6] pt-3">
          <div className="flex items-center justify-between text-[10px] font-medium text-[#9AA5C3]">
            <span>Billing Status</span>
            <button className="font-bold" type="button">
              Annualy <span className="text-[#0836D9]">▾</span>
            </button>
          </div>
        </div>
      </section>

      <ProfitabilityChart />
      <FinanceCards />

      <div className="mt-5 flex items-center justify-between border-b border-[#E7EDF8] pb-5">
        <div className="flex items-center gap-3 text-[11px] font-semibold text-[#111640]">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0836D9]" />
            Profitability
          </span>
          <span className="flex items-center gap-1.5 text-[#8D97BB]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D5DDED]" />
            Cost
          </span>
        </div>
        <button className="text-[10px] font-semibold text-[#9AA5C3]" type="button">
          This week <span className="text-[#0836D9]">▾</span>
        </button>
      </div>

      <DocumentsList />
    </aside>
  );
}

function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F3F6FF] text-[#111640] lg:h-screen lg:overflow-hidden">
      <div className="flex min-h-screen w-full bg-[#F3F6FF] lg:h-screen">
        <Sidebar />
        <main className="min-w-0 flex-1 lg:h-full lg:overflow-y-auto">
          <MobileNav />
          <Header />
          <div className="grid gap-3 px-4 pb-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_335px] lg:px-6 lg:pb-6 xl:grid-cols-[minmax(0,1fr)_335px]">
            <section className="min-w-0 space-y-3">
              <div className="grid gap-2.5 md:grid-cols-3">
                {metrics.map((metric) => (
                  <MetricCard key={metric.title} metric={metric} />
                ))}
              </div>

              <div className="grid gap-2.5 xl:grid-cols-[minmax(0,1.05fr)_minmax(280px,1fr)]">
                <LiveMap />
                <div className="space-y-2.5">
                  {alerts.map((alert) => (
                    <AlertCard key={alert.title} alert={alert} />
                  ))}
                </div>
              </div>

              <ShipmentsTable />
            </section>

            <ProfitabilityPanel />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
