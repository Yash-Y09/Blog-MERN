import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Lorem impkrn nowe sjfw",
      desc: "iuewf ihowe ihweoi oihweor ihwor9 hwen9w e9wr0",
      img: "https://picsum.photos/200/300"
    },
    {
      id: 2,
      title: "Lorem impkrn nowe sjfw",
      desc: "iuewf ihowe ihweoi oihweor ihwor9 hwen9w e9wr0",
      img: "https://picsum.photos/200/300"
    },
    {
      id: 3,
      title: "Lorem impkrn nowe sjfw",
      desc: "iuewf ihowe ihweoi oihweor ihwor9 hwen9w e9wr0",
      img: "https://picsum.photos/200/300"
    },
    {
      id: 4,
      title: "Lorem impkrn nowe sjfw",
      desc: "iuewf ihowe ihweoi oihweor ihwor9 hwen9w e9wr0",
      img: "https://picsum.photos/200/300"
    },
  ]

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt="" />
            </div>
            <div className='content'>
              <Link className='link' to={`post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>

            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Home