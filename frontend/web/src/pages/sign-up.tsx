import SignUp from 'shared/screens/SignUp/dev'

export default function Page({ client }) {
  console.log({ client })
  return <SignUp client={client} />
}
