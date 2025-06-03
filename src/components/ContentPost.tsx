import { Repeat2 } from "lucide-react";
import type { PostType } from "../types/PostTypes"
import ActionButtons from "./ActionButtons";

type Props = {
    postData: PostType[],
    filter?: "media" | "repost"
}

const ContentPost = ({ postData, filter }: Props) => {
    const filteredPosts =
        filter === "media"
            ? postData.filter(post => post.image) // TEMP: post.image is boolean for now. Check if there are image in dummy data
            : postData;

    return (
        <>
            {filteredPosts.map((post, index) => (
                <div key={index} className="px-6 pt-3 border-b border-muted">
                    {filter === "repost" && (
                        <div className="flex items-center gap-2 text-neutral-500 text-sm mb-2 w-full px-5">
                            <Repeat2 className="w-4 h-4" />
                            <p>
                                j_h_e_r_i_c_o reposted
                            </p>
                        </div>
                    )}
                    <div className="flex flex-row gap-2 text-sm text-neutral-600 mb-1">
                        <div className="w-9 h-9 bg-green-400 rounded-full"></div>
                        <div className="flex flex-col gap-1 items-start text-start w-full">
                            <div className="flex gap-2 items-start">
                                <span className="font-bold text-white">{post.name}</span>
                                <span>{post.time}</span>
                            </div>
                            <div className="text-[15px] text-white pb-2">{post.description}</div>
                            {post?.image && (
                                <>
                                    <div className="w-full h-[300px]">
                                        <div className="w-full h-full bg-neutral-400 animate-pulse"></div>
                                    </div>
                                    <div className="text-xs text-neutral-500 mb-2">{post.location}</div>
                                </>
                            )}
                            <ActionButtons post={post} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ContentPost
