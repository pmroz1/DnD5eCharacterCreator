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
      choices: []
    },
    imageUrl: 'assets/images/origins/acolyte.png',
    description: `You devoted your life to the service of a deity, temple, or pantheon. Through prayer, study, and ritual, you learned to guide others and interpret divine will. You seek to uphold the tenets of your faith and offer solace to those in need.`,
  },
  {
    id: BackgroundDictionary.Artisan,
    name: BackgroundDictionary.Artisan,
    abilities: [Ability.Intelligence, Ability.Dexterity],
    skills: [Skills.Athletics, Skills.Perception],
    feats: [],
    toolProficiencies: [],
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
    description: `You have honed your skills in a specific craft or trade, earning your reputation through dedication and craftsmanship. Your work connects you to a community of fellow artisans and shapes your worldview around the merits of patience, precision, and pride in creation. Whether you craft fine jewelry or shape sturdy tools, you find meaning in the tangible results of your labor.`,
  },
  {
    id: BackgroundDictionary.Criminal,
    name: BackgroundDictionary.Criminal,
    abilities: [Ability.Dexterity, Ability.Charisma],
    skills: [Skills.Deception, Skills.Stealth],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Crowbar',
        'Dark common clothes',
        'Belt pouch containing 15 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/criminal.png',
    description: `You've lived on the wrong side of the law, learning to navigate the underworld through cunning and resourcefulness. Your network of contacts includes fences, thieves, and informants, and you are skilled at slipping unseen in shadows. Though driven by necessity or ambition, you know how to use deception and stealth to your advantage.`,
  },
  {
    id: BackgroundDictionary.Entertainer,
    name: BackgroundDictionary.Entertainer,
    abilities: [Ability.Charisma, Ability.Dexterity],
    skills: [Skills.Performance, Skills.Acrobatics],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Musical instrument (one of your choice)',
        'The favor of an admirer',
        'Costume clothes',
        'Belt pouch containing 15 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/entertainer.png',
    description: `You have spent years entertaining crowds with song, dance, or storytelling. Your performances have won you admirers and taught you how to read a room and captivate an audience. You carry with you a piece of your past stage life and the confidence it instilled.`,
  },
  {
    id: BackgroundDictionary.FolkHero,
    name: BackgroundDictionary.FolkHero,
    abilities: [Ability.Strength, Ability.Charisma],
    skills: [Skills.AnimalHandling, Skills.Survival],
    feats: [],
    toolProficiencies: [],
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
    description: `You rose from humble beginnings to become a champion of the common people, performing acts of courage and compassion. Your deeds—whether rescuing villagers, slaying beasts, or standing against injustice—have made you a local legend. You wield your humble background as a symbol of hope and resilience among those who look to you for inspiration.`,
  },
  {
    id: BackgroundDictionary.GuildArtisan,
    name: BackgroundDictionary.GuildArtisan,
    abilities: [Ability.Intelligence, Ability.Charisma],
    skills: [Skills.History, Skills.Persuasion],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Set of artisan’s tools of your guild',
        'Guild membership letter',
        'Common clothes',
        'Belt pouch containing 15 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/guild-artisan.png',
    description: `As a member of a powerful guild, you enjoy privileges and responsibilities in equal measure. You understand the political workings and handshake deals that bind craftsmen together. Your reputation within the guild opens doors and offers protection, but also demands loyalty and dues.`,
  },
  {
    id: BackgroundDictionary.Hermit,
    name: BackgroundDictionary.Hermit,
    abilities: [Ability.Wisdom, Ability.Intelligence],
    skills: [Skills.Medicine, Skills.Religion],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Herbalism kit',
        'Scroll case stuffed with notes',
        'Common clothes',
        'Belt pouch containing 5 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/hermit.png',
    description: `You withdrew from society to pursue a life of contemplation and study. In your solitude, you discovered secrets—perhaps spiritual, natural, or arcane—that few others know. Your isolation changed you, leaving you with unique insights and a deep sense of purpose.`,
  },
  {
    id: BackgroundDictionary.Noble,
    name: BackgroundDictionary.Noble,
    abilities: [Ability.Intelligence, Ability.Charisma],
    skills: [Skills.History, Skills.Persuasion],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Fine clothes',
        'Signet ring',
        'Scroll of pedigree',
        'Belt pouch containing 25 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/noble.png',
    description: `Born into wealth and privilege, you are accustomed to political intrigue and courtly etiquette. Your name carries weight and your word can sway decisions in noble circles. Yet you may chafe at expectations or long for a life beyond gilded halls.`,
  },
  {
    id: BackgroundDictionary.Outlander,
    name: BackgroundDictionary.Outlander,
    abilities: [Ability.Strength, Ability.Wisdom],
    skills: [Skills.Athletics, Skills.Survival],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Hunting trap',
        'Trophy from an animal',
        'Traveler’s clothes',
        'Belt pouch containing 10 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/outlander.png',
    description: `Raised in the wilds, you are at home in forests, mountains, and open plains. Your keen senses and ability to find sustenance make you a valuable guide and scout. You carry traditions and songs of your people, connecting you to lands few dare to tread.`,
  },
  {
    id: BackgroundDictionary.Sage,
    name: BackgroundDictionary.Sage,
    abilities: [Ability.Intelligence, Ability.Wisdom],
    skills: [Skills.Arcana, Skills.History],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Bottle of ink',
        'Quill',
        'Small knife',
        'Letter from a dead colleague',
        'Common clothes',
        'Belt pouch containing 10 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/sage.png',
    description: `Your life is devoted to the acquisition of knowledge, whether arcane, historical, or cosmic. You have spent years pouring over books and study, gaining a deep understanding of your chosen fields. You constantly seek to uncover truths and connect the dots between facts and legends.`,
  },
  {
    id: BackgroundDictionary.Sailor,
    name: BackgroundDictionary.Sailor,
    abilities: [Ability.Strength, Ability.Dexterity],
    skills: [Skills.Athletics, Skills.Perception],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Belaying pin',
        '50 feet of silk rope',
        'Lucky charm',
        'Common clothes',
        'Belt pouch containing 10 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/sailor.png',
    description: `Life at sea shaped you into a hardy and adaptable individual. You know how to read the weather and maintain a vessel, and you fear storms less than most fears solid ground. Your tales of shipboard life are as varied as the ports you’ve visited.`,
  },
  {
    id: BackgroundDictionary.Soldier,
    name: BackgroundDictionary.Soldier,
    abilities: [Ability.Strength, Ability.Constitution],
    skills: [Skills.Athletics, Skills.Intimidation],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Insignia of rank',
        'Trophy from a fallen enemy',
        'Common clothes',
        'Belt pouch containing 10 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/soldier.png',
    description: `Trained for war, you have discipline and tactics ingrained in you. You’ve marched in formation, followed orders, and faced the chaos of battle. Your military past grants you both respect and the burden of memories of comrades lost.`,
  },
  {
    id: BackgroundDictionary.Urchin,
    name: BackgroundDictionary.Urchin,
    abilities: [Ability.Dexterity, Ability.Intelligence],
    skills: [Skills.SleightOfHand, Skills.Stealth],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Small knife',
        'Map of the city where you grew up',
        'Pet mouse',
        'Common clothes',
        'Belt pouch containing 10 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/urchin.png',
    description: `You grew up on the streets, relying on wits and nimble fingers to survive. You know every alley and secret nook of your city and can vanish into crowds in an instant. Life as an urchin taught you resilience and resourcefulness.`,
  },
  {
    id: BackgroundDictionary.Charlatan,
    name: BackgroundDictionary.Charlatan,
    abilities: [Ability.Charisma, Ability.Intelligence],
    skills: [Skills.Deception, Skills.SleightOfHand],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Fine clothes',
        'Disguise kit',
        'Forgery kit',
        'Belt pouch containing 15 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/charlatan.png',
    description: `A natural con artist, you thrive on trickery and guile. You can forge documents and assume false identities with ease. Each new scheme sharpens your cunning and tests your nerve.`,
  },
  {
    id: BackgroundDictionary.Farmer,
    name: BackgroundDictionary.Farmer,
    abilities: [Ability.Strength, Ability.Constitution],
    skills: [Skills.AnimalHandling, Skills.Survival],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Hoe',
        'Shovel',
        'Common clothes',
        'Belt pouch containing 5 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/farmer.png',
    description: `Life tending crops and livestock grounded you in routines and the cycles of nature. You understand hard work and the value of steady effort. Your hands are calloused but your heart is rooted in community and growth.`,
  },
  {
    id: BackgroundDictionary.Guard,
    name: BackgroundDictionary.Guard,
    abilities: [Ability.Strength, Ability.Constitution],
    skills: [Skills.Perception, Skills.Athletics],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Uniform or badge',
        'Ledger of incidents',
        'Common clothes',
        'Belt pouch containing 10 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/guard.png',
    description: `You kept watch over gates, walls, or important individuals, upholding law and order. You learned to spot trouble before it began and to stand firm against threats. Your service left you with a strong sense of duty and fairness.`,
  },
  {
    id: BackgroundDictionary.Scribe,
    name: BackgroundDictionary.Scribe,
    abilities: [Ability.Intelligence, Ability.Wisdom],
    skills: [Skills.Insight, Skills.History],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Quill',
        'Ink and ink pen',
        'Scroll case',
        'Common clothes',
        'Belt pouch containing 10 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/scribe.png',
    description: `Tasked with recording and preserving knowledge, you painstakingly copy manuscripts and documents. You value accuracy and the power of the written word. Each scroll you complete carries a piece of history forward into the future.`,
  },
  {
    id: BackgroundDictionary.Wayfarer,
    name: BackgroundDictionary.Wayfarer,
    abilities: [Ability.Dexterity, Ability.Wisdom],
    skills: [Skills.Survival, Skills.Perception],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Traveler’s clothes',
        'Staff or spear',
        'Belt pouch containing 10 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/wayfarer.png',
    description: `You wander from town to town, guided by curiosity and a thirst for new experiences. No single place has claimed your loyalty, and you adapt quickly to changing circumstances. Your tales from the road are as diverse as the lands you traverse.`,
  },
  {
    id: BackgroundDictionary.Merchant,
    name: BackgroundDictionary.Merchant,
    abilities: [Ability.Charisma, Ability.Intelligence],
    skills: [Skills.Persuasion, Skills.Insight],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Ledger',
        'Set of fine clothes',
        'Trade samples',
        'Belt pouch containing 25 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/merchant.png',
    description: `You navigated bazaars and trade routes, bargaining for goods and making deals that turned profit. You understand supply, demand, and the power of persuasion. Your network of contacts spans towns and cities alike.`,
  },
  {
    id: BackgroundDictionary.Guide,
    name: BackgroundDictionary.Guide,
    abilities: [Ability.Wisdom, Ability.Charisma],
    skills: [Skills.Survival, Skills.Persuasion],
    feats: [],
    toolProficiencies: [],
    equipment: {
      guaranteed: [
        'Trail rations',
        'Traveler’s clothes',
        'Belt pouch containing 10 gp'
      ],
      choices: []
    },
    imageUrl: 'assets/images/origins/guide.png',
    description: `Skilled in leading travelers through unfamiliar terrain, you know the safest paths and hidden perils. You read maps and stars alike to ensure your charges arrive unharmed. Each successful journey bolsters your reputation as a reliable pathfinder.`,
  },
];
