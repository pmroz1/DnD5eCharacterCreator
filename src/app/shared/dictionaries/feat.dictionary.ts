export interface Feats {
    name: string;
    description?: string;
    featureType?: FeatureType;
}

export enum FeatureType {
    FightingStyle = 'Fighting Style',
    EpicBoon = 'Epic Boon',
    General = 'General',
    Origin = 'Origin'
}

// Ability Score Improvement*	General
// Alert	Origin
// Archery	Fighting Style
// Boon of Combat Prowess	Epic Boon
// Boon of Dimensional Travel	Epic Boon
// Boon of Fate	Epic Boon
// Boon of Irresistable Offense	Epic Boon
// Boon of the Night Spirit	Epic Boon
// Boon of Spell Recall	Epic Boon
// Boon of Truesight	Epic Boon
// Defense	Fighting Style
// Grappler	General
// Great Weapon Fighting	Fighting Style
// Magic Initiate*	Origin
// Savage Attacker	Origin
// Skilled*	Origin
// Two-Weapon Fighting	Fighting Style