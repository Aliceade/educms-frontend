import { useState } from 'react';
import API from '../services/api';
import Layout from '../components/Layout';

function Upload() {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await API.post('/media', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      alert('Uploaded successfully');
    } catch (err) {
      alert('Upload failed');
    }
  };

  return (
    <Layout>
      <h2>Upload Media</h2>

      <div style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '500px'
      }}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <br /><br />

        <button
          onClick={uploadFile}
          style={{
            padding: '10px 15px',
            background: '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Upload
        </button>
      </div>
    </Layout>
  );
}

export default Upload;