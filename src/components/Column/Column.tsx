import FeedPage from "../../pages/ColumnPage/FeedPage";
import SearchPage from "../../pages/ColumnPage/SearchPage";

type Props = {
    type: string
}

const Column = ({ type }: Props) => {
    const renderView = () => {
        switch (type) {
            case "feed":
                return <FeedPage />;
            default:
                return <SearchPage />;
        }
    };
    return <>{renderView()}</>;
}

export default Column