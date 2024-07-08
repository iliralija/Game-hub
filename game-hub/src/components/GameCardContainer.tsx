import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

function GameCardContainer({children}: Props) {
  return (
    <Box width='300px' borderRadius={{sm: 1, md: 2, lg: 3, xl: 4}} padding='10px' overflow="hidden">
        {children}
    </Box>
  )
}

export default GameCardContainer