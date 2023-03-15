import { useState, useRef } from 'react';
import PostList from './Component/PostList';
import MyButton from './Component/UI/button/MyButton';
import MyInput from './Component/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 1', body: 'Description'},
    {id: 3, title: 'Javascript 2', body: 'Description'},
  ])

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e: any) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    };

    // Разворачиваем старый массив(с уже существующими постами) и 
    // в конец добавляем новый пост. 
    setPosts([...posts, newPost]);
    
    // Обнуляем импуты
    setTitle('');
    setBody('');
  };

  return(
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput 
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          type="text" 
          placeholder="Название поста" 
        />

        {/* Управляемый компонент */}
        <MyInput
          value={body}
          onChange={(e: any) => setBody(e.target.value)}
          type="text" 
          placeholder="Описание поста" 
        />

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Посты про JS' />
    </div>
  );
};

export default App;