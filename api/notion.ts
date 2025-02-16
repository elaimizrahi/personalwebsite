// pages/api/notion.ts (Next.js API Route for Vercel)
import { NextApiRequest, NextApiResponse } from "next";
import { NotionAPI } from "notion-client";

const notion = new NotionAPI();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { pageId } = req.query;

    if (!pageId || typeof pageId !== "string") {
      return res.status(400).json({ error: "Missing or invalid pageId" });
    }

    const data = await notion.getPage(pageId);
    res.setHeader("Access-Control-Allow-Origin", "*"); // Enable CORS
    res.setHeader("Access-Control-Allow-Methods", "GET");

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    return res.status(500).json({ error: "Failed to fetch Notion page" });
  }
}
