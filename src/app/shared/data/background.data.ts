import { BackgroundModel } from '@shared/models/origin.model';
import { Ability } from '@shared/dictionaries/ability.dictionary';
import { BackgroundDictionary } from '@shared/dictionaries/background.dictionary';
import { Skills } from '@shared/dictionaries/skills.dictionary';

export const BACKGROUNDS: BackgroundModel[] = [
    {
        id: BackgroundDictionary.Acolyte,
        name: BackgroundDictionary.Acolyte,
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
