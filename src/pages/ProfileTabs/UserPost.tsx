import ContentPost from '../../components/ContentPost'
import ContentPostSkeleton from '../../components/Skeleton/ContentPostSkeleton'
import { dummyUserPost } from '../../constants/dummyUserPost'

const UserPost = () => {
    return (
        <>
            <div className='px-6 py-4 border-b border-muted w-full flex items-center justify-between'>
                {/* Image */}
                <div className='flex gap-3 items-center text-neutral-500 text-[15px]'>
                    <div className="w-9 h-9 bg-green-400 rounded-full" />
                    <p>What's new?</p>
                </div>

                <button className='px-4 py-1.5 rounded-xl text-[15px] font-semibold border-muted border'>Post</button>
            </div>
            <ContentPost postData={dummyUserPost} />
            <ContentPostSkeleton />
        </>
    )
}

export default UserPost