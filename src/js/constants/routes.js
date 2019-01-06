export const routes = {
  auth: {
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
  },
  guest: {
    main: {
      title: 'Main',
      menu: [
        {
          name: 'Home',
          to: '/',
          icon: 'img/icons/home.svg'
        },
        {
          name: 'Trending',
          to: '/trending',
          icon: 'img/icons/trending.svg'
        }
      ]
    },
    library: {
      title: 'The best on Youtube',
      menu: [
        {
          name: 'Musik',
          to: '/musik',
          icon: 'img/icons/not-found.svg'
        },
        {
          name: 'Sport',
          to: '/sport',
          icon: 'img/icons/not-found.svg'
        },
        {
          name: 'Video Games',
          to: '/video-games',
          icon: 'img/icons/not-found.svg'
        },
        {
          name: 'Movies',
          to: '/movies',
          icon: 'img/icons/not-found.svg'
        },
        {
          name: 'News',
          to: '/news',
          icon: 'img/icons/not-found.svg'
        },
        {
          name: 'TV shows',
          to: '/tv-shows',
          icon: 'img/icons/not-found.svg'
        }
      ]
    }
  }
};
