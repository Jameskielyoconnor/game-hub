import { List, ListItem, HStack, Image, Text, Spinner } from '@chakra-ui/react';
import useGenres from '../Hooks/useGenres'
import getCroppedImageURL from '../services/image-url';

const GenreList = () => {

  const {data, isLoading, error} = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner/>;

  return (
    <List>
      {data?.map(g => (        
            <ListItem key={g.id}>
              <HStack key={g.id} marginY='5px'>
                <Image src={getCroppedImageURL(g.image_background)} boxSize='32px' borderRadius={8}/>
                <Text fontSize='lg'>{g.name}</Text>
              </HStack>
            </ListItem>
         
    ))}
    </List>
  )
}

export default GenreList



// import useGenres from '../Hooks/useGenres';

// const GenreList = () => {
//   const {data} = useGenres();
  
//     return (
//     <ul>
//       {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
//     </ul>
//   )
// }

// export default GenreList
