import Header from './../components/header/Header'
import Abilities from "../components/Abilities/Abilities";

const Home = () => {
    return (
		<>
			<Header />
			<main className="section" >
				<div className="container">
					<Abilities/>
				</div>
			</main>
		</>
	);
}

export default Home;