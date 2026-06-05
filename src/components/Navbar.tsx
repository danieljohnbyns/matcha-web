import { useState } from 'react'
import { Button } from 'antd'
import { Link, useLocation } from '@tanstack/react-router'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/download', label: 'Download' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-matcha no-underline">
          Matcha
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`no-underline text-base font-medium transition-colors ${
                location.pathname === link.to
                  ? 'text-matcha'
                  : 'text-warm-gray hover:text-matcha'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <Button
          icon={mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
          type="text"
          className="md:hidden p-2 text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        />
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block py-3 no-underline text-base font-medium ${
                location.pathname === link.to ? 'text-matcha' : 'text-warm-gray'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
