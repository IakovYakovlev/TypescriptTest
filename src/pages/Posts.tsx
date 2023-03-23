import { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../Component/PostFilter';
import PostForm from '../Component/PostForm';
import PostList from '../Component/PostList';
import MyButton from '../Component/UI/button/MyButton';
import Loader from '../Component/UI/Loader/Loader';
import MyModal from '../Component/UI/MyModal/MyModal';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import '../styles/App.css';
import { getPageCount, getPagesArray } from '../utils/pages';

interface ITest {
  userId: number, 
  id: number, 
  title: string, 
  body: string
}
function Posts() {
  const [posts, setPosts] = useState<ITest[]>([])

  const [filter, setFilter] = useState({ sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearctedPosts = usePosts(posts, filter.sort, filter.query);
  
  let pagesArray = getPagesArray(totalPages);

  console.log(pagesArray);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit: number, page: number) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response?.data);
    const totalCount = response?.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  // Если нет зависимостей, тогда отрабатывает только 1 раз.
  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost: any) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  // Получаем post из дочернего компонента
  const removePost = (post: any) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const changePage = (page: number) => {
    setPage(page);
    fetchPosts(limit, page);
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
      <div className="page__wrapper">
        {pagesArray.map(p => 
          <span
            onClick={() => changePage(p)}
            key={p} 
            className={page === p ? 'page page__current' : 'page'}
          >
              {p}
          </span>
        )}
      </div>
    </div>
  );
};

export default Posts;