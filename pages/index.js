export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/events',
      permanent: false
    }
  };
}

export default function Home() {
  return (
    <>
      <Hero>
        <Link
          href="/events"
          className="btn btn-primary bg-hotpink text-limestone border-none"
        >
          Browse Events
        </Link>
      </Hero>
    </>
  );

}
