import { Feat, FeatureType } from "@shared/dictionaries/feat.dictionary";

export interface FeatModel {
    name: Feat;
    description?: string;
    featureType?: FeatureType;
}
