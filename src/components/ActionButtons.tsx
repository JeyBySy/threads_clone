import { Heart, MessageCircle, Repeat2, Send } from 'lucide-react';

type Post = {
    like_count: number;
    comment_count: number;
    repost_count: number;
    share_count: number;
};

type Props = {
    post?: Post;
    onLike?: () => void;
    onComment?: () => void;
    onRepost?: () => void;
    onShare?: () => void;
};

const ActionButtons = ({ post, onLike, onComment, onRepost, onShare }: Props) => {
    return (
        <div className="flex gap-1 items-center text-xs text-neutral-600 pb-1">
            <button
                aria-label="Like post"
                onClick={onLike}
                className="flex items-center gap-1 text-white hover:bg-hover rounded-full px-3 py-2 transition"
            >
                <Heart className="w-5 h-5 fill-none stroke-neutral-400" />
                {post?.like_count}
            </button>
            <button
                aria-label="Comment on post"
                onClick={onComment}
                className="flex items-center gap-1 text-white hover:bg-hover rounded-full px-3 py-2 transition"
            >
                <MessageCircle className="w-5 h-5 fill-none stroke-neutral-400" />
                {post?.comment_count}
            </button>
            <button
                aria-label="Repost"
                onClick={onRepost}
                className="flex items-center gap-1 text-white hover:bg-hover rounded-full px-3 py-2 transition"
            >
                <Repeat2 className="w-6 h-6 fill-none stroke-neutral-400" />
                {post?.repost_count}
            </button>
            <button
                aria-label="Share post"
                onClick={onShare}
                className="flex items-center gap-1 text-white hover:bg-hover rounded-full px-3 py-2 transition"
            >
                <Send className="w-5 h-5 fill-none stroke-neutral-400" />
                {post?.share_count}
            </button>
        </div>
    );
};

export default ActionButtons;
