import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { userAction, logout } from './actions/userAction';
import Dashboard from './components/Dashboaed';
import './App.scss';

const App = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState({ email: '', password: '', })
  const user = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userAction(data));
  }
  const logoutUser = () => {
    dispatch(logout());
  }


  return (
    <div>
      {!user.isUserLoggedIn && 
      <div class="login">
        <h2 class="login-header">Log in</h2>
        <form onSubmit={submitHandler} class="login-container">
          <p>
            <input
              type="email"
              value={data.email}
              onChange={(e) => { setData((prevdata) => { return { ...prevdata, email: e.target.value } }) }}
            />
          </p>
          <p>
            <input
              type="password"
              value={data.password}
              onChange={(e) => { setData((prevdata) => { return { ...prevdata, password: e.target.value } }) }}
            />
          </p>
          <p><input type="submit" value="log In"/></p>
        </form>
      </div>
      }
      {user.isUserLoggedIn && <div className="dashboard-header"> <button onClick={logoutUser} className="logout-button">Log out</button> <br/><br/><Dashboard /> </div>}
    </div>
  )
}

export default App
