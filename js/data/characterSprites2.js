const characterSprites2 = {
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FNatasha%2Fidle.png?alt=media",
        framesMax: 4,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FNatasha%2Fattack.png?alt=media",
        framesMax: 5,
      },
      spell: {
        projectile: {
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FProjectiles%2Fheal.png?alt=media",
          frames: { max: 1 },
          offset: {
            x: 0,
            y: 0,
          },
          scale: 1,
        },
        explosion: {
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FExplosions%2Fheal.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FLilina%2Fidle.png?alt=media",
        framesMax: 6,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FLilina%2Fattack.png?alt=media",
        framesMax: 10,
      },
      spell: {
        projectile: {
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FProjectiles%2Felfire.png?alt=media",
          frames: { max: 1 },
          offset: {
            x: 0,
            y: 0,
          },
          scale: 1,
        },
        explosion: {
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FExplosions%2Felfire.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FSophia%2Fidle.png?alt=media",
        framesMax: 8,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FSophia%2Fattack.png?alt=media",
        framesMax: 10,
      },
      spell: {
        projectile: {
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FProjectiles%2Fluna.png?alt=media",
          frames: { max: 1 },
          offset: {
            x: 32,
            y: 32,
          },
          scale: 1.5,
        },
        explosion: {
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FExplosions%2Fluna.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FMyrrh%2Fidle.png?alt=media",
        framesMax: 4,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FMyrrh%2Fattack.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FMelady%2Fidle.png?alt=media",
        framesMax: 4,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FMelady%2Fattack.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FEphraim%2Fidle.png?alt=media",
        framesMax: 9,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FEphraim%2Fattack.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FEirika%2Fidle.png?alt=media",
        framesMax: 5,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FEirika%2Fattack.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FRoy%2Fidle.png?alt=media",
        framesMax: 5,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FRoy%2Fattack.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FNino%2Fidle.png?alt=media",
        framesMax: 4,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FNino%2Fattack.png?alt=media",
        framesMax: 10,
      },
      spell: {
        projectile: {
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FProjectiles%2Fthunder.png?alt=media",
          frames: { max: 1 },
          offset: {
            x: 0,
            y: 10,
          },
          scale: 0.8,
        },
        explosion: {
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FExplosions%2Fthunder.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FHector%2Fidle.png?alt=media",
        framesMax: 6,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FHector%2Fattack.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FLyn%2Fidle.png?alt=media",
        framesMax: 10,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Character-Sprites%2FLyn%2Fattack.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Enemy-Sprites%2FBoneSword%2Fidle.png?alt=media",
        framesMax: 4,
      },
      run: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Enemy-Sprites%2FBoneSword%2Frun.png?alt=media",
        framesMax: 4,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Enemy-Sprites%2FBoneSword%2Fattack.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Enemy-Sprites%2FBoneSpear%2Fidle.png?alt=media",
        framesMax: 3,
      },
      run: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Enemy-Sprites%2FBoneSpear%2Frun.png?alt=media",
        framesMax: 3,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Enemy-Sprites%2FBoneSpear%2Fattack.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Enemy-Sprites%2FZombie%2Fidle.png?alt=media",
        framesMax: 3,
      },
      run: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Enemy-Sprites%2FZombie%2Frun.png?alt=media",
        framesMax: 3,
      },
      attack: {
        imageSrc:
          ".https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Enemy-Sprites%2FZombie%2Fattack.png?alt=media",
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
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Enemy-Sprites%2FMogall%2Fidle.png?alt=media&token=a8e9e6a7-cd83-4749-aa08-65d11cf9b7de",
        framesMax: 6,
      },
      run: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Enemy-Sprites%2FMogall%2Frun.png?alt=media&token=fcf83a41-ec88-418f-bd11-0149dae9685a",
        framesMax: 4,
      },
      attack: {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ninohuh-d7b3c.appspot.com/o/Enemy-Sprites%2FMogall%2Fattack.png?alt=media&token=b2d5971f-cc81-4c91-8d6f-18ac59e3e1e3",
        framesMax: 7,
      },
    },
  },
};
