package Enums;
import lombok.Getter;
    @Getter
    public enum Enemy {
        ARMOURER("Armourer Welligton", Sex.MALE, 60, 8, 2, Weapon.SWORD),
        ALCHEMIST("Alchemist Jonathan", Sex.MALE, 50, 4, 4, Weapon.STAFF),
        BOSS("Boss Dione", Sex.FEMALE, 70, 10, 6, Weapon.AXE);

        private final int healthPoints, armorPoints,attackDamage;
        private final String name;
        private final Sex sex;
        private final Weapon weapon;

        Enemy(String name, Sex sex, int healthPoints, int armorPoints, int attackDamage, Weapon weapon) {
            this.name = name;
            this.sex = sex;
            this.healthPoints = healthPoints;
            this.armorPoints = armorPoints;
            this.attackDamage = attackDamage;
            this.weapon = weapon;
        }

    }