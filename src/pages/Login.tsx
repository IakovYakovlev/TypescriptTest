import React from 'react';
import MyButton from '../Component/UI/button/MyButton';
import MyInput from '../Component/UI/input/MyInput';

const Ligin = () => {
	return (
		<div>
			<h1>Страница для логина</h1>
			<form action="">
				<MyInput type="text" placeholder='Введите логин' />
				<MyInput type="password" placeholder='Введите пароль' />
				<MyButton>Войти</MyButton>
			</form>
		</div>
	);
};

export default Ligin;