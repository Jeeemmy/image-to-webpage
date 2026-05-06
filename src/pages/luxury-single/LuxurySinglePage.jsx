import MobileStatusBar from "../../framework/MobileStatusBar.jsx";
import ringImage from "./assets/diamond-ring.png";
import "./LuxurySinglePage.css";

const PRICE_FONT_STACK =
  'Didot, "Bodoni 72", "Bodoni 72 Oldstyle", "Times New Roman", Georgia, serif';

const BODY_FONT_STACK = 'Georgia, "Times New Roman", serif';

const sizeOptions = [
  { label: "Small 16", className: "luxury-size-option--small-16" },
  { label: "Small 18", className: "luxury-size-option--small-18" },
  { label: "Medium 20", className: "luxury-size-option--medium-20" },
  { label: "Large 22", className: "luxury-size-option--large-22" },
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
    case "arrow-left":
      return (
        <svg {...common}>
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      );
    case "heart":
      return (
        <svg
          aria-hidden="true"
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.1 10.5 19.8C5.2 15.1 1.8 12.1 1.8 8.4 1.8 5.4 4.2 3 7.2 3c1.7 0 3.4.8 4.5 2.1C12.8 3.8 14.5 3 16.2 3c3 0 5.4 2.4 5.4 5.4 0 3.7-3.4 6.7-8.7 11.4L12 21.1Z" />
        </svg>
      );
    case "star":
      return (
        <svg
          aria-hidden="true"
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="m12 2.7 2.6 5.5 6 .8-4.4 4.2 1.1 5.9-5.3-2.8-5.3 2.8 1.1-5.9L3.4 9l6-.8L12 2.7Z" />
        </svg>
      );
    case "zoom-out":
      return (
        <svg {...common}>
          <circle cx="10.8" cy="10.8" r="6.5" />
          <path d="m15.6 15.6 4.2 4.2" />
          <path d="M7.8 10.8h6" />
        </svg>
      );
    case "zoom-in":
      return (
        <svg {...common}>
          <circle cx="10.8" cy="10.8" r="6.5" />
          <path d="m15.6 15.6 4.2 4.2" />
          <path d="M7.8 10.8h6" />
          <path d="M10.8 7.8v6" />
        </svg>
      );
    default:
      return null;
  }
}

function TopNavigation() {
  return (
    <nav aria-label="Product" className="luxury-nav">
      <button
        aria-label="Back"
        className="luxury-nav-button luxury-nav-button--back"
        type="button"
      >
        <Icon name="arrow-left" className="luxury-icon luxury-icon--nav" strokeWidth={1.9} />
      </button>
      <button
        aria-label="Favorite"
        className="luxury-nav-button luxury-nav-button--favorite"
        type="button"
      >
        <Icon name="heart" className="luxury-icon luxury-icon--heart" />
      </button>
    </nav>
  );
}

function Gallery() {
  return (
    <section
      className="luxury-gallery"
      aria-label="Product images"
    >
      <div className="luxury-gallery-warm-floor" />
      <img
        alt="Diamond ring"
        className="luxury-gallery-image"
        draggable="false"
        src={ringImage}
      />
      <button
        aria-label="Previous image"
        className="luxury-gallery-arrow luxury-gallery-arrow--prev"
        type="button"
      >
        <Icon name="arrow-left" className="luxury-icon luxury-icon--gallery-arrow" strokeWidth={1.8} />
      </button>
      <button
        aria-label="Next image"
        className="luxury-gallery-arrow luxury-gallery-arrow--next"
        type="button"
      >
        <Icon name="arrow-right" className="luxury-icon luxury-icon--gallery-arrow" strokeWidth={1.8} />
      </button>
      <div
        aria-hidden="true"
        className="luxury-pagination"
      >
        <span className="luxury-pagination-bar luxury-pagination-bar--active" />
        <span className="luxury-pagination-bar" />
        <span className="luxury-pagination-bar" />
      </div>
      <div
        className="luxury-zoom-controls"
        role="group"
        aria-label="Image zoom"
      >
        <button
          aria-label="Zoom out"
          className="luxury-zoom-button luxury-zoom-button--first"
          type="button"
        >
          <Icon name="zoom-out" className="luxury-icon luxury-icon--zoom" strokeWidth={1.75} />
        </button>
        <button
          aria-label="Zoom in"
          className="luxury-zoom-button"
          type="button"
        >
          <Icon name="zoom-in" className="luxury-icon luxury-icon--zoom" strokeWidth={1.75} />
        </button>
      </div>
    </section>
  );
}

function ProductSummary() {
  return (
    <section className="luxury-summary">
      <div className="luxury-price-row">
        <span
          className="luxury-price luxury-price--current"
          style={{
            fontFamily: PRICE_FONT_STACK,
            fontVariantNumeric: "lining-nums proportional-nums",
            letterSpacing: 0,
          }}
        >
          $615.99
        </span>
        <span
          className="luxury-price luxury-price--original"
          style={{
            fontFamily: PRICE_FONT_STACK,
            fontVariantNumeric: "lining-nums proportional-nums",
            letterSpacing: 0,
          }}
        >
          $700.00
        </span>
      </div>
      <div className="luxury-product-row">
        <h1 className="luxury-product-title">
          Diamond Ring
        </h1>
        <div className="luxury-rating">
          <Icon name="star" className="luxury-icon luxury-icon--star" />
          <span className="luxury-rating-text">
            4.9 (985 reviews)
          </span>
        </div>
      </div>
    </section>
  );
}

function RingSize() {
  return (
    <section className="luxury-section luxury-ring-size">
      <h2 className="luxury-section-title">Ring Size</h2>
      <div className="luxury-size-options">
        {sizeOptions.map((option) => (
          <button
            className={`luxury-size-option ${option.className}`}
            key={option.label}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
}

function Description() {
  return (
    <section className="luxury-section luxury-description">
      <h2 className="luxury-section-title">Description</h2>
      <p className="luxury-description-copy">
        Sleek modern dual-band ring with intertwined curves white and rose gold,
        featuring two brilliant diamonds in a clean minimal setting{" "}
        <a className="luxury-description-link" href="#">
          See All...
        </a>
      </p>
    </section>
  );
}

function BuyNowButton() {
  return (
    <button
      className="luxury-buy-button"
      type="button"
    >
      Buy Now
    </button>
  );
}

export default function LuxurySinglePage() {
  return (
    <main
      className="luxury-page"
      style={{ fontFamily: BODY_FONT_STACK }}
    >
      <div className="luxury-phone">
        <div className="luxury-chrome">
          <MobileStatusBar tone="dark" />
          <TopNavigation />
        </div>
        <div className="luxury-scroll">
          <Gallery />
          <ProductSummary />
          <RingSize />
          <Description />
          <BuyNowButton />
        </div>
      </div>
    </main>
  );
}
