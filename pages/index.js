import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The best in town</title>
        <meta name="description" content="Private Area" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center ">
        <h1 className="mt-10 font-extrabold text-2xl">The best in town</h1>

        <div className="grid md:grid-cols-3">
          <div>
            <h2 className="mt-10 font-bold">Restaurants</h2>

            <ol className="mt-4 list-inside list-decimal">
              <li>Restaurant 1</li>
              <li>Restaurant 2</li>
              <li>Restaurant 3</li>
            </ol>
          </div>
          <div>
            <h2 className="mt-10 font-bold">Hotels</h2>

            <ol className="mt-4 list-inside list-decimal">
              <li>Hotel 1</li>
              <li>Hotel 2</li>
              <li>Hotel 3</li>
            </ol>
          </div>
          <div>
            <h2 className="mt-10 font-bold">Things to do</h2>

            <ol className="mt-4 list-inside list-decimal">
              <li>Thing 1</li>
              <li>Thing 2</li>
              <li>Thing 3</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
