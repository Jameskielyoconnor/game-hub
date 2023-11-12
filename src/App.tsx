import { Grid, GridItem, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genres } from "./Hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hooks/useGames";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav" bg="gold">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform ={selectedPlatform}  onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
};

export default App;

// import React from "react";
// import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
// import NavBar from "./components/NavBar";
// import GameGrid from "./components/GameGrid";
// import GenreList from "./components/GenreList";

// const App = () => {
//   return (
//     <Grid
//       templateAreas={{
//         base: `"nav" "main"`,
//         lg: `"nav nav" "aside main"`,
//       }}
//     >
//       <GridItem area="nav">
//         <NavBar />
//       </GridItem>
//       <Show above="lg">
//         <GridItem area="aside">
//           <GenreList/>
//       </GridItem>
//       </Show>
//       <GridItem area="main">
//         <GameGrid />
//       </GridItem>
//     </Grid>
//   );
// };

// export default App;
