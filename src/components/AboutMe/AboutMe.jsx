import './AboutMe.css';
import photo from '../../images/me.jpg';

function AboutMe() {
	return (
		<section className="about-me" id="about-me">
			<h2 className="about-me__title">Студент</h2>
			<div className="about-me__resume">
				<h3 className="about-me__name">Александр</h3>
				<p className="about-me__job">Фронтенд-разработчик, 25 лет</p>
				<p className="about-me__info">
				Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
				и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
				С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
				начал заниматься фриланс-заказами и ушёл с постоянной работы.
				</p>
				<a
					href="https://github.com/EvilCookie322"
					className="link about-me__git"
					target="_blank"
					rel="noreferrer"
					>
						Github
					</a>
			</div>
			<img src={photo} alt="Фото" className="about-me__image" />
		</section>
	);
}

export default AboutMe;