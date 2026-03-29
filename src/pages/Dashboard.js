import { useEffect, useState } from 'react';
import API from '../services/api';
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await API.get('/posts');
    setPosts(res.data);
  };

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* HEADER */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard
      </Typography>

      {/* STATS */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6">Total Posts</Typography>
            <Typography variant="h4" fontWeight="bold">
              {posts.length}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6">Published</Typography>
            <Typography variant="h4" fontWeight="bold">
              {posts.length}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6">Drafts</Typography>
            <Typography variant="h4" fontWeight="bold">
              0
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* ACTION BAR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <TextField
          label="Search posts..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button variant="contained" onClick={() => navigate('/create')}>
          + New Post
        </Button>
      </div>

      {/* POSTS LIST */}
      <Grid container spacing={3}>
        {filtered.map(post => (
          <Grid item xs={12} md={6} lg={4} key={post.post_id}>
            <Paper
              sx={{
                p: 2,
                borderRadius: 3,
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 4
                }
              }}
            >
              {post.image_url && (
                <img
                  src={post.image_url}
                  alt=""
                  style={{
                    width: '100%',
                    height: 150,
                    objectFit: 'cover',
                    borderRadius: 10,
                    marginBottom: 10
                  }}
                />
              )}

              <Typography variant="h6" fontWeight="bold">
                {post.title}
              </Typography>

              <div style={{ marginTop: 10 }}>
                <Button size="small" onClick={() => navigate(`/view/${post.post_id}`)}>
                  View
                </Button>

                <Button size="small" onClick={() => navigate(`/edit/${post.post_id}`)}>
                  Edit
                </Button>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Dashboard;