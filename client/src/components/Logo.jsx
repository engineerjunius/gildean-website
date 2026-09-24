import React from 'react'

// Original Gildean logo. On dark backgrounds it sits on a white badge so the blue/green stays legible.
const Logo = ({ light = false }) =>
  light ? (
    <span className="inline-flex rounded-xl bg-white px-4 py-2.5">
      <img src="/logo2.png" alt="Gildean Engineering Services" className="h-12 w-auto" />
    </span>
  ) : (
    <img src="/logo2.png" alt="Gildean Engineering Services" className="h-12 w-auto sm:h-14" />
  )

export default Logo
