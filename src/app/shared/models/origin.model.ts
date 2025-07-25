import { Skills } from '@shared/dictionaries/skills.dictionary';
import { Feats } from '@shared/dictionaries/feat.dictionary';
import { BaseRecord } from './base.model';
import { ToolProficiencies } from '@shared/dictionaries/tool-proficiences.dictionary';
import { Ability } from '@shared/dictionaries/ability.dictionary';

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

