const groupName = "BRSW.AttackOption";
const starIcon = "☆ ";

export const options = [
  {
    id: "DESPERATE_ATTACK-2",
    name: "Desperate Attack +2",
    button_name: "Desperate Attack (+2)",
    skillMod: 2,
    dmgMod: -2,
    dmgOverride: "",
    and_selector: [{
      selector_type: "skill",
      selector_value: "Fighting"
    },
    {
      selector_type: "item_type",
      selector_value: "weapon"
    }
    ],
    group: groupName
  },
  {
    id: "DESPERATE_ATTACK-4",
    name: "Desperate Attack +4",
    button_name: "Desperate Attack (+4)",
    skillMod: 4,
    dmgMod: -4,
    dmgOverride: "",
    and_selector: [{
      selector_type: "skill",
      selector_value: "Fighting"
    },
    {
      selector_type: "item_type",
      selector_value: "weapon"
    }
    ],
    group: groupName
  },
  {
    id: "SWEEPSMC",
    name: "Sweep",
    button_name: "Sweep (-2)",
    skillMod: "-2",
    // extra_text: "<p style='color: blue;' > You may use the sweep action once per turn hitting all targets in reach at -2 to hit. </p>",
    and_selector: [
      {
        or_selector: [
          {
            selector_type: "actor_has_effect",
            selector_value: "Sweep, Edge"
          },
          {
            selector_type: "actor_has_edge",
            selector_value: "Sweep"
          }]
      },
      {
        selector_type: "item_type",
        selector_value: "weapon"
      },
      {
        selector_type: "skill",
        selector_value: "Fighting"
      },
      {
        not_selector: [
          {
            selector_type: "actor_has_effect",
            selector_value: "Improved_Sweep, Edge"
          }]
      },
      {
        not_selector: [
          {
            selector_type: "actor_has_edge",
            selector_value: "Improved Sweep"
          }]
      }],
    group: groupName
  }
];
