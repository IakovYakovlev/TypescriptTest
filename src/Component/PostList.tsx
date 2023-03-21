import React from 'react';
import { createRoot } from 'react-dom/client';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove } : any) => {

  if(!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>
        Посты не найдены!
      </h1>
    );
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((post: any, index: number) => 
            <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} number={index + 1} post={post} /> 
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;