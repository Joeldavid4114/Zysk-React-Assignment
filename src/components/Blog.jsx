// import React from 'react';
// // import './App.css'; // Import CSS file

// const App = () => {
//   return (
//     <div className="app-container">
//       {/* Blog Section */}
//       <section className="blog-section">
//         <h2 className="blog-title">Latest blog posts</h2>
//         <p className="blog-description">Tools and strategies modern teams need to help their companies grow.</p>
//         <div className="blog-posts">
//           {/* Post 1 */}
//           <div className="blog-post">
//             <img src="/assets/ux.jpeg" alt="UX review presentations" className="post-image" />
//             <div className="post-content">
//               <p className="post-category">Design</p>
//               <h3 className="post-title">UX review presentations</h3>
//               <p className="post-description">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
//               <div className="post-footer">
//                 <span className="author">Olivia Rhye</span>
//                 <span className="date">20 Jan 2024</span>
//               </div>
//             </div>
//           </div>
//           {/* Post 2 */}
//           <div className="blog-post">
//             <img src="/assets/linear.png" alt="Migrating to Linear 101" className="post-image" />
//             <div className="post-content">
//               <p className="post-category">Product</p>
//               <h3 className="post-title">Migrating to Linear 101</h3>
//               <p className="post-description">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.</p>
//               <div className="post-footer">
//                 <span className="author">Phoenix Baker</span>
//                 <span className="date">19 Jan 2024</span>
//               </div>
//             </div>
//           </div>
//           {/* Post 3 */}
//           <div className="blog-post">
//             <img src="/assets/building.jpeg" alt="Building your API stack" className="post-image" />
//             <div className="post-content">
//               <p className="post-category">Software Engineering</p>
//               <h3 className="post-title">Building your API stack</h3>
//               <p className="post-description">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
//               <div className="post-footer">
//                 <span className="author">Lana Steiner</span>
//                 <span className="date">18 Jan 2024</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button className="view-all-button">View all posts</button>
//       </section>

//       {/* Call to Action Section */}
//       <section className="cta-section">
//         <h2 className="cta-title">Start your free trial</h2>
//         <p className="cta-description">Join over 4,000+ startups already growing with Untitled.</p>
//         <div className="cta-buttons">
//           <button className="learn-more-button">Learn more</button>
//           <button className="get-started-button">Get started</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;
import React from 'react';
// import './BlogSection.css'; // Import your CSS file
// import uxImage from './assets/ux.jpeg'; // Import your image files
// import linearImage from './assets/linear.png';
// import apiImage from './assets/building.jpeg';

function BlogSection() {
  const blogPosts = [
    {
      image: '/assets/ux.jpeg',
      category: 'Design',
      title: 'UX review presentations',
      content: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      date: '20 Jan 2024',
      pic:'/assets/women.jpeg',
    },
    {
      image: '/assets/linear.png',
      category: 'Product',
      title: 'Migrating to Linear 101',
      content: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: 'Phoenix Baker',
      date: '19 Jan 2024',
      pic:'/assets/men1.jpeg',
    },
    {
      image: '/assets/building.jpeg',
      category: 'Software Engineering',
      title: 'Building your API stack',
      content: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      date: '18 Jan 2024',
      pic:'/assets/women2.jpeg',
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>Our blog</h2>
        <a href="#" className="view-all">View all posts</a>
      </div>
      <div className="blog-posts-container">
        <h3>Lastest blog posts</h3>
        <p className="blog-intro">Tool and strategies modern teams need to help their companies grow.</p>
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div className="blog-post" key={index}>
              <img src={post.image} alt={post.title} className="post-image" />
              <p className="post-category">{post.category}</p>
              <h4 className="post-title">{post.title}</h4>
              <p className="post-content">{post.content}</p>
              <div className="post-meta">
                <div className="author-info">
                   <div className="author-image"></div> 
                  <div>
                    <p className="author-name">{post.author}</p>
                    <p className="post-date">{post.date}</p>
                  </div>
                </div>
                <a href="#" className="read-more">→</a>
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="trial-section">
            <h2>Start your free trial</h2>
            <p>Join over 4,000+ startups already growing with Untitled.</p>
            <div className='trial-buttons'>
                <a href='#' className='learn-more-button'>Learn more</a>
                <a href='#' className='get-started-button'>Get started</a>
            </div>
        </div>
    </section>
  );
}

export default BlogSection;