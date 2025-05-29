const ContentSearchSkeleton = () => {
    const skeletonItems = Array.from({ length: 5 });
    return (
        <>
            {skeletonItems.map((_, index) => (
                <div key={index} className="px-6 py-4 border-b border-muted animate-pulse">
                    <div className="flex flex-row gap-2 text-sm mb-1">
                        {/* Profile Picture */}
                        <div className="w-10 h-10 bg-neutral-700 rounded-full"></div>

                        <div className="flex flex-col gap-2.5 w-full relative">
                            <div className="w-32 h-3 bg-neutral-700 rounded"></div>
                            <div className="w-20 h-3 bg-neutral-700 rounded"></div>
                            <div className="w-full h-3 bg-neutral-700 rounded"></div>
                            <div className="w-[70%] h-3 bg-neutral-700 mb-6 rounded"></div>
                            <div className="w-32 h-3 bg-neutral-700 rounded"></div>
                            <div className="absolute right-0 bg-neutral-700 px-14 py-4 font-bold text-[15px] rounded-lg"></div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Loader spinner at the bottom */}
            <div className="py-5">
                <div className="w-8 h-8 border-2 border-retro-yellow border-dashed rounded-full animate-spin mx-auto" />
            </div>
        </>
    )
}

export default ContentSearchSkeleton