import reactLogo from './assets/Group 97.png'
import './App.css'
import ReactDOM from 'react-dom/client';
import vectorArrow from './assets/Vector.svg'
import { Button } from 'reon-ui-lib'

const createReactRoot: (
	domElementQuerySelector: string,
): void => {
	const modalRootDOMElement: HTMLElement | null = document.querySelector(domElementQuerySelector);
	if (modalRootDOMElement) {
		const modalRoot = ReactDOM.createRoot(modalRootDOMElement);
		modalRoot.render(
			<div id='reon_widget-01'>
				<div className="right-block">
					<div className="main-block">
					<p>Техподдержка</p>
					<div className="separator">|</div>
					<img className="reon-logo" src={reactLogo} alt="Реон Логотип" />
					</div>
					<img
					src={vectorArrow}
					/>
				</div>
					<div className="main-info">
					<div>
						<h3>Благодарим за обращение!</h3>
						<p>Ваш запрос уже поступил в отдел технической поддержки REON. Ответ будет предоставлен в регламентные сроки!</p>
						<Button className="create-new-task" appearance="contained" spacing="large">
						СОЗДАТЬ НОВУЮ ЗАЯВКУ
						</Button>
					</div>
					</div>

					<div className="references">
					<div>
						<h3>
						<span className="green-text">15+ ПОЛЕЗНЫХ ВИДЖЕТОВ</span> ДЛЯ АМОСПМ!
						</h3>
						<p>Расширьте возможности вашей amoCRM, и сделай работу в системе еще быстрее и удобнее! Переходи и устанавливай!</p>
						<button>REON.МАРКЕТ</button>
					</div>
					</div>
			</div>
			
		);
	}
}

const mf = {
	render: (domElementQuerySelector: string) => {
		createReactRoot(domElementQuerySelector)
	}
};

export default mf;