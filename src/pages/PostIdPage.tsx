import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../Component/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

interface ITest {
	userId: number, 
	id: number, 
	title: string, 
	body: string
  }

interface ITestComment {
	postId: number, 
	id: number, 
	name: string, 
	email: string,
	body: string
  }

const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState<ITest>();
	const [comments, setComments] = useState<ITestComment[]>([]);
	const [fetchPostById, isLoading, error] = useFetching(async (id: number) => {
		const response = await PostService.getById(id);
		setPost(response?.data);
	});
	const [fetchComments, isComLoading, comError] = useFetching(async (id: number) => {
		const response = await PostService.getCommentsByPostId(id);
		setComments(response?.data);
	});

	useEffect(() => {
		fetchPostById(params.id);
		fetchComments(params.id);
	}, []);

	return (
		<div>
			<h1>Вы открыли страницу поста с ID = {params.id}</h1>
			{isLoading 
				? <Loader />
				: <div>{post?.id}. {post?.title}</div>
			}
			<h1>
				Комментарии
			</h1>
			{isComLoading
				? <Loader />
				: <div>
					{comments.map(com => 
						<div style={{marginTop: 15}}>
							<h5>{com.email}</h5>
							<div>{com.body}</div>
						</div>
					)}
				</div>
			}
		</div>
	);
};

export default PostIdPage;