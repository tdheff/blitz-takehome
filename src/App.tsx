import { styled } from 'goober'


import { SliderCard } from './components/cards/SliderCard'
import { BlocksCard } from './components/cards/BlocksCard'
import { StatsCard } from './components/cards/StatsCard'

const ContainerDiv = styled("div")`
  padding: 0.9em 0.7em;
  width: 19.7em;
`

function App() {

  return (
    <ContainerDiv>
      <BlocksCard />
      <SliderCard />
      <StatsCard />
    </ContainerDiv>
  )
}

export default App
