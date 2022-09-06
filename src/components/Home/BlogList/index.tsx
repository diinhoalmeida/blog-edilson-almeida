import React from 'react';
import BlogItem from './BlogItem';
import './style.css';

const BlogList = ({ blogs }: any) => {
    return (
        <div className="blogList-wrap">
            {blogs.map((blog: any) => (
                <BlogItem blog={blog} key={blog.id} />    
            ))}
        </div>
    )
}

export default BlogList;