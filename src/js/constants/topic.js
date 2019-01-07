/**
 * https://developers.google.com/youtube/v3/docs/search/list?hl=ru#parameters
 * topicId
 */
export const topic = {
  keys: [
    'music',
    'gaming',
    'sports',
    'entertainment',
    'lifestyle',
    'beauty',
    'society'
  ],
  music: {
    title: 'Music',
    parrentTopic: '/m/04rlf',
    children: [
      {
        topicId: '/m/02mscn',
        title: 'Christian music'
      },
      {
        topicId: '/m/0ggq0m',
        title: 'Classical music'
      },
      {
        topicId: '/m/01lyv',
        title: 'Country'
      },
      {
        topicId: '/m/02lkt',
        title: 'Electronic music'
      },
      {
        topicId: '/m/0glt670',
        title: 'Hip hop music'
      },
      {
        topicId: '/m/05rwpb',
        title: 'Independent music'
      },
      {
        topicId: '/m/03_d0',
        title: 'Jazz'
      },
      {
        topicId: '/m/028sqc',
        title: 'Music of Asia'
      },
      {
        topicId: '/m/0g293',
        title: 'Music of Latin America'
      },
      {
        topicId: '/m/064t9',
        title: 'Pop music'
      },
      {
        topicId: '/m/06cqb',
        title: 'Reggae'
      },
      {
        topicId: '/m/06j6l',
        title: 'Rhythm and blues'
      },
      {
        topicId: '/m/06by7',
        title: 'Rock music'
      },
      {
        topicId: '/m/0gywn',
        title: 'Soul music'
      }
    ]
  },
  gaming: {
    title: 'Gaming',
    parrentTopic: '/m/0bzvm2',
    children: [
      {
        topicId: '/m/025zzc',
        title: 'Action game'
      },
      {
        topicId: '/m/02ntfj',
        title: 'Action-adventure game'
      },
      {
        topicId: '/m/0b1vjn',
        title: 'Casual game'
      },
      {
        topicId: '/m/02hygl',
        title: 'Music video game'
      },
      {
        topicId: '/m/04q1x3q',
        title: 'Puzzle video game'
      },
      {
        topicId: '/m/01sjng',
        title: 'Racing video game'
      },
      {
        topicId: '/m/0403l3g',
        title: 'Role-playing video game'
      },
      {
        topicId: '/m/021bp2',
        title: 'Simulation video game'
      },
      {
        topicId: '/m/022dc6',
        title: 'Sports game'
      },
      {
        topicId: '/m/03hf_rm',
        title: 'Strategy video game'
      }
    ]
  },
  sports: {
    title: 'Sports',
    parrentTopic: '/m/06ntj',
    children: [
      {
        topicId: '/m/0jm_',
        title: 'American football'
      },
      {
        topicId: '/m/018jz',
        title: 'Baseball'
      },
      {
        topicId: '/m/018w8',
        title: 'Basketball'
      },
      {
        topicId: '/m/01cgz',
        title: 'Boxing'
      },
      {
        topicId: '/m/09xp_',
        title: 'Cricket'
      },
      {
        topicId: '/m/02vx4',
        title: 'Football'
      },
      {
        topicId: '/m/037hz',
        title: 'Golf'
      },
      {
        topicId: '/m/03tmr',
        title: 'Ice hockey'
      },
      {
        topicId: '/m/01h7lh',
        title: 'Mixed martial arts'
      },
      {
        topicId: '/m/0410tth',
        title: 'Motorsport'
      },
      {
        topicId: '/m/07bs0',
        title: 'Tennis'
      },
      {
        topicId: '/m/07_53',
        title: 'Volleyball'
      }
    ]
  },
  entertainment: {
    title: 'Entertainment',
    parrentTopic: '/m/02jjt',
    children: [
      {
        topicId: '/m/09kqc',
        title: 'Humor'
      },
      {
        topicId: '/m/02vxn',
        title: 'Movies'
      },
      {
        topicId: '/m/05qjc',
        title: 'Performing arts'
      },
      {
        topicId: '/m/066wd',
        title: 'Professional wrestling'
      },
      {
        topicId: '/m/0f2f9',
        title: 'TV shows'
      }
    ]
  },
  lifestyle: {
    title: 'Lifestyle',
    parrentTopic: '/m/019_rr',
    children: [
      {
        topicId: '/m/032tl',
        title: 'Fashion'
      },
      {
        topicId: '/m/027x7n',
        title: 'Fitness'
      },
      {
        topicId: '/m/02wbm',
        title: 'Food'
      },
      {
        topicId: '/m/03glg',
        title: 'Hobby'
      },
      {
        topicId: '/m/068hy',
        title: 'Pets'
      },
      {
        topicId: '/m/041xxh',
        title: 'Physical attractiveness'
      }
    ]
  },
  beauty: {
    title: false,
    parrentTopic: false,
    children: [
      {
        topicId: '/m/07c1v',
        title: 'Technology'
      },
      {
        topicId: '/m/07bxq',
        title: 'Tourism'
      },
      {
        topicId: '/m/07yv9',
        title: 'Vehicles'
      }
    ]
  },
  society: {
    title: 'Society',
    parrentTopic: '/m/098wr',
    children: [
      {
        topicId: '/m/09s1f',
        title: 'Business'
      },
      {
        topicId: '/m/0kt51',
        title: 'Health'
      },
      {
        topicId: '/m/01h6rj',
        title: 'Military'
      },
      {
        topicId: '/m/05qt0',
        title: 'Politics'
      },
      {
        topicId: '/m/06bvp',
        title: 'Religion'
      }
    ]
  }
};
