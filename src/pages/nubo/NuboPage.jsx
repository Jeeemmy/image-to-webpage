const starredFiles = [
  { name: "job-contract-2026.pdf", type: "pdf" },
  { name: "update-resume.pdf", type: "pdf" },
  { name: "photoshoot-25.png", type: "image" },
];

const fileTypeLegend = [
  { label: "Images", color: "#2F80ED" },
  { label: "Documents", color: "#F53F45" },
  { label: "Videos", color: "#EAB308" },
  { label: "Audio", color: "#25C268" },
];

const folderCards = [
  { label: "Images", count: "189 files" },
  { label: "Documents", count: "100 files" },
  { label: "Videos", count: "11 files" },
];

const storageLegend = [
  { label: "Images", value: "10.3GB", color: "#2F80ED" },
  { label: "Documents", value: "2.1GB", color: "#F53F45" },
  { label: "Videos", value: "600MB", color: "#EAB308" },
  { label: "Audio", value: "100MB", color: "#25C268" },
];

const recentFiles = [
  {
    name: "job-contract-2026.pdf",
    type: "pdf",
    folder: "Documents",
    size: "1.2 MB",
    modified: "Today, 10:42",
    starred: true,
  },
  {
    name: "photoshoot-25.png",
    type: "png",
    folder: "Images",
    size: "4.8 MB",
    modified: "Today, 09:15",
    starred: true,
  },
  {
    name: "update-resume.pdf",
    type: "pdf",
    folder: "Documents",
    size: "340 KB",
    modified: "Today, 08:50",
    starred: true,
  },
  {
    name: "vacation-clips-2025.mp4",
    type: "mp4",
    folder: "Videos",
    size: "212 MB",
    modified: "Yesterday, 21:30",
    starred: false,
  },
  {
    name: "project-brief-q2.docx",
    type: "doc",
    folder: "Documents",
    size: "88 KB",
    modified: "Yesterday, 18:05",
    starred: false,
  },
  {
    name: "bella-headshot-final.jpg",
    type: "jpg",
    folder: "Images",
    size: "2.1 MB",
    modified: "Yesterday, 14:22",
    starred: false,
  },
  {
    name: "podcast-ep12.mp3",
    type: "mp3",
    folder: "Audio",
    size: "34 MB",
    modified: "Mar 29, 11:00",
    starred: false,
  },
  {
    name: "brand-kit-v3.png",
    type: "png",
    folder: "Images",
    size: "780 KB",
    modified: "Mar 29, 09:45",
    starred: false,
  },
  {
    name: "invoice-march-2026.pdf",
    type: "pdf",
    folder: "Documents",
    size: "210 KB",
    modified: "Mar 28, 17:33",
    starred: false,
  },
  {
    name: "screen-recording-demo.mp4",
    type: "mp4",
    folder: "Videos",
    size: "95 MB",
    modified: "Mar 28, 15:10",
    starred: false,
  },
  {
    name: "logo-dark-mode.svg",
    type: "svg",
    folder: "Images",
    size: "18 KB",
    modified: "Mar 28, 12:00",
    starred: false,
  },
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
    case "search":
      return (
        <svg {...common}>
          <circle cx="10.8" cy="10.8" r="6.4" />
          <path d="m16 16 4 4" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="m3.5 11 8.5-7 8.5 7" />
          <path d="M5.8 10.2V20h12.4v-9.8" />
          <path d="M9.5 20v-5.2h5V20" />
        </svg>
      );
    case "folder":
      return (
        <svg {...common}>
          <path d="M3.8 7.2h6l2 2h8.4v8.9a2 2 0 0 1-2 2H5.8a2 2 0 0 1-2-2Z" />
          <path d="M3.8 7.2V6a2 2 0 0 1 2-2h3.6l1.8 2h7a2 2 0 0 1 2 2v1.2" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8.5" r="3" />
          <circle cx="17" cy="9.5" r="2.2" />
          <path d="M3.7 19c.7-3 2.6-4.6 5.3-4.6S13.6 16 14.3 19" />
          <path d="M15 14.8c2.7.2 4.4 1.6 5 4.2" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l-3.4 2" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M19.4 14.4a1.8 1.8 0 0 0 .2 2l.1.2-1.8 3.1-2.2-.6-.3.2a1.8 1.8 0 0 0-1.8 1.4L13.1 22h-2.2l-.5-1.3a1.8 1.8 0 0 0-1.8-1.4l-.3-.2-2.2.6-1.8-3.1.1-.2a1.8 1.8 0 0 0 .2-2l-.2-.3-1.4-.3v-3.6l1.4-.3.2-.3a1.8 1.8 0 0 0-.2-2l-.1-.2 1.8-3.1 2.2.6.3-.2a1.8 1.8 0 0 0 1.8-1.4L10.9 2h2.2l.5 1.3a1.8 1.8 0 0 0 1.8 1.4l.3.2 2.2-.6 1.8 3.1-.1.2a1.8 1.8 0 0 0-.2 2l.2.3 1.4.3v3.6l-1.4.3Z" />
        </svg>
      );
    case "trash":
      return (
        <svg {...common}>
          <path d="M4.5 7h15" />
          <path d="M9.5 7V4.8h5V7" />
          <path d="M6.5 7 7.4 20h9.2l.9-13" />
          <path d="M10 10.6v6M14 10.6v6" />
        </svg>
      );
    case "plug":
      return (
        <svg {...common}>
          <path d="M9 7V3.8M15 7V3.8" />
          <path d="M7 7h10v4.5a5 5 0 0 1-10 0Z" />
          <path d="M12 16.5V21" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M18 10a6 6 0 0 0-12 0c0 6.6-2.1 7-2.1 7h16.2S18 16.6 18 10Z" />
          <path d="M9.6 20a2.7 2.7 0 0 0 4.8 0" />
        </svg>
      );
    case "upload":
      return (
        <svg {...common}>
          <path d="M12 15V4.8" />
          <path d="m8.2 8.5 3.8-3.8 3.8 3.8" />
          <path d="M5 15v3.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V15" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" strokeWidth={strokeWidth}>
          <path d="m12 3.8 2.35 4.76 5.25.76-3.8 3.7.9 5.23L12 15.78l-4.7 2.47.9-5.23-3.8-3.7 5.25-.76Z" />
        </svg>
      );
    case "more":
      return (
        <svg {...common}>
          <circle cx="5" cy="12" r="1.25" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none" />
          <circle cx="19" cy="12" r="1.25" fill="currentColor" stroke="none" />
        </svg>
      );
    case "chevron-left":
      return (
        <svg {...common}>
          <path d="m15 6-6 6 6 6" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg {...common}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

function Logo() {
  return (
    <div className="flex items-center gap-[9px]">
      <div className="relative flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full bg-[#64748b] text-white">
        <span className="absolute h-[15px] w-[3px] rounded-full bg-white" />
        <span className="absolute h-[3px] w-[15px] rounded-full bg-white" />
        <span className="absolute h-[9px] w-[9px] rotate-45 rounded-[2px] bg-white/65" />
      </div>
      <span className="text-[14px] font-bold leading-none text-[#1f2328] lg:text-[16px]">
        Nubo
      </span>
    </div>
  );
}

function MiniFileIcon({ type }) {
  const palette = {
    pdf: ["#f04f4f", "PDF"],
    image: ["#1878bd", "JPG"],
    png: ["#28a745", "PNG"],
    jpg: ["#1da2a4", "JPG"],
    mp4: ["#ef5b5b", "MP4"],
    doc: ["#2878d9", "DOC"],
    mp3: ["#7357bd", "MP3"],
    svg: ["#f59e0b", "SVG"],
  };
  const [color, label] = palette[type] || ["#75808d", type.toUpperCase()];

  return (
    <span className="relative inline-flex h-[20px] w-[16px] shrink-0 items-end justify-center overflow-hidden rounded-[3px] border border-black/5 bg-white shadow-[0_1px_1px_rgba(31,35,40,0.06)]">
      <span className="absolute right-0 top-0 h-0 w-0 border-l-[6px] border-t-[6px] border-l-transparent border-t-[#d9dee6]" />
      <span
        className="mb-[2px] flex h-[8px] w-[13px] items-center justify-center rounded-[2px] text-[4px] font-black leading-none text-white"
        style={{ backgroundColor: color }}
      >
        {label}
      </span>
    </span>
  );
}

function SearchBox() {
  return (
    <label className="flex h-[36px] items-center gap-[9px] rounded-[9px] border border-[#dfe3ea] bg-[#e7eaf0] px-[11px] text-[#8b9097]">
      <Icon name="search" className="h-[16px] w-[16px] shrink-0" />
      <input
        aria-label="Search files"
        type="search"
        placeholder="Search..."
        className="min-w-0 flex-1 bg-transparent text-[13px] font-medium text-[#25282c] outline-none placeholder:text-[#7d838c]"
      />
      <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[7px] bg-white text-[12px] font-semibold text-[#848a93]">
        /
      </span>
    </label>
  );
}

function NavButton({ icon, label, active = false }) {
  return (
    <button
      type="button"
      className={`flex h-[35px] w-full items-center gap-[10px] rounded-[8px] px-[12px] text-left text-[13px] font-medium transition-colors ${
        active
          ? "bg-[#e4e7ed] text-[#1f2328]"
          : "text-[#767c85] hover:bg-[#e9ecf2]"
      }`}
    >
      <Icon
        name={icon}
        className={`h-[16px] w-[16px] shrink-0 ${
          active ? "text-[#22262a]" : "text-[#7f858d]"
        }`}
      />
      <span>{label}</span>
    </button>
  );
}

function SidebarSection({ title, children, className = "" }) {
  return (
    <section className={className}>
      <h2 className="px-[12px] text-[13px] font-medium text-[#777d86]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Sidebar() {
  return (
    <aside className="flex shrink-0 flex-col bg-[#f4f6fa] px-[13px] py-[16px] lg:sticky lg:top-0 lg:h-screen lg:w-[250px] lg:overflow-y-auto">
      <Logo />

      <div className="mt-[22px]">
        <SearchBox />
      </div>

      <nav className="mt-[16px] flex flex-col gap-[3px]">
        <NavButton icon="home" label="Dashboard" active />
        <NavButton icon="folder" label="My files" />
        <NavButton icon="users" label="Shared with me" />
        <NavButton icon="clock" label="Recent" />
      </nav>

      <SidebarSection title="Starred files" className="mt-[31px]">
        <div className="mt-[15px] flex flex-col gap-[15px] px-[12px]">
          {starredFiles.map((file) => (
            <div
              key={file.name}
              className="flex items-center gap-[9px] text-[12px] text-[#69707a]"
            >
              <MiniFileIcon type={file.type} />
              <span className="min-w-0 flex-1 truncate">{file.name}</span>
              <Icon name="star" className="h-[15px] w-[15px] shrink-0 text-[#f0b90b]" />
            </div>
          ))}
        </div>
      </SidebarSection>

      <SidebarSection title="File type" className="mt-[33px]">
        <div className="mt-[18px] flex flex-col gap-[20px] px-[16px]">
          {fileTypeLegend.map((type) => (
            <div
              key={type.label}
              className="flex items-center gap-[12px] text-[13px] text-[#767c85]"
            >
              <span
                className="h-[10px] w-[10px] rounded-full"
                style={{ backgroundColor: type.color }}
              />
              {type.label}
            </div>
          ))}
        </div>
      </SidebarSection>

      <div className="min-h-[28px] flex-1" />

      <nav className="flex flex-col gap-[18px] px-[12px] pb-[3px] text-[#767c85]">
        <button type="button" className="flex items-center gap-[11px] text-left text-[13px] font-medium">
          <Icon name="settings" className="h-[16px] w-[16px]" />
          Settings
        </button>
        <button type="button" className="flex items-center gap-[11px] text-left text-[13px] font-medium">
          <Icon name="trash" className="h-[16px] w-[16px]" />
          Recently deleted
        </button>
        <button type="button" className="flex items-center gap-[11px] text-left text-[13px] font-medium">
          <Icon name="plug" className="h-[16px] w-[16px]" />
          Integrations
        </button>
      </nav>
    </aside>
  );
}

function Avatar() {
  return (
    <div className="relative h-[34px] w-[34px] overflow-hidden rounded-[10px] bg-[#f4c8b7]">
      <div className="absolute left-[7px] top-[0px] h-[25px] w-[25px] rounded-full bg-[radial-gradient(circle_at_48%_42%,#5b3c31_0_34%,transparent_35%)]" />
      <div className="absolute left-[10px] top-[9px] h-[13px] w-[13px] rounded-full bg-[#f4c8b7]" />
      <div className="absolute left-[7px] top-[24px] h-[16px] w-[21px] rounded-t-full bg-[#eaa48f]" />
      <div className="absolute left-[13px] top-[15px] h-[2px] w-[2px] rounded-full bg-[#4a342e]" />
      <div className="absolute left-[20px] top-[15px] h-[2px] w-[2px] rounded-full bg-[#4a342e]" />
      <div className="absolute left-[15px] top-[21px] h-[2px] w-[6px] rounded-full bg-[#bd6f65]" />
    </div>
  );
}

function ActionButton({ icon, label }) {
  return (
    <button
      type="button"
      className="inline-flex h-[34px] items-center justify-center gap-[8px] rounded-[9px] bg-[#ebeef3] px-[14px] text-[13px] font-semibold text-[#22262b] ring-1 ring-[#e1e4ea]"
    >
      <Icon name={icon} className="h-[16px] w-[16px]" strokeWidth={2} />
      {label}
    </button>
  );
}

function FolderIllustration() {
  return (
    <div className="relative h-[108px] w-[122px]">
      {[0, 1, 2, 3, 4].map((layer) => (
        <div
          key={layer}
          className="absolute left-1/2 h-[55px] -translate-x-1/2 rounded-[9px] border border-[#dde3ea] bg-[#f8fafc]"
          style={{
            top: `${10 + layer * 7}px`,
            width: `${75 + layer * 8}px`,
            opacity: 0.92 - layer * 0.07,
          }}
        />
      ))}
      <div className="absolute left-[31px] top-[5px] h-[12px] w-[61px] rounded-t-[5px] bg-[#65758a]" />
      <div className="absolute bottom-[5px] left-[7px] h-[56px] w-[108px] rounded-[10px] bg-[linear-gradient(180deg,#6c7b8e_0%,#8492a2_52%,#536273_100%)]">
        <div className="absolute left-0 top-[-8px] h-[17px] w-[108px] rounded-t-[8px] bg-[#718196]" />
        <div className="absolute left-[15px] top-[-15px] h-[15px] w-[44px] rounded-t-[5px] bg-[#6c7b90]" />
      </div>
    </div>
  );
}

function FolderCard({ folder }) {
  return (
    <article className="flex min-h-[176px] flex-col rounded-[12px] border border-[#dfe3ea] bg-white px-[12px] pb-[16px] pt-[16px]">
      <div className="grid flex-1 place-items-center">
        <FolderIllustration />
      </div>
      <div className="mt-auto">
        <h3 className="text-[14px] font-medium leading-5 text-[#1f2328]">
          {folder.label}
        </h3>
        <p className="mt-[4px] text-[12px] leading-5 text-[#777e87]">
          {folder.count}
        </p>
      </div>
    </article>
  );
}

function StorageOverview() {
  return (
    <section className="overflow-hidden rounded-[12px] border border-[#dfe3ea] bg-white">
      <div className="border-b border-[#e5e7eb] px-[13px] py-[12px] text-[13px] font-medium text-[#777d85]">
        Storage overview
      </div>
      <div className="px-[13px] py-[12px]">
        <p className="flex items-baseline gap-[5px]">
          <strong className="text-[18px] font-semibold text-[#181c20]">13.1GB</strong>
          <span className="text-[12px] text-[#7d838c]">of 25GB</span>
        </p>
        <div className="mt-[11px] flex h-[11px] overflow-hidden rounded-[4px] bg-[#f1f3f6]">
          <span className="w-[69%] bg-[#2F80ED]" />
          <span className="w-[15%] bg-[#F53F45]" />
          <span className="w-[6%] bg-[#EAB308]" />
          <span className="w-[2%] bg-[#25C268]" />
          <span className="flex-1 bg-[#edf1f6]" />
        </div>
        <div className="mt-[14px] grid grid-cols-1 gap-x-[42px] gap-y-[8px] sm:grid-cols-2">
          {storageLegend.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-[8px] text-[12px]"
            >
              <span
                className="h-[10px] w-[10px] rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[#777d85]">{item.label}</span>
              <span className="text-[#777d85]">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#e5e7eb] px-[13px] py-[12px] text-[12px] font-medium text-[#7a8088]">
        54% storage used, review heavy files to organized.
      </div>
    </section>
  );
}

function FolderPill({ label }) {
  return (
    <span className="inline-flex h-[23px] items-center rounded-[7px] bg-[#eef0f3] px-[10px] text-[12px] font-medium text-[#717780]">
      {label}
    </span>
  );
}

function TableHeader() {
  return (
    <div className="grid min-w-[930px] grid-cols-[36px_minmax(330px,1.55fr)_135px_110px_160px_80px] items-center border-b border-[#e5e7eb] bg-[#f7f8fb] px-[12px] py-[10px] text-[13px] font-medium text-[#777d85]">
      <div>
        <span className="block h-[13px] w-[13px] rounded-[3px] border border-[#dde2e8] bg-white" />
      </div>
      <div>Name</div>
      <div>Folder</div>
      <div>Size</div>
      <div>Modified</div>
      <div />
    </div>
  );
}

function FileRow({ file }) {
  return (
    <div className="grid min-w-[930px] grid-cols-[36px_minmax(330px,1.55fr)_135px_110px_160px_80px] items-center border-b border-[#e5e7eb] px-[12px] py-[10px] text-[13px] text-[#1f2328]">
      <div>
        <span className="block h-[14px] w-[14px] rounded-[3px] border border-[#dde2e8] bg-white" />
      </div>
      <div className="flex min-w-0 items-center gap-[11px]">
        <MiniFileIcon type={file.type} />
        <span className="truncate text-[13px] font-medium">{file.name}</span>
      </div>
      <div>
        <FolderPill label={file.folder} />
      </div>
      <div className="font-medium">{file.size}</div>
      <div className="font-medium">{file.modified}</div>
      <div className="flex items-center justify-end gap-[13px]">
        <Icon
          name="star"
          className={`h-[18px] w-[18px] ${
            file.starred ? "text-[#f0b90b]" : "fill-none text-[#8f959d]"
          }`}
          strokeWidth={file.starred ? 1.4 : 1.8}
        />
        <Icon name="more" className="h-[17px] w-[17px] text-[#8f959d]" />
      </div>
    </div>
  );
}

function RecentFiles() {
  return (
    <section className="mt-[16px] overflow-hidden rounded-[12px] border border-[#dfe3ea] bg-white">
      <div className="flex h-[42px] items-center justify-between border-b border-[#e5e7eb] px-[12px]">
        <h2 className="text-[13px] font-medium text-[#777d85]">Recent files</h2>
        <button type="button" className="text-[13px] font-medium text-[#6f7580]">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <TableHeader />
        {recentFiles.map((file) => (
          <FileRow key={file.name} file={file} />
        ))}
      </div>
      <div className="flex min-h-[46px] flex-col gap-3 px-[12px] py-[10px] text-[12px] text-[#777d85] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-[19px]">
          <span>1,290 files</span>
          <span>13.1GB</span>
        </div>
        <div className="flex items-center gap-[7px]">
          <button type="button" aria-label="Previous page" className="flex h-7 w-7 items-center justify-center text-[#848a93]">
            <Icon name="chevron-left" className="h-[15px] w-[15px]" />
          </button>
          {["1", "2", "3", "...", "11", "12"].map((page) => (
            <button
              type="button"
              key={page}
              className={`flex h-7 min-w-7 items-center justify-center rounded-[8px] px-[8px] text-[12px] font-medium ${
                page === "1" ? "bg-[#f0f2f6] text-[#7b818a]" : "text-[#6f7580]"
              }`}
            >
              {page}
            </button>
          ))}
          <button type="button" aria-label="Next page" className="flex h-7 w-7 items-center justify-center text-[#848a93]">
            <Icon name="chevron-right" className="h-[15px] w-[15px]" />
          </button>
        </div>
      </div>
    </section>
  );
}

function TopHeader() {
  return (
    <header className="sticky top-0 z-40 -mx-[18px] flex min-h-[64px] items-start justify-between gap-5 bg-[#f4f6fa] px-[18px] pb-[10px] pt-[14px]">
      <h1 className="pt-[7px] text-[15px] font-semibold text-[#1f2328] lg:text-[16px]">
        Dashboard
      </h1>
      <div className="flex items-center gap-[10px]">
        <button
          type="button"
          aria-label="Notifications"
          className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#eceff4] text-[#1f2328] ring-1 ring-[#e1e4ea]"
        >
          <Icon name="bell" className="h-[16px] w-[16px]" strokeWidth={2} />
        </button>
        <Avatar />
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <div className="min-w-0 flex-1 bg-[#f4f6fa] px-[18px] pb-[14px] lg:h-screen lg:overflow-y-auto">
      <TopHeader />

      <main className="pb-8">
        <section className="mt-[12px] flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-[18px] font-semibold leading-6 text-[#1f2328]">
              Good morning, Bella!
            </h2>
            <p className="mt-[5px] text-[13px] font-medium text-[#858b94]">
              Let's manage all of your online storage.
            </p>
          </div>
          <div className="flex flex-wrap gap-[9px] lg:pt-[2px]">
            <ActionButton icon="upload" label="Upload" />
            <ActionButton icon="plus" label="Create" />
          </div>
        </section>

        <section className="mt-[18px] grid grid-cols-1 gap-[14px] md:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,154px))_minmax(390px,1fr)]">
          {folderCards.map((folder) => (
            <FolderCard key={folder.label} folder={folder} />
          ))}
          <StorageOverview />
        </section>

        <RecentFiles />
      </main>
    </div>
  );
}

export default function NuboPage() {
  return (
    <div className="min-h-screen bg-[#f4f6fa] text-[#1f2328] lg:flex lg:h-screen lg:overflow-hidden">
      <Sidebar />
      <MainContent />
    </div>
  );
}
