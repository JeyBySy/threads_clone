import { Outlet } from "react-router-dom"
import AddPost from "./AddPost"
import Sidenav from "./Sidenav"

const MainLayout = () => {
    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-[1fr] lg:grid-cols-none">
                <Sidenav />
                <div className="mx-auto w-full container">
                    <Outlet />
                </div>
            </div>
            <AddPost />

        </div>
    )
}

export default MainLayout
