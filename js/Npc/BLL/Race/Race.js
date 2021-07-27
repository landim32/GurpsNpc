import { RaceEnum } from "../../Model/RaceEnum.js";

export class Race {
    /*
    public abstract RaceEnum MyRace { get; }

    public abstract string GenerateName();

    public abstract string NameSingular { get; }

    public abstract string NamePlural { get; }

    public abstract IList<Type> PossibleConcepts { get; }

    public abstract IList<LocalEnum> Locals { get; }

    public abstract IList<RaceEnum> AlliesRaces { get; }
    */

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoRace(npc) {
        npc.Name = this.GenerateName();
    }

    /**
     * 
     * @returns Concept
     */
    GetConcept() {
        let i = Dice.Next(0, this.PossibleConcepts.Count());
        var t = this.PossibleConcepts[i];
        //return (Concept.Concept)Activator.CreateInstance(t);
    }

    /**
     * 
     * @returns Race[]
     */
    static List() {
        //var races = new List<Race>();
        var races = [];
        var rs = Enum.GetValues(typeof(RaceEnum));
        //forEach (RaceEnum r in rs)
        rs.forEach(r => {
            races.push(this.Create(r))
        });
        return races;
    }
}
