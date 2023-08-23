import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
	const { pathname } = useLocation();
	return (
		<>
			{(['/', '/movies', '/saved-movies'].includes(pathname)) && (
				<footer className="footer">
					<p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
					<div className="footer__container">
						<p className="footer__copyright">&#169; 2023</p>
						<ul className="footer__links">
							<li>
								<a href="https://practicum.yandex.ru/" className="link footer__link">Яндекс.Практикум</a>
							</li>
							<li>
								<a href="https://github.com/Yandex-Practicum" className="link footer__link">Github</a>
							</li>
						</ul>
					</div>
				</footer>
			)}
		</>
	);
}

export default Footer;