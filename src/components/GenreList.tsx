import {
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../Hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();



  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data?.map((g) => (
        <ListItem key={g.id}>
          <HStack key={g.id} marginY="5px">
            <Image
              src={getCroppedImageURL(g.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              whiteSpace='normal'
              textAlign='left'
              objectFit='cover'
              fontWeight={g.id == selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectedGenre(g)}
              fontSize="lg"
              variant="link"
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
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
