const groupName = "Fantasy-Companion";
const groupNamePP = "Power Points";
const groupNamePModifiers = "Power Modifiers";
const groupNameGenericPModifiers = "Power Modifiers - Generic";
const starIcon = "☆ ";

export const ppcommon = [
  // ----------------------
  // PP
  {
    id: "CH01PP",
    name: "+1 PP",
    button_name: "+1",
    "shotsUsed": "+1",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNamePP
  },
  {
    id: "CH02PP",
    name: "+2 PP",
    button_name: "+2",
    "shotsUsed": "+2",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNamePP
  },
  {
    id: "CH03PP",
    name: "+3 PP",
    button_name: "+3",
    "shotsUsed": "+3",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNamePP
  },
  {
    id: "CH04PP",
    name: "+4 PP",
    button_name: "+4",
    "shotsUsed": "+4",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNamePP
  },
  {
    id: "CH05PP",
    name: "+5 PP",
    button_name: "+5",
    "shotsUsed": "+5",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNamePP
  },
  {
    id: "CH06PP",
    name: "+6 PP",
    button_name: "+6",
    "shotsUsed": "+6",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNamePP
  },
  {
    id: "CH07PP",
    name: "+7 PP",
    button_name: "+7",
    "shotsUsed": "+7",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNamePP
  },
  {
    id: "CH08PP",
    name: "+8 PP",
    button_name: "+8",
    "shotsUsed": "+8",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNamePP
  },
  {
    id: "CH09PP",
    name: "+9 PP",
    button_name: "+9",
    "shotsUsed": "+9",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNamePP
  },
  {
    id: "ARMORPIERCING1",
    name: "Armor Piercing 2 (+1)",
    button_name: "Armor Piercing 2 (+1)",
    overrideAp: "2",
    shotsUsed: "+1",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNameGenericPModifiers
  },
  {
    id: "ARMORPIERCING2",
    name: "Armor Piercing 4 (+2)",
    button_name: "Armor Piercing 4 (+2)",
    overrideAp: "4",
    shotsUsed: "+2",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNameGenericPModifiers
  },
  {
    id: "ARMORPIERCING3",
    name: "Armor Piercing 6 (+3)",
    button_name: "Armor Piercing 6 (+3)",
    overrideAp: "6",
    shotsUsed: "+3",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNameGenericPModifiers
  },
  {
    id: "FATIGUE",
    name: "Fatigue (+2)",
    button_name: "Fatigue (+2)",
    shotsUsed: "+2",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNameGenericPModifiers
  },
  {
    id: "GLOWSHROUD1",
    name: "Glow/Shroud (+1)",
    button_name: "Glow/Shroud (+1)",
    shotsUsed: "+1",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNameGenericPModifiers
  },
  {
    id: "HEAVYWEAPON2",
    name: "Heavy Weapon (+2)",
    button_name: "Heavy Weapon (+2)",
    shotsUsed: "+2",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNameGenericPModifiers
  },
  {
    id: "HINDERHURRY2",
    name: "Hinder/Hurry (+2)",
    button_name: "Hinder/Hurry (+2)",
    shotsUsed: "+2",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNameGenericPModifiers
  },
  {
    id: "LINGERINGDAMAGE2",
    name: "Lingering Damage (+2)",
    button_name: "Lingering Damage (+2)",
    shotsUsed: "+2",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNameGenericPModifiers
  },
  {
    id: "RANGE1",
    name: "Range 2x (+1)",
    button_name: "Range 2x (+1)",
    shotsUsed: "+1",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNameGenericPModifiers
  },
  {
    id: "RANGE2",
    name: "Range 3x (+2)",
    button_name: "Range 3x (+2)",
    shotsUsed: "+2",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNameGenericPModifiers
  },
  {
    id: "SELECTIVE1",
    name: "Selective (+1)",
    button_name: "Selective (+1)",
    shotsUsed: "+1",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNameGenericPModifiers
  },
  {
    id: "HASTY2",
    name: "Hasty (+2)",
    button_name: "Hasty (+2)",
    shotsUsed: "+2",
    selector_type: "item_type",
    selector_value: "power",
    group: groupNameGenericPModifiers
  },
  {
    id: "MINDRIDER",
    name: "Mind Rider (+1)",
    button_name: "Mind Rider (+1)",
    shotsUsed: "+1",
    and_selector: [{
      selector_type: "item_type",
      selector_value: "power"
    },
    {
      selector_type: "item_description_includes",
      selector_value: "Mind Rider",
    }],
    group: groupNamePModifiers
  },
  {
    id: "9Havoc2AreaEffect",
    name: "Area LBT",
    button_name: "Area LBT (+1)",
    shotsUsed: "+1",
    and_selector: [
      {
        selector_type: "item_type",
        selector_value: "power"
      },
      {
        selector_type: "item_name",
        selector_value: "Havoc"
      }
    ],
    group: "Havoc"
  },
  {
    id: "9Havoc2GreaterHavoc",
    name: "Greater Havoc",
    button_name: "☆ Grt.Havoc (+2)",
    shotsUsed: "+2",
    and_selector: [
      {
        selector_type: "item_type",
        selector_value: "power"
      },
      {
        selector_type: "item_name",
        selector_value: "Havoc"
      }
    ],
    group: "Havoc"
  },
  {
    id: "9Burst2GreaterBurst",
    name: "Greater Burst",
    button_name: "☆ Grt.Burst (+4)",
    shotsUsed: "+4",
    dmgOverride: "4d6x",
    and_selector: [
      {
        selector_type: "item_type",
        selector_value: "power"
      },
      {
        selector_type: "item_name",
        selector_value: "Burst"
      }
    ],
    group: "Burst"
  },
  {
    id: "9Burst2Push",
    name: "Burst Push",
    button_name: "Push (+1)",
    shotsUsed: "+1",
    and_selector: [
      {
        selector_type: "item_type",
        selector_value: "power"
      },
      {
        selector_type: "item_name",
        selector_value: "Burst"
      }
    ],
    group: "Burst"
  },
  {
    id: "9Burst2Strong",
    name: "Burst Strong",
    button_name: "Damage (+2)",
    shotsUsed: "+2",
    dmgOverride: "3d6x",
    and_selector: [
      {
        selector_type: "item_type",
        selector_value: "power"
      },
      {
        selector_type: "item_name",
        selector_value: "Burst"
      }
    ],
    group: "Burst"
  },
  {
    id: "9Bolt2Strong",
    name: "Bolt Strong",
    button_name: "Damage (+2)",
    shotsUsed: "+2",
    dmgOverride: "3d6x",
    and_selector: [
      {
        selector_type: "item_type",
        selector_value: "power"
      },
      {
        selector_type: "item_name",
        selector_value: "Bolt"
      }
    ],
    group: "Bolt"
  }
];
