import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const ontoggleTheme = () => {
        toggleTheme()
      }

      const navclass = isDarkTheme ? 'navbar-dark' : 'navbar-light'
      const logoimg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeimg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const likcls = isDarkTheme ? 'link-dark' : 'link-light'
      return (
        <div className={`navbar ${navclass}`}>
          <img src={logoimg} alt="website logo" />
          <ul>
            <li>
              <Link to="/" className={likcls}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={likcls}>
                About
              </Link>
            </li>
          </ul>
          <button type="button" data-testid="theme" onClick={ontoggleTheme}>
            <img src={themeimg} alt="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
