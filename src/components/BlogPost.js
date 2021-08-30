import React from "react";
import { useParams } from "react-router-dom";

export const BlogPost = () => {
    const { slug } = useParams();

    return (
        <div>
          <h1>So ... {slug}</h1>  
        </div>
    )
}

export default BlogPost