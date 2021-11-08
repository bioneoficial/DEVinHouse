package Classes;
import Enums.Classes;
import Enums.Sex;
import Enums.Weapon;
import lombok.Getter;
import lombok.Setter;



@Getter
abstract public class Person {
    protected String name;
    protected Sex sex;
    protected Classes classe;
    @Setter
    protected int healthPoints;
    @Setter
    protected int armorPoints;
    protected int attackDamage;
    protected Weapon weapon;
    protected String weaponName;
    protected int weaponDamage;
    protected int totalDamage;
    protected int gold;
    protected int manaPoints;
    protected int stamina;

    public abstract void attack(Combat combat);
    public int healthDamaged(int receivedDamage) {
        if(receivedDamage == 0){
            return this.healthPoints;
        }
       return this.healthPoints -= receivedDamage;
    }
    public boolean isAlive() {
        return this.healthPoints > 0;
    }
}
