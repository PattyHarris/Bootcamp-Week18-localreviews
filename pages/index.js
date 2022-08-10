import Head from "next/head";
import prisma from "lib/prisma";
import { getItems } from "lib/data";

export default function Home({ restaurants, hotels, thingsToDo }) {
  return (
    <div>
      <Head>
        <title>The best in town</title>
        <meta name="description" content="Private Area" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center ">
        <h1 className="mt-10 font-extrabold text-2xl">The best in town</h1>

        <div className="flex flex-col md:grid md:grid-cols-3">
          {restaurants && (
            <div>
              <h2 className="mt-10 font-bold">Restaurants</h2>

              <ol className="mt-4 list-inside list-decimal">
                {restaurants.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ol>
            </div>
          )}

          {hotels && (
            <div>
              <h2 className="mt-10 font-bold">Hotels</h2>

              <ol className="mt-4 list-inside list-decimal">
                {hotels.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ol>
            </div>
          )}

          {thingsToDo && (
            <div>
              <h2 className="mt-10 font-bold">Things to do</h2>

              <ol className="mt-4 list-inside list-decimal">
                {thingsToDo.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const restaurants = await getItems(prisma, "restaurant");
  const hotels = await getItems(prisma, "hotel");
  const thingsToDo = await getItems(prisma, "thing-to-do");

  return {
    props: {
      restaurants,
      hotels,
      thingsToDo,
    },
  };
}
