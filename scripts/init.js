import * as EDGES from './br_edges.js'
import * as OPTIONS from './br_options.js'
import * as ABILITIES from './br_abilities.js'
import * as PPCOMMON from './br_ppcommon.js'

Hooks.once('ready', () => {
  if (game.modules.get("betterrolls-swade2")?.active) {
    game.brsw.add_actions(EDGES.edges);
    game.brsw.add_actions(OPTIONS.options);
    game.brsw.add_actions(ABILITIES.abilities);
    game.brsw.add_actions(PPCOMMON.ppcommon);
  } else {
    if (game.modules.get("betterrolls-swade2")?.active) {
      console.log("!!! Fantasy-Companion: You must activate Better Rolls Module!")
    }
  }
});
