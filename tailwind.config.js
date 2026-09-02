/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0B0D',
        paper: '#FFFFFF',
        surface: '#F5F6F8',
        line: '#DEE2E8',
        circuit: {
          DEFAULT: '#1665D8',
          dim: '#E8F0FE',
          deep: '#0D3B8C',
        },
        steel: '#0F1720',
        muted: '#5B6472',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
      },
      keyframes: {
        'pulse-travel': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'node-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(0.85)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        upload: {
          '0%': { transform: 'translateY(4px)', opacity: '0' },
          '30%': { opacity: '1' },
          '75%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-6px)', opacity: '0' },
        },
        'compass-swing': {
          '0%, 100%': { transform: 'rotate(-16deg)' },
          '50%': { transform: 'rotate(16deg)' },
        },
        'zap-flicker': {
          '0%, 100%': { filter: 'drop-shadow(0 0 0px currentColor)', transform: 'scale(1)' },
          '50%': { filter: 'drop-shadow(0 0 4px currentColor)', transform: 'scale(1.06)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.55)', opacity: '0.7' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        'layer-shift': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2.5px)' },
        },
      },
      animation: {
        travel: 'pulse-travel 2.4s ease-in-out infinite',
        nodePulse: 'node-pulse 2.4s ease-in-out infinite',
        rise: 'rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 16s linear infinite',
        'spin-slow-reverse': 'spin 22s linear infinite reverse',
        glow: 'glow-pulse 4s ease-in-out infinite',
        blink: 'blink 1.3s steps(1, end) infinite',
        upload: 'upload 2.2s ease-in-out infinite',
        compassSwing: 'compass-swing 3s ease-in-out infinite',
        zapFlicker: 'zap-flicker 2.4s ease-in-out infinite',
        ripple: 'ripple 2.4s ease-out infinite',
        layerShift: 'layer-shift 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
