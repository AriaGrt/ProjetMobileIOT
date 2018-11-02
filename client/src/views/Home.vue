<template>
    <div>
        <NavBar/>
        <LanguageDetector/>
    </div>
</template>

<script>

    import HelloWorld from '@/components/HelloWorld.vue'
    import LanguageDetector from "../components/LanguageDetector";
    import NavBar from "../components/NavBar";


    export default {
        name: 'home',
        components: {
            NavBar,
            LanguageDetector,
            HelloWorld
        }
    }
</script>
