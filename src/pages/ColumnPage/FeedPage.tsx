import { useNavigate } from "react-router-dom"
import ContentPost from "../../components/ContentPost"
import ContentPostSkeleton from "../../components/Skeleton/ContentPostSkeleton"
import { dummyPost } from "../../constants/dummyPost"
import { dummyPostFollowing } from "../../constants/dummyPostFollowing"

type Props = {
    type: "for you" | "following"
}

const FeedPage = ({ type }: Props) => {
    const dummyData = type === "following" ? dummyPostFollowing : dummyPost
    const navigate = useNavigate()

    const activeClass = "text-white border-white"
    const inactiveClass = "text-neutral-500 hover:text-white"
    return (
        <main>
            <section className="main-header">
                <div className="w-full flex items-center justify-center gap-14 text-sm font-bold tracking-wider pt-1">
                    <button
                        onClick={() => navigate('/')}
                        className={type === "for you" ? activeClass : inactiveClass}
                    >
                        For you
                    </button>
                    <button
                        onClick={() => navigate('/following')}
                        className={type === "following" ? activeClass : inactiveClass}
                    >
                        Following
                    </button>
                </div>
            </section>
            <section className="main-content overflow-hidden">
                <div className="max-h-[calc(100vh-70px)] overflow-y-scroll pr-4 -mr-4 box-content">
                    <div className="h-[75px] pt-2 px-6 flex items-center space-x-3  ">
                        <div>
                            {/* Image */}
                            <div className="w-9 h-9 bg-blue-400 rounded-full"></div>
                        </div>
                        <p className="w-full text-start text-[15px] text-neutral-500">What's new?</p>
                        <button className="border border-muted text-sm font-semibold px-4.5 py-2 rounded-xl">Post</button>
                    </div>
                    <hr />
                    <ContentPost postData={dummyData} />
                    <ContentPostSkeleton />
                </div>
            </section>
        </main>
    )
}

export default FeedPage