const routes = [
  {
    name: 'music',
    label: 'Music',
    routes: [
      {
        name: 'playlist',
        label: 'Playlist',
        to: '/about'
      },
      {
        name: 'schedule',
        label: 'Schedule',
        to: '/schedule'
      },
      {
        name: 'twoWeekArchive',
        label: 'Two Week Archive',
        to: '/radio-free-america'
      }
    ]
  },
  {
    name: 'articles',
    label: 'Articles',
    routes: [
      {
        name: 'highlights',
        label: 'Highlights',
        to: '/highlights'
      },
      {
        name: 'musicNews',
        label: 'Schedule',
        to: '/music-news'
      },
      {
        name: 'sports',
        label: 'Sports',
        to: '/sports'
      },
      {
        name: 'publicAffairs',
        label: 'Public Affairs',
        to: '/public-affairs'
      }
    ]
  },
  {
    name: 'contact',
    label: 'Contact',
    routes: [
      {
        name: 'excomm',
        label: 'Excomm',
        to: '/contact'
      },
      {
        name: 'press',
        label: 'Press',
        to: '/press'
      },
      {
        name: 'tickets',
        label: 'Tickets',
        to: '/tickets'
      },
      {
        name: 'requestLine',
        label: 'Request Line',
        to: '/request-line'
      }
    ]
  },
  {
    name: 'about',
    label: 'About Us',
    routes: [
      {
        name: 'missionStatement',
        label: 'Mission',
        to: '/mission'
      },
      {
        name: 'gettingInvolved',
        label: 'Getting Involved',
        to: '/getting-involved'
      },
      {
        name: 'pressAbout',
        label: 'Press',
        to: '/press-about'
      },
      {
        name: 'alumni',
        label: 'Alumni',
        to: '/alumni'
      }
    ]
  },
  {
    name: 'donate',
    label: 'Donate',
    routes: [
      {
        name: 'cart',
        label: 'My Cart',
        to: '/cart'
      },
      {
        name: 'gifts',
        label: 'Premium Gifts',
        to: '/gifts'
      }
    ]
  }
]

export default routes
