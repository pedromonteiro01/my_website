import './Navbar.css';
import { useEffect, useState } from 'react';
import FullNavbar from './components/FullNavbar';
import NavbarIcon from './components/NavbarIcon';

const Navbar = () => {
    const [active, setActive] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.pageYOffset <= 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            { active && <FullNavbar /> }
            <NavbarIcon topOfPage={active} />
        </>
    )
}

export default Navbar;
