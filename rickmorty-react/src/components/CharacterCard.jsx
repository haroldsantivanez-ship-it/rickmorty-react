export default function CharacterCard({ character }) {
  const statusClass = `status-${character.status.toLowerCase()}`
  return (
    <div className="card-hover rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
      <div className="relative">
        <img
          src={character.image}
          alt={character.name}
          className="w-full aspect-square object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent" />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-orbitron text-sm font-bold text-white truncate">{character.name}</h3>
        <div className="flex items-center gap-2 text-xs">
          <span className={`flex items-center gap-1 font-semibold ${statusClass}`}>
            <span className="w-2 h-2 rounded-full bg-current inline-block" />
            {character.status}
          </span>
          <span className="text-[var(--text)] opacity-60">·</span>
          <span className="text-[var(--text)] opacity-70">{character.species}</span>
        </div>
        <p className="text-xs text-[var(--text)] opacity-60 truncate">
          📍 {character.location.name}
        </p>
        <p className="text-xs text-[var(--text)] opacity-60">
          🎬 Ep. {character.episode.length} episodes
        </p>
      </div>
    </div>
  )
}
