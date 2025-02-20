import React from "react";
import {
  Group,
  Button,
  Stack,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaArrowRight } from "react-icons/fa";

const Blog: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

    const blogPosts = [
        {  pageId: '1a05874c3164800bafb6e6aac60bfee0', date: 'Feb 19, 2025', title: "Consili Project Overview"},
        {  pageId: '1a05874c316480358a07e79b0810a666', date: 'Feb 15, 2025', title: "Scaling Consili's Infrastructure" },
        {  pageId: '1a05874c3164803db3f0e8cbb2143546', date: 'Feb 14, 2025', title: "Serverless Vercel Functions" },
      ];
  return (
    <div className="relative z-10 flex flex-col items-center text-left w-full max-w-2xl">
      <div className="flex flex-col items-center justify-center w-full px-6">
        
        {false ? <div style={{ color: "black", fontWeight: "bolder", fontSize: 15 }}> blog posts  will be coming soon! 👀</div>: <ul className="w-full max-w-2xl">
          {blogPosts.map((post) => (
            <li key={post.pageId} className="w-full">
              <Link to={`/blog/${post.pageId}`} className="block w-full">
                <Button
                  variant="outline"
                  color="grey"
                  fullWidth
                  radius="sm"
                  mt="md"

                  style={{height: isTabletOrMobile ? 50 : 75}}
                  
                  justify={isTabletOrMobile ? "flex-start" : "space-between"}
                  leftSection={
                    !isTabletOrMobile ? <div className="text-left" style={{ color: "black", fontWeight: "bolder", fontSize: 15}}>
                      {post.title}
                    </div> : <></>
                  }
                  rightSection={
                    !isTabletOrMobile ? <Group className="text-right" style={{ color: "gray", fontSize: isTabletOrMobile ? 4 : 14 }}>
                      {post.date}
                      <FaArrowRight />
                    </Group> : <></>
                  }
                >
                  {isTabletOrMobile ? <Stack className="text-left" style={{justifyContent: 'left', display: 'flex'}}>
                    <div className="text-left" style={{ color: "black", fontWeight: "bolder", fontSize: 15}}>
                      {post.title}
                    </div>
                    <Group className="text-right" style={{ color: "gray", fontSize: isTabletOrMobile ? 10 : 14 }}>

                    {post.date}
                    <FaArrowRight />
                    </Group>

                    </Stack> : <></>}
                </Button>
              </Link>
            </li>
          ))}
        </ul>}
  
      </div>
    </div>
)};  
export default Blog;
