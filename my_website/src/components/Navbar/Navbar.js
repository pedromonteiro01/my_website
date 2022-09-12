import './Navbar.css';
import { useEffect, useState } from 'react';
import FullNavbar from './components/FullNavbar';
import NavbarIcon from './components/NavbarIcon';

const Navbar = () => {
    const [active, setActive] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            // Get scroll position
            if (window.pageYOffset > 30) {
                setActive(false);
            } else {
                setActive(true);
            }
        });
    }, []);

    return (
        <>

        { active && <FullNavbar />}
        { !active && 
        <>
        <NavbarIcon />
        </>}
        </>
    )
}

export default Navbar;