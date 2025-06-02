import { Info } from 'lucide-react'
import ColumnPage from '../../components/Column/ColumnPage'

const InsightsPage = () => {
    return (
        <ColumnPage isInsight={true} columnTitleProps={[
            {
                name: 'Insights',
                onClick: () => console.log('insights clicked')
            }
        ]}>
            <div className="max-h-[calc(100vh-70px)] overflow-y-scroll pr-4 -mr-4 box-content flex flex-col gap-3">
                <section className='main-content-insights-section'>
                    <p className='title'>
                        Views
                    </p>
                    <div className='flex gap-3 items-center'>
                        <div className='p-3 bg-hover rounded-full'>
                            <Info className='w-4 h-4' />
                        </div>
                        <span>You can learn more about who's viewed your content when you have at least 100 followers.</span>
                    </div>
                </section>
                <section className='main-content-insights-section'>
                    <p className='title'> Interactions </p>
                    <div className='flex gap-3 items-center'>
                        <div className='p-3 bg-hover rounded-full'>
                            <Info className='w-4 h-4' />
                        </div>
                        <span>You can learn more about who's interacted with your content when you have at least 100 followers.</span>
                    </div>
                </section>
                <section className='main-content-insights-section'>
                    <div className='flex w-full justify-between'>
                        <p className='title'>Top posts</p>
                        <button className='text-neutral-500 text-[15px] font-semibold'>See all</button>
                    </div>
                    <div className='flex flex-col gap-3  w-full'>
                        <div className='space-x-1'>
                            <button className='text-xs font-semibold py-2 px-5 border border-muted rounded-full'>Most viewed</button>
                            <button className='text-xs font-semibold py-2 px-5 border border-muted rounded-full'>Most liked</button>
                        </div>
                        <span className='w-full text-center'>No posts in this date range</span>
                    </div>
                </section>
                <section className='main-content-insights-section'>
                    <div className='flex w-full justify-between'>
                        <p className='title'>Followers</p>
                    </div>
                    <div className='border-b-1 border-muted'>
                        <p className='text-4xl font-semibold'>1000</p>
                        <span className='font-semibold'>Total Followers</span>
                        <div className='w-full h-[350px]'></div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='p-3 bg-hover rounded-full'>
                            <Info className='w-4 h-4' />
                        </div>
                        <span>You can learn more about who's following you when you have at least 100 followers.</span>
                    </div>
                </section>
            </div>
        </ColumnPage>
    )
}

export default InsightsPage