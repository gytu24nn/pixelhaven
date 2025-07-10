
// Import CSS from the AboutUs css file
import "../../CSS/AboutUs.css"

const AboutUs = () => {
    return (
        <div className="AboutUs-Wrapper">
            <div className="AboutUs-Section">
                <div className="AboutUs-Text">
                    <h2>About PixelHaven</h2>

                    <p>
                        PixelHaven is a personal passion project created by Tuva Gyllensten a creative web development student, 
                        who loves games, design, and building useful digital tools.
                        <br /> <br />
                        The mission? To make it easier for - and more fun - for gamers to organize their gaming life. 
                    </p>
                </div>

                <div className="AboutUs-Image">
                    <img src="/img/train.jpg" alt="train" />
                </div>
            </div>
            <div className="AboutUs-Section">
                
                <div className="AboutUs-Image">
                    <img src="/img/gameConsole.jpg" alt="Console" />
                </div>
                

                <div className="AboutUs-Text">
                    <h2>What is PixelHaven?</h2>
                    <ul>
                        <li>🎮 Save games to personal lists for example "Want to play", "Playing now" and "Completed</li>
                        <li>🧩 Track what games you own</li>
                        <li>🔁 Get random game suggestions</li>
                        <li>📝 Rate and give personal reviews</li>
                    </ul>
                    <br />
                    <p>
                        All game data shown in PixelHaven comes from the amazing{' '}
                        <a href="https://rawg.io/apidocs" target="_blank" rel="noopener noreferrer">
                            RAWG Video Games Database
                        </a>
                        <br />
                        Without them, this project wouldn’t be possible.
                    </p>

                </div>
            </div>
            
            

        </div>
    )
}

export default AboutUs;