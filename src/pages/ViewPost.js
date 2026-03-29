import { useEffect, useState, useCallback } from 'react';
import API from '../services/api';
import { useParams } from 'react-router-dom';

function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const fetchPost = useCallback(async () => {
    const res = await API.get(`/posts/${id}`);
    setPost(res.data);
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>

      {post.image_url && (
        <img src={post.image_url} alt="post" width="300" />
      )}

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export default ViewPost;