const machines = [
    {
        Machine: 'Grazer',
        Class: 'Acquisition',
        Size: 'Lightweight',
        Cauldron: ['SIGMA', 'MU'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 8,
            Corrupted: 15,
        },
        HP: {
            Base: 150,
            HFW: 190,
            Corrupted: 225,
        },
        Weakness: {
            HZD: [],
            HFW: ['Shock'],
        },
        Strength: {
            HZD: [],
            HFW: ['Acid'],
        },
        AppearsIn: ['HZD', 'HFW'],
        Image: '../assets/images/grazer.webp',
        ImageAlt: 'Grazer Machine',
        Favorite: false,
    },
    {
        Machine: 'Burrower',
        Class: 'Recon',
        Size: 'Lightweight',
        Cauldron: ['MU'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 5,
            Apex: 10,
            Canister: 10,
            Tracker: 12,
            'Apex Canister': 18,
            'Apex Tracker': 19,
        },
        HP: {
            Base: 95,
            Canister: 175,
            Tracker: 280,
            Apex: 289,
            'Apex Canister': 310,
            'Apex Tracker': 420,
        },
        Weakness: ['Fire'],
        Strength: [],
        AppearsIn: ['HFW'],
        Image: '../assets/images/burrower.webp',
        ImageAlt: 'Burrower Machine',
        Favorite: false,
    },
    {
        Machine: 'Scrounger',
        Class: 'Acquisition',
        Size: 'Lightweight',
        Cauldron: ['MU'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 8,
            Apex: 14,
        },
        HP: {
            Base: 150,
            Apex: 380,
        },
        Weakness: ['Acid', 'Frost'],
        Strength: [],
        AppearsIn: ['HFW'],
        Image: '../assets/images/scrounger.webp',
        ImageAlt: 'Scrounger Machine',
        Favorite: false,
    },
    {
        Machine: 'Leaplasher',
        Class: 'Transport',
        Size: 'Lightweight',
        Cauldron: ['IOTA'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 13,
            Apex: 21,
        },
        HP: {
            Base: 375,
            Apex: 700,
        },
        Weakness: ['Purgewater'],
        Strength: ['Shock'],
        AppearsIn: ['HFW'],
        Image: '../assets/images/leaplasher.webp',
        ImageAlt: 'Leaplasher Machine',
        Favorite: false,
    },
    {
        Machine: 'Scrapper',
        Class: 'Acquisition',
        Size: 'Lightweight',
        Cauldron: ['SIGMA', 'MU'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 8,
            Corrupted: 15,
            Daemonic: 17,
            HFW: 11,
            Apex: 18,
        },
        HP: {
            Base: 220,
            Corrupted: 330,
            Daemonic: 385,
            HFW: 235,
            Apex: 353,
        },
        Weakness: {
            HZD: [],
            HFW: ['Shock'],
        },
        Strength: {
            HZD: [],
            HFW: ['Plasma'],
        },
        AppearsIn: ['HZD', 'HFW'],
        Image: '../assets/images/scrapper.webp',
        ImageAlt: 'Scrapper Machine',
        Favorite: false,
    },
    {
        Machine: 'Spikesnout',
        Class: 'Acquisition',
        Size: 'Lightweight',
        Cauldron: ['CHI'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 14,
            Apex: 24,
        },
        HP: {
            Base: 430,
            Apex: 840,
        },
        Weakness: ['Fire', 'Purgewater'],
        Strength: ['Shock'],
        AppearsIn: ['HFW'],
        Image: '../assets/images/spikesnout.webp',
        ImageAlt: 'Spikesnout Machine',
        Favorite: false,
    },
    {
        Machine: 'Skydrifter',
        Class: 'Recon',
        Size: 'Lightweight',
        Cauldron: ['IOTA'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 16,
            Apex: 26,
        },
        HP: {
            Base: 450,
            Apex: 675,
        },
        Weakness: ['Frost'],
        Strength: ['Fire'],
        AppearsIn: ['HFW'],
        Image: '../assets/images/skydrifter.webp',
        ImageAlt: 'Skydrifter Machine',
        Favorite: false,
    },
    {
        Machine: 'Plowhorn',
        Class: 'Acquisition',
        Size: 'Midweight',
        Cauldron: ['TAU'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 12,
            Apex: 22,
        },
        HP: {
            Base: 800,
            Apex: 1200,
        },
        Weakness: ['Acid'],
        Strength: ['Frost', 'Purgewater'],
        AppearsIn: ['HFW'],
        Image: '../assets/images/plowhorn.webp',
        ImageAlt: 'Plowhorn Machine',
        Favorite: false,
    },
    {
        Machine: 'Strider',
        Class: 'Acquisition',
        Size: 'Lightweight',
        Cauldron: ['PSI'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 5,
            Corrupted: 12,
        },
        HP: {
            Base: 105,
            Corrupted: 158,
        },
        Weakness: [],
        Strength: [],
        AppearsIn: ['HZD'],
        Image: '../assets/images/strider.webp',
        ImageAlt: 'Strider Machine',
        Favorite: false,
    },
    {
        Machine: 'Broadhead',
        Class: 'Acquisition',
        Size: 'Lightweight',
        Cauldron: ['PSI'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 10,
            Corrupted: 17,
        },
        HP: {
            Base: 175,
            Corrupted: 263,
        },
        Weakness: [],
        Strength: [],
        AppearsIn: ['HZD'],
        Image: '../assets/images/broadhead.webp',
        ImageAlt: 'Broadhead Machine',
        Favorite: false,
    },
    {
        Machine: 'Charger',
        Class: 'Acquisition',
        Size: 'Lightweight',
        Cauldron: ['PSI'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 13,
            Corrupted: 18,
        },
        HP: {
            Base: 325,
            Corrupted: 488,
            HFW: 150,
        },
        Weakness: {
            HZD: [],
            HFW: ['Shock'],
        },
        Strength: {
            HZD: [],
            HFW: [],
        },
        AppearsIn: ['HZD', 'HFW'],
        Image: '../assets/images/charger.webp',
        ImageAlt: 'Charger Machine',
        Favorite: false,
    },
    {
        Machine: 'Lancehorn',
        Class: 'Acquisition',
        Size: 'Lightweight',
        Cauldron: ['SIGMA', 'IOTA'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 13,
        },
        HP: {
            Base: 275,
            HFW: 390,
        },
        Weakness: {
            HZD: [],
            HFW: ['Fire'],
        },
        Strength: {
            HZD: [],
            HFW: ['Frost'],
        },
        AppearsIn: ['HZD', 'HFW'],
        Image: '../assets/images/lancehorn.webp',
        ImageAlt: 'Lancehorn Machine',
        Favorite: false,
    },
    {
        Machine: 'Longleg',
        Class: 'Recon',
        Size: 'Midweight',
        Cauldron: ['RHO', 'IOTA'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 13,
            Corrupted: 20,
            Apex: 23,
            Daemonic: 23,
        },
        HP: {
            Base: 750,
            Apex: 1125,
            Corrupted: 1125,
            Daemonic: 1313,
        },
        Weakness: {
            HZD: ['Shock'],
            HFW: ['Shock'],
        },
        Strength: {
            HZD: [],
            HFW: ['Acid'],
        },
        AppearsIn: ['HZD', 'HFW'],
        Image: '../assets/images/longleg.webp',
        ImageAlt: 'Longleg Machine',
        Favorite: false,
    },
    {
        Machine: 'Bristleback',
        Class: 'Acquisition',
        Size: 'Midweight',
        Cauldron: ['TAU'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 13,
            Apex: 23,
        },
        HP: {
            Base: 320,
            Apex: 650,
        },
        Weakness: ['Shock'],
        Strength: ['Acid', 'Fire'],
        AppearsIn: ['HFW'],
        Image: '../assets/images/bristleback.webp',
        ImageAlt: 'Bristleback Machine',
        Favorite: false,
    },
    {
        Machine: 'Fanghorn',
        Class: 'Acquisition',
        Size: 'Lightweight',
        Cauldron: ['MU'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 14,
        },
        HP: {
            Base: 450,
        },
        Weakness: ['Frost'],
        Strength: ['Fire'],
        AppearsIn: ['HFW'],
        Image: '../assets/images/fanghorn.webp',
        ImageAlt: 'Fanghorn Machine',
        Favorite: false,
    },
    {
        Machine: 'Watcher',
        Class: 'Recon',
        Size: 'Lightweight',
        Cauldron: ['PSI'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 5,
            Corrupted: 12,
            Daemonic: 15,
        },
        HP: {
            Base: 90,
            Corrupted: 135,
            Daemonic: 158,
        },
        Weakness: [],
        Strength: [],
        AppearsIn: ['HZD'],
        Image: '../assets/images/watcher.webp',
        ImageAlt: 'Watcher Machine',
        Favorite: false,
    },
    {
        Machine: 'Redeye Watcher',
        Class: 'Recon',
        Size: 'Lightweight',
        Cauldron: ['PSI', 'CHI'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 10,
            HFW: 15,
            Corrupted: 17,
            Daemonic: 17,
            Apex: 27,
        },
        HP: {
            Base: 200,
            Corrupted: 400,
            Daemonic: 350,
            HFW: 300,
            Apex: 600,
        },
        Weakness: {
            HZD: [],
            HFW: ['Shock'],
        },
        Strength: {
            HZD: [],
            HFW: ['Fire', 'Plasma'],
        },
        AppearsIn: ['HZD', 'HFW'],
        Image: '../assets/images/redeye_watcher.webp',
        ImageAlt: 'Redeye Watcher Machine',
        Favorite: false,
    },
    {
        Machine: 'Widemaw',
        Class: 'Acquisition',
        Size: 'Midweight',
        Cauldron: ['MU'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 15,
            Apex: 27,
        },
        HP: {
            Base: 900,
            Apex: 1350,
        },
        Weakness: ['Purgewater'],
        Strength: ['Fire', 'Freeze', 'Shock', 'Acid', 'Plasma'],
        AppearsIn: ['HFW'],
    },
    {
        Machine: 'Clawstrider',
        Class: 'Combat',
        Size: 'Midweight',
        Cauldron: ['IOTA'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 16,
            Apex: 26,
        },
        HP: {
            Base: 700,
            Elemental: 900,
            Apex: 1400,
            'Apex Elemental': 1500,
        },
        Weakness: ['Shock'],
        Strength: ['Acid'],
        AppearsIn: ['HFW'],
        Image: '../assets/images/widemaw.webp',
        ImageAlt: 'Widemaw Machine',
        Favorite: false,
    },
    {
        Machine: 'Corruptor',
        Class: 'Chariot',
        Size: 'Midweight',
        Cauldron: [],
        Creator: 'FAS',
        ChallengeLevel: {
            Base: 18,
        },
        HP: {
            Base: 1900,
        },
        Weakness: {
            HZD: ['Fire'],
            HFW: ['Fire'],
        },
        Strength: {
            HZD: ['Corruption'],
            HFW: ['Berserk'],
        },
        AppearsIn: ['HZD', 'HFW'],
        Image: '../assets/images/corruptor.webp',
        ImageAlt: 'Corruptor Machine',
        Favorite: false,
    },
    {
        Machine: 'Bellowback',
        Class: 'Transport',
        Size: 'Midweight',
        Cauldron: ['XI', 'IOTA'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 18,
            Apex: 29,
        },
        HP: {
            Base: 1600,
            Apex: 2400,
        },
        AppearsIn: ['HZD', 'HFW'],
        Image: '../assets/images/bellowback.webp',
        ImageAlt: 'Bellowback Machine',
        Favorite: false,
    },
    {
        Machine: 'Glinthawk',
        Class: 'Acquisition',
        Size: 'Lightweight',
        Cauldron: ['IOTA'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 18,
            Corrupted: 23,
            HFW: 12,
            Apex: 19,
        },
        HP: {
            Base: 450,
            Corrupted: 675,
            HFW: 240,
            Apex: 360,
        },
        Weakness: {
            HZD: ['Fire'],
            HFW: ['Fire'],
        },
        Strength: {
            HZD: ['Freeze'],
            HFW: ['Freeze'],
        },
        AppearsIn: ['HZD', 'HFW'],
        Image: '../assets/images/glinthawk.webp',
        ImageAlt: 'Glinthawk Machine',
        Favorite: false,
    },
    {
        Machine: 'Sunwing',
        Class: 'Acquisition',
        Size: 'Midweight',
        Cauldron: ['GEMINI'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 20,
        },
        HP: {
            Base: 1100,
        },
        Weakness: {
            HFW: ['Purgewater'],
        },
        Strength: {
            HFW: ['Plasma'],
        },
        AppearsIn: ['HZD', 'HFW'],
        Image: '../assets/images/sunwing.webp',
        ImageAlt: 'Sunwing Machine',
        Favorite: false,
    },
    {
        Machine: 'Rockbreaker',
        Class: 'Acquisition',
        Size: 'Heavyweight',
        Cauldron: ['ZETA', 'KAPPA'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 23,
            Corrupted: 34,
            HFW: 25,
            Apex: 40,
            Daemonic: 40,
        },
        HP: {
            Base: 3500,
            Corrupted: 5250,
            HFW: 2600,
            Apex: 5400,
            Daemonic: 6125,
        },
        Weakness: {
            HZD: ['Freeze'],
            HFW: ['Freeze', 'Fire'],
        },
        Strength: {
            HZD: ['Fire'],
            HFW: ['Fire'],
        },
        AppearsIn: ['HZD', 'HFW'],
        Image: '../assets/images/rockbreaker.webp',
        ImageAlt: 'Rockbreaker Machine',
        Favorite: false,
    },
    {
        Machine: 'Frostclaw',
        Class: 'Acquisition',
        Size: 'Midweight',
        Cauldron: ['EPSILON', 'CHI'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 30,
            HFW: 24,
            Apex: 38,
            Daemonic: 36,
        },
        HP: {
            Base: 3750,
            HFW: 2800,
            Apex: 4200,
            Daemonic: 4763,
        },
        Weakness: {
            HZD: ['Fire'],
            HFW: ['Fire', 'Shock'],
        },
        Strength: {
            HZD: ['Freeze'],
            HFW: ['Freeze'],
        },
        AppearsIn: ['HZD', 'HFW'],
        Image: '../assets/images/frostclaw.webp',
        ImageAlt: 'Frostclaw Machine',
        Favorite: false,
    },
    {
        Machine: 'Tallneck',
        Class: 'Communication',
        Size: 'Heavyweight',
        Cauldron: ['PSI'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 'None',
        },
        HP: {
            Base: 'None',
        },
        Weakness: {},
        Strength: {},
        AppearsIn: ['HZD', 'HFW'],
        Image: '../assets/images/tallneck.webp',
        ImageAlt: 'Tallneck Machine',
        Favorite: false,
    },
    {
        Machine: 'Bilegut',
        Class: 'Acquisition',
        Size: 'Heavyweight',
        Cauldron: ['THETA'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 42,
            Apex: 60,
        },
        HP: {
            Base: 6700,
            Apex: 10050,
        },
        Weakness: {
            HFW: ['Fire', 'Frost'],
        },
        Strength: {
            HFW: ['Purgewater', 'Acid'],
        },
        AppearsIn: ['HFW'],
        Image: '../assets/images/bilegut.webp',
        ImageAlt: 'Bilegut Machine',
        Favorite: false,
    },
    {
        Machine: 'Control Tower',
        Class: 'Unknown',
        Size: '-',
        Cauldron: ['PSI'],
        Creator: 'HEPHAESTUS',
        ChallengeLevel: {
            Base: 'None',
        },
        HP: { Base: 'None' },
        Weakness: {},
        Strength: {},
        AppearsIn: ['HZD'],
        Image: '../assets/images/control_tower.webp',
        ImageAlt: 'Control Tower Machine',
        Favorite: false,
    },
];

export default machines;
