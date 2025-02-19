import { NotionAPI } from "notion-client";

// Create the Notion client
const notion = new NotionAPI({ disablePostProcess: true });

/**
 * GET /notion/[pageId]
 *
 * Example:  /notion/93a16593140a431cb7bef9e1c77a68ce
 */
export async function POST(
  request,
  context,
) {
  const body = await request.json();

  // 3. Do something with the parsed data
  console.log("Request body:", body);  const pageId  = body.pageId;
  console.log("Received GET /notion/", typeof(body), pageId);

  try {
    // Add a manual 9-second timeout to avoid indefinite hangs
    const notionPromise = notion.getPage(pageId);
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout after 9s")), 9000)
    );

    // Race the Notion API call and the timeout
    const data = await Promise.race([notionPromise, timeoutPromise]);

    console.log("Successfully fetched data, sending response");

    // Return the JSON data
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
