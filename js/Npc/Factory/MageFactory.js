import { MageAir } from "../BLL/Concept/Mage/MageAir.js";
import { MageAnimal } from "../BLL/Concept/Mage/MageAnimal.js";
import { MageBodyControl } from "../BLL/Concept/Mage/MageBodyControl.js";
import { MageDark } from "../BLL/Concept/Mage/MageDark.js";
import { MageEarth } from "../BLL/Concept/Mage/MageEarth.js";
import { MageFire } from "../BLL/Concept/Mage/MageFire.js";
import { MageHeal } from "../BLL/Concept/Mage/MageHeal.js";
import { MageIllusion } from "../BLL/Concept/Mage/MageIllusion.js";
import { MageTime } from "../BLL/Concept/Mage/MageTime.js";
import { MetaMage } from "../BLL/Concept/Mage/MetaMage.js";
import { MindControlMage } from "../BLL/Concept/Mage/MindControlMage.js";
import { MoveMage } from "../BLL/Concept/Mage/MoveMage.js";
import { Necromancer } from "../BLL/Concept/Mage/Necromancer.js";
import { Priest } from "../BLL/Concept/Mage/Priest.js";
import { ProtectMage } from "../BLL/Concept/Mage/ProtectMage.js";
import { SoundMage } from "../BLL/Concept/Mage/SoundMage.js";
import { StormMage } from "../BLL/Concept/Mage/StormMage.js";
import { WaterMage } from "../BLL/Concept/Mage/WaterMage.js";
import { MageEnum } from "../Model/MageEnum.js";

export class MageFactory {

    /**
     * 
     * @param {MageEnum} mage 
     * @returns MinorConcept
     */
    static Create(mage) {
        let m = null;
        switch (mage) {
            case MageEnum.MageAir:
                m = new MageAir();
                break;
            case MageEnum.MageAnimal:
                m = new MageAnimal();
                break;
            case MageEnum.MageBodyControl:
                m = new MageBodyControl();
                break;
            case MageEnum.MageDark:
                m = new MageDark();
                break;
            case MageEnum.MageEarth:
                m = new MageEarth();
                break;
            case MageEnum.MageFire:
                m = new MageFire();
                break;
            case MageEnum.MageHeal:
                m = new MageHeal();
                break;
            case MageEnum.MageIllusion:
                m = new MageIllusion();
                break;
            case MageEnum.MageTime:
                m = new MageTime();
                break;
            case MageEnum.MetaMage:
                m = new MetaMage();
                break;
            case MageEnum.MindControlMage:
                m = new MindControlMage();
                break;
            case MageEnum.MoveMage:
                m = new MoveMage();
                break;
            case MageEnum.Necromancer:
                m = new Necromancer();
                break;
            case MageEnum.Priest:
                m = new Priest();
                break;
            case MageEnum.ProtectMage:
                m = new ProtectMage();
                break;
            case MageEnum.SoundMage:
                m = new SoundMage();
                break;
            case MageEnum.StormMage:
                m = new StormMage();
                break;
            case MageEnum.WaterMage:
                m = new WaterMage();
                break;
        }
        return m;
    }
}