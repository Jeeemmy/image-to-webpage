const topNavItems = [
  { label: "Notification", icon: "bell" },
  { label: "Search", icon: "search" },
  { label: "To Do List", icon: "check-circle" },
];

const appNavItems = [
  { label: "Website Editor", icon: "paint-roller" },
  { label: "Customer List", icon: "users", active: true },
  { label: "Settings", icon: "settings" },
];

const supportNavItems = [
  { label: "Help", icon: "help-circle" },
  { label: "Contact Us", icon: "lifebuoy" },
];

const contactItems = [
  { icon: "mail", label: "josephw@aol.com" },
  { icon: "phone", label: "(201) 555-0124" },
  {
    icon: "map-pin",
    label: "4140 Parker Rd. Allentown, New Mexico 31",
  },
];

const optionalItems = [
  { icon: "building", label: "Uigeek Agency" },
  { icon: "file-text", label: "Prefers cash payment" },
  { icon: "clock", label: "1992-01-19" },
];

const groups = [
  "Local Customers",
  "CRM",
  "Marketing",
  "Appointment",
  "Sales Team",
  "Engineering",
];

const upcomingEvents = [
  {
    title: "Weekly Meeting Reminder",
    detail: "Scheduled 10 Thursday July at 5:30 PM",
    icon: "calendar",
    tone: "calendar",
  },
  {
    title: "Payment Received",
    detail: "Repeats monthly on the 10th at 10:30 AM.",
    icon: "banknote",
    tone: "payment",
  },
];

const pastEvents = [
  {
    title: "Designer Check-In Meeting",
    detail: "June 03 Thu Finished  at 01:15 PM",
    icon: "video",
    tone: "video",
  },
  {
    title: "Sales Team Quarter Plan",
    detail: "Updated Today 2:40 PM",
    icon: "tag",
    tone: "tag",
  },
  {
    title: "Security upgrades for the marketing site",
    detail: "Today at 2:00 PM",
    icon: "shield",
    tone: "security",
  },
];

const eventToneClasses = {
  calendar: {
    tile: "bg-[#edf9fc] text-[#0b6ea8]",
    icon: "calendar",
  },
  payment: {
    tile: "bg-[#f1faf6] text-[#159a6d]",
    icon: "banknote",
  },
  video: {
    tile: "bg-[#fbeaec] text-[#b43b3d]",
    icon: "video",
  },
  tag: {
    tile: "bg-[#f5eafb] text-[#9b2eb8]",
    icon: "tag",
  },
  security: {
    tile: "bg-[#eaf8fc] text-[#229bab]",
    icon: "shield",
  },
};

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
    case "bell":
      return (
        <svg {...common}>
          <path d="M18 10.3a6 6 0 0 0-12 0c0 5.2-2 6.5-2 6.5h16s-2-1.3-2-6.5Z" />
          <path d="M9.8 20a2.4 2.4 0 0 0 4.4 0" />
          <path d="M10 4.2a2 2 0 0 1 4 0" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 4 4" />
        </svg>
      );
    case "check-circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.6" />
          <path d="m8.8 12.2 2.1 2.1 4.7-5" />
        </svg>
      );
    case "paint-roller":
      return (
        <svg {...common}>
          <path d="M4 6.2h11.2a2.2 2.2 0 0 1 0 4.4H9.4" />
          <path d="M4 6.2V4.8h11.2a3.6 3.6 0 1 1 0 7.2H9.4v2.2" />
          <path d="M8.2 14.2h2.4v5.4a1.2 1.2 0 0 1-2.4 0Z" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9.2" cy="8.5" r="2.7" />
          <circle cx="16.7" cy="9.3" r="2.1" />
          <path d="M3.9 19c.6-3 2.5-4.5 5.3-4.5 2.7 0 4.5 1.5 5.2 4.5" />
          <path d="M14.9 14.8c2.7.2 4.4 1.6 5.2 4.2" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.1" />
          <path d="M19.1 14.5a1.8 1.8 0 0 0 .1 2l-1.8 3.1-2.2-.7a7.9 7.9 0 0 1-1.8 1l-.5 2.2h-3.8l-.5-2.2a7.9 7.9 0 0 1-1.8-1l-2.2.7-1.8-3.1a1.8 1.8 0 0 0 .1-2 7.2 7.2 0 0 1 0-2.1 1.8 1.8 0 0 0-.1-2l1.8-3.1 2.2.7a7.9 7.9 0 0 1 1.8-1l.5-2.2h3.8l.5 2.2a7.9 7.9 0 0 1 1.8 1l2.2-.7 1.8 3.1a1.8 1.8 0 0 0-.1 2 7.2 7.2 0 0 1 0 2.1Z" />
        </svg>
      );
    case "help-circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.7" />
          <path d="M9.6 9.5a2.5 2.5 0 0 1 4.7 1.2c0 1.8-2.3 2.1-2.3 3.7" />
          <path d="M12 17.6h.01" />
        </svg>
      );
    case "lifebuoy":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.6" />
          <circle cx="12" cy="12" r="3.2" />
          <path d="m6 6 3.6 3.6M18 6l-3.6 3.6M6 18l3.6-3.6M18 18l-3.6-3.6" />
        </svg>
      );
    case "panel-left":
      return (
        <svg {...common}>
          <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="2.2" />
          <path d="M8.1 4.2v15.6" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...common}>
          <rect x="3.7" y="5.2" width="16.6" height="11.5" rx="1.6" />
          <path d="M9.2 20h5.6M12 16.7V20" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2.8v2.1M12 19.1v2.1M4.3 4.3l1.5 1.5M18.2 18.2l1.5 1.5M2.8 12h2.1M19.1 12h2.1M4.3 19.7l1.5-1.5M18.2 5.8l1.5-1.5" />
        </svg>
      );
    case "moon":
      return (
        <svg {...common}>
          <path d="M19.4 14.6A7.7 7.7 0 0 1 9.4 4.6 8 8 0 1 0 19.4 14.6Z" />
        </svg>
      );
    case "log-out":
      return (
        <svg {...common}>
          <path d="M10.2 5H6.1a1.7 1.7 0 0 0-1.7 1.7v10.6A1.7 1.7 0 0 0 6.1 19h4.1" />
          <path d="M15.6 8.2 19.4 12l-3.8 3.8" />
          <path d="M19.1 12H9.3" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3.8" y="6" width="16.4" height="12" rx="2" />
          <path d="m4.6 7.7 7.4 5.1 7.4-5.1" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6.5 4.7 9 4.1l2 4.3-1.7 1.3a10.4 10.4 0 0 0 5 5l1.3-1.7 4.3 2-.6 2.5a2.3 2.3 0 0 1-2.4 1.8C9.9 18.8 5.2 14.1 4.7 7.1a2.3 2.3 0 0 1 1.8-2.4Z" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...common}>
          <path d="M19 10.5c0 5-7 10-7 10s-7-5-7-10a7 7 0 0 1 14 0Z" />
          <circle cx="12" cy="10.5" r="2.4" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M5.2 20V4.5h9.6V20" />
          <path d="M14.8 9.8h4V20" />
          <path d="M8.2 8h.1M11.8 8h.1M8.2 11.5h.1M11.8 11.5h.1M8.2 15h.1M11.8 15h.1" />
          <path d="M3.8 20h16.4" />
        </svg>
      );
    case "file-text":
      return (
        <svg {...common}>
          <path d="M6.4 3.8h7l4.2 4.2v12.2H6.4Z" />
          <path d="M13.4 3.8V8h4.2" />
          <path d="M9 12h6M9 15.2h6M9 18.4h3.4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.6" />
          <path d="M12 7.4V12l3.1 2.1" />
        </svg>
      );
    case "filter":
      return (
        <svg {...common}>
          <path d="M4.5 6.2h15M7.7 12h8.6M10.7 17.8h2.6" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="4.3" y="5.7" width="15.4" height="14" rx="2.2" />
          <path d="M8 3.8v4M16 3.8v4M4.3 10h15.4" />
        </svg>
      );
    case "banknote":
      return (
        <svg {...common}>
          <rect x="4.2" y="7" width="15.6" height="10" rx="1.6" />
          <path d="M7.4 7a3.2 3.2 0 0 1-3.2 3.2M19.8 10.2A3.2 3.2 0 0 1 16.6 7M7.4 17a3.2 3.2 0 0 0-3.2-3.2M19.8 13.8A3.2 3.2 0 0 0 16.6 17" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "video":
      return (
        <svg {...common}>
          <rect x="4.8" y="7.2" width="10.8" height="9.6" rx="2.1" />
          <path d="m15.6 10.2 4-2.3v8.2l-4-2.3Z" />
        </svg>
      );
    case "tag":
      return (
        <svg {...common}>
          <path d="M20.2 12.4 12.4 20.2 4.2 12V4.2H12Z" />
          <circle cx="9.8" cy="9.8" r="1.2" />
          <path d="m10.8 14.8 3.9-3.9" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 21s7-3.5 7-9.5V5.8L12 3 5 5.8v5.7C5 17.5 12 21 12 21Z" />
          <path d="M12 8.2v4.4M12 15.7h.01" />
        </svg>
      );
    case "more-vertical":
      return (
        <svg {...common}>
          <circle cx="12" cy="5.4" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="12" cy="18.6" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}

function Logo() {
  return (
    <div className="flex min-w-0 items-center gap-[9px]">
      <div className="relative h-[26px] w-[26px] shrink-0 rounded-[4px] bg-[#e4f8f5]">
        <span className="absolute left-[8px] top-[6px] h-[14px] w-[4px] rotate-[12deg] rounded-full bg-[#1cb9be]" />
        <span className="absolute bottom-[7px] right-[6px] h-[6px] w-[6px] rounded-full bg-[#1cb9be]" />
      </div>
      <span className="truncate text-[18px] font-bold leading-none text-[#111114]">
        bizwise
      </span>
    </div>
  );
}

function ProfileAvatar() {
  return (
    <div className="relative h-[46px] w-[46px] overflow-hidden rounded-full bg-[#ffd24f]">
      <div className="absolute left-[16px] top-[8px] h-[15px] w-[15px] rounded-full bg-[#231b1c]" />
      <div className="absolute left-[18px] top-[15px] h-[18px] w-[13px] rounded-b-[8px] rounded-t-[5px] bg-[#c46a46]" />
      <div className="absolute left-[15px] top-[23px] h-[8px] w-[19px] rounded-full bg-[#f0a777]" />
      <div className="absolute bottom-[-4px] left-[11px] h-[18px] w-[26px] rounded-t-[10px] bg-[#13b9ad]" />
      <div className="absolute left-[22px] top-[19px] h-[2px] w-[2px] rounded-full bg-[#111114]" />
      <div className="absolute left-[28px] top-[19px] h-[2px] w-[2px] rounded-full bg-[#111114]" />
    </div>
  );
}

function NavItem({ item }) {
  const active = item.active;

  return (
    <a
      href="#"
      className={[
        "flex h-[34px] items-center gap-[11px] rounded-[6px] px-[10px] text-[16px] leading-none transition",
        active
          ? "bg-[#e6f0ff] font-bold text-[#2e3f92]"
          : "font-medium text-[#111114]",
      ].join(" ")}
    >
      <Icon name={item.icon} className="h-[18px] w-[18px] shrink-0" />
      <span className="truncate">{item.label}</span>
    </a>
  );
}

function NavSection({ label, items, className = "" }) {
  return (
    <section className={className}>
      {label ? (
        <h2 className="mb-[18px] text-[12px] font-medium uppercase leading-none text-[#555a63]">
          {label}
        </h2>
      ) : null}
      <nav className="flex flex-col gap-[8px]">
        {items.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </nav>
    </section>
  );
}

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-full shrink-0 flex-col bg-[#fafbfd] px-[14px] py-[20px] text-[#111114] lg:sticky lg:top-0 lg:h-screen lg:w-[236px] lg:overflow-y-auto">
      <div className="flex items-center justify-between gap-4">
        <Logo />
        <button
          type="button"
          className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[6px] text-[#111114]"
          aria-label="Collapse sidebar"
        >
          <Icon name="panel-left" className="h-[18px] w-[18px]" />
        </button>
      </div>

      <div className="mt-[50px] flex flex-1 flex-col">
        <NavSection items={topNavItems} />
        <NavSection label="MY APPS" items={appNavItems} className="mt-[54px]" />
        <div className="flex-1" />
        <NavSection
          label="SUPPORT"
          items={supportNavItems}
          className="mt-[56px]"
        />
      </div>

      <div className="mt-[70px] flex items-center justify-between gap-[12px] px-[8px] pb-[2px]">
        {["monitor", "sun", "moon", "log-out"].map((icon) => (
          <button
            key={icon}
            type="button"
            className="flex h-[24px] w-[24px] items-center justify-center text-[#111114]"
            aria-label={icon}
          >
            <Icon name={icon} className="h-[18px] w-[18px]" />
          </button>
        ))}
      </div>
    </aside>
  );
}

function DetailList({ items }) {
  return (
    <ul className="flex flex-col gap-[20px]">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-[13px]">
          <Icon
            name={item.icon}
            className="mt-[1px] h-[19px] w-[19px] shrink-0 text-[#2c2e33]"
          />
          <span className="max-w-[235px] text-[16px] font-medium leading-[22px] text-[#2c2e33]">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ProfilePanel() {
  return (
    <section className="w-full shrink-0 border-r border-[#e2e5ea] bg-white lg:w-[321px]">
      <div className="border-b border-[#e2e5ea] px-[27px] pb-[33px] pt-[32px]">
        <div className="flex items-center justify-between gap-4">
          <ProfileAvatar />
          <button
            type="button"
            className="h-[34px] rounded-[6px] border border-[#dde2e8] bg-white px-[12px] text-[16px] font-bold leading-none text-[#2e3f92]"
          >
            Edit Profile
          </button>
        </div>
        <div className="mt-[21px]">
          <h1 className="text-[20px] font-bold leading-[25px] text-[#111114]">
            Darrell Steward
          </h1>
          <p className="text-[17px] font-medium leading-[22px] text-[#111114]">
            Chief Executive Officer
          </p>
        </div>
      </div>

      <div className="border-b border-[#e2e5ea] px-[27px] py-[29px]">
        <h2 className="mb-[27px] text-[17px] font-bold leading-none text-[#111114]">
          Contact Information
        </h2>
        <DetailList items={contactItems} />
      </div>

      <div className="border-b border-[#e2e5ea] px-[27px] py-[29px]">
        <h2 className="mb-[27px] text-[17px] font-bold leading-none text-[#111114]">
          Optional Information
        </h2>
        <DetailList items={optionalItems} />
      </div>

      <div className="px-[27px] py-[28px]">
        <h2 className="mb-[18px] text-[17px] font-bold leading-none text-[#111114]">
          Groups
        </h2>
        <div className="flex flex-wrap gap-x-[13px] gap-y-[14px]">
          {groups.map((group) => (
            <span
              key={group}
              className="rounded-[5px] bg-[#f1f3f6] px-[10px] py-[8px] text-[15px] font-medium leading-none text-[#2c2e33]"
            >
              {group}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PageHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-[104px] shrink-0 items-center border-b border-[#e2e5ea] bg-white px-[27px]">
      <div className="flex min-w-0 items-center gap-[7px] text-[20px] leading-none">
        <span className="font-medium text-[#555a63]">Customers</span>
        <span className="font-medium text-[#555a63]">/</span>
        <span className="font-bold text-[#111114]">Customer Profile</span>
      </div>
    </header>
  );
}

function Tabs() {
  const tabs = ["Customer Notes", "Customer Files", "Activity Log"];

  return (
    <div
      className="flex h-[57px] items-stretch justify-between border-b border-[#e2e5ea] bg-[#fafbfd] px-[27px]"
      data-layout="edge-spread-tabs"
    >
      {tabs.map((tab) => {
        const active = tab === "Activity Log";

        return (
          <button
            key={tab}
            type="button"
            className={[
              "relative flex w-auto shrink-0 items-center justify-center text-[19px] leading-none",
              active
                ? "font-bold text-[#2e3f92]"
                : "font-medium text-[#111114]",
            ].join(" ")}
          >
            {tab}
            {active ? (
              <span className="absolute bottom-[-1px] h-[2px] w-[108px] bg-[#2e3f92]" />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

function FilterButton() {
  return (
    <button
      type="button"
      className="flex h-[39px] items-center gap-[9px] rounded-[7px] border border-[#dde2e8] bg-white px-[17px] text-[17px] font-bold leading-none text-[#2e3f92] shadow-[0_4px_10px_rgba(17,17,20,0.035)]"
    >
      <Icon name="filter" className="h-[20px] w-[20px]" />
      <span>Filtered</span>
      <span className="flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-[#2e3f92] px-[6px] text-[11px] font-bold leading-none text-white">
        3
      </span>
    </button>
  );
}

function EventCard({ event }) {
  const tone = eventToneClasses[event.tone];

  return (
    <article className="flex min-h-[89px] items-center rounded-[6px] border border-[#d7dce4] bg-white px-[20px] py-[17px] shadow-[0_10px_22px_rgba(17,17,20,0.035)]">
      <div
        className={[
          "flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-[12px]",
          tone.tile,
        ].join(" ")}
      >
        <Icon name={tone.icon} className="h-[25px] w-[25px]" />
      </div>
      <div className="ml-[18px] min-w-0 flex-1">
        <h3 className="truncate text-[19px] font-bold leading-[24px] text-[#111114]">
          {event.title}
        </h3>
        <div className="mt-[5px] flex min-w-0 items-center gap-[6px] text-[#111114]">
          <Icon name="clock" className="h-[16px] w-[16px] shrink-0" />
          <p className="truncate text-[15px] font-medium leading-[20px]">
            {event.detail}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="ml-[14px] flex h-[28px] w-[22px] shrink-0 items-center justify-center text-[#2c2e33]"
        aria-label={`More actions for ${event.title}`}
      >
        <Icon name="more-vertical" className="h-[20px] w-[20px]" />
      </button>
    </article>
  );
}

function ActivityPanel() {
  return (
    <section className="min-w-0 flex-1 bg-[#fafbfd]">
      <Tabs />
      <div className="px-[27px] py-[38px]">
        <div className="mb-[30px] flex items-center justify-between gap-4">
          <h2 className="text-[20px] font-bold leading-none text-[#111114]">
            Upcoming Events
          </h2>
          <FilterButton />
        </div>

        <div className="flex flex-col gap-[28px]">
          {upcomingEvents.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>

        <h2 className="mt-[31px] text-[20px] font-bold leading-none text-[#111114]">
          Past Events
        </h2>
        <div className="mt-[31px] flex flex-col gap-[21px]">
          {pastEvents.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MainContent() {
  return (
    <div
      className="min-w-0 flex-1 bg-[#f7f9fc] lg:h-screen lg:pt-[12px]"
      data-shell-offset-canvas="main-stage"
    >
      <main
        className="relative min-w-0 overflow-hidden rounded-tl-[8px] border-l border-t border-[#dde2e8] bg-white shadow-[-2px_-2px_6px_rgba(17,17,20,0.045)] lg:h-full"
        data-shell-edge="top-left"
        data-shell-radius="top-left"
        data-shell-shadow-strength="xs"
        data-shell-offset-top="12"
      >
        <div
          className="lg:h-full lg:overflow-y-auto"
          data-scroll-container="main-stage-inner"
        >
          <PageHeader />
          <div className="flex min-h-[calc(100vh-116px)] flex-col lg:flex-row">
            <ProfilePanel />
            <ActivityPanel />
          </div>
        </div>
      </main>
    </div>
  );
}

export default function BizwiseProfilePage() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#111114] lg:flex lg:h-screen lg:overflow-hidden">
      <Sidebar />
      <MainContent />
    </div>
  );
}
