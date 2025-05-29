import type { UserType } from "../types/UserTypes";


type Props = {
    userData: UserType[]
}

const ContentSearch = ({ userData }: Props) => {
    return (
        <div className="text-start">
            <p className="px-6 text-sm text-neutral-500 font-bold">Follow suggestions</p>
            {userData.map((user, index) => (
                <div key={index} className="flex items-start gap-2 px-5 pt-6 space-y-5">
                    <div className="w-10 h-10 rounded-full bg-blue-400 flex-shrink-0"></div>
                    <div className="flex flex-col items-start text-white border-b border-muted w-full relative">
                        <div className="font-medium text-[15px]">{user.name}</div>
                        <div className="text-[15px] text-neutral-400">{user.username}</div>
                        <div className="text-[15px] mt-1 text-neutral-300">{user.bio}</div>
                        <div className="text-sm text-neutral-500 my-3">{user.follower_count.toLocaleString()} followers</div>
                        <button className="absolute right-0 bg-white px-7 py-1.5 text-main font-bold text-[15px] rounded-lg">Follow</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContentSearch;
