import { Grid, GridItem, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genres } from "./Hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hooks/useGames";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform ={gameQuery.platform}  onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
        <GameGrid gameQuery={gameQuery}/>
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
