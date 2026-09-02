import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiArrowUpRight, FiMenu, FiX, FiCalendar } from 'react-icons/fi'
import AppointmentModal from './AppointmentModal.jsx'
import logoIcon from '../assets/logo-icon.png'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Work' },
  { to: '/process', label: 'Process' },
  { to: '/about', label: 'About' },
  { to: '/packages', label: 'Pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  useEffect(() => {
    const openAppointment = () => setAppointmentOpen(true)
    window.addEventListener('open-appointment', openAppointment)
    return () => window.removeEventListener('open-appointment', openAppointment)
  }, [])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#07090d]/80 backdrop-blur-xl border-b border-white/10' : ''}`}>
      <nav className="max-w-[1240px] mx-auto section-pad flex items-center justify-between h-[78px]">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span className="relative w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center overflow-hidden">
            <img src={logoIcon} alt="S.A.T Solution" width="32" height="35" className="w-8 h-8 object-contain transition-transform group-hover:scale-110" />
          </span>
          <span className="font-display font-semibold tracking-tight text-[17px]">S.A.T <span className="text-blue-300">Solution</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}>
              {({ isActive }) => (
                <span className={`relative block text-sm transition-colors ${isActive ? 'text-white' : 'text-white/55 hover:text-white'}`}>
                  {l.label}
                  <span className={`absolute -bottom-2 left-0 h-px bg-blue-400 w-full ${isActive ? 'scale-x-100' : 'scale-x-0'} origin-left transition-transform`} />
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <button type="button" onClick={() => setAppointmentOpen(true)} className="hidden md:inline-flex items-center gap-2 rounded-full bg-blue-500 text-white px-5 py-2.5 text-sm font-semibold hover:bg-blue-400 transition-colors shadow-[0_12px_35px_-18px_rgba(59,130,246,.9)]">
          Book an appointment <FiCalendar size={15} />
        </button>

        <button className="md:hidden p-2 text-white" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <FiX size={23}/> : <FiMenu size={23}/>} 
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#07090d]/95 backdrop-blur-xl">
          <div className="section-pad py-5 space-y-1">
            {links.map(l => <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-3 text-lg text-white/70 hover:text-white">{l.label}</NavLink>)}
            <button type="button" onClick={() => { setOpen(false); setAppointmentOpen(true) }} className="mt-3 inline-flex items-center gap-2 rounded-full bg-blue-500 text-white px-5 py-3 font-semibold">Book an appointment <FiCalendar size={15}/></button>
          </div>
        </div>
      )}
    </header>
    <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </>
  )
}
