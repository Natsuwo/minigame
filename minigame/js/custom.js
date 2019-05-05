new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startNewGame: function() {
            this.gameIsRunning = true;
            this.playerHealth;
            this.monsterHealth;
            turns = [];
        },
        attack: function() {
            // Check Options
            if (this.checkPlayerOptions()) {
                return;
            }
            // Monster
            this.monsterAttack();
            // Player
            damage = this.inputDamage(0, 10)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                textLog: 'Player hit Monster ' + damage
            });
        },
        specialAttack: function() {
             // Check Options
             if (this.checkPlayerOptions()) {
                return;
            }
            // Monster
            this.monsterAttack();
            this.turns.unshift({
                isPlayer: false,
                textLog: 'Monster hit Player ' + damage
            });
            // Player
            damage = this.inputDamage(0, 10)
            this.monsterHealth -= damage;
            this.playerHealth += damage;
            this.turns.unshift({
                isPlayer: true,
                textLog: 'Player hit Monster ' + damage
            });
        },
        heal: function() {
            if (this.playerHealth > 70) {
                return false;
            } else if (this.playerHealth <= 60) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 70;
            }
            this.turns.unshift({
                isPlayer: true,
                textLog: 'Heal 10'
            });
            
            this.monsterAttack();
        },
        monsterAttack: function() {
            damage = this.inputDamage(5, 10);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                textLog: 'Monster hit Player ' + damage
            });
        },
        giveUp: function() {
            this.gameIsRunning = false;
            this.turns = [];
            this.playerHealth = 100;
            this.monsterHealth = 100;
            alert('You lose!');
        },
        inputDamage: function(minDamage, maxDamage) {
            return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
        },
        checkPlayerOptions: function() {
            if (this.monsterHealth <= 0) {
                if(confirm('You won! New Game?')) {
                    this.startNewGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if(confirm('You lose! New Game?')) {
                    this.startNewGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return;
        }
    }
})