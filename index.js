const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));

app.use('/songdata/', createProxyMiddleware({
  target: 'http://localhost:1000',
  changeOrigin: true
}));

app.use('/relatedTracks/', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true
}))

app.use('/artistBio/', createProxyMiddleware({
  target: 'http://localhost:2000',
  changeOrigin: true
}))

app.use('/comments/', createProxyMiddleware({
  target: 'http://localhost:9000',
  changeOrigin: true
}))

app.use('/hashtags/', createProxyMiddleware({
  target: 'http://localhost:9001',
  changeOrigin: true
}))

app.use('/users/', createProxyMiddleware({
  target: 'http://localhost:9002',
  changeOrigin: true
}))

app.use('/', createProxyMiddleware({
  target: 'http://localhost:1000',
  changeOrigin: true
}))

app.use('/', createProxyMiddleware({
  target: 'http://localhost:1000',
  changeOrigin: true
}))

app.listen(port, () => console.log(`Listening on port ${port}`));

