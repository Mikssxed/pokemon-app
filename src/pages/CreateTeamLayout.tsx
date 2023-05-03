import { Outlet } from "react-router-dom";
import MenuNavigation from "../components/MenuNavigation";

const CreateTeamLayout = () => {
  return (
    <>
      <MenuNavigation />
      <Outlet />
    </>
  );
};

export default CreateTeamLayout;
