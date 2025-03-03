import React from 'react'

const Menu = () => {
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
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <div className='post' key={post.id}>
                    <img src={post.img} alt='' />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu