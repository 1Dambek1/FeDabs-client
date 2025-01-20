import { login } from '@/api/auth'
import { createFileRoute } from '@tanstack/react-router'
import { log } from 'node:console';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

interface ILoginReturn  {
  token: string;
}

function RouteComponent() {
  const data =  login({email: "test@test.com", password: "1234567890"})
  console.log("fd");
  
  console.log(data);
  
  return <div>Helloasdasdsaddasasdasddsa"/"!</div>
}
