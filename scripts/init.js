import * as OPTIONS from './br_options.js'

Hooks.once('ready', () => {
  if (game.modules.get("betterrolls-swade2")?.active) {
    game.brsw.add_actions(OPTIONS.options);
  } else {
    if (game.modules.get("betterrolls-swade2")?.active) {
      console.log("!!! Fantasy-Companion: You must activate Better Rolls Module!")
    }
  }
});
