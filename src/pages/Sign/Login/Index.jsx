import React from 'react'
import { Link } from 'react-router-dom'
import silueta from '../../../images/silueta.png'
import candado from '../../../images/candado.jpg'
import login from '../../../images/login.jpg'
import useForm from '../../../hooks/useForm'
import '../../../App.css'

const Login = () => {
  const { form, handleOnchange } = useForm({})

  console.log('form', form)

  return (
    <div className="App">
      <main>
        <div className="login-block">
          <img src={login} width="160" height="160" alt="username" />
          <form>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <img src={silueta} width="30" height="30" alt="username" />
                </span>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={handleOnchange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <img src={candado} width="35" height="35" alt="password" />
                </span>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleOnchange}
                />
              </div>
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="login-links">
          <Link to="/" className="pull-left">
            Forget Password?
          </Link>
          <Link to="/" className="pull-right">
            Register an account
          </Link>
        </div>
      </main>
    </div>
  )
}
export default Login
