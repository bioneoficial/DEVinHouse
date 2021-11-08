package Classes;
import lombok.Getter;
import lombok.Setter;
import Enums.*;
public class Player extends Person {
    @Setter @Getter
    private Motivation motivation;

    public Player(String name, Sex sex, Classes classe, Weapon weapon) {
        this.name = name;
        this.sex = sex;
        this.armorPoints = classe.getArmor();
        this.healthPoints = classe.getHealth();
        this.stamina = classe.getStamina();
        this.manaPoints = classe.getManaPoints();
        this.attackDamage = classe.getAttackPoints();
        this.weaponName = weapon.getWeaponName();
        this.weaponDamage = weapon.getWeaponDamage();
        this.classe = classe;
        this.weapon = weapon;
        this.gold = classe.getGold();
        this.totalDamage = this.weaponDamage + this.attackDamage;
    }

    @Override
    public String toString() {
        return "Name: " + name +
                "\nClasse: " + classe +
                "\nSex: " + sex +
                "\nHealthPoints: " + healthPoints +
                "\nArmorPoints: " + armorPoints +
                "\nGold: " + gold +
                "\nAttackDamage: " + attackDamage +
                "\nWeapon: " + weapon +
                "\nWeaponName: " + weaponName +
                "\nWeaponDamage: " + weaponDamage +
                "\nTotalDamage: " + totalDamage;
    }

    public static void run() {
        Engine.consoleClear();
        System.out.println("Você não estava preparado para a força do inimigo, e decide fugir para que possa tentar novamente em uma próxima vez.");
        System.out.println(Engine.player.getMotivation().getDeathText());
        System.exit(0);
    }
    @Override
    public void attack(Combat combat) {
        double damageMod = 1;
        if (Engine.difficulty == Difficulty.EXTREME) {
            //damageMod = 0.97; Working on balance
        }
        Player player = Combat.player;
        Npc npc = Combat.enemy;
        int rollDice = Engine.rollDice(20);
        if (rollDice == 1) {
            System.out.println("Attack miss!!");
            return;
        }

        int totalDamage = (int) ((rollDice + player.totalDamage) * damageMod);
        String string = "U hit a CRIT! U attacked with "+ player.getWeaponName() + " and inflicted " + totalDamage + " damage!";
        if (rollDice < 20) {
            totalDamage = (int) ((totalDamage - npc.getArmorPoints()) * damageMod);
            string = "U hit!! "+ player.getWeaponName() + " damage inflicted = " + totalDamage;
        }


        if (totalDamage < npc.getArmorPoints()) {
            System.out.println("Attack blocked!!");
            return;
        }

        npc.healthDamaged(totalDamage);

        if (!npc.isAlive()) {
            string = "O inimigo não é páreo para o seu heroísmo, e jaz imóvel aos seus pés.";
        }

        System.out.println(string);
    }

}
