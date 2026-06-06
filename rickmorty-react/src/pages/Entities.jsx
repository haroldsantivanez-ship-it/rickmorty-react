import { useState } from 'react'
import { useCharacters } from '../hooks/useCharacters'
import Loader from '../components/Loader'

const SPECIES_COLORS = {
  Human: 'border-blue-500 text-blue-400',
  Alien: 'border-purple-500 text-purple-400',
  Robot: 'border-yellow-500 text-yellow-400',
  default: 'border-gray-500 text-gray-400',
}

export default function Entities() {
  const [page, setPage] = useState(1)
  const { characters, info, loading } = useCharacters(page)

  return (
    <div className="min-h-screen bg-[var(--dark)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="font-orbitron text-xs tracking-widest text-[var(--portal)] mb-2">DIRECTORIO</p>
          <h1 className="font-orbitron text-4xl font-black text-white">
            ENTIDADES DEL <span className="text-[var(--green)]">MULTIVERSO</span>
          </h1>
          <p className="text-[var(--text)] opacity-60 mt-2 text-sm">
            Listado completo de personajes — nombre, especie, género y origen
          </p>
        </div>

        {loading ? <Loader /> : (
          <div className="space-y-3">
            {characters.map((c, i) => {
              const speciesClass = SPECIES_COLORS[c.species] || SPECIES_COLORS.default
              return (
                <div
                  key={c.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-[var(--border)]
                    bg-[var(--card)] hover:border-[var(--portal)] transition-all group"
                >
                  {/* Index */}
                  <span className="font-orbitron text-xs text-[var(--text)] opacity-30 w-8 shrink-0">
                    {String((page - 1) * 20 + i + 1).padStart(3, '0')}
                  </span>

                  {/* Avatar */}
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[var(--border)] group-hover:border-[var(--portal)] transition-all"
                  />

                  {/* Name */}
                  <div className="flex-1 min-w-0">
                    <p className="font-orbitron text-sm font-bold text-white truncate">{c.name}</p>
                    <p className="text-xs text-[var(--text)] opacity-50 truncate">📍 {c.origin.name}</p>
                  </div>

                  {/* Species */}
                  <span className={`hidden sm:block px-3 py-1 rounded-full border text-xs font-orbitron shrink-0 ${speciesClass}`}>
                    {c.species}
                  </span>

                  {/* Gender */}
                  <span className="hidden md:block text-xs text-[var(--text)] opacity-60 w-16 text-center shrink-0">
                    {c.gender === 'Male' ? '♂' : c.gender === 'Female' ? '♀' : '?'} {c.gender}
                  </span>

                  {/* Status */}
                  <span className={`text-xs font-semibold w-16 text-right shrink-0 status-${c.status.toLowerCase()}`}>
                    ● {c.status}
                  </span>
                </div>
              )
            })}
          </div>
        )}

        {/* Pagination */}
        {info && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-5 py-2 font-orbitron text-xs border border-[var(--border)] rounded
                disabled:opacity-30 hover:border-[var(--portal)] hover:text-[var(--portal)] transition-all"
            >
              ← PREV
            </button>
            <span className="font-orbitron text-xs text-[var(--portal)]">{page} / {info.pages}</span>
            <button
              onClick={() => setPage(p => Math.min(info.pages, p + 1))}
              disabled={page === info.pages}
              className="px-5 py-2 font-orbitron text-xs border border-[var(--border)] rounded
                disabled:opacity-30 hover:border-[var(--portal)] hover:text-[var(--portal)] transition-all"
            >
              NEXT →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
