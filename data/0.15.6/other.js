module.exports = [
  {
    "type": "build-entity-achievement",
    "name": "getting-on-track",
    "order": "a[progress]-a[getting-on-track]",
    "to_build": "locomotive",
    "icon": "__base__/graphics/achievement/getting-on-track.png"
  },
  {
    "type": "research-achievement",
    "name": "eco-unfriendly",
    "order": "a[progress]-b[eco-unfriendly]",
    "technology": "oil-processing",
    "icon": "__base__/graphics/achievement/eco-unfriendly.png"
  },
  {
    "type": "research-achievement",
    "name": "tech-maniac",
    "order": "a[progress]-c[tech-maniac]",
    "research_all": true,
    "icon": "__base__/graphics/achievement/tech-maniac.png"
  },
  {
    "type": "finish-the-game-achievement",
    "name": "smoke-me-a-kipper-i-will-be-back-for-breakfast",
    "order": "a[progress]-d[smoke-me-a-kipper-i-will-be-back-for-breakfast]",
    "icon": "__base__/graphics/achievement/smoke-me-a-kipper-i-will-be-back-for-breakfast.png"
  },
  {
    "type": "group-attack-achievement",
    "name": "it-stinks-and-they-dont-like-it",
    "order": "b[exploration]-a[it-stinks-and-they-dont-like-it]",
    "amount": 1,
    "icon": "__base__/graphics/achievement/it-stinks-and-they-dont-like-it.png"
  },
  {
    "type": "construct-with-robots-achievement",
    "name": "automated-construction",
    "order": "b[exploration]-b[construct-with-robots]-a[100]",
    "amount": 100,
    "steam_stats_name": "constructed-by-robots",
    "icon": "__base__/graphics/achievement/automated-construction.png",
    "limited_to_one_game": false
  },
  {
    "type": "construct-with-robots-achievement",
    "name": "you-are-doing-it-right",
    "order": "b[exploration]-b[construct-with-robots]-b[more-than-manually]",
    "more_than_manually": true,
    "icon": "__base__/graphics/achievement/you-are-doing-it-right.png",
    "limited_to_one_game": true
  },
  {
    "type": "deconstruct-with-robots-achievement",
    "name": "automated-cleanup",
    "order": "b[exploration]-c[deconstruct-with-robots]",
    "amount": 100,
    "steam_stats_name": "deconstructed-by-robots",
    "icon": "__base__/graphics/achievement/automated-cleanup.png"
  },
  {
    "type": "deliver-by-robots-achievement",
    "name": "you-have-got-a-package",
    "order": "b[exploration]-d[deliver-by-robots]-a",
    "amount": 1,
    "icon": "__base__/graphics/achievement/you-have-got-a-package.png"
  },
  {
    "type": "deliver-by-robots-achievement",
    "name": "delivery-service",
    "order": "b[exploration]-d[deliver-by-robots]-b",
    "amount": 10000,
    "steam_stats_name": "delivered-by-robots",
    "icon": "__base__/graphics/achievement/delivery-service.png"
  },
  {
    "type": "train-path-achievement",
    "name": "trans-factorio-express",
    "order": "b[exploration]-e[train-path]",
    "minimum_distance": 1000,
    "steam_stats_name": "longest-train-path",
    "icon": "__base__/graphics/achievement/trans-factorio-express.png"
  },
  {
    "type": "player-damaged-achievement",
    "name": "watch-your-step",
    "order": "b[exploration]-f[watch-your-step]",
    "type_of_dealer": "locomotive",
    "minimum_damage": 0,
    "should_survive": false,
    "icon": "__base__/graphics/achievement/watch-your-step.png"
  },
  {
    "type": "player-damaged-achievement",
    "name": "golem",
    "order": "b[exploration]-g[golem]",
    "should_survive": true,
    "minimum_damage": 500,
    "steam_stats_name": "surived-damage-in-one-hit",
    "icon": "__base__/graphics/achievement/golem.png"
  },
  {
    "type": "build-entity-achievement",
    "name": "getting-on-track-like-a-pro",
    "order": "c[teaching]-a[getting-on-track-like-a-pro]",
    "to_build": "locomotive",
    "icon": "__base__/graphics/achievement/getting-on-track-like-a-pro.png"
  },
  {
    "type": "produce-achievement",
    "name": "mass-production-1",
    "order": "d[production]-b[electronic-circuit-production]-a",
    "item_product": "electronic-circuit",
    "amount": 10000,
    "steam_stats_name": "electronic-circuits-production-overall",
    "icon": "__base__/graphics/achievement/mass-production-1.png",
    "limited_to_one_game": false
  },
  {
    "type": "produce-achievement",
    "name": "mass-production-2",
    "order": "d[production]-b[electronic-circuit-production]-b",
    "item_product": "electronic-circuit",
    "amount": 1000000,
    "steam_stats_name": "electronic-circuits-production-overall",
    "icon": "__base__/graphics/achievement/mass-production-2.png",
    "limited_to_one_game": false
  },
  {
    "type": "produce-achievement",
    "name": "mass-production-3",
    "order": "d[production]-b[electronic-circuit-production]-c",
    "item_product": "electronic-circuit",
    "amount": 20000000,
    "steam_stats_name": "electronic-circuits-production-overall",
    "icon": "__base__/graphics/achievement/mass-production-3.png",
    "limited_to_one_game": false
  },
  {
    "type": "produce-per-hour-achievement",
    "name": "circuit-veteran-1",
    "order": "d[production]-c[advanced-circuit-production]-a",
    "item_product": "advanced-circuit",
    "amount": 1000,
    "steam_stats_name": "advanced-circuits-per-hour",
    "icon": "__base__/graphics/achievement/circuit-veteran-1.png"
  },
  {
    "type": "produce-per-hour-achievement",
    "name": "circuit-veteran-2",
    "order": "d[production]-c[advanced-circuit-production]-b",
    "item_product": "advanced-circuit",
    "amount": 10000,
    "steam_stats_name": "advanced-circuits-per-hour",
    "icon": "__base__/graphics/achievement/circuit-veteran-2.png"
  },
  {
    "type": "produce-per-hour-achievement",
    "name": "circuit-veteran-3",
    "order": "d[production]-c[advanced-circuit-production]-c",
    "item_product": "advanced-circuit",
    "amount": 25000,
    "steam_stats_name": "advanced-circuits-per-hour",
    "icon": "__base__/graphics/achievement/circuit-veteran-3.png"
  },
  {
    "type": "produce-per-hour-achievement",
    "name": "computer-age-1",
    "order": "d[production]-d[processing-unit-production]-a",
    "item_product": "processing-unit",
    "amount": 500,
    "steam_stats_name": "processing-units-per-hour",
    "icon": "__base__/graphics/achievement/computer-age-1.png"
  },
  {
    "type": "produce-per-hour-achievement",
    "name": "computer-age-2",
    "order": "d[production]-d[processing-unit-production]-b",
    "item_product": "processing-unit",
    "amount": 1000,
    "steam_stats_name": "processing-units-per-hour",
    "icon": "__base__/graphics/achievement/computer-age-2.png"
  },
  {
    "type": "produce-per-hour-achievement",
    "name": "computer-age-3",
    "order": "d[production]-d[processing-unit-production]-c",
    "item_product": "processing-unit",
    "amount": 5000,
    "steam_stats_name": "processing-units-per-hour",
    "icon": "__base__/graphics/achievement/computer-age-3.png"
  },
  {
    "type": "produce-per-hour-achievement",
    "name": "iron-throne-1",
    "order": "d[production]-e[iron-throne-1]",
    "item_product": "iron-plate",
    "amount": 20000,
    "steam_stats_name": "iron-plates-per-hour",
    "icon": "__base__/graphics/achievement/iron-throne-1.png"
  },
  {
    "type": "produce-per-hour-achievement",
    "name": "iron-throne-2",
    "order": "d[production]-e[iron-throne-2]",
    "item_product": "iron-plate",
    "amount": 200000,
    "steam_stats_name": "iron-plates-per-hour",
    "icon": "__base__/graphics/achievement/iron-throne-2.png"
  },
  {
    "type": "produce-per-hour-achievement",
    "name": "iron-throne-3",
    "order": "d[production]-e[iron-throne-3]",
    "item_product": "iron-plate",
    "amount": 400000,
    "steam_stats_name": "iron-plates-per-hour",
    "icon": "__base__/graphics/achievement/iron-throne-3.png"
  },
  {
    "type": "dont-use-entity-in-energy-production-achievement",
    "name": "solaris",
    "order": "d[production]-e[solaris]",
    "last_hour_only": true,
    "excluded": "steam-engine",
    "included": "solar-panel",
    "minimum_energy_produced": "10GJ",
    "icon": "__base__/graphics/achievement/solaris.png"
  },
  {
    "type": "kill-achievement",
    "name": "steamrolled",
    "order": "e[kill]-a[steamrolled]",
    "type_to_kill": "unit-spawner",
    "damage_type": "impact",
    "in_vehicle": true,
    "personally": true,
    "amount": 10,
    "steam_stats_name": "spawners-killed-by-impact",
    "icon": "__base__/graphics/achievement/steamrolled.png"
  },
  {
    "type": "kill-achievement",
    "name": "pyromaniac",
    "order": "e[kill]-b[pyromaniac]",
    "type_to_kill": "tree",
    "amount": 10000,
    "damage_type": "fire",
    "steam_stats_name": "trees-destroyed-by-fire",
    "icon": "__base__/graphics/achievement/pyromaniac.png"
  },
  {
    "type": "kill-achievement",
    "name": "run-forrest-run",
    "order": "e[kill]-c[run-forrest-run]",
    "type_to_kill": "tree",
    "in_vehicle": true,
    "personally": true,
    "amount": 100,
    "steam_stats_name": "trees-destroyed-by-impact",
    "icon": "__base__/graphics/achievement/run-forrest-run.png"
  },
  {
    "type": "combat-robot-count",
    "name": "minions",
    "order": "e[kill]-d[minions]",
    "count": 100,
    "steam_stats_name": "combat-robots",
    "icon": "__base__/graphics/achievement/minions.png"
  },
  {
    "type": "dont-craft-manually-achievement",
    "name": "lazy-bastard",
    "order": "f[limitation]-a[lazy-bastard]",
    "amount": 111,
    "icon": "__base__/graphics/achievement/lazy-bastard.png"
  },
  {
    "type": "dont-use-entity-in-energy-production-achievement",
    "name": "steam-all-the-way",
    "allowed_in_peaceful_mode": false,
    "excluded": "solar-panel",
    "order": "f[limitation]-b[steam-all-the-way]",
    "icon": "__base__/graphics/achievement/steam-all-the-way.png"
  },
  {
    "type": "dont-build-entity-achievement",
    "name": "raining-bullets",
    "order": "f[limitation]-c[raining-bullets]",
    "dont_build": "laser-turret",
    "allowed_in_peaceful_mode": false,
    "icon": "__base__/graphics/achievement/raining-bullets.png"
  },
  {
    "type": "dont-build-entity-achievement",
    "name": "logistic-network-embargo",
    "order": "f[limitation]-d[logistic-network-embargo]",
    "dont_build": [
      "logistic-chest-active-provider",
      "logistic-chest-requester"
    ],
    "icon": "__base__/graphics/achievement/logistic-network-embargo.png"
  },
  {
    "type": "finish-the-game-achievement",
    "name": "no-time-for-chitchat",
    "allowed_in_peaceful_mode": false,
    "order": "f[limitation]-e[no-time-for-chitchat]",
    "icon": "__base__/graphics/achievement/no-time-for-chitchat.png"
  },
  {
    "type": "finish-the-game-achievement",
    "name": "there-is-no-spoon",
    "allowed_in_peaceful_mode": false,
    "order": "f[limitation]-f[there-is-no-spoon]",
    "icon": "__base__/graphics/achievement/there-is-no-spoon.png"
  },
  {
    "type": "achievement",
    "name": "so-long-and-thanks-for-all-the-fish",
    "order": "g[secret]-a[so-long-and-thanks-for-all-the-fish]",
    "icon": "__base__/graphics/achievement/so-long-and-thanks-for-all-the-fish.png"
  },
  {
    "type": "ambient-sound",
    "name": "after-the-crash",
    "track_type": "early-game",
    "sound": {
      "filename": "__base__/sound/ambient/after-the-crash.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "automation",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/automation.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "resource-deficiency",
    "track_type": "early-game",
    "sound": {
      "filename": "__base__/sound/ambient/resource-deficiency.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "are-we-alone",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/are-we-alone.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "beyond-factory-outskirts",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/beyond-factory-outskirts.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "censeqs-discrepancy",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/censeqs-discrepancy.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "efficiency-program",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/efficiency-program.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "expansion",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/expansion.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "the-search-for-iron",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/the-search-for-iron.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "gathering-horizon",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/gathering-horizon.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "research-and-minerals",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/research-and-minerals.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "solar-intervention",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/solar-intervention.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "the-oil-industry",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/the-oil-industry.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "the-right-tools",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/the-right-tools.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "pollution",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/pollution.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "turbine-dynamics",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/turbine-dynamics.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "sentient",
    "track_type": "main-track",
    "sound": {
      "filename": "__base__/sound/ambient/sentient.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "anomaly",
    "track_type": "interlude",
    "sound": {
      "filename": "__base__/sound/ambient/anomaly.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "first-light",
    "track_type": "interlude",
    "sound": {
      "filename": "__base__/sound/ambient/first-light.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "transmit",
    "track_type": "interlude",
    "sound": {
      "filename": "__base__/sound/ambient/transmit.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "swell-pad",
    "track_type": "interlude",
    "sound": {
      "filename": "__base__/sound/ambient/swell-pad.ogg"
    }
  },
  {
    "type": "ambient-sound",
    "name": "world-ambience-1",
    "track_type": "interlude",
    "sound": {
      "filename": "__base__/sound/ambient/world-ambience-1.ogg",
      "volume": 1.2
    }
  },
  {
    "type": "ambient-sound",
    "name": "world-ambience-2",
    "track_type": "interlude",
    "sound": {
      "filename": "__base__/sound/ambient/world-ambience-2.ogg",
      "volume": 1.2
    }
  },
  {
    "type": "ambient-sound",
    "name": "world-ambience-3",
    "track_type": "interlude",
    "sound": {
      "filename": "__base__/sound/ambient/world-ambience-3.ogg",
      "volume": 1.2
    }
  },
  {
    "type": "ambient-sound",
    "name": "world-ambience-4",
    "track_type": "interlude",
    "sound": {
      "filename": "__base__/sound/ambient/world-ambience-4.ogg",
      "volume": 1.2
    }
  },
  {
    "type": "ambient-sound",
    "name": "world-ambience-5",
    "track_type": "interlude",
    "sound": {
      "filename": "__base__/sound/ambient/world-ambience-5.ogg",
      "volume": 1.2
    }
  },
  {
    "type": "ambient-sound",
    "name": "world-ambience-6",
    "track_type": "interlude",
    "sound": {
      "filename": "__base__/sound/ambient/world-ambience-6.ogg",
      "volume": 1.2
    }
  },
  {
    "type": "autoplace-control",
    "name": "iron-ore",
    "richness": true,
    "order": "b-a"
  },
  {
    "type": "autoplace-control",
    "name": "copper-ore",
    "richness": true,
    "order": "b-b"
  },
  {
    "type": "autoplace-control",
    "name": "stone",
    "richness": true,
    "order": "b-c"
  },
  {
    "type": "autoplace-control",
    "name": "coal",
    "richness": true,
    "order": "b-d"
  },
  {
    "type": "autoplace-control",
    "name": "uranium-ore",
    "richness": true,
    "order": "b-e"
  },
  {
    "type": "autoplace-control",
    "name": "crude-oil",
    "richness": true,
    "order": "b-f"
  },
  {
    "type": "autoplace-control",
    "name": "enemy-base",
    "richness": true,
    "order": "d-a"
  },
  {
    "type": "damage-type",
    "name": "physical"
  },
  {
    "type": "damage-type",
    "name": "impact"
  },
  {
    "type": "damage-type",
    "name": "poison"
  },
  {
    "type": "damage-type",
    "name": "explosion"
  },
  {
    "type": "damage-type",
    "name": "fire"
  },
  {
    "type": "damage-type",
    "name": "laser"
  },
  {
    "type": "damage-type",
    "name": "acid"
  },
  {
    "type": "damage-type",
    "name": "electric"
  },
  {
    "type": "equipment-grid",
    "name": "small-equipment-grid",
    "width": 5,
    "height": 5,
    "equipment_categories": [
      "armor"
    ]
  },
  {
    "type": "equipment-grid",
    "name": "medium-equipment-grid",
    "width": 7,
    "height": 7,
    "equipment_categories": [
      "armor"
    ]
  },
  {
    "type": "equipment-grid",
    "name": "large-equipment-grid",
    "width": 10,
    "height": 10,
    "equipment_categories": [
      "armor"
    ]
  },
  {
    "type": "map-gen-presets",
    "name": "default",
    "default": {
      "default": true,
      "order": "a"
    },
    "undefined": {
      "order": "e",
      "basic_settings": {
        "autoplace_controls": {
          "coal": {
            "frequency": "very-low",
            "size": "high"
          },
          "undefined": {
            "frequency": "very-low",
            "size": "high"
          },
          "stone": {
            "frequency": "very-low",
            "size": "high"
          }
        },
        "terrain_segmentation": "very-low",
        "water": "high"
      },
      "advanced_settings": {
        "enemy_evolution": {
          "time_factor": 0.000002
        },
        "enemy_expansion": {
          "enabled": false
        }
      }
    }
  },
  {
    "type": "map-settings",
    "name": "map-settings",
    "pollution": {
      "enabled": true,
      "diffusion_ratio": 0.02,
      "min_to_diffuse": 15,
      "ageing": 1,
      "expected_max_per_chunk": 7000,
      "min_to_show_per_chunk": 700,
      "min_pollution_to_damage_trees": 3500,
      "pollution_with_max_forest_damage": 10000,
      "pollution_per_tree_damage": 2000,
      "pollution_restored_per_tree_damage": 500,
      "max_pollution_to_restore_trees": 1000
    },
    "enemy_evolution": {
      "enabled": true,
      "time_factor": 0.000004,
      "destroy_factor": 0.002,
      "pollution_factor": 0.000015
    },
    "enemy_expansion": {
      "enabled": true,
      "min_base_spacing": 3,
      "max_expansion_distance": 7,
      "friendly_base_influence_radius": 2,
      "enemy_building_influence_radius": 2,
      "building_coefficient": 0.1,
      "other_base_coefficient": 2,
      "neighbouring_chunk_coefficient": 0.5,
      "neighbouring_base_chunk_coefficient": 0.4,
      "max_colliding_tiles_coefficient": 0.9,
      "settler_group_min_size": 5,
      "settler_group_max_size": 20
    },
    "unit_group": {
      "min_group_gathering_time": 3600,
      "max_group_radius": 30,
      "min_group_radius": 5,
      "max_member_speedup_when_behind": 1.4,
      "max_member_slowdown_when_ahead": 0.6,
      "max_group_slowdown_factor": 0.3,
      "max_group_member_fallback_factor": 3,
      "member_disown_distance": 10,
      "tick_tolerance_when_member_arrives": 60,
      "max_gathering_unit_groups": 30,
      "max_unit_group_size": 200
    },
    "steering": {
      "default": {
        "radius": 1.2,
        "separation_force": 0.005,
        "separation_factor": 1.2,
        "force_unit_fuzzy_goto_behavior": false
      },
      "moving": {
        "radius": 3,
        "separation_force": 0.01,
        "separation_factor": 3,
        "force_unit_fuzzy_goto_behavior": false
      }
    },
    "path_finder": {
      "fwd2bwd_ratio": 5,
      "goal_pressure_ratio": 2,
      "max_steps_worked_per_tick": 100,
      "use_path_cache": true,
      "short_cache_size": 5,
      "long_cache_size": 25,
      "short_cache_min_cacheable_distance": 10,
      "short_cache_min_algo_steps_to_cache": 50,
      "long_cache_min_cacheable_distance": 30,
      "cache_max_connect_to_cache_steps_multiplier": 100,
      "cache_accept_path_start_distance_ratio": 0.2,
      "cache_accept_path_end_distance_ratio": 0.15,
      "negative_cache_accept_path_start_distance_ratio": 0.3,
      "negative_cache_accept_path_end_distance_ratio": 0.3,
      "cache_path_start_distance_rating_multiplier": 10,
      "cache_path_end_distance_rating_multiplier": 20,
      "stale_enemy_with_same_destination_collision_penalty": 30,
      "ignore_moving_enemy_collision_distance": 5,
      "enemy_with_different_destination_collision_penalty": 30,
      "general_entity_collision_penalty": 10,
      "general_entity_subsequent_collision_penalty": 3,
      "max_clients_to_accept_any_new_request": 10,
      "max_clients_to_accept_short_new_request": 100,
      "direct_distance_to_consider_short_request": 100,
      "short_request_max_steps": 1000,
      "short_request_ratio": 0.5,
      "min_steps_to_check_path_find_termination": 2000,
      "start_to_goal_cost_multiplier_to_terminate_path_find": 500
    },
    "max_failed_behavior_count": 3,
    "difficulty_settings": {
      "technology_price_multiplier": 1
    }
  },
  {
    "type": "tutorial",
    "name": "trains-basics",
    "scenario": "trains-basics",
    "order": "a[trains]-a[basic-train]",
    "technology": "railway",
    "icon": "__base__/graphics/technology/railway.png",
    "icon_size": 128,
    "related_items": [
      "rail",
      "locomotive"
    ]
  },
  {
    "type": "tutorial",
    "name": "trains-ghost-rail-planner",
    "scenario": "trains-ghost-rail-planner",
    "order": "a[trains]-b[ghost-rail-planner]",
    "technology": "construction-robotics",
    "icon": "__base__/graphics/technology/railway.png",
    "icon_size": 128,
    "related_items": [
      "rail",
      "construction-robot"
    ]
  },
  {
    "type": "tutorial",
    "name": "trains-stations",
    "scenario": "trains-stations",
    "order": "a[trains]-c[stations]",
    "technology": "automated-rail-transportation",
    "icon": "__base__/graphics/technology/automated-rail-transportation.png",
    "icon_size": 128,
    "related_items": [
      "train-stop",
      "locomotive",
      "cargo-wagon"
    ]
  },
  {
    "type": "tutorial",
    "name": "trains-basic-signals",
    "scenario": "trains-basic-signals",
    "order": "a[trains]-d[basic-signal]",
    "technology": "rail-signals",
    "icon": "__base__/graphics/technology/rail-signals.png",
    "icon_size": 128,
    "related_items": [
      "rail-signal",
      "locomotive"
    ]
  },
  {
    "type": "tutorial",
    "name": "trains-advanced-signals",
    "scenario": "trains-advanced-signals",
    "order": "a[trains]-e[advanced-signal]",
    "technology": "rail-signals",
    "icon": "__base__/graphics/technology/rail-signals.png",
    "icon_size": 128,
    "related_items": [
      "rail-signal",
      "rail-chain-signal",
      "locomotive"
    ]
  }
];