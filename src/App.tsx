import { useState } from "react"

interface Address {
  street: string,
  number: number,
  zip: string
}

interface User {
  name: string,
  age: number,
  country: string,
  address: Address,
  admin: boolean
}
export default function App() {
  const [user, setUser] = useState<User | null>(null)

  const fetchUser = () => setUser({
    name: 'Mark',
    age: 23,
    country: 'Viet Name',
    address: {
      street: 'main st',
      number: 88,
      zip: '12345'
    },
    admin: false
  })
  return (
    <>
    <button onClick={fetchUser} >Fetch user</button>
    <p>{user && <p>{user.name}</p>}</p>
    </>
  )
}