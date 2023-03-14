import { useState } from 'react';
import ClassCounter from './Component/ClassCounter';
import Count from './Component/Count';
import PostItem from './Component/PostItem';
import PostList from './Component/PostList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 1', body: 'Description'},
    {id: 3, title: 'Javascript 2', body: 'Description'},
  ])
  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python', body: 'Description'},
    {id: 2, title: 'Python 1', body: 'Description'},
    {id: 3, title: 'Python 2', body: 'Description'},
  ])

  return(
    <div className="App">
      <PostList posts={posts} title='Посты про JS' />
      <PostList posts={posts2} title='Посты про Python' />
    </div>
  );
}

export default App;