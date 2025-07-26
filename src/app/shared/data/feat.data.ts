import { Feat, FeatureType } from "@shared/dictionaries/feat.dictionary";
import { FeatModel } from "@shared/models/feat.model";

export const FEATS: FeatModel[] = [
  {
    name: Feat.Alert,
    description: `Initiative Proficiency. When you roll initiative, you can add your proficiency bonus to the roll.
Initiative Swap. Immediately after you roll initiative, you can swap your initiative with that of one willing ally in the same combat (neither you nor the ally can be incapacitated).`,
    featureType: FeatureType.General
  },
  {
    name: Feat.MagicInitiate,
    description: `Two Cantrips. You learn two cantrips of your choice from the Cleric, Druid, or Wizard spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells (your choice).
Level 1 Spell. Choose one 1st-level spell from the same list; you can cast it once without expending a spell slot, and you regain the ability to do so when you finish a long rest. You can also cast it using spell slots you have.
Spell Change. Whenever you gain a level, you can replace one of the spells you chose with a different spell of the same level from that list.
Repeatable. You can take this feat more than once, but each time you must choose a different class’s spell list.`,
    featureType: FeatureType.Spellcasting
  },
  {
    name: Feat.SavageAttacker,
    description: `Once per turn when you hit a target with a weapon attack, you can roll the weapon’s damage dice twice and use either roll.`,
    featureType: FeatureType.General
  },
  {
    name: Feat.Skilled,
    description: `You gain proficiency in any combination of three skills or tools of your choice.
Repeatable. You can take this feat more than once.`,
    featureType: FeatureType.General
  },
  {
    name: Feat.AbilityScoreImprovement,
    description: `Increase one ability score of your choice by 2, or increase two ability scores of your choice by 1. You can’t increase an ability score above 20.
Repeatable. You can take this feat more than once.`,
    featureType: FeatureType.General
  },
  {
    name: Feat.Grappler,
    description: `Prerequisite: Level 4+, Strength or Dexterity 13+
Ability Score Increase. Increase your Strength or Dexterity by 1, to a maximum of 20.
Punch and Grab. When you hit with an unarmed strike, you can use both the damage and the grapple option against the target (once per turn).
Attack Advantage. You have advantage on attack rolls against creatures you’ve grappled.
Fast Wrestler. You don’t spend extra movement to move a Grappled creature if it’s your size or smaller.`,
    featureType: FeatureType.General
  },
  {
    name: Feat.Archery,
    description: `Prerequisite: Fighting Style feature
You gain a +2 bonus to attack rolls you make with ranged weapons.`,
    featureType: FeatureType.Weapon
  },
  {
    name: Feat.Defense,
    description: `Prerequisite: Fighting Style feature
While you’re wearing light, medium, or heavy armor, you gain a +1 bonus to AC.`,
    featureType: FeatureType.Armor
  },
  {
    name: Feat.GreatWeaponFighting,
    description: `Prerequisite: Fighting Style feature
When you roll damage for a melee attack with a weapon you’re holding with two hands, you can treat any 1 or 2 on a damage die as a 3. The weapon must have the Two‑Handed or Versatile property.`,
    featureType: FeatureType.Weapon
  },
  {
    name: Feat.TwoWeaponFighting,
    description: `Prerequisite: Fighting Style feature
When you make the extra attack granted by two-weapon fighting, you can add your ability modifier to the damage of that attack.`,
    featureType: FeatureType.Weapon
  },

  {
    name: Feat.BoonOfCombatProwess,
    description: `Prerequisite: Level 19+
Ability Score Increase. Increase one ability score of your choice by 1, to a maximum of 30.
Peerless Aim. When you miss with an attack roll, you can treat it as a hit instead (once per turn).`,
    featureType: FeatureType.General
  },
  {
    name: Feat.BoonOfDimensionalTravel,
    description: `Prerequisite: Level 19+
Ability Score Increase. Increase one ability score of your choice by 1, to a maximum of 30.
Blink Steps. Immediately after you take the Attack or Magic action, you can teleport up to 30 feet to an unoccupied space you can see.`,
    featureType: FeatureType.General
  },
  {
    name: Feat.BoonOfFate,
    description: `Prerequisite: Level 19+
Ability Score Increase. Increase one ability score of your choice by 1, to a maximum of 30.
Improve Fate. When you or a creature within 60 feet succeeds or fails a D20 test, you can roll 2d4 and apply the total as a bonus or penalty to that roll (once per initiative or short/long rest).`,
    featureType: FeatureType.General
  },
  {
    name: Feat.BoonOfIrresistableOffense,
    description: `Prerequisite: Level 19+
Ability Score Increase. Increase your Strength or Dexterity by 1, to a maximum of 30.
Overcome Defenses. Your bludgeoning, piercing, and slashing damage ignore resistance.
Overwhelming Strike. On a natural 20, deal extra damage equal to the ability score increase.`,
    featureType: FeatureType.General
  },
  {
    name: Feat.BoonOfSpellRecall,
    description: `Prerequisite: Level 19+, Spellcasting feature
Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 30.
Free Casting. Whenever you cast a spell with a 1st–4th‑level slot, roll 1d4; on a roll equal to the slot’s level, the slot isn’t expended.`,
    featureType: FeatureType.Spellcasting
  },
  {
    name: Feat.BoonOfTheNightSpirit,
    description: `Prerequisite: Level 19+
Ability Score Increase. Increase one ability score of your choice by 1, to a maximum of 30.
Merge with Shadows. As a bonus action in dim light or darkness, you can become invisible until your next action, bonus action, or reaction.
Shadowy Form. While in dim light or darkness, you have resistance to all damage except psychic and radiant.`,
    featureType: FeatureType.General
  },
  {
    name: Feat.BoonOfTruesight,
    description: `Prerequisite: Level 19+
Ability Score Increase. Increase one ability score of your choice by 1, to a maximum of 30.
Truesight. You gain Truesight out to 60 feet.`,
    featureType: FeatureType.General
  }
];
