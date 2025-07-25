import { Skills } from '@shared/dictionaries/skills.dictionary';
import { Ability } from './five-e-class.model';
import { Feats } from '@shared/dictionaries/feat.dictionary';
import { BaseRecord } from './base.model';

export interface Origin extends BaseRecord {
    abilityScores: Record<Ability, number>[]; // e.g., { Strength: 1, Dexterity: 2 }
    skills: Skills[];
    feats: Feats[];
    toolProficiencies: string[];
    equipment: {
        guaranteed: string[];
        choices?: {
            from: string[];
            choose: number;
        }[];
    };
}

// Ability Scores: Intelligence, Wisdom, Charisma

// Feat: Magic Initiate (Cleric) (see “Feats”)

// Skill Proficiencies: Insight and Religion

// Tool Proficiency: Calligrapher’s Supplies

// Equipment: Choose A or B: (A) Calligrapher’s Supplies, Book (prayers), Holy Symbol, Parchment (10 sheets), Robe, 8 GP; or (B) 50 GP

// You devoted yourself to service in a temple, either nestled in a town or secluded in a sacred grove. There you performed rites in honor of a god or pantheon. You served under a priest and studied religion. Thanks to your priest’s instruction and your own devotion, you also learned how to channel a modicum of divine power in service to your place of worship and the people who prayed there.
