module.exports = [
  {
    "type": "ammo",
    "name": "piercing-rounds-magazine",
    "icon": "__base__/graphics/icons/piercing-rounds-magazine.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "ammo_type": {
      "category": "bullet",
      "action": {
        "type": "direct",
        "action_delivery": {
          "type": "instant",
          "source_effects": {
            "type": "create-explosion",
            "entity_name": "explosion-gunshot"
          },
          "target_effects": [
            {
              "type": "create-entity",
              "entity_name": "explosion-hit"
            },
            {
              "type": "damage",
              "damage": {
                "amount": 5,
                "type": "physical"
              }
            }
          ]
        }
      }
    },
    "magazine_size": 10,
    "subgroup": "ammo",
    "order": "a[basic-clips]-b[piercing-rounds-magazine]",
    "stack_size": 100
  },
  {
    "type": "ammo",
    "name": "flame-thrower-ammo",
    "icon": "__base__/graphics/icons/flame-thrower-ammo.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "ammo_type": {
      "category": "flame-thrower",
      "target_type": "position",
      "clamp_position": true,
      "action": {
        "type": "direct",
        "action_delivery": {
          "type": "stream",
          "stream": "handheld-flamethrower-fire-stream",
          "max_length": 15,
          "duration": 160
        }
      }
    },
    "magazine_size": 100,
    "subgroup": "ammo",
    "order": "e[flame-thrower]",
    "stack_size": 50
  },
  {
    "type": "ammo",
    "name": "rocket",
    "icon": "__base__/graphics/icons/rocket.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "ammo_type": {
      "category": "rocket",
      "action": {
        "type": "direct",
        "action_delivery": {
          "type": "projectile",
          "projectile": "rocket",
          "starting_speed": 0.1,
          "source_effects": {
            "type": "create-entity",
            "entity_name": "explosion-hit"
          }
        }
      }
    },
    "subgroup": "ammo",
    "order": "d[rocket-launcher]-a[basic]",
    "stack_size": 100
  },
  {
    "type": "ammo",
    "name": "explosive-rocket",
    "icon": "__base__/graphics/icons/explosive-rocket.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "ammo_type": {
      "category": "rocket",
      "action": {
        "type": "direct",
        "action_delivery": {
          "type": "projectile",
          "projectile": "explosive-rocket",
          "starting_speed": 0.1,
          "source_effects": {
            "type": "create-entity",
            "entity_name": "explosion-hit"
          }
        }
      }
    },
    "subgroup": "ammo",
    "order": "d[rocket-launcher]-b[explosive]",
    "stack_size": 100
  },
  {
    "type": "ammo",
    "name": "shotgun-shell",
    "icon": "__base__/graphics/icons/shotgun-shell.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "ammo_type": {
      "category": "shotgun-shell",
      "target_type": "direction",
      "action": [
        {
          "type": "direct",
          "action_delivery": {
            "type": "instant",
            "source_effects": [
              {
                "type": "create-explosion",
                "entity_name": "explosion-gunshot"
              }
            ]
          }
        },
        {
          "type": "direct",
          "repeat_count": 12,
          "action_delivery": {
            "type": "projectile",
            "projectile": "shotgun-pellet",
            "starting_speed": 1,
            "direction_deviation": 0.3,
            "range_deviation": 0.3,
            "max_range": 15
          }
        }
      ]
    },
    "magazine_size": 10,
    "subgroup": "ammo",
    "order": "b[shotgun]-a[basic]",
    "stack_size": 100
  },
  {
    "type": "ammo",
    "name": "piercing-shotgun-shell",
    "icon": "__base__/graphics/icons/piercing-shotgun-shell.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "ammo_type": {
      "category": "shotgun-shell",
      "target_type": "direction",
      "action": [
        {
          "type": "direct",
          "action_delivery": {
            "type": "instant",
            "source_effects": [
              {
                "type": "create-explosion",
                "entity_name": "explosion-gunshot"
              }
            ]
          }
        },
        {
          "type": "direct",
          "repeat_count": 16,
          "action_delivery": {
            "type": "projectile",
            "projectile": "piercing-shotgun-pellet",
            "starting_speed": 1,
            "direction_deviation": 0.3,
            "range_deviation": 0.3,
            "max_range": 15
          }
        }
      ]
    },
    "magazine_size": 10,
    "subgroup": "ammo",
    "order": "b[shotgun]-b[piercing]",
    "stack_size": 100
  },
  {
    "type": "ammo",
    "name": "railgun-dart",
    "icon": "__base__/graphics/icons/railgun-ammo.png",
    "flags": [
      "goes-to-main-inventory",
      "hidden"
    ],
    "ammo_type": {
      "category": "railgun",
      "target_type": "direction",
      "action": {
        "type": "line",
        "range": 25,
        "width": 0.5,
        "source_effects": {
          "type": "create-explosion",
          "entity_name": "railgun-beam"
        },
        "action_delivery": {
          "type": "instant",
          "target_effects": {
            "type": "damage",
            "damage": {
              "amount": 100,
              "type": "physical"
            }
          }
        }
      }
    },
    "magazine_size": 4,
    "subgroup": "ammo",
    "order": "c[railgun]",
    "stack_size": 100
  },
  {
    "type": "ammo",
    "name": "cannon-shell",
    "icon": "__base__/graphics/icons/cannon-shell.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "ammo_type": {
      "category": "cannon-shell",
      "target_type": "direction",
      "action": {
        "type": "direct",
        "action_delivery": {
          "type": "projectile",
          "projectile": "cannon-projectile",
          "starting_speed": 1,
          "direction_deviation": 0.1,
          "range_deviation": 0.1,
          "max_range": 30,
          "source_effects": {
            "type": "create-explosion",
            "entity_name": "explosion-gunshot"
          }
        }
      }
    },
    "subgroup": "ammo",
    "order": "d[cannon-shell]-a[basic]",
    "stack_size": 100
  },
  {
    "type": "ammo",
    "name": "explosive-cannon-shell",
    "icon": "__base__/graphics/icons/explosive-cannon-shell.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "ammo_type": {
      "category": "cannon-shell",
      "target_type": "direction",
      "action": {
        "type": "direct",
        "action_delivery": {
          "type": "projectile",
          "projectile": "explosive-cannon-projectile",
          "starting_speed": 1,
          "direction_deviation": 0.1,
          "range_deviation": 0.1,
          "max_range": 30,
          "source_effects": {
            "type": "create-explosion",
            "entity_name": "explosion-gunshot"
          }
        }
      }
    },
    "subgroup": "ammo",
    "order": "d[cannon-shell]-b[explosive]",
    "stack_size": 100
  },
  {
    "type": "armor",
    "name": "heavy-armor",
    "icon": "__base__/graphics/icons/heavy-armor.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "resistances": [
      {
        "type": "physical",
        "decrease": 6,
        "percent": 30
      },
      {
        "type": "explosion",
        "decrease": 10,
        "percent": 30
      },
      {
        "type": "acid",
        "decrease": 5,
        "percent": 30
      },
      {
        "type": "fire",
        "decrease": 0,
        "percent": 40
      }
    ],
    "durability": 5000,
    "subgroup": "armor",
    "order": "b[heavy-armor]",
    "stack_size": 10
  },
  {
    "type": "armor",
    "name": "modular-armor",
    "icon": "__base__/graphics/icons/modular-armor.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "resistances": [
      {
        "type": "physical",
        "decrease": 6,
        "percent": 30
      },
      {
        "type": "acid",
        "decrease": 5,
        "percent": 30
      },
      {
        "type": "explosion",
        "decrease": 10,
        "percent": 30
      },
      {
        "type": "fire",
        "decrease": 0,
        "percent": 60
      }
    ],
    "durability": 10000,
    "subgroup": "armor",
    "order": "c[modular-armor]",
    "stack_size": 1,
    "equipment_grid": "small-equipment-grid",
    "inventory_size_bonus": 10
  },
  {
    "type": "armor",
    "name": "power-armor",
    "icon": "__base__/graphics/icons/power-armor.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "resistances": [
      {
        "type": "physical",
        "decrease": 8,
        "percent": 30
      },
      {
        "type": "acid",
        "decrease": 7,
        "percent": 30
      },
      {
        "type": "explosion",
        "decrease": 15,
        "percent": 30
      },
      {
        "type": "fire",
        "decrease": 0,
        "percent": 75
      }
    ],
    "durability": 15000,
    "subgroup": "armor",
    "order": "d[power-armor]",
    "stack_size": 1,
    "equipment_grid": "medium-equipment-grid",
    "inventory_size_bonus": 20
  },
  {
    "type": "armor",
    "name": "power-armor-mk2",
    "icon": "__base__/graphics/icons/power-armor-mk2.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "resistances": [
      {
        "type": "physical",
        "decrease": 10,
        "percent": 40
      },
      {
        "type": "acid",
        "decrease": 10,
        "percent": 40
      },
      {
        "type": "explosion",
        "decrease": 20,
        "percent": 50
      },
      {
        "type": "fire",
        "decrease": 0,
        "percent": 80
      }
    ],
    "durability": 20000,
    "subgroup": "armor",
    "order": "e[power-armor-mk2]",
    "stack_size": 1,
    "equipment_grid": "large-equipment-grid",
    "inventory_size_bonus": 30
  },
  {
    "type": "capsule",
    "name": "grenade",
    "icon": "__base__/graphics/icons/grenade.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "capsule_action": {
      "type": "throw",
      "attack_parameters": {
        "type": "projectile",
        "ammo_category": "grenade",
        "cooldown": 30,
        "projectile_creation_distance": 0.6,
        "range": 15,
        "ammo_type": {
          "category": "grenade",
          "target_type": "position",
          "action": {
            "type": "direct",
            "action_delivery": {
              "type": "projectile",
              "projectile": "grenade",
              "starting_speed": 0.3
            }
          }
        }
      }
    },
    "subgroup": "capsule",
    "order": "a[grenade]-a[normal]",
    "stack_size": 100
  },
  {
    "type": "capsule",
    "name": "cluster-grenade",
    "icon": "__base__/graphics/icons/cluster-grenade.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "capsule_action": {
      "type": "throw",
      "attack_parameters": {
        "type": "projectile",
        "ammo_category": "grenade",
        "cooldown": 30,
        "projectile_creation_distance": 0.6,
        "range": 20,
        "ammo_type": {
          "category": "grenade",
          "target_type": "position",
          "action": {
            "type": "direct",
            "action_delivery": {
              "type": "projectile",
              "projectile": "cluster-grenade",
              "starting_speed": 0.3
            }
          }
        }
      }
    },
    "subgroup": "capsule",
    "order": "a[grenade]-b[cluster]",
    "stack_size": 100
  },
  {
    "type": "capsule",
    "name": "poison-capsule",
    "icon": "__base__/graphics/icons/poison-capsule.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "capsule_action": {
      "type": "throw",
      "attack_parameters": {
        "type": "projectile",
        "ammo_category": "capsule",
        "cooldown": 30,
        "projectile_creation_distance": 0.6,
        "range": 25,
        "ammo_type": {
          "category": "capsule",
          "target_type": "position",
          "action": {
            "type": "direct",
            "action_delivery": {
              "type": "projectile",
              "projectile": "poison-capsule",
              "starting_speed": 0.3
            }
          }
        }
      }
    },
    "subgroup": "capsule",
    "order": "b[poison-capsule]",
    "stack_size": 100
  },
  {
    "type": "capsule",
    "name": "slowdown-capsule",
    "icon": "__base__/graphics/icons/slowdown-capsule.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "capsule_action": {
      "type": "throw",
      "attack_parameters": {
        "type": "projectile",
        "ammo_category": "capsule",
        "cooldown": 30,
        "projectile_creation_distance": 0.6,
        "range": 25,
        "ammo_type": {
          "category": "capsule",
          "target_type": "position",
          "action": {
            "type": "direct",
            "action_delivery": {
              "type": "projectile",
              "projectile": "slowdown-capsule",
              "starting_speed": 0.3
            }
          }
        }
      }
    },
    "subgroup": "capsule",
    "order": "c[slowdown-capsule]",
    "stack_size": 100
  },
  {
    "type": "capsule",
    "name": "defender-capsule",
    "icon": "__base__/graphics/icons/defender-capsule.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "capsule_action": {
      "type": "throw",
      "attack_parameters": {
        "type": "projectile",
        "ammo_category": "capsule",
        "cooldown": 15,
        "projectile_creation_distance": 0.6,
        "range": 20,
        "ammo_type": {
          "category": "capsule",
          "target_type": "position",
          "action": {
            "type": "direct",
            "action_delivery": {
              "type": "projectile",
              "projectile": "defender-capsule",
              "starting_speed": 0.3
            }
          }
        }
      }
    },
    "subgroup": "capsule",
    "order": "d[defender-capsule]",
    "stack_size": 100
  },
  {
    "type": "capsule",
    "name": "distractor-capsule",
    "icon": "__base__/graphics/icons/distractor-capsule.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "capsule_action": {
      "type": "throw",
      "attack_parameters": {
        "type": "projectile",
        "ammo_category": "capsule",
        "cooldown": 30,
        "projectile_creation_distance": 0.6,
        "range": 25,
        "ammo_type": {
          "category": "capsule",
          "target_type": "position",
          "action": {
            "type": "direct",
            "action_delivery": {
              "type": "projectile",
              "projectile": "distractor-capsule",
              "starting_speed": 0.3
            }
          }
        }
      }
    },
    "subgroup": "capsule",
    "order": "e[defender-capsule]",
    "stack_size": 100
  },
  {
    "type": "capsule",
    "name": "destroyer-capsule",
    "icon": "__base__/graphics/icons/destroyer-capsule.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "capsule_action": {
      "type": "throw",
      "attack_parameters": {
        "type": "projectile",
        "ammo_category": "capsule",
        "cooldown": 30,
        "projectile_creation_distance": 0.6,
        "range": 25,
        "ammo_type": {
          "category": "capsule",
          "target_type": "position",
          "action": {
            "type": "direct",
            "action_delivery": {
              "type": "projectile",
              "projectile": "destroyer-capsule",
              "starting_speed": 0.3
            }
          }
        }
      }
    },
    "subgroup": "capsule",
    "order": "f[destroyer-capsule]",
    "stack_size": 100
  },
  {
    "type": "capsule",
    "name": "discharge-defense-remote",
    "icon": "__base__/graphics/equipment/discharge-defense-equipment-ability.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "capsule_action": {
      "type": "equipment-remote",
      "equipment": "discharge-defense-equipment"
    },
    "subgroup": "capsule",
    "order": "z",
    "stack_size": 1
  },
  {
    "type": "ammo",
    "name": "firearm-magazine",
    "icon": "__base__/graphics/icons/firearm-magazine.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "ammo_type": {
      "category": "bullet",
      "action": [
        {
          "type": "direct",
          "action_delivery": [
            {
              "type": "instant",
              "source_effects": [
                {
                  "type": "create-explosion",
                  "entity_name": "explosion-gunshot"
                }
              ],
              "target_effects": [
                {
                  "type": "create-entity",
                  "entity_name": "explosion-hit"
                },
                {
                  "type": "damage",
                  "damage": {
                    "amount": 2,
                    "type": "physical"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "magazine_size": 10,
    "subgroup": "ammo",
    "order": "a[basic-clips]-a[firearm-magazine]",
    "stack_size": 100
  },
  {
    "type": "armor",
    "name": "light-armor",
    "icon": "__base__/graphics/icons/light-armor.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "resistances": [
      {
        "type": "physical",
        "decrease": 3,
        "percent": 20
      },
      {
        "type": "acid",
        "decrease": 3,
        "percent": 30
      },
      {
        "type": "explosion",
        "decrease": 2,
        "percent": 20
      },
      {
        "type": "fire",
        "decrease": 2,
        "percent": 10
      }
    ],
    "durability": 1000,
    "subgroup": "armor",
    "order": "a[light-armor]",
    "stack_size": 10
  },
  {
    "type": "gun",
    "name": "pistol",
    "icon": "__base__/graphics/icons/pistol.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "gun",
    "order": "a[basic-clips]-a[pistol]",
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "bullet",
      "cooldown": 10,
      "movement_slow_down_factor": 0.7,
      "shell_particle": {
        "name": "shell-particle",
        "direction_deviation": 0.1,
        "speed": 0.1,
        "speed_deviation": 0.03,
        "center": [
          0,
          0.1
        ],
        "starting_frame_speed": 0.4,
        "starting_frame_speed_deviation": 0.1
      },
      "projectile_creation_distance": 1.125,
      "range": 15
    },
    "stack_size": 5
  },
  {
    "type": "gun",
    "name": "submachine-gun",
    "icon": "__base__/graphics/icons/submachine-gun.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "gun",
    "order": "a[basic-clips]-b[submachine-gun]",
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "bullet",
      "cooldown": 4,
      "movement_slow_down_factor": 0.7,
      "shell_particle": {
        "name": "shell-particle",
        "direction_deviation": 0.1,
        "speed": 0.1,
        "speed_deviation": 0.03,
        "center": [
          0,
          0.1
        ],
        "starting_frame_speed": 0.4,
        "starting_frame_speed_deviation": 0.1
      },
      "projectile_creation_distance": 1.125,
      "range": 15
    },
    "stack_size": 1
  },
  {
    "type": "item-group",
    "name": "signals",
    "order": "f",
    "icon": "__base__/graphics/item-group/signals.png"
  },
  {
    "type": "item-subgroup",
    "name": "virtual-signal-special",
    "group": "signals",
    "order": "a"
  },
  {
    "type": "item-group",
    "name": "other",
    "icon": "__core__/graphics/questionmark.png",
    "order": "z"
  },
  {
    "type": "item-subgroup",
    "name": "other",
    "group": "other",
    "order": "z"
  },
  {
    "type": "item-subgroup",
    "name": "virtual-signal-color",
    "group": "signals",
    "order": "d"
  },
  {
    "type": "item-group",
    "name": "environment",
    "icon": "__core__/graphics/neutral-force-icon.png",
    "order": "a"
  },
  {
    "type": "item-subgroup",
    "name": "creatures",
    "group": "environment",
    "order": "a"
  },
  {
    "type": "item-subgroup",
    "name": "trees",
    "group": "environment",
    "order": "aa"
  },
  {
    "type": "item-subgroup",
    "name": "grass",
    "group": "environment",
    "order": "b"
  },
  {
    "type": "item-subgroup",
    "name": "corpses",
    "group": "environment",
    "order": "c"
  },
  {
    "type": "item-subgroup",
    "name": "remnants",
    "group": "environment",
    "order": "d"
  },
  {
    "type": "item-subgroup",
    "name": "wrecks",
    "group": "environment",
    "order": "e"
  },
  {
    "type": "item-group",
    "name": "enemies",
    "icon": "__core__/graphics/enemy-force-icon.png",
    "order": "aa"
  },
  {
    "type": "item-subgroup",
    "name": "enemies",
    "group": "enemies",
    "order": "a"
  },
  {
    "type": "item-group",
    "name": "logistics",
    "order": "aaa",
    "icon": "__base__/graphics/item-group/logistics.png"
  },
  {
    "type": "item-subgroup",
    "name": "storage",
    "group": "logistics",
    "order": "a"
  },
  {
    "type": "item-subgroup",
    "name": "belt",
    "group": "logistics",
    "order": "b"
  },
  {
    "type": "item-subgroup",
    "name": "inserter",
    "group": "logistics",
    "order": "c"
  },
  {
    "type": "item-subgroup",
    "name": "energy-pipe-distribution",
    "group": "logistics",
    "order": "d"
  },
  {
    "type": "item-subgroup",
    "name": "transport",
    "group": "logistics",
    "order": "e"
  },
  {
    "type": "item-subgroup",
    "name": "logistic-network",
    "group": "logistics",
    "order": "f"
  },
  {
    "type": "item-subgroup",
    "name": "circuit-network",
    "group": "logistics",
    "order": "g"
  },
  {
    "type": "item-subgroup",
    "name": "terrain",
    "group": "logistics",
    "order": "h"
  },
  {
    "type": "item-group",
    "name": "production",
    "order": "b",
    "icon": "__base__/graphics/item-group/production.png"
  },
  {
    "type": "item-subgroup",
    "name": "tool",
    "group": "production",
    "order": "a"
  },
  {
    "type": "item-subgroup",
    "name": "energy",
    "group": "production",
    "order": "b"
  },
  {
    "type": "item-subgroup",
    "name": "extraction-machine",
    "group": "production",
    "order": "c"
  },
  {
    "type": "item-subgroup",
    "name": "smelting-machine",
    "group": "production",
    "order": "d"
  },
  {
    "type": "item-subgroup",
    "name": "production-machine",
    "group": "production",
    "order": "e"
  },
  {
    "type": "item-subgroup",
    "name": "module",
    "group": "production",
    "order": "f"
  },
  {
    "type": "item-group",
    "name": "combat",
    "order": "d",
    "icon": "__base__/graphics/item-group/military.png"
  },
  {
    "type": "item-subgroup",
    "name": "gun",
    "group": "combat",
    "order": "a"
  },
  {
    "type": "item-subgroup",
    "name": "ammo",
    "group": "combat",
    "order": "b"
  },
  {
    "type": "item-subgroup",
    "name": "capsule",
    "group": "combat",
    "order": "c"
  },
  {
    "type": "item-subgroup",
    "name": "armor",
    "group": "combat",
    "order": "d"
  },
  {
    "type": "item-subgroup",
    "name": "equipment",
    "group": "combat",
    "order": "e"
  },
  {
    "type": "item-subgroup",
    "name": "defensive-structure",
    "group": "combat",
    "order": "f"
  },
  {
    "type": "item-group",
    "name": "intermediate-products",
    "order": "c",
    "icon": "__base__/graphics/item-group/intermediate-products.png"
  },
  {
    "type": "item-subgroup",
    "name": "fluid-recipes",
    "group": "intermediate-products",
    "order": "a"
  },
  {
    "type": "item-subgroup",
    "name": "raw-resource",
    "group": "intermediate-products",
    "order": "b"
  },
  {
    "type": "item-subgroup",
    "name": "raw-material",
    "group": "intermediate-products",
    "order": "c"
  },
  {
    "type": "item-subgroup",
    "name": "barrel",
    "group": "intermediate-products",
    "order": "d"
  },
  {
    "type": "item-subgroup",
    "name": "intermediate-product",
    "group": "intermediate-products",
    "order": "e"
  },
  {
    "type": "item-subgroup",
    "name": "science-pack",
    "group": "intermediate-products",
    "order": "f"
  },
  {
    "type": "item-group",
    "name": "fluids",
    "order": "e",
    "icon": "__base__/graphics/item-group/fluids.png"
  },
  {
    "type": "item-subgroup",
    "name": "fluid",
    "group": "fluids",
    "order": "a"
  },
  {
    "type": "item-subgroup",
    "name": "virtual-signal-number",
    "group": "signals",
    "order": "b"
  },
  {
    "type": "item-subgroup",
    "name": "virtual-signal-letter",
    "group": "signals",
    "order": "c"
  },
  {
    "type": "item-subgroup",
    "name": "virtual-signal",
    "group": "signals",
    "order": "e"
  },
  {
    "type": "item",
    "name": "stone-brick",
    "icon": "__base__/graphics/icons/stone-brick.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "terrain",
    "order": "a[stone-brick]",
    "stack_size": 100,
    "place_as_tile": {
      "result": "stone-path",
      "condition_size": 4,
      "condition": [
        "water-tile"
      ]
    }
  },
  {
    "type": "item",
    "name": "raw-wood",
    "icon": "__base__/graphics/icons/raw-wood.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "fuel_value": "4MJ",
    "subgroup": "raw-material",
    "order": "a[raw-wood]",
    "stack_size": 100
  },
  {
    "type": "item",
    "name": "coal",
    "icon": "__base__/graphics/icons/coal.png",
    "dark_background_icon": "__base__/graphics/icons/coal-dark-background.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "fuel_value": "8MJ",
    "subgroup": "raw-material",
    "order": "b[coal]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "stone",
    "icon": "__base__/graphics/icons/stone.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "raw-resource",
    "order": "d[stone]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "iron-ore",
    "icon": "__base__/graphics/icons/iron-ore.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "raw-resource",
    "order": "e[iron-ore]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "copper-ore",
    "icon": "__base__/graphics/icons/copper-ore.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "raw-resource",
    "order": "f[copper-ore]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "wood",
    "icon": "__base__/graphics/icons/wood.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "fuel_value": "2MJ",
    "subgroup": "raw-material",
    "order": "a[wood]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "iron-plate",
    "icon": "__base__/graphics/icons/iron-plate.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "raw-material",
    "order": "b[iron-plate]",
    "stack_size": 100
  },
  {
    "type": "item",
    "name": "copper-plate",
    "icon": "__base__/graphics/icons/copper-plate.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "raw-material",
    "order": "c[copper-plate]",
    "stack_size": 100
  },
  {
    "type": "item",
    "name": "copper-cable",
    "icon": "__base__/graphics/icons/copper-cable.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "a[copper-cable]",
    "stack_size": 200
  },
  {
    "type": "item",
    "name": "iron-stick",
    "icon": "__base__/graphics/icons/iron-stick.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "b[iron-stick]",
    "stack_size": 100
  },
  {
    "type": "item",
    "name": "iron-gear-wheel",
    "icon": "__base__/graphics/icons/iron-gear-wheel.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "c[iron-gear-wheel]",
    "stack_size": 100
  },
  {
    "type": "item",
    "name": "electronic-circuit",
    "icon": "__base__/graphics/icons/electronic-circuit.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "d[electronic-circuit]",
    "stack_size": 200
  },
  {
    "type": "item",
    "name": "wooden-chest",
    "icon": "__base__/graphics/icons/wooden-chest.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "fuel_value": "4MJ",
    "subgroup": "storage",
    "order": "a[items]-a[wooden-chest]",
    "place_result": "wooden-chest",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "stone-furnace",
    "icon": "__base__/graphics/icons/stone-furnace.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "smelting-machine",
    "order": "a[stone-furnace]",
    "place_result": "stone-furnace",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "burner-mining-drill",
    "icon": "__base__/graphics/icons/burner-mining-drill.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "extraction-machine",
    "order": "a[items]-a[burner-mining-drill]",
    "place_result": "burner-mining-drill",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "electric-mining-drill",
    "icon": "__base__/graphics/icons/electric-mining-drill.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "extraction-machine",
    "order": "a[items]-b[electric-mining-drill]",
    "place_result": "electric-mining-drill",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "transport-belt",
    "icon": "__base__/graphics/icons/transport-belt.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "belt",
    "order": "a[transport-belt]-a[transport-belt]",
    "place_result": "transport-belt",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "burner-inserter",
    "icon": "__base__/graphics/icons/burner-inserter.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "inserter",
    "order": "a[burner-inserter]",
    "place_result": "burner-inserter",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "inserter",
    "icon": "__base__/graphics/icons/inserter.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "inserter",
    "order": "b[inserter]",
    "place_result": "inserter",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "offshore-pump",
    "icon": "__base__/graphics/icons/offshore-pump.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "extraction-machine",
    "order": "b[fluids]-a[offshore-pump]",
    "place_result": "offshore-pump",
    "stack_size": 20
  },
  {
    "type": "item",
    "name": "pipe",
    "icon": "__base__/graphics/icons/pipe.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "energy-pipe-distribution",
    "order": "a[pipe]-a[pipe]",
    "place_result": "pipe",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "boiler",
    "icon": "__base__/graphics/icons/boiler.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "energy",
    "order": "b[steam-power]-a[boiler]",
    "place_result": "boiler",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "steam-engine",
    "icon": "__base__/graphics/icons/steam-engine.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "energy",
    "order": "b[steam-power]-b[steam-engine]",
    "place_result": "steam-engine",
    "stack_size": 10
  },
  {
    "type": "item",
    "name": "small-electric-pole",
    "icon": "__base__/graphics/icons/small-electric-pole.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "energy-pipe-distribution",
    "order": "a[energy]-a[small-electric-pole]",
    "place_result": "small-electric-pole",
    "fuel_value": "4MJ",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "radar",
    "icon": "__base__/graphics/icons/radar.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "defensive-structure",
    "order": "d[radar]-a[radar]",
    "place_result": "radar",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "computer",
    "icon": "__base__/graphics/icons/computer.png",
    "flags": [
      "goes-to-quickbar",
      "hidden"
    ],
    "subgroup": "defensive-structure",
    "order": "g[computer]",
    "stack_size": 1
  },
  {
    "type": "item",
    "name": "small-plane",
    "icon": "__base__/graphics/icons/small-plane.png",
    "flags": [
      "goes-to-quickbar",
      "hidden"
    ],
    "subgroup": "defensive-structure",
    "order": "h[small-plane]",
    "stack_size": 1
  },
  {
    "type": "item",
    "name": "small-lamp",
    "icon": "__base__/graphics/icons/small-lamp.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "energy",
    "order": "c[light]-a[small-lamp]",
    "place_result": "small-lamp",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "alien-artifact",
    "icon": "__base__/graphics/icons/alien-artifact.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "raw-material",
    "order": "g[alien-artifact]",
    "stack_size": 500,
    "default_request_amount": 10
  },
  {
    "type": "item",
    "name": "pipe-to-ground",
    "icon": "__base__/graphics/icons/pipe-to-ground.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "energy-pipe-distribution",
    "order": "a[pipe]-b[pipe-to-ground]",
    "place_result": "pipe-to-ground",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "assembling-machine-1",
    "icon": "__base__/graphics/icons/assembling-machine-1.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "production-machine",
    "order": "a[assembling-machine-1]",
    "place_result": "assembling-machine-1",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "red-wire",
    "icon": "__base__/graphics/icons/red-wire.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "circuit-network",
    "order": "a[wires]-b[red-wire]",
    "stack_size": 200
  },
  {
    "type": "item",
    "name": "green-wire",
    "icon": "__base__/graphics/icons/green-wire.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "circuit-network",
    "order": "a[wires]-c[green-wire]",
    "stack_size": 200
  },
  {
    "type": "capsule",
    "name": "raw-fish",
    "icon": "__base__/graphics/icons/fish.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "raw-resource",
    "capsule_action": {
      "type": "use-on-self",
      "attack_parameters": {
        "type": "projectile",
        "ammo_category": "capsule",
        "cooldown": 30,
        "range": 0,
        "ammo_type": {
          "category": "capsule",
          "target_type": "position",
          "action": {
            "type": "direct",
            "action_delivery": {
              "type": "instant",
              "target_effects": {
                "type": "damage",
                "damage": {
                  "type": "physical"
                }
              }
            }
          }
        }
      }
    },
    "order": "f-e-a",
    "stack_size": 100
  },
  {
    "type": "repair-tool",
    "name": "repair-pack",
    "icon": "__base__/graphics/icons/repair-pack.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "tool",
    "order": "b[repair]-a[repair-pack]",
    "speed": 1,
    "durability": 200,
    "stack_size": 100
  },
  {
    "type": "item",
    "name": "stone-wall",
    "icon": "__base__/graphics/icons/stone-wall.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "defensive-structure",
    "order": "a[stone-wall]-a[stone-wall]",
    "place_result": "stone-wall",
    "stack_size": 50
  },
  {
    "type": "mining-tool",
    "name": "iron-axe",
    "icon": "__base__/graphics/icons/iron-axe.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": {
          "type": "damage",
          "damage": {
            "amount": 5,
            "type": "physical"
          }
        }
      }
    },
    "durability": 4000,
    "subgroup": "tool",
    "order": "a[mining]-a[iron-axe]",
    "speed": 2.5,
    "stack_size": 20
  },
  {
    "type": "item",
    "name": "gun-turret",
    "icon": "__base__/graphics/icons/gun-turret.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "defensive-structure",
    "order": "b[turret]-a[gun-turret]",
    "place_result": "gun-turret",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "solar-panel-equipment",
    "icon": "__base__/graphics/icons/solar-panel-equipment.png",
    "placed_as_equipment_result": "solar-panel-equipment",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "equipment",
    "order": "a[energy-source]-a[solar-panel]",
    "stack_size": 20
  },
  {
    "type": "item",
    "name": "fusion-reactor-equipment",
    "icon": "__base__/graphics/icons/fusion-reactor-equipment.png",
    "placed_as_equipment_result": "fusion-reactor-equipment",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "equipment",
    "order": "a[energy-source]-b[fusion-reactor]",
    "stack_size": 20
  },
  {
    "type": "item",
    "name": "energy-shield-equipment",
    "icon": "__base__/graphics/icons/energy-shield-equipment.png",
    "placed_as_equipment_result": "energy-shield-equipment",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "equipment",
    "order": "b[shield]-a[energy-shield-equipment]",
    "stack_size": 50,
    "default_request_amount": 10
  },
  {
    "type": "item",
    "name": "energy-shield-mk2-equipment",
    "icon": "__base__/graphics/icons/energy-shield-mk2-equipment.png",
    "placed_as_equipment_result": "energy-shield-mk2-equipment",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "equipment",
    "order": "b[shield]-b[energy-shield-equipment-mk2]",
    "stack_size": 50,
    "default_request_amount": 10
  },
  {
    "type": "item",
    "name": "battery-equipment",
    "icon": "__base__/graphics/icons/battery-equipment.png",
    "placed_as_equipment_result": "battery-equipment",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "equipment",
    "order": "c[battery]-a[battery-equipment]",
    "stack_size": 50,
    "default_request_amount": 10
  },
  {
    "type": "item",
    "name": "battery-mk2-equipment",
    "icon": "__base__/graphics/icons/battery-mk2-equipment.png",
    "placed_as_equipment_result": "battery-mk2-equipment",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "equipment",
    "order": "c[battery]-b[battery-equipment-mk2]",
    "stack_size": 50,
    "default_request_amount": 10
  },
  {
    "type": "item",
    "name": "personal-laser-defense-equipment",
    "icon": "__base__/graphics/icons/personal-laser-defense-equipment.png",
    "placed_as_equipment_result": "personal-laser-defense-equipment",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "equipment",
    "order": "d[active-defense]-a[personal-laser-defense-equipment]",
    "stack_size": 20
  },
  {
    "type": "item",
    "name": "discharge-defense-equipment",
    "icon": "__base__/graphics/icons/discharge-defense-equipment.png",
    "placed_as_equipment_result": "discharge-defense-equipment",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "equipment",
    "order": "d[active-defense]-b[discharge-defense-equipment]",
    "stack_size": 20
  },
  {
    "type": "item",
    "name": "exoskeleton-equipment",
    "icon": "__base__/graphics/icons/exoskeleton-equipment.png",
    "placed_as_equipment_result": "exoskeleton-equipment",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "equipment",
    "order": "e[exoskeleton]-a[exoskeleton-equipment]",
    "stack_size": 10
  },
  {
    "type": "item",
    "name": "personal-roboport-equipment",
    "icon": "__base__/graphics/icons/personal-roboport-equipment.png",
    "placed_as_equipment_result": "personal-roboport-equipment",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "equipment",
    "order": "e[robotics]-a[personal-roboport-equipment]",
    "stack_size": 5
  },
  {
    "type": "item",
    "name": "night-vision-equipment",
    "icon": "__base__/graphics/icons/night-vision-equipment.png",
    "placed_as_equipment_result": "night-vision-equipment",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "equipment",
    "order": "f[night-vision]-a[night-vision-equipment]",
    "stack_size": 20
  },
  {
    "type": "gun",
    "name": "flame-thrower",
    "icon": "__base__/graphics/icons/flame-thrower.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "gun",
    "order": "e[flame-thrower]",
    "attack_parameters": {
      "type": "stream",
      "ammo_category": "flame-thrower",
      "cooldown": 1,
      "movement_slow_down_factor": 0.6,
      "projectile_creation_distance": 0.6,
      "gun_barrel_length": 0.8,
      "gun_center_shift": [
        0,
        null
      ],
      "range": 15,
      "min_range": 1,
      "cyclic_sound": {
        "begin_sound": [
          {
            "filename": "__base__/sound/fight/flamethrower-start.ogg",
            "volume": 0.7
          }
        ],
        "middle_sound": [
          {
            "filename": "__base__/sound/fight/flamethrower-mid.ogg",
            "volume": 0.7
          }
        ],
        "end_sound": [
          {
            "filename": "__base__/sound/fight/flamethrower-end.ogg",
            "volume": 0.7
          }
        ]
      }
    },
    "stack_size": 5
  },
  {
    "type": "gun",
    "name": "vehicle-machine-gun",
    "icon": "__base__/graphics/icons/submachine-gun.png",
    "flags": [
      "goes-to-main-inventory",
      "hidden"
    ],
    "subgroup": "gun",
    "order": "a[basic-clips]-b[vehicle-machine-gun]",
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "bullet",
      "cooldown": 4,
      "movement_slow_down_factor": 0.7,
      "shell_particle": {
        "name": "shell-particle",
        "direction_deviation": 0.1,
        "speed": 0.1,
        "speed_deviation": 0.03,
        "center": [
          0,
          0
        ],
        "starting_frame_speed": 0.4,
        "starting_frame_speed_deviation": 0.1
      },
      "projectile_creation_distance": 0.65,
      "range": 20
    },
    "stack_size": 1
  },
  {
    "type": "gun",
    "name": "tank-machine-gun",
    "icon": "__base__/graphics/icons/submachine-gun.png",
    "flags": [
      "goes-to-main-inventory",
      "hidden"
    ],
    "subgroup": "gun",
    "order": "a[basic-clips]-b[tank-machine-gun]",
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "bullet",
      "cooldown": 4,
      "movement_slow_down_factor": 0.7,
      "shell_particle": {
        "name": "shell-particle",
        "direction_deviation": 0.1,
        "speed": 0.1,
        "speed_deviation": 0.03,
        "center": [
          0,
          0
        ],
        "starting_frame_speed": 0.4,
        "starting_frame_speed_deviation": 0.1
      },
      "projectile_center": [
        null,
        null
      ],
      "projectile_creation_distance": 1,
      "range": 20
    },
    "stack_size": 1
  },
  {
    "type": "item",
    "name": "land-mine",
    "icon": "__base__/graphics/icons/land-mine.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "damage_radius": 5,
    "subgroup": "gun",
    "order": "f[land-mine]",
    "place_result": "land-mine",
    "stack_size": 20,
    "trigger_radius": 1
  },
  {
    "type": "gun",
    "name": "rocket-launcher",
    "icon": "__base__/graphics/icons/rocket-launcher.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "gun",
    "order": "d[rocket-launcher]",
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "rocket",
      "movement_slow_down_factor": 0.8,
      "cooldown": 60,
      "projectile_creation_distance": 0.6,
      "range": 22,
      "projectile_center": [
        null,
        0
      ],
      "sound": [
        {
          "filename": "__base__/sound/fight/rocket-launcher.ogg",
          "volume": 0.7
        }
      ]
    },
    "stack_size": 5
  },
  {
    "type": "gun",
    "name": "shotgun",
    "icon": "__base__/graphics/icons/shotgun.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "gun",
    "order": "b[shotgun]-a[basic]",
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "shotgun-shell",
      "cooldown": 60,
      "movement_slow_down_factor": 0.6,
      "projectile_creation_distance": 1.125,
      "range": 20,
      "sound": [
        {
          "filename": "__base__/sound/pump-shotgun.ogg",
          "volume": 0.5
        }
      ]
    },
    "stack_size": 5
  },
  {
    "type": "gun",
    "name": "combat-shotgun",
    "icon": "__base__/graphics/icons/combat-shotgun.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "gun",
    "order": "b[shotgun]-a[combat]",
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "shotgun-shell",
      "cooldown": 30,
      "movement_slow_down_factor": 0.5,
      "damage_modifier": 1.2,
      "projectile_creation_distance": 1.125,
      "range": 20,
      "sound": [
        {
          "filename": "__base__/sound/pump-shotgun.ogg",
          "volume": 0.5
        }
      ]
    },
    "stack_size": 5
  },
  {
    "type": "gun",
    "name": "railgun",
    "icon": "__base__/graphics/icons/railgun.png",
    "flags": [
      "goes-to-main-inventory",
      "hidden"
    ],
    "subgroup": "gun",
    "order": "c[railgun]",
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "railgun",
      "movement_slow_down_factor": 0.6,
      "projectile_creation_distance": 0.6,
      "range": 20,
      "sound": [
        {
          "filename": "__base__/sound/railgun.ogg",
          "volume": 0.8
        }
      ]
    },
    "stack_size": 5
  },
  {
    "type": "gun",
    "name": "tank-cannon",
    "icon": "__base__/graphics/icons/tank-cannon.png",
    "flags": [
      "goes-to-main-inventory",
      "hidden"
    ],
    "subgroup": "gun",
    "order": "z[tank]-a[cannon]",
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "cannon-shell",
      "cooldown": 90,
      "movement_slow_down_factor": 0,
      "projectile_creation_distance": 1.6,
      "projectile_center": [
        null,
        null
      ],
      "range": 25,
      "sound": [
        {
          "filename": "__base__/sound/fight/tank-cannon.ogg",
          "volume": 1
        }
      ]
    },
    "stack_size": 5
  },
  {
    "type": "item",
    "name": "iron-chest",
    "icon": "__base__/graphics/icons/iron-chest.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "storage",
    "order": "a[items]-b[iron-chest]",
    "place_result": "iron-chest",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "steel-chest",
    "icon": "__base__/graphics/icons/steel-chest.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "storage",
    "order": "a[items]-c[steel-chest]",
    "place_result": "steel-chest",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "fast-transport-belt",
    "icon": "__base__/graphics/icons/fast-transport-belt.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "belt",
    "order": "a[transport-belt]-b[fast-transport-belt]",
    "place_result": "fast-transport-belt",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "express-transport-belt",
    "icon": "__base__/graphics/icons/express-transport-belt.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "belt",
    "order": "a[transport-belt]-c[express-transport-belt]",
    "place_result": "express-transport-belt",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "long-handed-inserter",
    "icon": "__base__/graphics/icons/long-handed-inserter.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "inserter",
    "order": "c[long-handed-inserter]",
    "place_result": "long-handed-inserter",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "fast-inserter",
    "icon": "__base__/graphics/icons/fast-inserter.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "inserter",
    "order": "d[fast-inserter]",
    "place_result": "fast-inserter",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "filter-inserter",
    "icon": "__base__/graphics/icons/filter-inserter.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "inserter",
    "order": "e[filter-inserter]",
    "place_result": "filter-inserter",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "stack-inserter",
    "icon": "__base__/graphics/icons/stack-inserter.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "inserter",
    "order": "f[stack-inserter]",
    "place_result": "stack-inserter",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "stack-filter-inserter",
    "icon": "__base__/graphics/icons/stack-filter-inserter.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "inserter",
    "order": "g[stack-filter-inserter]",
    "place_result": "stack-filter-inserter",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "assembling-machine-2",
    "icon": "__base__/graphics/icons/assembling-machine-2.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "production-machine",
    "order": "b[assembling-machine-2]",
    "place_result": "assembling-machine-2",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "assembling-machine-3",
    "icon": "__base__/graphics/icons/assembling-machine-3.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "production-machine",
    "order": "c[assembling-machine-3]",
    "place_result": "assembling-machine-3",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "solar-panel",
    "icon": "__base__/graphics/icons/solar-panel.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "energy",
    "order": "d[solar-panel]-a[solar-panel]",
    "place_result": "solar-panel",
    "stack_size": 50
  },
  {
    "type": "item-with-entity-data",
    "name": "diesel-locomotive",
    "icon": "__base__/graphics/icons/diesel-locomotive.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "transport",
    "order": "a[train-system]-f[diesel-locomotive]",
    "place_result": "diesel-locomotive",
    "stack_size": 5
  },
  {
    "type": "item-with-entity-data",
    "name": "cargo-wagon",
    "icon": "__base__/graphics/icons/cargo-wagon.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "transport",
    "order": "a[train-system]-g[cargo-wagon]",
    "place_result": "cargo-wagon",
    "stack_size": 5
  },
  {
    "type": "rail-planner",
    "name": "rail",
    "icon": "__base__/graphics/icons/rail.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "transport",
    "order": "a[train-system]-a[rail]",
    "place_result": "straight-rail",
    "stack_size": 100,
    "straight_rail": "straight-rail",
    "curved_rail": "curved-rail"
  },
  {
    "type": "item",
    "name": "player-port",
    "icon": "__base__/graphics/icons/player-port.png",
    "flags": [
      "goes-to-quickbar",
      "hidden"
    ],
    "subgroup": "defensive-structure",
    "order": "z[not-used]",
    "place_result": "player-port",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "gate",
    "icon": "__base__/graphics/icons/gate.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "defensive-structure",
    "order": "a[wall]-b[gate]",
    "place_result": "gate",
    "stack_size": 50
  },
  {
    "type": "item-with-entity-data",
    "name": "car",
    "icon": "__base__/graphics/icons/car.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "transport",
    "order": "b[personal-transport]-a[car]",
    "place_result": "car",
    "stack_size": 1
  },
  {
    "type": "item-with-entity-data",
    "name": "tank",
    "icon": "__base__/graphics/icons/tank.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "transport",
    "order": "b[personal-transport]-b[tank]",
    "place_result": "tank",
    "stack_size": 1
  },
  {
    "type": "tool",
    "name": "science-pack-1",
    "icon": "__base__/graphics/icons/science-pack-1.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "science-pack",
    "order": "a[science-pack-1]",
    "stack_size": 200,
    "durability": 1,
    "durability_description_key": "description.science-pack-remaining-amount"
  },
  {
    "type": "tool",
    "name": "science-pack-2",
    "icon": "__base__/graphics/icons/science-pack-2.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "science-pack",
    "order": "a[science-pack-2]",
    "stack_size": 200,
    "durability": 1,
    "durability_description_key": "description.science-pack-remaining-amount"
  },
  {
    "type": "tool",
    "name": "science-pack-3",
    "icon": "__base__/graphics/icons/science-pack-3.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "science-pack",
    "order": "a[science-pack-3]",
    "stack_size": 200,
    "durability": 1,
    "durability_description_key": "description.science-pack-remaining-amount"
  },
  {
    "type": "tool",
    "name": "alien-science-pack",
    "icon": "__base__/graphics/icons/alien-science-pack.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "science-pack",
    "order": "d[alien-science-pack]",
    "stack_size": 200,
    "durability": 1,
    "durability_description_key": "description.science-pack-remaining-amount"
  },
  {
    "type": "item",
    "name": "lab",
    "icon": "__base__/graphics/icons/lab.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "production-machine",
    "order": "g[lab]",
    "place_result": "lab",
    "stack_size": 10
  },
  {
    "type": "item",
    "name": "train-stop",
    "icon": "__base__/graphics/icons/train-stop.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "transport",
    "order": "a[train-system]-c[train-stop]",
    "place_result": "train-stop",
    "stack_size": 10
  },
  {
    "type": "item",
    "name": "rail-signal",
    "icon": "__base__/graphics/icons/rail-signal.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "transport",
    "order": "a[train-system]-d[rail-signal]",
    "place_result": "rail-signal",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "rail-chain-signal",
    "icon": "__base__/graphics/icons/rail-chain-signal.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "transport",
    "order": "a[train-system]-e[rail-signal-chain]",
    "place_result": "rail-chain-signal",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "steel-plate",
    "icon": "__base__/graphics/icons/steel-plate.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "raw-material",
    "order": "d[steel-plate]",
    "stack_size": 100
  },
  {
    "type": "item",
    "name": "underground-belt",
    "icon": "__base__/graphics/icons/underground-belt.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "belt",
    "order": "b[underground-belt]-a[underground-belt]",
    "place_result": "underground-belt",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "fast-underground-belt",
    "icon": "__base__/graphics/icons/fast-underground-belt.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "belt",
    "order": "b[underground-belt]-b[fast-underground-belt]",
    "place_result": "fast-underground-belt",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "express-underground-belt",
    "icon": "__base__/graphics/icons/express-underground-belt.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "belt",
    "order": "b[underground-belt]-c[express-underground-belt]",
    "place_result": "express-underground-belt",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "splitter",
    "icon": "__base__/graphics/icons/splitter.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "belt",
    "order": "c[splitter]-a[splitter]",
    "place_result": "splitter",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "fast-splitter",
    "icon": "__base__/graphics/icons/fast-splitter.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "belt",
    "order": "c[splitter]-b[fast-splitter]",
    "place_result": "fast-splitter",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "express-splitter",
    "icon": "__base__/graphics/icons/express-splitter.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "belt",
    "order": "c[splitter]-c[express-splitter]",
    "place_result": "express-splitter",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "loader",
    "icon": "__base__/graphics/icons/loader.png",
    "flags": [
      "goes-to-quickbar",
      "hidden"
    ],
    "subgroup": "belt",
    "order": "d[loader]-a[basic-loader]",
    "place_result": "loader",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "fast-loader",
    "icon": "__base__/graphics/icons/fast-loader.png",
    "flags": [
      "goes-to-quickbar",
      "hidden"
    ],
    "subgroup": "belt",
    "order": "d[loader]-b[fast-loader]",
    "place_result": "fast-loader",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "express-loader",
    "icon": "__base__/graphics/icons/express-loader.png",
    "flags": [
      "goes-to-quickbar",
      "hidden"
    ],
    "subgroup": "belt",
    "order": "d[loader]-c[express-loader]",
    "place_result": "express-loader",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "advanced-circuit",
    "icon": "__base__/graphics/icons/advanced-circuit.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "e[advanced-circuit]",
    "stack_size": 200
  },
  {
    "type": "item",
    "name": "processing-unit",
    "icon": "__base__/graphics/icons/processing-unit.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "f[processing-unit]",
    "stack_size": 100
  },
  {
    "type": "item",
    "name": "logistic-robot",
    "icon": "__base__/graphics/icons/logistic-robot.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "logistic-network",
    "order": "a[robot]-a[logistic-robot]",
    "place_result": "logistic-robot",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "construction-robot",
    "icon": "__base__/graphics/icons/construction-robot.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "logistic-network",
    "order": "a[robot]-b[construction-robot]",
    "place_result": "construction-robot",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "logistic-chest-passive-provider",
    "icon": "__base__/graphics/icons/logistic-chest-passive-provider.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "logistic-network",
    "order": "b[storage]-c[logistic-chest-passive-provider]",
    "place_result": "logistic-chest-passive-provider",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "logistic-chest-active-provider",
    "icon": "__base__/graphics/icons/logistic-chest-active-provider.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "logistic-network",
    "order": "b[storage]-c[logistic-chest-active-provider]",
    "place_result": "logistic-chest-active-provider",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "logistic-chest-storage",
    "icon": "__base__/graphics/icons/logistic-chest-storage.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "logistic-network",
    "order": "b[storage]-c[logistic-chest-storage]",
    "place_result": "logistic-chest-storage",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "logistic-chest-requester",
    "icon": "__base__/graphics/icons/logistic-chest-requester.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "logistic-network",
    "order": "b[storage]-c[logistic-chest-requester]",
    "place_result": "logistic-chest-requester",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "rocket-silo",
    "icon": "__base__/graphics/icons/rocket-silo.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "defensive-structure",
    "order": "e[rocket-silo]",
    "place_result": "rocket-silo",
    "stack_size": 1
  },
  {
    "type": "item",
    "name": "roboport",
    "icon": "__base__/graphics/icons/roboport.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "logistic-network",
    "order": "c[signal]-a[roboport]",
    "place_result": "roboport",
    "stack_size": 5
  },
  {
    "type": "item",
    "name": "coin",
    "icon": "__base__/graphics/icons/coin.png",
    "flags": [
      "goes-to-quickbar",
      "hidden"
    ],
    "subgroup": "science-pack",
    "order": "y",
    "stack_size": 100000
  },
  {
    "type": "item",
    "name": "big-electric-pole",
    "icon": "__base__/graphics/icons/big-electric-pole.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "energy-pipe-distribution",
    "order": "a[energy]-c[big-electric-pole]",
    "place_result": "big-electric-pole",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "medium-electric-pole",
    "icon": "__base__/graphics/icons/medium-electric-pole.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "energy-pipe-distribution",
    "order": "a[energy]-b[medium-electric-pole]",
    "place_result": "medium-electric-pole",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "substation",
    "icon": "__base__/graphics/icons/substation.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "energy-pipe-distribution",
    "order": "a[energy]-d[substation]",
    "place_result": "substation",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "accumulator",
    "icon": "__base__/graphics/icons/accumulator.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "energy",
    "order": "e[accumulator]-a[accumulator]",
    "place_result": "accumulator",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "steel-furnace",
    "icon": "__base__/graphics/icons/steel-furnace.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "smelting-machine",
    "order": "b[steel-furnace]",
    "place_result": "steel-furnace",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "electric-furnace",
    "icon": "__base__/graphics/icons/electric-furnace.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "smelting-machine",
    "order": "c[electric-furnace]",
    "place_result": "electric-furnace",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "beacon",
    "icon": "__base__/graphics/icons/beacon.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "module",
    "order": "a[beacon]",
    "place_result": "beacon",
    "stack_size": 10
  },
  {
    "type": "item",
    "name": "storage-tank",
    "icon": "__base__/graphics/icons/storage-tank.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "storage",
    "order": "b[fluid]-a[storage-tank]",
    "place_result": "storage-tank",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "small-pump",
    "icon": "__base__/graphics/icons/small-pump.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "energy-pipe-distribution",
    "order": "b[pipe]-c[small-pump]",
    "place_result": "small-pump",
    "stack_size": 50
  },
  {
    "type": "blueprint",
    "name": "blueprint",
    "icon": "__base__/graphics/icons/blueprint.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "tool",
    "order": "c[automated-construction]-a[blueprint]",
    "stack_size": 1,
    "stackable": false,
    "draw_label_for_cursor_render": true,
    "item_to_clear": "electronic-circuit",
    "selection_color": {
      "r": 0,
      "g": 1,
      "b": 0
    },
    "alt_selection_color": {
      "r": 0,
      "g": 1,
      "b": 0
    },
    "selection_mode": [
      "blueprint"
    ],
    "alt_selection_mode": [
      "blueprint"
    ],
    "selection_cursor_box_type": "copy",
    "alt_selection_cursor_box_type": "copy"
  },
  {
    "type": "deconstruction-item",
    "name": "deconstruction-planner",
    "icon": "__base__/graphics/icons/deconstruction-planner.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "tool",
    "order": "c[automated-construction]-b[deconstruction-planner]",
    "stack_size": 1,
    "selection_color": {
      "r": 1,
      "g": 0,
      "b": 0
    },
    "alt_selection_color": {
      "r": 0,
      "g": 0,
      "b": 1
    },
    "selection_mode": [
      "deconstruct"
    ],
    "alt_selection_mode": [
      "cancel-deconstruct"
    ],
    "selection_cursor_box_type": "not-allowed",
    "alt_selection_cursor_box_type": "not-allowed"
  },
  {
    "type": "blueprint-book",
    "name": "blueprint-book",
    "icon": "__base__/graphics/icons/blueprint-book.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "tool",
    "order": "c[automated-construction]-c[blueprint-book]",
    "stack_size": 1,
    "inventory_size": 30
  },
  {
    "type": "item",
    "name": "pumpjack",
    "icon": "__base__/graphics/icons/pumpjack.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "extraction-machine",
    "order": "b[fluids]-b[pumpjack]",
    "place_result": "pumpjack",
    "stack_size": 20
  },
  {
    "type": "item",
    "name": "oil-refinery",
    "icon": "__base__/graphics/icons/oil-refinery.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "production-machine",
    "order": "d[refinery]",
    "place_result": "oil-refinery",
    "stack_size": 10
  },
  {
    "type": "item",
    "name": "chemical-plant",
    "icon": "__base__/graphics/icons/chemical-plant.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "production-machine",
    "order": "e[chemical-plant]",
    "place_result": "chemical-plant",
    "stack_size": 10
  },
  {
    "type": "item",
    "name": "sulfur",
    "icon": "__base__/graphics/icons/sulfur.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "raw-material",
    "order": "f[sulfur]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "empty-barrel",
    "icon": "__base__/graphics/icons/fluid/empty-barrel.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "barrel",
    "order": "a[empty-barrel]",
    "stack_size": 10
  },
  {
    "type": "item",
    "name": "crude-oil-barrel",
    "icon": "__base__/graphics/icons/fluid/crude-oil-barrel.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "barrel",
    "order": "b[crude-oil-barrel]",
    "stack_size": 10
  },
  {
    "type": "item",
    "name": "solid-fuel",
    "icon": "__base__/graphics/icons/solid-fuel.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "fuel_value": "25MJ",
    "subgroup": "raw-resource",
    "order": "c[solid-fuel]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "plastic-bar",
    "icon": "__base__/graphics/icons/plastic-bar.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "raw-material",
    "order": "g[plastic-bar]",
    "stack_size": 100
  },
  {
    "type": "item",
    "name": "engine-unit",
    "icon": "__base__/graphics/icons/engine-unit.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "g[engine-unit]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "electric-engine-unit",
    "icon": "__base__/graphics/icons/electric-engine-unit.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "h[electric-engine-unit]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "explosives",
    "icon": "__base__/graphics/icons/explosives.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "i[explosives]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "battery",
    "icon": "__base__/graphics/icons/battery.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "j[battery]",
    "stack_size": 200
  },
  {
    "type": "item",
    "name": "flying-robot-frame",
    "icon": "__base__/graphics/icons/flying-robot-frame.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "k[flying-robot-frame]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "arithmetic-combinator",
    "icon": "__base__/graphics/icons/arithmetic-combinator.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "circuit-network",
    "place_result": "arithmetic-combinator",
    "order": "b[combinators]-a[arithmetic-combinator]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "decider-combinator",
    "icon": "__base__/graphics/icons/decider-combinator.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "circuit-network",
    "place_result": "decider-combinator",
    "order": "b[combinators]-b[decider-combinator]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "constant-combinator",
    "icon": "__base__/graphics/icons/constant-combinator.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "circuit-network",
    "place_result": "constant-combinator",
    "order": "b[combinators]-c[constant-combinator]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "power-switch",
    "icon": "__base__/graphics/icons/power-switch.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "circuit-network",
    "place_result": "power-switch",
    "order": "c[other]-a[power-switch]",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "low-density-structure",
    "icon": "__base__/graphics/icons/rocket-structure.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "l[rocket-structure]",
    "stack_size": 10
  },
  {
    "type": "item",
    "name": "rocket-fuel",
    "icon": "__base__/graphics/icons/rocket-fuel.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "fuel_value": "225MJ",
    "subgroup": "intermediate-product",
    "order": "m[rocket-fuel]",
    "stack_size": 10
  },
  {
    "type": "item",
    "name": "rocket-control-unit",
    "icon": "__base__/graphics/icons/rocket-control-unit.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "n[rocket-control-unit]",
    "stack_size": 10
  },
  {
    "type": "item",
    "name": "rocket-part",
    "icon": "__base__/graphics/icons/rocket-part.png",
    "flags": [
      "goes-to-main-inventory",
      "hidden"
    ],
    "subgroup": "intermediate-product",
    "order": "o[rocket-part]",
    "stack_size": 5
  },
  {
    "type": "item",
    "name": "satellite",
    "icon": "__base__/graphics/icons/satellite.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "intermediate-product",
    "order": "p[satellite]",
    "stack_size": 1
  },
  {
    "type": "item",
    "name": "concrete",
    "icon": "__base__/graphics/icons/concrete.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "terrain",
    "order": "b[concrete]-a[plain]",
    "stack_size": 100,
    "place_as_tile": {
      "result": "concrete",
      "condition_size": 4,
      "condition": [
        "water-tile"
      ]
    }
  },
  {
    "type": "item",
    "name": "hazard-concrete",
    "icon": "__base__/graphics/icons/hazard-concrete.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "terrain",
    "order": "b[concrete]-b[hazard]",
    "stack_size": 100,
    "place_as_tile": {
      "result": "hazard-concrete-left",
      "condition_size": 4,
      "condition": [
        "water-tile"
      ]
    }
  },
  {
    "type": "item",
    "name": "landfill",
    "icon": "__base__/graphics/icons/landfill.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "terrain",
    "order": "c[landfill]-a[dirt]",
    "stack_size": 100,
    "place_as_tile": {
      "result": "grass",
      "condition_size": 1,
      "condition": [
        "ground-tile"
      ]
    }
  },
  {
    "type": "selection-tool",
    "name": "dummy-selection-tool",
    "localised_name": [
      "item-name.blueprint"
    ],
    "icon": "__base__/graphics/icons/blueprint.png",
    "flags": [
      "goes-to-quickbar",
      "hidden"
    ],
    "subgroup": "tool",
    "order": "c[automated-construction]-a[blueprint]",
    "stack_size": 1,
    "stackable": false,
    "selection_color": {
      "r": 0,
      "g": 1,
      "b": 0
    },
    "alt_selection_color": {
      "r": 0,
      "g": 1,
      "b": 0
    },
    "selection_mode": [
      "blueprint"
    ],
    "alt_selection_mode": [
      "blueprint"
    ],
    "selection_cursor_box_type": "copy",
    "alt_selection_cursor_box_type": "copy"
  },
  {
    "type": "item",
    "name": "electric-energy-interface",
    "icon": "__base__/graphics/icons/accumulator.png",
    "flags": [
      "goes-to-quickbar",
      "hidden"
    ],
    "subgroup": "energy",
    "order": "e[electric-energy-interface]-b[electric-energy-interface]",
    "place_result": "electric-energy-interface",
    "stack_size": 50
  },
  {
    "type": "mining-tool",
    "name": "steel-axe",
    "icon": "__base__/graphics/icons/steel-axe.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": {
          "type": "damage",
          "damage": {
            "amount": 8,
            "type": "physical"
          }
        }
      }
    },
    "durability": 5000,
    "subgroup": "tool",
    "order": "a[mining]-b[steel-axe]",
    "speed": 4,
    "stack_size": 20
  },
  {
    "type": "module",
    "name": "speed-module",
    "icon": "__base__/graphics/icons/speed-module.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "module",
    "category": "speed",
    "tier": 1,
    "order": "a[speed]-a[speed-module-1]",
    "stack_size": 50,
    "default_request_amount": 10,
    "effect": {
      "speed": {
        "bonus": 0.2
      },
      "consumption": {
        "bonus": 0.5
      }
    }
  },
  {
    "type": "module",
    "name": "speed-module-2",
    "icon": "__base__/graphics/icons/speed-module-2.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "module",
    "category": "speed",
    "tier": 2,
    "order": "a[speed]-b[speed-module-2]",
    "stack_size": 50,
    "default_request_amount": 10,
    "effect": {
      "speed": {
        "bonus": 0.3
      },
      "consumption": {
        "bonus": 0.6
      }
    }
  },
  {
    "type": "module",
    "name": "speed-module-3",
    "icon": "__base__/graphics/icons/speed-module-3.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "module",
    "category": "speed",
    "tier": 3,
    "order": "a[speed]-c[speed-module-3]",
    "stack_size": 50,
    "default_request_amount": 10,
    "effect": {
      "speed": {
        "bonus": 0.5
      },
      "consumption": {
        "bonus": 0.7
      }
    }
  },
  {
    "type": "module",
    "name": "effectivity-module",
    "icon": "__base__/graphics/icons/effectivity-module.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "module",
    "category": "effectivity",
    "tier": 1,
    "order": "c[effectivity]-a[effectivity-module-1]",
    "stack_size": 50,
    "default_request_amount": 10,
    "effect": {
      "consumption": {}
    }
  },
  {
    "type": "module",
    "name": "effectivity-module-2",
    "icon": "__base__/graphics/icons/effectivity-module-2.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "module",
    "category": "effectivity",
    "tier": 2,
    "order": "c[effectivity]-b[effectivity-module-2]",
    "stack_size": 50,
    "default_request_amount": 10,
    "effect": {
      "consumption": {}
    }
  },
  {
    "type": "module",
    "name": "effectivity-module-3",
    "icon": "__base__/graphics/icons/effectivity-module-3.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "module",
    "category": "effectivity",
    "tier": 3,
    "order": "c[effectivity]-c[effectivity-module-3]",
    "stack_size": 50,
    "default_request_amount": 10,
    "effect": {
      "consumption": {}
    }
  },
  {
    "type": "module",
    "name": "productivity-module",
    "icon": "__base__/graphics/icons/productivity-module.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "module",
    "category": "productivity",
    "tier": 1,
    "order": "c[productivity]-a[productivity-module-1]",
    "stack_size": 50,
    "default_request_amount": 10,
    "effect": {
      "productivity": {
        "bonus": 0.04
      },
      "consumption": {
        "bonus": 0.4
      },
      "pollution": {
        "bonus": 0.05
      },
      "speed": {}
    },
    "limitation_message_key": "production-module-usable-only-on-intermediates"
  },
  {
    "type": "module",
    "name": "productivity-module-2",
    "icon": "__base__/graphics/icons/productivity-module-2.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "module",
    "category": "productivity",
    "tier": 2,
    "order": "c[productivity]-b[productivity-module-2]",
    "stack_size": 50,
    "default_request_amount": 10,
    "effect": {
      "productivity": {
        "bonus": 0.06
      },
      "consumption": {
        "bonus": 0.6
      },
      "pollution": {
        "bonus": 0.075
      },
      "speed": {}
    },
    "limitation_message_key": "production-module-usable-only-on-intermediates"
  },
  {
    "type": "module",
    "name": "productivity-module-3",
    "icon": "__base__/graphics/icons/productivity-module-3.png",
    "flags": [
      "goes-to-main-inventory"
    ],
    "subgroup": "module",
    "category": "productivity",
    "tier": 3,
    "order": "c[productivity]-c[productivity-module-3]",
    "stack_size": 50,
    "default_request_amount": 10,
    "effect": {
      "productivity": {
        "bonus": 0.1
      },
      "consumption": {
        "bonus": 0.8
      },
      "pollution": {
        "bonus": 0.1
      },
      "speed": {}
    },
    "limitation_message_key": "production-module-usable-only-on-intermediates"
  },
  {
    "type": "item",
    "name": "laser-turret",
    "icon": "__base__/graphics/icons/laser-turret.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "defensive-structure",
    "order": "b[turret]-b[laser-turret]",
    "place_result": "laser-turret",
    "stack_size": 50
  },
  {
    "type": "item",
    "name": "flamethrower-turret",
    "icon": "__base__/graphics/icons/flamethrower-turret.png",
    "flags": [
      "goes-to-quickbar"
    ],
    "subgroup": "defensive-structure",
    "order": "b[turret]-a[flamethrower-turret]",
    "place_result": "flamethrower-turret",
    "stack_size": 50
  }
];