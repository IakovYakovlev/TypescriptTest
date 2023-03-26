import React, { useContext } from 'react';
import MyButton from '../Component/UI/button/MyButton';
import MyInput from '../Component/UI/input/MyInput';
import { AuthContext } from '../context';

const Ligin = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	const login = (event: any) => {
		event.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', 'true');
	}

	return (
		<div>
			<h1>Страница для логина</h1>
			<form onSubmit={login}>
				<MyInput type="text" placeholder='Введите логин' />
				<MyInput type="password" placeholder='Введите пароль' />
				<MyButton>Войти</MyButton>
			</form>
		</div>
	);
};

export default Ligin;