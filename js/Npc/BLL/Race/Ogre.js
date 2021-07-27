import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { LocalEnum } from "../../Model/LocalEnum.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { Race } from "./Race.js";

export class Ogre extends Race {
    get MyRace() {
        return RaceEnum.Ogre;
    }

    get NameSingular() {
        return "Ogro";

    }

    get NamePlural() {
        return "Ogros";

    }

    get PossibleConcepts() {
        return [
            ConceptEnum.Barbarian, ConceptEnum.TribalAxemen
        ];
    };

    get Locals() {
        return [
            LocalEnum.Cave
        ];
    };

    get AlliesRaces() {
        return [
            RaceEnum.Orc,
            RaceEnum.HalfOrc,
            RaceEnum.Goblin,
            RaceEnum.Hobgoblin,
            RaceEnum.Kobold
        ];
    };

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoRace(npc) {
        super.DoRace(npc);
        npc.Race = RaceEnum.Ogre;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
        npc.STRaceMod += 10;
        npc.DXRaceMod--;
        npc.IQRaceMod -= 3;
        npc.HTRaceMod += 3;
        npc.BaseMoveMod++;

        npc.Advantages.push(new FeatureInfo("Ogro", 28));
        npc.Advantages.push(new FeatureInfo("Paladar e olfato Aguçado 1"));
        npc.Advantages.push(new FeatureInfo("RD 3 (Apenas na pele, -40%)"));
        npc.Advantages.push(new FeatureInfo("Hipoalgia"));
        npc.Advantages.push(new FeatureInfo("Abascanto 2"));
        npc.Advantages.push(new FeatureInfo("Visão Noturna 9"));
        npc.Disvantages.push(new FeatureInfo("Aparência (Horrível)"));
        npc.Disvantages.push(new FeatureInfo("Hábitos Detestáveis (Comer humanoídes)"));
        npc.Disvantages.push(new FeatureInfo("Estigma Social (Bárbaro)"));
        npc.Disvantages.push(new FeatureInfo("Estigma Social (Sem educação)"));
    }

    GenerateName() {
        return "Ogros";
    }
}
