import React from "react";

const WorkArchive = () => {
  return (
    <section
      id="work-archive"
      className="min-h-screen bg-[#F5F3EF] px-6 py-16 md:px-20 md:py-24 font-sans flex flex-col items-center"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-[2.6rem] md:text-[3.2rem] font-serif text-[#2D2D2D] mb-5 tracking-tight leading-none">
          Work Archive
        </h1>
        <p className="text-[#6B6B6B] text-[1.05rem] max-w-2xl mx-auto leading-[1.6]">
          A selection of products, concepts, and digital experiences
          <br className="hidden md:block" />
          we've designed and built through collaboration, creativity, and
          execution.
        </p>
      </div>

      {/* Main Card - significantly larger */}
      <div
        className="w-full max-w-[1200px] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
        style={{ minHeight: "680px" }}
      >
        {/* Left Panel */}
        <div className="md:w-[35%] relative flex flex-col justify-between p-12 md:p-16 overflow-hidden">
          {/* Deep maroon-to-black gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(170deg, #6B3030 0%, #4A2020 25%, #2A1515 55%, #0F0A0A 100%)",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#8B4545]/30 to-transparent pointer-events-none" />

          {/* Vertical Striped NOOK Logo */}
          <div className="relative z-10 flex-1 flex items-center justify-center py-10">
            <svg
              viewBox="0 0 100 360"
              width="85"
              height="300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* N */}
              <g stroke="#E8DDD4" strokeWidth="2.5" strokeLinecap="round">
                <line x1="35" y1="15" x2="35" y2="75" />
                <line x1="65" y1="15" x2="65" y2="75" />
                <line x1="35" y1="15" x2="65" y2="75" />
                <line x1="35" y1="28" x2="45" y2="38" />
                <line x1="45" y1="38" x2="55" y2="48" />
                <line x1="55" y1="48" x2="65" y2="58" />
              </g>
              {/* O */}
              <g stroke="#E8DDD4" strokeWidth="2.5" strokeLinecap="round">
                <ellipse cx="50" cy="115" rx="20" ry="28" />
                <line x1="32" y1="103" x2="68" y2="103" />
                <line x1="30" y1="115" x2="70" y2="115" />
                <line x1="32" y1="127" x2="68" y2="127" />
              </g>
              {/* O */}
              <g stroke="#E8DDD4" strokeWidth="2.5" strokeLinecap="round">
                <ellipse cx="50" cy="185" rx="20" ry="28" />
                <line x1="32" y1="173" x2="68" y2="173" />
                <line x1="30" y1="185" x2="70" y2="185" />
                <line x1="32" y1="197" x2="68" y2="197" />
              </g>
              {/* K */}
              <g stroke="#E8DDD4" strokeWidth="2.5" strokeLinecap="round">
                <line x1="35" y1="225" x2="35" y2="285" />
                <line x1="35" y1="255" x2="65" y2="225" />
                <line x1="35" y1="255" x2="65" y2="285" />
                <line x1="35" y1="242" x2="50" y2="242" />
                <line x1="35" y1="268" x2="50" y2="268" />
              </g>
            </svg>
          </div>

          {/* Tagline */}
          <div className="relative z-10">
            <p className="text-[#C4B5A5] text-[0.95rem] leading-[1.7]">
              Read. Write. Engage. On Nook,
              <br />
              attention isn't wasted, it's returned.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-[65%] bg-[#EDEAE4] flex flex-col relative">
          {/* Top Nav Bar */}
          <div className="flex items-center justify-between px-10 pt-8 pb-4">
            <span
              className="text-[#8B4545] font-bold text-[1.15rem] tracking-[0.1em]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              NOOK
            </span>
            <div className="flex items-center gap-6">
              <button className="text-[#9B9B9B] hover:text-[#5A2A2A] transition-colors">
                <SearchIcon className="w-[22px] h-[22px]" />
              </button>
              <span className="text-[#9B9B9B] text-[0.95rem]">Sign In</span>
              <button className="bg-[#8B4545] hover:bg-[#6B3535] text-white text-[0.9rem] px-7 py-2.5 rounded-full transition-colors tracking-wide">
                Join Nook
              </button>
            </div>
          </div>

          {/* Content Area - generous spacing, article pushed to bottom */}
          <div className="flex-1 px-10 pb-10 pt-4 flex flex-col justify-between">
            {/* CTA Banner - upper area */}
            <div className="bg-[#F5F2EC] rounded-[1.8rem] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5 border border-[#DDD8CE] mt-4">
              <p className="text-[#5A5A5A] text-[0.95rem] leading-relaxed">
                With Nook, attention isn't wasted, it's returned as income.
              </p>
              <button className="bg-[#8B4545] hover:bg-[#6B3535] text-white text-[0.9rem] px-8 py-3 rounded-full whitespace-nowrap transition-colors shadow-md shadow-[#8B4545]/15 tracking-wide">
                Start Nook
              </button>
            </div>

            {/* Spacer pushes article down */}
            <div className="flex-1 min-h-[60px]" />

            {/* Article Card - sits at bottom */}
            <div className="bg-white rounded-[1.8rem] px-7 py-6 shadow-sm">
              {/* Author Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5A7A4A] to-[#3D5A30] flex items-center justify-center text-white shadow-sm">
                    <UserIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[#2D2D2D] font-semibold text-[0.95rem]">
                    West gate
                  </span>
                </div>
                <button className="text-[#8B8B8B] text-[0.9rem] hover:text-[#5A2A2A] transition-colors font-medium">
                  Follow
                </button>
              </div>

              {/* Title */}
              <h3 className="text-[#1A1A1A] font-bold text-[1.1rem] mb-2 leading-snug">
                macOS is Good. These 9 Apps Make It Perfect.
              </h3>

              {/* Description */}
              <p className="text-[#5A5A5A] text-[0.92rem] leading-[1.6] mb-5">
                M-Series Macs are monsters, but macOS itself still has many
                friction points. Here is how I "fix" it in 2026.
              </p>

              {/* Stats Row */}
              <div className="flex items-center justify-between pt-4 border-t border-[#F0EDE8]">
                <div className="flex items-center gap-6">
                  <StatItem
                    icon={<HeartIcon className="w-[18px] h-[18px]" />}
                    count="548"
                  />
                  <StatItem
                    icon={<CommentIcon className="w-[18px] h-[18px]" />}
                    count="45"
                  />
                  <StatItem
                    icon={<ShareIcon className="w-[18px] h-[18px]" />}
                    count="105"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-[#8B8B8B] hover:text-[#5A2A2A] transition-colors">
                    <MoreIcon className="w-5 h-5" />
                  </button>
                  <button className="text-[#8B8B8B] hover:text-[#5A2A2A] transition-colors">
                    <BookmarkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- Icons --- */

const SearchIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
  </svg>
);

const HeartIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const CommentIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const ShareIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);

const MoreIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

const BookmarkIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
  </svg>
);

const StatItem = ({ icon, count }) => (
  <div className="flex items-center gap-1.5 text-[#8B8B8B]">
    {icon}
    <span className="text-[0.85rem]">{count}</span>
  </div>
);

export default WorkArchive;
