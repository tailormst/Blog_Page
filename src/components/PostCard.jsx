import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';
import './PostCard.css'; 

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="postcard-container">
                <div className="postcard-image-container">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="postcard-image w-full h-48 object-cover"
                    />
                </div>
                <h2 className="postcard-title">{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;