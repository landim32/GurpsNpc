import { Dice } from "../../../Dice.js";
import { AttributeEnum } from "../../Model/AttributeEnum.js";
import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { DifficultyEnum } from "../../Model/DifficultyEnum.js";
import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { LocalEnum } from "../../Model/LocalEnum.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { SkillInfo } from "../../Model/SkillInfo.js";
import { Race } from "./Race.js";

export class Reptile extends Race {
    get MyRace() {
        return RaceEnum.Reptile;
    }

    get NameSingular() {
        return "Reptiliano";

    }

    get NamePlural() {
        return "Reptilianos";

    }

    get PossibleConcepts() {
        return [
            ConceptEnum.Barbarian, ConceptEnum.Assassin, ConceptEnum.Thief,
            ConceptEnum.Swordman, ConceptEnum.TribalAxemen, ConceptEnum.TribalSpearmen
        ];
    };

    get Locals() {
        return [
            LocalEnum.Abyss, LocalEnum.Cave, LocalEnum.Dungeon, LocalEnum.ElfRuins
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
        npc.Race = RaceEnum.Reptile;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
        npc.STRaceMod += 4;
        npc.IQRaceMod--;
        npc.HTRaceMod += 2;
        npc.Advantages.push(new FeatureInfo("Reptiliano", 58));
        npc.Advantages.push(new FeatureInfo("RD 1 (Apenas na pele, -40%)"));
        npc.Advantages.push(new FeatureInfo("Longevidade"));
        npc.Advantages.push(new FeatureInfo("Membrana Nictante 3"));
        npc.Advantages.push(new FeatureInfo("Visão Perifêrica"));
        npc.Advantages.push(new FeatureInfo("Garras Afiadas"));
        npc.Advantages.push(new FeatureInfo("Dentes Afiados"));
        npc.Advantages.push(new FeatureInfo("Tolerância ao Calor 5 (Por volta de 80)"));
        npc.Disvantages.push(new FeatureInfo("Timidez (Média)"));
        npc.Disvantages.push(new FeatureInfo("Estigma Social (Bárbaro)"));
        npc.Skills.push(new SkillInfo(
            "Camuflagem",
            AttributeEnum.IQ,
            DifficultyEnum.Easy,
            1
        ));
        npc.Skills.push(new SkillInfo(
            "Sobrevivência (Deserto)",
            AttributeEnum.Per,
            DifficultyEnum.Medium,
            2
        ));
        if (Dice.IfDo(50)) {
            npc.Disvantages.push(new FeatureInfo("Hábitos Detestáveis (Comer Humanoídes)", -15));
        }
    }

    GenerateName() {
        return "Reptiliano";
    }
}