import { OriginModel } from '@shared/models/origin.model';
import { Ability } from '@shared/dictionaries/ability.dictionary';
import { OriginDictionary } from '@shared/dictionaries/origin.dictionary';
import { Skills } from '@shared/dictionaries/skills.dictionary';

export const ORIGINS: OriginModel[] = [
    {
        id: OriginDictionary.Acolyte,
        name: OriginDictionary.Acolyte,
        abilities: [Ability.Intelligence, Ability.Wisdom, Ability.Charisma],
        skills: [Skills.Insight, Skills.Religion],
        feats: [],
        toolProficiencies: [],
        equipment: {
            guaranteed: [],
            choices: [],
        },
        imageUrl: 'assets/images/origins/acolyte.jpg',
        description: 'You have spent your life in the service of a temple to a specific god.',
    },
];
