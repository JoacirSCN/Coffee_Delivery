import { Intro } from './Components/Intro/intro'
import { OurCoffees } from './OurCoffees'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}
