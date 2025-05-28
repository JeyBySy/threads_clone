import type { PostType } from "../types/PostTypes"
import { navIcons } from "../utils/navIcons";

type Props = {
    postData: PostType[]
}

const ContentPost = ({ postData }: Props) => {
    const heartIcon = navIcons.find(icon => icon.name === "Notifications");
    return (
        <>
            {postData.map((post, index) => (
                <div key={index} className="px-6 py-4 border-b border-muted">
                    <div className="flex flex-row  gap-2 text-sm text-neutral-600 mb-1">
                        <div>
                            {/* Image */}
                            <div className="w-9 h-9 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex gap-1 items-start flex-col text-start">
                            <div className="flex  gap-2 items-start">
                                <span className="font-bold text-white">{post.name}</span>
                                <span>{post.time}</span>
                            </div>
                            <p className="text-[15px] text-white mb-2">{post.description}</p>
                            <div className="w-full h-[300px]">
                                <div className="w-full h-full bg-black"></div>
                            </div>
                            <div className="text-xs text-neutral-500 mb-2">{post.location}</div>
                            <div className="flex gap-6 text-xs text-neutral-600">
                                {heartIcon && (
                                    <button className="flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox={heartIcon.viewBox}
                                            className="w-4 h-4 fill-accent stroke-white "
                                        >
                                            <path d={heartIcon.icon} />
                                        </svg>
                                        {post.like_count}
                                    </button>
                                )}
                                <span>💬 {post.comment_count}</span>
                                <span>🔁 {post.repost_count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
            <div className="py-5">
                <div className="w-8 h-8 border-2 border-retro-yellow border-dashed rounded-full animate-spin mx-auto " />
            </div>
        </>
    )
}

export default ContentPost