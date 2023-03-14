import PostItem from './PostItem';

const PostList = ({ posts, title } : any) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>

      {posts.map((post: any) => <PostItem post={post} key={post.id} /> )}
    </div>
  );
};

export default PostList;