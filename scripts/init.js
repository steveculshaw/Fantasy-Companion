import * as EDGES from './br_edges.js'
import * as OPTIONS from './br_options.js'
import * as ABILITIES from './br_abilities.js'
import * as PPCOMMON from './br_ppcommon.js'
import * as PPNOVICE from './br_ppnovice.js'
import * as PPSEASONED from './br_ppseasoned.js'
import * as PPAPG from './br_ppapg.js'

Hooks.once('ready', () => {
  if (game.modules.get("betterrolls-swade2")?.active) {
    console.log("!!! Fantasy-Companion: Better Rolls Module active !!!")
    game.brsw.add_actions(EDGES.edges);
    game.brsw.add_actions(OPTIONS.options);
    game.brsw.add_actions(ABILITIES.abilities);
    game.brsw.add_actions(PPCOMMON.ppcommon);
    game.brsw.add_actions(PPNOVICE.ppnovice);
    game.brsw.add_actions(PPSEASONED.ppseasoned);
    game.brsw.add_actions(PPAPG.ppapg);
  } else {
    console.log("!!! Fantasy-Companion: Better Rolls Module NOT active !!! ")
    if (game.modules.get("betterrolls-swade2")?.active) {
      console.log("!!! Fantasy-Companion: SO WHAT HAPPENS HERE? !!!")
    }
  }
});
