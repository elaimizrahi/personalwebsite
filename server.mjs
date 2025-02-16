import express from "express";
import cors from "cors";
import { NotionAPI } from "notion-client";

const app = express();
const notion = new NotionAPI();

app.use(cors()); // Enable CORS

// Notion API Proxy Endpoint
app.get("/notion/:pageId", async (req, res) => {
  try {
    const { pageId } = req.params;
    const data = await notion.getPage(pageId);
    res.json(data);
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    res.status(500).json({ error: "Failed to fetch Notion page" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🔥 Server running on http://localhost:${PORT}`));
