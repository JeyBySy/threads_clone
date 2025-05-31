import Activitypage from "../../pages/ColumnPage/Activitypage";
import FeedPage from "../../pages/ColumnPage/FeedPage";
import SearchPage from "../../pages/ColumnPage/SearchPage";

type Props = {
    type: string
    feedType?: "for you" | "following"
}

const Column = ({ type, feedType }: Props) => {
    const renderView = () => {
        switch (type) {
            case "feed":
                return (
                    <>
                        {feedType && (
                            <>
                                <FeedPage type={feedType} />
                                {/* <SearchPage /> */}
                            </>
                        )}
                    </>
                );
            case 'activity':
                return <Activitypage />
            default:
                return <SearchPage />;
        }
    };
    return <div className="w-full flex justify-center gap-3">{renderView()}</div>;
}

export default Column