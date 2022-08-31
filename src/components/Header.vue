// Componente do menu de navegação
<template>
    <header>
        <nav class="container">
            <router-link to="/"><img src="https://cdn.svgporn.com/logos/vuetifyjs.svg?response-content-disposition=attachment%3Bfilename%3Dvuetifyjs.svg" id="logo" alt="DEV"></router-link><img id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" alt="Abrir Menu" v-on:click="openMenu">

            <div id="menu-overlay" v-if="menuActive" v-on:click="closeMenu"></div>
            <div id="menu-items" :class="{active: menuActive}">
                <img src="https://cdn.svgporn.com/logos/vuetifyjs.svg?response-content-disposition=attachment%3Bfilename%3Dvuetifyjs.svg" id="menu-logo" alt="DEV">
                <ul>
                    <li v-on:click="closeMenu"><router-link to="/">Home</router-link></li>
                    <li v-on:click="closeMenu"><router-link to="/video">Vídeo</router-link></li>
                    <li v-on:click="closeMenu"><router-link to="/sobre">Sobre</router-link></li>
                    <li v-on:click="closeMenu"><router-link to="/contato">Contato</router-link></li>
                </ul>
            </div>

        </nav>
    </header>
</template>


<script>
export default {
    name: 'HeaderTopo',
    data() {
        return {
            menuActive: false
        }
    },
    methods: {
        openMenu: function() {
            this.menuActive = true;
        },
        closeMenu: function() {
            this.menuActive = false;
        }
    }
}
</script>


<style scoped>
    header {
        background-color: var(--color-background-nav);
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav {
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }

    #logo {
        width: 50px;
    }

    #menu-button {
        width: 30px;
    }

    #menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: #000000;
        opacity: 0.8;
    }

    #menu-logo {
        width: 50px;
        margin-top: 30px;
        margin-bottom: 15px;
    }

    #menu-items {
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    #menu-items.active {
        display: flex;
    }

    ul{
        list-style: none;
        text-align: center;
    }

    ul li a {
        color: var(--color-text-light);
    }

    ul li {
        margin: 20px 0px;
    }

    @media (min-width: 700px) {
        #menu-button,
        #menu-logo,
        #menu-overlay {
            display: none;
        }

        #menu-items {
            align-items: flex-end;
            display: flex;
            position: static;
            height: 60px;
            widows: auto;
        }

        ul {
            display: flex;
        }

        ul li {
            margin-left: 20px;

        }
    }
</style>
