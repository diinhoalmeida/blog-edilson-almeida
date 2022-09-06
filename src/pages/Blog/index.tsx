import React, { useEffect, useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link, Params, useParams } from 'react-router-dom';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import { blogList } from '../../config/data';
import './style.css';

const Blog = () => {
    const {id}: any = useParams();
    const [blog, setBlog] = useState<any>(null);

    useEffect(() => {
        let blog = blogList.find(blog => blog.id === parseInt(id));

        if (blog) {
            setBlog(blog);
        }
    }, [])

    return (
        <div>
            <Link className="link-to-home" to="/">
                <BsFillArrowLeftCircleFill />
                <p>Go Back!</p>
            </Link>

            {
                blog ?
                <div className='blog-wrap'>
                    <header>
                        <p className='blog-date'>Published {blog.createdAt}</p>
                        <h1>{blog.title}</h1>
                        <div className='blog-subCategory'>
                        {blog.subCategory.map((category: string, i: number) => (
                            <div key={i}>
                            <Chip label={category} />
                            </div>
                        ))}
                        </div>
                    </header>
                    <img src={blog.cover} alt='cover' />
                    <p className='blog-desc'>{blog.description}</p>
                </div>
                :
                <EmptyList />
            }
        </div>
    )
}

export default Blog;