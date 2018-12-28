export const routes = {
  main: {
    title: 'Main',
    menu: [
      {
        name: 'Home',
        to: '/',
        icon: 'img/icons/home.svg'
      },
      {
        name: 'My channels',
        to: '/channels',
        icon: 'img/icons/channels.svg'
      },
      {
        name: 'Trending',
        to: '/trending',
        icon: 'img/icons/trending.svg'
      },
      {
        name: 'Subscriptions',
        to: '/subscriptions',
        icon: 'img/icons/subscriptions.svg'
      }
    ]
  },
  library: {
    title: 'Library',
    menu: [
      {
        name: 'History',
        to: '/history',
        icon: 'img/icons/history.svg'
      },
      {
        name: 'Watch later',
        to: '/watch-later',
        icon: 'img/icons/watch-later.svg'
      },
      {
        name: 'Liked',
        to: '/liked',
        icon: 'img/icons/liked.svg'
      }
    ]
  }
};
