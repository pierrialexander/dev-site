<template>
    <main>
        <div class="text-top">
            Videos novos toda Sexta as 19hrs
        </div>

        <a href="http://youtube.com" target="_blank">
            <img id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg" alt="Inscreva-se">
        </a>

        <div class="text-bottom">
            https://www.youtube.com/channel/
        </div>
    </main>
</template>

<script>
export default {
    name: 'HomeSite'
}
</script>


<style scoped>
    main {
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }

    .text-top {
        color: var(--color-text-light);
        font-size: 18px;
        margin-bottom: 20px;
    }

    #subscribe {
        width: 280px;
    }

    .text-bottom {
        color: var(--color-text-light);
        font-size: 18px;
        margin-top: 20px;
    }

    @media(min-width: 700px){
        #subscribe {
            width: 340px;
        }

        .text-top {
            color: var(--color-text-light);
            font-size: 22px;
            margin-bottom: 20px;
        }
    }
</style>