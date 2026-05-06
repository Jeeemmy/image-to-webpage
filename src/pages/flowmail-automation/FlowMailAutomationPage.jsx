const navItems = [
  { label: "Dashboard", icon: "grid" },
  { label: "Campaigns", icon: "mail" },
  { label: "Automations", icon: "nodes" },
  { label: "Audience", icon: "users" },
  { label: "Analytics", icon: "chart" },
  { label: "Templates", icon: "cards" },
  { label: "Integrations", icon: "shield" },
  { label: "Forms", icon: "forms" },
  { label: "Settings", icon: "settings" },
];

const builderGroups = [
  {
    title: "Triggers",
    items: [
      { label: "User subscribes", icon: "users" },
      { label: "Opens email", icon: "mail" },
      { label: "Clicks link", icon: "cursor" },
      { label: "Makes purchase", icon: "cart" },
      { label: "Tag added", icon: "tag" },
    ],
  },
  {
    title: "Actions",
    items: [
      { label: "Send email", icon: "mail" },
      { label: "Add tag", icon: "tag" },
      { label: "Remove tag", icon: "tag" },
    ],
  },
  {
    title: "Logic",
    items: [
      { label: "If/Else condition", icon: "logic" },
      { label: "Wait/Delay", icon: "clock" },
    ],
  },
];

const workflowNodes = [
  {
    label: "User subscribes",
    icon: "users",
    left: 386,
    top: 153,
  },
  {
    label: "Opens email",
    icon: "mail",
    left: 647,
    top: 276,
  },
  {
    label: "Clicks link",
    icon: "cursor",
    left: 386,
    top: 414,
  },
  {
    label: "Makes purchase",
    icon: "cart",
    left: 647,
    top: 552,
  },
];

const canvasDotStyle = {
  backgroundImage:
    "radial-gradient(circle at 1px 1px, rgba(111, 99, 166, 0.14) 1px, transparent 0)",
  backgroundSize: "10px 10px",
};

function Icon({ name, className = "h-5 w-5", strokeWidth = 1.9 }) {
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
          <rect x="4" y="4" width="6" height="6" rx="1.4" />
          <rect x="14" y="4" width="6" height="6" rx="1.4" />
          <rect x="4" y="14" width="6" height="6" rx="1.4" />
          <rect x="14" y="14" width="6" height="6" rx="1.4" />
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
          <circle cx="12" cy="5" r="2.1" />
          <circle cx="5.5" cy="18" r="2.1" />
          <circle cx="18.5" cy="18" r="2.1" />
          <path d="M11 7 6.5 16M13 7l4.5 9M8 18h8" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8.5" r="2.7" />
          <circle cx="16.8" cy="9.5" r="2.1" />
          <path d="M4 18.8c.6-3 2.5-4.7 5-4.7s4.4 1.7 5 4.7" />
          <path d="M14.8 14.9c2.7.2 4.4 1.6 4.9 3.9" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4.5 19V5" />
          <path d="M4.5 19h15" />
          <path d="m7 15 3.2-3.6 3.4 2.2L19 7" />
        </svg>
      );
    case "cards":
      return (
        <svg {...common}>
          <rect x="6" y="4" width="12" height="14" rx="2.4" />
          <path d="M4 8.5h2M4 12.5h2M9 8h6M9 12h5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3.7 19 6v5.3c0 4.4-2.7 7.6-7 9-4.3-1.4-7-4.6-7-9V6l7-2.3Z" />
          <path d="m9 12 2 2 4-4" />
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
          <path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Z" />
          <path d="m19.2 14.5.1-.1a1.9 1.9 0 0 0 0-2.8l-.1-.1.9-1.9-1.9-3.1-2.1.2-.2-.1a1.9 1.9 0 0 0-2.5-1.4L12 5.9l-1.3-.7A1.9 1.9 0 0 0 8.2 6.6l-.2.1-2.1-.2-1.9 3.1.9 1.9-.1.1a1.9 1.9 0 0 0 0 2.8l.1.1-.9 1.9 1.9 3.1 2.1-.2.2.1a1.9 1.9 0 0 0 2.5 1.4l1.3-.7 1.3.7a1.9 1.9 0 0 0 2.5-1.4l.2-.1 2.1.2 1.9-3.1-.8-1.9Z" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6.4" />
          <path d="m16 16 4 4" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M18 9.8a6 6 0 0 0-12 0c0 7-2.2 7.4-2.2 7.4h16.4S18 16.8 18 9.8Z" />
          <path d="M9.5 20a2.7 2.7 0 0 0 5 0" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="m8.4 4 1.2 3.2 3.2 1.2-3.2 1.2-1.2 3.2-1.2-3.2L4 8.4l3.2-1.2L8.4 4Z" />
          <path d="m16.5 10 1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1 1-2.4Z" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common}>
          <path d="M2.8 12s3.2-5 9.2-5 9.2 5 9.2 5-3.2 5-9.2 5-9.2-5-9.2-5Z" />
          <circle cx="12" cy="12" r="2.6" />
        </svg>
      );
    case "save":
      return (
        <svg {...common}>
          <path d="M5 4h11l3 3v13H5V4Z" />
          <path d="M8 4v6h7V4" />
          <path d="M8 20v-6h8v6" />
        </svg>
      );
    case "play":
      return (
        <svg {...common}>
          <path d="M8 5.5v13l10-6.5L8 5.5Z" />
        </svg>
      );
    case "trash":
      return (
        <svg {...common}>
          <path d="M4 7h16M9 7V5h6v2M7 7l1 13h8l1-13" />
          <path d="M10 11v5M14 11v5" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "cursor":
      return (
        <svg {...common}>
          <path d="m6 4 7 16 1.8-6 5.6-2L6 4Z" />
          <path d="m13.6 13.6 4 4" />
        </svg>
      );
    case "cart":
      return (
        <svg {...common}>
          <path d="M4 5h2l2.2 10.5h8.6L19 8H7" />
          <circle cx="9" cy="19" r="1.5" />
          <circle cx="17" cy="19" r="1.5" />
        </svg>
      );
    case "tag":
      return (
        <svg {...common}>
          <path d="M20 12 12 20 4 12V4h8l8 8Z" />
          <circle cx="8.7" cy="8.7" r="1.2" />
        </svg>
      );
    case "logic":
      return (
        <svg {...common}>
          <circle cx="6.5" cy="6.5" r="2.2" />
          <circle cx="17.5" cy="17.5" r="2.2" />
          <circle cx="6.5" cy="17.5" r="2.2" />
          <path d="M8.3 7.9 15.7 16M8.7 17.5H15" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.8V12l3 2" />
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
    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[#5B47F6] text-white ring-1 ring-white/60">
      <Icon name="mail" className="h-[21px] w-[21px]" strokeWidth={2.1} />
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-[#F0EEF5] bg-white px-4 py-4 lg:h-screen lg:w-[208px] lg:overflow-hidden lg:border-b-0 lg:border-r lg:border-[#F0EEF5] lg:px-[18px] lg:py-[24px] lg:shadow-[2px_0_12px_rgba(18,18,22,0.04)]">
      <div className="flex shrink-0 items-center justify-between gap-4">
        <div className="flex items-center gap-[10px]">
          <BrandLogo />
          <span className="text-[18px] font-bold leading-[22px] text-[#111116]">
            FlowMail
          </span>
        </div>
        <button
          type="button"
          aria-label="Collapse sidebar"
          className="hidden h-7 w-7 items-center justify-center rounded-full text-[#6F6F76] lg:flex"
        >
          <Icon name="sidebar-collapse" className="h-[18px] w-[18px]" />
        </button>
      </div>

      <nav className="mt-6 flex gap-2 overflow-x-auto pb-1 lg:mt-[39px] lg:min-h-0 lg:flex-1 lg:flex-col lg:gap-[6px] lg:overflow-x-hidden lg:overflow-y-auto lg:pb-3 lg:pr-1">
        {navItems.map((item) => (
          <button
            type="button"
            key={item.label}
            className="flex h-[34px] shrink-0 items-center gap-[11px] rounded-[8px] border border-transparent px-[9px] text-left text-[14px] font-medium leading-5 text-[#67666E] transition-colors hover:bg-[#F7F6FC] hover:text-[#111116]"
          >
            <Icon name={item.icon} className="h-[16px] w-[16px] text-[#6F6F76]" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-5 hidden shrink-0 border-t border-[#E9E7EE] pt-[20px] lg:flex lg:items-center lg:gap-[9px]">
        <div className="h-[35px] w-[35px] overflow-hidden rounded-full bg-[linear-gradient(145deg,#3d2f2a,#f0b689)] p-[2px]">
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_50%_38%,#f4d1b3_0_18%,#2d2527_19%_24%,#edbe90_25%_49%,#1f2937_50%_100%)]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[14px] font-bold leading-[18px] text-[#111116]">
            John Doe
          </p>
          <p className="text-[12px] font-medium leading-[16px] text-[#77757E]">
            Pro Plan
          </p>
        </div>
        <Icon name="chevron-down" className="h-4 w-4 text-[#77757E]" />
      </div>
    </aside>
  );
}

function SearchBox({ className = "" }) {
  return (
    <label
      className={`flex h-[38px] items-center gap-[11px] rounded-[10px] border border-[#E9E7EE] bg-white px-[13px] text-[#5E5D65] ${className}`}
    >
      <Icon name="search" className="h-[18px] w-[18px] shrink-0" />
      <input
        type="search"
        placeholder="Search here..."
        className="min-w-0 flex-1 bg-transparent text-[14px] font-medium leading-5 text-[#111116] outline-none placeholder:text-[#77757E]"
      />
    </label>
  );
}

function Topbar() {
  return (
    <header className="z-30 flex min-h-[80px] shrink-0 flex-col gap-3 border-b border-[#F0EEF5] bg-[#F6F5FA] px-5 py-4 md:flex-row md:items-center md:justify-between lg:h-[80px] lg:px-[21px] lg:py-0">
      <div className="text-[14px] font-medium leading-5 text-[#1D1C22]">
        Dashboard <span className="mx-[6px] text-[#77757E]">/</span> Create Automation
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:gap-[15px]">
        <SearchBox className="w-full sm:w-[225px]" />
        <button
          type="button"
          aria-label="Notifications"
          className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] border border-[#E9E7EE] bg-white text-[#111116]"
        >
          <Icon name="bell" className="h-[19px] w-[19px]" strokeWidth={2.1} />
        </button>
        <button
          type="button"
          className="inline-flex h-[38px] shrink-0 items-center justify-center gap-[9px] rounded-[9px] border border-white/80 bg-[linear-gradient(105deg,#D8CCF5_0%,#F8F5FF_42%,#62BEE3_100%)] px-[15px] text-[14px] font-bold leading-5 text-[#111116] shadow-[0_6px_14px_rgba(18,18,22,0.10)]"
        >
          <Icon name="sparkles" className="h-[18px] w-[18px]" strokeWidth={2.2} />
          Get Ai Insight
        </button>
      </div>
    </header>
  );
}

function HeaderButton({ icon, children, variant = "secondary" }) {
  const isPrimary = variant === "primary";
  return (
    <button
      type="button"
      className={`inline-flex h-[36px] shrink-0 items-center justify-center gap-[8px] rounded-[9px] px-[14px] text-[14px] font-bold leading-5 ${
        isPrimary
          ? "border border-[#6A57F7] bg-[linear-gradient(90deg,#5B47F6_0%,#6B55FA_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.34),inset_0_-2px_5px_rgba(29,18,141,0.26)]"
          : "border border-[#E4E2E8] bg-[#EFEFF2] text-[#17161B] shadow-[inset_0_1px_0_rgba(255,255,255,0.90),inset_0_-2px_4px_rgba(18,18,22,0.09)]"
      }`}
    >
      <Icon name={icon} className="h-[16px] w-[16px]" strokeWidth={2} />
      {children}
    </button>
  );
}

function AutomationHeader() {
  return (
    <section className="flex shrink-0 flex-col gap-4 border-b border-[#F0EEF5] bg-white px-5 py-4 md:flex-row md:items-center md:justify-between lg:h-[73px] lg:bg-[#FCFBFE] lg:px-[21px] lg:py-0">
      <div>
        <h1 className="text-[25px] font-bold leading-[32px] text-[#111116]">
          New Automation
        </h1>
        <p className="mt-[2px] text-[14px] font-medium leading-5 text-[#5D5B63]">
          Draft - Not active
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-[13px]">
        <HeaderButton icon="eye">Test</HeaderButton>
        <HeaderButton icon="save">Save Draft</HeaderButton>
        <HeaderButton icon="play" variant="primary">
          Activate
        </HeaderButton>
      </div>
    </section>
  );
}

function BuilderItem({ item }) {
  return (
    <button
      type="button"
      className="flex h-[40px] w-full items-center gap-[10px] rounded-[9px] border border-[#E9E7EE] bg-[#FDFDFF] px-[10px] text-left text-[14px] font-medium leading-5 text-[#24232A] shadow-[0_1px_2px_rgba(18,18,22,0.02)]"
    >
      <span className="flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-[7px] border border-[#ECEAF5] bg-[#FAFAFF] text-[#5B47F6]">
        <Icon name={item.icon} className="h-[14px] w-[14px]" />
      </span>
      <span>{item.label}</span>
    </button>
  );
}

function BuilderPalette() {
  return (
    <aside className="absolute left-[20px] top-[20px] z-20 flex h-[707px] w-[230px] flex-col overflow-hidden rounded-[16px] border border-[#E9E7EE] bg-white px-[18px] py-[19px] shadow-[0_12px_28px_rgba(22,22,32,0.06)]">
      <div className="shrink-0">
        <h2 className="text-[16px] font-bold leading-[22px] text-[#111116]">
          Automation Builder
        </h2>
        <p className="mt-[7px] max-w-[170px] text-[14px] font-medium leading-[21px] text-[#5D5B63]">
          Drag and drop to build your workflow
        </p>
      </div>

      <div className="mt-[24px] flex min-h-0 flex-1 flex-col gap-[21px] overflow-y-auto pb-[18px] pr-1">
        {builderGroups.map((group) => (
          <section key={group.title}>
            <h3 className="mb-[13px] text-[14px] font-medium leading-5 text-[#5D5B63]">
              {group.title}
            </h3>
            <div className="flex flex-col gap-[9px]">
              {group.items.map((item) => (
                <BuilderItem item={item} key={item.label} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}

function ConnectorLayer() {
  return (
    <svg
      className="absolute inset-0 z-10 h-full w-full text-[#5B47F6]"
      viewBox="0 0 992 747"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray="4 7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.62"
        strokeWidth="1.35"
      >
        <path d="M622 184 H758 C770 184 777 191 777 203 V276" />
        <path d="M647 307 H505 C495 307 490 316 490 326 V414" />
        <path d="M622 445 H758 C770 445 777 452 777 464 V552" />
      </g>
    </svg>
  );
}

function AddStepButton() {
  return (
    <button
      type="button"
      aria-label="Add automation step"
      className="absolute -bottom-[13px] left-1/2 z-30 flex h-[25px] w-[25px] -translate-x-1/2 items-center justify-center rounded-[7px] bg-[#5B47F6] text-white shadow-[0_7px_14px_rgba(91,71,246,0.24)]"
    >
      <Icon name="plus" className="h-[16px] w-[16px]" strokeWidth={2.2} />
    </button>
  );
}

function WorkflowNode({ node }) {
  return (
    <article
      className="absolute z-20 flex h-[62px] w-[236px] items-center rounded-[9px] border border-[#EDEBF2] bg-white px-[12px] shadow-[0_5px_16px_rgba(20,20,30,0.04)]"
      style={{ left: node.left, top: node.top }}
    >
      <span className="flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-[8px] border border-[#ECEAF5] bg-[#FAFAFF] text-[#5B47F6]">
        <Icon name={node.icon} className="h-[18px] w-[18px]" />
      </span>
      <div className="ml-[12px] min-w-0 flex-1">
        <h3 className="truncate text-[15px] font-bold leading-[19px] text-[#111116]">
          {node.label}
        </h3>
        <p className="mt-[2px] truncate text-[11px] font-medium leading-[15px] text-[#5D5B63]">
          When this happens
        </p>
      </div>
      <button
        type="button"
        aria-label={`Delete ${node.label}`}
        className="ml-[8px] flex h-[21px] w-[21px] shrink-0 items-center justify-center text-[#D33C4A]"
      >
        <Icon name="trash" className="h-[15px] w-[15px]" strokeWidth={2} />
      </button>
      <AddStepButton />
    </article>
  );
}

function Workspace() {
  return (
    <section className="min-h-0 flex-1 overflow-auto bg-[#FCFBFE]" style={canvasDotStyle}>
      <div className="relative h-[747px] w-[992px]">
        <BuilderPalette />
        <ConnectorLayer />
        {workflowNodes.map((node) => (
          <WorkflowNode node={node} key={node.label} />
        ))}
      </div>
    </section>
  );
}

export default function FlowMailAutomationPage() {
  return (
    <div className="min-h-screen bg-[#F6F5FA] text-[#111116] lg:flex lg:h-screen lg:overflow-hidden">
      <Sidebar />
      <div className="min-w-0 flex-1 lg:flex lg:h-screen lg:flex-col lg:overflow-hidden">
        <Topbar />
        <main className="min-h-0 flex-1 lg:flex lg:flex-col lg:overflow-hidden">
          <AutomationHeader />
          <Workspace />
        </main>
      </div>
    </div>
  );
}
