import ContentPost from '../../components/ContentPost'
import ContentPostSkeleton from '../../components/Skeleton/ContentPostSkeleton'
import { dummyUserPost } from '../../constants/dummyUserPost'

const UserMedia = () => {
    return (
        <>
            {dummyUserPost ? (
                <>

                    <ContentPost postData={dummyUserPost} filter='media' />
                    <ContentPostSkeleton withImage={true} />
                </>
            ) : (
                <div className='h-[58dvh] flex justify-center items-center text-neutral-500 text-[15px]'>No media yet.</div>
            )}
        </>
    )
}

export default UserMedia