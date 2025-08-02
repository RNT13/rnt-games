import { prisma } from '@/utils/prisma'

async function createGameIfNotExists(data: Parameters<typeof prisma.game.create>[0]['data']) {
  const exists = await prisma.game.findFirst({
    where: { name: data.name }
  })

  if (!exists) {
    await prisma.game.create({ data })
    console.log(`Jogo criado: ${data.name}`)
  } else {
    console.log(`Jogo já existe: ${data.name}`)
  }
}

async function main() {
  await createGameIfNotExists({
    name: 'The Witcher 3',
    description: 'Jogo de aventura e RPG.',
    releaseDate: new Date('2015-05-18'),
    highlight: true,
    media: {
      create: {
        thumbnail: 'https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png',
        cover: 'https://sm.ign.com/t/ign_br/video/t/the-first-/the-first-15-minutes-of-the-witcher-3-wild-hunt-ig_4bwz.1280.jpg',
        gallery: {
          create: [
            {
              url: 'https://sm.ign.com/t/ign_br/video/t/the-first-/the-first-15-minutes-of-the-witcher-3-wild-hunt-ig_4bwz.1280.jpg',
              type: 'image'
            },
            {
              url: 'https://sm.ign.com/t/ign_br/video/t/the-first-/the-first-15-minutes-of-the-witcher-3-wild-hunt-ig_4bwz.1280.jpg',
              type: 'image'
            }
          ]
        }
      }
    },
    details: {
      create: {
        system: 'Windows',
        category: 'RPG',
        developer: 'CD Projekt',
        publisher: 'CD Projekt',
        rating: '5.0'
      }
    },
    prices: {
      create: {
        discount: 30,
        old: 59.99,
        current: 41.99
      }
    }
  })

  await createGameIfNotExists({
    name: 'FIFA 24',
    description: 'Simulador de futebol.',
    releaseDate: new Date('2024-09-20'),
    highlight: false,
    media: {
      create: {
        thumbnail: 'https://www.europanet.com.br/upload/id_produto/60_____/6000701g.jpg',
        cover: 'https://f.i.uol.com.br/fotografia/2023/07/18/168970506164b6da651ac4a_1689705061_3x2_md.jpg',
        gallery: {
          create: [
            {
              url: 'https://f.i.uol.com.br/fotografia/2023/07/18/168970506164b6da651ac4a_1689705061_3x2_md.jpg',
              type: 'image'
            },
            {
              url: 'https://f.i.uol.com.br/fotografia/2023/07/18/168970506164b6da651ac4a_1689705061_3x2_md.jpg',
              type: 'image'
            }
          ]
        }
      }
    },
    details: {
      create: {
        system: 'PlayStation 5',
        category: 'Esportes',
        developer: 'EA Sports',
        publisher: 'EA',
        rating: '4.3'
      }
    },
    prices: {
      create: {
        discount: 0,
        old: 79.99,
        current: 79.99
      }
    }
  })

  await createGameIfNotExists({
    name: 'Cyberpunk 2077',
    description: 'Jogo de RPG futurista.',
    releaseDate: new Date('2020-12-10'),
    highlight: false,
    media: {
      create: {
        thumbnail: 'https://gaming-cdn.com/images/products/840/616x353/cyberpunk-2077-pc-game-gog-com-cover.jpg?v=1748447631',
        cover: 'https://gaming-cdn.com/images/products/840/616x353/cyberpunk-2077-pc-game-gog-com-cover.jpg?v=1748447631',
        gallery: {
          create: [
            {
              url: 'https://gaming-cdn.com/images/products/840/616x353/cyberpunk-2077-pc-game-gog-com-cover.jpg?v=1748447631',
              type: 'image'
            },
            {
              url: 'https://gaming-cdn.com/images/products/840/616x353/cyberpunk-2077-pc-game-gog-com-cover.jpg?v=1748447631',
              type: 'image'
            }
          ]
        }
      }
    },
    details: {
      create: {
        system: 'PC',
        category: 'RPG',
        developer: 'CD Projekt Red',
        publisher: 'CD Projekt',
        rating: '4.7'
      }
    },
    prices: {
      create: {
        discount: 20,
        old: 59.99,
        current: 47.99
      }
    }
  })

  await createGameIfNotExists({
    name: 'Red Dead Redemption 2',
    description: 'Jogo de ação e aventura no Velho Oeste.',
    releaseDate: new Date('2018-10-26'),
    highlight: true,
    media: {
      create: {
        thumbnail: 'https://i.pinimg.com/736x/c8/78/ac/c878acdff5b152ce75804d1c938a2583.jpg',
        cover:
          'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg',
        gallery: {
          create: [
            {
              url: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg',
              type: 'image'
            },
            {
              url: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg',
              type: 'image'
            }
          ]
        }
      }
    },
    details: {
      create: {
        system: 'Xbox One',
        category: 'Ação/Aventura',
        developer: 'Rockstar Games',
        publisher: 'Rockstar Games',
        rating: '4.5'
      }
    },
    prices: {
      create: {
        discount: 15,
        old: 59.99,
        current: 50.99
      }
    }
  })

  await createGameIfNotExists({
    name: 'Hollow Knight',
    description: 'Jogo de aventura e exploração em um mundo subterrâneo.',
    releaseDate: new Date('2017-02-24'),
    highlight: false,
    media: {
      create: {
        thumbnail: 'https://i.ytimg.com/vi/JuP47fRBsWg/maxresdefault.jpg',
        cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/capsule_616x353.jpg?t=1695270428',
        gallery: {
          create: [
            {
              url: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/capsule_616x353.jpg?t=1695270428',
              type: 'image'
            },
            {
              url: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/capsule_616x353.jpg?t=1695270428',
              type: 'image'
            }
          ]
        }
      }
    },
    details: {
      create: {
        system: 'Nintendo Switch',
        category: 'Metroidvania',
        developer: 'Team Cherry',
        publisher: 'Team Cherry',
        rating: '5.0'
      }
    },
    prices: {
      create: {
        discount: 10,
        old: 29.99,
        current: 26.99
      }
    }
  })

  await createGameIfNotExists({
    name: 'The Legend of Zelda: Breath of the Wild',
    description: 'Jogo de aventura e exploração em um mundo aberto.',
    releaseDate: new Date('2017-03-03'),
    highlight: true,
    media: {
      create: {
        thumbnail:
          'https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg/250px-The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
        cover: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg',
        gallery: {
          create: [
            {
              url: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg',
              type: 'image'
            },
            {
              url: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg',
              type: 'image'
            }
          ]
        }
      }
    },
    details: {
      create: {
        system: 'Nintendo Switch',
        category: 'Aventura',
        developer: 'Nintendo',
        publisher: 'Nintendo',
        rating: '5.8'
      }
    },
    prices: {
      create: {
        discount: 5,
        old: 59.99,
        current: 56.99
      }
    }
  })

  await createGameIfNotExists({
    name: 'God of War - Ragnarok',
    description: 'Jogo de ação e aventura baseado na mitologia nórdica.',
    releaseDate: new Date('2028-10-01'),
    highlight: false,
    media: {
      create: {
        thumbnail: 'https://upload.wikimedia.org/wikipedia/pt/a/a5/God_of_War_Ragnar%C3%B6k_capa.jpg',
        cover: 'https://blog.br.playstation.com/tachyon/sites/4/2024/09/2580a43b4b5ee4859c3fb0fcdcaf024e35a1f9a5.jpg',
        gallery: {
          create: [
            {
              url: 'https://blog.br.playstation.com/tachyon/sites/4/2024/09/2580a43b4b5ee4859c3fb0fcdcaf024e35a1f9a5.jpg',
              type: 'image'
            },
            {
              url: 'https://blog.br.playstation.com/tachyon/sites/4/2024/09/2580a43b4b5ee4859c3fb0fcdcaf024e35a1f9a5.jpg',
              type: 'image'
            }
          ]
        }
      }
    },
    details: {
      create: {
        system: 'PlayStation 4',
        category: 'Ação/Aventura',
        developer: 'Santa Monica Studio',
        publisher: 'Sony Interactive Entertainment',
        rating: '0.0' // Avaliação ainda não disponível
      }
    },
    prices: {
      create: {
        discount: 0,
        old: 49.99,
        current: 49.99
      }
    }
  })

  await createGameIfNotExists({
    name: 'Grand Theft Auto VI',
    description: 'Jogo de ação e aventura em um mundo aberto.',
    releaseDate: new Date('2028-10-01'),
    highlight: false,
    media: {
      create: {
        thumbnail: 'https://www.europanet.com.br/upload/id_produto/60_____/6001101p.jpg',
        cover:
          'https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FJason_and_Lucia_02_With_Logos_landscape.93ab5523.jpg&w=3840&q=75',
        gallery: {
          create: [
            {
              url: 'https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FJason_and_Lucia_02_With_Logos_landscape.93ab5523.jpg&w=3840&q=75',
              type: 'image'
            },
            {
              url: 'https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FJason_and_Lucia_02_With_Logos_landscape.93ab5523.jpg&w=3840&q=75',
              type: 'image'
            }
          ]
        }
      }
    },
    details: {
      create: {
        system: 'PlayStation 5',
        category: 'Ação/Aventura',
        developer: 'Rockstar Games',
        publisher: 'Rockstar Games',
        rating: '0.0' // Avaliação ainda não disponível
      }
    },
    prices: {
      create: {
        discount: 0,
        old: 69.99,
        current: 69.99
      }
    }
  })

  console.log('Jogos inseridos com sucesso!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
