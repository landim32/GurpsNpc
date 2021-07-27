import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { LocalEnum } from "../../Model/LocalEnum.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { Race } from "./Race.js";

export class Kobold extends Race {
    get MyRace() {
        return RaceEnum.Kobold;
    }

    get NameSingular() {
        return "Kobold";

    }

    get NamePlural() {
        return "Kobolds";

    }

    get PossibleConcepts() {
        return [
            ConceptEnum.Barbarian, ConceptEnum.Assassin, ConceptEnum.Thief, ConceptEnum.TribalCrossbowman,
            ConceptEnum.TribalAxemen, ConceptEnum.TribalSpearmen
        ];
    };

    get Locals() {
        return [
            LocalEnum.Cave
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
        npc.Race = RaceEnum.Kobold;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
        npc.STRaceMod -= 2;
        npc.DXRaceMod++;
        npc.IQRaceMod -= 2;
        npc.WillMod--;
        npc.Disvantages.push(new FeatureInfo("Kobold", -60));
        npc.Advantages.push(new FeatureInfo("Consumo Reduzido (Estomago de Ferro -50%)", 0));
        npc.Advantages.push(new FeatureInfo("Resistência a Doença (+8)", 0));
        npc.Disvantages.push(new FeatureInfo("Short Attention Span (9)", 0));
        npc.Disvantages.push(new FeatureInfo("Estigma Social (Sem educação)", 0));
        npc.Peculiarity.push(new FeatureInfo("Se insulta facilmente", 0));
        npc.Peculiarity.push(new FeatureInfo("Adora pegadinhas", 0));
    }

    GenerateName() {
        return "Kobold";
    }
}
