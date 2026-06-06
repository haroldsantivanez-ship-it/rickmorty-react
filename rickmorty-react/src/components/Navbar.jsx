import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const links = [
    { to: '/', label: 'Home' },
    { to: '/entities', label: 'Characters' },
  ]
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] backdrop-blur-md bg-[rgba(10,10,15,0.85)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-orbitron text-sm font-bold tracking-widest text-[var(--portal)] glow-portal">
          RM·UNIVERSE
        </span>
        <div className="flex gap-2">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded font-orbitron text-xs tracking-wider transition-all
                ${pathname === l.to
                  ? 'bg-[var(--portal)] text-black font-bold'
                  : 'text-[var(--text)] hover:text-[var(--portal)] border border-transparent hover:border-[var(--portal)]'
                }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
