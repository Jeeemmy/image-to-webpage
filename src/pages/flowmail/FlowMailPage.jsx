const navItems = [
  { label: "Dashboard", icon: "grid" },
  { label: "Campaigns", icon: "mail" },
  { label: "Automations", icon: "nodes" },
  { label: "Audience", icon: "users" },
  { label: "Analytics", icon: "chart" },
  { label: "Templates", icon: "cards" },
  { label: "Integrations", icon: "github", active: true },
  { label: "Forms", icon: "forms" },
  { label: "Settings", icon: "settings" },
];

const metrics = [
  { label: "Total Available", value: "24", icon: "check-circle", delta: "+6%" },
  { label: "Connected", value: "09", icon: "link", delta: "+2%" },
  { label: "Categories", value: "08", icon: "copy", delta: "+5%" },
  { label: "Last Synced", value: "2m", icon: "sync", status: "Live" },
];

const integrations = [
  {
    name: "Slack",
    logo: "slack",
    description:
      "Streamline team collaboration with timelines and customizable workflows.",
    enabled: true,
  },
  {
    name: "Trello",
    logo: "trello",
    description:
      "Visual project management using boards, lists, and cards for flexible task tracking.",
    enabled: true,
  },
  {
    name: "Monday.com",
    logo: "monday",
    description:
      "Optimize workflow automation and visualize progress with customizable dashboards.",
    enabled: true,
  },
  {
    name: "Notion",
    logo: "notion",
    description:
      "Unify tasks, notes, and files for better project and team oversight.",
    enabled: false,
  },
  {
    name: "Jira",
    logo: "jira",
    description:
      "Manage complex projects with advanced issue tracking and agile planning capabilities.",
    enabled: true,
  },
  {
    name: "Asana",
    logo: "asana",
    description:
      "Improve team coordination, task management, and project tracking.",
    enabled: true,
  },
  {
    name: "ClickUp",
    logo: "clickup",
    description:
      "Centralize tasks, goals, docs, and dashboards for cross-functional teams.",
    enabled: true,
  },
  {
    name: "Basecamp",
    logo: "basecamp",
    description:
      "Coordinate projects, messages, files, and schedules in one shared workspace.",
    enabled: true,
  },
  {
    name: "Wrike",
    logo: "wrike",
    description:
      "Enhance productivity with real-time planning, reporting, and work tracking.",
    enabled: true,
  },
];

function Icon({ name, className = "h-6 w-6", strokeWidth = 1.9 }) {
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
    case "mail":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="14" rx="3" />
          <path d="m5 8 7 5 7-5" />
        </svg>
      );
    case "nodes":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2.2" />
          <circle cx="5.5" cy="18" r="2.2" />
          <circle cx="18.5" cy="18" r="2.2" />
          <path d="M11 7 6.5 16M13 7l4.5 9M8 18h8" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.3" />
          <path d="M3.5 19c.7-3.2 2.7-5 5.5-5s4.8 1.8 5.5 5" />
          <path d="M14.7 14.6c2.7.2 4.5 1.7 5 4.4" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="m7 15 3.2-3.5 3.3 2.3L19 7" />
          <path d="M7 10v5" />
        </svg>
      );
    case "cards":
      return (
        <svg {...common}>
          <rect x="6" y="4" width="12" height="14" rx="2.5" />
          <path d="M4 8.5 6 8M4 12.5 6 12" />
          <path d="M9 8h6M9 12h5" />
        </svg>
      );
    case "github":
      return (
        <svg {...common}>
          <path d="M12 3.7a8.3 8.3 0 0 0-2.7 16.2c.4.1.6-.2.6-.5v-1.9c-2.5.5-3-1.1-3-1.1-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.2-2-.2-4-1-4-4.1 0-.9.3-1.6.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .8-.2 2.4.9a8.4 8.4 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.1-2 3.9-4 4.1.3.3.7.9.7 1.8v2.5c0 .3.2.6.7.5A8.3 8.3 0 0 0 12 3.7Z" />
        </svg>
      );
    case "forms":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="13" height="15" rx="2.5" />
          <path d="m9 7 8 2.2M8 11h6M8 15h5" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
          <path d="m19.4 14.6.1-.1a2 2 0 0 0 0-3l-.1-.1 1-2-2-3.3-2.2.2-.2-.1a2 2 0 0 0-2.6-1.5L12 5.5l-1.4-.8A2 2 0 0 0 8 6.2l-.2.1-2.2-.2-2 3.3 1 2-.1.1a2 2 0 0 0 0 3l.1.1-1 2 2 3.3 2.2-.2.2.1a2 2 0 0 0 2.6 1.5l1.4-.8 1.4.8a2 2 0 0 0 2.6-1.5l.2-.1 2.2.2 2-3.3-1-2Z" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M18 9.8a6 6 0 0 0-12 0c0 7-2.2 7.4-2.2 7.4h16.4S18 16.8 18 9.8Z" />
          <path d="M9.5 20a2.8 2.8 0 0 0 5 0" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="m8.5 4 1.2 3.1 3.1 1.2-3.1 1.2-1.2 3.1-1.2-3.1-3.1-1.2 3.1-1.2L8.5 4Z" />
          <path d="m16.5 10 1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1 1-2.4Z" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "check-circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m8.5 12.3 2.2 2.2 4.8-5" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M9.7 14.3 8.3 15.7a4 4 0 0 1-5.7-5.7l2.2-2.2a4 4 0 0 1 5.7 0" />
          <path d="m14.3 9.7 1.4-1.4a4 4 0 0 1 5.7 5.7l-2.2 2.2a4 4 0 0 1-5.7 0" />
          <path d="m8.8 15.2 6.4-6.4" />
        </svg>
      );
    case "copy":
      return (
        <svg {...common}>
          <rect x="8" y="8" width="10" height="10" rx="1.8" />
          <path d="M6 14H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1" />
        </svg>
      );
    case "sync":
      return (
        <svg {...common}>
          <path d="M17.5 8.5A6.5 6.5 0 0 0 6 7.5L4.5 9" />
          <path d="M4.5 4.5V9H9" />
          <path d="M6.5 15.5A6.5 6.5 0 0 0 18 16.5l1.5-1.5" />
          <path d="M19.5 19.5V15H15" />
        </svg>
      );
    case "trend":
      return (
        <svg {...common}>
          <path d="m4 14 4-4 4 3 6-7" />
          <path d="M14 6h4v4" />
        </svg>
      );
    case "more":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common}>
          <path d="m7 10 5 5 5-5" />
        </svg>
      );
    case "sidebar-collapse":
      return (
        <svg {...common}>
          <path d="m15 6-6 6 6 6" />
          <path d="M19 5v14" />
        </svg>
      );
    default:
      return null;
  }
}

function BrandLogo() {
  return (
    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-flow-primary text-white ring-1 ring-white/50 lg:h-[28px] lg:w-[28px] lg:rounded-[7px]">
      <Icon name="mail" className="h-7 w-7 lg:h-[19px] lg:w-[19px]" strokeWidth={2.1} />
    </div>
  );
}

function IntegrationLogo({ name }) {
  if (name === "slack") {
    return (
      <div className="grid h-[34px] w-[34px] grid-cols-3 grid-rows-3 gap-[2px]">
        <span className="col-start-2 rounded-full bg-[#36C5F0]" />
        <span className="col-start-1 row-start-2 rounded-full bg-[#2EB67D]" />
        <span className="col-start-2 row-start-2 rounded-full bg-[#ECB22E]" />
        <span className="col-start-3 row-start-2 rounded-full bg-[#E01E5A]" />
        <span className="col-start-2 row-start-3 rounded-full bg-[#36C5F0]" />
      </div>
    );
  }

  if (name === "trello") {
    return (
      <div className="flex h-[34px] w-[34px] items-center gap-[5px] rounded-[4px] bg-[#1F86E7] p-[6px]">
        <span className="h-full flex-1 rounded-[2px] bg-white/90" />
        <span className="h-[70%] flex-1 self-start rounded-[2px] bg-white/90" />
      </div>
    );
  }

  if (name === "monday") {
    return (
      <div className="flex h-[34px] w-[42px] items-center gap-[4px]">
        <span className="h-[22px] w-[9px] rotate-[28deg] rounded-full bg-[#FF3D57]" />
        <span className="h-[22px] w-[9px] rotate-[28deg] rounded-full bg-[#FFB800]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#00C875]" />
      </div>
    );
  }

  if (name === "notion") {
    return (
      <div className="flex h-[34px] w-[34px] rotate-[-8deg] items-center justify-center rounded-[3px] border-[3px] border-[#111111] bg-white text-[22px] font-black leading-none text-[#111111]">
        N
      </div>
    );
  }

  if (name === "jira") {
    return (
      <div className="relative h-[36px] w-[36px] text-[#1D7CE8]">
        <span className="absolute left-[4px] top-[14px] h-[12px] w-[24px] rotate-45 rounded-[3px] bg-current" />
        <span className="absolute left-[13px] top-[4px] h-[12px] w-[22px] rotate-45 rounded-[3px] bg-current opacity-90" />
        <span className="absolute left-[8px] top-[21px] h-[10px] w-[19px] rotate-45 rounded-[3px] bg-current opacity-80" />
      </div>
    );
  }

  if (name === "asana") {
    return (
      <div className="grid h-[34px] w-[38px] grid-cols-2 grid-rows-2 place-items-center">
        <span className="col-span-2 h-[16px] w-[16px] rounded-full bg-[#FF6B7A]" />
        <span className="h-[16px] w-[16px] rounded-full bg-[#FF6B7A]" />
        <span className="h-[16px] w-[16px] rounded-full bg-[#FF6B7A]" />
      </div>
    );
  }

  if (name === "clickup") {
    return (
      <div className="relative h-[34px] w-[34px]">
        <span className="absolute left-[5px] top-[5px] h-[8px] w-[24px] rotate-[-38deg] rounded-full bg-[#FF476F]" />
        <span className="absolute left-[5px] top-[13px] h-[8px] w-[24px] rotate-[38deg] rounded-full bg-[#7B68EE]" />
        <span className="absolute left-[7px] top-[24px] h-[7px] w-[21px] rounded-full bg-[#00C875]" />
      </div>
    );
  }

  if (name === "basecamp") {
    return (
      <div className="relative h-[34px] w-[38px]">
        <span className="absolute inset-x-[2px] bottom-[3px] h-[21px] rounded-[50%] border-[3px] border-[#222] bg-[#FEE23D]" />
        <span className="absolute left-[10px] top-[7px] h-[12px] w-[17px] rotate-[-16deg] rounded-full border-[3px] border-[#222] bg-[#D7FB4E]" />
      </div>
    );
  }

  return (
    <div className="relative h-[34px] w-[38px] text-[#15BF75]">
      <span className="absolute left-[4px] top-[15px] h-[9px] w-[18px] rotate-45 rounded-full bg-current" />
      <span className="absolute left-[16px] top-[9px] h-[9px] w-[22px] rotate-[-45deg] rounded-full bg-current" />
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-flow-border bg-flow-sidebar px-4 py-4 lg:sticky lg:top-0 lg:h-screen lg:w-[250px] lg:border-b-0 lg:border-r lg:px-[20px] lg:py-[26px]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-[13px] lg:gap-[10px]">
          <BrandLogo />
          <span className="text-[28px] font-semibold leading-none tracking-[-0.01em] text-flow-black lg:text-[19px]">
            FlowMail
          </span>
        </div>
        <button
          type="button"
          aria-label="Collapse sidebar"
          className="hidden h-9 w-9 items-center justify-center rounded-full text-flow-muted lg:flex lg:h-7 lg:w-7"
        >
          <Icon name="sidebar-collapse" className="h-6 w-6 lg:h-[18px] lg:w-[18px]" />
        </button>
      </div>

      <nav className="mt-8 flex gap-2 overflow-x-auto pb-1 lg:mt-[43px] lg:flex-col lg:gap-[8px] lg:overflow-visible lg:pb-0">
        {navItems.map((item) => (
          <button
            type="button"
            key={item.label}
            className={`flex h-[48px] shrink-0 items-center gap-[14px] rounded-[9px] border px-4 text-left text-[18px] transition-colors lg:h-[39px] lg:gap-[11px] lg:px-[13px] lg:text-[16px] ${
              item.active
                ? "border-flow-border bg-flow-active text-flow-black"
                : "border-transparent text-flow-muted hover:bg-flow-active/70"
            }`}
          >
            <Icon
              name={item.icon}
              className={`h-[23px] w-[23px] lg:h-[17px] lg:w-[17px] ${
                item.active ? "text-flow-black" : "text-flow-icon"
              }`}
            />
            <span className={item.active ? "font-semibold" : "font-medium"}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="mt-5 hidden flex-1 lg:block" />

      <div className="mt-5 hidden border-t border-flow-divider pt-[24px] lg:flex lg:items-center lg:gap-[11px]">
        <div className="h-[43px] w-[43px] overflow-hidden rounded-full bg-[linear-gradient(145deg,#3d2f2a,#f0b689)] p-[2px]">
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_50%_38%,#f4d1b3_0_18%,#2d2527_19%_24%,#edbe90_25%_49%,#1f2937_50%_100%)]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[16px] font-semibold leading-5 text-flow-black">
            John Doe
          </p>
          <p className="text-[14px] leading-5 text-flow-muted">Pro Plan</p>
        </div>
        <Icon name="chevron-down" className="h-4 w-4 text-flow-muted" />
      </div>
    </aside>
  );
}

function SearchBox({ placeholder, className = "" }) {
  return (
    <label
      className={`flex h-[50px] items-center gap-3 rounded-[12px] border border-flow-border bg-white px-4 text-flow-muted ${className}`}
    >
      <Icon name="search" className="h-[23px] w-[23px] shrink-0" />
      <input
        type="search"
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-[20px] font-medium text-flow-black outline-none placeholder:text-flow-muted lg:text-[16px]"
      />
    </label>
  );
}

function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex min-h-[96px] flex-col gap-4 border-b border-flow-divider bg-flow-page px-5 py-5 md:flex-row md:items-center md:justify-between lg:min-h-[94px] lg:px-[24px] lg:py-[22px]">
      <div className="text-[22px] font-medium text-flow-black lg:text-[18px]">
        Integrations
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:gap-[17px]">
        <SearchBox
          placeholder="Search here..."
          className="w-full sm:w-[350px] lg:h-[47px] lg:w-[302px] lg:gap-[10px] lg:rounded-[11px] lg:px-[17px]"
        />
        <button
          type="button"
          aria-label="Notifications"
          className="flex h-[52px] w-[52px] items-center justify-center rounded-[13px] border border-flow-border bg-white text-flow-black lg:h-[47px] lg:w-[47px] lg:rounded-[11px]"
        >
          <Icon name="bell" className="h-[27px] w-[27px] lg:h-[20px] lg:w-[20px]" strokeWidth={2.1} />
        </button>
        <button
          type="button"
          className="inline-flex h-[54px] items-center justify-center gap-3 rounded-[13px] border border-white/70 bg-ai-gradient px-6 text-[18px] font-bold text-flow-black shadow-[0_1px_2px_rgba(17,17,17,0.06)] lg:h-[47px] lg:gap-[10px] lg:rounded-[11px] lg:px-[19px] lg:text-[16px]"
        >
          <Icon name="sparkles" className="h-[27px] w-[27px] lg:h-[20px] lg:w-[20px]" strokeWidth={2.1} />
          Get Ai Insight
        </button>
      </div>
    </header>
  );
}

function MetricCard({ metric }) {
  return (
    <article className="rounded-[22px] border border-flow-border bg-white p-[22px] lg:min-h-[136px] lg:rounded-[16px] lg:p-[19px]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-[14px] lg:gap-[10px]">
          <span className="flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-[12px] border border-flow-subtle bg-white text-flow-black lg:h-[29px] lg:w-[29px] lg:rounded-[9px]">
            <Icon name={metric.icon} className="h-[22px] w-[22px] lg:h-[17px] lg:w-[17px]" />
          </span>
          <p className="truncate text-[20px] font-medium text-flow-black lg:text-[16px]">
            {metric.label}
          </p>
        </div>
        <button type="button" aria-label={`${metric.label} actions`} className="text-flow-black">
          <Icon name="more" className="h-6 w-6 lg:h-[18px] lg:w-[18px]" />
        </button>
      </div>
      <div className="mt-[18px] flex h-[72px] items-center justify-between rounded-[19px] bg-flow-page px-[21px] lg:mt-[14px] lg:h-[59px] lg:rounded-[14px] lg:px-[16px]">
        <strong className="text-[34px] font-medium leading-none text-flow-black lg:text-[29px]">
          {metric.value}
        </strong>
        <span className="inline-flex h-[38px] items-center gap-2 rounded-full bg-flow-success-bg px-4 text-[19px] font-semibold text-flow-success lg:h-[32px] lg:gap-[6px] lg:px-[12px] lg:text-[16px]">
          {metric.delta ? (
            <>
              <Icon name="trend" className="h-[18px] w-[18px] lg:h-[14px] lg:w-[14px]" />
              {metric.delta}
            </>
          ) : (
            metric.status
          )}
        </span>
      </div>
    </article>
  );
}

function IntegrationCard({ integration }) {
  return (
    <article className="flex min-h-[294px] flex-col overflow-hidden rounded-[17px] border border-flow-border bg-white lg:min-h-[220px] lg:rounded-[13px]">
      <div className="flex flex-1 flex-col px-[20px] pb-[20px] pt-[19px] lg:px-[15px] lg:pb-[15px] lg:pt-[14px]">
        <div className="flex items-start justify-between">
          <IntegrationLogo name={integration.logo} />
          <button
            type="button"
            aria-label={`${integration.name} actions`}
            className="flex h-8 w-8 items-center justify-center text-flow-black lg:h-6 lg:w-6"
          >
            <Icon name="more" className="h-6 w-6 lg:h-[18px] lg:w-[18px]" />
          </button>
        </div>
        <div className="mt-[27px] lg:mt-[20px]">
          <h3 className="text-[27px] font-bold leading-[1.08] text-flow-black lg:text-[20px]">
            {integration.name}
          </h3>
          <p className="mt-[18px] max-w-[440px] text-[19px] font-medium leading-[1.45] text-flow-secondary lg:mt-[13px] lg:text-[16px]">
            {integration.description}
          </p>
        </div>
      </div>
      <div className="flex min-h-[70px] items-center justify-between border-t border-flow-divider px-[20px] py-[15px] lg:min-h-[52px] lg:px-[15px] lg:py-[11px]">
        <div className="flex items-center gap-[13px] lg:gap-[10px]">
          <button
            type="button"
            aria-label={`${integration.name} settings`}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-flow-border bg-white text-flow-black lg:h-[31px] lg:w-[31px] lg:rounded-[8px]"
          >
            <Icon name="settings" className="h-[22px] w-[22px] lg:h-[16px] lg:w-[16px]" />
          </button>
          <button
            type="button"
            className="h-[42px] rounded-[10px] border border-flow-border bg-white px-[16px] text-[18px] font-semibold text-flow-black lg:h-[31px] lg:rounded-[8px] lg:px-[12px] lg:text-[14px]"
          >
            Details
          </button>
        </div>
        <button
          type="button"
          aria-label={`${integration.name} enabled`}
          aria-pressed={integration.enabled}
          className={`relative h-[32px] w-[54px] rounded-full transition-colors lg:h-[24px] lg:w-[40px] ${
            integration.enabled ? "bg-flow-primary" : "bg-flow-disabled"
          }`}
        >
          <span
            className={`absolute top-[4px] h-[24px] w-[24px] rounded-full bg-white transition-transform lg:top-[3px] lg:h-[18px] lg:w-[18px] ${
              integration.enabled ? "left-[26px] lg:left-[19px]" : "left-[4px] lg:left-[3px]"
            }`}
          />
        </button>
      </div>
    </article>
  );
}

function PageIntro() {
  return (
    <section className="flex flex-col gap-5 px-5 pt-8 md:flex-row md:items-start md:justify-between lg:px-[25px] lg:pt-[24px]">
      <div>
        <h1 className="text-[36px] font-medium leading-[1.08] tracking-[-0.01em] text-flow-black lg:text-[29px]">
          Integrations
        </h1>
        <p className="mt-[9px] text-[20px] font-medium text-flow-secondary lg:mt-[7px] lg:text-[17px]">
          Connect FlowMail with your favorite tools
        </p>
      </div>
      <button
        type="button"
        className="inline-flex h-[58px] items-center justify-center gap-[13px] rounded-[13px] border border-white/30 bg-brand-gradient px-[26px] text-[20px] font-semibold text-white shadow-[0_1px_2px_rgba(17,17,17,0.06)] lg:h-[48px] lg:gap-[10px] lg:rounded-[11px] lg:px-[21px] lg:text-[16px]"
      >
        <Icon name="plus" className="h-[24px] w-[24px] lg:h-[18px] lg:w-[18px]" />
        Request Integration
      </button>
    </section>
  );
}

function CatalogPanel() {
  return (
    <section className="mx-5 mt-[23px] overflow-hidden rounded-[28px] border border-flow-border bg-white lg:mx-[25px] lg:mt-[17px] lg:rounded-[20px]">
      <div className="flex flex-col gap-4 px-[22px] py-[24px] xl:flex-row xl:items-center xl:justify-between xl:px-[23px] xl:py-[21px]">
        <h2 className="text-[32px] font-medium leading-none text-flow-black lg:text-[25px]">
          All Integrations
        </h2>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <SearchBox
            placeholder="Search Integrations..."
            className="h-[50px] w-full md:w-[350px] lg:h-[39px] lg:w-[294px] lg:rounded-[10px] lg:px-[15px]"
          />
          <div className="flex h-[50px] w-full items-center rounded-[13px] border border-flow-border bg-flow-page p-[4px] md:w-auto lg:h-[39px] lg:rounded-[10px] lg:p-[3px]">
            {["All", "Available", "Connected"].map((tab) => (
              <button
                type="button"
                key={tab}
                className={`h-full rounded-[10px] px-4 text-[18px] font-medium lg:rounded-[8px] lg:px-3 lg:text-[16px] ${
                  tab === "All"
                    ? "bg-white text-flow-black"
                    : "text-flow-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[21px] px-[22px] pb-[32px] md:grid-cols-2 xl:grid-cols-3 xl:gap-[17px] xl:px-[23px] xl:pb-[24px]">
        {integrations.map((integration) => (
          <IntegrationCard key={integration.name} integration={integration} />
        ))}
      </div>
    </section>
  );
}

export default function FlowMailPage() {
  return (
    <div className="min-h-screen bg-flow-page text-flow-black lg:flex lg:h-screen lg:overflow-hidden">
      <Sidebar />
      <div className="min-w-0 flex-1 lg:h-screen lg:overflow-y-auto">
        <Topbar />
        <main className="pb-10">
          <PageIntro />
          <section className="grid grid-cols-1 gap-[21px] px-5 pt-[31px] md:grid-cols-2 xl:grid-cols-4 lg:gap-[17px] lg:px-[25px] lg:pt-[23px]">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </section>
          <CatalogPanel />
        </main>
      </div>
    </div>
  );
}
