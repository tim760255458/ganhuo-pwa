<template>
    <div>
        <v-container fluid grid-list-lg>
            <v-layout row wrap>
                <template v-for="item of list">
                    <v-flex xs12 :key="item._id">
                        <v-card
                            ripple
                            dark
                            class="elevation-2"
                        >
                            <v-card-title @click="openContentPage(item.url)" primary-title class="card-title-default">
                                {{ item.title }}
                                <span class="tag-time-default">{{ item.created_at }}</span>
                            </v-card-title>
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
import { xianduData } from '../../api/index.js'
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
    state.appHeaderState.title = route.query.tagName
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
        this.queryTagDate()
    },
    methods: {
        queryTagDate () {
            this.loading = true
            setInterval(() => {
                this.loading = false
            }, 5000)
            xianduData({
                id: this.$route.params.tag,
                count: this.size,
                page: this.num
            }).then(res => {
                this.loading = false
                if (!res.error) {
                    res.results.map(el => {
                        el.created_at = this.$moment(el.created_at).startOf('day').fromNow()
                        return el
                    })
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
            this.queryTagDate()
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
.tag-time-default
    font-size 10px
    color #9c9c9c
</style>
