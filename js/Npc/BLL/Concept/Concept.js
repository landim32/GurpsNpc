import { ArmorEnum } from '../../Model/ArmorEnum.js';
import { WeaponEnum } from '../../Model/WeaponEnum.js';
import { BodyBronze } from '../Equipment/Armor/Bronze/BodyBronze.js';
import { HeadBronze } from '../Equipment/Armor/Bronze/HeadBronze.js';
import { LegsBronze } from '../Equipment/Armor/Bronze/LegsBronze.js';
import { BodyChainmail } from '../Equipment/Armor/Chainmail/BodyChainmail.js';
import { HeadChainmail } from '../Equipment/Armor/Chainmail/HeadChainmail.js';
import { LegsChainmail } from '../Equipment/Armor/Chainmail/LegsChainmail.js';
import { BodyLeatherArmor } from '../Equipment/Armor/Leather/BodyLeatherArmor.js';
import { HeadLeatherArmor } from '../Equipment/Armor/Leather/HeadLeatherArmor.js';
import { LeatherThong } from '../Equipment/Armor/Leather/LeatherThong.js';
import { LegsLeatherArmor } from '../Equipment/Armor/Leather/LegsLeatherArmor.js';
import { Tunic } from '../Equipment/Armor/Leather/Tunic.js';
import { BodyPlate } from '../Equipment/Armor/Plate/BodyPlate.js';
import { HeadPlate } from '../Equipment/Armor/Plate/HeadPlate.js';
import { LegsPlate } from '../Equipment/Armor/Plate/LegsPlate.js';
import { BodyScales } from '../Equipment/Armor/Scales/BodyScales.js';
import { HeadScales } from '../Equipment/Armor/Scales/HeadScales.js';
import { LegsScales } from '../Equipment/Armor/Scales/LegsScales.js';
import { Shield } from '../Equipment/Shield.js';
import { Axe } from '../Equipment/Weapon/Axe/Axe.js';
import { Mace } from '../Equipment/Weapon/Axe/Mace.js';
import { Pickaxe } from '../Equipment/Weapon/Axe/Pickaxe.js';
import { TwoHandedAx } from '../Equipment/Weapon/Axe/TwoHandedAx.js';
import { TwrowingAx } from '../Equipment/Weapon/Axe/TwrowingAx.js';
import { Warhammer } from '../Equipment/Weapon/Axe/Warhammer.js';
import { Knife } from '../Equipment/Weapon/Knife/Knife.js';
import { Bow } from '../Equipment/Weapon/LongRanged/Bow.js';
import { Crossbow } from '../Equipment/Weapon/LongRanged/Crossbow.js';
import { Shortsword } from '../Equipment/Weapon/Shortsword/Shortsword.js';
import { Longspear } from '../Equipment/Weapon/Spear/Longspear.js';
import { Broadsword } from '../Equipment/Weapon/Sword/Broadsword.js';
import { Club } from '../Equipment/Weapon/Sword/Club.js';
import { Greatsword } from '../Equipment/Weapon/Sword/Greatsword.js';

export class Concept {
    //public abstract IList<WeaponEnum> PossibleWeapon { get; set; }
    //public abstract IList<ArmorEnum> PossibleArmor { get; set; }
    //public abstract void DoConcept(NpcInfo npc);

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoWeapon(npc) {
        let i = Math.floor(Math.random() * this.PossibleWeapon.length);
        var e = this.PossibleWeapon[i];
        switch (e) {
            case WeaponEnum.Axe:
                (new Axe()).DoEquipment(npc);
                break;
            case WeaponEnum.AxeAndShield:
                (new Axe()).DoEquipment(npc);
                (new Shield()).DoEquipment(npc);
                break;
            case WeaponEnum.DualAxe:
                (new Axe()).DoEquipment(npc);
                (new Axe()).DoEquipment(npc);
                break;
            case WeaponEnum.TwrowingAx:
                (new TwrowingAx()).DoEquipment(npc);
                break;
            case WeaponEnum.TwrowingAxAndShield:
                (new TwrowingAx()).DoEquipment(npc);
                (new Shield()).DoEquipment(npc);
                break;
            case WeaponEnum.DualTwrowingAx:
                (new TwrowingAx()).DoEquipment(npc);
                (new TwrowingAx()).DoEquipment(npc);
                break;
            case WeaponEnum.Pickaxe:
                (new Pickaxe()).DoEquipment(npc);
                break;
            case WeaponEnum.PickaxeAndShield:
                (new Pickaxe()).DoEquipment(npc);
                (new Shield()).DoEquipment(npc);
                break;
            case WeaponEnum.DualPickaxe:
                (new Pickaxe()).DoEquipment(npc);
                (new Pickaxe()).DoEquipment(npc);
                break;
            case WeaponEnum.AxeAndPickaxe:
                (new Axe()).DoEquipment(npc);
                (new Pickaxe()).DoEquipment(npc);
                break;
            case WeaponEnum.Mace:
                (new Mace()).DoEquipment(npc);
                break;
            case WeaponEnum.MaceAndShield:
                (new Mace()).DoEquipment(npc);
                (new Shield()).DoEquipment(npc);
                break;
            case WeaponEnum.Club:
                (new Club()).DoEquipment(npc);
                break;
            case WeaponEnum.ClubAndShield:
                (new Club()).DoEquipment(npc);
                (new Shield()).DoEquipment(npc);
                break;
            case WeaponEnum.Broadsword:
                (new Broadsword()).DoEquipment(npc);
                break;
            case WeaponEnum.BroadswordAndShield:
                (new Broadsword()).DoEquipment(npc);
                (new Shield()).DoEquipment(npc);
                break;
            case WeaponEnum.BroadswordDual:
                (new Broadsword()).DoEquipment(npc);
                (new Broadsword()).DoEquipment(npc);
                break;
            case WeaponEnum.Katana:
                break;
            case WeaponEnum.Knife:
                (new Knife()).DoEquipment(npc);
                break;
            case WeaponEnum.KnifeDual:
                (new Knife()).DoEquipment(npc);
                (new Knife()).DoEquipment(npc);
                break;
            case WeaponEnum.Shortsword:
                (new Shortsword()).DoEquipment(npc);
                break;
            case WeaponEnum.ShortswordAndShield:
                (new Shortsword()).DoEquipment(npc);
                (new Shield()).DoEquipment(npc);
                break;
            case WeaponEnum.ShortswordDual:
                (new Shortsword()).DoEquipment(npc);
                (new Shortsword()).DoEquipment(npc);
                break;
            case WeaponEnum.Spear:
                (new Longspear()).DoEquipment(npc);
                break;
            case WeaponEnum.SpearAndShield:
                (new Longspear()).DoEquipment(npc);
                (new Shield()).DoEquipment(npc);
                break;
            case WeaponEnum.LongSpear:
                (new Longspear()).DoEquipment(npc);
                break;
            case WeaponEnum.TwoHandedAx:
                (new TwoHandedAx()).DoEquipment(npc);
                break;
            case WeaponEnum.Warhammer:
                (new Warhammer()).DoEquipment(npc);
                break;
            case WeaponEnum.Greatsword:
                (new Greatsword()).DoEquipment(npc);
                break;
            case WeaponEnum.Bow:
                (new Bow()).DoEquipment(npc);
                break;
            case WeaponEnum.Crossbow:
                (new Crossbow()).DoEquipment(npc);
                break;
            default:
                break;
        }
    }

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoArmor(npc) {
        //var e = this.PossibleArmor[Dice.Next(this.PossibleArmor.Count())];
        let i = Math.floor(Math.random() * this.PossibleArmor.length);
        var e = this.PossibleArmor[i];
        switch (e) {
            case ArmorEnum.LeatherThong:
                (new LeatherThong()).DoEquipment(npc);
                break;
            case ArmorEnum.Tunic:
                (new Tunic()).DoEquipment(npc);
                break;
            case ArmorEnum.LegsLeatherArmor:
                (new LegsLeatherArmor()).DoEquipment(npc);
                break;
            case ArmorEnum.LeatherArmorWithoutHelm:
                (new BodyLeatherArmor()).DoEquipment(npc);
                (new LegsLeatherArmor()).DoEquipment(npc);
                break;
            case ArmorEnum.FullLeatherArmor:
                (new HeadLeatherArmor()).DoEquipment(npc);
                (new BodyLeatherArmor()).DoEquipment(npc);
                (new LegsLeatherArmor()).DoEquipment(npc);
                break;
            case ArmorEnum.LegsChainmail:
                (new LegsChainmail()).DoEquipment(npc);
                break;
            case ArmorEnum.ChainmailWithoutHelm:
                (new BodyChainmail()).DoEquipment(npc);
                (new LegsChainmail()).DoEquipment(npc);
                break;
            case ArmorEnum.FullChainmail:
                (new HeadChainmail()).DoEquipment(npc);
                (new BodyChainmail()).DoEquipment(npc);
                (new LegsChainmail()).DoEquipment(npc);
                break;
            case ArmorEnum.LegsScalesArmor:
                (new LegsScales()).DoEquipment(npc);
                break;
            case ArmorEnum.ScalesArmorWithoutHelm:
                (new BodyScales()).DoEquipment(npc);
                (new LegsScales()).DoEquipment(npc);
                break;
            case ArmorEnum.FullScalesArmor:
                (new HeadScales()).DoEquipment(npc);
                (new BodyScales()).DoEquipment(npc);
                (new LegsScales()).DoEquipment(npc);
                break;
            case ArmorEnum.LegsBronzeArmor:
                (new LegsBronze()).DoEquipment(npc);
                break;
            case ArmorEnum.BronzeArmorWithourHelm:
                (new BodyBronze()).DoEquipment(npc);
                (new LegsBronze()).DoEquipment(npc);
                break;
            case ArmorEnum.FullBronzeArmor:
                (new HeadBronze()).DoEquipment(npc);
                (new BodyBronze()).DoEquipment(npc);
                (new LegsBronze()).DoEquipment(npc);
                break;
            case ArmorEnum.LegsPlateArmor:
                (new LegsPlate()).DoEquipment(npc);
                break;
            case ArmorEnum.PlateArmorWithoutHelm:
                (new BodyPlate()).DoEquipment(npc);
                (new LegsPlate()).DoEquipment(npc);
                break;
            case ArmorEnum.FullPlateArmor:
                (new HeadPlate()).DoEquipment(npc);
                (new BodyPlate()).DoEquipment(npc);
                (new LegsPlate()).DoEquipment(npc);
                break;
        }
    }

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        this.DoWeapon(npc);
        this.DoArmor(npc);
    }
}