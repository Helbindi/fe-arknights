const characterSprites = {
  // Character
  natasha: {
    name: "Natasha",
    isHealer: true,
    isRanged: true,
    stats: {
      health: 100,
      power: 5,
      defence: 10,
      maxBlock: 1,
      cost: 10,
    },
    offset: {
      x: 16,
      y: 32,
    },
    scale: 1.5,
    sprites: {
      idle: {
        imageSrc: "./assets/Characters/Natasha/idle.png",
        framesMax: 4,
      },
      attack: {
        imageSrc: "./assets/Characters/Natasha/attack.png",
        framesMax: 5,
      },
      spell: {
        projectile: {
          imageSrc: "../assets/Projectiles/heal.png",
          frames: { max: 1 },
          offset: {
            x: 0,
            y: 0,
          },
          scale: 1,
        },
        explosion: {
          imageSrc: "./assets/Explosions/heal.png",
          frames: { max: 3 },
          offset: {
            x: 0,
            y: 0,
          },
          scale: 1,
        },
      },
    },
  },
  lilina: {
    name: "Lilina",
    isHealer: false,
    isRanged: true,
    stats: {
      health: 100,
      power: 40,
      defence: 10,
      maxBlock: 1,
      cost: 10,
    },
    offset: {
      x: 0,
      y: 5,
    },
    scale: 1,
    sprites: {
      idle: {
        imageSrc: "./assets/Characters/Lilina/idle.png",
        framesMax: 6,
      },
      attack: {
        imageSrc: "./assets/Characters/Lilina/attack.png",
        framesMax: 10,
      },
      spell: {
        projectile: {
          imageSrc: "../assets/Projectiles/elfire.png",
          frames: { max: 1 },
          offset: {
            x: 0,
            y: 0,
          },
          scale: 1,
        },
        explosion: {
          imageSrc: "./assets/Explosions/elfire.png",
          frames: { max: 3 },
          offset: {
            x: 0,
            y: 0,
          },
          scale: 1,
        },
      },
    },
  },
  sophia: {
    name: "Sophia",
    isHealer: false,
    isRanged: true,
    stats: {
      health: 100,
      power: 40,
      defence: 10,
      maxBlock: 1,
      cost: 10,
    },
    offset: {
      x: 5,
      y: 16,
    },
    scale: 1.1,
    sprites: {
      idle: {
        imageSrc: "./assets/Characters/Sophia/idle.png",
        framesMax: 8,
      },
      attack: {
        imageSrc: "./assets/Characters/Sophia/attack.png",
        framesMax: 10,
      },
      spell: {
        projectile: {
          imageSrc: "./assets/Projectiles/luna.png",
          frames: { max: 1 },
          offset: {
            x: 32,
            y: 32,
          },
          scale: 1.5,
        },
        explosion: {
          imageSrc: "./assets/Explosions/luna.png",
          frames: { max: 3 },
          offset: {
            x: 32,
            y: -32,
          },
          scale: 1.5,
        },
      },
    },
  },
  myrrh: {
    name: "Myrrh",
    isHealer: false,
    isRanged: false,
    stats: {
      health: 100,
      power: 30,
      defence: 20,
      maxBlock: 2,
      cost: 10,
    },
    offset: {
      x: 42,
      y: 64,
    },
    scale: 1.3,
    sprites: {
      idle: {
        imageSrc: "./assets/Characters/Myrrh/idle.png",
        framesMax: 4,
      },
      attack: {
        imageSrc: "./assets/Characters/Myrrh/attack.png",
        framesMax: 14,
      },
    },
  },
  melady: {
    name: "Melady",
    isHealer: false,
    isRanged: false,
    stats: {
      health: 100,
      power: 30,
      defence: 20,
      maxBlock: 2,
      cost: 10,
    },
    sprites: {
      idle: {
        imageSrc: "./assets/Characters/Melady/idle.png",
        framesMax: 4,
      },
      attack: {
        imageSrc: "./assets/Characters/Melady/attack.png",
        framesMax: 6,
      },
    },
    offset: {
      x: 42,
      y: 50,
    },
    scale: 1.3,
  },
  ephraim: {
    name: "Ephraim",
    isHealer: false,
    isRanged: false,
    stats: {
      health: 100,
      power: 25,
      defence: 15,
      maxBlock: 1,
      cost: 10,
    },
    offset: {
      x: 10,
      y: 40,
    },
    scale: 1.6,
    sprites: {
      idle: {
        imageSrc: "./assets/Characters/Ephraim/idle.png",
        framesMax: 9,
      },
      attack: {
        imageSrc: "./assets/Characters/Ephraim/attack.png",
        framesMax: 9,
      },
    },
  },
  eirika: {
    name: "Eirika",
    isHealer: false,
    isRanged: false,
    stats: {
      health: 100,
      power: 25,
      defence: 15,
      maxBlock: 1,
      cost: 10,
    },
    offset: {
      x: 10,
      y: 38,
    },
    scale: 1.6,
    sprites: {
      idle: {
        imageSrc: "./assets/Characters/Eirika/idle.png",
        framesMax: 5,
      },
      attack: {
        imageSrc: "./assets/Characters/Eirika/attack.png",
        framesMax: 7,
      },
    },
  },
  roy: {
    name: "Roy",
    isHealer: false,
    isRanged: false,
    stats: {
      health: 100,
      power: 25,
      defence: 15,
      maxBlock: 1,
      cost: 10,
    },
    offset: {
      x: 14,
      y: 36,
    },
    scale: 1.6,
    sprites: {
      idle: {
        imageSrc: "./assets/Characters/Roy/idle.png",
        framesMax: 5,
      },
      attack: {
        imageSrc: "./assets/Characters/Roy/attack.png",
        framesMax: 10,
      },
    },
  },
  nino: {
    name: "Nino",
    isHealer: false,
    isRanged: true,
    stats: {
      health: 100,
      power: 40,
      defence: 10,
      maxBlock: 1,
      cost: 10,
    },
    offset: {
      x: 28,
      y: 48,
    },
    scale: 1.8,
    sprites: {
      idle: {
        imageSrc: "./assets/Characters/Nino/idle.png",
        framesMax: 4,
      },
      attack: {
        imageSrc: "./assets/Characters/Nino/attack.png",
        framesMax: 10,
      },
      spell: {
        projectile: {
          imageSrc: "../assets/Projectiles/thunder.png",
          frames: { max: 1 },
          offset: {
            x: 0,
            y: 10,
          },
          scale: 0.8,
        },
        explosion: {
          imageSrc: "./assets/Explosions/thunder.png",
          frames: { max: 3 },
          offset: {
            x: 0,
            y: 0,
          },
          scale: 1,
        },
      },
    },
  },
  hector: {
    name: "Hector",
    isHealer: false,
    isRanged: false,
    stats: {
      health: 100,
      power: 30,
      defence: 20,
      maxBlock: 2,
      cost: 10,
    },
    offset: {
      x: 10,
      y: 32,
    },
    scale: 1.5,
    sprites: {
      idle: {
        imageSrc: "./assets/Characters/Hector/idle.png",
        framesMax: 6,
      },
      attack: {
        imageSrc: "./assets/Characters/Hector/attack.png",
        framesMax: 10,
      },
    },
  },
  lyn: {
    name: "Lyn",
    isHealer: false,
    isRanged: false,
    stats: {
      health: 100,
      power: 25,
      defence: 15,
      maxBlock: 1,
      cost: 10,
    },
    offset: {
      x: 14,
      y: 32,
    },
    scale: 1.5,
    sprites: {
      idle: {
        imageSrc: "./assets/Characters/Lyn/idle.png",
        framesMax: 10,
      },
      attack: {
        imageSrc: "./assets/Characters/Lyn/attack.png",
        framesMax: 10,
      },
    },
  },
  // Enemy
  bonesword: {
    name: "BoneSword",
    isRanged: false,
    stats: {
      health: 100,
      power: 25,
      defence: 15,
    },
    offset: {
      x: 0,
      y: 5,
    },
    scale: 1,
    sprites: {
      idle: {
        imageSrc: "./assets/Enemy/BoneSword/idle.png",
        framesMax: 4,
      },
      run: {
        imageSrc: "./assets/Enemy/BoneSword/run.png",
        framesMax: 4,
      },
      attack: {
        imageSrc: "./assets/Enemy/BoneSword/attack.png",
        framesMax: 6,
      },
    },
  },
  bonespear: {
    name: "BoneSpear",
    isRanged: false,
    stats: {
      health: 100,
      power: 25,
      defence: 15,
    },
    offset: {
      x: 0,
      y: 5,
    },
    scale: 1,
    sprites: {
      idle: {
        imageSrc: "./assets/Enemy/BoneSpear/idle.png",
        framesMax: 3,
      },
      run: {
        imageSrc: "./assets/Enemy/BoneSpear/run.png",
        framesMax: 3,
      },
      attack: {
        imageSrc: "./assets/Enemy/BoneSpear/attack.png",
        framesMax: 5,
      },
    },
  },
  zombie: {
    name: "Zombie",
    isRanged: false,
    stats: {
      health: 100,
      power: 30,
      defence: 20,
    },
    offset: {
      x: 0,
      y: 5,
    },
    scale: 1,
    sprites: {
      idle: {
        imageSrc: "./assets/Enemy/Zombie/idle.png",
        framesMax: 3,
      },
      run: {
        imageSrc: "./assets/Enemy/Zombie/run.png",
        framesMax: 3,
      },
      attack: {
        imageSrc: "./assets/Enemy/Zombie/attack.png",
        framesMax: 5,
      },
    },
  },
  mogall: {
    name: "Mogall",
    isRanged: false,
    stats: {
      health: 100,
      power: 40,
      defence: 10,
    },
    offset: {
      x: 0,
      y: 5,
    },
    scale: 1,
    sprites: {
      idle: {
        imageSrc: "./assets/Enemy/Mogall/idle.png",
        framesMax: 6,
      },
      run: {
        imageSrc: "./assets/Enemy/Mogall/run.png",
        framesMax: 4,
      },
      attack: {
        imageSrc: "./assets/Enemy/Mogall/attack.png",
        framesMax: 7,
      },
    },
  },
};
