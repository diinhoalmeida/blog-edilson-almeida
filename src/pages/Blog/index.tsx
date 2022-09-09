import React, { useEffect, useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';
import { Link, Params, useParams } from 'react-router-dom';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import { blogList } from '../../config/data';
import './style.css';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

const Blog = () => {
    const {id}: any = useParams();
    const [blog, setBlog] = useState<any>(null);

    useEffect(() => {
        let blog = blogList.find(blog => blog.id === parseInt(id));

        if (blog) {
            setBlog(blog);
        }
    }, [])

    const teste: any = dark;

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
                        <p className='blog-date'>Publicado em {blog.createdAt}</p>
                        <h1>{blog.title}</h1>
                        <div className='blog-subCategory'>
                        {blog?.subCategory.map((category: string, i: number) => (
                            <div key={i}>
                            <Chip label={category} />
                            </div>
                        ))}
                        </div>
                    </header>
                    <img src={blog.cover} alt='cover' />
                    {blog.textblog && (
                        <div className="blog-wrap-markdown-container">
                        {blog.textblog ?.map(({ paragraph, tomarkdown, gifblog, theproblem, topic, subtopic }: any, index: number) => {
                            return (
                            <div className="blog-wrap-markdown-items" style={{marginBottom: '1.5em'}} key={index} >
                                {topic && (
                                    <h2>{topic}</h2>
                                )}
                                {subtopic && (
                                    <h3>{subtopic}</h3>
                                )}
                                {paragraph && (
                                    <p>{paragraph}</p>
                                )}
                                {tomarkdown &&(
                                    <ReactMarkdown
                                        children={tomarkdown}
                                        components={{
                                        code({ children, ...props }) {
                                            return (
                                            <SyntaxHighlighter
                                                children={String(children).replace(/\n$/, "")}
                                                style={teste}
                                                PreTag='div'
                                                {...props}
                                            />
                                            );
                                        },
                                        }}
                                    />
                                )}
                                {gifblog && (
                                    <img 
                                        src={gifblog} 
                                        alt="gif" 
                                        style={{
                                            display: 'block',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            width: '50%'
                                        }}
                                    />
                                )}
                                {theproblem && (
                                    <h3 
                                        style={
                                            {
                                                textAlign: 'justify', 
                                                width: '90%',
                                                display: 'block',
                                                marginLeft: 'auto',
                                                marginRight: 'auto',
                                            }
                                        }
                                    >{theproblem}</h3>
                                )}
                            </div>
                            );
                        })}
                        </div>
                    )}
                </div>
                :
                <EmptyList />
            }
        </div>
    )
}

export default Blog;