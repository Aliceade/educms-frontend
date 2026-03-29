import { useEffect, useState } from 'react';
import API from '../services/api';
import { useParams } from 'react-router-dom';
import Editor from '../components/Editor';
import { Button } from '@mui/material';

function EditPost() {
  const { id } = useParams();

  const [post, setPost] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    // 1. Move the function inside the useEffect
    const fetchPost = async () => {
      try {
        const res = await API.get(`/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    // 2. Call it immediately
    fetchPost();
    
    // 3. Add 'id' to the dependency array, as the fetch relies on it
  }, [id]); 

  const handleUpdate = async () => {
    try {
      await API.put(`/posts/${id}`, post);
      alert('Updated successfully');
    } catch (error) {
      console.error("Error updating post:", error);
      alert('Failed to update post');
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>

      <input
        value={post.title}
        onChange={(e) =>
          setPost({ ...post, title: e.target.value })
        }
      />

      <Editor
        content={post.content}
        setContent={(value) =>
          setPost({ ...post, content: value })
        }
      />

      <br />

      <Button variant="contained" onClick={handleUpdate}>
        Update
      </Button>
    </div>
  );
}

export default EditPost;

/*
import { useEffect, useState } from 'react';
import API from '../services/api';
import { useParams } from 'react-router-dom';
import Editor from '../components/Editor';
import { Button } from '@mui/material';

function EditPost() {
  const { id } = useParams();

  const [post, setPost] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const res = await API.get(`/posts/${id}`);
    setPost(res.data);
  };

  const handleUpdate = async () => {
    await API.put(`/posts/${id}`, post);
    alert('Updated successfully');
  };

  return (
    <div>
      <h2>Edit Post</h2>

      <input
        value={post.title}
        onChange={(e) =>
          setPost({ ...post, title: e.target.value })
        }
      />

      <Editor
        content={post.content}
        setContent={(value) =>
          setPost({ ...post, content: value })
        }
      />

      <br />

      <Button variant="contained" onClick={handleUpdate}>
        Update
      </Button>
    </div>
  );
}

export default EditPost;
*/