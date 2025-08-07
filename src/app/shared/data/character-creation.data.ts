export interface BackgroundStep {
    id: number;
    name: string;
    icon: string;
}

export interface CommonLanguage {
    name: string;
    description: string;
}

export interface PersonalityTrait {
    id: number;
    description: string;
}

export interface CharacterIdeal {
    id: number;
    name: string;
    description: string;
}

export const BACKGROUND_STEPS_LIST: BackgroundStep[] = [
    { id: 0, name: 'Race', icon: 'pi-star-fill' },
    { id: 1, name: 'Background', icon: 'pi-briefcase' },
    { id: 2, name: 'Languages', icon: 'pi-comments' },
    { id: 3, name: 'History', icon: 'pi-book' },
];

export const COMMON_LANGUAGES: CommonLanguage[] = [
    { name: 'Common', description: 'The most widely spoken language' },
    { name: 'Elvish', description: 'Language of the elves' },
    { name: 'Dwarvish', description: 'Language of the dwarves' },
    { name: 'Halfling', description: 'Language of the halflings' },
    { name: 'Draconic', description: 'Ancient language of dragons' },
    { name: 'Orcish', description: 'Language of orcs and related creatures' },
    { name: 'Giant', description: 'Language of giants' },
    { name: 'Gnomish', description: 'Language of the gnomes' },
    { name: 'Goblin', description: 'Language of goblins and related creatures' },
];

export const PERSONALITY_TRAITS: PersonalityTrait[] = [
    { id: 1, description: 'I judge people by their actions, not their words.' },
    { id: 2, description: "If someone is in trouble, I'm always ready to lend help." },
    {
        id: 3,
        description: 'When I set my mind to something, I follow through no matter what gets in my way.',
    },
    {
        id: 4,
        description: 'I have a strong sense of fair play and always try to find the most equitable solution.',
    },
    {
        id: 5,
        description: "I'm confident in my own abilities and do what I can to instill confidence in others.",
    },
    { id: 6, description: 'Thinking is for other people. I prefer action.' },
];

export const CHARACTER_IDEALS: CharacterIdeal[] = [
    {
        id: 1,
        name: 'Respect',
        description: 'People deserve to be treated with dignity and respect.',
    },
    {
        id: 2,
        name: 'Fairness',
        description: 'No one should get preferential treatment before the law.',
    },
    {
        id: 3,
        name: 'Freedom',
        description: 'Tyrants must not be allowed to oppress the people.',
    },
    { id: 4, name: 'Might', description: 'If I become strong, I can take what I want.' },
    {
        id: 5,
        name: 'Sincerity',
        description: "There's no good in pretending to be something I'm not.",
    },
    {
        id: 6,
        name: 'Destiny',
        description: 'Nothing and no one can steer me away from my higher calling.',
    },
];
