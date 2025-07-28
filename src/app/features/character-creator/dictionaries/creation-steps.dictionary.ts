export enum CreationSteps {
    ClassSelection = 'Determine Class',
    BackgroundSelection = 'Determine Background',
    AbilityScores = 'Determine Ability Scores',
    Alignment = 'Determine Alignment',
    Details = 'Provide Details',
    Overview = 'Review Character',
    // sub-steps
    Species = 'Select Your Species',
    Background = 'Select Your Background',
    Languages = 'Select Your Languages',
    Equipment = 'Select Your Equipment',
    Spells = 'Select Your Spells',
    Feats = 'Select Your Feats',
    Skills = 'Select Your Skills',
    PersonalityTraits = 'Select Your Personality Traits',
    Ideals = 'Select Your Ideals',
    Bonds = 'Select Your Bonds',
}

export enum CreationStepsDescriptions {
    ClassSelection = "Every adventurer is a member of a class. A class broadly describes a character's vocation, special talents, and favored tactics.",
    BackgroundSelection = 'Every character has a background that reflects their life before becoming an adventurer. Choose a background that fits your character concept.',
    AbilityScores = "Assign your character's ability scores. These scores represent your character's innate talents and skills.",
    Alignment = "Select your character's alignment. This defines your character's moral and ethical outlook.",
    Details = 'Provide additional details about your character, such as their appearance, personality traits, and backstory.',
    Overview = 'Review your character to ensure all details are correct and complete.',
    Species = 'Select your character’s species, which determines their physical traits and abilities.',
    Background = 'Select your character’s background, which provides additional skills and proficiencies.',
    Languages = 'Choose the languages your character can speak, read, and write.',
    Equipment = 'Select the equipment your character will start with, including weapons, armor, and other gear.',
    Spells = 'If your character can cast spells, select the spells they know or have prepared.',
    Feats = 'Choose any feats your character has, which provide special abilities or enhancements.',
}

export enum BackgroundSteps {
    Race = 'Choose Your Race',
    Background = 'Choose Your Character Background',
    Languages = 'Choose Your Languages',
    PastAndPresent = 'Imagine Your Past and Present',
}

export const LinkPreNote = 'Read more about this step:';
