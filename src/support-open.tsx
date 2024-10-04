import './support-open.css';
import { TextField, Button, Select, CircularLoader } from 'reon-ui-lib';
import clip from './assets/clip.svg';
import fileIcon from './assets/file_icon.svg';
import closeIcon from './assets/close.svg';
import React, { useState } from 'react';

function App() {
    const [files, setFiles] = useState<File[]>([]);
    const [isDragOver, setIsDragOver] = useState(false);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles) {
            const fileArray = Array.from(selectedFiles);
            setFiles((prevFiles) => [...prevFiles, ...fileArray]);
        }
    };

    const placeholderText = `Опишите Вашу задачу \n или проблему`

    const handleRemoveFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event.target)
        event.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        const relatedTarget = event.relatedTarget;
        if (!relatedTarget || !event.currentTarget.contains(relatedTarget as Node)) {
            setIsDragOver(false);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragOver(false);
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles) {
            const fileArray = Array.from(droppedFiles);
            setFiles((prevFiles) => [...prevFiles, ...fileArray]);
        }
    };

    const [widgetValue, setWidgetValue] = useState<string[]>([]);
    const [programValue, setProgramValue] = useState<string>('first');

    const handleWidgetChange = (newValue: string[]) => {
        setWidgetValue(newValue);
    };

    const handleProgramChange = (newValue: string) => {
        setProgramValue(newValue);
    };

    const [valueFio, setValueFio] = useState<string>('');
    const [valueProgram, setValueProgram] = useState<string>('');
    const [valuePhone, setValuePhone] = useState<string>('');

    const handleChangeProgrammCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (/^\d*$/.test(value)) {
            setValueProgram(value);
        }
    };

    const handleChangeFio = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (/^[a-zA-Zа-яА-ЯёЁ\s]*$/.test(newValue)) {
            setValueFio(newValue);
        }
    };

    const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        console.log(typeof newValue)
        if (/^[\+\-\(\)\d]*$/.test(newValue)) {
            setValuePhone(newValue);
        }
    };

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        const selectedFiles = Array.from(event.target.files || []);
        setFiles(selectedFiles);
        setIsLoading(false); 
    };



    return (
        <div className="reon-support-right_modal"
        onDragLeave={handleDragLeave}>
            <div
                className={`reon-support-application_form`} 
                onDragOver={handleDragOver}
            >
                <div className="reon-support-new_application">
                    <div className="reon-support-application_first_block">
                        <h3>Новая заявка</h3>
                        <a>Регламент Техподдержки</a>
                        <Select
                            id="reon-support-application_select_widget"
                            label="Название"
                            placeholder="Выберите виджеты"
                            options={{
                                first: <>Первый</>,
                                second: <>Второй</>,
                            }}
                            selectionSettings={{
                                multiple: true,
                                onChange: handleWidgetChange,
                                value: widgetValue,
                            }}
                            variant="underlined"
                            styles={{
                                combobox: {
                                    width: '245px',
                                },
                            }}
                        />
                        <textarea id="reon-support-application-textfield" placeholder={placeholderText}>

                        </textarea>
                        <div
                            className={`reon-support-application_file_field ${
                                isDragOver
                                    ? 'reon-support-application_file_field_open'
                                    : ''
                            }`}
                            onDrop={handleDrop}
                            
                        >
                            <div className='new_modul'>
                                <label
                                    className="reon-support-application_upload_text"
                                    htmlFor="reon-support-application_image_uploads"
                                >
                                    <div className="reon-support-application_preview">
                                        <p>Прикрепить скриншоты</p>
                                    </div>
                                </label>
                                <input
                                    type="file"
                                    id="reon-support-application_image_uploads"
                                    name="image_uploads"
                                    accept=".jpg, .jpeg, .png, .pdf"
                                    className="hidden"
                                    multiple
                                    onChange={handleFileChange}
                                />
                                <label
                                    className="reon-support-application_upload_button"
                                    htmlFor="reon-support-application_image_uploads"
                                >
                                    <img src={clip} alt="Загрузить" />
                                </label>
                            </div>
                        </div>
                        <p>
                            *Допустимые форматы: png, jpeg, pdf. Общий
                            допустимый лимит на все файлы не более 50МБ
                        </p>
                        {files.length > 0 && (
                            <ul>
                                {files.map((file, index) => (
                                    <li key={index}>
                                        <div className="reon-support-application_attached_files">
                                            {isLoading ? (
                                                <CircularLoader
                                                color='#4C8BF7'
                                                />
                                            ) : (
                                                <img src={fileIcon}></img>
                                            )}
                                            <div className="reon-support-application_file_info">
                                                <div className="reon-support-application_files_name">
                                                    {file.name}
                                                </div>
                                                <div className="reon-support-application_files_size">
                                                    {(
                                                        file.size /
                                                        (1024 * 1024)
                                                    ).toFixed(2)}{' '}
                                                    MB
                                                </div>
                                            </div>
                                            <img
                                                src={closeIcon}
                                                id="reon-support-application_close_img"
                                                alt="Закрыть"
                                                onClick={() =>
                                                    handleRemoveFile(index)
                                                }
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="reon-support-application_second-block">
                        <h4>Контактная информация</h4>
                        <TextField
                            id="reon-support-number_field"
                            label="Инпут"
                            variant="outlined"
                            placeholder="+7 (000) 000-00-00"
                            value={valuePhone}
                            onChange={handleChangePhone}
                        ></TextField>
                        <TextField
                            id="reon-support-fio_field"
                            label="Инпут"
                            variant="outlined"
                            placeholder="ФИО"
                            value={valueFio}
                            onChange={handleChangeFio}
                        ></TextField>
                        <TextField
                            id="reon-support-mail_field"
                            label="Инпут"
                            variant="outlined"
                            placeholder="E-mail"
                        ></TextField>
                        <p>
                            Данные подставлены автоматически из{' '}
                            <a href="https://keypro.amocrm.ru/settings/profile/">
                                вашего профиля
                            </a>
                            . Проверьте информацию на актуальность.
                        </p>
                        <p>
                            ВАЖНО! Обязательным полем для ввода является
                            “E-mail”, так как именно на указанную Вами почту вы
                            получите ответ от отдела технической поддержки (
                            <a>reon.helpdesk@gmail.com</a>). Дополнительно Вы
                            можете связаться с отделом технической поддержки
                            через{' '}
                            <a href="https://t.me/reon_support_bot">
                                Telegram Bot
                            </a>
                            .
                        </p>
                    </div>
                    <div className="reon-support-application_third_block">
                        <h4>Выберите программу для удаленного доступа</h4>
                        <div className="download">
                            <a>Скачать Anydesk</a>
                            <a>Скачать RuDesktop</a>
                        </div>
                        <Select
                            id="reon-support-application_select_program"
                            label="Название"
                            placeholder="Выберите программу"
                            options={{
                                first: <>Anydesk</>,
                                second: <>RuDesktop</>,
                            }}
                            selectionSettings={{
                                multiple: false,
                                onChange: handleProgramChange,
                                value: programValue
                            }}
                            variant="underlined"
                            styles={{
                                combobox: {
                                    width: '245px',
                                },
                            }}
                        ></Select>
                        <TextField
                            id="reon-support-application_program_code"
                            label="Инпут"
                            variant="outlined"
                            placeholder="000 000 000"
                            value={valueProgram}
                            onChange={handleChangeProgrammCode}
                        ></TextField>
                    </div>
                    <Button appearance="contained" spacing="large">
                        Отправить
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
