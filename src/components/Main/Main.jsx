import './Main.css';
import AboutProject from '../AboutProject/AboutProject';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main() {
	return (
		<>
			<Promo />
			<NavTab />
			<AboutProject />
			<Techs />
			<AboutMe />
			<Portfolio />
		</>
	);
}

export default Main;