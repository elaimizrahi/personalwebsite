import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { NotionRenderer } from "react-notion-x";
import { NotionAPI } from "notion-client";

// Required core styles for react-notion-x
import "react-notion-x/src/styles.css";

// Code syntax highlighting
import "prismjs/themes/prism-tomorrow.css";

// Math equation rendering
import "katex/dist/katex.min.css";

// Third-party Notion components
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Pdf } from "react-notion-x/build/third-party/pdf";

interface NotionPageProps {
  pageId: string;
}


const NotionPage: React.FC<NotionPageProps> = ({ pageId }) => {
  const [recordMap, setRecordMap] = useState<any>(null);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (!pageId) return; // in case pageId is empty or undefined

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        console.log("Fetching Notion data for page:", pageId);

        // Vercel serverless endpoint
        // e.g. /api/index/notion/:pageId
        const res = await fetch(`/api/index/notion/${pageId}`, { signal });

        if (!res.ok) {
          throw new Error(`Error fetching page: ${res.status} ${res.statusText}`);
        }

        const json = await res.json();
        if (signal.aborted) return; // if request was aborted mid-fetch

        setRecordMap(json);

        // Extract page title (if it exists)
        const firstBlockId = Object.keys(json.block || {})[0];
        if (firstBlockId) {
          const pageBlock = json.block[firstBlockId]?.value;
          if (pageBlock?.properties?.title) {
            const extractedTitle = pageBlock.properties.title
              .map((text: any) => text[0])
              .join(" ");
            setTitle(extractedTitle);
          }
        }
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted:", pageId);
        } else {
          console.error("Error fetching Notion data:", error);
        }
      }
    };

    fetchData();

    // Cleanup to abort fetch if the component unmounts
    return () => {
      controller.abort();
    };
  }, [pageId]);

  if (!recordMap) return <p>Loading...</p>;

  return (
    <div className="notion-container text-left">
      <NotionRenderer
        recordMap={recordMap}
        fullPage
        // Optional custom "pageTitle" prop:
        pageTitle={<div className="text-center">{title}</div>}
        previewImages={true}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
          Header: () => null, // Removes Notion header
        }}
      />
    </div>
  );
};


const BlogItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  return <NotionPage pageId="93a16593140a431cb7bef9e1c77a68ce" />;
};

export default BlogItem;
