import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Pdf } from "react-notion-x/build/third-party/pdf";

const NotionPage = ({ pageId }: { pageId: string }) => {
  const [recordMap, setRecordMap] = useState<any>(null);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/index`,  {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Custom-Header": "MyValue"
          },
          body: JSON.stringify({pageId: pageId})
        })
        const json = await res.json();
        setRecordMap(json);

        const pageBlockId = Object.keys(json.block)[0];
        const pageBlock = json.block[pageBlockId]?.value;

        if (pageBlock?.properties?.title) {
          const extractedTitle = pageBlock.properties.title
            .map((text: any) => text[0])
            .join(" ");
          setTitle(extractedTitle);
        }
      } catch (error) {
        console.error("Error fetching Notion data:", error);
      }
    };

    fetchData();
  }, [pageId]);

  if (!recordMap) return <p>Loading...</p>;

  return (
    <div className="notion-container text-left" style={{maxWidth: '100vw'}}>
      <NotionRenderer
        recordMap={recordMap}
        fullPage
        pageTitle={<div className='text-center'>{title}</div>}
        previewImages={true}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
          Header: () => null,
        }}
      />
    </div>
  );
};

const BlogItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <NotionPage pageId={id ?? '1'}/>;
};

export default BlogItem;
