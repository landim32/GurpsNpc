import { Dice } from "../../../../Dice.js";
import { MageFactory } from "../../../Factory/MageFactory.js";
import { MageEnum } from "../../../Model/MageEnum.js";
import { EmptyMage } from "./EmptyMage.js";

export class Mage extends EmptyMage {

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        super.DoConcept(npc);
        let magicSchools = Dice.Next(1, 5);
        let usedConcepts = [];
        for (let i = 1; i <= magicSchools; i++) {
            var index = Math.floor(Math.random() * Object.keys(MageEnum).length);
            let m = MageEnum[Object.keys(MageEnum)[index]];
            if (!usedConcepts.includes(m)) {
                var mage = MageFactory.Create(m);
                mage.DoConcept(npc);
                usedConcepts.push(m);
            }
        }
    }
}
