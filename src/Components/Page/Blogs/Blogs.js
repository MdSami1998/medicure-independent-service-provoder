import React from 'react';

const Blogs = () => {
    const x = () => {
console.log('clicked')
    }
    return (
        <div>
            <button onClick={x}>Blogs</button>
        </div>
    );
};

export default Blogs;