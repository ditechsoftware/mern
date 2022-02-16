import { useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password} = formData
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefualt()
    }
  return (
    <>
        <section className='heading'>
            <h1>
                <FontAwesomeIcon icon={faRightToBracket } />
            </h1>
            <p>Login and Start Setting goals</p>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="email" className='form-control' id='email' name='email' value={email}
                    placeholder='Enter you email' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" className='form-control' id='password' name='password' value={password}
                    placeholder='Enter you password' onChange={onChange} />
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Login