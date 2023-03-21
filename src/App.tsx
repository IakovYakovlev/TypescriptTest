import axios from 'axios';
import { useEffect, useState } from 'react';
import PostService from './API/PostService';
import PostFilter from './Component/PostFilter';
import PostForm from './Component/PostForm';
import PostList from './Component/PostList';
import MyButton from './Component/UI/button/MyButton';
import MyModal from './Component/UI/MyModal/MyModal';
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

  // Если нет зависимостей, тогда отрабатывает только 1 раз.
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const posts = await PostService.getAll();
    setPosts(posts);
  }

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
      <button onClick={fetchPosts}>GET POSTS</button>
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