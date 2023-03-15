import PostItem from './PostItem';

const PostList = ({ posts, title, remove } : any) => {

  

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>

      {posts.map((post: any, index: number) => 
        <PostItem remove={remove} number={index + 1} post={post} key={post.id} /> 
      )}
    </div>
  );
};

export default PostList;