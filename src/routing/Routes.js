import React from 'react'
import Kanban from "../screens/kanban/kanban";
import sberLayout from "../screens/sberLayout/sberLayout";

const Routes = {
  "/about/:id": () => <Kanban />,
  "/sberLayout": () => <sberLayout />
};
export default Routes;