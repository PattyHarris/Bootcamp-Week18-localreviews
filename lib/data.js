// Return all the items from the database, sorted by rating.
export const getItems = async (prisma, type) => {
  const items = await prisma.item.findMany({
    where: {
      type,
    },
    orderBy: [
      {
        rating: "desc",
      },
    ],
  });

  return items;
};

// Return the item for the given id.
export const getItem = async (prisma, id) => {
  const item = await prisma.item.findUnique({
    where: {
      id,
    },
  });

  return item;
};
