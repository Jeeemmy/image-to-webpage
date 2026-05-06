import MobileStatusBar from "../../framework/MobileStatusBar.jsx";
import heroImage from "./assets/wedding-hero-clean.png";
import hostAvatarImage from "./assets/host-avatar.png";
import reviewerOneImage from "./assets/reviewer-1.png";
import reviewerTwoImage from "./assets/reviewer-2.png";
import reviewerThreeImage from "./assets/reviewer-3.png";
import "./WeddingSinglePage.css";

const BODY_FONT_STACK =
  '"SF Pro Text", "SF Pro Display", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const facilities = [
  { label: "Free wifi", icon: "wifi" },
  { label: "parking", icon: "car" },
  { label: "Fitness (c)", icon: "fitness" },
  { label: "Hot tub", icon: "tub" },
  { label: "Party hall", icon: "hall" },
];

const reviewerImages = [
  reviewerOneImage,
  reviewerTwoImage,
  reviewerThreeImage,
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
          <path d="m14.5 5-7 7 7 7" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M20.7 8.5c0 5.3-8.7 10.5-8.7 10.5S3.3 13.8 3.3 8.5A4.4 4.4 0 0 1 7.7 4c1.7 0 3.2.9 4.3 2.2C13.1 4.9 14.6 4 16.3 4a4.4 4.4 0 0 1 4.4 4.5Z" />
        </svg>
      );
    case "share":
      return (
        <svg {...common}>
          <circle cx="18" cy="5.2" r="2.3" />
          <circle cx="6.2" cy="12" r="2.3" />
          <circle cx="18" cy="18.8" r="2.3" />
          <path d="m8.3 10.9 7.6-4.4" />
          <path d="m8.3 13.1 7.6 4.4" />
        </svg>
      );
    case "wifi":
      return (
        <svg {...common}>
          <path d="M5.2 10.1a10.2 10.2 0 0 1 13.6 0" />
          <path d="M8.4 13.1a5.4 5.4 0 0 1 7.2 0" />
          <path d="M11.4 16.1a1 1 0 0 1 1.2 0" />
        </svg>
      );
    case "car":
      return (
        <svg {...common}>
          <path d="m5.1 14.1 1.8-4.4a2.1 2.1 0 0 1 2-1.4h5.7a2.1 2.1 0 0 1 2 1.3l2 4.5" />
          <path d="M4.6 14.2h14.8v3.3H4.6Z" />
          <path d="M7.2 17.5v1.4" />
          <path d="M16.8 17.5v1.4" />
          <circle cx="8.1" cy="14.2" r="1" />
          <circle cx="15.9" cy="14.2" r="1" />
        </svg>
      );
    case "fitness":
      return (
        <svg {...common}>
          <path d="M15.9 4.7c-1.4 3.2-3.2 5.8-5.6 7.8" />
          <path d="M9 13.6c2.4.7 5-.2 6.6-2.1" />
          <path d="M10.6 8.5c.8 1.6 2.3 2.7 4.6 3.2" />
          <path d="M8.8 13.7 6.2 17" />
          <path d="M12.6 14.1 10.4 19" />
        </svg>
      );
    case "tub":
      return (
        <svg {...common}>
          <path d="M5.5 11.2h13.2v3.1a4.1 4.1 0 0 1-4.1 4.1h-5a4.1 4.1 0 0 1-4.1-4.1v-3.1Z" />
          <path d="M4.1 11.2h16" />
          <path d="M7.3 11.2V6.6a2 2 0 0 1 3.6-1.2" />
          <path d="M9.9 6.8h3" />
          <path d="m8 18.4-.9 1.6" />
          <path d="m16 18.4.9 1.6" />
        </svg>
      );
    case "hall":
      return (
        <svg {...common}>
          <path d="M5 6.8h14" />
          <path d="M6.5 6.8v12" />
          <path d="M10.2 6.8v12" />
          <path d="M13.8 6.8v12" />
          <path d="M17.5 6.8v12" />
          <path d="M4.5 18.8h15" />
          <path d="M7.8 4.5h8.4" />
          <path d="M12 3.3v3.5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M6.4 6.2h11.2a2.8 2.8 0 0 1 2.8 2.8v5.7a2.8 2.8 0 0 1-2.8 2.8H11l-4.7 3v-3.1a2.8 2.8 0 0 1-2.7-2.8V9a2.8 2.8 0 0 1 2.8-2.8Z" />
          <path d="M8.2 10.3h7.6" />
          <path d="M8.2 13.5h4.7" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M7.6 4.5 10 8.9 8.6 10.4c1 2.2 2.8 4 5 5l1.5-1.4 4.4 2.4c-.2 1.5-1.4 3.1-3 3.1C9.9 19.5 4.5 14.1 4.5 7.5c0-1.6 1.6-2.8 3.1-3Z" />
        </svg>
      );
    case "star":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="m12 2.7 2.7 5.4 6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6L3.3 9l6-.9L12 2.7Z" />
        </svg>
      );
    default:
      return null;
  }
}

function TopChrome() {
  return (
    <div className="wedding-chrome">
      <MobileStatusBar tone="light" />
      <button
        aria-label="Back"
        className="wedding-top-button wedding-top-button--back"
        type="button"
      >
        <Icon name="arrow-left" className="wedding-icon wedding-icon--top" strokeWidth={2.25} />
      </button>
      <div className="wedding-actions">
        <button
          aria-label="Save venue"
          className="wedding-top-button"
          type="button"
        >
          <Icon name="heart" className="wedding-icon wedding-icon--top" strokeWidth={1.9} />
        </button>
        <button
          aria-label="Share venue"
          className="wedding-top-button"
          type="button"
        >
          <Icon name="share" className="wedding-icon wedding-icon--share" strokeWidth={2.15} />
        </button>
      </div>
    </div>
  );
}

function ReviewSummary() {
  return (
    <div className="wedding-review-row">
      <div className="wedding-reviewers" aria-label="People reviewed">
        {reviewerImages.map((image, index) => (
          <img
            alt=""
            className="wedding-reviewer"
            key={image}
            src={image}
            style={{ zIndex: index + 1 }}
          />
        ))}
        <span className="wedding-reviewer wedding-reviewer--count">25+</span>
      </div>
      <span className="wedding-review-copy">People reviewed</span>
      <div className="wedding-rating" aria-label="Rating 4.8 out of 5">
        <Icon name="star" className="wedding-icon wedding-icon--star" />
        <span className="wedding-rating-value">4.8</span>
        <span className="wedding-rating-max">/5</span>
      </div>
    </div>
  );
}

function FacilityList() {
  return (
    <section className="wedding-facilities">
      <h2 className="wedding-section-title">Most popular facilities</h2>
      <div className="wedding-facility-row">
        {facilities.map((facility) => (
          <article className="wedding-facility-card" key={facility.label}>
            <Icon
              name={facility.icon}
              className="wedding-icon wedding-icon--facility"
              strokeWidth={1.75}
            />
            <span className="wedding-facility-label">{facility.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactCard() {
  return (
    <section className="wedding-contact-card" aria-label="Receptionist contact">
      <img alt="" className="wedding-host-avatar" src={hostAvatarImage} />
      <div className="wedding-host-copy">
        <h2 className="wedding-host-name">Josep Colins</h2>
        <p className="wedding-host-role">Receptionist</p>
      </div>
      <div className="wedding-contact-actions">
        <button aria-label="Message Josep Colins" className="wedding-contact-button" type="button">
          <Icon name="chat" className="wedding-icon wedding-icon--contact" strokeWidth={2.1} />
        </button>
        <button aria-label="Call Josep Colins" className="wedding-contact-button" type="button">
          <Icon name="phone" className="wedding-icon wedding-icon--contact" strokeWidth={2.1} />
        </button>
      </div>
    </section>
  );
}

function DetailsSheet() {
  return (
    <section className="wedding-sheet" aria-label="Venue details">
      <div className="wedding-summary">
        <div>
          <h1 className="wedding-title">Blue hill at stone barns</h1>
          <p className="wedding-location">Tarrytown, New York</p>
        </div>
        <div className="wedding-price-block">
          <p className="wedding-price">$9,900</p>
          <p className="wedding-price-unit">/Night</p>
        </div>
      </div>
      <ReviewSummary />
      <FacilityList />
      <ContactCard />
      <button className="wedding-book-button" type="button">
        Book now
      </button>
    </section>
  );
}

export default function WeddingSinglePage() {
  return (
    <main className="wedding-page" style={{ fontFamily: BODY_FONT_STACK }}>
      <div className="wedding-phone">
        <img alt="" className="wedding-hero-image" draggable="false" src={heroImage} />
        <TopChrome />
        <DetailsSheet />
      </div>
    </main>
  );
}
