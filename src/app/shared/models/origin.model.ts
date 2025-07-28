import { Skills } from '@shared/dictionaries/skills.dictionary';
import { BaseRecord } from './base.model';
import { ToolProficiencies } from '@shared/dictionaries/tool-proficiences.dictionary';
import { Ability } from '@shared/dictionaries/ability.dictionary';
import { FeatModel } from './feat.model';
import { Feat } from '@shared/dictionaries/feat.dictionary';

export interface BackgroundModel extends BaseRecord {
    abilities: Ability[]; // e.g., { Strength: 1, Dexterity: 2 }
    skills: Skills[];
    feats: Feat[];
    toolProficiencies: ToolProficiencies[];
    equipment: {
        guaranteed: string[];
        choices?: {
            from: string[];
            choose: number;
        }[];
    };
}

