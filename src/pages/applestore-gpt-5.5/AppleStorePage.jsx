import catMac from "./assets/cat-mac.webp";
import catIphone from "./assets/cat-iphone.webp";
import catIpad from "./assets/cat-ipad.webp";
import catWatch from "./assets/cat-watch.webp";
import catVision from "./assets/cat-vision.webp";
import catAirpods from "./assets/cat-airpods.webp";
import catAirtag from "./assets/cat-airtag.webp";
import catHomepod from "./assets/cat-homepod.webp";
import catAccessories from "./assets/cat-accessories.webp";
import cardIphonePro from "./assets/card-iphone-pro.webp";
import cardMacbook from "./assets/card-macbook.webp";
import cardWatchBand from "./assets/card-watch-band.webp";
import cardIphone17e from "./assets/card-iphone-17e.webp";
import cardAirpodsPro from "./assets/card-airpods-pro.webp";
import giftBundle from "./assets/gift-bundle.webp";
import magsafeCase from "./assets/magsafe-case.webp";
import lanyard from "./assets/lanyard.webp";
import ipadCover from "./assets/ipad-cover.webp";
import appPhone from "./assets/app-phone.webp";
import avatar from "./assets/avatar.webp";
import "./applestore.css";

const navItems = [
  "商店",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "AirPods",
  "家居",
  "娱乐",
  "配件",
  "技术支持",
];

const categories = [
  { label: "Mac", image: catMac, size: "wide" },
  { label: "iPhone", image: catIphone, size: "phone" },
  { label: "iPad", image: catIpad, size: "tablet" },
  { label: "Apple Watch", image: catWatch, size: "watch" },
  { label: "Apple Vision Pro", image: catVision, size: "vision" },
  { label: "AirPods", image: catAirpods, size: "airpods" },
  { label: "AirTag", image: catAirtag, size: "airtag" },
  { label: "HomePod", image: catHomepod, size: "homepod", active: true },
  { label: "配件", image: catAccessories, size: "accessories" },
];

const newProducts = [
  {
    theme: "dark",
    eyebrow: "",
    title: "iPhone 17 Pro",
    subtitle: "全 Pro 实力进发",
    price: "RMB 375/月 (0% 费率 24 个月分期) 起或 RMB 8999 起",
    image: cardIphonePro,
    className: "iphone-pro",
  },
  {
    eyebrow: "新款",
    title: "MacBook Neo",
    subtitle: "一身 Mac 实力，实打实超值。",
    price: "RMB 192/月 (0% 费率 24 个月分期) 起或 RMB 4599 起",
    image: cardMacbook,
    className: "macbook",
  },
  {
    eyebrow: "新款",
    title: "Apple Watch 彩虹版\n回环式运动表带",
    subtitle: "织就缤纷表带，绽放多彩活力。",
    price: "RMB 379",
    image: cardWatchBand,
    className: "watch-band",
  },
  {
    eyebrow: "新款",
    title: "iPhone 17e",
    subtitle: "本领叠满，超值加持。",
    price: "RMB 187/月 (0% 费率 24 个月分期) 起或 RMB 4499 起",
    image: cardIphone17e,
    className: "iphone-17e",
  },
  {
    eyebrow: "新款",
    title: "AirPods Pro",
    subtitle: "智能功能新加码。",
    price: "RMB 3999",
    image: cardAirpodsPro,
    className: "airpods-pro",
  },
];

const giftProducts = [
  {
    type: "feature",
    eyebrow: "配件",
    title: "让妈妈多一个心头宝",
    image: giftBundle,
  },
  {
    eyebrow: "新款",
    title: "iPhone 17 Pro 专用 MagSafe 硅\n胶保护壳 - 亮番石榴粉色",
    price: "RMB 399",
    image: magsafeCase,
    className: "magsafe",
    swatches: ["#ff6a72", "#f8f2df", "#ecf57b", "#263b4b", "#b66743", "#6a607b"],
  },
  {
    eyebrow: "新款",
    title: "斜挎挂绳 - 浅粉色",
    price: "RMB 479",
    image: lanyard,
    className: "lanyard",
    swatches: ["#f4ddd9", "#e94b5e", "#e7f35a", "#2c3b4b", "#aebdca", "#d1cec6"],
    striped: true,
  },
  {
    title: "智能双面夹 - 适用于 iPad (A16) -\n西瓜红色",
    price: "RMB 599",
    image: ipadCover,
    className: "ipad-cover",
    swatches: ["#9ecae7", "#e8eef1", "#ef4c63", "#ffd65b"],
  },
  {
    type: "app",
    eyebrow: "APPLE STORE APP",
    title: "满分心意，随礼送出。",
    subtitle: "附上一段专门写给他们的个性赠言，送出独一无二的专属好礼。",
    image: appPhone,
  },
];

const confettiTop = [
  ["dot", 0.4, 16, "#ff3b30", 0, 0.65],
  ["squiggle", 3.2, 13, "#f12b65", 7, 1.08],
  ["loop", 6.7, 13, "#ffb642", 14, 0.95],
  ["dot", 12.2, 14, "#ff3b30", 0, 0.58],
  ["crown", 10.6, 18, "#ef6a75", -6, 1],
  ["flower", 1.7, 20.8, "#ef4774", 0, 0.78],
  ["dot", 5.2, 21.5, "#ffd51f", 0, 0.58],
  ["squiggle", 14.6, 21, "#ef4774", 96, 0.9],
  ["dot", 19.1, 22.2, "#ef4774", 0, 0.47],
  ["loop", 22, 15, "#ffd21c", 86, 1.05],
  ["flower", 29.1, 19, "#ef7584", 10, 0.46],
  ["curve", 31.9, 14.2, "#ef4774", 32, 0.85],
  ["wave", 35.3, 17, "#ffd21c", -12, 0.62],
  ["flower", 43.7, 16.2, "#ff7911", 0, 1.02],
  ["dot", 39.3, 17.7, "#ef4774", 0, 0.52],
  ["squiggle", 49.1, 15, "#ef4774", 96, 0.92],
  ["dot", 47.5, 19.7, "#ffd21c", 0, 0.5],
  ["curve", 54.2, 18, "#ff6a1f", 5, 0.62],
  ["loop", 58.5, 13.7, "#ef6a97", 14, 0.82],
  ["dot", 57.2, 16, "#ffd21c", 0, 0.48],
  ["flower", 60.6, 22.5, "#ef7f80", 0, 0.42],
  ["crown", 62.9, 14.7, "#ffd42a", -10, 0.85],
  ["squiggle", 66.2, 14.6, "#f03863", -8, 1.08],
  ["dot", 72.3, 21.5, "#ef4774", 0, 0.53],
  ["flower", 69.6, 15.4, "#f0710f", 0, 0.77],
  ["loop", 76.2, 18.8, "#ffb642", 28, 0.7],
  ["crown", 79.5, 17.4, "#f06474", 0, 0.82],
  ["squiggle", 84.9, 13.3, "#ef4774", 98, 0.83],
  ["flower", 88.2, 15.6, "#ef7f80", 0, 0.42],
  ["flower", 92.5, 17.2, "#ffd31d", 0, 0.8],
  ["curve", 97.1, 15.6, "#ef6a75", 150, 0.58],
];

const confettiBottom = [
  ["flower", -1.5, 10, "#f04d78", 0, 0.7],
  ["dot", 2.8, 16, "#f04d78", 0, 0.5],
  ["crown", 4.1, 28, "#ffd31d", 12, 0.74],
  ["curve", 3.4, 50, "#f15b27", -18, 0.72],
  ["squiggle", 6, 71, "#f05258", 84, 0.78],
  ["crown", 4.5, 89, "#ef6a68", 0, 0.96],
  ["wave", 12.8, 96, "#ffd31d", 0, 1.05],
  ["dot", 18.3, 6, "#ffd31d", 0, 0.55],
  ["flower", 27, 5, "#ef5280", 0, 0.78],
  ["loop", 35.3, 0, "#ffb642", 180, 0.9],
  ["dot", 37.2, 8, "#ef4774", 0, 0.45],
  ["crown", 50.1, 2, "#ef6a68", 0, 0.62],
  ["dot", 61.8, 6, "#ff3b30", 0, 0.48],
  ["flower", 68.6, 4, "#f06272", 0, 0.8],
  ["dot", 75.8, 7, "#ffd31d", 0, 0.52],
  ["squiggle", 84.4, 3, "#ef4774", 100, 0.86],
  ["dot", 91.2, 10, "#f04d78", 0, 0.5],
  ["flower", 96, 7, "#ff7911", 0, 0.58],
  ["loop", 34.5, 97, "#ff6c11", 34, 1.03],
  ["flower", 42.8, 86, "#f06272", 0, 0.78],
  ["dot", 46.2, 88, "#ef4774", 0, 0.5],
  ["crown", 50.5, 85, "#ffd31d", 0, 0.94],
  ["flower", 55.9, 87, "#f36b15", 0, 0.74],
  ["dot", 63.7, 92, "#ffd31d", 0, 0.5],
  ["squiggle", 67.7, 78, "#ef4774", 92, 0.82],
  ["flower", 73.1, 83, "#ef5574", 0, 0.75],
  ["loop", 79.2, 91, "#ffbb36", 48, 0.68],
  ["flower", 86, 90, "#ff7911", 0, 0.58],
  ["crown", 93.9, 85, "#ef6a68", 0, 0.82],
  ["dot", 98.6, 93, "#f04d78", 0, 0.48],
];

function AppleLogo() {
  return (
    <svg className="as-icon as-apple-logo" viewBox="0 0 18 22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.93 11.64c-.03-3 2.46-4.45 2.57-4.51-1.41-2.06-3.58-2.34-4.34-2.37-1.83-.19-3.61 1.1-4.54 1.1-.95 0-2.39-1.08-3.95-1.05-2.01.03-3.89 1.2-4.92 3.02-2.1 3.64-.54 8.98 1.48 11.92.99 1.42 2.14 3.01 3.68 2.96 1.5-.06 2.06-.95 3.87-.95 1.8 0 2.32.95 3.9.92 1.61-.03 2.63-1.43 3.58-2.86 1.14-1.63 1.59-3.24 1.61-3.32-.04-.01-3.07-1.17-3.1-4.86ZM11.97 2.82C12.77 1.82 13.31.47 13.16-.9c-1.16.05-2.62.8-3.45 1.77-.74.86-1.41 2.27-1.24 3.58 1.31.1 2.67-.65 3.5-1.63Z"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="as-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.7" stroke="currentColor" strokeWidth="1.9" />
      <path d="m15.8 15.8 4.5 4.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.9" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg className="as-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.8 8.2h10.4l.7 12.2H6.1L6.8 8.2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.75" />
      <path d="M9.2 8.1V6.4a2.8 2.8 0 0 1 5.6 0v1.7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.75" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg className="as-link-icon" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M3 3h6v6M8.8 3.2 3 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="as-chevron" viewBox="0 0 20 34" fill="none" aria-hidden="true">
      <path d="m3.5 3.5 13 13.5-13 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
    </svg>
  );
}

function ConfettiIcon({ type }) {
  if (type === "dot") {
    return <circle cx="16" cy="16" r="7" fill="currentColor" />;
  }
  if (type === "flower") {
    return (
      <>
        <path
          d="M16 5.5c3.2 0 4 3.5 2.1 5.5 2.7-1.1 5.9.8 5.9 3.9 0 3.2-3.4 4.2-5.5 2.4 1.4 2.6-.1 6.2-3.3 6.2-3.4 0-4.4-3.6-2.7-5.6-2.7 1.3-6.3-.2-6.3-3.5 0-3 3.2-4.1 5.4-2.6C9.8 9.4 12.2 5.5 16 5.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.8"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="15.5" r="3.2" fill="none" stroke="currentColor" strokeWidth="3.4" />
      </>
    );
  }
  if (type === "squiggle") {
    return <path d="M16 3c-8 2-8 9-.5 11s7.2 9-.8 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="5.4" />;
  }
  if (type === "loop") {
    return <path d="M6 9c7-8 18-3 14 5-3 5-12 2-7-4 5-5 12 2 8 10-2 4-6 6-11 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4.7" />;
  }
  if (type === "crown") {
    return <path d="M8 10c1 9 15 9 16 0M8 10c2 2 4.5 2.9 8 2.9S22 12 24 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="5.1" />;
  }
  if (type === "wave") {
    return <path d="M6 20c2-9 7-9 10 0 3 9 8 9 10 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="5.3" />;
  }
  return <path d="M9 6c9 4 10 11 1 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="5.2" />;
}

function ConfettiField({ items, className = "" }) {
  return (
    <div className={`as-confetti-field ${className}`} aria-hidden="true">
      {items.map(([type, left, top, color, rotate, scale], index) => (
        <svg
          key={`${type}-${index}`}
          className={`as-confetti as-confetti-${type}`}
          style={{
            left: `${left}%`,
            top: `${top}%`,
            color,
            transform: `rotate(${rotate}deg) scale(${scale})`,
          }}
          viewBox="0 0 32 32"
        >
          <ConfettiIcon type={type} />
        </svg>
      ))}
    </div>
  );
}

function ProductNav() {
  return (
    <div className="as-category-wrap">
      <div className="as-category-strip" aria-label="产品分类">
        {categories.map((item) => (
          <a className={`as-category as-category-${item.size}`} href="#new-products" key={item.label}>
            <span className="as-category-image">
              <img src={item.image} alt="" />
            </span>
            <span className={item.active ? "is-active" : ""}>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="as-nav">
      <nav className="as-nav-inner" aria-label="全站导航">
        <a className="as-nav-logo" href="#top" aria-label="Apple">
          <AppleLogo />
        </a>
        {navItems.map((item) => (
          <a href="#new-products" key={item}>
            {item}
          </a>
        ))}
        <button className="as-icon-button" aria-label="搜索">
          <SearchIcon />
        </button>
        <button className="as-icon-button" aria-label="购物袋">
          <BagIcon />
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="as-hero" id="top">
      <ConfettiField items={confettiTop} className="as-confetti-top" />
      <div className="as-hero-copy">
        <h1>商店</h1>
        <div className="as-help">
          <h2>好礼送上，灿烂母亲节。</h2>
          <a href="#gift-products">
            联系 Specialist 专家 <ArrowUpRight />
          </a>
          <a href="#gift-products">
            查找 Apple Store 零售店 <ArrowUpRight />
          </a>
        </div>
      </div>
      <ProductNav />
    </section>
  );
}

function SectionHeading({ accent, children }) {
  return (
    <h2 className="as-section-heading">
      <span>{accent}</span>
      {children}
    </h2>
  );
}

function NewProductCard({ product }) {
  const titleLines = product.title.split("\n");
  return (
    <article className={`as-product-card as-new-card ${product.theme === "dark" ? "is-dark" : ""} as-card-${product.className}`}>
      <div className="as-product-copy">
        {product.eyebrow ? <p className="as-eyebrow">{product.eyebrow}</p> : null}
        <h3>
          {titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h3>
        <p className="as-subtitle">{product.subtitle}</p>
        <p className="as-price">{product.price}</p>
      </div>
      <img className="as-product-media" src={product.image} alt="" />
    </article>
  );
}

function Swatches({ colors, striped }) {
  return (
    <div className="as-swatches" aria-hidden="true">
      {colors.map((color, index) => (
        <span
          className={striped ? "is-striped" : ""}
          key={`${color}-${index}`}
          style={{
            background: striped
              ? `repeating-linear-gradient(90deg, ${color} 0 2px, rgba(255,255,255,.55) 2px 4px)`
              : color,
          }}
        />
      ))}
      <small>+</small>
    </div>
  );
}

function GiftCard({ product }) {
  if (product.type === "feature") {
    return (
      <article className="as-product-card as-gift-card as-gift-feature">
        <div className="as-gift-copy">
          <p className="as-small-label">{product.eyebrow}</p>
          <h3>{product.title}</h3>
        </div>
        <img src={product.image} alt="" />
      </article>
    );
  }

  if (product.type === "app") {
    return (
      <article className="as-product-card as-gift-card as-app-card">
        <div className="as-app-copy">
          <p>{product.eyebrow}</p>
          <h3>{product.title}</h3>
          <span>{product.subtitle}</span>
        </div>
        <img src={product.image} alt="" />
        <button className="as-card-arrow" aria-label="下一项">
          <ChevronRight />
        </button>
      </article>
    );
  }

  const titleLines = product.title.split("\n");
  return (
    <article className={`as-product-card as-gift-card as-card-${product.className}`}>
      <div className="as-gift-media">
        <img src={product.image} alt="" />
      </div>
      <Swatches colors={product.swatches} striped={product.striped} />
      <div className="as-gift-bottom">
        {product.eyebrow ? <p className="as-eyebrow">{product.eyebrow}</p> : null}
        <h3>
          {titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h3>
        <p className="as-price">{product.price}</p>
      </div>
    </article>
  );
}

function NewProducts() {
  return (
    <section className="as-section as-new-products" id="new-products">
      <SectionHeading accent="上新了，">快来认识一下这些新朋友。</SectionHeading>
      <div className="as-carousel as-new-carousel">
        {newProducts.map((product) => (
          <NewProductCard product={product} key={product.title} />
        ))}
        <button className="as-carousel-arrow" aria-label="下一项">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

function GiftProducts() {
  return (
    <section className="as-section as-gift-products" id="gift-products">
      <ConfettiField items={confettiBottom} className="as-confetti-bottom" />
      <SectionHeading accent="母亲节精选好礼。">款款爱意满满。</SectionHeading>
      <div className="as-carousel as-gift-carousel">
        {giftProducts.map((product) => (
          <GiftCard product={product} key={product.title} />
        ))}
      </div>
    </section>
  );
}

function ChatAvatar() {
  return (
    <button className="as-chat" aria-label="联系 Apple Specialist 专家">
      <img src={avatar} alt="" />
    </button>
  );
}

export default function AppleStorePage() {
  return (
    <main className="as-page">
      <div className="as-stage">
        <Header />
        <Hero />
        <NewProducts />
        <GiftProducts />
        <ChatAvatar />
      </div>
    </main>
  );
}
