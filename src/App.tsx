import { useState } from 'react';
import ClassCounter from './Component/ClassCounter';
import Count from './Component/Count';
import PostItem from './Component/PostItem';
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

  return(
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Посты про JS' />
    </div>
  );
}

export default App;