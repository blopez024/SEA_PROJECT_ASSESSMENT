const machines = [
    {
        "Machine": "Grazer",
        "Class": "Acquisition",
        "Size": "Lightweight",
        "Cauldron": ["SIGMA", "MU"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 8,
            "Corrupted": 15
        },
        "HP": {
            "Base": 150,
            "HFW": 190,
            "Corrupted": 225
        },
        "Weakness": {
            "HZD": [],
            "HFW": ["Shock"]
        },
        "Strength": {
            "HZD": [],
            "HFW": ["Acid"]
        },
        "AppearsIn": ["HZD", "HFW"]
    },
    {
        "Machine": "Burrower",
        "Class": "Recon",
        "Size": "Lightweight",
        "Cauldron": ["MU"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 5,
            "Apex": 10,
            "Canister": 10,
            "Tracker": 12,
            "Apex Canister": 18,
            "Apex Tracker": 19
        },
        "HP": {
            "Base": 95,
            "Canister": 175,
            "Tracker": 280,
            "Apex": 289,
            "Apex Canister": 310,
            "Apex Tracker": 420
        },
        "Weakness": ["Fire"],
        "Strength": [],
        "AppearsIn": ["HFW"]
    },
    {
        "Machine": "Scrounger",
        "Class": "Acquisition",
        "Size": "Lightweight",
        "Cauldron": ["MU"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 8,
            "Apex": 14
        },
        "HP": {
            "Base": 150,
            "Apex": 380
        },
        "Weakness": ["Acid", "Frost"],
        "Strength": [],
        "AppearsIn": ["HFW"]
    },
    {
        "Machine": "Leaplasher",
        "Class": "Transport",
        "Size": "Lightweight",
        "Cauldron": ["IOTA"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 13,
            "Apex": 21
        },
        "HP": {
            "Base": 375,
            "Apex": 700
        },
        "Weakness": ["Purgewater"],
        "Strength": ["Shock"],
        "AppearsIn": ["HFW"]
    },
    {
        "Machine": "Scrapper",
        "Class": "Acquisition",
        "Size": "Lightweight",
        "Cauldron": ["SIGMA", "MU"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 8,
            "Corrupted": 15,
            "Daemonic": 17,
            "HFW": 11,
            "Apex": 18
        },
        "HP": {
            "Base": 220,
            "Corrupted": 330,
            "Daemonic": 385,
            "HFW": 235,
            "Apex": 353
        },
        "Weakness": {
            "HZD": [],
            "HFW": ["Shock"]
        },
        "Strength": {
            "HZD": [],
            "HFW": ["Plasma"]
        },
        "AppearsIn": ["HZD", "HFW"]
    },
    {
        "Machine": "Spikesnout",
        "Class": "Acquisition",
        "Size": "Lightweight",
        "Cauldron": ["CHI"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 14,
            "Apex": 24
        },
        "HP": {
            "Base": 430,
            "Apex": 840
        },
        "Weakness": ["Fire", "Purgewater"],
        "Strength": ["Shock"],
        "AppearsIn": ["HFW"]
    },
    {
        "Machine": "Skydrifter",
        "Class": "Recon",
        "Size": "Lightweight",
        "Cauldron": ["IOTA"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 16,
            "Apex": 26
        },
        "HP": {
            "Base": 450,
            "Apex": 675
        },
        "Weakness": ["Frost"],
        "Strength": ["Fire"],
        "AppearsIn": ["HFW"]
    },
    {
        "Machine": "Plowhorn",
        "Class": "Acquisition",
        "Size": "Midweight",
        "Cauldron": ["TAU"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 12,
            "Apex": 22
        },
        "HP": {
            "Base": 800,
            "Apex": 1200
        },
        "Weakness": ["Acid"],
        "Strength": ["Frost", "Purgewater"],
        "AppearsIn": ["HFW"]
    },
    {
        "Machine": "Strider",
        "Class": "Acquisition",
        "Size": "Lightweight",
        "Cauldron": ["PSI"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 5,
            "Corrupted": 12
        },
        "HP": {
            "Base": 105,
            "Corrupted": 158
        },
        "Weakness": [],
        "Strength": [],
        "AppearsIn": ["HZD"]
    },
    {
        "Machine": "Broadhead",
        "Class": "Acquisition",
        "Size": "Lightweight",
        "Cauldron": ["PSI"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 10,
            "Corrupted": 17
        },
        "HP": {
            "Base": 175,
            "Corrupted": 263
        },
        "Weakness": [],
        "Strength": [],
        "AppearsIn": ["HZD"]
    },
    {
        "Machine": "Charger",
        "Class": "Acquisition",
        "Size": "Lightweight",
        "Cauldron": ["PSI"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 13,
            "Corrupted": 18
        },
        "HP": {
            "Base": 325,
            "Corrupted": 488,
            "HFW": 150
        },
        "Weakness": {
            "HZD": [],
            "HFW": ["Shock"]
        },
        "Strength": {
            "HZD": [],
            "HFW": []
        },
        "AppearsIn": ["HZD", "HFW"]
    },
    {
        "Machine": "Lancehorn",
        "Class": "Acquisition",
        "Size": "Lightweight",
        "Cauldron": ["SIGMA", "IOTA"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 13
        },
        "HP": {
            "HZD": 275,
            "HFW": 390
        },
        "Weakness": {
            "HZD": [],
            "HFW": ["Fire"]
        },
        "Strength": {
            "HZD": [],
            "HFW": ["Frost"]
        },
        "AppearsIn": ["HZD", "HFW"]
    },
    {
        "Machine": "Longleg",
        "Class": "Recon",
        "Size": "Midweight",
        "Cauldron": ["RHO", "IOTA"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 13,
            "Corrupted": 20,
            "Apex": 23,
            "Daemonic": 23
        },
        "HP": {
            "Base": 750,
            "Apex": 1125,
            "Corrupted": 1125,
            "Daemonic": 1313
        },
        "Weakness": {
            "HZD": ["Shock"],
            "HFW": ["Shock"]
        },
        "Strength": {
            "HZD": [],
            "HFW": ["Acid"]
        },
        "AppearsIn": ["HZD", "HFW"]
    },
    {
        "Machine": "Bristleback",
        "Class": "Acquisition",
        "Size": "Midweight",
        "Cauldron": ["TAU"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 13,
            "Apex": 23
        },
        "HP": {
            "Base": 320,
            "Apex": 650
        },
        "Weakness": ["Shock"],
        "Strength": ["Acid", "Fire"],
        "AppearsIn": ["HFW"]
    },
    {
        "Machine": "Fanghorn",
        "Class": "Acquisition",
        "Size": "Lightweight",
        "Cauldron": ["MU"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 14
        },
        "HP": {
            "Base": 450
        },
        "Weakness": ["Frost"],
        "Strength": ["Fire"],
        "AppearsIn": ["HFW"]
    },
    {
        "Machine": "Watcher",
        "Class": "Recon",
        "Size": "Lightweight",
        "Cauldron": ["PSI"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 5,
            "Corrupted": 12,
            "Daemonic": 15
        },
        "HP": {
            "Base": 90,
            "Corrupted": 135,
            "Daemonic": 158
        },
        "Weakness": [],
        "Strength": [],
        "AppearsIn": ["HZD"]
    },
    {
        "Machine": "Redeye Watcher",
        "Class": "Recon",
        "Size": "Lightweight",
        "Cauldron": ["PSI", "CHI"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "HZD": 10,
            "HFW": 15,
            "Corrupted": 17,
            "Daemonic": 17,
            "Apex": 27
        },
        "HP": {
            "HZD": 200,
            "Corrupted": 400,
            "Daemonic": 350,
            "HFW": 300,
            "Apex": 600
        },
        "Weakness": {
            "HZD": [],
            "HFW": ["Shock"]
        },
        "Strength": {
            "HZD": [],
            "HFW": ["Fire", "Plasma"]
        },
        "AppearsIn": ["HZD", "HFW"]
    },
    {
        "Machine": "Widemaw",
        "Class": "Acquisition",
        "Size": "Midweight",
        "Cauldron": ["MU"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 15,
            "Apex": 27
        },
        "HP": {
            "Base": 900,
            "Apex": 1350
        },
        "Weakness": ["Purgewater"],
        "Strength": ["Fire", "Freeze", "Shock", "Acid", "Plasma"],
        "AppearsIn": ["HFW"]
    },
    {
        "Machine": "Clawstrider",
        "Class": "Combat",
        "Size": "Midweight",
        "Cauldron": ["IOTA"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 16,
            "Apex": 26
        },
        "HP": {
            "Base": 700,
            "Elemental": 900,
            "Apex": 1400,
            "Apex Elemental": 1500
        },
        "Weakness": ["Shock"],
        "Strength": ["Acid"],
        "AppearsIn": ["HFW"]
    },
    {
        "Machine": "Corruptor",
        "Class": "Chariot",
        "Size": "Midweight",
        "Cauldron": [],
        "Creator": "FAS",
        "ChallengeLevel": {
            "Base": 18
        },
        "HP": {
            "Base": 1900
        },
        "Weakness": {
            "HZD": ["Fire"],
            "HFW": ["Fire"]
        },
        "Strength": {
            "HZD": ["Corruption"],
            "HFW": ["Berserk"]
        },
        "AppearsIn": ["HZD", "HFW"]
    },
    {
        "Machine": "Bellowback",
        "Class": "Transport",
        "Size": "Midweight",
        "Cauldron": ["XI", "IOTA"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 18,
            "Apex": 29
        },
        "HP": {
            "Base": 1600,
            "Apex": 2400
        },
        "AppearsIn": ["HZD", "HFW"]
    },
    {
        "Machine": "Glinthawk",
        "Class": "Acquisition",
        "Size": "Lightweight",
        "Cauldron": ["IOTA"],
        "Creator": "HEPHAESTUS",
        "ChallengeLevel": {
            "Base": 18,
            "Corrupted": 23,
            "HFW": 12,
            "Apex": 19
        },
        "HP": {
            "HZD": 450,
            "Corrupted": 675,
            "HFW": 240,
            "Apex": 360
        },
        "Weakness": {
            "HZD": ["Fire"],
            "HFW": ["Fire"]
        },
        "Strength": {
            "HZD": ["Freeze"],
            "HFW": ["Freeze"]
        },
        "AppearsIn": ["HZD", "HFW"]
    }
]

export default machines;