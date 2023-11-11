import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props {
  score: number;
}

const CriticScore = ({score}: Props) => {
  const color = score > 90 ? 'green' : score > 80 ? 'yellow' : 'red';
  return (
    <Badge fontSize={15} paddingX={2} borderRadius={5} colorScheme={color}>
      {score}
    </Badge>
  )
}

export default CriticScore



// import { Badge } from '@chakra-ui/react';

// interface Props {
//     score: number;
// }

// const CriticScore = ({score}: Props) => {
//     let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

//     return (
//     <div>
//       <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
//     </div>
//   )
// }

// export default CriticScore
