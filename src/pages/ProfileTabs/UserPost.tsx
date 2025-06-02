import ContentPost from '../../components/ContentPost'
import ContentPostSkeleton from '../../components/Skeleton/ContentPostSkeleton'
import { dummyPost } from '../../constants/dummyPost'

const UserPost = () => {
    return (
        <>
            <ContentPost postData={dummyPost} />
            <ContentPostSkeleton />
        </>
    )
}

export default UserPost