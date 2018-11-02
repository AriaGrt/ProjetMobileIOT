<template>
    <div id="LanguageDetector" class="ui main text container">
        <div class="ui segment">
            <h1 class="ui header">Trouver la langue d'un texte</h1>
            <div class="ui form">
                <div class="field">
                    <!--<label>Text</label>-->
                    <textarea v-model="input"></textarea>
                </div>
                <div class="ui primary large fluid button" v-on:click="sendText()">Valider</div>
            </div>
        </div>
        <div class="ui segment">
            <h2 class="ui header">Langue trouvée</h2>
            <div class="ui segment secondary">{{language}}</div>
        </div>

    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'LanguageDetector',
        data() {
            return {
                input: "",
                language: ""
            }
        },
        methods: {
            sendText: async function () {
                let data= '';
                let input = this.input;
                await axios.post('http://localhost:3000/post-text', {
                    text: input
                })
                    .then(function (response) {
                        data = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                this.language = data;
            }
        }
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