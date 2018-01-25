import { BASE_ROUTE } from "./index";

const routes = {
  index: "/",
  login: "/login",
  signup: "/singup",
  confirmEmail: "/confirm-email",
  profile: "/profile",
  investmentPrograms: "/investment-programs",
  gvtWallet: "/gvt-wallet"
};

const addBaseRoutePrefix = routes => {
  for (let i in routes) {
    routes[i] = BASE_ROUTE + routes[i];
  }
};

addBaseRoutePrefix(routes);

export default routes;
