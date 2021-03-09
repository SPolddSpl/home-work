import React, { useState } from "react";
import { FlexboxGrid } from "rsuite";
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";

function Home() {
  const imgUrl =
    "https://media1.tenor.com/images/36043e36a922902244741bb2298e36f2/tenor.gif?itemid=7350365";
  return (
    <>
      <FlexboxGrid
        justify="center"
        align="middle"
        style={{ flexDirection: "column", height: '100%' }}>
        <FlexboxGridItem>
          <h1>LET'S ROCK</h1>
        </FlexboxGridItem>
        <FlexboxGridItem>
          <img src={imgUrl} />
        </FlexboxGridItem>
      </FlexboxGrid>
    </>
  );
}

export default Home;
