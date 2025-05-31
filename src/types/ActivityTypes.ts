export type ActivityType = 'All' | 'Follows' | 'Replies' | 'Mentions' | 'Quotes' | 'Repost' | 'Verified' | 'Suggestion';

export type Activity =
  | {
      id: number;
      type: 'Suggestion';
      name: string;
      time: string;
      suggested_type: 'follow' | 'post';
      post?: string
    }
  | {
      id: number;
      type: 'Follows';
      name: string;
      time: string;
      isFollowed: boolean;
    }
  | {
      id: number;
      type: 'Replies';
      name: string;
      my_post: string;
      reply: string;
       time: string;
    }
 
  | {
      id: number;
      type: Exclude<ActivityType, 'Suggestion' | 'Follows' | 'Replies'>;
      user: string;
      content?: string;
      timestamp: string;
    };
