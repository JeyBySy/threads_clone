type Props = {
    withImage?: boolean
}
const ContentPostSkeleton = ({ withImage }: Props) => {
    const skeletonItems = Array.from({ length: 5 });

    return (
        <>
            {skeletonItems.map((_, index) => (
                <div key={index} className="px-6 py-4 border-b border-muted animate-pulse">
                    <div className="flex flex-row gap-2 text-sm mb-1">
                        {/* Profile Picture */}
                        <div className="w-9 h-9 bg-neutral-700 rounded-full"></div>

                        <div className="flex flex-col gap-2 w-full">
                            {/* Name and Time */}
                            <div className="flex gap-2 items-center">
                                <div className="w-24 h-3 bg-neutral-700 rounded"></div>
                                <div className="w-16 h-3 bg-neutral-700 rounded"></div>
                            </div>

                            {/* Description */}
                            <div className="w-full h-3 bg-neutral-700 rounded"></div>
                            <div className="w-3/4 h-3 bg-neutral-700 rounded"></div>

                            {/* Image Placeholder */}
                            {withImage && (
                                <div className="w-full h-[300px] bg-neutral-800 rounded-md"></div>
                            )}

                            {/* Location */}
                            <div className="w-20 h-2 bg-neutral-700 rounded"></div>

                            {/* Reactions */}
                            <div className="flex gap-2 text-xs mt-2">
                                <div className="w-14 h-5 bg-neutral-700 rounded"></div>
                                <div className="w-14 h-5 bg-neutral-700 rounded"></div>
                                <div className="w-14 h-5 bg-neutral-700 rounded"></div>
                                <div className="w-14 h-5 bg-neutral-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Loader spinner at the bottom */}
            <div className="py-5">
                <div className="w-8 h-8 border-2 border-retro-yellow border-dashed rounded-full animate-spin mx-auto" />
            </div>
        </>
    );
};

export default ContentPostSkeleton;
