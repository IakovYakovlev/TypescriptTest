import { useMemo } from 'react';

export const useSortedPost = (posts: any, sort: any) => {
	const sortedPosts = useMemo(() => {
		console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТОВ')
		if(sort) {
		  return [...posts].sort((a: any, b: any) => a[sort].localeCompare(b[sort]));
		} else {
		  return posts;
		}
	}, [sort, posts]);
	
	return sortedPosts;
}

export const usePosts = (posts: any, sort: any, query: any) => {
	const sortedPosts = useSortedPost(posts, sort);

	const sortedAndSearctedPosts = useMemo(() => {
		return sortedPosts.filter((post: any) => post.title.toLowerCase().includes(query));
	}, [query, sortedPosts]);

	return sortedAndSearctedPosts;
}