import React, { useState } from "react";
import ShowProfileCard from "./components/HomeScreen";
import ShowMatchesList from "./components/MatchesListScreen";

function App() {

  const [page, setPage] = useState("homepage")

  const renderPage = () => {
    switch(page) {
      case "homepage":
        return <ShowProfileCard/>
      case "matcheslistpage":
        return <ShowMatchesList/>
    }
  }

  function switchPage () {
    if (page==="homepage") {
      return setPage("matcheslistpage")
    } else {
      return setPage("homepage")
    }
  }

  return (
    <div className="App">
      {renderPage()}

    </div>
  );
}

export default App;
