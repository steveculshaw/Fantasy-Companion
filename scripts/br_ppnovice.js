/// power modifiers for novice powers ...

// const groupNamePP = "Power Points";
// const groupNamePModifiers = "Power Modifiers - ";
// const groupNameGenericPModifiers = "Power Modifiers - Generic";
const groupArcaneProtectionName = "Power Modifiers - Arcane Protection";
const groupBeastFriendName = "Power Modifiers - Beast Friend";
// const groupBoltName = "Power Modifiers - Bolt";
const groupBoostTraitsName = "Power Modifiers - Boost Traits";
const groupBoostLowerTraitsName = "Power Modifiers - Boost/Lower Traits";
const groupBurrowName = "Power Modifiers - Burrow";
// const groupBurstName = "Power Modifiers - Burst";
const groupConfusionName = "Power Modifiers - Confusion";
const groupEntangleName = "Power Modifiers - Entangle";
const groupEnvironmentalProtection = "Power Modifiers - Environmental Protection";
// const groupHealingName = "Power Modifiers - Healing";
// const groupProtectionName = "Power Modifiers - Protection";
// const groupReliefName = "Power Modifiers - Relief";
const groupSanctuaryName = "Power Modifiers - Sanctuary";
// const groupShapeChangeName = "Power Modifiers - Shape Change";
const groupStunName = "Power Modifiers - Stun";

export const POWER_MODIFIERS_NOVICE = [
  {
    id: "POWERARCANEPROTECTIONMODGREATERARCANEPROTECTION",
    name: "☆ Greater Arcane Protection (+2)",
    button_name: "☆ Greater Arcane Protection (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Arcane Protection" }
    ],
    group: groupArcaneProtectionName
  },
  {
    id: "POWERARCANEPROTECTIONMODADDITIONALRECIPIENTS",
    name: "Additional Recipients +1",
    button_name: "Add.Recipient's +1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Arcane Protection" }
    ],
    group: groupArcaneProtectionName
  },
  {
    id: "POWERARCANEPROTECTIONMODADDITIONALRECIPIENTS2",
    name: "Additional Recipients +2",
    button_name: "Add.Recipient's +2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Arcane Protection" }
    ],
    group: groupArcaneProtectionName
  },
  {
    id: "POWERARCANEPROTECTIONMODADDITIONALRECIPIENTS3",
    name: "Additional Recipients +3",
    button_name: "Add.Recipient's +3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Arcane Protection" }
    ],
    group: groupArcaneProtectionName
  },
  {
    id: "POWERARCANEPROTECTIONMODADDITIONALRECIPIENTS4",
    name: "Additional Recipients +4",
    button_name: "Add.Recipient's +4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Arcane Protection" }
    ],
    group: groupArcaneProtectionName
  },

  // ----------------------
  // POWER Beast Friend    
  {
    id: "POWERBEASTFRIENDMODBESTIARIUM",
    name: "☆ Bestiarium (+2)",
    button_name: "☆ Bestiarium (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Beast Friend" }
    ],
    group: groupBeastFriendName
  },
  {
    id: "POWERBEASTFRIENDMODDURATION",
    name: "Duration (+1)",
    button_name: "Duration (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Beast Friend" }
    ],
    group: groupBeastFriendName
  },
  {
    id: "POWERBEASTFRIENDMODMINDRIDER",
    name: "Mind Rider (+1)",
    button_name: "Mind Rider (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Beast Friend" }
    ],
    group: groupBeastFriendName
  },

  // ----------------------
  // POWER Blind
  {
    id: "POWERBLINDMODSTRONG",
    name: "Strong (+1)",
    button_name: "Strong (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blind" }
    ],
    group: "Modifiers - Blind "
  },
  // ----------------------
  {
    id: "POWERBLINDMODMEDIUM",
    name: "Medium Blast (+2)",
    button_name: "Medium Blast (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blind" }
    ],
    group: "Modifiers - Blind Area of Effect MBT "
  },
  {
    id: "POWERBLINDMODLARGE",
    name: "Large Blast (+3)",
    button_name: "Large Blast (+3)",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blind" }
    ],
    group: "Modifiers - Blind Area of Effect LBT "
  },

  // ----------------------
  // POWER BOLT
  // {
  //   id: "POWERBOLTMODDAMAGE",
  //   name: "Damage 3d6 (+2)",
  //   button_name: "Damage 3d6 (+2)",
  //   shotsUsed: "+2",
  //   dmgMod: "+d6x",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Bolt" }
  //   ],
  //   group: groupBoltName
  // },
  // {
  //   id: "POWERBOLTMODGREATERBOLT",
  //   name: "☆ Greater Bolt 4d6 (+4)",
  //   button_name: "☆ Greater Bolt 4d6 (+4)",
  //   shotsUsed: "+4",
  //   dmgMod: "+2d6x",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Bolt" }
  //   ],
  //   group: groupBoltName
  // },
  // {
  //   id: "POWERBOLTMODRATEOFFIRE",
  //   name: "☆ Rate of Fire (+2)",
  //   button_name: "☆ Rate of Fire (+2)",
  //   shotsUsed: "+2",
  //   rof: "2",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Bolt" }
  //   ],
  //   group: groupBoltName
  // },
  // {
  //   id: "POWERBOLTMODDISINTEGRATE",
  //   name: "☆ Disintegrate (+2)",
  //   button_name: "☆ Disintegrate (+2)",
  //   shotsUsed: "+2",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Bolt" }
  //   ],
  //   group: groupBoltName
  // },

  // ----------------------
  // POWER Boost Trait
  {
    id: "POWERBOOSTTRAITMODSTRONG",
    name: "Strong (+1)",
    button_name: "Strong (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: groupBoostLowerTraitsName
  },
  {
    id: "POWERBOOSTTRAITMOGREATER",
    name: "Greater Boost/Lower Trait (+2)",
    button_name: "Greater Boost/Lower Trait (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: groupBoostTraitsName
  },
  // ----------------------
  {
    id: "POWERBOOSTTRAITMODADDITIONALRECIPIENTS",
    name: "Additional Recipients +1",
    button_name: "Add.Recipient's +1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: groupBoostTraitsName
  },
  {
    id: "POWERBOOSTTRAITMODADDITIONALRECIPIENTS2",
    name: "Additional Recipients +2",
    button_name: "Add.Recipient's +2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: groupBoostTraitsName
  },
  {
    id: "POWERBOOSTTRAITMODADDITIONALRECIPIENTS3",
    name: "Additional Recipients +3",
    button_name: "Add.Recipient's +3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: groupBoostTraitsName
  },
  {
    id: "POWERBOOSTTRAITMODADDITIONALRECIPIENTS4",
    name: "Additional Recipients +4",
    button_name: "Add.Recipient's +4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: groupBoostTraitsName
  },

  // ----------------------
  // POWER Boost/Lower Trait
  {
    id: "POWERBOOSTLOWERTRAITMODSTRONG",
    name: "Strong (+1)",
    button_name: "Strong (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: groupBoostLowerTraitsName
  },
  {
    id: "POWERBOOSTLOWERTRAITMOGREATER",
    name: "Greater Boost/Lower Trait (+2)",
    button_name: "Greater Boost/Lower Trait (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: groupBoostLowerTraitsName
  },
  // ----------------------
  {
    id: "POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS",
    name: "Additional Recipients +1",
    button_name: "+1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: groupBoostLowerTraitsName
  },
  {
    id: "POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS2",
    name: "Additional Recipients +2",
    button_name: "+2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: groupBoostLowerTraitsName
  },
  {
    id: "POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS3",
    name: "Additional Recipients +3",
    button_name: "+3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: groupBoostLowerTraitsName
  },
  {
    id: "POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS4",
    name: "Additional Recipients +4",
    button_name: "+4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: groupBoostLowerTraitsName
  },

  // ----------------------
  // POWER Burrow
  {
    id: "POWERBURROWMODPOWER",
    name: "Power (+1)",
    button_name: "Power (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: groupBurrowName
  },
  {
    id: "POWERBURROWMODADDITIONALRECIPIENTS1",
    name: "Additional Recipients +1",
    button_name: "Add.Recipient's +1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: groupBurrowName
  },
  {
    id: "POWERBURROWMODADDITIONALRECIPIENTS2",
    name: "Additional Recipients +2",
    button_name: "Add.Recipient's +2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: groupBurrowName
  },
  {
    id: "POWERBURROWMODADDITIONALRECIPIENTS3",
    name: "Additional Recipients +3",
    button_name: "Add.Recipient's +3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: groupBurrowName
  },
  {
    id: "POWERBURROWMODADDITIONALRECIPIENTS4",
    name: "Additional Recipients +4",
    button_name: "Add.Recipient's +4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: groupBurrowName
  },

  // ----------------------
  // POWER BURST
  // {
  // id: "POWERBURSTMODDAMAGE",
  // name: "Damage 3d6 (+2)",
  // button_name: "Damage 3d6 (+2)",
  // shotsUsed: "+2",
  // dmgMod: "+d6x",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Burst" }
  // ],
  // group: groupBurstName
  // },
  // {
  // id: "POWERBURSTPUSH",
  // name: "Push (+1)",
  // button_name: "Push (+1)",
  // shotsUsed: "+1",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Burst" }
  // ],
  // group: groupBurstName
  // },
  // {
  // id: "POWERBURSTMODGREATERBURST",
  // name: "☆ Greater Bolt (+4)",
  // button_name: "☆ Greater Bolt (+4)",
  // shotsUsed: "+4",
  // dmgMod: "+2d6x",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Burst" }
  // ],
  // group: groupBurstName
  // },

  // ----------------------
  // POWER Confusion
  {
    id: "POWERCONFUSIONMODGREATER",
    name: "☆ Greater Confusion (+2)",
    button_name: "☆ Greater Confusion (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Confusion" }
    ],
    group: groupConfusionName
  },
  {
    id: "POWERCONFUSIONMODSMALL",
    name: "Small Blast (+0)",
    button_name: "Small Blast (+0)",
    shotsUsed: "+0",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Confusion" }
    ],
    group: groupConfusionName
  },
  {
    id: "POWERCONFUSIONMODLARGE",
    name: "Large Blast (+1)",
    button_name: "Large Blast (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Confusion" }
    ],
    group: groupConfusionName
  },

  // ----------------------
  // POWER Conjure Item
  {
    id: "POWERCONJUREITEMMODCOMPLETE",
    name: "Complete  (+1)",
    button_name: "Complete  (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Conjure Item Modifiers - "
  },
  // ----------------------    
  {
    id: "POWERCONJUREITEMMODCREATEFOODANDWATER",
    name: "1x (1)",
    button_name: "1x (1)",
    shotsUsed: "1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Create Food And Water"
  },
  {
    id: "POWERCONJUREITEMMODCREATEFOODANDWATER2",
    name: "2x (2)",
    button_name: "2x (2)",
    shotsUsed: "2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Create Food And Water"
  },
  {
    id: "POWERCONJUREITEMMODCREATEFOODANDWATER3",
    name: "3x (3)",
    button_name: "3x (3)",
    shotsUsed: "3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Create Food And Water"
  },
  {
    id: "POWERCONJUREITEMMODCREATEFOODANDWATER4",
    name: "4x (4)",
    button_name: "4x (4)",
    shotsUsed: "4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Create Food And Water"
  },
  {
    id: "POWERCONJUREITEMMODCREATEFOODANDWATER5",
    name: "5x (5)",
    button_name: "5x (5)",
    shotsUsed: "5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Create Food And Water"
  },
  {
    id: "POWERCONJUREITEMMODCREATEFOODANDWATER6",
    name: "6x (6)",
    button_name: "6x (6)",
    shotsUsed: "6",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Create Food And Water"
  },
  {
    id: "POWERCONJUREITEMMODCREATEFOODANDWATER7",
    name: "7x (7)",
    button_name: "7x (7)",
    shotsUsed: "7",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Create Food And Water"
  },
  {
    id: "POWERCONJUREITEMMODCREATEFOODANDWATER8",
    name: "8x (8)",
    button_name: "8x (8)",
    shotsUsed: "8",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Create Food And Water"
  },
  {
    id: "POWERCONJUREITEMMODCREATEFOODANDWATER9",
    name: "9x (9)",
    button_name: "9x (9)",
    shotsUsed: "9",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Create Food And Water"
  },
  // ----------------------    
  {
    id: "POWERCONJUREITEMMODDURABLE",
    name: "Durable +1",
    button_name: "+1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Durable (+1 Per Pound)"
  },
  {
    id: "POWERCONJUREITEMMODDURABLE2",
    name: "Durable +2",
    button_name: "+2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Durable (+1 Per Pound)"
  },
  {
    id: "POWERCONJUREITEMMODDURABLE3",
    name: "Durable +3",
    button_name: "+3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Durable (+1 Per Pound)"
  },
  {
    id: "POWERCONJUREITEMMODDURABLE4",
    name: "Durable +4",
    button_name: "+4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Durable (+1 Per Pound)"
  },
  {
    id: "POWERCONJUREITEMMODDURABLE5",
    name: "Durable +5",
    button_name: "+5",
    shotsUsed: "+5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Durable (+1 Per Pound)"
  },
  {
    id: "POWERCONJUREITEMMODDURABLE6",
    name: "Durable +6",
    button_name: "+6",
    shotsUsed: "+6",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Durable (+1 Per Pound)"
  },
  {
    id: "POWERCONJUREITEMMODDURABLE7",
    name: "Durable +7",
    button_name: "+7",
    shotsUsed: "+7",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Durable (+1 Per Pound)"
  },
  {
    id: "POWERCONJUREITEMMODDURABLE8",
    name: "Durable +8",
    button_name: "+8",
    shotsUsed: "+8",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Durable (+1 Per Pound)"
  },
  {
    id: "POWERCONJUREITEMMODDURABLE9",
    name: "Durable +9",
    button_name: "+9",
    shotsUsed: "+9",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Conjure Item" }
    ],
    group: "Durable (+1 Per Pound)"
  },

  // ----------------------
  // POWER Darksight
  {
    id: "POWERDARKSIGHTMODGREATER",
    name: "☆ Greater Darksight (+2)",
    button_name: "☆ Greater Darksight (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Darksight Modifiers - "
  },
  // ----------------------
  {
    id: "POWERDARKSIGHTMODADDITIONALRECIPIENTS",
    name: "Additional Recipients +1",
    button_name: "+1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDARKSIGHTMODADDITIONALRECIPIENTS2",
    name: "Additional Recipients +2",
    button_name: "+2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDARKSIGHTMODADDITIONALRECIPIENTS3",
    name: "Additional Recipients +3",
    button_name: "+3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDARKSIGHTMODADDITIONALRECIPIENTS4",
    name: "Additional Recipients +4",
    button_name: "+4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDARKSIGHTMODADDITIONALRECIPIENTS5",
    name: "Additional Recipients +5",
    button_name: "+5",
    shotsUsed: "+5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDARKSIGHTMODADDITIONALRECIPIENTS6",
    name: "Additional Recipients +6",
    button_name: "+6",
    shotsUsed: "+6",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDARKSIGHTMODADDITIONALRECIPIENTS7",
    name: "Additional Recipients +7",
    button_name: "+7",
    shotsUsed: "+7",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDARKSIGHTMODADDITIONALRECIPIENTS8",
    name: "Additional Recipients +8",
    button_name: "+8",
    shotsUsed: "+8",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDARKSIGHTMODADDITIONALRECIPIENTS9",
    name: "Additional Recipients +9",
    button_name: "+9",
    shotsUsed: "+9",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Darksight" }
    ],
    group: "Additional Recipients"
  },

  // ----------------------
  // POWER Deflection
  {
    id: "POWERDEFLECTIONMODADDITIONAL",
    name: "Additional Recipients +1",
    button_name: "+1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Deflection" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDEFLECTIONMODADDITIONAL2",
    name: "Additional Recipients +2",
    button_name: "+2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Deflection" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDEFLECTIONMODADDITIONAL3",
    name: "Additional Recipients +3",
    button_name: "+3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Deflection" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDEFLECTIONMODADDITIONAL4",
    name: "Additional Recipients +4",
    button_name: "+4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Deflection" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDEFLECTIONMODADDITIONAL5",
    name: "Additional Recipients +5",
    button_name: "+5",
    shotsUsed: "+5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Deflection" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDEFLECTIONMODADDITIONAL6",
    name: "Additional Recipients +6",
    button_name: "+6",
    shotsUsed: "+6",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Deflection" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDEFLECTIONMODADDITIONAL7",
    name: "Additional Recipients +7",
    button_name: "+7",
    shotsUsed: "+7",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Deflection" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDEFLECTIONMODADDITIONAL8",
    name: "Additional Recipients +8",
    button_name: "+8",
    shotsUsed: "+8",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Deflection" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERBOOSTLOWERTRAITMODADDITIONALRECIPIENTS9",
    name: "Additional Recipients +9",
    button_name: "+9",
    shotsUsed: "+9",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Deflection" }
    ],
    group: "Additional Recipients"
  },

  // ----------------------
  // POWER Detect/Conceal Arcana
  {
    id: "POWERDETECTARCANAMODALIGNMENTSENSE",
    name: "Alignment Sense (+1)",
    button_name: "Alignment Sense (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Detect/Conceal Arcana Modifiers - "
  },
  {
    id: "POWERDETECTARCANAMODIDENTIFY",
    name: "Identify (+1)",
    button_name: "Identify (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Detect/Conceal Arcana Modifiers - "
  },
  {
    id: "POWERDETECTARCANAMODSTRONG",
    name: "Strong (+1)",
    button_name: "Strong (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Detect/Conceal Arcana Modifiers - "
  },
  {
    id: "POWERDETECTARCANAMODMEDIUM",
    name: "Medium Blast (+2)",
    button_name: "Medium Blast (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Area of Effect"
  },
  {
    id: "POWERDETECTARCANAMODLARGE",
    name: "Large Blast (+3)",
    button_name: "Large Blast (+3)",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Area of Effect"
  },
  // ----------------------
  {
    id: "POWERDETECTARCANAMODADDITIONALRECIPIENTS",
    name: "Additional Recipients +1",
    button_name: "+1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDETECTARCANAMODADDITIONALRECIPIENTS2",
    name: "Additional Recipients +2",
    button_name: "+2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDETECTARCANAMODADDITIONALRECIPIENTS3",
    name: "Additional Recipients +3",
    button_name: "+3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDETECTARCANAMODADDITIONALRECIPIENTS4",
    name: "Additional Recipients +4",
    button_name: "+4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDETECTARCANAMODADDITIONALRECIPIENTS5",
    name: "Additional Recipients +5",
    button_name: "+5",
    shotsUsed: "+5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDETECTARCANAMODADDITIONALRECIPIENTS6",
    name: "Additional Recipients +6",
    button_name: "+6",
    shotsUsed: "+6",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDETECTARCANAMODADDITIONALRECIPIENTS7",
    name: "Additional Recipients +7",
    button_name: "+7",
    shotsUsed: "+7",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDETECTARCANAMODADDITIONALRECIPIENTS8",
    name: "Additional Recipients +8",
    button_name: "+8",
    shotsUsed: "+8",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERDETECTARCANAMODADDITIONALRECIPIENTS9",
    name: "Additional Recipients +9",
    button_name: "+9",
    shotsUsed: "+9",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Detect/Conceal Arcana" }
    ],
    group: "Additional Recipients"
  },

  // ----------------------
  // POWER Dispel
  {
    id: "POWERDISPELMODANTIMAGICFIELD",
    name: "☆ Anti-Magic Field (+8)",
    button_name: "☆ Anti-Magic Field (+8)",
    shotsUsed: "+8",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Dispel" }
    ],
    group: "Dispel Modifiers - "
  },
  {
    id: "POWERDISPELMODDISENCHANT",
    name: "Disenchant (+1)",
    button_name: "Disenchant (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Dispel" }
    ],
    group: "Dispel Modifiers - "
  },
  {
    id: "POWERDISPELMODMULTIPLEPOWERS",
    name: "Multiple Powers (+1)",
    button_name: "Multiple Powers (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Dispel" }
    ],
    group: "Dispel Modifiers - "
  },
  {
    id: "POWERDISPELMODREMOVECURSE",
    name: "☆ Remove Curse (+2)",
    button_name: "☆ Remove Curse (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Dispel" }
    ],
    group: "Dispel Modifiers - "
  },
  // ----------------------
  // POWER Dispel    
  {
    id: "POWERDISPELMODLARGEBLAST",
    name: "Large Blast (+3)",
    button_name: "Large Blast (+3)",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Dispel" }
    ],
    group: "Dispel Blast Template"
  },
  {
    id: "POWERDISPELMODMEDIUMBLAST",
    name: "Medium Blast (+2)",
    button_name: "Medium Blast (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Dispel" }
    ],
    group: "Dispel Blast Template"
  },
  {
    id: "POWERDISPELMODSMALLBLAST",
    name: "Small Blast (+1)",
    button_name: "Small Blast (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Dispel" }
    ],
    group: "Dispel Blast Template"
  },

  // ----------------------
  // POWER Elemental Manipulation
  {
    id: "POWERELEMENTALMANIPULATIONMODPOWER",
    name: "☆ Power (+3)",
    button_name: "☆ Power (+3)",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Elemental Manipulation" }
    ],
    group: "Elemental Manipulation Modifiers - "
  },
  {
    id: "POWERELEMENTALMANIPULATIONMODWEATHER",
    name: "☆ Weather (+5)",
    button_name: "☆ Weather (+5)",
    shotsUsed: "+5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Elemental Manipulation" }
    ],
    group: "Elemental Manipulation Modifiers - "
  },

  // POWER Empathy
  {
    id: "POWEREMPATHYMODCHARM",
    name: "Charm (+2)",
    button_name: "Charm (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Empathy" }
    ],
    group: "Empathy Modifiers - "
  },
  {
    id: "POWEREMPATHYMODDURATION",
    name: "Duration (+1)",
    button_name: "Duration (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Empathy" }
    ],
    group: "Empathy Modifiers - "
  },
  {
    id: "POWEREMPATHYMODTRUTH",
    name: "☆ Truth (+2)",
    button_name: "☆ Truth (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Empathy" }
    ],
    group: "Empathy Modifiers - "
  },
  // ----------------------
  {
    id: "POWEREMPATHYMODADDITIONALRECIPIENTS",
    name: "Additional Recipients +1",
    button_name: "+1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Empathy" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWEREMPATHYMODADDITIONALRECIPIENTS2",
    name: "Additional Recipients +2",
    button_name: "+2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Empathy" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWEREMPATHYMODADDITIONALRECIPIENTS3",
    name: "Additional Recipients +3",
    button_name: "+3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Empathy" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWEREMPATHYMODADDITIONALRECIPIENTS4",
    name: "Additional Recipients +4",
    button_name: "+4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Empathy" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWEREMPATHYMODADDITIONALRECIPIENTS5",
    name: "Additional Recipients +5",
    button_name: "+5",
    shotsUsed: "+5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Empathy" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWEREMPATHYMODADDITIONALRECIPIENTS6",
    name: "Additional Recipients +6",
    button_name: "+6",
    shotsUsed: "+6",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Empathy" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWEREMPATHYMODADDITIONALRECIPIENTS7",
    name: "Additional Recipients +7",
    button_name: "+7",
    shotsUsed: "+7",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Empathy" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWEREMPATHYMODADDITIONALRECIPIENTS8",
    name: "Additional Recipients +8",
    button_name: "+8",
    shotsUsed: "+8",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Empathy" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWEREMPATHYMODADDITIONALRECIPIENTS9",
    name: "Additional Recipients +9",
    button_name: "+9",
    shotsUsed: "+9",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Empathy" }
    ],
    group: "Additional Recipients"
  },

  // ----------------------
  // POWER Entangle
  {
    id: "POWERENTANGLEMODDAMAGE",
    name: "Damage (+2)",
    button_name: "Damage (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: groupEntangleName
  },
  {
    id: "POWERENTANGLEMODTOUGH",
    name: "Tough (+1)",
    button_name: "Tough (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: groupEntangleName
  },
  {
    id: "POWERENTANGLEMODDEADLY",
    name: "☆ Deadly (+4)",
    button_name: "☆ Deadly (+4)",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: groupEntangleName
  },
  {
    id: "POWERENTANGLEMODMEDIUM",
    name: "Medium (+2)",
    button_name: "Medium (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: groupEntangleName
  },
  {
    id: "POWERENTANGLEMODLARGE",
    name: "Large or Stream (+3)",
    button_name: "Large or Stream (+3)",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: groupEntangleName
  },

  // ----------------------
  // POWER Environmental Protection
  {
    id: "POWERENVPROTECTIONMODRESISTANCE",
    name: "Environmental Resistance (+1)",
    button_name: "Environmental Resistance (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: groupEnvironmentalProtection
  },
  {
    id: "POWERENVPROTECTIONMODPLANAR",
    name: "Planar Adaptation (+2)",
    button_name: "Planar Adaptation (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: groupEnvironmentalProtection
  },
  // ----------------------
  {
    id: "POWERENVPROTECTIONMODADDITIONALRECIPIENTS",
    name: "Additional Recipients +1",
    button_name: "+1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: groupEnvironmentalProtection
  },
  {
    id: "POWERENVPROTECTIONMODADDITIONALRECIPIENTS2",
    name: "Additional Recipients +2",
    button_name: "+2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: groupEnvironmentalProtection
  },
  {
    id: "POWERENVPROTECTIONMODADDITIONALRECIPIENTS3",
    name: "Additional Recipients +3",
    button_name: "+3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: groupEnvironmentalProtection
  },
  {
    id: "POWERENVPROTECTIONMODADDITIONALRECIPIENTS4",
    name: "Additional Recipients +4",
    button_name: "+4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: groupEnvironmentalProtection
  },

  // ----------------------
  // POWER Fear
  {
    id: "POWERFEARMODGREATERFEAR",
    name: "☆ Greater Fear (+2)",
    button_name: "☆ Greater Fear (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Fear" }
    ],
    group: "Fear Modifiers - "
  },
  {
    id: "POWERFEARMODSMALLMEDIUM",
    name: "Small or Medium Blast (+2)",
    button_name: "Small or Medium Blast (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Fear" }
    ],
    group: "Fear Modifiers - "
  },
  {
    id: "POWERFEARMODSMALLLARGE",
    name: "Large Blast (+3)",
    button_name: "Large Blast (+3)",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Fear" }
    ],
    group: "Fear Modifiers - "
  },

  // ----------------------
  // POWER Havoc
  // {
  // id: "POWERHAVOCMODGREATER",
  // name: "☆ Greater Havoc (+2)",
  // button_name: "☆ Greater Havoc (+2)",
  // shotsUsed: "+2",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Havoc" }
  // ],
  // group: "Havoc Modifiers - "
  // },
  // {
  // id: "POWERHAVOCMODAREA",
  // name: "Area Effect (+1)",
  // button_name: "Area Effect LBT (+1)",
  // shotsUsed: "+1",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Havoc" }
  // ],
  // group: "Havoc Modifiers - "
  // },

  // ----------------------
  // POWER HEALING
  // {
  // id: "POWERHEALINGMODGREATERHEALING",
  // name: "Greater Healing (+10)",
  // button_name: "Greater Healing (+10)",
  // shotsUsed: "+10",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Healing" }
  // ],
  // group: groupHealingName
  // },
  // {
  // id: "POWERHEALINGMODMASSHEALINGMEDIUMBLAST",
  // name: "☆ Mass Healing - Medium Blast (+2)",
  // button_name: "☆ Mass Healing - Medium Blast (+2)",
  // shotsUsed: "+2",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Healing" }
  // ],
  // group: groupHealingName
  // },
  // {
  // id: "POWERHEALINGMODMASSHEALINGLARGEBLAST",
  // name: "☆ Mass Healing - Large Blast (+3)",
  // button_name: "☆ Mass Healing - Large Blast (+3)",
  // shotsUsed: "+3",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Healing" }
  // ],
  // group: groupHealingName
  // },
  // {
  // id: "POWERHEALINGMODCRIPPLINGINJURIES",
  // name: "Crippling Injuries (+15)",
  // button_name: "Crippling Injuries (+15)",
  // shotsUsed: "+15",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Healing" }
  // ],
  // group: groupHealingName
  // },
  // {
  // id: "POWERHEALINGMODNEUTRALIZEPOISON",
  // name: "Neutralize Poison or Disease (+1)",
  // button_name: "Neutralize Poison or Disease (+1)",
  // shotsUsed: "+1",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Healing" }
  // ],
  // group: groupHealingName
  // },

  // ----------------------
  // POWER Illusion
  {
    id: "POWERILLUSIONMODSTRONG",
    name: "Strong (+2)",
    button_name: "Strong (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Illusion Modifiers - "
  },
  {
    id: "POWERILLUSIONMODSOUND",
    name: "Sound (+1)",
    button_name: "Sound (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Illusion Modifiers - "
  },
  {
    id: "POWERILLUSIONMODMOBILITY12",
    name: "Mobility Pace 12 (+1)",
    button_name: "Mobility Pace 12 (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Illusion Modifiers - "
  },
  {
    id: "POWERILLUSIONMODMOBILITY24",
    name: "Mobility Pace 24 (+2)",
    button_name: "Mobility Pace 24 (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Illusion Modifiers - "
  },
  {
    id: "POWERILLUSIONMODDURATION",
    name: "☆ Duration (+2)",
    button_name: "☆ Duration (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Illusion Modifiers - "
  },
  {
    id: "POWERILLUSIONMODDEADLY",
    name: "☆ Deadly Illusion (+3)",
    button_name: "☆ Deadly Illusion (+3)",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Illusion Modifiers - "
  },
  {
    id: "POWERILLUSIONMODAREA",
    name: "Large Blast (+1)",
    button_name: "Large Blast (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Illusion" }
    ],
    group: "Area of Effect"
  },

  // ----------------------
  // POWER Light / Darkness
  {
    id: "POWERLIGHTDARKNESSMODMOBILE",
    name: "Mobile (+1)",
    button_name: "Mobile (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Light / Darkness" }
    ],
    group: "Light / Darkness Modifiers - "
  },
  {
    id: "POWERLIGHTDARKNESSMODTRUEDARKNESS",
    name: "☆ True Darkness (+2)",
    button_name: "☆ True Darkness (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Light / Darkness" }
    ],
    group: "Light / Darkness Modifiers - "
  },
  {
    id: "POWERLIGHTDARKNESSMODAREAEFFECT",
    name: "☆ Area Effect (+2)",
    button_name: "☆ Area Effect (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Light / Darkness" }
    ],
    group: "Light / Darkness Modifiers - "
  },

  // ----------------------
  // POWER Locate
  {
    id: "POWERLOCATEMODPATH",
    name: "Find the Path (+1)",
    button_name: "Find the Path (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Locate" }
    ],
    group: "Locate"
  },

  // ----------------------
  // POWER Mind Link
  {
    id: "POWERMINDLINKMODBROADCAST",
    name: "☆ Broadcast (+2)",
    button_name: "☆ Broadcast (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Mind Link"
  },
  {
    id: "POWERMINDLINKMODLONGDISTANCE",
    name: "☆ Long Distance Link (+3)",
    button_name: "☆ Long Distance Link (+3)",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Mind Link"
  },
  // ----------------------
  {
    id: "POWERMINDLINKMODADDITIONALRECIPIENTS",
    name: "Additional Recipients +1",
    button_name: "+1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERMINDLINKMODADDITIONALRECIPIENTS2",
    name: "Additional Recipients +2",
    button_name: "+2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERMINDLINKMODADDITIONALRECIPIENTS3",
    name: "Additional Recipients +3",
    button_name: "+3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERMINDLINKMODADDITIONALRECIPIENTS4",
    name: "Additional Recipients +4",
    button_name: "+4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERMINDLINKMODADDITIONALRECIPIENTS5",
    name: "Additional Recipients +5",
    button_name: "+5",
    shotsUsed: "+5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERMINDLINKMODADDITIONALRECIPIENTS6",
    name: "Additional Recipients +6",
    button_name: "+6",
    shotsUsed: "+6",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERMINDLINKMODADDITIONALRECIPIENTS7",
    name: "Additional Recipients +7",
    button_name: "+7",
    shotsUsed: "+7",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERMINDLINKMODADDITIONALRECIPIENTS8",
    name: "Additional Recipients +8",
    button_name: "+8",
    shotsUsed: "+8",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERMINDLINKMODADDITIONALRECIPIENTS9",
    name: "Additional Recipients +9",
    button_name: "+9",
    shotsUsed: "+9",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Mind Link" }
    ],
    group: "Additional Recipients"
  },

  // ----------------------
  // POWER Mind Reading
  {
    id: "POWERMINDREADINGMODMINDWALK",
    name: "☆ Mind Walk (+2)",
    button_name: "☆ Mind Walk (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Mind Reading" }
    ],
    group: "Mind Reading"
  },

  // PROTECTION
  // {
  // id: "POWERPROTECTIONMODSHIELDOTHER",
  // name: "Shield Other (+1)",
  // button_name: "Shield Other (+1)",
  // shotsUsed: "+1",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Protection" }
  // ],
  // group: groupProtectionName
  // },
  // {
  // id: "POWERPROTECTIONMODADDITIONALRECIPIENTS",
  // name: "Additional Recipients +1",
  // button_name: "Add.Recipient's +1",
  // shotsUsed: "+1",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Protection" }
  // ],
  // group: groupProtectionName
  // },
  // {
  // id: "POWERPROTECTIONMODADDITIONALRECIPIENTS2",
  // name: "Additional Recipients +2",
  // button_name: "Add.Recipient's +2",
  // shotsUsed: "+2",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Protection" }
  // ],
  // group: groupProtectionName
  // },
  // {
  // id: "POWERPROTECTIONMODADDITIONALRECIPIENTS3",
  // name: "Additional Recipients +3",
  // button_name: "Add.Recipient's +3",
  // shotsUsed: "+3",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Protection" }
  // ],
  // group: groupProtectionName
  // },
  // {
  // id: "POWERPROTECTIONMODADDITIONALRECIPIENTS4",
  // name: "Additional Recipients +4",
  // button_name: "Add.Recipient's +4",
  // shotsUsed: "+4",
  // and_selector: [
  // { selector_type: "item_type", selector_value: "power" },
  // { selector_type: "item_name", selector_value: "Protection" }
  // ],
  // group: groupProtectionName
  // },

  // ----------------------
  // POWER Relief
  // {
  //   id: "POWERRELIEFMODRESTORATION",
  //   name: "Restoration (+3)",
  //   button_name: "Restoration (+3)",
  //   shotsUsed: "+3",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Relief" }
  //   ],
  //   group: groupReliefName
  // },
  // {
  //   id: "POWERRELIEFMODSTUNNED",
  //   name: "Stunned (+1)",
  //   button_name: "Stunned (+1)",
  //   shotsUsed: "+1",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Relief" }
  //   ],
  //   group: groupReliefName
  // },
  // // ----------------------
  // {
  //   id: "POWERRELIEFMODADDITIONALRECIPIENTS",
  //   name: "Additional Recipients +1",
  //   button_name: "Add.Recipient's +1",
  //   shotsUsed: "+1",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Relief" }
  //   ],
  //   group: groupReliefName
  // },
  // {
  //   id: "POWERRELIEFMODADDITIONALRECIPIENTS2",
  //   name: "Additional Recipients +2",
  //   button_name: "Add.Recipient's +2",
  //   shotsUsed: "+2",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Relief" }
  //   ],
  //   group: groupReliefName
  // },
  // {
  //   id: "POWERRELIEFMODADDITIONALRECIPIENTS3",
  //   name: "Additional Recipients +3",
  //   button_name: "Add.Recipient's +3",
  //   shotsUsed: "+3",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Relief" }
  //   ],
  //   group: groupReliefName
  // },
  // {
  //   id: "POWERRELIEFMODADDITIONALRECIPIENTS4",
  //   name: "Additional Recipients +4",
  //   button_name: "Add.Recipient's +4",
  //   shotsUsed: "+4",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Relief" }
  //   ],
  //   group: groupReliefName
  // },

  // ----------------------
  // POWER Sanctuary
  {
    id: "POWERSANCTUARYMODSTRONG",
    name: "Strong (+1)",
    button_name: "Strong (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sanctuary" }
    ],
    group: groupSanctuaryName
  },
  {
    id: "POWERSANCTUARYMODMEDIUMBLAST",
    name: "Medium Blast (+2)",
    button_name: "Medium Blast (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sanctuary" }
    ],
    group: groupSanctuaryName
  },
  {
    id: "POWERSANCTUARYMODLARGEBLAST",
    name: "Large Blast (+3)",
    button_name: "Large Blast (+3)",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sanctuary" }
    ],
    group: groupSanctuaryName
  },

  // ----------------------
  // POWER Shape Change
  // {
  //   id: "POWERSHAPECHANGEMODDURATION",
  //   name: "Duration (+1)",
  //   button_name: "Duration (+1)",
  //   shotsUsed: "+1",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Shape Change" }
  //   ],
  //   group: groupShapeChangeName
  // },
  // {
  //   id: "POWERSHAPECHANGEMODTRANSFORM2",
  //   name: "☆ Transform (+2)",
  //   button_name: "☆ Transform (+2)",
  //   shotsUsed: "+2",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Shape Change" }
  //   ],
  //   group: groupShapeChangeName
  // },
  // {
  //   id: "POWERSHAPECHANGEMODTRANSFORM3",
  //   name: "☆ Transform (+3)",
  //   button_name: "☆ Transform (+3)",
  //   shotsUsed: "+3",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Shape Change" }
  //   ],
  //   group: groupShapeChangeName
  // },
  // {
  //   id: "POWERSHAPECHANGEMODPOLYMORPH",
  //   name: "☆ Polymorph (+3)",
  //   button_name: "☆ Polymorph (+3)",
  //   shotsUsed: "+3",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Shape Change" }
  //   ],
  //   group: groupShapeChangeName
  // },
  // {
  //   id: "POWERSHAPECHANGEMODSIZE1",
  //   name: "SIZE-4TO-1 (+3)",
  //   button_name: "Sz-4to-1 (+3)",
  //   shotsUsed: "+3",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Shape Change" }
  //   ],
  //   group: groupShapeChangeName
  // },
  // {
  //   id: "POWERSHAPECHANGEMODSIZE2",
  //   name: "SIZE0 (+5)",
  //   button_name: "Sz0 (+5)",
  //   shotsUsed: "+5",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Shape Change" }
  //   ],
  //   group: groupShapeChangeName
  // },
  // {
  //   id: "POWERSHAPECHANGEMODSIZE3",
  //   name: "SIZE1to2 (+8)",
  //   button_name: "Sz1to2 (+8)",
  //   shotsUsed: "+8",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Shape Change" }
  //   ],
  //   group: groupShapeChangeName
  // },
  // {
  //   id: "POWERSHAPECHANGEMODSIZE4",
  //   name: "SIZE3to4 (+11)",
  //   button_name: "Sz3to4 (+1)",
  //   shotsUsed: "+11",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Shape Change" }
  //   ],
  //   group: groupShapeChangeName
  // },
  // {
  //   id: "POWERSHAPECHANGEMODSIZE5",
  //   name: "SIZE5to10 (+15)",
  //   button_name: "Sz5to10 (+15)",
  //   shotsUsed: "+15",
  //   and_selector: [
  //     { selector_type: "item_type", selector_value: "power" },
  //     { selector_type: "item_name", selector_value: "Shape Change" }
  //   ],
  //   group: groupShapeChangeName
  // },

  // ----------------------
  // POWER SMITE
  {
    id: "POWERSMITEMODGREATERSMITE",
    name: "☆ Greater Smite (+2)",
    button_name: "☆ Greater Smite (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Smite" }
    ],
    group: "Smite Modifiers - "
  },
  {
    id: "POWERSMITEMODSPIRITUALWEAPON",
    name: "Spiritual Weapon (+2)",
    button_name: "Spiritual Weapon (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Smite" }
    ],
    group: "Smite Modifiers - "
  },

  // ----------------------
  // POWER Sound/Silence
  {
    id: "POWERSOUNDMODGREATER",
    name: "☆ Greater Sound/Silence (+1)",
    button_name: "☆ Greater Sound/Silence (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Sound/Silence Modifiers - "
  },
  {
    id: "POWERSOUNDMODMOBILE",
    name: "Mobile (+1)",
    button_name: "Mobile (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Sound/Silence Modifiers - "
  },
  {
    id: "POWERSOUNDMODALARM",
    name: "Alarm Object (+1)",
    button_name: "Alarm Object (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Sound/Silence Modifiers - "
  },
  {
    id: "POWERSOUNDMODALARM2",
    name: "Alarm Area (+2)",
    button_name: "Alarm Area (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Sound/Silence Modifiers - "
  },
  // ----------------------
  {
    id: "POWERSOUNDMODADDITIONALRECIPIENTS",
    name: "Additional Recipients +1",
    button_name: "+1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERSOUNDMODADDITIONALRECIPIENTS2",
    name: "Additional Recipients +2",
    button_name: "+2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERSOUNDMODADDITIONALRECIPIENTS3",
    name: "Additional Recipients +3",
    button_name: "+3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERSOUNDMODADDITIONALRECIPIENTS4",
    name: "Additional Recipients +4",
    button_name: "+4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERSOUNDMODADDITIONALRECIPIENTS5",
    name: "Additional Recipients +5",
    button_name: "+5",
    shotsUsed: "+5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERSOUNDMODADDITIONALRECIPIENTS6",
    name: "Additional Recipients +6",
    button_name: "+6",
    shotsUsed: "+6",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERSOUNDMODADDITIONALRECIPIENTS7",
    name: "Additional Recipients +7",
    button_name: "+7",
    shotsUsed: "+7",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERSOUNDMODADDITIONALRECIPIENTS8",
    name: "Additional Recipients +8",
    button_name: "+8",
    shotsUsed: "+8",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERSOUNDMODADDITIONALRECIPIENTS9",
    name: "Additional Recipients +9",
    button_name: "+9",
    shotsUsed: "+9",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sound/Silence" }
    ],
    group: "Additional Recipients"
  },

  // ----------------------
  // POWER Speak Language
  {
    id: "POWERLANGUAGEMODGREATER",
    name: "☆ Greater Speak Language (+2)",
    button_name: "☆ Greater Speak Language (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Speak Language Modifiers - "
  },
  {
    id: "POWERLANGUAGEMODMASS",
    name: "☆ Mass Understanding (+5)",
    button_name: "☆ Mass Understanding (+5)",
    shotsUsed: "+5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Speak Language Modifiers - "
  },
  // ----------------------
  {
    id: "POWERLANGUAGEMODADDITIONALRECIPIENTS",
    name: "Additional Recipients +1",
    button_name: "+1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERLANGUAGEMODADDITIONALRECIPIENTS2",
    name: "Additional Recipients +2",
    button_name: "+2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERLANGUAGEMODADDITIONALRECIPIENTS3",
    name: "Additional Recipients +3",
    button_name: "+3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERLANGUAGEMODADDITIONALRECIPIENTS4",
    name: "Additional Recipients +4",
    button_name: "+4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERLANGUAGEMODADDITIONALRECIPIENTS5",
    name: "Additional Recipients +5",
    button_name: "+5",
    shotsUsed: "+5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERLANGUAGEMODADDITIONALRECIPIENTS6",
    name: "Additional Recipients +6",
    button_name: "+6",
    shotsUsed: "+6",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERLANGUAGEMODADDITIONALRECIPIENTS7",
    name: "Additional Recipients +7",
    button_name: "+7",
    shotsUsed: "+7",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERLANGUAGEMODADDITIONALRECIPIENTS8",
    name: "Additional Recipients +8",
    button_name: "+8",
    shotsUsed: "+8",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERLANGUAGEMODADDITIONALRECIPIENTS9",
    name: "Additional Recipients +9",
    button_name: "+9",
    shotsUsed: "+9",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Speak Language" }
    ],
    group: "Additional Recipients"
  },

  // ----------------------
  // POWER Stun
  {
    id: "POWERSTUNMODMEDIUM",
    name: "Medium Blast (+2)",
    button_name: "Medium Blast (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Stun" }
    ],
    group: groupStunName
  },
  {
    id: "POWERSTUNMODLARGE",
    name: "Large Blast (+3)",
    button_name: "Large Blast (+3)",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Stun" }
    ],
    group: groupStunName
  },

  // ----------------------
  // POWER SUMMON ALLY
  {
    id: "POWERSUMMONALLYMODNOVICE",
    name: "Novice (1)",
    button_name: "Novice (1)",
    shotsUsed: "1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Summon Ally Rank"
  },
  {
    id: "POWERSUMMONALLYMODSEASONED",
    name: "Seasoned (3)",
    button_name: "Seasoned (3)",
    shotsUsed: "3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Summon Ally Rank"
  },
  {
    id: "POWERSUMMONALLYMODVETERAN",
    name: "Veteran (5)",
    button_name: "Veteran (5)",
    shotsUsed: "5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Summon Ally Rank"
  },
  {
    id: "POWERSUMMONALLYMODHEROIC",
    name: "Heroic (7)",
    button_name: "Heroic (7)",
    shotsUsed: "7",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Summon Ally Rank"
  },
  // ----------------------
  // POWER SUMMON ALLY    
  {
    id: "POWERSUMMONALLYMODCOMBATEDGE",
    name: "Combat Edge x1 (+1)",
    button_name: "Combat Edge x1 (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Summon Ally Modifiers - "
  },
  {
    id: "POWERSUMMONALLYMODCOMBATEDGE2",
    name: "Combat Edge x2 (+2)",
    button_name: "Combat Edge x2 (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Summon Ally Modifiers - "
  },
  {
    id: "POWERSUMMONALLYMODCOMBATEDGE3",
    name: "Combat Edge x3 (+3)",
    button_name: "Combat Edge x3 (+3)",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Summon Ally Modifiers - "
  },
  {
    id: "POWERSUMMONALLYMODFLIGHT",
    name: "Flight (+2)",
    button_name: "Flight (+2)",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Summon Ally Modifiers - "
  },
  {
    id: "POWERSUMMONALLYMODMINDRIDER",
    name: "Mind Rider (+1)",
    button_name: "Mind Rider (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Summon Ally Modifiers - "
  },
  // ----------------------
  {
    id: "POWERSUMMONALLYMODINCREASEDTRAIT",
    name: "+1",
    button_name: "+1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id: "POWERSUMMONALLYMODINCREASEDTRAIT2",
    name: "+2",
    button_name: "+2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id: "POWERSUMMONALLYMODINCREASEDTRAIT3",
    name: "+3",
    button_name: "+3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id: "POWERSUMMONALLYMODINCREASEDTRAIT4",
    name: "+4",
    button_name: "+4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id: "POWERSUMMONALLYMODINCREASEDTRAIT5",
    name: "+5",
    button_name: "+5",
    shotsUsed: "+5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id: "POWERSUMMONALLYMODINCREASEDTRAIT6",
    name: "+6",
    button_name: "+6",
    shotsUsed: "+6",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id: "POWERSUMMONALLYMODINCREASEDTRAIT7",
    name: "+7",
    button_name: "+7",
    shotsUsed: "+7",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id: "POWERSUMMONALLYMODINCREASEDTRAIT8",
    name: "+8",
    button_name: "+8",
    shotsUsed: "+8",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Increased Trait"
  },
  {
    id: "POWERSUMMONALLYMODINCREASEDTRAIT9",
    name: "+9",
    button_name: "+9",
    shotsUsed: "+9",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "Increased Trait"
  },

  // ----------------------
  // POWER Wall Walker 
  // ----------------------
  {
    id: "POWERLANGUAGEMODADDITIONALRECIPIENTS",
    name: "Additional Recipients +1",
    button_name: "+1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERWALLWALKERMODADDITIONALRECIPIENTS2",
    name: "Additional Recipients +2",
    button_name: "+2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERWALLWALKERMODADDITIONALRECIPIENTS3",
    name: "Additional Recipients +3",
    button_name: "+3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERWALLWALKERMODADDITIONALRECIPIENTS4",
    name: "Additional Recipients +4",
    button_name: "+4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERWALLWALKERMODADDITIONALRECIPIENTS5",
    name: "Additional Recipients +5",
    button_name: "+5",
    shotsUsed: "+5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERWALLWALKERMODADDITIONALRECIPIENTS6",
    name: "Additional Recipients +6",
    button_name: "+6",
    shotsUsed: "+6",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERWALLWALKERMODADDITIONALRECIPIENTS7",
    name: "Additional Recipients +7",
    button_name: "+7",
    shotsUsed: "+7",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERWALLWALKERMODADDITIONALRECIPIENTS8",
    name: "Additional Recipients +8",
    button_name: "+8",
    shotsUsed: "+8",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  },
  {
    id: "POWERWALLWALKERMODADDITIONALRECIPIENTS9",
    name: "Additional Recipients +9",
    button_name: "+9",
    shotsUsed: "+9",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Wall Walker" }
    ],
    group: "Additional Recipients"
  }

];
