import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "../components";

function MainLayout() {
  return (
    <div>
        <NavBar />
        <main>
           <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout;