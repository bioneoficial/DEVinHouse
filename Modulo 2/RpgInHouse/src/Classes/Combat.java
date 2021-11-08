package Classes;

import lombok.Getter;

@Getter
public class Combat {
        public static Player player;
        public static Npc enemy;

        public Combat(Player player, Npc enemy) {
            this.player = player;
            this.enemy = enemy;
        }

        public void combatActions() {
            int choice,confirm;
            Engine.lineBreak();
            do {
                System.out.println(" Action: 1 = ATTACK \n 2 = RUN");
                try {
                    choice = Integer.parseInt(Engine.input.nextLine());
                } catch (Exception e) {
                    choice = 3;
                }

                if (choice != 1 && choice != 2 ){
                    System.out.println("Invalid Option!");
                    confirm = 0;
                } else {
                    String action = choice == 1 ? "ATTACK" : "RUN";
                    System.out.println("You will " + action + "? Press 1 to confirm or type another number to choose again.");
                    confirm = Engine.choiceConfirm();
                }
            } while (confirm != 1);

            if (choice == 2) {
                Engine.lineBreak();
                Player.run();
                return;
            }

            Engine.lineBreak();
            player.attack(this);
            Engine.lineBreak();
        }

        public void combatInit() {
            boolean initRoll = initRoll();
            do {
                if (initRoll) {
                    combatActions();
                    enemy.attack(this);
                } else {
                    enemy.attack(this);
                    combatActions();
                }
            } while (enemy.isAlive());
        }

        public boolean initRoll() {
            int enemyInit = Engine.rollDice(20),playerInit = Engine.rollDice(20);

            return playerInit > enemyInit;
        }
}
