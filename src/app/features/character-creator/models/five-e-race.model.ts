import { CreatureType } from '@shared/dictionaries/creature-type.dictionary';
import { StandardLanguages, RareLanguages } from '@shared/dictionaries/languages.dictionary';

export interface FiveERace {
    title: string;
    description: string;
    imageUrl?: string;
    speed?: number;
    size?: [number, number]; // [minHeight, maxHeight]
    creatureType?: CreatureType;
    subraces?: FiveESubrace[];
    traits?: string[]; // TODO: move to separate trait model / dictionary
    languages?: (StandardLanguages | RareLanguages)[];
}

export interface FiveESubrace extends FiveERace {}
