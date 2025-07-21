export enum CreationSteps {
    ClassSelection = 'class-selection',
    RaceSelection = 'race-selection',
    OriginSelection = 'origin-selection',
    AbilityScores = 'ability-scores',
    Alignment = 'alignment',
    Details = 'details',
}

export const CreationStepsTitles = {
    [CreationSteps.ClassSelection]: 'Class Selection',
    [CreationSteps.RaceSelection]: 'Race Selection',
    [CreationSteps.OriginSelection]: 'Origin Selection',
    [CreationSteps.AbilityScores]: 'Ability Scores',
    [CreationSteps.Alignment]: 'Alignment',
    [CreationSteps.Details]: 'Details',
};

export const CreationStepsDescriptions = {
    [CreationSteps.ClassSelection]: 'Choose your character\'s class.',
    [CreationSteps.RaceSelection]: 'Select your character\'s race.',
    [CreationSteps.OriginSelection]: 'Choose your character\'s origin.',
    [CreationSteps.AbilityScores]: 'Assign your character\'s ability scores.',
    [CreationSteps.Alignment]: 'Select your character\'s alignment.',
    [CreationSteps.Details]: 'Provide additional details about your character.',
};

export const LinkPreNote = 'For more information, visit:';