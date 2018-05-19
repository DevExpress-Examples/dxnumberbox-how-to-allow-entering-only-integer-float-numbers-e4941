window.Application2 = window.Application2 || {};

$(function() {
    Application2.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application2,
        defaultLayout: Application2.config.defaultLayout,
        navigation: Application2.config.navigation
    });
    Application2.app.router.register(":view/:id", { view: "home", id: undefined });

    Application2.app.navigate();

});
