import {Link, useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "../helpers/projectsList"
import LandingPage from "./LandingPage";
import Page from "../components/btnToPage/GoToPage";
import GoToPage from "../components/btnToPage/GoToPage";

const Project = () => {
	const {id} = useParams();
	const project = projects[id];
	return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{project.title}</h1>

					<img src={project.imgBig} alt={project.title} className="project-details__cover"/>

					<div className="project-details__desc">
						{project.desc}
						<br/>
						<br/>
						Key features:
						<br/>
						<br/>
						<br/>
						<ol>
							<li><em><i>{project.features.featureTitle}</i></em>{project.features.featureTitleDesc}.</li> <br/>
							<li><em><i>{project.features.featureTitle2}</i></em>{project.features.featureTitle2Desc}.</li> <br/>
							<li><em><i>{project.features.featureTitle3}</i></em>  {project.features.featureTitle3Desc}.</li> <br/>
							<li><em><i>{project.features.featureTitle4}</i></em> {project.features.featureTitle4Desc}.</li>
						</ol>
					</div>

					{
					window.location.href.endsWith('/project/0')
					? <BtnGitHub title={'Go To Read Books'} link='https://lit-log.vercel.app'/>:
						window.location.href.endsWith('/project/1')
							? <BtnGitHub title={'Get Your Password'} link='https://password-generator-blue-three.vercel.app' />
							: window.location.href.endsWith('/project/2')
								? <GoToPage title={'View The Project'} link='/landing_page'/>
								: window.location.href.endsWith('/project/3')
									? <BtnGitHub title={'Plan your day'} link='https://my-to-do-app-vert.vercel.app' />
									: window.location.href.endsWith('/project/4')
										? null
										: window.location.href.endsWith('/project/5')
											? <BtnGitHub title={'View The Videos'} link='https://drive.google.com/drive/folders/1R7NvJv1ypeYR8UhGziUcaaXXO37tVv0_?usp=drive_link' />
												: window.location.href.endsWith('/project/6')
												? <BtnGitHub title={'View The Timer'} link='https://timer-in-purejs.vercel.app' />
													:window.location.href.endsWith('/project/7')
													? <BtnGitHub title={'Play And Win'} link='https://quiz-game-inky.vercel.app' />
														:window.location.href.endsWith('/project/8')
														? <BtnGitHub title={'Play And Win'} link=' https://who-wants-to-be-a-millionaire-yaex.vercel.app' />
											: <BtnGitHub title={'View The Videos'} link='https://github.com' />
					}


				</div>
			</div>
		</main>
	);
}

export default Project;