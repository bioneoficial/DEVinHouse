package Classes;

import Enums.*;

import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class Engine {
    static Scanner input = new Scanner(System.in);
    static Difficulty difficulty;
    static Player player;
    static Random random = new Random();

    public static String getPlayer() {
        return player.toString();
    }

    public static int rollDice(int diceFace) {
        return 1 + Engine.random.nextInt(diceFace);
    }

    public static void continueOp() {
        System.out.println("Press ENTER to continue");
        input.nextLine();
    }

    public static void consoleClear() {
        for (int i = 0; i < 100; i++) {
            System.out.println();
        }
    }

    public static int choiceConfirm() {
        int confirm;
        try {
            confirm = Integer.parseInt(input.nextLine());
        } catch (Exception e) {
            confirm = 2;
            System.out.println("Type a Integer Number.");
        }
        return confirm;
    }

    public static void lineBreak() {
        for (int i = 1; i <= 90; i++) {
            System.out.print("*");
        }
        System.out.println();
    }

    public static void charCreation() {
        String name = getPlayerName();
        Sex sex = getSex();
        Classes classes = getClasses();
        Weapon weapon = getWeapon(classes);
        Difficulty difficulty = getdifficulty();

        player = new Player(name, sex, classes, weapon);
        Engine.difficulty = difficulty;
        System.out.println(player);
        continueOp();
    }

    private static Difficulty getdifficulty() {
        int confirm,difficultyLevel;
        Difficulty difficulty = null;
        do {
            System.out.println("Game difficulty?");
            for (Difficulty difficulty1 : Difficulty.values()) {
                System.out.println(difficulty1.ordinal() + ". " + difficulty1);
            }
            try {
                difficultyLevel = Integer.parseInt(input.nextLine());
            } catch (Exception e) {
                difficultyLevel = Difficulty.values().length;
            }
            if (difficultyLevel >= Difficulty.values().length) {
                System.out.println("Invalid option!");
                confirm = 2;
            } else {
                difficulty = Difficulty.values()[difficultyLevel];
                System.out.println("Game difficulty: " + difficulty + "\n Press 1 to confirm or other number to choose again.");
                confirm = choiceConfirm();
            }
        } while (confirm != 1);
        return difficulty;
    }

    public static Weapon getWeapon(Classes classes) {
        int confirm,weapon1;
        ArrayList<Weapon> weapons = classes.getWeapons();
        Weapon weapon = null;
        do {
            System.out.println("whats ur weapon?");
            for (Weapon weapon2 : weapons) {
                System.out.println(weapons.indexOf(weapon2) + " = " + weapon2);
            }
            try {
                weapon1 = Integer.parseInt(input.nextLine());
            } catch (Exception e) {
                weapon1 = weapons.size();
            }
            if (weapon1 >= weapons.size()) {
                System.out.println("Invalid option.");
                confirm = 2;
            } else {
                weapon = weapons.get(weapon1);
                System.out.println("Ur weapon is " + weapon + "\n Press 1 to confirm or other number to choose again.");
                confirm = choiceConfirm();
            }
        } while (confirm != 1);
        return weapon;
    }

    public static Classes getClasses() {
        int confirm,classe;
        Classes classes = null;
        do {
            System.out.println("Whats ur class?");
            for (Classes classes1 : Classes.values()) {
                System.out.println(classes1.ordinal() + ". " + classes1);
            }
            try {
                classe = Integer.parseInt(input.nextLine());
            } catch (Exception e) {
                classe = Classes.values().length;
            }
            if (classe >= Classes.values().length) {
                System.out.println("\"Invalid option.");
                confirm = 2;
            } else {
                classes = Classes.values()[classe];
                System.out.println("Ur class is " + classes + "\n Press 1 to confirm or other number to choose again.");
                confirm = choiceConfirm();
            }
        } while (confirm != 1);
        return classes;
    }

    public static Sex getSex() {
        int confirm,sex1 = 0;
        Sex sex = null;
        do {
            System.out.println("Ur sex?");
            for (Sex sex2 : Sex.values()) {
                System.out.println(sex2.ordinal() + ". " + sex2);
            }
            try {
                sex1 = Integer.parseInt(input.nextLine());
            } catch (Exception e) {
                sex1 = Sex.values().length;
            }
            if (sex1 >= Sex.values().length) {
                System.out.println("Invalid option.");
                confirm = 2;
            } else {
                sex = Sex.values()[sex1];
                System.out.println("ur sex is " + sex + "\nPress 1 to confirm or other number to choose again.");
                confirm = choiceConfirm();
            }
        } while (confirm != 1);

        return sex;
    }

    public static String getPlayerName() {
        int confirm;
        String name;
        do {
            System.out.println("Ur  name?");
            name = input.nextLine();
            System.out.println("Ur name is " + name + "\n Press 1 to confirm or other number to choose again.");
            confirm = choiceConfirm();
        } while (confirm != 1);
        return name;
    }

    public static String getMotivation() {
        int confirm,motivation1;
        Motivation motivation = null;
        do {
            System.out.println("Whats ur Motivation?");
            for (Motivation motivation2 : Motivation.values()) {
                System.out.println(motivation2.ordinal() + ". " + motivation2.getMotivation());
            }
            try {
                motivation1 = Integer.parseInt(input.nextLine());
            } catch (Exception e) {
                motivation1 = Motivation.values().length;
            }
            if (motivation1 >= Motivation.values().length) {
                System.out.println("Invalid option.");
                confirm = 2;
            } else {
                motivation = Motivation.values()[motivation1];
                System.out.println("Ur motivation is " + motivation + " Press 1 to confirm or other number to choose again.");
                confirm = choiceConfirm();
            }
        } while (confirm != 1);
        player.setMotivation(motivation);
        lineBreak();
        return motivation.getMotivationText();
    }

    public static void forwardOrSurrender() {
        int choice,confirm;
        do {
            Engine.lineBreak();
            System.out.println(" Choose: \n1. Give Up\n  2. Go Forward");

            try {
                choice = Integer.parseInt(input.nextLine());
            } catch (Exception e) {
                choice = 3;
            }

            if (choice != 2 && choice != 1) {
                System.out.println("Invalid Option!");
                confirm = 0;
            } else {
                String action = choice == 1 ? "Give up" : "Go Forward!";
                System.out.println("U will " + action + "? \n Press 1 to confirm or other number to choose again.");
                confirm = choiceConfirm();
            }
        } while (confirm != 1);

        if (choice == 1) {
            Engine.lineBreak();
            System.out.println("O medo invade o seu coração e você sente que ainda não está à altura do desafio. Você se volta \n para a noite lá fora e corre em direção à segurança.");
            System.exit(0);
            return;
        }

        Engine.lineBreak();
        System.out.println("Você caminha, atento a todos os seus sentidos, por vários metros, até visualizar a frente uma fonte \n de luz, que você imagina ser a chama de uma tocha, vindo de dentro de uma porta aberta.");
    }

    public static void walkJumpRun() {
        int choice,confirm;
        do {
            System.out.println("Walk Through door:\n 1 = Jump \n 2 = Walking\n 3 = Running");

            try {
                choice = Integer.parseInt(input.nextLine());
            } catch (Exception e) {
                choice = 5;
            }

            if (choice < 1 || choice > 3) {
                System.out.println("Invalid option.");
                confirm = 0;
            } else {
                System.out.println("Press 1 to confirm or other number to choose again.");
                confirm = choiceConfirm();
            }
        } while (confirm != 1);

        if (choice == 1) {
            Engine.lineBreak();
            System.out.println(" Você se concentra e pula em direção à luz, saltando de antes da porta até o interior da sala.");
            return;
        }
        if (choice == 2) {
            Engine.lineBreak();
            System.out.println("Você toma cuidado e vai caminhando vagarosamente em direção à luz. Quando você pisa exatamente embaixo da porta, você sente o chão ceder levemente, como se tivesse pisado em uma pedra solta. Você ouve um ruído de mecanismos se movimentando, e uma escotilha se abre no teto atrás de você, no corredor. Flechas voam da escotilha em sua direção, e você salta para dentro da sala, porém uma delas te acerta na perna.");
            int receivedDamage = Engine.rollDice(10);
           // player.healthDamaged(receivedDamage);
            System.out.println("U Received " + receivedDamage + " damage!\n  HP = " + player.healthDamaged(receivedDamage));
            Engine.lineBreak();
            return;
        }
        Engine.lineBreak();
        System.out.println("Você respira fundo e desata a correr em direção à sala. Quando passa pela porta, sente que pisou em uma pedra solta, mas não dá muita importância e segue para dentro da sala, olhando ao redor à procura de inimigos. Não tem ninguém, mas você ouve sons de flechas batendo na pedra atrás de você, e quando se vira, vê várias flechas no chão. Espiando pela porta, você entende que pisou em uma armadilha que soltou flechas de uma escotilha aberta no teto, mas por sorte você entrou correndo e conseguiu escapar desse ataque surpresa.");
    }

    public static void armourerCombat() {
        Combat combat = new Combat(Engine.player, new Npc(Enemy.ARMOURER));
        combat.combatInit();
        System.out.println("Após derrotar o Armeiro, você percebe que seus equipamentos estão muito danificados, e olha em volta, encarando todas aquelas peças de armaduras resistentes e em ótimo estado.");
        int confirm, choice;
        do {
            lineBreak();
            System.out.println("O que você desejar fazer?\n  1= USAR ARMADURA DO INIMIGO\n 2= SEGUIR EM FRENTE");
            try {
                choice = Integer.parseInt(input.nextLine());
            } catch (Exception e) {
                choice = 3;
            }
            if (choice > 2) {
                System.out.println("Invalid option");
                confirm = 2;
            } else {
                String tipoEscolha = choice == 1 ? "Take armor" : "Move Forward";
                System.out.println("u will " + tipoEscolha + "\n Press 1 to confirm or other number to choose again.");
                confirm = choiceConfirm();
            }
        } while (confirm != 1);
        lineBreak();
        if (choice == 1) {
            System.out.println(" Você resolve usar os equipamentos do inimigo contra ele, e trocar algumas peças suas, que estavam danificadas, pelas peças de armaduras existentes na sala. De armadura nova, você se sente mais protegido para os desafios à sua frente.");
            int armorBefore = player.getArmorPoints();
            player.setArmorPoints(armorBefore + 5);
            int armorAfter = player.getArmorPoints();
            lineBreak();
            System.out.println("your armor points go from " + armorBefore + " to " + armorAfter);
            lineBreak();
            continueOp();
            return;
        }
        System.out.println("Você decide que não precisa utilizar nada que venha das mãos do inimigo.");
        lineBreak();
        continueOp();
    }
    public static void alchemistCombat() {
        Combat combat = new Combat(Engine.player, new Npc(Enemy.ALCHEMIST));
        combat.combatInit();
        System.out.println("Após derrotar o Alquimista, você olha em volta, tentando reconhecer alguma poção do estoque do inimigo.Em uma mesa, você reconhece uma pequena garrafa de vidro contendo um líquido levemente rosado, pega a garrafa e pondera se deve beber um gole.");
        int confirm, choice;
        do {
            lineBreak();
            System.out.println(" O que você desejar fazer? 1= BEBER A POÇÃO 2= NÃO BEBER A POÇÃO E SEGUIR EM FRENTE");
            try {
                choice = Integer.parseInt(input.nextLine());
            } catch (Exception e) {
                choice = 3;
            }
            if (choice > 2) {
                System.out.println("Invalid option");
                confirm = 2;
            } else {
                String string = choice == 1 ? "BEBER A POÇÃO" : "NÃO BEBER A POÇÃO E SEGUIR EM FRENTE";
                System.out.println("Você irá \"" + string + "\"? Press 1 to confirm or other number to choose again.");
                confirm = choiceConfirm();
            }
        } while (confirm != 1);
        lineBreak();
        if (choice == 1) {
            System.out.println("""
                    Você se sente revigorado para seguir adiante!""");
            int healthBefore = player.getHealthPoints(),healthAfter = player.getHealthPoints();
            healthAfter = player.getClasse().getHealth();
            player.setHealthPoints(healthAfter);
            lineBreak();
            System.out.println("HP was = " + healthBefore + " now is = " + healthAfter);
            lineBreak();
            continueOp();
            return;
        }
        System.out.println("Você fica receoso de beber algo produzido pelo inimigo.");
        lineBreak();
        continueOp();
    }

    public static void bossFight() {
        int confirm, choice;
        do {
            lineBreak();
            System.out.println("Action:  1 = Wait and cry 2 = Attack");
            try {
                choice = Integer.parseInt(input.nextLine());
            } catch (Exception e) {
                choice = 3;
            }
            if (choice != 2 && choice != 1) {
                System.out.println("Invalid option");
                confirm = 0;
            } else {
                String choice1 = choice == 1 ? "Wait" : "Attack";
                System.out.println("U will " + choice1 + " Press 1 to confirm or other number to choose again.");
                confirm = choiceConfirm();
            }
        } while (confirm != 1 || choice == 1);

        Combat combat = new Combat(Engine.player, new Npc(Enemy.BOSS));
        combat.combatInit();
        continueOp();
    }
}