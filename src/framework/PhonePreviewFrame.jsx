import { useEffect, useMemo, useState } from "react";
import iphoneFrameImage from "../assets/iphone-frame-2x.png";
import iphoneFrameHeadlessImage from "../assets/iphone-frame-headless-2x.png";

export const PHONE_PREVIEW_QUERY_KEY = "preview";
export const PHONE_PREVIEW_QUERY_VALUE = "phone-content";
export const PHONE_PREVIEW_BACKGROUND = "#F2F2F2";
export const PHONE_PREVIEW_MIN_SCALE = 0.72;
export const PHONE_PREVIEW_PADDING_Y = 16;

const PHONE_FRAME = {
  width: 450,
  height: 920,
};

const PHONE_SCREEN = {
  x: 24,
  y: 23,
  width: 402,
  height: 874,
};

const FRAME_IMAGES = {
  camera: iphoneFrameImage,
  headless: iphoneFrameHeadlessImage,
};

const FRAME_MODES = [
  {
    value: "camera",
    label: "显示外壳",
  },
  {
    value: "headless",
    label: "无头外壳",
  },
  {
    value: "hidden",
    label: "隐藏外壳",
  },
];

export function isPhoneContentPreview(search) {
  return (
    new URLSearchParams(search).get(PHONE_PREVIEW_QUERY_KEY) ===
    PHONE_PREVIEW_QUERY_VALUE
  );
}

function getPhoneContentSrc() {
  const url = new URL(window.location.href);
  url.searchParams.set(PHONE_PREVIEW_QUERY_KEY, PHONE_PREVIEW_QUERY_VALUE);
  return `${url.pathname}${url.search}${url.hash}`;
}

function useViewportHeight() {
  const [viewportHeight, setViewportHeight] = useState(() =>
    typeof window === "undefined" ? PHONE_FRAME.height : window.innerHeight,
  );

  useEffect(() => {
    function syncViewportHeight() {
      setViewportHeight(window.innerHeight);
    }

    syncViewportHeight();
    window.addEventListener("resize", syncViewportHeight);
    return () => window.removeEventListener("resize", syncViewportHeight);
  }, []);

  return viewportHeight;
}

function getPreviewGeometry(frameMode) {
  if (frameMode === "hidden") {
    return {
      frame: {
        width: PHONE_SCREEN.width,
        height: PHONE_SCREEN.height,
      },
      screen: {
        x: 0,
        y: 0,
        width: PHONE_SCREEN.width,
        height: PHONE_SCREEN.height,
      },
    };
  }

  return {
    frame: PHONE_FRAME,
    screen: PHONE_SCREEN,
  };
}

function getScale(viewportHeight, frameHeight) {
  const availableHeight = Math.max(0, viewportHeight - PHONE_PREVIEW_PADDING_Y * 2);
  const fitScale = availableHeight / frameHeight;
  return Math.min(1, Math.max(PHONE_PREVIEW_MIN_SCALE, fitScale));
}

function PhoneFrameIcon() {
  return (
    <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24">
      <rect
        x="7"
        y="2.5"
        width="10"
        height="19"
        rx="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect x="10" y="5.1" width="2.9" height="1.25" rx="0.6" fill="currentColor" />
      <circle cx="14.1" cy="5.7" r="0.8" fill="currentColor" />
    </svg>
  );
}

function HeadlessFrameIcon() {
  return (
    <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24">
      <rect
        x="7"
        y="2.5"
        width="10"
        height="19"
        rx="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function HiddenFrameIcon() {
  return (
    <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24">
      <rect
        x="6.5"
        y="3.5"
        width="11"
        height="17"
        rx="1.8"
        fill="none"
        stroke="currentColor"
        strokeDasharray="2.2 2.2"
        strokeWidth="1.7"
      />
      <path
        d="M9 8.2h6M9 12h6M9 15.8h3.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function FrameModeIcon({ mode }) {
  switch (mode) {
    case "camera":
      return <PhoneFrameIcon />;
    case "headless":
      return <HeadlessFrameIcon />;
    case "hidden":
      return <HiddenFrameIcon />;
    default:
      throw new Error(`Unsupported mobile preview switch mode "${mode}".`);
  }
}

function FrameSwitchbar({ frameMode, onFrameModeChange }) {
  return (
    <div
      aria-label="手机预览外壳切换"
      className="fixed right-4 top-4 z-30 grid grid-cols-3 rounded-lg border border-black/10 bg-white/90 p-1 shadow-[0_8px_24px_rgba(16,16,20,0.08)] backdrop-blur"
      role="group"
    >
      {FRAME_MODES.map((mode) => {
        const isActive = mode.value === frameMode;

        return (
          <button
            aria-label={mode.label}
            aria-pressed={isActive}
            className={`flex h-9 w-9 items-center justify-center rounded-md transition ${
              isActive
                ? "bg-[#111111] text-white"
                : "bg-transparent text-[#111111] hover:bg-black/5"
            }`}
            key={mode.value}
            onClick={() => onFrameModeChange(mode.value)}
            title={mode.label}
            type="button"
          >
            <FrameModeIcon mode={mode.value} />
          </button>
        );
      })}
    </div>
  );
}

export default function PhonePreviewFrame({ page }) {
  const [frameMode, setFrameMode] = useState("camera");
  const viewportHeight = useViewportHeight();
  const geometry = useMemo(() => getPreviewGeometry(frameMode), [frameMode]);
  const scale = getScale(viewportHeight, geometry.frame.height);
  const scaledFrame = {
    width: geometry.frame.width * scale,
    height: geometry.frame.height * scale,
  };
  const shouldAllowOuterScroll =
    scaledFrame.height + PHONE_PREVIEW_PADDING_Y * 2 > viewportHeight;
  const frameImage = frameMode === "hidden" ? null : FRAME_IMAGES[frameMode];

  if (frameMode !== "hidden" && !frameImage) {
    throw new Error(
      `Unsupported mobile preview frame "${frameMode}" for page "${page.id}". Use "camera", "headless", or "hidden".`,
    );
  }

  return (
    <main
      className="relative min-h-screen"
      style={{
        backgroundColor: PHONE_PREVIEW_BACKGROUND,
        overflowY: shouldAllowOuterScroll ? "auto" : "hidden",
      }}
    >
      <FrameSwitchbar frameMode={frameMode} onFrameModeChange={setFrameMode} />

      <div
        className="flex min-h-screen items-center justify-center p-4"
        style={{
          minWidth: scaledFrame.width + 32,
        }}
      >
        <div
          className="shrink-0"
          style={{
            width: scaledFrame.width,
            height: scaledFrame.height,
          }}
        >
          <div
            className="relative"
            style={{
              width: geometry.frame.width,
              height: geometry.frame.height,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <div
              className="absolute overflow-hidden"
              style={{
                left: geometry.screen.x,
                top: geometry.screen.y,
                width: geometry.screen.width,
                height: geometry.screen.height,
                backgroundColor: PHONE_PREVIEW_BACKGROUND,
              }}
            >
              <iframe
                className="block"
                src={getPhoneContentSrc()}
                title={`${page.title} phone preview`}
                style={{
                  width: PHONE_SCREEN.width,
                  height: PHONE_SCREEN.height,
                  border: 0,
                  backgroundColor: PHONE_PREVIEW_BACKGROUND,
                }}
              />
            </div>

            {frameImage ? (
              <img
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none"
                draggable="false"
                src={frameImage}
              />
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
