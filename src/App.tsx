import { useEffect } from 'react'
import './css/reset.css'
import './css/typography.css'

export const App = () => {
  const checkConnection = async () => {
    try {
      const { solana } = window

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet in the house!')
        }
      } else {
        alert('Solana wallet has not been found!')
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const onLoad = async () => {
      await checkConnection()
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])
  return (
    <>
      <div>
        <h1>Hello</h1>
      </div>
    </>
  )
}
