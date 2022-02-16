// import { FaSignInAlt, FaSignOutAlt, FaUser}  from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                <FontAwesomeIcon icon={faRightToBracket} />
                
                    Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    {/* <FaUser /> */}
                    <FontAwesomeIcon icon={faUser}/>
                    Register
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header
