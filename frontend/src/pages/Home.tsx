import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: "123", content: message }),
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div className="p-4">
      <textarea
        className="border p-2 w-full"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 mt-2" onClick={sendMessage}>
        Send
      </button>
      <p className="mt-4">Bot: {response}</p>
    </div>
  );
}
