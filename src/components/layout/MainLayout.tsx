import { Outlet } from "react-router-dom"
import AddPost from "./AddPost"
import Sidenav from "./Sidenav"

const MainLayout = () => {
    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-[auto_1fr] lg:grid-cols-none">
                <div>
                    <Sidenav />
                </div>
                <div className="mx-auto w-full flex justify-start">
                    <Outlet />
                </div>
            </div>
            <AddPost />

        </div>
    )
}

export default MainLayout
