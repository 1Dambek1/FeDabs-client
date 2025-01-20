import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login/Register')({
  component: Register,
})

function Register(){
  return <div>Hello "/login/Register"!</div>
}
