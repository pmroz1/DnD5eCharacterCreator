import { Skills } from '@shared/dictionaries/skills.dictionary';
import { BaseRecord } from './base.model';
import { ToolProficiencies } from '@shared/dictionaries/tool-proficiences.dictionary';
import { Ability } from '@shared/dictionaries/ability.dictionary';
import { Feat } from '@shared/dictionaries/feat.dictionary';

export interface BackgroundModel extends BaseRecord {
    abilities: Ability[];
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

