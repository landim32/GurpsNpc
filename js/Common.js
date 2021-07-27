if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

function loadExternalModule(TARGET_URL) {
    let script = document.createElement('script');
    script.type = 'module';
    script.src = TARGET_URL;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function loadExternalJS(TARGET_URL) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = TARGET_URL;
    document.getElementsByTagName('head')[0].appendChild(script);
}