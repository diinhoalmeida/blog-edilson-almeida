import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './style.css';
import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface IBlog {
    blog: IBlogItem;
}

interface IBlogItem {
    id: number, 
    description: string, 
    title: string, 
    createdAt: string, 
    authorName: string, 
    authorAvatar: string, 
    category: string, 
    cover: string   
}

const BlogItem = ({ 
    blog: {
        id, 
        description, 
        title, 
        createdAt, 
        authorName, 
        authorAvatar, 
        category, 
        cover
        }
    }: IBlog) => {
    return (
        <div className="blogItem-wrap">
            <img className="blogItem-cover" src={cover} alt="cover" />
            <Chip label={category} />
            <h3>{title}</h3>
            <p className="blogItem-description">{description}</p>
            <footer>
                <div className="blogItem-author">
                    <div className="blogItem-author-data">
                        <img src={authorAvatar} alt="avatar" />
                        <div>
                            <h6>{authorName}</h6>
                            <p>{createdAt}</p>
                        </div>
                    </div>
                    <Link className="blogItem-link" to={`/blog/${id}`}>
                        <BsFillArrowRightCircleFill height={20} />
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default BlogItem;