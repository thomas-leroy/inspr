// create Vue app
var app = new Vue({
    // element to mount to
    el: '#app',
    // initial data
    data: {
        inspr: {
            type: '',
            mood: '',
            color: '',
            colorLabel: '',
            theme: '',
            bpm: '',
            instrument: '',
            chord: '',
            genres: '',
            compositionConstraints: '',
        },
        error: false,
        resources: {}
    },
    components: {
        Autocomplete
    },
    // methods
    methods: {
        getInspr: function () {
            if (this.inspr.type.length > 0) {
                this.error = false;
                this.inspr.type = this.inspr.type.replace(/[|&;$%@"<>()+,]/g, "");
                this.inspr.color = getRandomFromArray(this.resources.colors);
                this.inspr.colorLabel = formatHtmlColorCodeToText(this.inspr.color);
                this.inspr.theme = getRandomFromArray(this.resources.themes).toLowerCase();
                this.inspr.bpm = getRandomIntInRange(this.resources.bpm.min, this.resources.bpm.max);
                this.inspr.instrument = getRandomFromArray(this.resources.instruments).toLowerCase();
                this.inspr.chord = composeChord(this.resources.chords);
                this.inspr.compositionConstraints = getRandomFromArray(this.resources.compositionConstraints).toLowerCase();
                this.$refs.result.style.display = 'block';
                this.$refs.form.style.display = 'none';
            } else {
                this.error = true;  
            }
        },
        getRules: function () {
            this.$refs.result.style.display = 'none';
            this.$refs.form.style.display = 'none';
            this.$refs.rules.style.display = 'block';
        },
        copyResultToClipboard: function () {
            const resultText = this.$refs.resultText.innerText;
            const clipboard = document.createElement('textarea');
            clipboard.value = resultText;
            document.body.appendChild(clipboard);
            clipboard.select();
            document.execCommand('copy');
            document.body.removeChild(clipboard);
            this.$refs.copy.style.display = 'none';
            this.$refs.copied.style.display = 'inline';
            setTimeout(() => this.resetCopyState(), 3000);
        },
        resetCopyState: function () {
            this.$refs.copied.style.display = 'none';
            this.$refs.copy.style.display = 'inline';
        },
        initTypeState: function () {
            this.inspr.type = '';
        },
        resetForm: function () {
            this.inspr.type = '';
            this.$refs.result.style.display = 'none';
            this.$refs.rules.style.display = 'none';
            this.$refs.form.style.display = 'block';
        },
        search(input) {
            if (input.length < 1) {
                return [];
            } else {
                let searchResults =  this.resources.genres.filter(genre => {
                    return genre.toLowerCase()
                        .startsWith(input.toLowerCase());
                });

                this.inspr.type = searchResults[0];
                return searchResults;
            }
        },
        handleSubmit(result) {
            if (result !== null) {
                this.inspr.type = result;
            }
        }
    },
    created: function () {
        getJson('./resources/genres.json').then(data => this.resources.genres = data);
        getJson('./resources/colors.json').then(data => this.resources.colors = data);
        getJson('./resources/themes.json').then(data => this.resources.themes = data);
        getJson('./resources/bpm.json').then(data => this.resources.bpm = data);
        getJson('./resources/instruments.json').then(data => this.resources.instruments = data);
        getJson('./resources/chords.json').then(data => this.resources.chords = data);
        getJson('./resources/compositionConstraints.json').then(data => this.resources.compositionConstraints = data);
    },
    mounted() {
        document.onreadystatechange = () => {
            if (document.readyState == "complete") {
                this.initTypeState();
            }
        };
    }
});

/* Google shits */
WebFontConfig = {
    google: {
        families: ['Raleway:600,800&display=swap']
    }
};
(function () {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-165252307-1');
