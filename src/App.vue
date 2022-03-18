<template>
    <div>
        <component :is="layout">
            <router-view/>
        </component>
    </div>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
</template>
<script>
    import Empty from "@/layuot/Empty";
    import Main from "@/layuot/Main";
    export default {
        computed: {
            layout() {
                return this.$route.meta.layout == undefined ? 'main' : this.$route.meta.layout;
            }
        },

      components: {
          Main,
          Empty
      }
    }
</script>

<style>
    @import "~materialize-css/dist/css/materialize.min.css";
    @import "./assets/css/index.css";
</style>
