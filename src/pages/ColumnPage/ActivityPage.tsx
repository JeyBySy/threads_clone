import ColumnPage from '../../components/Column/ColumnPage'
import ContentActivity from '../../components/ContentActivity'
import ContentActivitySkeleton from '../../components/Skeleton/ContentActivitySkeleton'
import { dummyActivityData } from '../../constants/dummyActivityData'


const Activitypage = () => {
    return (
        <ColumnPage columnTitleProps={[
            {
                name: 'Activity',
                onClick: () => console.log('Activity clicked')
            }
        ]}>
            <div className="max-h-[calc(100vh-70px)] overflow-y-scroll pr-4 -mr-4 box-content">
                <ContentActivity activityData={dummyActivityData} />
                <ContentActivitySkeleton />
            </div>
        </ColumnPage>
    )
}

export default Activitypage