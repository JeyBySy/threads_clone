import type { Activity } from '../types/ActivityTypes';
import ActionButtons from './ActionButtons';

type Props = {
    activityData: Activity[];
}

const ContentActivity = ({ activityData }: Props) => {
    return (
        <div className="text-start pt-6">
            {activityData.map((item) => (
                <div
                    key={item.id}
                    className="flex items-start  gap-2 px-6  space-y-8"
                >
                    <div className="w-10 h-10 rounded-full bg-blue-400 flex-shrink-0"></div>
                    <div className="flex flex-col items-start pb-2 mb-4 text-white border-b border-muted w-full relative">
                        {/* Render based on item.type */}
                        {item.type === 'Suggestion' && (
                            <>
                                {item.suggested_type === 'follow' ? (
                                    <>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-1'>
                                                <div className="font-semibold text-[15px]">{item.name}</div>
                                                <div className="text-[15px] text-neutral-400">{item.time}</div>
                                            </div>
                                            <div className="text-[15px] text-neutral-500">
                                                Follow suggestion
                                            </div>
                                            <button
                                                className={`absolute right-0 px-7 py-1.5 font-bold text-[15px] rounded-lg bg-neutral-100 text-muted`}
                                            >
                                                Follow
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    // Post Suggested
                                    <>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-1'>
                                                <div className="font-semibold text-[15px]">{item.name}</div>
                                                <div className="text-[15px] text-neutral-400">{item.time}</div>
                                            </div>
                                            <div className="text-[15px] text-neutral-500">
                                                Suggested threads
                                            </div>
                                            <div className="text-[15px] py-1 text-neutral-300">
                                                {item.post}
                                            </div>
                                            <ActionButtons />
                                        </div>
                                    </>
                                )}
                            </>
                        )}

                        {item.type === 'Follows' && (
                            <>
                                <div className='flex flex-col '>
                                    <div className='flex gap-1'>
                                        <div className="font-semibold text-[15px]">{item.name}</div>
                                        <div className="text-[15px] text-neutral-400">{item.time}</div>
                                    </div>
                                    <div className="text-[15px] text-neutral-500">
                                        Followed you
                                    </div>
                                    <button
                                        className={`absolute right-0 px-7 py-1.5 font-bold text-[15px] rounded-lg ${item.isFollowed ? 'bg-neutral-600 text-white' : 'bg-white text-main'
                                            }`}
                                    >
                                        {item.isFollowed ? 'Follow Back' : 'Follow'}
                                    </button>

                                </div>
                            </>
                        )}

                        {item.type === 'Replies' && (
                            <>
                                <div className='flex flex-col '>
                                    <div className='flex gap-1'>
                                        <div className="font-semibold text-[15px]">{item.name}</div>
                                        <div className="text-[15px] text-neutral-400">{item.time}</div>
                                    </div>
                                    <div className="text-[14px] text-neutral-500 ">{item.my_post}</div>
                                    <div className="text-[15px]text-neutral-300 text-start">{item.reply}</div>
                                </div>
                            </>
                        )}

                        {/* Optional: fallback for other types */}
                        {item.type !== 'Suggestion' && item.type !== 'Follows' && item.type !== 'Replies' && (
                            <div className="text-neutral-400">Activity type: {item.type}</div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContentActivity;
