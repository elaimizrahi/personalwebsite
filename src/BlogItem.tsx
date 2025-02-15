import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const blogContent: Record<string, string> = {
  "1": `# Understanding React Hooks
  React hooks let you use state and other features without writing a class.
  
  ## useState Example:
  \`\`\`tsx
  const [count, setCount] = useState(0);
  \`\`\`
  `,
  "2": `# Building a Full-Stack App
  Learn how to connect your frontend with a backend efficiently.
  
  ## Steps:
  - Set up Express.js
  - Connect it to React
  - Fetch data with Axios
  `,
  "3": `# Optimizing React Performance
  Improve React performance using memoization and lazy loading.
  
  ## Techniques:
  - React.memo
  - useCallback
  - useMemo


> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
  `,
};

const BlogItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const content = blogContent[id || ""];

  if (!content) {
    return <div className="text-center text-red-500">Blog post not found.</div>;
  }

  return (
    <div className="text-left">

        <ReactMarkdown className="markdown">{content}</ReactMarkdown>
        </div>

  );
};

export default BlogItem;
