import type { Activity } from "../types/ActivityTypes";

export const dummyActivityData: Activity[] = [
  {
    id: 1,
    type: 'Suggestion',
    name: 'news_bot',
    time: '2h', // 2 hours ago
    suggested_type: 'follow',
  },
  {
    id: 2,
    type: 'Suggestion',
    name: 'feature_suggester',
    time: '18h', // 18 hours ago
    suggested_type: 'post',
    post: "Here is a new feature suggestion for the app!"
  },
  {
    id: 3,
    type: 'Follows',
    name: 'johndoe',
    time: '1d', // 1 day ago
    isFollowed: true,
  },
  {
    id: 4,
    type: 'Follows',
    name: 'janedoe',
    time: '3d', // 3 days ago
    isFollowed: false,
  },
  {
    id: 5,
    type: 'Replies',
    name: 'alice123',
    my_post: 'What do you think about React 18?',
    reply: 'I love the new features!',
    time: '2h',
  },
  {
    id: 6,
    type: 'Replies',
    name: 'bob_the_builder',
    my_post: 'How to fix this bug?',
    reply: 'Try checking your dependencies.',
    time: '20h',
  },
  {
    id: 7,
    type: 'Suggestion',
    name: 'auto_suggester',
    time: '1d 10h', // 1 day 10 hours ago
    suggested_type: 'follow',
  },
  {
    id: 8,
    type: 'Follows',
    name: 'markus99',
    time: '3d',
    isFollowed: true,
  },
  {
    id: 9,
    type: 'Replies',
    name: 'coderlife',
    my_post: 'Can you share the repo link?',
    reply: 'Sure, check my profile!',
    time: '22h',
  },
  {
    id: 10,
    type: 'Suggestion',
    name: 'suggestion_bot',
    time: '3d 4h',
    suggested_type: 'post',
    post: "Here is a new feature suggestion for the app!"
  },
];
