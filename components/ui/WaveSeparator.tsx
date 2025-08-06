export default function WaveSeparator() {
  return (
    <div className="overflow-hidden leading-none rotate-180 -mt-1">
      <svg
        className="w-full h-20 md:h-32"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />   {/* Blue-600 */}
            <stop offset="100%" stopColor="#9333ea" /> {/* Purple-600 */}
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,149.3C672,149,768,171,864,192C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}
