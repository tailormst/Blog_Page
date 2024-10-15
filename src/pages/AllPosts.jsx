import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([]);

    // Fetch posts only when the component mounts
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []); 

    return (
        <div className='w-full py-8 bg-gray-950 text-white border-t-2 border-t-white'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <div className="text-center w-full text-white">No posts available</div>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
