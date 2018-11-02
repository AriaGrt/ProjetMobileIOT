<template>
    <div class="ui main text container">
        <div class="ui segment">
            <h1 class="ui header">Trouver la langue d'un texte</h1>
            <div class="ui form">
                <div class="field">
                    <!--<label>Text</label>-->
                    <textarea></textarea>
                </div>
                <div class="ui primary large fluid button">Valider</div>
            </div>
        </div>
        <div class="ui segment">
            <h2 class="ui header">Langue trouvé</h2>
            <div class="ui segment secondary"></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "LanguageDetector"
    }
</script>

<style scoped lang="less">
    .main {
        margin-top: 6em;
    }
    /* Mobile */
    @media only screen and (max-width: 767px) {
        h1 {
            font-size: 0.5em;
            color: red;
        }
    }
</style>