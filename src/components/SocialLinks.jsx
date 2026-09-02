import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { socialLinks } from '../data.js'

const icons = {
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  x: FaXTwitter,
  youtube: FaYoutube,
}

export default function SocialLinks({ variant = 'light', size = 16, className = '' }) {
  const base =
    variant === 'dark'
      ? 'border-white/20 text-white/80 hover:bg-white hover:text-[#07090d] hover:border-white'
      : 'border-white/10 text-white/45 hover:bg-white hover:text-[#07090d] hover:border-white'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socialLinks.map((s) => {
        const Icon = icons[s.icon]
        return (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 ${base}`}
          >
            <Icon size={size} />
          </a>
        )
      })}
    </div>
  )
}
