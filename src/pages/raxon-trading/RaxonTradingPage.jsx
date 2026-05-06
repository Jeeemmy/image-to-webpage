const navItems = ["Dashboard", "Trade", "Analytics", "Transfer", "Wallet"];

const months = [
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

const metricCards = [
  {
    title: "Total Balance",
    value: "$4,450.00",
    delta: "+31%",
    helper: "vs Last Week",
    trend: "up",
    icon: "chart-up",
    tone: "purple",
  },
  {
    title: "Total Revenue",
    value: "$2,645.00",
    delta: "+8.9%",
    helper: "vs Last Week",
    trend: "up",
    icon: "coin",
    tone: "green",
  },
  {
    title: "Total Trade",
    value: "$8,950.00",
    delta: "+1.8%",
    helper: "New Customers",
    trend: "up",
    icon: "bars",
    tone: "blue",
  },
  {
    title: "Total Loss",
    value: "$8,950.00",
    delta: "-12.8%",
    helper: "vs Last Week",
    trend: "down",
    icon: "trend-down",
    tone: "orange",
  },
];

const assets = [
  {
    name: "Solana",
    symbol: "SOL",
    price: "$520.40",
    change24h: "+36.7%",
    change7d: "+35.1%",
    volume: "$4.3B",
    cap: "$88.1B",
    trend: "up",
    icon: "solana",
    trendPoints: "0,35 10,39 18,25 29,27 38,5 47,44 56,55 66,21 76,47 88,38 101,34 111,27 121,45 134,41",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$4,320.75",
    change24h: "-28.9%",
    change7d: "-31.2%",
    volume: "$32.5B",
    cap: "$32.5T",
    trend: "down",
    icon: "eth",
    trendPoints: "0,14 12,18 20,51 31,52 39,33 47,46 58,25 69,20 77,41 86,5 94,52 104,24 114,44 126,49 134,56",
  },
  {
    name: "Utrust",
    symbol: "UTK",
    price: "$520.40",
    change24h: "+32.1%",
    change7d: "+30.4%",
    volume: "$4.3B",
    cap: "$88.1B",
    trend: "up",
    icon: "utrust",
    trendPoints: "0,31 12,33 23,18 32,20 42,46 52,55 64,22 73,56 83,39 95,35 106,27 116,51 129,45 134,42",
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$64,280.50",
    change24h: "+34.5%",
    change7d: "+29.8%",
    volume: "$18.7B",
    cap: "$4.8T",
    trend: "up",
    icon: "bitcoin",
    trendPoints: "0,44 11,50 20,28 33,33 42,10 54,16 66,22 76,48 84,16 92,56 104,42 112,4 121,27 134,26",
  },
  {
    name: "Quant",
    symbol: "QNT",
    price: "$520.40",
    change24h: "+37.4%",
    change7d: "+33.3%",
    volume: "$4.3B",
    cap: "$88.1B",
    trend: "up",
    icon: "quant",
    trendPoints: "0,49 10,44 18,23 31,28 41,35 51,12 61,52 72,44 82,8 93,43 105,10 114,21 124,19 134,24",
  },
];

const candles = [
  [0.8, 165, 118, 135, 132, "blue"],
  [2.0, 140, 115, 124, 127, "blue"],
  [3.4, 118, 94, 107, 103, "red"],
  [4.8, 130, 104, 114, 116, "red"],
  [6.2, 150, 108, 128, 133, "blue"],
  [7.6, 184, 127, 145, 171, "blue"],
  [9.0, 151, 115, 136, 129, "red"],
  [10.4, 162, 113, 144, 131, "red"],
  [11.8, 155, 96, 128, 111, "blue"],
  [13.2, 126, 70, 111, 78, "red"],
  [14.6, 104, 55, 83, 61, "red"],
  [16.0, 121, 61, 78, 92, "blue"],
  [17.4, 155, 91, 125, 118, "red"],
  [18.8, 153, 104, 132, 123, "blue"],
  [20.2, 141, 88, 119, 108, "red"],
  [21.6, 159, 111, 132, 143, "blue"],
  [23.0, 172, 121, 144, 132, "red"],
  [24.4, 164, 116, 132, 151, "blue"],
  [25.8, 186, 134, 151, 164, "red"],
  [27.2, 206, 151, 168, 189, "blue"],
  [28.6, 223, 161, 189, 175, "blue"],
  [30.0, 211, 155, 178, 166, "red"],
  [31.4, 231, 169, 194, 204, "blue"],
  [32.8, 237, 170, 206, 188, "red"],
  [34.2, 248, 185, 216, 224, "blue"],
  [35.6, 257, 190, 229, 239, "blue"],
  [37.0, 247, 181, 207, 218, "blue"],
  [38.4, 224, 174, 192, 211, "blue"],
  [39.8, 222, 164, 188, 199, "blue"],
  [41.2, 207, 147, 179, 158, "red"],
  [42.6, 207, 145, 166, 186, "blue"],
  [44.0, 187, 132, 157, 144, "red"],
  [45.4, 180, 120, 151, 136, "blue"],
  [46.8, 166, 111, 139, 149, "blue"],
  [48.2, 162, 97, 133, 114, "red"],
  [49.6, 137, 85, 112, 122, "blue"],
  [51.0, 137, 71, 100, 79, "red"],
  [52.4, 100, 66, 78, 82, "blue"],
  [53.8, 116, 65, 83, 77, "red"],
  [55.2, 136, 80, 96, 121, "blue"],
  [56.6, 146, 85, 124, 102, "blue"],
  [58.0, 108, 14, 88, 44, "red"],
  [59.4, 95, 55, 68, 87, "red"],
  [60.8, 129, 78, 97, 117, "red"],
  [62.2, 151, 100, 124, 145, "blue"],
  [63.6, 165, 118, 143, 154, "red"],
  [65.0, 189, 137, 160, 176, "blue"],
  [66.4, 203, 147, 177, 166, "blue"],
  [67.8, 219, 162, 188, 208, "red"],
  [69.2, 226, 168, 207, 190, "blue"],
  [70.6, 237, 180, 211, 225, "red"],
  [72.0, 255, 194, 226, 236, "blue"],
  [73.4, 270, 207, 238, 246, "blue"],
  [74.8, 282, 219, 249, 259, "blue"],
  [76.2, 273, 212, 259, 245, "blue"],
  [77.6, 265, 196, 229, 207, "red"],
  [79.0, 262, 205, 222, 239, "red"],
  [80.4, 273, 211, 239, 255, "blue"],
  [81.8, 267, 196, 221, 244, "blue"],
  [83.2, 249, 178, 210, 194, "red"],
];

function Icon({ name, className = "h-5 w-5", strokeWidth = 1.8 }) {
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
    case "menu-lines":
      return (
        <svg {...common} viewBox="0 0 28 28" strokeWidth="2.6">
          <path d="M8 9.4h12" />
          <path d="M8 14h12" />
          <path d="M8 18.6h8.2" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M18 10.4a6 6 0 0 0-12 0c0 5.8-2 6.9-2 6.9h16s-2-1.1-2-6.9Z" />
          <path d="M9.7 20a2.6 2.6 0 0 0 4.6 0" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common}>
          <path d="m6.5 9.2 5.5 5.5 5.5-5.5" />
        </svg>
      );
    case "upload":
      return (
        <svg {...common}>
          <path d="M12 15V4.7" />
          <path d="m8.3 8.3 3.7-3.7 3.7 3.7" />
          <path d="M5 14.6v4.1A1.6 1.6 0 0 0 6.6 20h10.8a1.6 1.6 0 0 0 1.6-1.6v-3.8" />
        </svg>
      );
    case "external":
      return (
        <svg {...common}>
          <path d="M8 16 16 8" />
          <path d="M10 7h7v7" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="10.8" cy="10.8" r="6.4" />
          <path d="m16 16 4 4" />
        </svg>
      );
    case "more":
      return (
        <svg {...common}>
          <circle cx="5" cy="12" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="19" cy="12" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      );
    case "swap":
      return (
        <svg {...common}>
          <path d="M8.5 5.5v11.2" />
          <path d="m5.7 13.9 2.8 2.8 2.8-2.8" />
          <path d="M15.5 18.5V7.3" />
          <path d="m12.7 10.1 2.8-2.8 2.8 2.8" />
        </svg>
      );
    case "cube":
      return (
        <svg {...common}>
          <path d="m12 3.4 7.2 4.1v8.8L12 20.6l-7.2-4.3V7.5Z" />
          <path d="m4.8 7.5 7.2 4.2 7.2-4.2" />
          <path d="M12 11.7v8.9" />
          <path d="M8.4 5.5 15.7 10" />
        </svg>
      );
    case "chart-up":
      return (
        <svg {...common}>
          <path d="M5 18V8" />
          <path d="M10 18v-5" />
          <path d="M15 18v-8" />
          <path d="M19 18V5" />
          <path d="m8 9 3 3 7-7" />
          <path d="M14 5h4v4" />
        </svg>
      );
    case "coin":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7.2" />
          <path d="M12 7.8v8.4" />
          <path d="M15.1 9.2c-.7-.8-1.7-1.2-3-1.1-1.6.1-2.7.9-2.7 2.1 0 1.3 1.3 1.8 2.8 2.1 1.7.4 2.8.9 2.7 2.2-.1 1.2-1.3 1.9-2.8 1.9-1.5 0-2.6-.5-3.4-1.4" />
        </svg>
      );
    case "bars":
      return (
        <svg {...common}>
          <path d="M5 18V9" />
          <path d="M10 18V6" />
          <path d="M15 18v-4" />
          <path d="M20 18V8" />
          <circle cx="5" cy="7" r="1.5" />
          <circle cx="15" cy="12" r="1.5" />
          <circle cx="20" cy="6" r="1.5" />
        </svg>
      );
    case "trend-down":
      return (
        <svg {...common}>
          <path d="m5 8 5.3 5.2 3.5-3.2 5.2 5.2" />
          <path d="M19 10.6v4.6h-4.6" />
        </svg>
      );
    case "mini-bars":
      return (
        <svg {...common}>
          <path d="M5 18V8" />
          <path d="M11 18V5" />
          <path d="M17 18v-7" />
        </svg>
      );
    case "mini-line":
      return (
        <svg {...common}>
          <path d="m4 15 4-4 4 2 6-7" />
          <path d="M15 6h3v3" />
        </svg>
      );
    default:
      return null;
  }
}

function Logo() {
  return (
    <div className="flex items-center gap-[14px]">
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#1F2BFF] text-white shadow-[0_7px_18px_rgba(31,43,255,0.22)]">
        <Icon name="menu-lines" className="h-7 w-7" />
      </div>
      <div className="text-[24px] font-bold leading-none text-[#07080D]">Raxon</div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative h-[36px] w-[36px] overflow-hidden rounded-full bg-[#d8c1ac]">
      <div className="absolute left-[10px] top-[6px] h-[15px] w-[16px] rounded-full bg-[#2a1a13]" />
      <div className="absolute left-[11px] top-[12px] h-[17px] w-[15px] rounded-full bg-[#d89a76]" />
      <div className="absolute left-[8px] top-[25px] h-[18px] w-[21px] rounded-t-[10px] bg-[#111827]" />
      <div className="absolute left-[14px] top-[18px] h-[2px] w-[2px] rounded-full bg-[#1f2933]" />
      <div className="absolute right-[14px] top-[18px] h-[2px] w-[2px] rounded-full bg-[#1f2933]" />
      <div className="absolute left-[15px] top-[23px] h-[2px] w-[7px] rounded-full bg-[#7f4637]" />
    </div>
  );
}

function Header() {
  return (
    <header className="relative flex h-[48px] items-center justify-between">
      <Logo />

      <nav className="absolute left-1/2 top-1/2 flex h-[48px] -translate-x-1/2 -translate-y-1/2 items-center gap-[9px] rounded-full bg-white px-[5px] text-[16px] font-medium text-[#3A3A40] shadow-[0_1px_2px_rgba(16,24,40,0.03)]">
        {navItems.map((item) => (
          <a
            key={item}
            href="#dashboard"
            className={
              item === "Dashboard"
                ? "flex h-[40px] items-center rounded-full bg-[#1F2BFF] px-[19px] text-white"
                : "flex h-[40px] items-center rounded-full px-[15px] hover:bg-[#F4F5F7]"
            }
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-[13px]">
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white text-[#07080D]"
        >
          <Icon name="bell" className="h-[23px] w-[23px]" />
          <span className="absolute right-[11px] top-[10px] h-[7px] w-[7px] rounded-full bg-[#FF3B35] ring-2 ring-white" />
        </button>
        <button
          type="button"
          className="flex h-[48px] items-center gap-[11px] rounded-full bg-white py-[6px] pl-[8px] pr-[15px]"
        >
          <Avatar />
          <span className="hidden min-w-[92px] text-left leading-tight sm:block">
            <span className="block text-[14px] font-semibold text-[#07080D]">Oripio Sajib</span>
            <span className="block text-[12px] font-medium text-[#3A3A40]">Admin</span>
          </span>
          <Icon name="chevron-down" className="h-[18px] w-[18px] text-[#07080D]" />
        </button>
      </div>
    </header>
  );
}

function Welcome() {
  return (
    <section className="mb-[30px] mt-[34px] flex flex-wrap items-end justify-between gap-5">
      <div>
        <h1 className="text-[29px] font-bold leading-[1.15] text-[#07080D]">
          Welcome, Oripio <span aria-hidden="true">👋</span>
        </h1>
        <p className="mt-[5px] text-[16px] font-medium leading-[1.45] text-[#3A3A40]">
          An overview of user behavior, trading activity, and crypto revenue analytics.
        </p>
      </div>
      <button
        type="button"
        className="flex h-[43px] items-center gap-[12px] rounded-full bg-white pl-[12px] pr-[18px] text-[15px] font-semibold text-[#07080D]"
      >
        <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#F4F5F7]">
          <Icon name="upload" className="h-[19px] w-[19px]" />
        </span>
        Export Report
      </button>
    </section>
  );
}

function ChartToggle() {
  return (
    <div className="absolute right-[18px] top-[17px] flex items-center gap-[10px]">
      <div className="flex items-center gap-[3px] rounded-[8px] bg-[#F4F5F7] p-[3px]">
        <button
          type="button"
          aria-label="Bar chart"
          className="flex h-[27px] w-[27px] items-center justify-center rounded-[7px] text-[#4E535C]"
        >
          <Icon name="mini-bars" className="h-[16px] w-[16px]" />
        </button>
        <button
          type="button"
          aria-label="Line chart"
          className="flex h-[27px] w-[27px] items-center justify-center rounded-[7px] bg-white text-[#07080D] shadow-[0_1px_3px_rgba(16,24,40,0.08)]"
        >
          <Icon name="mini-line" className="h-[16px] w-[16px]" />
        </button>
      </div>
      <div className="flex h-[32px] items-center gap-[1px] rounded-[9px] bg-[#F4F5F7] p-[3px] text-[11px] font-medium text-[#4E535C]">
        {["1D", "7D", "1M", "1Y"].map((item) => (
          <button
            type="button"
            key={item}
            className={
              item === "1Y"
                ? "h-[26px] rounded-[7px] bg-white px-[8px] text-[#07080D] shadow-[0_1px_3px_rgba(16,24,40,0.08)]"
                : "h-[26px] rounded-[7px] px-[7px]"
            }
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

function Marker({ x, y, label, tone }) {
  const toneClass =
    tone === "yellow"
      ? "bg-[#FFD60A] text-[#07080D]"
      : tone === "orange"
        ? "bg-[#F55E24] text-white"
        : "bg-[#4B55E9] text-white";

  return (
    <div
      className={`absolute flex h-[29px] w-[29px] items-center justify-center rounded-[5px] text-[12px] font-semibold shadow-[0_6px_14px_rgba(16,24,40,0.12)] ${toneClass}`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {label}
      <span
        className={`absolute -bottom-[4px] h-[8px] w-[8px] rotate-45 ${toneClass.split(" ")[0]}`}
      />
    </div>
  );
}

function BitcoinChart() {
  return (
    <section className="relative min-h-[380px] rounded-[16px] bg-white px-[17px] pb-[18px] pt-[16px] shadow-[0_1px_2px_rgba(16,24,40,0.03)]">
      <ChartToggle />

      <div className="flex items-center gap-[10px]">
        <div className="flex h-[33px] w-[33px] items-center justify-center rounded-[7px] bg-[#FFC20D] text-[19px] font-bold text-white">
          ₿
        </div>
        <div className="text-[15px] font-bold text-[#07080D]">
          Bitcoin <span className="text-[#252869]">(BTC)</span>
        </div>
      </div>

      <div className="mt-[17px] flex items-center gap-[12px]">
        <div className="text-[29px] font-bold leading-none text-[#07080D]">$67,420.15</div>
        <div className="rounded-full bg-[#EAF8F0] px-[8px] py-[2px] text-[12px] font-semibold text-[#18B969]">
          ▲ +31%
        </div>
        <div className="text-[12px] font-medium text-[#6E7178]">+$7,650.32 this year</div>
      </div>

      <div className="relative mt-[20px] h-[252px] overflow-hidden">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 824 252" preserveAspectRatio="none">
          {[17, 69, 121, 173, 225].map((y) => (
            <line key={y} x1="32" y1={y} x2="816" y2={y} stroke="#ECEEF2" strokeWidth="1" />
          ))}
          {[0, 50, 100, 150, 200, 250, 300].map((label, index) => (
            <text
              key={label}
              x="0"
              y={238 - index * 39}
              fill="#858991"
              fontSize="12"
              fontWeight="500"
            >
              {label}
            </text>
          ))}
          {candles.map(([x, high, low, open, close, tone], index) => {
            const cx = 42 + x * 8.95;
            const highY = 238 - high * 0.72;
            const lowY = 238 - low * 0.72;
            const openY = 238 - open * 0.72;
            const closeY = 238 - close * 0.72;
            const bodyY = Math.min(openY, closeY);
            const bodyH = Math.max(4, Math.abs(closeY - openY));
            const color = tone === "blue" ? "#4B55E9" : "#F41F27";

            return (
              <g key={`${x}-${index}`}>
                <line x1={cx} y1={highY} x2={cx} y2={lowY} stroke={color} strokeWidth="1.3" />
                <rect x={cx - 3.2} y={bodyY} width="6.4" height={bodyH} rx="1.2" fill={color} />
              </g>
            );
          })}
        </svg>
        <Marker x={13} y={22} label="S" tone="blue" />
        <Marker x={25} y={76} label="B" tone="yellow" />
        <Marker x={53} y={6} label="S" tone="blue" />
        <Marker x={55.6} y={54} label="Q" tone="orange" />
        <Marker x={84.5} y={34} label="B" tone="yellow" />
      </div>

      <div className="ml-[45px] mt-[3px] grid grid-cols-12 text-center text-[13px] font-medium text-[#858991]">
        {months.map((month) => (
          <span key={month} className={month === "Jun" ? "font-bold text-[#1F2BFF]" : ""}>
            {month}
          </span>
        ))}
      </div>
    </section>
  );
}

function CircleIcon({ tone, name }) {
  const toneClass = {
    purple: "bg-[#9D3CFF]",
    green: "bg-[#31B981]",
    blue: "bg-[#2297E8]",
    orange: "bg-[#F45B22]",
  }[tone];

  return (
    <div className={`flex h-[40px] w-[40px] items-center justify-center rounded-full text-white ${toneClass}`}>
      <Icon name={name} className="h-[20px] w-[20px]" />
    </div>
  );
}

function MetricCard({ card }) {
  const isDown = card.trend === "down";

  return (
    <article className="flex min-h-[180px] flex-col justify-between rounded-[16px] bg-white p-[20px] shadow-[0_1px_2px_rgba(16,24,40,0.03)]">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-[18px] font-medium leading-none text-[#3A3A40]">{card.title}</h2>
        <CircleIcon tone={card.tone} name={card.icon} />
      </div>

      <div>
        <div className="text-[33px] font-bold leading-none tracking-[-0.01em] text-[#07080D]">{card.value}</div>
        <div className="mt-[16px] flex items-center justify-between gap-3 text-[12px] font-medium">
          <div className="min-w-0 text-[#3A3A40]">
            <span className={isDown ? "font-semibold text-[#EF1C27]" : "font-semibold text-[#18B969]"}>
              {isDown ? "▼ " : "▲ "}
              {card.delta}
            </span>{" "}
            <span className="whitespace-nowrap">{card.helper}</span>
          </div>
          <a href="#details" className="flex shrink-0 items-center gap-[4px] text-[#3A3A40]">
            Details
            <Icon name="external" className="h-[13px] w-[13px]" strokeWidth={2} />
          </a>
        </div>
      </div>
    </article>
  );
}

function SwapTokenIcon({ token }) {
  if (token === "ETH") {
    return (
      <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#5276F4]">
        <svg className="h-[21px] w-[21px]" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.5 5.5 12.2 12 9.1l6.5 3.1Z" fill="#fff" opacity="0.95" />
          <path d="M12 9.2 5.5 12.2 12 16l6.5-3.8Z" fill="#DCE6FF" />
          <path d="M12 17.2 5.5 13.4 12 21.5l6.5-8.1Z" fill="#fff" opacity="0.9" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#56B99C] text-[18px] font-bold text-white">
      ₮
    </div>
  );
}

function ChainBadge({ chain, color }) {
  return (
    <div className="flex h-[25px] items-center gap-[6px] rounded-full bg-[#F4F5F7] pl-[5px] pr-[8px] text-[12px] font-medium text-[#3A3A40]">
      <span className={`flex h-[18px] w-[18px] items-center justify-center rounded-full text-[10px] font-bold text-white ${color}`}>
        {chain === "Avalanche" ? "A" : "◆"}
      </span>
      {chain}
      <Icon name="chevron-down" className="h-[11px] w-[11px] text-[#B7BBC2]" />
    </div>
  );
}

function SwapPanel() {
  return (
    <section className="min-h-[412px] rounded-[16px] bg-white p-[20px] shadow-[0_1px_2px_rgba(16,24,40,0.03)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <div className="flex h-[33px] w-[33px] items-center justify-center rounded-[7px] bg-[#F4F5F7] text-[#07080D]">
            <Icon name="cube" className="h-[20px] w-[20px]" />
          </div>
          <h2 className="text-[18px] font-bold text-[#07080D]">Crypto Trading</h2>
        </div>
        <button type="button" aria-label="More options" className="text-[#07080D]">
          <Icon name="more" className="h-[22px] w-[22px]" />
        </button>
      </div>

      <div className="mt-[16px] rounded-[15px] bg-[#F8F8F9] p-[12px]">
        <div className="relative">
          <div className="rounded-[12px] border border-[#E0E2E7] bg-white px-[17px] py-[19px] shadow-[0_2px_7px_rgba(16,24,40,0.04)]">
            <div className="flex items-center justify-between">
              <div className="text-[13px] font-medium text-[#3A3A40]">FROM</div>
              <ChainBadge chain="Avalanche" color="bg-[#EF454A]" />
            </div>
            <div className="mt-[18px] flex items-center justify-between">
              <div className="flex items-center gap-[9px]">
                <SwapTokenIcon token="ETH" />
                <span className="text-[26px] font-bold leading-none text-[#07080D]">ETH</span>
                <Icon name="chevron-down" className="h-[14px] w-[14px] text-[#C4C7CD]" />
              </div>
              <div className="text-[26px] font-bold leading-none text-[#07080D]">12</div>
            </div>
          </div>

          <div className="absolute left-1/2 top-[98px] z-10 flex h-[44px] w-[44px] -translate-x-1/2 items-center justify-center rounded-full bg-[#F4F5F7] text-[#07080D] shadow-[0_3px_8px_rgba(16,24,40,0.08)]">
            <Icon name="swap" className="h-[21px] w-[21px]" />
          </div>

          <div className="mt-[10px] rounded-[12px] border border-[#E0E2E7] bg-white px-[17px] py-[20px] shadow-[0_2px_7px_rgba(16,24,40,0.04)]">
            <div className="flex items-center justify-between">
              <div className="text-[13px] font-medium text-[#3A3A40]">TO</div>
              <ChainBadge chain="BNB Chain" color="bg-[#F3BA2F]" />
            </div>
            <div className="mt-[18px] flex items-center justify-between">
              <div className="flex items-center gap-[9px]">
                <SwapTokenIcon token="USDT" />
                <span className="text-[26px] font-bold leading-none text-[#07080D]">USDT</span>
                <Icon name="chevron-down" className="h-[14px] w-[14px] text-[#C4C7CD]" />
              </div>
              <div className="text-right">
                <div className="text-[26px] font-bold leading-none text-[#07080D]">25735.71</div>
                <div className="mt-[16px] text-[17px] font-medium leading-none text-[#3A3A40]">20,600.00</div>
              </div>
            </div>
            <button
              type="button"
              className="mt-[-4px] h-[24px] rounded-full bg-[#F4F5F7] px-[11px] text-[11px] font-medium text-[#07080D]"
            >
              Max
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-[16px] flex h-[40px] w-full items-center justify-center rounded-[8px] bg-[#1F2BFF] text-[16px] font-bold text-white shadow-[0_8px_18px_rgba(31,43,255,0.18)]"
        >
          Swap Crypto
        </button>
      </div>
    </section>
  );
}

function AssetIcon({ type }) {
  const base = "flex h-[36px] w-[36px] items-center justify-center rounded-[8px] shrink-0";

  switch (type) {
    case "solana":
      return (
        <div className={`${base} bg-[#9747FF]`}>
          <svg className="h-[22px] w-[22px]" viewBox="0 0 28 28" aria-hidden="true">
            <path d="M7 8h15l-4 4H3Z" fill="#fff" />
            <path d="M6 12h15l-4 4H2Z" fill="#D5C4FF" />
            <path d="M7 16h15l-4 4H3Z" fill="#fff" />
          </svg>
        </div>
      );
    case "eth":
      return (
        <div className={`${base} bg-[#F0F2F5]`}>
          <svg className="h-[24px] w-[24px]" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.5 5.5 12.2 12 9.1l6.5 3.1Z" fill="#22252B" />
            <path d="M12 9.2 5.5 12.2 12 16l6.5-3.8Z" fill="#777D87" />
            <path d="M12 17.2 5.5 13.4 12 21.5l6.5-8.1Z" fill="#22252B" />
          </svg>
        </div>
      );
    case "utrust":
      return (
        <div className={`${base} bg-[#282E80] text-white`}>
          <span className="text-[24px] font-bold leading-none">U</span>
        </div>
      );
    case "bitcoin":
      return (
        <div className={`${base} bg-[#FFC20D] text-[22px] font-bold text-white`}>₿</div>
      );
    case "quant":
      return (
        <div className={`${base} bg-[#F45B22]`}>
          <svg className="h-[23px] w-[23px]" viewBox="0 0 28 28" aria-hidden="true">
            <circle cx="9" cy="8" r="3" fill="#fff" />
            <circle cx="19" cy="10" r="3" fill="#fff" opacity="0.9" />
            <circle cx="12" cy="20" r="3" fill="#fff" opacity="0.92" />
            <path d="M11 9.4 16.4 10.1M10.2 10.6l1.4 6.6M17.5 12.4l-3.8 5.4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );
    default:
      return null;
  }
}

function TrendSparkline({ asset }) {
  const color = asset.trend === "down" ? "#EF1C27" : "#18B969";

  return (
    <svg className="h-[48px] w-[134px]" viewBox="0 0 134 60" aria-label={`${asset.name} trend`}>
      <polyline points={asset.trendPoints} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function SortGlyph() {
  return <span className="ml-[4px] text-[9px] text-[#6E7178]">↕</span>;
}

function Transactions() {
  return (
    <section className="min-h-[412px] overflow-hidden rounded-[16px] bg-white p-[14px] shadow-[0_1px_2px_rgba(16,24,40,0.03)]">
      <div className="mb-[12px] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-[12px]">
          <div className="flex h-[33px] w-[33px] items-center justify-center rounded-[7px] bg-[#F4F5F7]">
            <Icon name="chart-up" className="h-[20px] w-[20px]" />
          </div>
          <div>
            <h2 className="text-[18px] font-bold leading-none text-[#07080D]">Recent transactions</h2>
            <p className="mt-[5px] text-[12px] font-medium leading-none text-[#3A3A40]">Keep track of all transactions here</p>
          </div>
        </div>

        <div className="flex items-center gap-[12px]">
          <label className="flex h-[32px] w-[214px] items-center gap-[9px] rounded-[7px] border border-[#D7DAE0] bg-white px-[11px] text-[#07080D]">
            <Icon name="search" className="h-[17px] w-[17px]" />
            <input
              type="search"
              placeholder="Search"
              className="min-w-0 flex-1 bg-transparent text-[14px] font-medium text-[#07080D] outline-none placeholder:text-[#7C8088]"
            />
          </label>

          <div className="flex h-[32px] items-center gap-[1px] rounded-[8px] bg-[#F4F5F7] p-[3px] text-[12px] font-medium text-[#6E7178]">
            {["1D", "7D", "1M", "1Y"].map((item) => (
              <button
                type="button"
                key={item}
                className={
                  item === "1Y"
                    ? "h-[26px] rounded-[7px] bg-white px-[10px] text-[#07080D] shadow-[0_1px_3px_rgba(16,24,40,0.08)]"
                    : "h-[26px] rounded-[7px] px-[8px]"
                }
              >
                {item}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="flex h-[32px] items-center gap-[8px] rounded-[8px] bg-[#F4F5F7] px-[12px] text-[13px] font-bold text-[#07080D] shadow-[inset_0_0_0_1px_rgba(7,8,13,0.04)]"
          >
            24H
            <Icon name="chevron-down" className="h-[13px] w-[13px]" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-[10px] border border-[#E0E2E7]">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr className="h-[39px] border-b border-[#E0E2E7] bg-[#FAFAFB] text-[13px] font-semibold text-[#07080D]">
              <th className="w-[44px] px-[16px]">
                <span className="block h-[16px] w-[16px] rounded-[4px] border border-[#BFC4CC]" />
              </th>
              <th className="w-[160px] px-[8px]">Assets</th>
              <th className="w-[120px] px-[8px]">Price</th>
              <th className="w-[120px] px-[8px]">24h Change<SortGlyph /></th>
              <th className="w-[120px] px-[8px]">7d Change<SortGlyph /></th>
              <th className="w-[120px] px-[8px]">Volume (24h)<SortGlyph /></th>
              <th className="w-[150px] px-[8px]">24h Trend</th>
              <th className="w-[120px] px-[8px]">Market Cap<SortGlyph /></th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => {
              const negative = asset.trend === "down";
              return (
                <tr key={asset.name} className="h-[58px] border-b border-[#E6E8ED] last:border-b-0">
                  <td className="px-[16px]">
                    <span className="block h-[16px] w-[16px] rounded-[4px] border border-[#BFC4CC]" />
                  </td>
                  <td className="px-[8px]">
                    <div className="flex items-center gap-[12px]">
                      <AssetIcon type={asset.icon} />
                      <div className="leading-tight">
                        <div className="text-[15px] font-bold text-[#07080D]">{asset.name}</div>
                        <div className="text-[12px] font-medium text-[#3A3A40]">{asset.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-[8px] text-[15px] font-bold text-[#07080D]">{asset.price}</td>
                  <td className={`px-[8px] text-[12px] font-semibold ${negative ? "text-[#EF1C27]" : "text-[#18B969]"}`}>
                    <span className="mr-[5px]">↝</span>
                    {asset.change24h}
                  </td>
                  <td className={`px-[8px] text-[12px] font-semibold ${negative ? "text-[#EF1C27]" : "text-[#18B969]"}`}>
                    <span className="mr-[5px]">↝</span>
                    {asset.change7d}
                  </td>
                  <td className="px-[8px] text-[15px] font-semibold text-[#07080D]">{asset.volume}</td>
                  <td className="px-[8px]">
                    <TrendSparkline asset={asset} />
                  </td>
                  <td className="px-[8px] text-[15px] font-semibold text-[#07080D]">{asset.cap}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function RaxonTradingPage() {
  return (
    <main id="dashboard" className="min-h-screen bg-[#F7F7F8] px-[24px] py-[30px] text-[#07080D]">
      <Header />
      <Welcome />

      <div className="grid grid-cols-1 gap-[18px] xl:grid-cols-[minmax(0,1.12fr)_minmax(520px,0.68fr)]">
        <BitcoinChart />
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          {metricCards.map((card) => (
            <MetricCard key={card.title} card={card} />
          ))}
        </div>
      </div>

      <div className="mt-[18px] grid grid-cols-1 gap-[18px] xl:grid-cols-[480px_minmax(0,1fr)]">
        <SwapPanel />
        <Transactions />
      </div>
    </main>
  );
}
