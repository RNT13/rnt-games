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
  },
  {
    id: 7,
    name: 'Cyberpunk 2077',
    description: 'Cyberpunk 2077 is an action role-playing game developed and published by CD Projekt.',
    release_date: '2020-12-10',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PS4',
      category: 'Action RPG',
      developer: 'CD Projekt',
      publisher: 'CD Projekt',
      rating: '4.8'
    },
    prices: {
      discount: 20,
      original: 100.0,
      current: 80.0
    }
  },
  {
    id: 8,
    name: 'Spider-Man: Miles Morales',
    description:
      'Spider-Man: Miles Morales is an action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment.',
    release_date: '2020-11-12',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PS4',
      category: 'Action-Adventure',
      developer: 'Insomniac Games',
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
    id: 9,
    name: 'Resident Evil Village',
    description: 'Resident Evil Village is a survival horror game developed and published by Capcom.',
    release_date: '2021-05-07',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PS4',
      category: 'Survival Horror',
      developer: 'Capcom',
      publisher: 'Capcom',
      rating: '4.8'
    },
    prices: {
      discount: 15,
      original: 100.0,
      current: 85.0
    }
  },
  {
    id: 10,
    name: 'Ratchet & Clank: Rift Apart',
    description: 'Ratchet & Clank: Rift Apart is a platformer game developed by Insomniac Games and published by Sony Interactive Entertainment.',
    release_date: '2021-06-11',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PS5',
      category: 'Platformer',
      developer: 'Insomniac Games',
      publisher: 'Sony Interactive Entertainment',
      rating: '4.8'
    },
    prices: {
      discount: 10,
      original: 100.0,
      current: 90.0
    }
  }
]

export const SoonGames: GameType[] = [
  {
    id: 1,
    name: 'The Last of Us',
    description: `The Last of Us is an action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment.
    The game follows the story of Joel, a man tasked with escorting a young girl named Ellie across the United States in a post-apocalyptic world.
    The game features a strong narrative focus, deep characters, and a variety of gameplay mechanics, including combat, stealth, and exploration.
    The game has received widespread critical acclaim for its storytelling, characters, and gameplay, and is widely considered one of the best games of all time.`,
    release_date: 'COMING SOON',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PS3',
      category: 'Action-Adventure',
      developer: 'Naughty Dog',
      publisher: 'Sony Computer Entertainment',
      rating: ''
    },
    prices: {
      discount: 0,
      original: 0,
      current: 0
    }
  },
  {
    id: 2,
    name: 'God of War',
    description: 'God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment.',
    release_date: 'COMING SOON',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PS4',
      category: 'Action-Adventure',
      developer: 'Santa Monica Studio',
      publisher: 'Sony Interactive Entertainment',
      rating: ''
    },
    prices: {
      discount: 0,
      original: 0,
      current: 0
    }
  },
  {
    id: 3,
    name: 'Spider-Man',
    description: 'Spider-Man is an action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment.',
    release_date: 'COMING SOON',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PS4',
      category: 'Action-Adventure',
      developer: 'Insomniac Games',
      publisher: 'Sony Interactive Entertainment',
      rating: ''
    },
    prices: {
      discount: 0,
      original: 0,
      current: 0
    }
  },
  {
    id: 4,
    name: 'The Last Guardian',
    description: 'The Last Guardian is an action-adventure game developed by genDESIGN and published by Sony Interactive Entertainment.',
    release_date: 'COMING SOON',
    media: {
      thumbnail: '/armoredCoreGame.jpg',
      cover: '/armoredCoreGame.jpg'
    },
    details: {
      system: 'PS4',
      category: 'Action-Adventure',
      developer: 'genDESIGN',
      publisher: 'Sony Interactive Entertainment',
      rating: ''
    },
    prices: {
      discount: 0,
      original: 0,
      current: 0
    }
  }
]

export const mockCategories = [
  {
    id: 'aventura',
    name: 'Aventura',
    gamesCount: 2,
    description:
      'Um jogo de aventura é um jogo onde você explora mundos misteriosos, resolver puzzles e lutar contra monstros para salvar o mundo da destruição.',
    imageUrl: '/armoredCoreGame.jpg'
  },
  {
    id: 'acao',
    name: 'Açao',
    gamesCount: 3,
    description:
      'Um jogo de ação é um jogo onde vocé controla um personagem em uma aventura, lutando contra inimigos, coletando itens e resolvendo problemas para salvar o mundo da destruição.',
    imageUrl: '/armoredCoreGame.jpg'
  },
  {
    id: 'rpg',
    name: 'RPG',
    gamesCount: 4,
    description:
      'Um jogo de RPG é um jogo onde vocé controla um personagem em uma aventura, lutando contra inimigos, coletando itens e resolvendo problemas para salvar o mundo da destruição.',
    imageUrl: '/armoredCoreGame.jpg'
  },
  {
    id: 'plataforma',
    name: 'Plataforma',
    gamesCount: 5,
    description:
      'Um jogo de plataforma é um jogo onde vocé controla um personagem em uma aventura, lutando contra inimigos, coletando itens e resolvendo problemas para salvar o mundo da destruição.',
    imageUrl: '/armoredCoreGame.jpg'
  },
  {
    id: 'corrida',
    name: 'Corrida',
    gamesCount: 6,
    description:
      'Um jogo de corrida é um jogo onde vocé controla um personagem em uma aventura, lutando contra inimigos, coletando itens e resolvendo problemas para salvar o mundo da destruição.',
    imageUrl: '/armoredCoreGame.jpg'
  },
  {
    id: 'esporte',
    name: 'Esporte',
    gamesCount: 7,
    description:
      'Um jogo de esporte é um jogo onde vocé controla um personagem em uma aventura, lutando contra inimigos, coletando itens e resolvendo problemas para salvar o mundo da destruição.',
    imageUrl: '/armoredCoreGame.jpg'
  },
  {
    id: 'estratege',
    name: 'Estratégia',
    gamesCount: 8,
    description:
      'Um jogo de estratégia é um jogo onde vocé controla um personagem em uma aventura, lutando contra inimigos, coletando itens e resolvendo problemas para salvar o mundo da destruição.',
    imageUrl: '/armoredCoreGame.jpg'
  },
  {
    id: 'simulacao',
    name: 'Simulaço',
    gamesCount: 9,
    description:
      'Um jogo de simulação é um jogo onde vocé controla um personagem em uma aventura, lutando contra inimigos, coletando itens e resolvendo problemas para salvar o mundo da destruição.',
    imageUrl: '/armoredCoreGame.jpg'
  },
  {
    id: 'outro',
    name: 'Outro',
    gamesCount: 10,
    description:
      'Um jogo de outro é um jogo onde vocé controla um personagem em uma aventura, lutando contra inimigos, coletando itens e resolvendo problemas para salvar o mundo da destruição.',
    imageUrl: '/armoredCoreGame.jpg'
  }
]
