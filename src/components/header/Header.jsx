import { useState } from 'react';
import './header.styles.scss';
import logoFrame from '../../assets/frame.png';

const Header = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <div className={open ? 'header-container' : 'header-container position'}>
                <div className='logo-container' onClick={handleClick}>
                        <a href="#home">
                            <img src={logoFrame} alt="logo" className='logo' />
                        </a>
                    </div>
                <div className='header-sub-container'>
                    <label onClick={handleClick}>
                        <a href="#home" className='nav'>Home</a>
                    </label>
                    <label onClick={handleClick}>
                        <a href="#about" className='nav'>About</a>
                    </label>
                    <label onClick={handleClick}>
                        <a href="#gallery" className='nav'>Gallery</a>
                    </label>
                    <label onClick={handleClick}>
                        <a href="#contact" className='nav'>Contact</a>
                    </label>
                </div>
            </div>
            <div className='burger-container' onClick={handleClick}>
                <div className='line-1'></div>
                <div className='line-2'></div>
                <div className='line-3'></div>
            </div>
        </>
    )
}

export default Header;