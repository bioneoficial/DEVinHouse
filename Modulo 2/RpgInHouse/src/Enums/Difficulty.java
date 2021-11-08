package Enums;
import lombok.Getter;
@Getter
public enum Difficulty {
    EASY(1),
    NORMAL(2),
    EXTREME(3);
    private final int difficulty;
    Difficulty(int difficulty) {
        this.difficulty = difficulty;
    }
}
