import React from 'react'
import '../../../App.css'
import silueta from '../../../images/silueta.png'
import candado from '../../../images/candado.jpg'
import correo from '../../../images/correo1.jpg'
import registro from '../../../images/registro.png'
import useForm from '../../../hooks/useForm'

const Register = () => {
  const { form, handleOnchange } = useForm({})
  console.log('form', form)

  return (
    <div className="App">
      <main>
        <div className="login-block">
          <img src={registro} width="180" height="180" alt="username" />
          <form>
            <div className="form-group">
              <div className="input-group">
                <span>
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
                <span>
                  <img src={correo} width="30" height="30" alt="password" />
                </span>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleOnchange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span>
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
              Register
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
export default Register
