import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  Stack,
  Group,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const Blog: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

    const blogPosts = [
        { id: "1", date: 'Feb 15, 2025', title: "Understanding React Hooks - my struggle", summary: "A deep dive into useState, useEffect, and custom hooks. Best practices for keeping your React app fast and smooth." },
        { id: "2", date: 'Feb 15, 2025', title: "Building a Full-Stack App", summary: "How to connect a React frontend with a Node.js backend." },
        { id: "3", date: 'Feb 15, 2025', title: "Optimizing React Performance", summary: "Best practices for keeping your React app fast and smooth." },
      ];
  return (
    <div className="min-h-screen text-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
    {/* Profile Section */}
    <div className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl">
      <div className="flex flex-col items-center justify-center w-full px-6">
        
        {false ? <div style={{ color: "black", fontWeight: "bolder", fontSize: 15 }}> blog posts  will be coming soon! 👀</div>: <ul className="w-full max-w-2xl">
          {blogPosts.map((post) => (
            <li key={post.id} className="w-full">
              <Link to={`/blog/${post.id}`} className="block w-full">
                <Button
                  variant="subtle"
                  color="black"
                  fullWidth
                  radius="sm"
                  mt="md"

                  style={{height: isTabletOrMobile ? 50 : 75}}
                  
                  justify="space-between"
                  leftSection={
                    <div style={{ color: "black", fontWeight: "bolder", fontSize: 15 }}>
                      {post.title}
                    </div>
                  }
                  rightSection={
                    <div style={{ color: "gray", fontSize: isTabletOrMobile ? 10 : 14 }}>
                      {post.date}
                    </div>
                  }
                />
              </Link>
            </li>
          ))}
        </ul>}
  
      </div>
    </div>
  </div>
)};  
export default Blog;
