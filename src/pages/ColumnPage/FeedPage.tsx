import ContentPost from "../../components/ContentPost"
import { dummyPost } from "../../constants/dummyPost"

const FeedPage = () => {
    return (
        <main>
            <section className="main-header">
                <div className="w-full flex items-center justify-center gap-14 text-sm font-bold tracking-wider">
                    <div>For you</div>
                    <div>Following</div>
                </div>
            </section>
            <section className="main-content overflow-y-auto">
                <div className="h-[75px] pt-2 px-6 flex items-center space-x-3">
                    <div>
                        {/* Image */}
                        <div className="w-9 h-9 bg-blue-400 rounded-full"></div>
                    </div>
                    <p className="w-full text-start text-[15px] text-neutral-500">What's new?</p>
                    <button className="border border-muted text-sm font-semibold px-4.5 py-2 rounded-xl">Post</button>
                </div>
                <hr />
                <ContentPost postData={dummyPost} />
            </section>
        </main>
    )
}

export default FeedPage