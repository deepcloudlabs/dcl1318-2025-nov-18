import createSecret, {evaluateMove} from "../utils/mastermind-utils.js";
import {defineStore} from "pinia";
const LOCAL_STORAGE_KEY = "game-mastermind-vue";

export const useGameStore =
defineStore(
    'game',
    {
    state: () => ({
        level: 3,
        max_level: 10,
        max_moves: 10,
        lives: 3,
        tries: 0,
        counter: 60,
        max_counter: 60,
        guess: 123,
        secret: createSecret(3),
        moves: []
    }),
    getters: {
        hasLives: (state) => state.lives > 0,
        triesLeft: (state) => state.max_moves - state.tries,
    },
    actions: {
        saveStateToLocalStorage() {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this));
        },
        nextGameLevel() {
            this.level++;
            this.max_moves += 5;
            this.lives += 2;
            this.max_counter += 20;
            this.tries = 0;
            this.moves = [];
            this.counter = this.max_counter;
            this.secret = createSecret(this.level);
            this.saveStateToLocalStorage();
        },
        initGameLevel() {
            this.tries = 0;
            this.moves = [];
            this.counter = this.max_counter;
            this.secret = createSecret(this.level);
            this.saveStateToLocalStorage();
        },
        resetGame() {
            this.level = 3;
            this.tries = 0;
            this.lives = 3;
            this.moves = [];
            this.max_moves = 10;
            this.max_counter = 60;
            this.counter = this.max_counter;
            this.secret = createSecret(this.level);
            this.saveStateToLocalStorage();
        },
        play() {
            if (Number(this.guess) === this.secret) {
                if (this.level === this.max_level) {
                    this.resetGame();
                    return "wins";
                } else {
                    this.nextGameLevel();
                }
            } else {
                this.tries++;
                if (this.tries === this.max_moves) {
                    if (this.lives === 0) {
                        this.resetGame();
                        return "loses";
                    } else {
                        this.lives--;
                        this.initGameLevel();
                    }
                } else {
                    this.moves.push(evaluateMove(this.guess, this.secret));
                }
            }
            return "continues";
        },
        countDown() {
            this.counter--;
            if (this.counter <= 0) {
                if (this.lives === 0) {
                    this.resetGame();
                    return "loses";
                }
                this.lives--;
                this.initGameLevel();
            }
            this.saveStateToLocalStorage();
            return "continues";
        },
        loadStateFromLocalStorage() {
            let localState = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (localState) {
                localState = JSON.parse(localState);
                for (let field in localState) {
                    if (this.hasOwnProperty(field)) {
                        this[field] = localState[field];
                    }
                }
            }
        }
    }
    }
);