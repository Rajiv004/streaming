
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movie from './Components/Movie'
import Tvshows from './Components/Tvshows'
import People from './Components/People'
import Aboutus from './Components/Subscription'
import Subscription from './Components/Subscription'
import Contactus from './Components/Contactus'
import Moviedetails from './Components/Moviedetails'
import Tvdetails from './Components/Tvdetails'
import Peopledetails from './Components/Peopledetails'
import Trailer from './Components/templates/Trailer'
import Login from './Components/templates/Login'
import { useEffect, useState } from 'react'
import Mobilesidenav from './Components/templates/Mobilesidenav'


function App() {

  const[isLoggedIn , setisLoggedIn] = useState(false);

  useEffect(() => {
    const savedLogin = localStorage.getItem("isLoggedIn");
    if (savedLogin === 'true') {
      setisLoggedIn(true);
    }
  }, []);


  const handleLogin = () => {
    localStorage.setItem('isLoggedIn' , 'true');
    setisLoggedIn(true);
  };

   const handleLogout = () => {
    localStorage.removeItem('isLoggedIn' );
    setisLoggedIn(false)
  };

  if(!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  return (

    <div className="w-full h-screen flex  bg-black " >
      <Routes>
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/mobilesidenav" element={<Mobilesidenav/>}/>
        <Route path="/" element={<Home  logout={handleLogout}/>} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
          <Route path="/movie/details/:id" element={<Moviedetails />} >
            <Route path="/movie/details/:id/trailer" element={<Trailer/>}/>
          </Route>
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<Peopledetails />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>

    </div>
  )
}

export default App
