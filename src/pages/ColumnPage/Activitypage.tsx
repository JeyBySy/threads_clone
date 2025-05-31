import ContentActivity from '../../components/ContentActivity'
import ContentActivitySkeleton from '../../components/Skeleton/ContentActivitySkeleton'
import { dummyActivityData } from '../../constants/dummyActivityData'


const Activitypage = () => {
    return (
        <main>
            <section className="main-header">
                <div className="w-full flex items-center justify-center gap-14 text-sm font-bold tracking-wider pt-1">
                    <button>Activity</button>
                </div>
            </section>
            <section className="main-content overflow-hidden">
                <div className="max-h-[calc(100vh-70px)] overflow-y-scroll pr-4 -mr-4 box-content">
                    <ContentActivity activityData={dummyActivityData} />
                    <ContentActivitySkeleton />
                </div>
            </section>
        </main>
    )
}

export default Activitypage