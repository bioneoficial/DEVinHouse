package Enums;
import lombok.Getter;

import java.util.ArrayList;
import java.util.Arrays;
@Getter
public enum Classes {
    WARRIOR(180,15,15,0,100,35, new ArrayList<>(Arrays.asList(Weapon.SWORD, Weapon.AXE))),
    BARBARIAN(180, 15, 15,0,100,35, new ArrayList<>(Arrays.asList(Weapon.SWORD, Weapon.AXE))),
    THIEF(160, 10, 15,0,100,35, new ArrayList<>(Arrays.asList(Weapon.DAGGER, Weapon.BOW))),
    ARCHER(160,10,15,0,100,35,new ArrayList<>(Arrays.asList(Weapon.BOW, Weapon.DAGGER))),
    SORCERER(150,5,20,30,25,35,new ArrayList<>(Arrays.asList(Weapon.WAND, Weapon.STAFF))),
    WIZARD(150, 5, 20,30,25,35, new ArrayList<>(Arrays.asList(Weapon.STAFF, Weapon.WAND)));

    private final ArrayList<Weapon> weapons;
    private final int health,armor,attackPoints,manaPoints,stamina,gold;

    Classes(int health, int armor, int attackPoints, int manaPoints,int stamina, int gold, ArrayList<Weapon> weapons) {
        this.health = health;
        this.armor = armor;
        this.attackPoints = attackPoints;
        this.weapons = weapons;
        this.manaPoints = manaPoints;
        this.stamina = stamina;
        this.gold= gold;
    }
}
