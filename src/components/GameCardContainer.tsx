import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const GameCardContainer = ({children}: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" padding='10px'>
      {children}
    </Box>
  )
}



// import { Box } from "@chakra-ui/react";
// import { Children, ReactNode } from "react";

// interface Props {
//   children: ReactNode;
// }

// const GameCardContainer = ({ children }: Props) => {
//   return (
//     <Box width="250px" borderRadius={10} overflow="hidden">
//       {children}
//     </Box>
//   );
// };

// export default GameCardContainer;
