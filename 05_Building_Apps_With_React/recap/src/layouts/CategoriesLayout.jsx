import {Outlet} from "react-router-dom"
import { Categories } from "../components"

function CategoriesLayout() {
  return (
    <div>
        <Categories />
        <Outlet />
    </div>
  )
}

export default CategoriesLayout