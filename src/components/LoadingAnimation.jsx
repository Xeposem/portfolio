import './LoadingAnimation.css'

function LoadingAnimation() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">WD</div>
        <div className="loading-bar">
          <div className="loading-bar-fill" />
        </div>
      </div>
    </div>
  )
}

export default LoadingAnimation
