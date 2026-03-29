import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import ViewPost from './pages/ViewPost';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/create"
          element={
            <Layout>
              <CreatePost />
            </Layout>
          }
        />

        <Route
          path="/edit/:id"
          element={
            <Layout>
              <EditPost />
            </Layout>
          }
        />

        <Route
          path="/view/:id"
          element={
            <Layout>
              <ViewPost />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;