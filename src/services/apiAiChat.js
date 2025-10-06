import { fetchWithAuth } from "./apiAuthentication";

export async function createChat(chatMessage) {
  try {
    const response = fetchWithAuth("https://dev-api.redowise.com/v1/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        raw_content: chatMessage.raw_content,
      }),
    });

    const data = await response.json();

    if (data.statusCode !== 200) {
      throw new Error(data.errorMessage);
    }

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
