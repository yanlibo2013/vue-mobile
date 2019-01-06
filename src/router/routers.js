const Flex = resolve => require(["@/components/flex/index"], resolve);
const ak = resolve => require(["@/views/ak/index"], resolve);

export default [
  {
    path: "/flex",
    name: "Flex",
    component: Flex,
    meta: {
      title: "flex"
    }
  },
  {
    path: "/ak",
    component: ak,
    name: "ak",
    meta: {
      title: "ak"
    }
  }
];
