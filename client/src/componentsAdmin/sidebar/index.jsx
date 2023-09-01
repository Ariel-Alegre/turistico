import React, {useEffect, useState} from 'react';
import { useLocation, Link } from 'react-router-dom';

/* import SideBarItem from './sidebar-item'; */

import './styles.css';
/* import logo from '../../assets/images/white-logo.png';
import LogoutIcon from '../../assets/icons/logout.svg'; */

function SideBar ({ menu }) {
    const location = useLocation();

/*     const [active, setActive] = useState(1);

    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }
 */
    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <Link to='/'>
                <div className='sidebar-logo-container'>
                    <img
                        src={require('../../assets/logo/Logo.jpg')}
                        alt="logo" />
                </div>
                        </Link>

                <div className='sidebar-container'>
                    <div>

                    <Link to= '/users'>
                    <div className='sidebar-items'>
                    <span className='sidebar-item-label'>Usuarios</span>
                    </div>
                    </Link>
                    </div>

                

                    <div className='sidebar-footer'>
                        <span className='sidebar-item-label'>Logout</span>
                     {/*    <img 
                            src=""
                            alt='icon-logout'
                            className='sidebar-item-icon' /> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;