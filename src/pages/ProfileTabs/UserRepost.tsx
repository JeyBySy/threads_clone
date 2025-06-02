import ContentPost from "../../components/ContentPost"
import ContentPostSkeleton from "../../components/Skeleton/ContentPostSkeleton"
import { dummyUserRepost } from "../../constants/dummyUserRepost"

const UserRepost = () => {
    return (


        <>
            {dummyUserRepost ? (
                <>

                    <ContentPost postData={dummyUserRepost} filter='repost' />
                    <ContentPostSkeleton withImage={true} />
                </>
            ) : (
                <div className='h-[58dvh] flex justify-center items-center text-neutral-500 text-[15px]'>No reposts yet.</div>
            )}
        </>
    )
}

export default UserRepost