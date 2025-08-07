import { Ability } from "@shared/dictionaries/ability.dictionary";

export interface DiceSet {
    id: number;
    rolls: number[];
    assignedAbility?: Ability;
}
