import { useEffect, useState } from 'react'

function App() {
  const [backendStatus, setBackendStatus] = useState<string>('checking...')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/ping')
      .then((response) => response.json())
      .then((data) => setBackendStatus(data.status))
      .catch(() => setBackendStatus('unreachable'))
  }, [])

  return (
    <main>
      <h1>Homelab Dashboard</h1>
      <p>Frontend is running.</p>
      <p>Backend status: {backendStatus}</p>
    </main>
  )
}

export default App