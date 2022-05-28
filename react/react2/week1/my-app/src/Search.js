import { useState } from "react";

export default function Search({ onSearch }) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onSearch(text);
        }}
      >
        Search
      </button>
    </>
  );
}
