import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList";

interface Props {
    game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={{sm: 1, md: 2, lg: 3, xl: 4}} padding='10px' overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <PlatformIconsList platforms={game.parent_platform.map(p => p.platform)} />
        </CardBody>
    </Card>
  )
}

export default GameCard;