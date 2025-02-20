import { NotionAPI } from "notion-client";

const notion = new NotionAPI({ disablePostProcess: true });

export async function POST(
  request,
  context,
) {
  const body = await request.json();

  const pageId  = body.pageId;

  try {
    const notionPromise = notion.getPage(pageId);
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout after 9s")), 9000)
    );

    const data = await Promise.race([notionPromise, timeoutPromise]);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}