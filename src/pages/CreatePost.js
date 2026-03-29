import { useState } from 'react';
import API from '../services/api';
import { TextField, Button } from '@mui/material';
import Editor from '../components/Editor';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    try {
      await API.post('/posts', { title, content });
      alert('Post created');
    } catch (err) {
      alert('Error creating post');
    }
  };

  return (
    <div>
      <h2>Create Post</h2>

      <TextField
        fullWidth
        label="Title"
        margin="normal"
        onChange={(e) => setTitle(e.target.value)}
      />

      <Editor content={content} setContent={setContent} />

      <br />

      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default CreatePost;