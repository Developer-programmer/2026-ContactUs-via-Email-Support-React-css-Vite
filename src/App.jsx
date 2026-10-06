function App() {
  return (
    <div className="page-shell">
      <header className="topbar" aria-label="Main navigation">
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
        </nav>
      </header>

      <main className="hero">
        <div className="content">
          <p className="eyebrow">We’re here to help</p>
          <h1>Contact Us</h1>
          <p className="description">
            Reach out to our team for answers, support, and assistance with anything you need.
          </p>

          <div className="contact-options" aria-label="Contact methods">
            <a href="#" className="contact-card">
              <span>via Support</span>
            </a>
            <a href="#" className="contact-card">
              <span>via Email</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
