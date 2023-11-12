import { List, ListItem, HStack, Image, Text, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genres } from "../Hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
}

const GenreList = ({onSelectedGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data?.map((g) => (
        <ListItem key={g.id}>
          <HStack key={g.id} marginY="5px">
            <Image
              src={getCroppedImageURL(g.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button onClick={() => onSelectedGenre(g)} fontSize="lg" variant='link'>{g.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

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
