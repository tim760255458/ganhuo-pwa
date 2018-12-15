<template>
    <div>
        <v-container fluid grid-list-lg >
            <v-layout row wrap>
                <template v-for="item of tags">
                    <v-flex class="flex-item-default" xs12 :key="item._id">{{ item.name }}</v-flex>
                    <template v-if="tagData[item.en_name]" v-for="value of tagData[item.en_name]">
                        <v-flex
                            xs4
                            :key="value._id"
                            @click="toTagPage(value.id, value.title)"
                        >
                            <v-card
                                :img="value.icon"
                                height="100"
                                ripple
                                class="elevation-4"
                            >
                            </v-card>
                            <label>{{ value.title }}</label>
                        </v-flex>
                    </template>
                </template>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import { xianduTopLevel, xianduChildLevel } from '../api/index.js'
let state = {
    appHeaderState: {
        show: true,
        title: '闲读',
        showMenu: true,
        showBack: false,
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
            tags: [],
            tagData: {}
        }
    },
    created () {
        this.queryTags()
    },
    methods: {
        queryTags () {
            xianduTopLevel().then(res => {
                if (!res.error) {
                    this.tags = res.results
                    res.results.map(el => {
                        xianduChildLevel({
                            tag: el.en_name
                        }).then(res => {
                            if (!res.error) {
                                // this.tagData[el.en_name] = res.results
                                this.$set(this.tagData, el.en_name, res.results)
                            }
                        })
                    })
                }
            })
        },
        toTagPage (id, tagName) {
            this.$router.push({
                path: `/read/${id}`,
                query: {
                    tagName: tagName
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.flex-item-default
    text-align left
</style>
