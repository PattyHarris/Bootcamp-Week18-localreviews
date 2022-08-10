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
