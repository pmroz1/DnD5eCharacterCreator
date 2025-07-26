export enum CreationSteps {
    ClassSelection = 'Determine Class',
    BackgroundSelection = 'Determine Background',
    AbilityScores = 'Determine Ability Scores',
    Alignment = 'Determine Alignment',
    Details = 'Provide Details',
    Overview = 'Review Character',
};

export const CreationStepsDescriptions = {
    [CreationSteps.ClassSelection]: 'Choose your character\'s class.',
    [CreationSteps.BackgroundSelection]: 'Choose your character\'s background.',
    [CreationSteps.AbilityScores]: 'Assign your character\'s ability scores.',
    [CreationSteps.Alignment]: 'Select your character\'s alignment.',
    [CreationSteps.Details]: 'Provide additional details about your character.',
};

export const LinkPreNote = 'For more information, visit:';