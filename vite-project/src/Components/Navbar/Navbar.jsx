import './Navbar.css';

const Navbar = () => {
    return (
      <div className='nav'>
        <div className="nav-logo">Ev-olution</div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>about</li>
            <li>explore</li>
            <li className='nav-contact'>contact</li>
        </ul>
      </div>
    )
  }
  export default Navbar