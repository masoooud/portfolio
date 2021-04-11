import * as React from 'react'

function Logo({ size, ...props }) {
  return (
    <svg width={size} height={size} {...props} viewBox="0 0 1000 1000">
      <path
        d="M500.56,984.21,85.07,744.33V264.57L500.56,24.69,916,264.57V744.33ZM105.07,732.79,500.56,961.12,896,732.79V276.12L500.56,47.78,105.07,276.11Z"
        transform="translate(-0.56)"
      />
      <path
        d="M610.08,407.54l-13.64,11.1-95.89,78-95.86-78-.15-.12-13.5-11-90.18-73.36L281.72,318.6v379H719.56V318.47L701.34,333.3Zm91.26,269.71H300.86V356.38L391,429.75l13.5,11,96,78.11,96-78.11,13.51-11,91.26-74.24Z"
        transform="translate(-0.56)"
      />
    </svg>
  )
}

export default Logo
