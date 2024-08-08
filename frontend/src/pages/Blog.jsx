// src/BlogForm.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Box, MenuItem, Select, FormControl, InputLabel, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from 'axios';
import Cookies from 'js-cookie';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [sector, setSector] = useState('');
  const [image, setImage] = useState(null);
  const [likes, setLikes] = useState(0);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]); // Store the file object
    }
  };

  const handleImageDelete = () => {
    setImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('blogImage', image);

    try {
      // Retrieve the access token from cookies
      const token = Cookies.get('accessToken');

      const response = await axios.post('http://localhost:4000/api/blogs/createBlog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`, // Attach token to headers
        },
      });
      console.log('Blog created successfully:', response.data);
      // Reset form fields or display a success message
      setTitle('');
      setContent('');
      setSector('');
      setImage(null);
    } catch (error) {
      console.error('Error creating blog:', error);
      // Handle error (display error message or similar)
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleShare = () => {
    // Handle share logic
    alert('Blog shared!');
  };

  return (
    <Container maxWidth={false} disableGutters style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'url(https://source.unsplash.com/random) no-repeat center center/cover', padding: '2rem' }}>
      <Paper elevation={5} style={{ padding: '2rem', width: '100%', maxWidth: '800px', background: 'rgba(255, 255, 255, 0.9)', borderRadius: '15px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(10px)' }}>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" style={{ color: '#0d47a1', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>
            Create a New Blog Post
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                InputLabelProps={{ style: { color: '#0d47a1' } }}
                inputProps={{ style: { color: '#0d47a1' } }}
                style={{ backgroundColor: '#fff', borderRadius: '5px' }}
              />
            </Box>
            <Box mb={3}>
              <FormControl fullWidth variant="outlined" style={{ backgroundColor: '#fff', borderRadius: '5px' }}>
                <InputLabel style={{ color: '#0d47a1' }}>Sector</InputLabel>
                <Select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  label="Sector"
                  style={{ color: '#0d47a1' }}
                >
                  <MenuItem value="healthcare">Healthcare</MenuItem>
                  <MenuItem value="agriculture">Agriculture</MenuItem>
                  <MenuItem value="smart homes">Smart Homes</MenuItem>
                  <MenuItem value="smart cities">Smart Cities</MenuItem>
                  <MenuItem value="others">Others</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Content"
                variant="outlined"
                multiline
                rows={8}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                InputLabelProps={{ style: { color: '#0d47a1' } }}
                inputProps={{ style: { color: '#0d47a1' } }}
                style={{ backgroundColor: '#fff', borderRadius: '5px' }}
              />
            </Box>
            <Box mb={3} textAlign="center">
              <Button variant="contained" component="label" style={{ backgroundColor: '#0d47a1', color: '#fff', borderRadius: '20px', textTransform: 'none', padding: '10px 20px', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>
                <AddPhotoAlternateIcon style={{ marginRight: '8px' }} />
                Upload Image
                <input type="file" hidden accept="image/*" onChange={handleImageChange} />
              </Button>
              {image && (
                <Box mt={2} position="relative" display="inline-block">
                  <motion.img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    style={{ maxWidth: '100%', maxHeight: '300px', display: 'block', margin: '1rem auto', border: '2px solid #0d47a1', borderRadius: '10px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <IconButton
                    style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'white' }}
                    onClick={handleImageDelete}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </Box>
              )}
            </Box>
            <Box textAlign="center">
              <Button type="submit" variant="contained" style={{ backgroundColor: '#0d47a1', color: '#fff', borderRadius: '20px', textTransform: 'none', padding: '10px 20px', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>
                Submit
              </Button>
            </Box>
          </form>
          <Box mt={4} textAlign="center">
            <Typography variant="h6" style={{ color: '#0d47a1', fontWeight: 'bold' }}>Likes: {likes}</Typography>
            <IconButton color="primary" onClick={handleLike} style={{ marginRight: '10px' }}>
              <ThumbUpIcon />
            </IconButton>
            <IconButton color="primary" onClick={handleShare}>
              <ShareIcon />
            </IconButton>
          </Box>
        </motion.div>
      </Paper>
    </Container>
  );
};

export default BlogForm;
