import { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create} : any) => {
	const [post, setPost] = useState({title: '', body: ''});

	const addNewPost = (e: any) => {
		e.preventDefault();
	
		const newPost = {
			...post, id: Date.now()
		}
		
		create(newPost);

		// Обнуляем импуты
		setPost({title: '', body: ''})
	  };

	return (
		<form>
			{/* Управляемый компонент */}
			<MyInput 
				value={post.title}
				onChange={(e: any) => setPost({...post, title: e.target.value})}
				type="text" 
				placeholder="Название поста" 
			/>

			{/* Управляемый компонент */}
			<MyInput
				value={post.body}
				onChange={(e: any) => setPost({...post, body: e.target.value})}
				type="text" 
				placeholder="Описание поста" 
			/>

			<MyButton onClick={addNewPost}>Создать пост</MyButton>
		</form>
	);
};

export default PostForm;