export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/events',
      permanent: false
    }
  };
}

export default function Home() {
  return null;
}
