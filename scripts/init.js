import * as EDGES from './br_edges.js'
import * as OPTIONS from './br_options.js'
import * as ABILITIES from './br_abilities.js'
import * as PPCOMMON from './br_ppcommon.js'
import * as PPNOVICE from './br_ppnovice.js'
import * as PPSEASONED from './br_ppseasoned.js'
import * as PPVETERAN from './br_ppveteran.js'
import * as PPHEROIC from './br_ppheroic.js'
import * as PPAPG from './br_ppapg.js'

Hooks.once('ready', () => {
  
  if ( game.modules.get("betterrolls-swade2")?.active ) { 
    game.brsw.add_actions(EDGES.edges);
    game.brsw.add_actions(OPTIONS.options);
    game.brsw.add_actions(ABILITIES.abilities);    
    game.brsw.add_actions(PPCOMMON.ppcommon);
    game.brsw.add_actions(PPNOVICE.ppnovice);
    game.brsw.add_actions(PPSEASONED.ppseasoned);     
    game.brsw.add_actions(PPVETERAN.ppveteran);    
    game.brsw.add_actions(PPHEROIC.ppheroic);    
    game.brsw.add_actions(PPAPG.ppapg);     
  } else {
    if ( game.modules.get("betterrolls-swade2")?.active ) { 
      console.log("!!! Savage Pathfinder - Enhanced: You must activate Better Rolls Module!")    
    }
  }
 
}); // END HOOKS