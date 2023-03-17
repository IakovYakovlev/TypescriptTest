import { useState, useRef } from 'react';
import PostForm from './Component/PostForm';
import PostList from './Component/PostList';
import MyButton from './Component/UI/button/MyButton';
import MyInput from './Component/UI/input/MyInput';
import MySelect from './Component/UI/select/MySelect';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aa', body: 'ff'},
    {id: 2, title: 'ss 1', body: 'gg'},
    {id: 3, title: 'bb 2', body: 'hh'},
  ])

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost: any) => {
    setPosts([...posts, newPost]);
  }

  // Получаем post из дочернего компонента
  const removePost = (post: any) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortPosts = (sort: string) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a: any, b: any) => a[sort].localeCompare(b[sort])))
  }

  return(
    <div className="App">
      <PostForm create={createPost}/>
      {/* Отделяем форму от выпадающего списка */}
      <hr style={{margin: '15px 0'}} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title='Посты про JS' />
        : <h1 style={{textAlign: 'center'}}>Посты не найдены!!!</h1>
      }
    </div>
  );
};

export default App;