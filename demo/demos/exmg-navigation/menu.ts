export interface MenuItem {
  id: string;
  label: string;
  path?: string;
  url?: string;
  icon?: string;
  items?: MenuItem[];
}

export const menu: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: 'home',
    path: '/',
  },
  {
    id: 'mail',
    label: 'Mail',
    icon: 'mail',
    path: '/main',
  },
  {
    id: 'chat',
    label: 'Chat',
    icon: 'chat',
    path: '/chat',
    items: [
      {
        id: 'chat_overview',
        label: 'Chat Overview',
        path: '/chat',
      },
      {
        id: 'fruits',
        label: 'Fruits',
        path: '/chat/fruits',
      },
      {
        id: 'apples',
        label: 'Apples',
        items: [
          {
            id: 'gala',
            label: 'Gala',
            path: '/chat/apples/gala',
          },
          {
            id: 'golden-delicious',
            label: 'Golden Delicious',
            path: '/chat/apples/golden-delicious',
          },
          {
            id: 'pink-lady',
            label: 'Pink Lady',
            path: '/chat/apples/pink-lady',
          },
        ],
      },
      {
        id: 'banana',
        label: 'Banana',
        path: '/chat/banana',
      },
      {
        id: 'cucumber',
        label: 'Cucumber',
        path: '/chat/banana',
      },
    ],
  },
  {
    id: 'spaces',
    label: 'Spaces',
    icon: 'groups',
    path: '/spaces',
    items: [
      {
        id: 'space_overview',
        label: 'Spaces Overview',
        path: '/spaces',
      },
      {
        id: 'space1',
        label: 'Space 1',
        path: '/spaces/space1',
      },
      {
        id: 'space2',
        label: 'Space 2',
        path: '/spaces/space2',
      },
    ],
  },
  {
    id: 'meet',
    label: 'Meet',
    icon: 'videocam',
    path: '/meet',
  },
];
