import { useState, useEffect } from 'react'

export function useCharacters(page = 1) {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(r => r.json())
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
        setLoading(false)
      })
      .catch(e => { setError(e.message); setLoading(false) })
  }, [page])

  return { characters, info, loading, error }
}
