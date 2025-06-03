import Activitypage from "../../pages/ColumnPage/ActivityPage";
import FeedPage from "../../pages/ColumnPage/FeedPage";
import InsightsPage from "../../pages/ColumnPage/InsightsPage";
import Profilepage from "../../pages/ColumnPage/ProfilePage";
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
                            </>
                        )}
                    </>
                );
            case 'activity':
                return <Activitypage />
            case 'profile':
                return <Profilepage />
            case 'insights':
                return <InsightsPage />
            default:
                return <SearchPage />;
        }
    };
    return <div className="w-full flex justify-center gap-3">{renderView()}</div>;
}

export default Column