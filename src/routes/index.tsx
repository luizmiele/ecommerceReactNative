import { useContext } from "react";
import RotasPrivadas from "./privateStack";
import RotasPublicas from "./publicStack";
import { AuthCtx } from "../contexts/AuthCtx";
import DrawerComponent from "./drawer";

const Routes = () => {
  const { signed } = useContext(AuthCtx);

  return <>{signed ? <DrawerComponent /> : <RotasPublicas />}</>;
};

export default Routes;