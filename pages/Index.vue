<template>
    <div>
        <!-- <div class="content">
            <div>
                <h2>LAVAS</h2>
                <h4>[ˈlɑ:vəz]</h4>
            </div>
        </div> -->
        <template v-for="(value, key) of todayData">
            <v-list dark three-line :key="key">
                <v-subheader
                    :key="key"
                >
                    {{ key }}
                </v-subheader>
                <template v-for="(item, index) of todayData[key]" v-if="key !== '福利'">
                    <v-divider
                        :inset="true"
                        :key="index + 'k2'"
                    ></v-divider>

                    <v-list-tile
                        :key="index + 'k3'"
                        avatar
                        ripple
                        @click="openContentPage(item.url)"
                    >
                        <v-list-tile-avatar :tile="true">
                            <img v-if="item.images" :src="item.images[0]" />
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.desc }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.who }} / {{ item.createdAt | dealStringTime }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
                <template v-else>
                    <v-divider
                        :inset="true"
                        :key="index + 'k2'"
                    ></v-divider>

                    <v-list-tile
                        :key="index + 'k3'"
                        avatar
                        @click="{}"
                    >
                        <v-list-tile-avatar :tile="true">
                            <img v-if="item.url" :src="item.url" />
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.desc }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.who }} / {{ item.createdAt | dealStringTime }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <img :src="item.url" class="img-default" alt="item.desc">
                </template>
            </v-list>
        </template>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import { today } from '../api/index.js'
function setState(store) {
    store.dispatch('appShell/appHeader/setAppHeader', {
        show: true,
        title: 'Today',
        showMenu: true,
        showBack: false,
        showLogo: false,
        actions: [
            // {
            //     icon: 'search',
            //     route: '/search'
            // }
        ]
    });
}

export default {
    name: 'index',
    metaInfo: {
        title: 'Home',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    async asyncData({store, route}) {
        setState(store);
    },
    activated() {
        setState(this.$store);
    },
    data () {
        return {
            todayData: {}
        }
    },
    created () {
        this.queryTodayData()
    },
    methods: {
        queryTodayData () {
            today().then(res => {
                console.log(res)
                if (!res.error) {
                    this.todayData = res.results
                }
            })
        },
        openContentPage (url) {
            window.open(url)
        }
    }
};
</script>

<style lang="stylus" scoped>
.content
    display flex
    align-items center
    justify-content center
    height 100%
    flex-wrap wrap
    h2
        font-size 46px
        font-weight 500

.img-default
    width 100%
    height auto
    display block
</style>
