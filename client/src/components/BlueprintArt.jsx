import React from 'react'

// Blueprint-style elevation of a two-storey frame with a roof truss and dimension lines.
const BlueprintArt = () => (
  <svg viewBox="0 0 480 380" className="h-auto w-full" role="img" aria-label="Blueprint drawing of a building frame">
    <defs>
      <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M20 0H0V20" fill="none" stroke="#ffffff" strokeOpacity="0.07" />
      </pattern>
      <marker id="bp-tick" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="8" markerHeight="8" orient="auto">
        <path d="M2 8 8 2" stroke="#9cc6ff" strokeWidth="1.5" />
      </marker>
    </defs>

    <rect width="480" height="380" rx="18" fill="#132744" />
    <rect width="480" height="380" rx="18" fill="url(#bp-grid)" />

    <g fill="none" stroke="#9cc6ff" strokeWidth="2" strokeLinejoin="round">
      {/* roof truss */}
      <path d="M100 150 240 70 380 150Z" />
      <path d="M170 150 240 70 310 150M170 150 205 110M310 150 275 110M240 70V150" strokeOpacity="0.7" strokeWidth="1.5" />
      {/* frame */}
      <path d="M110 150V300M370 150V300M240 150V300" />
      <path d="M110 225H370" />
      <path d="M90 300H390" strokeWidth="3" />
      {/* openings */}
      <rect x="135" y="170" width="70" height="38" strokeOpacity="0.6" strokeWidth="1.5" />
      <rect x="275" y="170" width="70" height="38" strokeOpacity="0.6" strokeWidth="1.5" />
      <rect x="135" y="245" width="70" height="38" strokeOpacity="0.6" strokeWidth="1.5" />
      <rect x="275" y="240" width="40" height="60" strokeOpacity="0.6" strokeWidth="1.5" />
      {/* footings */}
      <path d="M96 300v14h28v-14M226 300v14h28v-14M356 300v14h28v-14" strokeOpacity="0.6" strokeWidth="1.5" />
    </g>

    {/* nodes */}
    <g fill="#f2b441">
      {[[110, 150], [240, 150], [370, 150], [110, 225], [240, 225], [370, 225], [240, 70]].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" />
      ))}
    </g>

    {/* dimension lines */}
    <g stroke="#9cc6ff" strokeOpacity="0.6" strokeWidth="1">
      <path d="M110 338H370" markerStart="url(#bp-tick)" markerEnd="url(#bp-tick)" />
      <path d="M110 328v18M370 328v18" />
      <path d="M418 150V300" markerStart="url(#bp-tick)" markerEnd="url(#bp-tick)" />
      <path d="M408 150h18M408 300h18" />
    </g>
    <g fill="#9cc6ff" fontFamily="JetBrains Mono, monospace" fontSize="11">
      <text x="240" y="358" textAnchor="middle">12 000</text>
      <text x="438" y="229" transform="rotate(90 438 229)" textAnchor="middle">6 000</text>
      <text x="28" y="40" fillOpacity="0.8">ELEVATION A</text>
      <text x="28" y="56" fillOpacity="0.45" fontSize="10">SCALE 1:100</text>
    </g>
  </svg>
)

export default BlueprintArt
