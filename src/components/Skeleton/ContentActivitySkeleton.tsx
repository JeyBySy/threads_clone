const ContentActivitySkeleton = () => {
    const skeletonItems = Array.from({ length: 5 });

    return (
        <>
            {skeletonItems.map((_, index) => (
                <div key={index} className="flex px-6 py-2 gap-2 animate-pulse">
                    <div className="w-10 h-10 rounded-full bg-neutral-700 flex-shrink-0" />
                    <div className="flex flex-col gap-2 w-full pb-5 border-b border-muted">
                        <div className="flex gap-2">
                            <div className="w-24 h-4 bg-neutral-700 rounded" />
                            <div className="w-16 h-4 bg-neutral-800 rounded" />
                        </div>
                        <div className="w-3/4 h-4 bg-neutral-700 rounded" />
                        <div className="w-full h-4 bg-neutral-800 rounded" />
                    </div>
                </div>
            ))}

            <div className="py-5">
                <div className="w-8 h-8 border-2 border-retro-yellow border-dashed rounded-full animate-spin mx-auto" />
            </div>
        </>
    );
};

export default ContentActivitySkeleton;
