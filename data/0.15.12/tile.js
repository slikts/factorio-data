module.exports = [
  {
    "type": "noise-layer",
    "name": "grass"
  },
  {
    "type": "noise-layer",
    "name": "grass-medium"
  },
  {
    "type": "noise-layer",
    "name": "grass-dry"
  },
  {
    "type": "noise-layer",
    "name": "dirt"
  },
  {
    "type": "noise-layer",
    "name": "dirt-dark"
  },
  {
    "type": "noise-layer",
    "name": "sand"
  },
  {
    "type": "noise-layer",
    "name": "sand-dark"
  },
  {
    "type": "noise-layer",
    "name": "red-desert"
  },
  {
    "type": "noise-layer",
    "name": "red-desert-dark"
  },
  {
    "type": "noise-layer",
    "name": "copper-ore"
  },
  {
    "type": "noise-layer",
    "name": "iron-ore"
  },
  {
    "type": "noise-layer",
    "name": "coal"
  },
  {
    "type": "noise-layer",
    "name": "stone"
  },
  {
    "type": "noise-layer",
    "name": "uranium-ore"
  },
  {
    "type": "noise-layer",
    "name": "crude-oil"
  },
  {
    "type": "noise-layer",
    "name": "enemy-base"
  },
  {
    "type": "tile",
    "name": "out-of-map",
    "collision_mask": [
      "ground-tile",
      "water-tile",
      "resource-layer",
      "floor-layer",
      "item-layer",
      "object-layer",
      "player-layer",
      "doodad-layer"
    ],
    "layer": 70,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/out-of-map.png",
          "count": 1,
          "size": 1
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/out-of-map-inner-corner.png",
        "count": 0
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/out-of-map-outer-corner.png",
        "count": 0
      },
      "side": {
        "picture": "__base__/graphics/terrain/out-of-map-side.png",
        "count": 0
      }
    },
    "map_color": {
      "r": 0,
      "g": 0,
      "b": 0
    },
    "ageing": 0.0006
  },
  {
    "type": "tile",
    "name": "deepwater",
    "collision_mask": [
      "water-tile",
      "resource-layer",
      "item-layer",
      "player-layer",
      "doodad-layer"
    ],
    "layer": 45,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/deepwater/deepwater1.png",
          "count": 8,
          "size": 1
        },
        {
          "picture": "__base__/graphics/terrain/deepwater/deepwater2.png",
          "count": 8,
          "size": 2
        },
        {
          "picture": "__base__/graphics/terrain/deepwater/deepwater4.png",
          "count": 6,
          "size": 4
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/deepwater/deepwater-inner-corner.png",
        "count": 6
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/deepwater/deepwater-outer-corner.png",
        "count": 6
      },
      "side": {
        "picture": "__base__/graphics/terrain/deepwater/deepwater-side.png",
        "count": 8
      }
    },
    "allowed_neighbors": [
      "water"
    ],
    "map_color": {
      "r": 0.0941,
      "g": 0.2823,
      "b": 0.345
    },
    "ageing": 0.0006
  },
  {
    "type": "tile",
    "name": "deepwater-green",
    "collision_mask": [
      "water-tile",
      "resource-layer",
      "item-layer",
      "player-layer",
      "doodad-layer"
    ],
    "layer": 45,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/deepwater-green/deepwater-green1.png",
          "count": 8,
          "size": 1
        },
        {
          "picture": "__base__/graphics/terrain/deepwater-green/deepwater-green2.png",
          "count": 8,
          "size": 2
        },
        {
          "picture": "__base__/graphics/terrain/deepwater-green/deepwater-green4.png",
          "count": 6,
          "size": 4
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/deepwater-green/deepwater-green-inner-corner.png",
        "count": 6
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/deepwater-green/deepwater-green-outer-corner.png",
        "count": 6
      },
      "side": {
        "picture": "__base__/graphics/terrain/deepwater-green/deepwater-green-side.png",
        "count": 8
      }
    },
    "allowed_neighbors": [
      "water-green"
    ],
    "map_color": {
      "r": 0.0941,
      "g": 0.149,
      "b": 0.066
    },
    "ageing": 0.0005
  },
  {
    "type": "tile",
    "name": "water",
    "collision_mask": [
      "water-tile",
      "item-layer",
      "resource-layer",
      "player-layer",
      "doodad-layer"
    ],
    "layer": 40,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/water/water1.png",
          "count": 8,
          "size": 1
        },
        {
          "picture": "__base__/graphics/terrain/water/water2.png",
          "count": 8,
          "size": 2
        },
        {
          "picture": "__base__/graphics/terrain/water/water4.png",
          "count": 6,
          "size": 4
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/water/water-inner-corner.png",
        "count": 6
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/water/water-outer-corner.png",
        "count": 6
      },
      "side": {
        "picture": "__base__/graphics/terrain/water/water-side.png",
        "count": 8
      }
    },
    "allowed_neighbors": [
      "grass"
    ],
    "map_color": {
      "r": 0.0941,
      "g": 0.3568,
      "b": 0.4196
    },
    "ageing": 0.0006
  },
  {
    "type": "tile",
    "name": "water-green",
    "collision_mask": [
      "water-tile",
      "item-layer",
      "resource-layer",
      "player-layer",
      "doodad-layer"
    ],
    "layer": 40,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/water-green/water-green1.png",
          "count": 8,
          "size": 1
        },
        {
          "picture": "__base__/graphics/terrain/water-green/water-green2.png",
          "count": 8,
          "size": 2
        },
        {
          "picture": "__base__/graphics/terrain/water-green/water-green4.png",
          "count": 6,
          "size": 4
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/water-green/water-green-inner-corner.png",
        "count": 6
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/water-green/water-green-outer-corner.png",
        "count": 6
      },
      "side": {
        "picture": "__base__/graphics/terrain/water-green/water-green-side.png",
        "count": 8
      }
    },
    "allowed_neighbors": [
      "grass"
    ],
    "map_color": {
      "r": 31,
      "g": 48,
      "b": 18
    },
    "ageing": 0.0005
  },
  {
    "type": "tile",
    "name": "grass",
    "collision_mask": [
      "ground-tile"
    ],
    "layer": 20,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/grass/grass1.png",
          "count": 16,
          "size": 1
        },
        {
          "picture": "__base__/graphics/terrain/grass/grass2.png",
          "count": 16,
          "size": 2,
          "probability": 0.91,
          "weights": [
            0.15,
            0.15,
            0.15,
            0.15,
            0.018,
            0.02,
            0.015,
            0.025,
            0.015,
            0.02,
            0.025,
            0.015,
            0.025,
            0.025,
            0.01,
            0.025
          ]
        },
        {
          "picture": "__base__/graphics/terrain/grass/grass4.png",
          "count": 16,
          "line_length": 10,
          "size": 4,
          "probability": 1,
          "weights": [
            0.1,
            0.8,
            0.8,
            0.1,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01
          ]
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/grass/grass-inner-corner.png",
        "count": 8
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/grass/grass-outer-corner.png",
        "count": 8
      },
      "side": {
        "picture": "__base__/graphics/terrain/grass/grass-side.png",
        "count": 8
      }
    },
    "walking_sound": [
      {
        "filename": "__base__/sound/walking/grass-01.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-02.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-03.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-04.ogg",
        "volume": 0.8
      }
    ],
    "map_color": {
      "r": 61,
      "g": 51,
      "b": 17
    },
    "ageing": 0.00045,
    "can_be_part_of_blueprint": false
  },
  {
    "type": "tile",
    "name": "grass-medium",
    "collision_mask": [
      "ground-tile"
    ],
    "layer": 5,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/grass-medium/grass-medium1.png",
          "count": 8,
          "size": 1
        },
        {
          "picture": "__base__/graphics/terrain/grass-medium/grass-medium2.png",
          "count": 16,
          "size": 2,
          "probability": 0.91,
          "weights": [
            0.15,
            0.15,
            0.15,
            0.15,
            0.018,
            0.02,
            0.015,
            0.025,
            0.015,
            0.02,
            0.025,
            0.015,
            0.025,
            0.025,
            0.01,
            0.025
          ]
        },
        {
          "picture": "__base__/graphics/terrain/grass-medium/grass-medium4.png",
          "count": 16,
          "line_length": 10,
          "size": 4,
          "probability": 1,
          "weights": [
            0.1,
            0.8,
            0.8,
            0.1,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01
          ]
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/grass-medium/grass-medium-inner-corner.png",
        "count": 8
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/grass-medium/grass-medium-outer-corner.png",
        "count": 8
      },
      "side": {
        "picture": "__base__/graphics/terrain/grass-medium/grass-medium-side.png",
        "count": 8
      }
    },
    "walking_sound": [
      {
        "filename": "__base__/sound/walking/grass-01.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-02.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-03.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-04.ogg",
        "volume": 0.8
      }
    ],
    "map_color": {
      "r": 58,
      "g": 47,
      "b": 19
    },
    "ageing": 0.00045
  },
  {
    "type": "tile",
    "name": "grass-dry",
    "collision_mask": [
      "ground-tile"
    ],
    "layer": 4,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/grass-dry/grass-dry1.png",
          "count": 8,
          "size": 1
        },
        {
          "picture": "__base__/graphics/terrain/grass-dry/grass-dry2.png",
          "count": 16,
          "size": 2,
          "probability": 0.91,
          "weights": [
            0.018,
            0.02,
            0.015,
            0.025,
            0.015,
            0.02,
            0.025,
            0.015,
            0.025,
            0.025,
            0.01,
            0.025,
            0.02,
            0.025,
            0.025,
            0.01
          ]
        },
        {
          "picture": "__base__/graphics/terrain/grass-dry/grass-dry4.png",
          "count": 16,
          "line_length": 10,
          "size": 4,
          "probability": 1,
          "weights": [
            0.1,
            0.8,
            0.8,
            0.1,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01,
            0.01
          ]
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/grass-dry/grass-dry-inner-corner.png",
        "count": 8
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/grass-dry/grass-dry-outer-corner.png",
        "count": 8
      },
      "side": {
        "picture": "__base__/graphics/terrain/grass-dry/grass-dry-side.png",
        "count": 8
      }
    },
    "walking_sound": [
      {
        "filename": "__base__/sound/walking/grass-01.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-02.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-03.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-04.ogg",
        "volume": 0.8
      }
    ],
    "map_color": {
      "r": 53,
      "g": 38,
      "b": 14
    },
    "ageing": 0.0004
  },
  {
    "type": "tile",
    "name": "dirt",
    "collision_mask": [
      "ground-tile"
    ],
    "layer": 25,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/dirt/dirt1.png",
          "count": 16,
          "size": 1,
          "weights": [
            0.085,
            0.085,
            0.085,
            0.085,
            0.087,
            0.085,
            0.065,
            0.085,
            0.045,
            0.045,
            0.045,
            0.045,
            0.005,
            0.025,
            0.045,
            0.045
          ]
        },
        {
          "picture": "__base__/graphics/terrain/dirt/dirt2.png",
          "count": 16,
          "size": 2,
          "probability": 1,
          "weights": [
            0.07,
            0.07,
            0.025,
            0.07,
            0.07,
            0.07,
            0.007,
            0.025,
            0.07,
            0.05,
            0.015,
            0.026,
            0.03,
            0.005,
            0.07,
            0.027
          ]
        },
        {
          "picture": "__base__/graphics/terrain/dirt/dirt4.png",
          "count": 16,
          "line_length": 11,
          "size": 4,
          "probability": 1,
          "weights": [
            0.07,
            0.07,
            0.07,
            0.07,
            0.07,
            0.07,
            0.015,
            0.07,
            0.07,
            0.07,
            0.015,
            0.05,
            0.07,
            0.07,
            0.065,
            0.07
          ]
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/dirt/dirt-inner-corner.png",
        "count": 8
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/dirt/dirt-outer-corner.png",
        "count": 8
      },
      "side": {
        "picture": "__base__/graphics/terrain/dirt/dirt-side.png",
        "count": 8
      }
    },
    "walking_sound": [
      {
        "filename": "__base__/sound/walking/dirt-02.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/dirt-03.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/dirt-04.ogg",
        "volume": 0.8
      }
    ],
    "map_color": {
      "r": 132,
      "g": 91,
      "b": 34
    },
    "ageing": 0.00045
  },
  {
    "type": "tile",
    "name": "dirt-dark",
    "collision_mask": [
      "ground-tile"
    ],
    "layer": 26,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/dirt-dark/dirt-dark1.png",
          "count": 16,
          "size": 1,
          "weights": [
            0.085,
            0.085,
            0.085,
            0.085,
            0.087,
            0.085,
            0.065,
            0.085,
            0.045,
            0.045,
            0.045,
            0.045,
            0.005,
            0.025,
            0.045,
            0.045
          ]
        },
        {
          "picture": "__base__/graphics/terrain/dirt-dark/dirt-dark2.png",
          "count": 16,
          "size": 2,
          "probability": 0.94,
          "weights": [
            0.07,
            0.07,
            0.025,
            0.07,
            0.07,
            0.07,
            0.007,
            0.025,
            0.07,
            0.05,
            0.015,
            0.026,
            0.03,
            0.005,
            0.07,
            0.027
          ]
        },
        {
          "picture": "__base__/graphics/terrain/dirt-dark/dirt-dark4.png",
          "count": 16,
          "line_length": 11,
          "size": 4,
          "probability": 1,
          "weights": [
            0.07,
            0.07,
            0.07,
            0.07,
            0.07,
            0.07,
            0.015,
            0.07,
            0.07,
            0.07,
            0.015,
            0.05,
            0.07,
            0.07,
            0.065,
            0.07
          ]
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/dirt-dark/dirt-dark-inner-corner.png",
        "count": 8
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/dirt-dark/dirt-dark-outer-corner.png",
        "count": 8
      },
      "side": {
        "picture": "__base__/graphics/terrain/dirt-dark/dirt-dark-side.png",
        "count": 8
      }
    },
    "walking_sound": [
      {
        "filename": "__base__/sound/walking/dirt-02.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/dirt-03.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/dirt-04.ogg",
        "volume": 0.8
      }
    ],
    "map_color": {
      "r": 115,
      "g": 80,
      "b": 29
    },
    "ageing": 0.00045
  },
  {
    "type": "tile",
    "name": "sand",
    "collision_mask": [
      "ground-tile"
    ],
    "layer": 35,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/sand/sand1.png",
          "count": 16,
          "size": 1
        },
        {
          "picture": "__base__/graphics/terrain/sand/sand2.png",
          "count": 16,
          "size": 2,
          "probability": 0.39,
          "weights": [
            0.025,
            0.01,
            0.013,
            0.025,
            0.025,
            0.1,
            0.1,
            0.005,
            0.01,
            0.01,
            0.005,
            0.005,
            0.001,
            0.015,
            0.02,
            0.02
          ]
        },
        {
          "picture": "__base__/graphics/terrain/sand/sand4.png",
          "count": 16,
          "line_length": 11,
          "size": 4,
          "probability": 1,
          "weights": [
            0.09,
            0.125,
            0.125,
            0.125,
            0.125,
            0.125,
            0.125,
            0.025,
            0.125,
            0.005,
            0.01,
            0.1,
            0.1,
            0.01,
            0.02,
            0.02
          ]
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/sand/sand-inner-corner.png",
        "count": 8
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/sand/sand-outer-corner.png",
        "count": 8
      },
      "side": {
        "picture": "__base__/graphics/terrain/sand/sand-side.png",
        "count": 8
      }
    },
    "walking_sound": [
      {
        "filename": "__base__/sound/walking/sand-01.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/sand-02.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/sand-03.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/sand-04.ogg",
        "volume": 0.8
      }
    ],
    "map_color": {
      "r": 160,
      "g": 126,
      "b": 54
    },
    "ageing": 0.00025
  },
  {
    "type": "tile",
    "name": "sand-dark",
    "collision_mask": [
      "ground-tile"
    ],
    "layer": 36,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/sand-dark/sand-dark1.png",
          "count": 16,
          "size": 1
        },
        {
          "picture": "__base__/graphics/terrain/sand-dark/sand-dark2.png",
          "count": 16,
          "size": 2,
          "probability": 0.39,
          "weights": [
            0.025,
            0.01,
            0.013,
            0.025,
            0.025,
            0.1,
            0.1,
            0.005,
            0.01,
            0.01,
            0.005,
            0.005,
            0.001,
            0.015,
            0.02,
            0.02
          ]
        },
        {
          "picture": "__base__/graphics/terrain/sand-dark/sand-dark4.png",
          "count": 16,
          "line_length": 11,
          "size": 4,
          "probability": 1,
          "weights": [
            0.09,
            0.125,
            0.125,
            0.125,
            0.125,
            0.125,
            0.125,
            0.025,
            0.125,
            0.005,
            0.01,
            0.1,
            0.1,
            0.01,
            0.02,
            0.02
          ]
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/sand-dark/sand-dark-inner-corner.png",
        "count": 8
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/sand-dark/sand-dark-outer-corner.png",
        "count": 8
      },
      "side": {
        "picture": "__base__/graphics/terrain/sand-dark/sand-dark-side.png",
        "count": 8
      }
    },
    "walking_sound": [
      {
        "filename": "__base__/sound/walking/sand-01.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/sand-02.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/sand-03.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/sand-04.ogg",
        "volume": 0.8
      }
    ],
    "map_color": {
      "r": 139,
      "g": 104,
      "b": 39
    },
    "ageing": 0.0002
  },
  {
    "type": "tile",
    "name": "red-desert",
    "collision_mask": [
      "ground-tile"
    ],
    "layer": 37,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/red-desert/red-desert1.png",
          "count": 16,
          "size": 1,
          "hr_version": {
            "picture": "__base__/graphics/terrain/red-desert/hr-red-desert1.png",
            "count": 16,
            "size": 1,
            "scale": 0.5
          }
        },
        {
          "picture": "__base__/graphics/terrain/red-desert/red-desert2.png",
          "count": 16,
          "size": 2,
          "hr_version": {
            "picture": "__base__/graphics/terrain/red-desert/hr-red-desert2.png",
            "count": 16,
            "size": 2,
            "scale": 0.5
          }
        },
        {
          "picture": "__base__/graphics/terrain/red-desert/red-desert4.png",
          "count": 16,
          "size": 4,
          "hr_version": {
            "picture": "__base__/graphics/terrain/red-desert/hr-red-desert4.png",
            "count": 16,
            "size": 4,
            "scale": 0.5
          }
        },
        {
          "picture": "__base__/graphics/terrain/red-desert/red-desert8.png",
          "count": 16,
          "line_length": 6,
          "size": 8,
          "hr_version": {
            "picture": "__base__/graphics/terrain/red-desert/hr-red-desert8.png",
            "count": 16,
            "line_length": 4,
            "size": 8,
            "scale": 0.5
          }
        },
        {
          "picture": "__base__/graphics/terrain/red-desert/red-desert16.png",
          "count": 12,
          "line_length": 4,
          "size": 16,
          "hr_version": {
            "picture": "__base__/graphics/terrain/red-desert/hr-red-desert16.png",
            "count": 12,
            "line_length": 4,
            "size": 16,
            "scale": 0.5
          }
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/red-desert/red-desert-inner-corner.png",
        "count": 8,
        "hr_version": {
          "picture": "__base__/graphics/terrain/red-desert/hr-red-desert-inner-corner.png",
          "count": 8,
          "scale": 0.5
        }
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/red-desert/red-desert-outer-corner.png",
        "count": 8,
        "hr_version": {
          "picture": "__base__/graphics/terrain/red-desert/hr-red-desert-outer-corner.png",
          "count": 8,
          "scale": 0.5
        }
      },
      "side": {
        "picture": "__base__/graphics/terrain/red-desert/red-desert-side.png",
        "count": 8,
        "hr_version": {
          "picture": "__base__/graphics/terrain/red-desert/hr-red-desert-side.png",
          "count": 8,
          "scale": 0.5
        }
      }
    },
    "walking_sound": [
      {
        "filename": "__base__/sound/walking/grass-01.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-02.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-03.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-04.ogg",
        "volume": 0.8
      }
    ],
    "map_color": {
      "r": 125,
      "g": 88,
      "b": 67
    },
    "ageing": 0.00045,
    "can_be_part_of_blueprint": false
  },
  {
    "type": "tile",
    "name": "red-desert-dark",
    "collision_mask": [
      "ground-tile"
    ],
    "layer": 38,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/red-desert-dark/red-desert-dark1.png",
          "count": 16,
          "size": 1,
          "hr_version": {
            "picture": "__base__/graphics/terrain/red-desert-dark/hr-red-desert-dark1.png",
            "count": 16,
            "size": 1,
            "scale": 0.5
          }
        },
        {
          "picture": "__base__/graphics/terrain/red-desert-dark/red-desert-dark2.png",
          "count": 16,
          "size": 2,
          "hr_version": {
            "picture": "__base__/graphics/terrain/red-desert-dark/hr-red-desert-dark2.png",
            "count": 16,
            "size": 2,
            "scale": 0.5
          }
        },
        {
          "picture": "__base__/graphics/terrain/red-desert-dark/red-desert-dark4.png",
          "count": 16,
          "size": 4,
          "hr_version": {
            "picture": "__base__/graphics/terrain/red-desert-dark/hr-red-desert-dark4.png",
            "count": 16,
            "size": 4,
            "scale": 0.5
          }
        },
        {
          "picture": "__base__/graphics/terrain/red-desert-dark/red-desert-dark8.png",
          "line_length": 4,
          "count": 16,
          "size": 8,
          "hr_version": {
            "picture": "__base__/graphics/terrain/red-desert-dark/hr-red-desert-dark8.png",
            "line_length": 4,
            "count": 16,
            "size": 8,
            "scale": 0.5
          }
        },
        {
          "picture": "__base__/graphics/terrain/red-desert-dark/red-desert-dark16.png",
          "line_length": 4,
          "count": 16,
          "size": 16,
          "hr_version": {
            "picture": "__base__/graphics/terrain/red-desert-dark/hr-red-desert-dark16.png",
            "line_length": 4,
            "count": 16,
            "size": 16,
            "scale": 0.5
          }
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/red-desert-dark/red-desert-dark-inner-corner.png",
        "count": 8,
        "hr_version": {
          "picture": "__base__/graphics/terrain/red-desert-dark/hr-red-desert-dark-inner-corner.png",
          "count": 8,
          "scale": 0.5
        }
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/red-desert-dark/red-desert-dark-outer-corner.png",
        "count": 8,
        "hr_version": {
          "picture": "__base__/graphics/terrain/red-desert-dark/hr-red-desert-dark-outer-corner.png",
          "count": 8,
          "scale": 0.5
        }
      },
      "side": {
        "picture": "__base__/graphics/terrain/red-desert-dark/red-desert-dark-side.png",
        "count": 8,
        "hr_version": {
          "picture": "__base__/graphics/terrain/red-desert-dark/hr-red-desert-dark-side.png",
          "count": 8,
          "scale": 0.5
        }
      }
    },
    "walking_sound": [
      {
        "filename": "__base__/sound/walking/grass-01.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-02.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-03.ogg",
        "volume": 0.8
      },
      {
        "filename": "__base__/sound/walking/grass-04.ogg",
        "volume": 0.8
      }
    ],
    "map_color": {
      "r": 116,
      "g": 74,
      "b": 59
    },
    "ageing": 0.0004
  },
  {
    "type": "tile",
    "name": "stone-path",
    "needs_correction": false,
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "stone-brick"
    },
    "mined_sound": {
      "filename": "__base__/sound/deconstruct-bricks.ogg"
    },
    "collision_mask": [
      "ground-tile"
    ],
    "walking_speed_modifier": 1.3,
    "layer": 60,
    "decorative_removal_probability": 0.15,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/stone-path/stone-path-1.png",
          "count": 16,
          "size": 1
        },
        {
          "picture": "__base__/graphics/terrain/stone-path/stone-path-2.png",
          "count": 4,
          "size": 2,
          "probability": 0.39
        },
        {
          "picture": "__base__/graphics/terrain/stone-path/stone-path-4.png",
          "count": 4,
          "size": 4,
          "probability": 1
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/stone-path/stone-path-inner-corner.png",
        "count": 8
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/stone-path/stone-path-outer-corner.png",
        "count": 1
      },
      "side": {
        "picture": "__base__/graphics/terrain/stone-path/stone-path-side.png",
        "count": 10
      },
      "u_transition": {
        "picture": "__base__/graphics/terrain/stone-path/stone-path-u.png",
        "count": 10
      },
      "o_transition": {
        "picture": "__base__/graphics/terrain/stone-path/stone-path-o.png",
        "count": 10
      }
    },
    "walking_sound": [
      {
        "filename": "__base__/sound/walking/concrete-01.ogg",
        "volume": 1.2
      },
      {
        "filename": "__base__/sound/walking/concrete-02.ogg",
        "volume": 1.2
      },
      {
        "filename": "__base__/sound/walking/concrete-03.ogg",
        "volume": 1.2
      },
      {
        "filename": "__base__/sound/walking/concrete-04.ogg",
        "volume": 1.2
      }
    ],
    "map_color": {
      "r": 50,
      "g": 50,
      "b": 50
    },
    "ageing": 0
  },
  {
    "type": "tile",
    "name": "lab-dark-1",
    "collision_mask": [
      "ground-tile"
    ],
    "layer": 70,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/lab-tiles/lab-dark-1.png",
          "count": 1,
          "size": 1
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/out-of-map-inner-corner.png",
        "count": 0
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/out-of-map-outer-corner.png",
        "count": 0
      },
      "side": {
        "picture": "__base__/graphics/terrain/out-of-map-side.png",
        "count": 0
      }
    },
    "walking_sound": [
      {
        "filename": "__base__/sound/walking/concrete-01.ogg",
        "volume": 1.2
      },
      {
        "filename": "__base__/sound/walking/concrete-02.ogg",
        "volume": 1.2
      },
      {
        "filename": "__base__/sound/walking/concrete-03.ogg",
        "volume": 1.2
      },
      {
        "filename": "__base__/sound/walking/concrete-04.ogg",
        "volume": 1.2
      }
    ],
    "map_color": {
      "r": 0,
      "g": 0,
      "b": 0
    },
    "ageing": 0.0006
  },
  {
    "type": "tile",
    "name": "lab-dark-2",
    "collision_mask": [
      "ground-tile"
    ],
    "layer": 70,
    "variants": {
      "main": [
        {
          "picture": "__base__/graphics/terrain/lab-tiles/lab-dark-2.png",
          "count": 1,
          "size": 1
        }
      ],
      "inner_corner": {
        "picture": "__base__/graphics/terrain/out-of-map-inner-corner.png",
        "count": 0
      },
      "outer_corner": {
        "picture": "__base__/graphics/terrain/out-of-map-outer-corner.png",
        "count": 0
      },
      "side": {
        "picture": "__base__/graphics/terrain/out-of-map-side.png",
        "count": 0
      }
    },
    "walking_sound": [
      {
        "filename": "__base__/sound/walking/concrete-01.ogg",
        "volume": 1.2
      },
      {
        "filename": "__base__/sound/walking/concrete-02.ogg",
        "volume": 1.2
      },
      {
        "filename": "__base__/sound/walking/concrete-03.ogg",
        "volume": 1.2
      },
      {
        "filename": "__base__/sound/walking/concrete-04.ogg",
        "volume": 1.2
      }
    ],
    "map_color": {
      "r": 0.2,
      "g": 0.2,
      "b": 0.2
    },
    "ageing": 0.0006
  }
];