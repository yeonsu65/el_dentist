import NavbarHeader from './NavbarHeader';
import logo from '../images/el_logo.png';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
function Header(){
  return(
    <header>
      <div className='logo'>
        <img src={logo}/>
        <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} >
          <Nav.Item>
            <Nav.Link href="/home">JOIN</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">LOGIN</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">오시는길</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">
              빠른상담
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <NavbarHeader/>
    </header>
  );
}
export default Header;