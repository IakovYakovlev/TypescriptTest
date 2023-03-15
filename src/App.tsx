import { useState, useRef } from 'react';
import PostForm from './Component/PostForm';
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

  const createPost = (newPost: any) => {
    setPosts([...posts, newPost]);
  }

  // Получаем post из дочернего компонента
  const removePost = (post: any) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return(
    <div className="App">
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title='Посты про JS' />
    </div>
  );
};

export default App;