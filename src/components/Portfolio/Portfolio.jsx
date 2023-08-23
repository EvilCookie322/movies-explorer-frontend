import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
	return (
		<section className="portfolio">
			<h3 className="portfolio__title">Портфолио</h3>
			<ul className="portfolio__projects">
				<li className="portfolio__project">
					<a
						href="https://github.com/EvilCookie322/how-to-learn"
						className="link portfolio__link"
						target="_blank"
						rel="noreferrer"
					>
						Статичный сайт
						<img src={arrow} className='portfolio__link-arrow' alt="Картинка ссылки" />
					</a>
				</li>
				<li className="portfolio__project">
					<a
						href="https://github.com/EvilCookie322/react-mesto-auth"
						className="link portfolio__link"
						target="_blank"
						rel="noreferrer"
					>
						Адаптивный сайт
						<img src={arrow} className='portfolio__link-arrow' alt="Картинка ссылки" />
					</a>
				</li>
				<li className="portfolio__project">
					<a
						href="https://github.com/EvilCookie322/react-mesto-api-full-gha"
						className="link portfolio__link"
						target="_blank"
						rel="noreferrer"
					>
						Одностраничное приложение
						<img src={arrow} className='portfolio__link-arrow' alt="Картинка ссылки" />
					</a>
				</li>
			</ul>
		</section>
	);
}

export default Portfolio;