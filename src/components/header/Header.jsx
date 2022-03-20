import './header.styles.scss';
import logoFrame from '../../assets/frame.png';

const Header = () => {

    return (
        <div className='header-container'>
            <div className='header-sub-container'>
                <div className='logo-container'>
                    <a href="#">
                        <img src={logoFrame} alt="logo" className='logo'/>
                    </a>
                </div>
                <label htmlFor="" >
                    <a href="#" className='nav'>Home</a>
                </label>
                <label htmlFor="" >
                    <a href="#" className='nav'>About</a>
                </label>
                <label htmlFor="" >
                    <a href="#" className='nav'>Gallery</a>
                </label>
            </div>
            <div className='header-sub-container'>
                <label htmlFor="" >
                    <a href="#" className='nav'>Contact</a>
                </label>
            </div>

        </div>
    )
}

export default Header;