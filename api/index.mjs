// api/index.mjs
import express from "express";
import cors from "cors";
import { NotionAPI } from "notion-client";
import serverless from "serverless-http";

const app = express();
app.use(cors());

const notion = new NotionAPI({ disablePostProcess: true });

app.get("/notion/:pageId", async (req, res) => {
  try {
    const { pageId } = req.params;
    console.log("called notion API with pageId:", pageId);

    // Add an explicit manual timeout so we don't exceed 10s
    const notionPromise = await notion.getPage(pageId);

    // Race the Notion fetch and the timeout
    res.status(200).json(notionPromise);
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    res.status(500).json({ error: error.message });
  }
});

export default serverless(app);
