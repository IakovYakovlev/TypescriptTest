import axios from 'axios';
import { useEffect, useState } from 'react';
import PostService from './API/PostService';
import PostFilter from './Component/PostFilter';
import PostForm from './Component/PostForm';
import PostList from './Component/PostList';
import MyButton from './Component/UI/button/MyButton';
import Loader from './Component/UI/Loader/Loader';
import MyModal from './Component/UI/MyModal/MyModal';
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';

interface ITest {
  userId: number, 
  id: number, 
  title: string, 
  body: string
}
function App() {
  const [posts, setPosts] = useState<ITest[]>([])

  const [filter, setFilter] = useState({ sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSearctedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
      setPosts(posts);
  });

  // Если нет зависимостей, тогда отрабатывает только 1 раз.
  useEffect(() => {
    fetchPosts();
  }, []);

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
      {postError &&
        <h1>Произошла ошибка {postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearctedPosts} title='Посты про JS' />
      }
      
    </div>
  );
};

export default App;