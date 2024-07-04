export const getMenus = () => {
  return Promise.resolve([
    {
      id: 1,
      path: "/hellow",
      component: "/hellow",
      name: "HellowWorld",
      meta: {
        title: 'HellowWorld'
      }
    },
  ]);
};
