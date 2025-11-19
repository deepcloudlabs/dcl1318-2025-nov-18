import Mastermind from "../components/game/Mastermind.vue";
import PlayerWins from "../components/cases/PlayerWins.vue";
import PlayerLoses from "../components/cases/PlayerLoses.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'game',
        component: Mastermind
    },
    {
        path: '/wins',
        name: 'wins',
        component: PlayerWins
    },
    {
        path: '/loses',
        name: 'loses',
        component: PlayerLoses
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;