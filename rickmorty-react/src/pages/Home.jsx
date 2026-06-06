import { useState } from 'react'
import { useCharacters } from '../hooks/useCharacters'
import CharacterCard from '../components/CharacterCard'
import Loader from '../components/Loader'

export default function Home() {
  const [page, setPage] = useState(1)
  const { characters, info, loading } = useCharacters(page)

  return (
    <div className="portal-bg min-h-screen">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="font-orbitron text-xs tracking-[0.4em] text-[var(--portal)] mb-4 glow-portal">
          WUBBA LUBBA DUB DUB
        </p>
        <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          RICK &amp;{' '}
          <span className="text-[var(--green)] glow-green">MORTY</span>
          <br />
          <span className="text-3xl md:text-4xl text-[var(--portal)]">UNIVERSE</span>
        </h1>
        <p className="max-w-xl mx-auto text-[var(--text)] opacity-70 text-lg leading-relaxed">
          Explora los personajes del multiverso. Datos en tiempo real desde la
          Rick and Morty API.
        </p>

        {/* Stats */}
        {info && (
          <div className="mt-10 inline-flex gap-8 border border-[var(--border)] rounded-xl px-8 py-4 bg-[var(--card)]">
            <div className="text-center">
              <p className="font-orbitron text-2xl font-bold text-[var(--green)]">{info.count}</p>
              <p className="text-xs text-[var(--text)] opacity-60 mt-1">Personajes</p>
            </div>
            <div className="w-px bg-[var(--border)]" />
            <div className="text-center">
              <p className="font-orbitron text-2xl font-bold text-[var(--portal)]">{info.pages}</p>
              <p className="text-xs text-[var(--text)] opacity-60 mt-1">Páginas</p>
            </div>
          </div>
        )}
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="font-orbitron text-lg font-bold text-white mb-6 border-l-4 border-[var(--portal)] pl-4">
          PERSONAJES — Página {page}
        </h2>

        {loading ? <Loader /> : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {characters.map(c => <CharacterCard key={c.id} character={c} />)}
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
            <span className="font-orbitron text-xs text-[var(--portal)]">
              {page} / {info.pages}
            </span>
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
      </section>
    </div>
  )
}
