import ColumnPage from "../../components/Column/ColumnPage"
import { Instagram, SquareKanban } from "lucide-react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const ProfilePage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [activeTab, setActiveTab] = useState("Threads")

    const tabs = ["threads", "replies", "media", "reposts"]

    useEffect(() => {
        const path = location.pathname.split("/").pop()
        console.log(path);


        if (!path || path === "@j_h_e_r_i_c_o") {
            setActiveTab("threads")
        } else {
            setActiveTab(path)
        }
    }, [location.pathname])


    return (
        <ColumnPage columnTitleProps={[
            {
                name: 'Profile',
                onClick: () => console.log('Profile clicked'),
            }
        ]}>
            <div className="max-h-[calc(100vh-70px)] h-full overflow-y-scroll pr-4 -mr-4 box-content">
                <div className="pt-5 px-6 flex flex-col gap-4.5">
                    <div className="flex justify-between w-full items-center">
                        <div className="flex flex-col text-start">
                            <p className="text-2xl font-semibold">Niño Jherico Cocosa</p>
                            <p className="text-[15px]">j_h_e_r_i_c_o</p>
                        </div>
                        <div className="w-20 h-20 rounded-full border border-neutral-600 bg-muted"></div>
                    </div>
                    <div className="text-start text-[15px]">
                        <p>Web developer</p>
                        <p>Currently studying: React, Postgress, Nodejs, Docker</p>
                    </div>
                    <div className="text-start text-[15px] flex justify-between w-full">
                        <div className="flex flex-row items-center text-[15px] text-neutral-500 gap-1.5">
                            <div className="flex gap-1">
                                <div className="w-4 h-4 rounded-full border" />
                                <div className="w-4 h-4 rounded-full border" />
                                <div className="w-4 h-4 rounded-full border" />
                            </div>
                            <p>14 followers</p>·
                            <p>ngl.link/j_h_e_r_i_c_o</p>
                        </div>
                        <div className="flex gap-2.5 items-center">
                            <button
                                onClick={() => { navigate('/insights') }}
                            >
                                <SquareKanban className="w-6 h-6 rotate-180" />
                            </button>
                            <Instagram />
                        </div>
                    </div>
                    <div className="w-full py-2">
                        <button className="border w-full border-muted text-[15px] py-1 font-semibold rounded-lg">Edit profile</button>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-between text-[15px] mt-1.5 font-semibold">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                if (tab === "threads") {
                                    navigate("")
                                } else {
                                    navigate(tab)
                                }
                            }}
                            className={`capitalize py-3 text-center w-full border-b-2 transition-all duration-150
                                ${activeTab === tab
                                    ? "border-white text-white"
                                    : "border-muted text-neutral-500 "
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <Outlet />
            </div>
        </ColumnPage>
    )
}

export default ProfilePage
