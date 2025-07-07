import { GameType } from '@/types/GameType'

export const games: GameType[] = [
  {
    id: 1,
    name: 'The Last of Us',
    description: 'The Last of Us is an action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment.',
    release_date: '2013-06-14',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PS3',
      category: 'Action-Adventure',
      developer: 'Naughty Dog',
      publisher: 'Sony Computer Entertainment',
      rating: '5.0'
    },
    prices: {
      discount: 0,
      original: 100.0,
      current: 100.0
    }
  },
  {
    id: 2,
    name: 'God of War',
    description: 'God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment.',
    release_date: '2018-04-20',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PS4',
      category: 'Action-Adventure',
      developer: 'Santa Monica Studio',
      publisher: 'Sony Interactive Entertainment',
      rating: '4.8'
    },
    prices: {
      discount: 20,
      original: 100.0,
      current: 80.0
    }
  },
  {
    id: 3,
    name: 'The Witcher 3: Wild Hunt',
    description: 'The Witcher 3: Wild Hunt is an action role-playing game developed and published by CD Projekt.',
    release_date: '2015-05-19',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PC',
      category: 'Action RPG',
      developer: 'CD Projekt',
      publisher: 'CD Projekt',
      rating: '4.8'
    },
    prices: {
      discount: 0,
      original: 100.0,
      current: 100.0
    }
  },
  {
    id: 4,
    name: 'Horizon Zero Dawn',
    description: 'Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment.',
    release_date: '2017-02-28',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PS4',
      category: 'Action RPG',
      developer: 'Guerrilla Games',
      publisher: 'Sony Interactive Entertainment',
      rating: '4.8'
    },
    prices: {
      discount: 10,
      original: 100.0,
      current: 90.0
    }
  },
  {
    id: 5,
    name: 'Red Dead Redemption 2',
    description: 'Red Dead Redemption 2 is an open-world western game developed and published by Rockstar Games.',
    release_date: '2018-10-26',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PS4',
      category: 'Open-world',
      developer: 'Rockstar Games',
      publisher: 'Rockstar Games',
      rating: '5.0'
    },
    prices: {
      discount: 0,
      original: 100.0,
      current: 100.0
    }
  },
  {
    id: 6,
    name: 'Death Stranding',
    description: 'Death Stranding is an action game developed by Kojima Productions and published by Sony Interactive Entertainment.',
    release_date: '2019-11-08',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PS4',
      category: 'Action',
      developer: 'Kojima Productions',
      publisher: 'Sony Interactive Entertainment',
      rating: '4.8'
    },
    prices: {
      discount: 15,
      original: 100.0,
      current: 85.0
    }
  }
]
