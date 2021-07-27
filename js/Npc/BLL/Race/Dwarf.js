import { AttributeEnum } from "../../Model/AttributeEnum.js";
import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { DifficultyEnum } from "../../Model/DifficultyEnum.js";
import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { LocalEnum } from "../../Model/LocalEnum.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { SkillInfo } from "../../Model/SkillInfo.js";
import { Race } from "./Race.js";

export class Dwarf extends Race {
    get MyRace() {
        return RaceEnum.Dwarf;
    }

    get NameSingular() {
        return "Anão";
    }

    get NamePlural() {
        return "Anões";
    }

    get PossibleConcepts() {
        return ConceptEnum.Barbarian, ConceptEnum.Assassin, ConceptEnum.Crossbowman, 
            ConceptEnum.Thief, ConceptEnum.Mage, ConceptEnum.AxeKnight, ConceptEnum.Paladin, 
            ConceptEnum.Axemen;
    };

    get Locals() {
        return [
            LocalEnum.AbandonedMine, LocalEnum.Mine, LocalEnum.UndergroundCity
        ];
    };

    get AlliesRaces() {
        return [
            RaceEnum.Human,
            RaceEnum.Gnome
        ];
    };

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoRace(npc) {
        super.DoRace(npc);
        npc.Race = RaceEnum.Dwarf;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;

        npc.STRaceMod += 2;
        npc.HTRaceMod++;
        npc.RDMod++;
        npc.STLiftingMod += 2;
        npc.BaseMoveMod--;

        npc.Height = (npc.Height * 0.67);
        npc.Weight += 10;

        npc.Advantages.push(0, new FeatureInfo("Anão", 35));
        npc.Advantages.push(new FeatureInfo("Talento(Artifíce)", 0));
        npc.Advantages.push(new FeatureInfo("RD 1(Na pele, -40%)", 0));
        npc.Advantages.push(new FeatureInfo("Expectativa de Vida Ampliada 1", 0));
        npc.Advantages.push(new FeatureInfo("Longevidade", 0));
        npc.Advantages.push(new FeatureInfo("Resistência a Veneno +3", 0));
        npc.Qualits.push(new FeatureInfo("Assina suas criações", 0));
        npc.Disvantages.push(new FeatureInfo("Cobiça(12)", 0));
        npc.Disvantages.push(new FeatureInfo("Avareza", 0));
        npc.Disvantages.push(new FeatureInfo("Teimosia", 0));
        npc.Peculiarity.push(new FeatureInfo("Sempre usa barba", 0));
        npc.Peculiarity.push(new FeatureInfo("Prefere ouro a outros metais", 0));
        npc.Skills.push(new SkillInfo(
            "Machado/Maça",
            AttributeEnum.DX,
            DifficultyEnum.Medium,
            2
        ));
    }

    GenerateName() {
        return "Anão";
    }
}
