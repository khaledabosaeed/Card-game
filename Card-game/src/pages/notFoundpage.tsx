import { useNavigate } from 'react-router-dom'
import './_pages.css'

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <button className="back-btn" onClick={() => navigate('/')}>
        Go Back Home
      </button>
    </div>
  )
}

export default NotFoundPage