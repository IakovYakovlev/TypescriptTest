import ClassCounter from './Component/ClassCounter';
import Count from './Component/Count';
import PostItem from './Component/PostItem';
import './styles/App.css';

function App() {
  return(
    <div className="App">
      <PostItem post={{id: 1, title: 'Javascript', body: 'Description'}} />
    </div>
  );
}

export default App;