import { useState, useRef, useMemo } from 'react';
import PostFilter from './Component/PostFilter';
import PostForm from './Component/PostForm';
import PostList from './Component/PostList';
import MyButton from './Component/UI/button/MyButton';
import MyInput from './Component/UI/input/MyInput';
import MyModal from './Component/UI/MyModal/MyModal';
import MySelect from './Component/UI/select/MySelect';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aa', body: 'ff'},
    {id: 2, title: 'ss 1', body: 'gg'},
    {id: 3, title: 'bb 2', body: 'hh'},
  ])

  const [filter, setFilter] = useState({ sort: '', query: ''})
  const [modal, setModal] = useState(false);


  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТОВ')
    if(filter.sort) {
      return [...posts].sort((a: any, b: any) => a[filter.sort].localeCompare(b[filter.sort]));
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedAndSearctedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost: any) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  // Получаем post из дочернего компонента
  const removePost = (post: any) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return(
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пользователя</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      {/* Отделяем форму от выпадающего списка */}
      <hr style={{margin: '15px 0'}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearctedPosts} title='Посты про JS' />
    </div>
  );
};

export default App;