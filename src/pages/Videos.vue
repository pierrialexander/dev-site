<template>
    <main>
        <section class="container">
            <h1>Vídeos</h1>
            <section class="videos">

                <div class="video" v-for="(video,index) in video" :key="index">
                    <a :href="video.link" target="_blank">
                        <img :src="video.thumb" :alt="video.title">
                        <div class="video-title">{{video.title}}</div>
                    </a>
                </div>

            </section>
        </section>
    </main>
</template>

<script>
import api from '@/services/api.js';
export default {
    name: 'VideosSite',
    data() {
        return {
            video: []
        }
    },
    mounted() {
        api.get('/videos.json').then(response => {
            console.log(response.data);
            this.video = response.data;
        })
    }
}
</script>

<style scoped>

    main{
        align-items: center;
    }

    .videos {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .video {
        width: 80%;
    }
    
    .video img {
        width: 100%;
    }

    .video a {
        color: var(--color-text-dark);
        font-weight: 600;
    }

    @media(min-width: 700px) {
        .videos {
            flex-direction: row;
            align-items: flex-start;
            flex-wrap: wrap;
        }

        .video {
            margin-right: 30px;
            width: 300px;
        }
    }


</style>