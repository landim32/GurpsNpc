import { Npc } from './Npc/BLL/Npc.js';
import { RaceEnum } from './Npc/Model/RaceEnum.js';

/**
 * 
 * @param {RaceEnum} race 
 */
function newNpc(race = null) {
  let npcCreator = new Npc();
  let npc = npcCreator.Generate(race);
  let content = npcCreator.ToHtml(npc);
  $("#content").append(
    "<div class=\"col-4\"><div class=\"card\" style=\"margin-bottom: 15px\">" + 
    "<div class=\"card-body\">" +
    content + "</div></div></div>"
  );
}

function loadRace() {
  for (let i = 0; i <= Object.keys(RaceEnum).length; i++) {
    let r = Object.keys(RaceEnum)[i];
    $("#race").append("<li><a class=\"dropdown-item race-link\" data-race=\"" + r + "\" href=\"#\">" + r + "</a></li>");
  }
  $(".race-link").click(function() {
    newNpc(RaceEnum[$(this).data("race")]);
    return true;
  });
}

(function () {
  loadRace();
  newNpc();
  newNpc();
  newNpc();
})();