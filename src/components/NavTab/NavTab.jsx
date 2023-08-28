import './NavTab.css';

function NavTab() {
	return (
		<ul className="page-nav">
			<li>
				<a href="#about-project" className="link page-nav__link">О проекте</a>
			</li>
			<li>
				<a href="#techs" className="link page-nav__link">Технологии</a>
			</li>
			<li>
				<a href="#about-me" className="link page-nav__link">Студент</a>
			</li>
		</ul>
	);
}

export default NavTab;