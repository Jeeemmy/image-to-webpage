import MobileStatusBar from "../../framework/MobileStatusBar.jsx";
import avatarImage from "./assets/avatar.png";
import categoryPlumberImage from "./assets/category-plumber.png";
import categoryHammerImage from "./assets/category-hammer.png";
import categoryElectricImage from "./assets/category-electric.png";
import categoryCarpenterImage from "./assets/category-carpenter.png";
import categoryRoofImage from "./assets/category-roof.png";
import promoCleanerImage from "./assets/promo-cleaner.png";
import serviceCleanerImage from "./assets/service-cleaner.png";

const categories = [
  { label: "Plumber", image: categoryPlumberImage, active: true },
  { label: "Painting", image: categoryHammerImage },
  { label: "Electric", image: categoryElectricImage },
  { label: "Carpenter", image: categoryCarpenterImage },
  { label: "Repair", image: categoryRoofImage },
];

const services = [
  {
    discount: "35%",
    discountSuffix: "off",
    title: "Quick Home Cleaning Service",
    image: serviceCleanerImage,
    favorite: true,
  },
  {
    discount: "40%",
    discountSuffix: "off",
    title: "Quick Home Cleaning Service",
    image: serviceCleanerImage,
    favorite: false,
  },
];

function Icon({ name, className = "", strokeWidth = 2 }) {
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
          <circle cx="10.8" cy="10.8" r="6.6" />
          <path d="m16.2 16.2 4.1 4.1" />
        </svg>
      );
    case "sliders":
      return (
        <svg {...common}>
          <path d="M4 7h9" />
          <circle cx="16.5" cy="7" r="2.25" fill="currentColor" stroke="currentColor" />
          <path d="M18.8 7H20" />
          <path d="M4 17h3" />
          <circle cx="10.5" cy="17" r="2.25" fill="currentColor" stroke="currentColor" />
          <path d="M12.8 17H20" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common} fill="currentColor" stroke="currentColor">
          <path d="M18 10.2a6 6 0 0 0-12 0c0 4.9-2.1 6.1-2.1 6.1h16.2S18 15.1 18 10.2Z" />
          <path d="M9.4 19.2a2.8 2.8 0 0 0 5.2 0" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <path d="M7 3.5v4M17 3.5v4" />
          <path d="M4.5 8h15" />
          <path d="M5.5 5.5h13a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19V7a1.5 1.5 0 0 1 1.5-1.5Z" />
          <path d="M8 11.5h2.2M12.9 11.5H15M8 15.5h2.2M12.9 15.5H15" />
        </svg>
      );
    case "home":
      return (
        <svg {...common} fill="currentColor" stroke="currentColor">
          <path d="m3.5 11.1 8.5-7.2 8.5 7.2-1.5 1.8-1.4-1.2v7.9h-4.1v-5.2H10v5.2H5.9v-7.9l-1.4 1.2Z" />
        </svg>
      );
    case "message":
      return (
        <svg {...common} fill="currentColor" stroke="currentColor">
          <path d="M5.5 5.2h13a1.7 1.7 0 0 1 1.7 1.7v8.7a1.7 1.7 0 0 1-1.7 1.7H9.4l-4.6 3v-3.4a1.7 1.7 0 0 1-1-1.6V6.9a1.7 1.7 0 0 1 1.7-1.7Z" />
          <path d="M8 9.6h8M8 13h5" stroke="#ffffff" strokeWidth="1.7" />
        </svg>
      );
    case "user":
      return (
        <svg {...common} fill="currentColor" stroke="currentColor">
          <circle cx="12" cy="8.4" r="3.2" />
          <path d="M5.5 20c.7-4.2 3-6.2 6.5-6.2s5.8 2 6.5 6.2Z" />
        </svg>
      );
    case "bag":
      return (
        <svg {...common}>
          <path d="M6.2 8.5h11.6l-1 11H7.2Z" />
          <path d="M9 8.5a3 3 0 0 1 6 0" />
          <path d="m10.3 13.1 1.4 1.4 3-3" />
        </svg>
      );
    default:
      return null;
  }
}

function Header() {
  return (
    <header className="px-[12px] pt-[6px]">
      <div className="flex items-start justify-between">
        <div className="pt-[3px]">
          <p className="text-[18px] font-semibold leading-[1.15] text-[#293231]">Hello,</p>
          <h1 className="mt-[7px] text-[26px] font-extrabold leading-[1.03] text-[#001714]">
            Koushik Sarkar!
          </h1>
        </div>
        <div className="flex h-[52px] w-[99px] items-center justify-between border border-[#d8d2ce] bg-[#eeeae7] pl-[20px] pr-[3px]">
          <Icon name="bell" className="h-[20px] w-[20px] text-black" strokeWidth={1.7} />
          <img className="h-[45px] w-[45px] object-cover" src={avatarImage} alt="" />
        </div>
      </div>
    </header>
  );
}

function SearchBar() {
  return (
    <section className="px-[12px] pt-[31px]">
      <div className="flex h-[51px] items-center bg-white px-[14px] text-[#031411]">
        <Icon name="search" className="h-[28px] w-[28px] text-[#c5c5c5]" strokeWidth={2.1} />
        <span className="ml-[13px] text-[17px] font-semibold leading-none text-[#3c4240]">
          Search...
        </span>
        <Icon name="sliders" className="ml-auto h-[29px] w-[29px] text-[#001714]" strokeWidth={2.3} />
      </div>
    </section>
  );
}

function CategoryScroller() {
  return (
    <section className="mt-[23px] overflow-hidden">
      <div className="flex gap-[16px] overflow-x-auto px-[12px] pb-[8px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) =>
          category.active ? (
            <button
              className="flex h-[49px] shrink-0 items-center bg-[#008253] pl-[5px] pr-[22px] text-white"
              key={category.label}
              type="button"
            >
              <img
                className="h-[39px] w-[39px] border border-white/80 object-cover"
                src={category.image}
                alt=""
              />
              <span className="ml-[14px] text-[17px] font-bold leading-none">
                {category.label}
              </span>
            </button>
          ) : (
            <button className="h-[49px] w-[50px] shrink-0 overflow-hidden bg-white" key={category.label} type="button">
              <img className="h-full w-full object-cover" src={category.image} alt="" />
            </button>
          ),
        )}
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="relative mx-[12px] mt-[14px] h-[181px]">
      <div className="absolute left-[7px] right-[10px] top-[1px] h-[179px] rotate-[-1.9deg] bg-[#435f54]" />
      <div className="absolute inset-x-[4px] top-[11px] h-[166px] rotate-[1.7deg] bg-[#006743]" />
      <div className="relative h-[170px] overflow-hidden bg-gradient-to-r from-[#005236] via-[#006640] to-[#008354]">
        <div className="relative z-10 pl-[25px] pt-[31px] text-white">
          <div className="flex items-end gap-[8px]">
            <span className="text-[27px] font-extrabold leading-none">30%</span>
            <span className="pb-[3px] text-[14px] font-semibold uppercase leading-none tracking-0">
              OFF
            </span>
          </div>
          <p className="mt-[10px] text-[18px] font-medium leading-none text-white/82">
            Smart Home Service
          </p>
          <button
            className="mt-[33px] flex h-[40px] w-[135px] items-center justify-center gap-[11px] bg-white text-[16px] font-extrabold leading-none text-[#111817]"
            type="button"
          >
            <Icon name="calendar" className="h-[18px] w-[18px] text-[#001714]" strokeWidth={2.3} />
            Book Now
          </button>
        </div>
        <img
          className="absolute bottom-[-1px] right-[0px] h-[171px] w-[168px] object-contain object-bottom"
          src={promoCleanerImage}
          alt=""
        />
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="relative h-[253px] w-[328px] shrink-0 overflow-hidden bg-white">
      <div className="absolute left-[14px] top-[24px] z-20 flex items-baseline gap-[6px] text-black">
        <span className="text-[24px] font-extrabold leading-none">{service.discount}</span>
        <span className="text-[17px] font-medium leading-none">{service.discountSuffix}</span>
      </div>
      <button
        className="absolute right-[16px] top-[20px] z-20 flex h-[39px] w-[40px] items-center justify-center bg-[#eeeae7]"
        type="button"
        aria-label="Favorite"
      >
        <span className="text-[21px] leading-none text-[#ff100b]">{service.favorite ? "♥" : "♡"}</span>
      </button>
      <img
        className="absolute bottom-[24px] left-[56px] h-[213px] w-[207px] object-contain object-bottom"
        src={service.image}
        alt=""
      />
      <div className="absolute inset-x-0 bottom-0 h-[80px] bg-gradient-to-t from-white via-white/92 to-white/0" />
      <h2 className="absolute bottom-[15px] left-[14px] z-20 w-[177px] text-[15px] font-extrabold leading-[1.22] text-[#050f0d]">
        {service.title}
      </h2>
      <button
        className="absolute bottom-[12px] right-[17px] z-20 flex h-[37px] w-[112px] items-center justify-center bg-[#008253] text-[14px] font-bold leading-none text-white"
        type="button"
      >
        <span className="mr-[10px] flex h-[24px] w-[25px] items-center justify-center bg-white text-[#001714]">
          <Icon name="bag" className="h-[16px] w-[16px]" strokeWidth={2.2} />
        </span>
        Book Now
      </button>
    </article>
  );
}

function ServiceScroller() {
  return (
    <section className="mt-[24px] overflow-hidden pb-[110px]">
      <div className="flex gap-[15px] overflow-x-auto px-[12px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {services.map((service, index) => (
          <ServiceCard key={`${service.discount}-${index}`} service={service} />
        ))}
      </div>
    </section>
  );
}

function BottomNav() {
  const items = [
    { name: "home", active: true },
    { name: "calendar" },
    { name: "message" },
    { name: "user" },
  ];

  return (
    <nav className="fixed bottom-[39px] left-1/2 z-50 flex h-[61px] w-[236px] -translate-x-1/2 bg-white" aria-label="Primary">
      {items.map((item) => (
        <button
          className={`flex h-full flex-1 items-center justify-center border-r border-[#f1eeee] last:border-r-0 ${
            item.active ? "bg-[#001f1a] text-white" : "bg-white text-[#001714]"
          }`}
          key={item.name}
          type="button"
          aria-label={item.name}
        >
          <Icon name={item.name} className="h-[21px] w-[21px]" strokeWidth={2.4} />
        </button>
      ))}
    </nav>
  );
}

export default function HomeserviceSinglePage() {
  return (
    <main className="min-h-screen bg-[#eeeae7] text-[#001714]">
      <div className="mx-auto min-h-screen w-full max-w-[414px] overflow-hidden bg-[#eeeae7]">
        <MobileStatusBar tone="dark" />
        <Header />
        <SearchBar />
        <CategoryScroller />
        <PromoBanner />
        <ServiceScroller />
        <BottomNav />
      </div>
    </main>
  );
}
