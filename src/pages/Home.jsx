import SocialLinks from '../components/social';
import './home.css';

export default function Home() {
    return (
        <div className="homePage">
            <div className="intro">
                <p>
                    Hi! <br />
                    I'm AJ Bowman <br />
                    I am a Web Developer, Software
                    <br /> Developer and Software Engineer!
                </p>
                <p>
                    More about Me 
                </p>
                <SocialLinks />
            </div>
            <div className="img">
                <img src="img/verticleHeadShot.jpg" width={300} />
            </div>
        </div>
    )
}