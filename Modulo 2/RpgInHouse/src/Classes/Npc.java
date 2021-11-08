package Classes;
import Enums.Enemy;
import Enums.Difficulty;

public class Npc extends Person {
    public Npc(Enemy enemy) {
        this.name = enemy.getName();
        this.sex = enemy.getSex();
        this.healthPoints = enemy.getHealthPoints();
        this.weaponDamage = enemy.getWeapon().getWeaponDamage();
        this.armorPoints = enemy.getArmorPoints();
        this.attackDamage = enemy.getAttackDamage();
        this.totalDamage = this.weaponDamage + this.attackDamage;
    }
    @Override
    public void attack(Combat combat) {
        double damageMod = 1;
        if (Engine.difficulty == Difficulty.EASY) {
            damageMod = 0.8;
        }else if(Engine.difficulty == Difficulty.EXTREME){
            this.healthPoints *= 1.1;
        }

        Npc npc = Combat.enemy;
        Player player = Combat.player;

        int rollDice = Engine.rollDice(20);
        int totalDamage =  ((rollDice + npc.totalDamage) * (int)damageMod) ;
        if (rollDice == 1) {
            System.out.println("Enemy miss!!");
            return;
        }
        String string = null;
        if (rollDice == 20) {
            player.healthDamaged(totalDamage);
            string = "Enemy hit a crit! U suffered "+ totalDamage + "Damage.  HP = " + player.getHealthPoints();
        }
        if (rollDice < 20) {
            if (totalDamage < player.getArmorPoints()) {
                System.out.println("Enemy miss!");
                return;
            }
            player.healthDamaged(totalDamage);
            string = "Enemy hit! U suffered "+ totalDamage + " HP = " + player.getHealthPoints();
        }
      //  player.healthDamaged(totalDamage);
        if (!player.isAlive()) {
            System.out.println("YOU ARE DEAD. \n");
            System.exit(0);
        }
        System.out.println(string);
    }
}
