export default function SectionFrame({
  children,
  className = "",
}) {
  return (
    <div className={`relative ${className}`}>

      {/* Left Border */}
      <div className="absolute left-0 top-0 h-full w-px bg-white/15" />

      {/* Right Border */}
      <div className="absolute right-0 top-0 h-full w-px bg-white/15" />

      {/* Top Left */}
      <div className="absolute -left-1 -top-1 h-2.5 w-2.5 rounded-sm bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

      {/* Top Right */}
      <div className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-sm bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

      {/* Bottom Left */}
      <div className="absolute -left-1 -bottom-1 h-2.5 w-2.5 rounded-sm bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

      {/* Bottom Right */}
      <div className="absolute -right-1 -bottom-1 h-2.5 w-2.5 rounded-sm bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

      {children}
    </div>
  );
}