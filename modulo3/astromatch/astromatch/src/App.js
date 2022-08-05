import React, { useState } from "react";
import styled from "styled-components";
import ShowProfileCard from "./components/HomeScreen";
import ShowMatchesList from "./components/MatchesListScreen";

const Page = styled.div `
  
`

function App() {

  const [page, setPage] = useState("homepage")

  const renderPage = () => {
    switch(page) {
      case "homepage":
        return <ShowProfileCard
        switchPages = {switchPages}
        />
      case "matcheslistpage":
        return <ShowMatchesList
        switchPages = {switchPages}
        />
    }
  }

  function switchPages () {
    if (page==="homepage") {
      return setPage("matcheslistpage")
    } else {
      return setPage("homepage")
    }
  }


  return (
    <Page>
      {renderPage()}
    </Page>
  );
}

export default App;
