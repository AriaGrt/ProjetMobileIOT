<template>
    <div id="LanguageDetector" class="ui main text container">
        <div class="ui segment">
            <h1 class="ui header">Trouver la langue d'un texte</h1>
            <div class="ui form">
                <div class="field">
                    <!--<label>Text</label>-->
                    <textarea v-model="input" v-on:keyup.13="sendText"></textarea>
                </div>
                <div class="ui primary large fluid button" v-on:click="sendText">Valider</div>
            </div>
        </div>
        <div id="lang-found" class="ui segment">
            <h2 class="ui header">Langue trouvée</h2>
            <div class="ui segment secondary">{{language}}</div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import './LanguageDetector.less'

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
                document.querySelector("textarea").blur();
                let data = '';
                let input = this.input;
                await axios.post('/post-text', {
                    text: input
                })
                    .then(function (response) {
                        data = response.data;
                        pulseFound();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                this.language = data;
            }
        }
    }

    function pulseFound() {
        $('#lang-found').transition('pulse', '200ms');
    }
</script>
