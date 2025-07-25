import { BaseRecord } from "./base.record";

export type Ability = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';

export interface AbilityRequirement {
    ability: Ability;
    minimum: number;
}

export interface SkillChoice {
    name: string;
    from: string[];
}

export interface Feature {
    level: number;
    name: string;
    description: string;
    usesPerRest?: number;
}

export interface SpellSlots {
    level: number;
    slots: number[]; // index 0 is for level 1, index 1 for level 2, etc.
}

export interface SpellcastingProgression {
    canCast: boolean;
    spellSlotsByLevel?: SpellSlots[];
    spellsKnownByLevel?: number[];
    spellList?: string[];
}

export interface StartingEquipment {
    guaranteed: string[];
    choices: {
        from: string[];
        choose: number;
    }[];
}

export interface Subclass {
    id: string;
    name: string;
    description: string;
    unlockLevel: number;
    features: Feature[];
    spellcasting?: SpellcastingProgression;
}

export interface FiveEClass extends BaseRecord {
    imageUrl: string;
    description: string;
    hitDie: number;
    primaryAbility: Ability;
    savingThrows: Ability[];
    multiclassRequirements?: AbilityRequirement[];
    armorProficiencies: string[];
    weaponProficiencies: string[];
    toolProficiencies: string[];
    skillChoices: SkillChoice[];
    features: Feature[];
    spellcasting?: SpellcastingProgression;
    subclasses: Subclass[];
    startingEquipment: StartingEquipment;
}
