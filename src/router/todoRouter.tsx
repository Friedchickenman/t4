import { Route } from "react-router-dom";
import CustomLayout from "../layouts/customLayout";
import TodoIndex from '../pages/todo/indexPage'; // lazy 대신 직접 import

export default function todoRouter() {
  return [
    <Route
        key="/todo"
        path="/todo"
        element={
            <CustomLayout>
                <TodoIndex/>
            </CustomLayout>
        }
    />
  ];
}
