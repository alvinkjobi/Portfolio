import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#hero"><img src="/logo.png" alt="Logo" /></a>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
