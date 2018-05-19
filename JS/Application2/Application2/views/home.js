Application2.home = function (params) {
    var viewModel = {
        integerSettings: {
            keyPressAction: function (e) {
                var event = e.jQueryEvent,
                    str = String.fromCharCode(event.keyCode);
                if (!/[0-9]/.test(str))
                    event.preventDefault();
            }
        },
        floatSettings: {
            keyPressAction: function (e) {
                var str = String.fromCharCode(e.jQueryEvent.keyCode);
                if (!/[0-9.,]/.test(str))
                    event.preventDefault();
            }
        }
    };
    return viewModel;
};