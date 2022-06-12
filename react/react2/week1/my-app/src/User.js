import { useEffect, useState } from "react";

async function fetchUser() {
  const response = await fetch(
    `https://api.github.com/search/users?q=${inputValue}`
  );
  const data = await response.json();
  return data;
}

export function User() {
  const [username, setUsername] = useState([]);
  const [request, setRequestState] = useState("initial");

  useEffect(() => {
    if (inputValue !== "") {
      setRequestState("loading");
      fetchUser()
        .then((data) => {
          setUsername(data);
          setRequestState("success");
        })
        .catch((e) => setRequestState("error"));
    }
  });
}
