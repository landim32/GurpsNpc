import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { LocalEnum } from "../../Model/LocalEnum.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { Race } from "./Race.js";

export class Skeleton extends Race {
    get MyRace() {
        return RaceEnum.Skeleton;
    }

    get NameSingular() {
        return "Esqueleto";

    }

    get NamePlural() {
        return "Esqueletos";

    }

    get PossibleConcepts() {
        return [
            ConceptEnum.Archer, ConceptEnum.Assassin, ConceptEnum.Thief, ConceptEnum.Mage,
            ConceptEnum.SwordKnight, ConceptEnum.Swordman, ConceptEnum.Spearmen
        ];
    };

    get Locals() {
        return [
            LocalEnum.AbandonedMine, LocalEnum.Abyss, LocalEnum.Castle, LocalEnum.Cave,
            LocalEnum.Dungeon, LocalEnum.Keep, LocalEnum.Mine, LocalEnum.Prison,
            LocalEnum.Ruins
        ];
    };

    get AlliesRaces() {
        return [];
    }

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoRace(npc) {
        super.DoRace(npc);
        npc.Race = RaceEnum.Skeleton;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
        npc.STRaceMod++;
        npc.DXRaceMod += 2;
        npc.IQRaceMod -= 2;
        npc.Weight /= 2;
        npc.Advantages.push(new FeatureInfo("Esqueleto"));
        npc.Advantages.push(new FeatureInfo("RD 2"));
        npc.Advantages.push(new FeatureInfo("Hipoalgia"));
        npc.Advantages.push(new FeatureInfo("Não recuperável"));
        npc.Disvantages.push(new FeatureInfo("Vulnerabilidade a ataque por esmagamento (x2)"));
    }

    GenerateName() {
        return "Esqueleto";
    }
}