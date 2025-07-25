import { Skills } from '@shared/dictionaries/skills.dictionary';
import { Ability } from './five-e-class.model';
import { Feats } from '@shared/dictionaries/feat.dictionary';
import { BaseRecord } from './base.model';
import { ToolProficiencies } from '@shared/dictionaries/tool-proficiences.dictionary';

export interface Origin extends BaseRecord {
    abilityScores: Record<Ability, number>[]; // e.g., { Strength: 1, Dexterity: 2 }
    skills: Skills[];
    feats: Feats[];
    toolProficiencies: ToolProficiencies[];
    equipment: {
        guaranteed: string[];
        choices?: {
            from: string[];
            choose: number;
        }[];
    };
}

