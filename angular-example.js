const { NgModule, Component, platformBrowserDynamic } = require('@angular/core');
const { BrowserModule } = require('@angular/platform-browser');

@Component({
    selector: 'example-app',
    template: '<h2>Đây là ví dụ mã Angular!</h2>'
})
class AppComponent {}

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
