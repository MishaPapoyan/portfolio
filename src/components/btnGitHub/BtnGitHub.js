import "./style.css"

const BtnGitHub = ({ link, title }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			{title}
		</a>
	);
};

export default BtnGitHub;