import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setUser}) {
  const [user_info, setUserInfo] = useState()
  const navigate = useNavigate()
  

function login(e){
  e.preventDefault()
  fetch("http://127.0.0.1:3000/login",{
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify(user_info)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setUser(data)
    localStorage.setItem('user_id', `${data.id}`)
    navigate('/')
  })
}
function onchange(e){
  setUserInfo({...user_info, [e.target.name]: e.target.value})
}

  return (
    <div >
      <div className="container my-3 py-3">
        <h1 className="text-center">Log In</h1>
        <hr />
        <div className="row my-4 h-100">

          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={login}>
              <div className="my-3">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  onBlur={onchange}
                />
              </div>
              <div className="my-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onBlur={onchange}
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-primary"
                  type="submit"
                  // disabled={isLoading}
                >
                  {/* {isLoading ? "Loading..." : "Log In"} */}
                </button>
              </div>
            </form>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Login