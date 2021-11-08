package Enums;
import lombok.Getter;
@Getter
public enum Weapon {
    AXE("Axe", 12),
    SWORD("Sword", 9),
    DAGGER("Dagger", 9),
    BOW("Bow", 8),
    WAND("Wand", 10),
    STAFF("Staff", 10);

    private final String weaponName;
    private final int weaponDamage;

    Weapon(String weaponName, int weaponDamage) {
        this.weaponName = weaponName;
        this.weaponDamage = weaponDamage;
    }
}
