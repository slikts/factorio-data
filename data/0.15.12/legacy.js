module.exports = [
  {
    "type": "rocket-defense",
    "name": "rocket-defense-dummy",
    "max_health": 5000,
    "collision_box": [
      [
        null,
        null
      ],
      [
        2.4,
        2.4
      ]
    ],
    "selection_box": [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "energy_source": {
      "type": "electric",
      "buffer_capacity": "100MJ",
      "usage_priority": "primary-input"
    }
  },
  {
    "type": "smart-container",
    "name": "smart-chest-dummy",
    "fast_replaceable_group": "container",
    "max_health": 150,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.35,
        0.35
      ]
    ],
    "selection_box": [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "inventory_size": 48,
    "picture": {
      "filename": "__core__/graphics/cancel.png",
      "priority": "extra-high",
      "width": 64,
      "height": 64,
      "shift": [
        0,
        0
      ]
    }
  }
];