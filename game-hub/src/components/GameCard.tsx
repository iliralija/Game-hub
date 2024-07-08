import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card width='300px' borderRadius={{sm: 1, md: 2, lg: 3, xl: 4}} padding='10px' overflow="hidden">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent='space-between'>
              <PlatformIconsList platforms={game.parent_platform.map(p => p.platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard;