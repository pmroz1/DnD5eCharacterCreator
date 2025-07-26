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
        imageUrl: 'assets/images/origins/acolyte.png',
        description: 'You have spent your life in the service of a temple to a specific god.',
    },
    {
        id: BackgroundDictionary.Artisan,
        name: BackgroundDictionary.Artisan,
        abilities: [Ability.Intelligence, Ability.Dexterity],
        skills: [Skills.Athletics, Skills.Perception],
        feats: [],
        toolProficiencies: [],
        equipment: {
            guaranteed: [],
            choices: [],
        },
        imageUrl: 'assets/images/origins/artisan.png',
        description: 'You have honed your skills in a specific craft or trade.',
    },
    {
        id: BackgroundDictionary.Criminal,
        name: BackgroundDictionary.Criminal,
        abilities: [Ability.Dexterity, Ability.Charisma],
        skills: [Skills.Deception, Skills.Stealth],
        feats: [],
        toolProficiencies: [],
        equipment: {
            guaranteed: [],
            choices: [],
        },
        imageUrl: 'assets/images/origins/criminal.png',
        description: 'You have a history of illegal activities and dealings.',
    },
    {
        id: BackgroundDictionary.FolkHero,
        name: BackgroundDictionary.FolkHero,
        abilities: [Ability.Strength, Ability.Charisma],
        skills: [Skills.AnimalHandling, Skills.Survival],
        feats: [],
        toolProficiencies: [],
        equipment: {
            guaranteed: [],
            choices: [],
        },
        imageUrl: 'assets/images/origins/folk-hero.png',
        description: 'You are a champion of the common people, known for your deeds of heroism.',
    },
];
