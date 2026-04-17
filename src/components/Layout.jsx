import { NavLink, Outlet } from 'react-router-dom'

function closeMobileNav() {
  document.getElementById('sg-nav')?.classList.remove('sg-nav-open')
  document.getElementById('sg-nav-toggle')?.setAttribute('aria-expanded', 'false')
}

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/curriculum', label: 'Curriculum' },
  { to: '/chat', label: 'Chat' },
  { to: '/matcher', label: 'Pathway advisor' },
  { to: '/faq', label: 'FAQ' },
]

export default function Layout() {
  return (
    <div className="sg-app">
      <a href="#main-content" className="sg-skip">
        Skip to main content
      </a>
      <header className="sg-header">
        <div className="sg-header-inner">
          <NavLink to="/" className="sg-logo" end onClick={closeMobileNav}>
            <span className="sg-logo-mark" aria-hidden="true" />
            <span className="sg-logo-text">SHSGuide</span>
          </NavLink>
          <button
            type="button"
            className="sg-nav-toggle"
            aria-expanded="false"
            aria-controls="sg-nav"
            id="sg-nav-toggle"
            onClick={() => {
              const navEl = document.getElementById('sg-nav')
              const btn = document.getElementById('sg-nav-toggle')
              const open = navEl.classList.toggle('sg-nav-open')
              btn.setAttribute('aria-expanded', open ? 'true' : 'false')
            }}
          >
            Menu
          </button>
          <nav id="sg-nav" className="sg-nav" aria-label="Primary">
            <ul className="sg-nav-list">
              {nav.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      isActive ? 'sg-nav-link sg-nav-link-active' : 'sg-nav-link'
                    }
                    onClick={closeMobileNav}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="sg-main" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="sg-footer">
        <p>
          SHSGuide helps you explore Senior High School tracks and subjects. Verify details with your
          school and official DepEd materials.
        </p>
        <p className="sg-footer-note">
          Content reflects the streamlined SHS reform themes; verify with DepEd and your school.
          Admin tools and live AI—coming with your backend.
        </p>
      </footer>
    </div>
  )
}
