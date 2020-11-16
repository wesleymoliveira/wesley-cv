import React, { useState, useEffect } from "react";
import Pages from "./pages";
import Loading from "./components/Loading";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(
      "https://gitconnected.com/v1/portfolio/wesleymoliveira?theme={elegant}"
    )
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <Loading />;
  }

  return <Pages user={user} />;
}

export default App;
