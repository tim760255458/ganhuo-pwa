<template>
    <div>
        <v-container fluid grid-list-lg>
            <v-layout row wrap>
                <template v-for="(item, index) of list">
                    <v-flex xs12 :key="item._id">
                        <v-card
                            ripple
                        >
                            <v-card-title @click="openContentPage(item.url)" primary-title class="card-title-default">
                                {{ item.desc }}
                            </v-card-title>
                            <v-card-media
                                :height="150"
                                v-if="item.images"
                                :src="item.images ? item.images[0] : null"
                            ></v-card-media>
                        </v-card>
                    </v-flex>
                </template>
            </v-layout>
        </v-container>
        <v-btn color="info" @click="loadMore">load more ...</v-btn>
        <div v-if="loading" class="loading-default">
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
        </div>
    </div>
</template>
<script>
import { typeData } from '../../api/index.js'
let state = {
    appHeaderState: {
        show: true,
        title: 'Lavas',
        showMenu: false,
        showBack: true,
        showLogo: false,
        actions: [
            {
                icon: 'home',
                route: {
                    name: 'index'
                }
            }
        ]
    }
};

function setState(store, route) {
    state.appHeaderState.title = route.params.type
    store.dispatch('appShell/appHeader/setAppHeader', state.appHeaderState);
}
export default {
    async asyncData({store, route}) {
        setState(store, route);
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 500);
        });
    },
    activated() {
        setState(this.$store, this.$route);
    },
    data () {
        return {
            num: 1,
            size: 15,
            loadOver: false,
            list: [],
            loading: true
        }
    },
    created () {
        this.queryTypeDate()
    },
    methods: {
        queryTypeDate () {
            this.loading = true
            setInterval(() => {
                this.loading = false
            }, 5000)
            typeData({
                type: this.$route.params.type,
                pageSize: this.size,
                pageNumber: this.num
            }).then(res => {
                this.loading = false
                if (!res.error) {
                    this.list = this.list.concat(res.results)
                    if (res.results.length < this.size) {
                        this.loadOver = true
                    }
                }
            })
        },
        loadMore () {
            if (this.loadOver) {
                return
            }
            this.num++
            this.queryTypeDate()
        },
        openContentPage (url) {
            window.open(url)
        }
    }
}
</script>
<style lang="stylus" scoped>
.card-img-default
    width auto
    height 100px
    display block

.card-title-default
    text-align left

.loading-default
    text-align center
    width 100%
    position fixed
    top 60px
</style>
