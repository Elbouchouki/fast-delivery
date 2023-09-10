'use client'
import { toast } from 'sonner'

const Testme = () => {
  return (
    <button onClick={() => toast('My first toast')}>
      Give me a toast
    </button>
  )
}
export default Testme