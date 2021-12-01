//User variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Enemy variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyNames);
// console.log(enemyNames.length);
// console.log(enemyNames[0]);
// console.log(enemyNames[3]);

//Fight variables
var fight = function(enemyName) {
    //Alert players the round is starting
    window.alert("Welcome to Robot Gladiators!");

    //Log a resulting message to the console so we know it worked
    
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    
    //Log a resulting message to the console so we know it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //Check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

//Execute Fight Function
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //If player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //remove enemy's health by subtracting the amount set in playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            //check enemy's health
            if (enemyHealth <=0) {
                window.alert(enemyName + " has died!");
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            //remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        //if player chooses skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")
                //if yes (true), leave fight
                if (confirmSkip) {
                    window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                    //subtract money from playerMoney for skipping
                    playerMoney = playerMoney - 2;
                }
                //if no (false), ask question again by running fight() again
                else {
                    fight();
                }
        } else {
            window.alert("You need to choose a valid option. Try again!");
            }