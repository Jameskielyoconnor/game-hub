import { Card, CardBody, Heading, Image, Text, list, HStack } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../Hooks/useGames'
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageURL from '../services/image-url';
import Emoji from './Emoji';

interface Props{
  game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
      <Image src = {getCroppedImageURL(game.background_image)}/>
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
          <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top}/></Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard




// import React from 'react'
// import { Game } from '../Hooks/useGames';
// import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
// import PlatformIconList from './PlatformIconList';
// import CriticScore from './CriticScore';
// import getCroppedImageURL from '../services/image-url';

// interface Props {
//     game: Game;
// }

// const GameCard = ({game}: Props) => {
//   return (
//     <Card>
//         <Image src={getCroppedImageURL(game.background_image)}/>
//         <CardBody>
//             <Heading fontSize='2xl'>{game.name}</Heading>
//             <HStack justifyContent={'space-between'}>
//                 <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
//                 <CriticScore score={game.metacritic}/>
//             </HStack>    
//         </CardBody>
//     </Card>
//   )
// }

// export default GameCard
