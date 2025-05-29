import { Heart, MessageCircle, Repeat2, Send } from "lucide-react";
import type { PostType } from "../types/PostTypes"

type Props = {
    postData: PostType[]
}

const ContentPost = ({ postData }: Props) => {
    return (
        <>
            {postData.map((post, index) => (
                <div key={index} className="px-6 pt-4 border-b border-muted">
                    <div className="flex flex-row  gap-2 text-sm text-neutral-600 mb-1">
                        <div>
                            {/* Image */}
                            <div className="w-9 h-9 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex gap-1 w-full items-start flex-col text-start">
                            <div className="flex  gap-2 items-start">
                                <span className="font-bold text-white">{post.name}</span>
                                <span>{post.time}</span>
                            </div>
                            <p className="text-[15px] text-white mb-2">{post.description}</p>
                            <div className="w-full h-[300px] ">
                                <div className="w-full h-full bg-neutral-400 animate-pulse"></div>
                            </div>
                            <div className="text-xs text-neutral-500 mb-2">{post.location}</div>
                            <div className="flex gap-1 items-center text-xs text-neutral-600 pb-1">
                                <button className="flex items-center gap-1 text-white hover:bg-hover rounded-full px-3 py-2 transition">
                                    <Heart className="w-5 h-5 fill-none stroke-neutral-400 " />
                                    {post.like_count}
                                </button>
                                <button className="flex items-center gap-1 text-white hover:bg-hover rounded-full px-3 py-2 transition">
                                    <MessageCircle className="w-5 h-5 fill-none stroke-neutral-400 " /> {post.comment_count}
                                </button>
                                <button className="flex items-center gap-1 text-white hover:bg-hover rounded-full px-3 py-2 transition">
                                    <Repeat2 className="w-6 h-6 fill-none stroke-neutral-400" />{post.repost_count}
                                </button>
                                <button className="flex items-center gap-1 text-white hover:bg-hover rounded-full px-3 py-2 transition">
                                    <Send className="w-4.5 h-4.5 fill-none stroke-neutral-400" />{post.share_count}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
            {/* <div className="py-5">
                <div className="w-8 h-8 border-2 border-retro-yellow border-dashed rounded-full animate-spin mx-auto " />
            </div> */}
        </>
    )
}

export default ContentPost