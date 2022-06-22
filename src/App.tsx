import { useState } from "react"



export default function App() {
  const [checkoutStep, setCheckoutStep] = useState('Details')
  return (
    <div>{
      checkoutStep === 'Details' && <h1>Details</h1>
      <button type="button" onClick={() => } ></button>
      }</div>
  )
}