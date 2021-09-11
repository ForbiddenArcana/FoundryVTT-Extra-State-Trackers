import { addExtraTrackersDnD5, addExtraTrackersTidy } from './actorOverride.js';

Hooks.on('renderActorSheet5eCharacter', (sheet, html, character) => {
  let sheetClasses = sheet.options.classes;
  /*if (sheetClasses[0] === "tidy5e") {
    addExtraTrackersTidy(html, sheet.actor);
  } else {
  */  addExtraTrackersDnD5(html, sheet.actor);
  //}
});

Hooks.once('setup', async function () {
  game.socket.on('module.extra-state-trackers', packet => {
      let data = packet.data;
      let type = packet.type;
      const actorId = packet.actorId;
      const currentActorId = packet.currentActorId;
      data.actor = game.actors.get(actorId);
      data.currentActor = game.actors.get(currentActorId);
  });
});
