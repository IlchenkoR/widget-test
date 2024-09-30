import './support-open.css'
import { TextField, Button, Select  } from 'reon-ui-lib'
import screpka from './assets/Vector (1).svg'


function App() {
	const placeHolderText = "Выберите";

  return (
    <div className="right-block">
		<div className="main-block">
			<div className="new_task">
				<div className="first-block">
					<h3>Новая заявка</h3>
					<a>Регламент Техподдержки</a>
					<Select 
						id="select" 
						label="Название" 
						placeholder="Выберите виджеты"  
						options={{first: <>Первый</>, second: <>Второй</>}} 
						selectionSettings={{multiple: false, onChange: function iu(){}, value: ''}} 
						variant="underlined"
						styles={{
							combobox: {
								width:'245px'
							}
					}}>
					</Select>
					<TextField id="textfield" label="Инпут" onChange={function iu(){}} value="" variant="outlined" placeholder={placeHolderText}></TextField>	
					<div className="new-block">
						<div className="preview">
    						<p>Прикрепить скриншоты</p>
 						</div>
							<input
							type="file"
							id="image_uploads"
							name="image_uploads"
							accept=".jpg, .jpeg, .png"
							className="hidden"
							multiple />
						<label className="upload-button" htmlFor="image_uploads">
            				<img src={screpka} alt="Загрузить" />
        				</label>
					</div>
					<p>*Допустимые форматы: png, jpeg, pdf. Общий допустимый лимит на все файлы не более 50МБ</p>
				</div>
				<div className="second-block">
					<h4>Контактная информация</h4>
					<TextField id="number" label="Инпут" onChange={function iu(){}} value="" variant="outlined" placeholder="+7 (000) 000-00-00"></TextField>
					<TextField id="fio" label="Инпут" onChange={function iu(){}} value="" variant="outlined" placeholder="ФИО"></TextField>
					<TextField id="mail" label="Инпут" onChange={function iu(){}} value="" variant="outlined" placeholder="E-mail"></TextField>
					<p>Данные подставлены автоматически из <a>вашего профиля</a>. Проверьте информацию на актуальность.</p>
					<p>ВАЖНО! Обязательным полем для ввода является “E-mail”, так как именно на указанную Вами почту вы получите ответ от отдела технической поддержки (<a>reon.helpdesk@gmail.com</a>). Дополнительно Вы можете связаться с отделом технической поддержки через <a>Telegram Bot</a>.</p>
				</div>
				<div className="third-block">
					<h4>Выберите программу для удаленного доступа</h4>
					<div className='download'>
						<a>Скачать Anydesk</a>
						<a>Скачать RuDesktop</a>
					</div>
					<Select 
						id="select" 
						label="Название" 
						placeholder="Выберите виджеты"  
						options={{first: <>Anydesk</>, second: <>RuDesktop</>}} 
						selectionSettings={{multiple: false, onChange: function iu(){}, value: ''}} 
						variant="underlined"
						styles={{
							combobox: {
								width:'245px'
							}
					}}>
					</Select>
					<TextField id="code" label="Инпут" onChange={function iu(){}} value="" variant="outlined" placeholder="000 000 000"></TextField>
				</div>
				<Button appearance="contained" spacing="large">Отправить</Button>
			</div>
		</div>
    </div>
  );
}

export default App