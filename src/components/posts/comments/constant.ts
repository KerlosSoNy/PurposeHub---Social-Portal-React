interface Comment {
    id: number;
    author: string;
    time: string;
    content: string;
    likes: number;
    isLiked: boolean;
    avatarUrl: string;
    replies?: Comment[];
    badge?: boolean;
}
export const mockComments: Comment[] = [
    {
      id: 1,
      author: "Kareem Saad",
      time: "11:03 AM",
      content: "Let's create something! It's really difficult to find certain message when you see so many links",
      likes: 2,
      isLiked: true,
      badge: true,
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      replies: [
        {
          id: 2,
          author: "Ahmed Raba",
          time: "11:03 AM",
          content: "Have we enough time for this?",
          likes: 5,
          badge:false,
          isLiked: false,
          avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        }
      ]
    }
  ];