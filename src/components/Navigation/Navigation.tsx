import { NavLink } from 'react-router-dom';

import Logo from '@assets/coffee-logo.svg';

const Navigation = () => {

    return (
        <nav className='flex justify-space-between width-full'>
            <img className='logo' src={ Logo } alt="logo" />
            <NavLink to={ '/' }>Menu</NavLink>
            <NavLink to={ '/' }>About</NavLink>
            <NavLink to={ '/' }>Contact</NavLink>
        </nav>
    );
}

export default Navigation;