import { AttributeEnum } from './AttributeEnum.js';
import { DifficultyEnum } from './DifficultyEnum.js';
import { FeatureInfo } from './FeatureInfo.js';

export class SkillInfo extends FeatureInfo {

    constructor(name, attr, diff, pts) {
        super(name, pts);
        this._CanUseToParry = false;
        //this._Name = name;
        this._Attribute = attr;
        this._Difficulty = diff;
        //this._Pts = pts;
    }

    /**
     * @return AttribueEnum description
     */
    get Attribute() {
        return this._Attribute;
    }

    /**
     * @param  AttribueEnum value description
     */
    set Attribute(value) {
        this._Attribute = value;
    }

    /**
     * @return DifficultyEnum  description
     */
    get Difficulty() {
        return this._Difficulty;
    }

    /**
     * @param  DifficultyEnum value description
     */
    set Difficulty(value) {
        this._Difficulty = value;
    }

    get CanUseToParry() {
        return this._CanUseToParry;
    }

    set CanUseToParry(value) {
        this._CanUseToParry = value;
    }

    /**
     * @param NpcInfo npc
     * @return int  
     */
    GetNH(npc) {
        let nh = 0;
        switch (this.Attribute) {
            case AttributeEnum.ST:
                nh = npc.ST;
                break;
            case AttributeEnum.DX:
                nh = npc.DX;
                break;
            case AttributeEnum.IQ:
                nh = npc.IQ;
                break;
            case AttributeEnum.HT:
                nh = npc.HT;
                break;
            case AttributeEnum.Per:
                nh = npc.IQ + npc.PerMod;
                break;
            case AttributeEnum.Will:
                nh = npc.IQ + npc.WillMod;
                break;
            case AttributeEnum.Magic:
                nh = npc.IQ + npc.MagicMod;
                break;
        }
        switch (this.Difficulty) {
            case DifficultyEnum.Easy:
                nh--;
                break;
            case DifficultyEnum.Medium:
                nh -= 2;
                break;
            case DifficultyEnum.Hard:
                nh -= 3;
                break;
            case DifficultyEnum.VeryHard:
                nh -= 4;
                break;
        }
        switch (this.Pts) {
            case 1:
                nh++;
                break;
            case 2:
                nh += 2;
                break;
            case 4:
                nh += 3;
                break;
            case 8:
                nh += 4;
                break;
            case 12:
                nh += 5;
                break;
            case 16:
                nh += 6;
                break;
        }
        return nh;
    }
}
