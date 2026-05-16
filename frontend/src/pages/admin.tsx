import { NextPage } from 'next'

const AdminPage: NextPage = () => {
  return null
}

export default AdminPage

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/admin/index.html',
      permanent: false,
    },
  }
}
