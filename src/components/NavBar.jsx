
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { logo } from '../API/link';
const NavBar = () => {

    return (
        <Menu borderless fixed="top" style={{ background:'black',fontSize:25 ,fontFamily:'Arial, Helvetica, sans-serif'}}>
            <Menu.Item>
                <img src={logo} alt="logo" style={{ width: 60 }} />
            </Menu.Item>
           <Menu.Item name="Home" as={Link} to="/"  style={{color:"white"}}/> 
           <Menu.Item name="Recipes" as={Link} to="/recipes"  style={{color:"white"}}/> 
        </Menu>
    )
}

export default NavBar;