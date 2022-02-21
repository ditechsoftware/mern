// import { FaSignInAlt, FaSignOutAlt, FaUser}  from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
function Header() {
    const navigate = useNavigate()
    const dispatch =  useDispatch()
    const { user } = useSelector( state => state.auth)
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul>{ user ? (
                    <li>
                    
                       <button className='btn' onClick={onLogout}>
                            Logout
                       </button>
                
                    </li>
                ): (
                    <>
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
                    </>
                )}
            
            
        </ul>
    </header>
  )
}

export default Header
