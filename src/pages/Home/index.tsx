import { useCart } from '../../hooks/useCart'
import { Intro } from './Components/Intro/intro'
import { OurCoffees } from './Components/OurCoffees'
import { HomeContainer } from './styles'

export function HomePage() {
  //const { cartItems } = useCart()

  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}
