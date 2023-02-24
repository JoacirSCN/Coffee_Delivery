import { CompleteOrderForm } from './Components/CompleteOrderForm'
import { SelectedCoffees } from './Components/SelectedCoffees'
import { CompleteOrderContainer } from './styles'

export function CompleteOrderPage() {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  )
}
