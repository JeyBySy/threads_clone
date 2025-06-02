import { useNavigate } from "react-router-dom"
import ContentPost from "../../components/ContentPost"
import ContentPostSkeleton from "../../components/Skeleton/ContentPostSkeleton"
import { dummyPost } from "../../constants/dummyPost"
import { dummyPostFollowing } from "../../constants/dummyPostFollowing"
import ColumnPage from "../../components/Column/ColumnPage"

type Props = {
    type: "for you" | "following"
}

const FeedPage = ({ type }: Props) => {
    const dummyData = type === "following" ? dummyPostFollowing : dummyPost
    const navigate = useNavigate()
    return (

        <ColumnPage
            columnTitleProps={[
                {
                    name: 'For you',
                    onClick: () => navigate('/'),
                    isActive: type === 'for you',
                },
                {
                    name: 'Following',
                    onClick: () => navigate('/following'),
                    isActive: type === 'following',
                },
            ]}
        >
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
        </ColumnPage >


    )
}

export default FeedPage