export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-16 h-16 rounded-full border-4 border-[var(--border)] border-t-[var(--portal)] animate-spin" />
      <p className="font-orbitron text-xs tracking-widest text-[var(--portal)] glow-portal">
        OPENING PORTAL...
      </p>
    </div>
  )
}
