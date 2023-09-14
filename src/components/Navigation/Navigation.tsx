import { NavLink } from 'react-router-dom';

import Logo from '@assets/coffee-logo.svg';
import { useEffect, useState } from 'react';

const Navigation = () => {

    const [ scrolling, setScrolling ] = useState(false);

    const handleScroll = () => setScrolling(window.scrollY > 0);

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={ `flex justify-space-between width-full ${ scrolling ? 'scrolling' : '' }` }>
            <img className='logo' src={ Logo } alt="logo" />
            <NavLink to={ '/' }>Menu</NavLink>
            <NavLink to={ '/' }>About</NavLink>
            <NavLink to={ '/' }>Contact</NavLink>
        </nav>
    );
}

export default Navigation;