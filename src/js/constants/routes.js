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
          to: '/topic/music',
          icon: 'img/icons/not-found.svg'
        },
        {
          name: 'Sports',
          to: '/topic/sports',
          icon: 'img/icons/not-found.svg'
        },
        {
          name: 'Gaming',
          to: '/topic/gaming',
          icon: 'img/icons/not-found.svg'
        },
        {
          name: 'Lifestyle',
          to: '/topic/lifestyle',
          icon: 'img/icons/not-found.svg'
        },
        {
          name: 'Entertainment',
          to: '/topic/entertainment',
          icon: 'img/icons/not-found.svg'
        }
      ]
    }
  }
};
