import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError(false) // Reset any previous error

    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })

    if (res.status === 401) {
      setError(true)
      setTimeout(() => setError(false), 4000) // hide error after 4s
      return
    }

    const data = await res.json()
    if (data.token) {
      localStorage.setItem("token", data.token)
      window.location.href = "/"
    } else {
      setError(true)
      setTimeout(() => setError(false), 4000)
    }
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className='loginbtn' type="submit">Login</button>
      </form>

      {error && (
        <div className="error-popup">
          Invalid username or password
        </div>
      )}
    </>
  )
}

export default Login
