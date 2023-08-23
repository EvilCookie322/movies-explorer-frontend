import './AboutProject.css';

function AboutProject() {
	return (
		<section className="about-project" id="about-project">
			<h2 className="about-project__title">О проекте</h2>
			<div className="about-project__diploma">
				<div className="about-project__stages">
					<h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
					<p className="about-project__text">
						Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
					</p>
				</div>
				<div className="about-project__time">
					<h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
					<p className="about-project__text">
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
					</p>
				</div>
				<div className="about-project__timeline">
					<div className="about-project__timeline_part about-project__timeline_part_side_left">
						<span className="about-project__span about-project__span_side_left">1 неделя</span>
						<p className="about-project__trend">Back-end</p>
					</div>
					<div className="about-project__timeline_part about-project__timeline_part_side_right">
						<span className="about-project__span about-project__span_side_right">4 недели</span>
						<p className="about-project__trend">Front-end</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutProject;