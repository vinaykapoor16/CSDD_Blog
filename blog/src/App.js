import React from 'react';
import './App.css';

function App() {
  const blogPosts = [
    {
      title: 'Exploring the Mountains',
      date: 'May 25, 2024',
      author: 'Vinay Kapoor',
      image: './ocean.png',
      text: 'Join us as we explore the majestic mountains and discover hidden trails and breathtaking views.',
    },
    {
      title: 'The Beauty of the Ocean',
      date: 'April 14, 2024',
      author: 'Vinay Kapoor',
      image: './mountain.png',
      text: 'Dive into the depths of the ocean and uncover the secrets of marine life with our comprehensive guide.',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="App">
      <header className="top-bar">
        <div className="logo">Nature Blog</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Adventures</a>
          <a href="#">Contact Us</a>
        </nav>
      </header>
      <main className="blog-posts">
        {blogPosts.map((post, index) => (
          <article className="blog-post" key={index}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-meta">
              <span className="post-date">{post.date}</span> by{' '}
              <span className="post-author">{post.author}</span>
            </p>
            <img src={post.image} alt={`Image for ${post.title}`} className="post-image" />
            <p className="post-text">{post.text}</p>
            <hr />
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
