import { Link, Outlet } from "react-router-dom";

function Layout()
{
    return (
    <div style={{backgroundColor: '#F0FFCE', height: '100vh'}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <img src="logo.png" style={{height: '50px'}}/>
         <h1 className="navbar-brand mb-0 mx-2">Drawa National Park</h1>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">Gallery</Link>
          </li>
        </ul>
      </nav>
      <img src="banner.png" style={{width: '100%', height: '120px', objectFit: 'cover'}} />

      <Outlet />
    </div>
  )
}

export default Layout;