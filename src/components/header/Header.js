import "./style.css";
import avatar from '../../img/img.png'

const Header = () => {
	const cvUrl = 'https://drive.google.com/file/d/11tZVkq4RwSBKLQuZKGSVxo7GFno9iTUp/view?usp=drive_link';

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = cvUrl;
		link.target = '_blank'
		link.download = cvUrl;
		link.click();
	};
    return (
		<header className="header">
			<div className="img">
				<img src={avatar}	 alt=""/>
			</div>
			<div className="header__wrapper">
				<div className="boxes">
				<h2 className="header__title">
				<strong>
					Greetings I'm <em> Misha</em>, a frontend developer on a mission to excel in the ever-evolving world of web development.
					My passion for creating elegant and user-friendly interfaces drives me to stay on the cutting edge of technology,
					ensuring that every project I undertake leaves a lasting, positive impact
					I'm all about the art of turning ideas into beautifully functional websites and applications
					<br/><br/>
					"In this portfolio project, you'll get an inside look at the creative work <br/> I've crafted using a blend of HTML, CSS, JavaScript, and my video <br/> production skills. Explore the digital landscapes I've built and the <br/> captivating videos I've created, showcasing not just my coding <br/> expertise but also my ability to transform ideas into interactive web <br/> experiences and engaging multimedia content. Dive in, and let's <br/> embark on a journey through the web projects and videos that define <br/> my passion for front-end development and visual storytelling."
				</strong>
			</h2>
			</div >
				<button onClick={handleDownload} className="btn">My CV</button>
			</div>
		</header>
	);
}

export default Header;