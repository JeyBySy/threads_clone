import { useLocation, useNavigate } from "react-router-dom";
import { navIcons } from "../../utils/navIcons";
import { useEffect, useState } from "react";

const Sidenav = () => {
    const navigation = useNavigate()
    const location = useLocation()
    const [activePage, setActivePage] = useState("Threads")

    useEffect(() => {
        const currentPath = location.pathname.split("/")[1];
        console.log(currentPath);

        setActivePage(currentPath || ""); // fallback to 'threads' if route is '/'
    }, [location]);

    const handleRedirect = (url: string) => {
        const formatURL = url.toLowerCase()
        navigation(`/${formatURL}`)
    }
    return (
        <div className="hidden md:fixed h-screen w-fit overflow-hidden text-wrap sm:grid grid-rows-[auto_1fr_auto]">
            <div className="py-6 font-bold text-center mb-4">Logo</div>
            <div className="flex flex-col items-center gap-4 py-4 px-2 justify-center">
                {navIcons.map((item, index) => {
                    const isActive = activePage === (item.linkURL?.toLowerCase() || "");

                    return (
                        <div
                            key={index}
                            onClick={() => handleRedirect(item?.linkURL || "")}
                            className={`                               
                                ${item.name === 'Create' && "bg-accent"} 
                                hover:bg-accent
                                flex group px-4.5 py-3 rounded-xl flex-col items-center justify-center mx-auto gap-1 cursor-pointer transition
                            `}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox={item.viewBox}
                                className={`
                                    size-6 
                                      ${item.name === 'Create' ? "stroke-[1.5] stroke-white/10" : "stroke-[1.5]"} 
                                    ${isActive
                                        ? "fill-neutral-100"
                                        : item.name === "Create" || item.name === "Search"
                                            ? "fill-neutral-500 stroke-neutral-800"
                                            : "fill-transparent stroke-neutral-600"
                                    }
                                `}
                            >
                                <title>{item.name}</title>
                                <path d={item.icon} />
                            </svg>
                        </div>
                    );
                })}
            </div>
            <div className="py-9 font-bold text-center">
                <svg
                    aria-label="More"
                    role="img"
                    viewBox="0 0 24 24"
                    className="w-full h-6 fill-muted mx-auto cursor-pointer hover:fill-white transition"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>More</title>
                    <rect x="1" y="5" width="24" height="3" rx="5.25" />
                    <rect x="2" y="13" width="14" height="3" rx="1.25" />
                </svg>
            </div>
        </div>
    );
};

export default Sidenav;
