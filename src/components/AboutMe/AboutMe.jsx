import './AboutMe.css';
import photo from '../../images/me.jpg';

function AboutMe() {
	return (
		<section className="about-me" id="about-me">
			<h2 className="about-me__title">Студент</h2>
			<div className="about-me__resume">
				<h3 className="about-me__name">Александр</h3>
				<p className="about-me__job">Фронтенд-разработчик, 26 лет</p>
				<p className="about-me__info">
				Я живу в Домодедово, получил диплом по специальности "программная инженерия" в НИЯУ МИФИ. 
				У меня есть два кота - Кузя и Филя, люблю их и, в принципе, всех животных. 
				В свободное время слушаю музыку, играю в игры и занимаюсь волейболом и фитнесом. 
				Уже больше года занимаюсь программированием и планирую связать с ним своё будущее.
				После универа успел попробовать себя в детейлинге, такси и трейдинге, получил много ценного 
				опыта и, вспомнив то удовольствие от кодинга в универе, пришёл к тому, что хочу создавать что-то и наслаждаться работой. 
				Логичным (для меня) выбором стала веб-разработка. Закончил курс по веб-разработке и 
				продолжаю свой путь к цели, активно развиваясь самостоятельно.
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
