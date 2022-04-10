import rightArrow from '../../assets/right-arrow.png'
import './home.styles.scss';

const Home = () => {

    return (
        <div id='home' className='home-container'>
            <div className='home-sub-container'>
                <h1 className='karen-grace'>Karen Grace</h1>
                <h1 className='photography animation-2 visible'>Photography</h1>
                <div className='btn-ask-qoute-container animation-3'>
                    <a href="mailto:dimayacyackaren@gmail.com">
                        <button className='btn-ask-quote'>
                            <span>
                                Ask Quote
                            </span>
                        </button>
                        <div className='arrow-icon'>
                            <img src={rightArrow} alt="" className='right-arrow' />
                        </div>
                    </a>
                </div>

            </div>
            <div className='home-sub-container'>

            </div>
        </div>
    )
}

export default Home;