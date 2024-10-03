import reactLogo from './assets/Group 97.png'
import { useState } from 'react';
import vectorArrow from './assets/Vector.svg'
import './App.css'
import { Button } from 'reon-ui-lib'
import { Collapse } from '@mui/material';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  const handleArrowClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="right-block">
        <div className="main-block">
          <p>Техподдержка</p>
          <div className="separator">|</div>
          <img className="reon-logo" src={reactLogo} alt="Реон Логотип" />
        </div>
        <img
          className={`arrow ${isVisible ? 'rotated' : ''}`}
          src={vectorArrow}
          onClick={handleArrowClick}
        />
      </div>

      <Collapse in={isVisible}>
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
              <span className="green-text">15+ ПОЛЕЗНЫХ ВИДЖЕТОВ</span> ДЛЯ АМОСRМ!
            </h3>
            <p>Расширьте возможности вашей amoCRM, и сделай работу в системе еще быстрее и удобнее! Переходи и устанавливай!</p>
            <button>REON.МАРКЕТ</button>
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default App
