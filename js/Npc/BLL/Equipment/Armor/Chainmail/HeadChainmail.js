import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class HeadChainmail extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new ArmorInfo("Coifa de Cota de Malha", 55, 2);
        s.Local = "Crânio, Pescoço";
        s.RD = "4/2";
        npc.Equipments.push(s);
    }
}
