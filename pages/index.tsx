import { signIn, signOut, useSession } from 'next-auth/react'
import {
  Button,
  Layout,
  Link,
  Page,
  Text,
  List,
  Code,
  Input,
} from '@vercel/examples-ui'
import { EmailInput } from './api/auth/inputs/email'
import { PasswordInput } from './api/auth/inputs/password'
import { FormContainer } from './api/auth/inputs/style'

export default function Home() {
  const { data, status } = useSession()

  return (
    <Page>
      <section className="flex flex-col gap-6">
        <Text variant="h1">Login Social - Github</Text>
        <Text>
          Para fazer o login com sua conta do Github basta clicar no botão abaixo.
        </Text>
      </section>

      <hr className="border-t border-accents-2 my-6" />

      <FormContainer>
        <EmailInput/>
        <PasswordInput/>
        <Button color='blue' width={'10vw'}>Entrar</Button>
      </FormContainer>

      <hr className="border-t border-accents-2 my-6" />
    
      <section className="flex flex-col gap-3">
        {status === 'authenticated' ? (
          <section className="flex flex-col gap-3">
            Welcome {data?.user?.name}!{' '}  
            <Button onClick={() => signOut()}>Sign out</Button>
            <List>
              <li>
                <Link href="https://subdomain.solutions-subdomain-auth.vercel.sh">
                  subdomain.solutions-subdomain-auth.vercel.sh
                </Link>
              </li>
              <li>
                <Link href="https://solutions-subdomain-auth.vercel.sh">
                  solutions-subdomain-auth.vercel.sh
                </Link>
              </li>
            </List>
          </section>
        ) : status === 'loading' ? (
          <section className="text-center">
            <Text>Loading...</Text>
          </section>
        ) : (
          <section className="m-auto w-fit">
            <Button size="lg" onClick={() => signIn('github')}>
              Sign in with GitHub
            </Button>
          </section>
        )}
      </section>
    </Page>
  )
}

Home.Layout = Layout
