import { SlidersHorizontal } from "lucide-react";
import { navIcons } from "../../utils/navIcons";
import ContentSearch from "../../components/ContentSearch";
import { dummyUsers } from "../../constants/dummyUsers";
import ContentSearchSkeleton from "../../components/Skeleton/ContentSearchSkeleton";

const SearchPage = () => {
    const SearchIcon = navIcons.find(icon => icon.name === "Search");
    return (
        <main>
            <section className="main-header">
                <div className="w-full flex items-center justify-center gap-14 text-sm font-bold tracking-wider pt-1">
                    <button>Search</button>
                </div>
            </section>
            <section className="main-content overflow-hidden">
                <div className="max-h-[calc(100vh-70px)] overflow-y-scroll pr-4 -mr-4 box-content">
                    <div className="py-5 px-6 flex">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-6.5 flex items-center pointer-events-none">
                                {SearchIcon && (
                                    <button className="flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox={SearchIcon.viewBox}
                                            className="w-4 h-4 fill-neutral-500 "
                                        >
                                            <path d={SearchIcon.icon} />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            <input
                                className="outline-none w-full bg-main p-3 pl-12 pr-13 text-sm rounded-2xl border-muted border text-white placeholder-neutral-500"
                                type="text"
                                placeholder="Search"
                            />
                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                                <button className="p-2 hover:bg-accent rounded-full transition"><SlidersHorizontal className="w-5 h-5 stroke-neutral-500" /></button>
                            </div>
                        </div>
                    </div>
                    <ContentSearch userData={dummyUsers} />
                    <ContentSearchSkeleton />
                </div>
            </section>
        </main>
    )
}

export default SearchPage