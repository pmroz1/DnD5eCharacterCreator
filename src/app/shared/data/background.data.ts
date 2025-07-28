import { BackgroundModel } from '@shared/models/origin.model';
import { Ability } from '@shared/dictionaries/ability.dictionary';
import { BackgroundDictionary } from '@shared/dictionaries/background.dictionary';
import { Skills } from '@shared/dictionaries/skills.dictionary';
import { Feat } from '@shared/dictionaries/feat.dictionary';

export const BACKGROUNDS: BackgroundModel[] = [
    {
        id: BackgroundDictionary.Acolyte,
        name: BackgroundDictionary.Acolyte,
        abilities: [Ability.Intelligence, Ability.Wisdom, Ability.Charisma],
        skills: [Skills.Insight, Skills.Religion],
        feats: [Feat.MagicInitiate,],
        toolProficiencies: [],
        equipment: {
            guaranteed: [],
            choices: [],
        },
        imageUrl: 'assets/images/origins/acolyte.png',
        description: `You devoted your life to the service in a temple, either nestled in a bustling city or secluded in a sacred grove.
             There you performed rituals, offered guidance to the faithful, and learned the tenets of your faith.
             You served under a priest and studied the teachings of your deity, gaining insight into the spiritual world.
             Thanks to your priest instruction, you learned the ways of your faith and the rituals that bind it.
            `,
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
