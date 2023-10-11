import "./style.css";

import instagram from './../../img/icons/instagram.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
	const instaUrl = 'https://www.instagram.com/misha._.7707/'
	const gitHubUrl = 'https://github.com/MishaPapoyan/'
	const linkedinUrl = ''
	const goToSocials = (socialLink) => {
		const link = document.createElement('a');
		link.href = socialLink;
		link.target = '_blank'
		link.click();
	};
	const currentDate = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item" onClick={() => {goToSocials(instaUrl)}}>
							<img src={instagram} alt="Link" />
						</li>
						<li className="social__item" onClick={() => {goToSocials(gitHubUrl)}}>
								<img src={gitHub} alt="Link" />
						</li>
						<li className="social__item" onClick={() => {goToSocials(linkedinUrl)}}>
								<img src={linkedIn} alt="Link" />
						</li>
					</ul>
					<div className="copyright">
						<p>© {currentDate}</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;