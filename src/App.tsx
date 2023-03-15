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

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e: any) => {
    e.preventDefault();

    // Разворачиваем старый массив(с уже существующими постами) и 
    // в конец добавляем новый пост. 
    setPosts([...posts, {...post, id: Date.now()}]);
    
    // Обнуляем импуты
    setPost({title: '', body: ''})
  };

  return(
    <div className="App">
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
      <PostList posts={posts} title='Посты про JS' />
    </div>
  );
};

export default App;