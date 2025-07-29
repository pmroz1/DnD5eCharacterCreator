import { BackgroundModel } from '@shared/models/origin.model';
import { Ability } from '@shared/dictionaries/ability.dictionary';
import { BackgroundDictionary } from '@shared/dictionaries/background.dictionary';
import { Skills } from '@shared/dictionaries/skills.dictionary';
import { Feat } from '@shared/dictionaries/feat.dictionary';
import { ToolProficiencies } from '@shared/dictionaries/tool-proficiences.dictionary';

export const BACKGROUNDS: BackgroundModel[] = [
  {
    id: BackgroundDictionary.Acolyte,
    name: BackgroundDictionary.Acolyte,
    abilities: [Ability.Intelligence, Ability.Wisdom, Ability.Charisma],
    skills: [Skills.Insight, Skills.Religion],
    feats: [Feat.MagicInitiate],
    toolProficiencies: [ToolProficiencies.CalligraphersSupplies],
    equipment: {
      guaranteed: [
        '5 sticks of incense',
        'Vestments',
        'Common clothes',
        'Belt pouch containing 15 gp'
      ],
      choices: [
        // 'Prayer book',
        // 'Prayer wheel'
      ]
    },
    imageUrl: 'assets/images/origins/acolyte.png',
    description: `You devoted your life to the service in a temple or religious order. 
You learned the tenets of your faith and the rituals of worship, 
and you may have even been trained in healing or other divine magic.
You are a skilled practitioner of your faith, able to channel its power in various ways.
`,
  },
  {
    id: BackgroundDictionary.Artisan,
    name: BackgroundDictionary.Artisan,
    abilities: [Ability.Intelligence, Ability.Dexterity],
    skills: [Skills.Athletics, Skills.Perception],
    feats: [],
    toolProficiencies: [
    //   ToolProficiencies.ArtisansTools
    ],
    equipment: {
      guaranteed: [
        'Set of artisan’s tools (one of your choice)',
        'Guild membership insignia',
        'Common clothes',
        'Belt pouch containing 15 gp'
      ],
      choices: []
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
    toolProficiencies: [
    //   ToolProficiencies.ThievesTools,
    //   ToolProficiencies.GamingSets
    ],
    equipment: {
      guaranteed: [
        'Crowbar',
        'Dark common clothes',
        'Belt pouch containing 15 gp'
      ],
      choices: []
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
    toolProficiencies: [
    //   ToolProficiencies.ArtisansTools,
    //   ToolProficiencies.LandVehicles
    ],
    equipment: {
      guaranteed: [
        'Shovel',
        'Iron pot',
        'Common clothes',
        'Belt pouch containing 10 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/folk-hero.png',
    description: 'You are a champion of the common people, known for your deeds of heroism.',
  },
];
