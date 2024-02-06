import * as i0 from '@angular/core';
import { signal, computed, EventEmitter, effect, Component, Input, Output } from '@angular/core';
import { Grid } from 'gridjs';
import 'preact';

const GRID_EVENTS = [
    'beforeLoad',
    'load',
    'ready',
    'cellClick',
    'rowClick',
];
class GridJsAngularBindingBase {
    constructor() {
        this.instance = signal(undefined);
        this.store = signal(undefined);
        this.eventEmitter = signal(undefined);
        this.plugin = signal(undefined);
        this.container = signal(undefined);
        this.tableRef = signal(undefined);
        this.data = signal(undefined);
        this.server = signal(undefined);
        this.header = signal(undefined);
        this.from = signal(undefined);
        this.storage = signal(undefined);
        this.processingThrottleMs = signal(undefined);
        this.pipeline = signal(undefined);
        this.autoWidth = signal(undefined);
        this.width = signal(undefined);
        this.height = signal(undefined);
        this.pagination = signal(undefined);
        this.sort = signal(undefined);
        this.translator = signal(undefined);
        this.fixedHeader = signal(undefined);
        this.resizable = signal(undefined);
        this.columns = signal(undefined);
        this.search = signal(undefined);
        this.language = signal(undefined);
        this.plugins = signal(undefined);
        this.style = signal(undefined);
        this.className = signal(undefined);
        this.gridConfig = signal(undefined);
        this.config = computed(() => {
            const configValue = {
                instance: this.instance(),
                store: this.store(),
                eventEmitter: this.eventEmitter(),
                plugin: this.plugin(),
                container: this.container(),
                tableRef: this.tableRef(),
                data: this.data(),
                server: this.server(),
                header: this.header(),
                from: this.from(),
                storage: this.storage(),
                processingThrottleMs: this.processingThrottleMs(),
                pipeline: this.pipeline(),
                autoWidth: this.autoWidth(),
                width: this.width(),
                height: this.height(),
                pagination: this.pagination(),
                sort: this.sort(),
                translator: this.translator(),
                fixedHeader: this.fixedHeader(),
                resizable: this.resizable(),
                columns: this.columns(),
                search: this.search(),
                language: this.language(),
                plugins: this.plugins(),
                style: this.style(),
                className: this.className(),
            };
            for (let key in configValue) {
                const keyName = key;
                if (configValue[keyName] === undefined) {
                    delete configValue[keyName];
                }
            }
            return {
                ...this.gridConfig(),
                ...configValue
            };
        });
        this.beforeLoad = new EventEmitter();
        this.load = new EventEmitter();
        this.ready = new EventEmitter();
        this.cellClick = new EventEmitter();
        this.rowClick = new EventEmitter();
        effect(() => {
            const instanceVal = this.instance();
            const instance = this.instance();
            if (instanceVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ instance: instanceVal });
            instance.forceRender();
        });
        effect(() => {
            const storeVal = this.store();
            const instance = this.instance();
            if (storeVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ store: storeVal });
            instance.forceRender();
        });
        effect(() => {
            const eventEmitterVal = this.eventEmitter();
            const instance = this.instance();
            if (eventEmitterVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ eventEmitter: eventEmitterVal });
            instance.forceRender();
        });
        effect(() => {
            const pluginVal = this.plugin();
            const instance = this.instance();
            if (pluginVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ plugin: pluginVal });
            instance.forceRender();
        });
        effect(() => {
            const containerVal = this.container();
            const instance = this.instance();
            if (containerVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ container: containerVal });
            instance.forceRender();
        });
        effect(() => {
            const tableRefVal = this.tableRef();
            const instance = this.instance();
            if (tableRefVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ tableRef: tableRefVal });
            instance.forceRender();
        });
        effect(() => {
            const dataVal = this.data();
            const instance = this.instance();
            if (dataVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ data: dataVal });
            instance.forceRender();
        });
        effect(() => {
            const serverVal = this.server();
            const instance = this.instance();
            if (serverVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ server: serverVal });
            instance.forceRender();
        });
        effect(() => {
            const headerVal = this.header();
            const instance = this.instance();
            if (headerVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ header: headerVal });
            instance.forceRender();
        });
        effect(() => {
            const fromVal = this.from();
            const instance = this.instance();
            if (fromVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ from: fromVal });
            instance.forceRender();
        });
        effect(() => {
            const storageVal = this.storage();
            const instance = this.instance();
            if (storageVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ storage: storageVal });
            instance.forceRender();
        });
        effect(() => {
            const processingThrottleMsVal = this.processingThrottleMs();
            const instance = this.instance();
            if (processingThrottleMsVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ processingThrottleMs: processingThrottleMsVal });
            instance.forceRender();
        });
        effect(() => {
            const pipelineVal = this.pipeline();
            const instance = this.instance();
            if (pipelineVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ pipeline: pipelineVal });
            instance.forceRender();
        });
        effect(() => {
            const autoWidthVal = this.autoWidth();
            const instance = this.instance();
            if (autoWidthVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ autoWidth: autoWidthVal });
            instance.forceRender();
        });
        effect(() => {
            const widthVal = this.width();
            const instance = this.instance();
            if (widthVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ width: widthVal });
            instance.forceRender();
        });
        effect(() => {
            const heightVal = this.height();
            const instance = this.instance();
            if (heightVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ height: heightVal });
            instance.forceRender();
        });
        effect(() => {
            const paginationVal = this.pagination();
            const instance = this.instance();
            if (paginationVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ pagination: paginationVal });
            instance.forceRender();
        });
        effect(() => {
            const sortVal = this.sort();
            const instance = this.instance();
            if (sortVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ sort: sortVal });
            instance.forceRender();
        });
        effect(() => {
            const translatorVal = this.translator();
            const instance = this.instance();
            if (translatorVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ translator: translatorVal });
            instance.forceRender();
        });
        effect(() => {
            const fixedHeaderVal = this.fixedHeader();
            const instance = this.instance();
            if (fixedHeaderVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ fixedHeader: fixedHeaderVal });
            instance.forceRender();
        });
        effect(() => {
            const resizableVal = this.resizable();
            const instance = this.instance();
            if (resizableVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ resizable: resizableVal });
            instance.forceRender();
        });
        effect(() => {
            const columnsVal = this.columns();
            const instance = this.instance();
            if (columnsVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ columns: columnsVal });
            instance.forceRender();
        });
        effect(() => {
            const searchVal = this.search();
            const instance = this.instance();
            if (searchVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ search: searchVal });
            instance.forceRender();
        });
        effect(() => {
            const languageVal = this.language();
            const instance = this.instance();
            if (languageVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ language: languageVal });
            instance.forceRender();
        });
        effect(() => {
            const pluginsVal = this.plugins();
            const instance = this.instance();
            if (pluginsVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ plugins: pluginsVal });
            instance.forceRender();
        });
        effect(() => {
            const styleVal = this.style();
            const instance = this.instance();
            if (styleVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ style: styleVal });
            instance.forceRender();
        });
        effect(() => {
            const classNameVal = this.className();
            const instance = this.instance();
            if (classNameVal === undefined || !instance) {
                return;
            }
            instance.updateConfig({ className: classNameVal });
            instance.forceRender();
        });
    }
    set _instance(value) {
        this.instance.set(value);
    }
    set _store(value) {
        this.store.set(value);
    }
    set _eventEmitter(value) {
        this.eventEmitter.set(value);
    }
    set _plugin(value) {
        this.plugin.set(value);
    }
    set _container(value) {
        this.container.set(value);
    }
    set _tableRef(value) {
        this.tableRef.set(value);
    }
    set _data(value) {
        this.data.set(value);
    }
    set _server(value) {
        this.server.set(value);
    }
    set _header(value) {
        this.header.set(value);
    }
    set _from(value) {
        this.from.set(value);
    }
    set _storage(value) {
        this.storage.set(value);
    }
    set _processingThrottleMs(value) {
        this.processingThrottleMs.set(value);
    }
    set _pipeline(value) {
        this.pipeline.set(value);
    }
    set _autoWidth(value) {
        this.autoWidth.set(value);
    }
    set _width(value) {
        this.width.set(value);
    }
    set _height(value) {
        this.height.set(value);
    }
    set _pagination(value) {
        this.pagination.set(value);
    }
    set _sort(value) {
        this.sort.set(value);
    }
    set _translator(value) {
        this.translator.set(value);
    }
    set _fixedHeader(value) {
        this.fixedHeader.set(value);
    }
    set _resizable(value) {
        this.resizable.set(value);
    }
    set _columns(value) {
        this.columns.set(value);
    }
    set _search(value) {
        this.search.set(value);
    }
    set _language(value) {
        this.language.set(value);
    }
    set _plugins(value) {
        this.plugins.set(value);
    }
    set _style(value) {
        this.style.set(value);
    }
    set _className(value) {
        this.className.set(value);
    }
    set _gridConfig(value) {
        this.gridConfig.set(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: GridJsAngularBindingBase, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: GridJsAngularBindingBase, selector: "ng-component", inputs: { _instance: ["instance", "_instance"], _store: ["store", "_store"], _eventEmitter: ["eventEmitter", "_eventEmitter"], _plugin: ["plugin", "_plugin"], _container: ["container", "_container"], _tableRef: ["tableRef", "_tableRef"], _data: ["data", "_data"], _server: ["server", "_server"], _header: ["header", "_header"], _from: ["from", "_from"], _storage: ["storage", "_storage"], _processingThrottleMs: ["processingThrottleMs", "_processingThrottleMs"], _pipeline: ["pipeline", "_pipeline"], _autoWidth: ["autoWidth", "_autoWidth"], _width: ["width", "_width"], _height: ["height", "_height"], _pagination: ["pagination", "_pagination"], _sort: ["sort", "_sort"], _translator: ["translator", "_translator"], _fixedHeader: ["fixedHeader", "_fixedHeader"], _resizable: ["resizable", "_resizable"], _columns: ["columns", "_columns"], _search: ["search", "_search"], _language: ["language", "_language"], _plugins: ["plugins", "_plugins"], _style: ["style", "_style"], _className: ["className", "_className"], _gridConfig: ["gridConfig", "_gridConfig"] }, outputs: { beforeLoad: "beforeLoad", load: "load", ready: "ready", cellClick: "cellClick", rowClick: "rowClick" }, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: GridJsAngularBindingBase, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: () => [], propDecorators: { _instance: [{
                type: Input,
                args: [{ alias: 'instance' }]
            }], _store: [{
                type: Input,
                args: [{ alias: 'store' }]
            }], _eventEmitter: [{
                type: Input,
                args: [{ alias: 'eventEmitter' }]
            }], _plugin: [{
                type: Input,
                args: [{ alias: 'plugin' }]
            }], _container: [{
                type: Input,
                args: [{ alias: 'container' }]
            }], _tableRef: [{
                type: Input,
                args: [{ alias: 'tableRef' }]
            }], _data: [{
                type: Input,
                args: [{ alias: 'data' }]
            }], _server: [{
                type: Input,
                args: [{ alias: 'server' }]
            }], _header: [{
                type: Input,
                args: [{ alias: 'header' }]
            }], _from: [{
                type: Input,
                args: [{ alias: 'from' }]
            }], _storage: [{
                type: Input,
                args: [{ alias: 'storage' }]
            }], _processingThrottleMs: [{
                type: Input,
                args: [{ alias: 'processingThrottleMs' }]
            }], _pipeline: [{
                type: Input,
                args: [{ alias: 'pipeline' }]
            }], _autoWidth: [{
                type: Input,
                args: [{ alias: 'autoWidth' }]
            }], _width: [{
                type: Input,
                args: [{ alias: 'width' }]
            }], _height: [{
                type: Input,
                args: [{ alias: 'height' }]
            }], _pagination: [{
                type: Input,
                args: [{ alias: 'pagination' }]
            }], _sort: [{
                type: Input,
                args: [{ alias: 'sort' }]
            }], _translator: [{
                type: Input,
                args: [{ alias: 'translator' }]
            }], _fixedHeader: [{
                type: Input,
                args: [{ alias: 'fixedHeader' }]
            }], _resizable: [{
                type: Input,
                args: [{ alias: 'resizable' }]
            }], _columns: [{
                type: Input,
                args: [{ alias: 'columns' }]
            }], _search: [{
                type: Input,
                args: [{ alias: 'search' }]
            }], _language: [{
                type: Input,
                args: [{ alias: 'language' }]
            }], _plugins: [{
                type: Input,
                args: [{ alias: 'plugins' }]
            }], _style: [{
                type: Input,
                args: [{ alias: 'style' }]
            }], _className: [{
                type: Input,
                args: [{ alias: 'className' }]
            }], _gridConfig: [{
                type: Input,
                args: [{ alias: 'gridConfig' }]
            }], beforeLoad: [{
                type: Output
            }], load: [{
                type: Output
            }], ready: [{
                type: Output
            }], cellClick: [{
                type: Output
            }], rowClick: [{
                type: Output
            }] } });

class GridJsAngularComponent extends GridJsAngularBindingBase {
    constructor(host) {
        super();
        this.host = host;
        this.listeners = new Map();
        /** alias of `load` event due to possible conflict with native load event */
        this.gridLoad = this.load;
    }
    ngAfterViewInit() {
        const instance = new Grid(this.config());
        this.instance.set(instance);
        this.registerEvents();
        instance.render(this.host.nativeElement);
    }
    ngOnDestroy() {
        if (this.instance()) {
            this.unregisterEvents();
            this.instance.set(undefined);
        }
    }
    // public api to interact with grid instance
    getGridInstance() {
        return this.instance();
    }
    updateConfig(config = {}) {
        this.gridConfig.set(config);
    }
    registerEvents() {
        for (const event of GRID_EVENTS) {
            const emitter = this[event];
            if (!emitter) {
                continue;
            }
            const listener = (...args) => emitter.emit(args);
            this.listeners.set(event, listener);
            this.instance()?.on(event, listener);
        }
    }
    unregisterEvents() {
        for (const [event, listener] of this.listeners.entries()) {
            this.instance()?.off(event, listener);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: GridJsAngularComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: GridJsAngularComponent, isStandalone: true, selector: "gridjs-angular", outputs: { gridLoad: "gridLoad" }, usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: GridJsAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gridjs-angular',
                    standalone: true,
                    template: '',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { gridLoad: [{
                type: Output
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { GRID_EVENTS as GRID_JS_EVENTS, GridJsAngularComponent };
//# sourceMappingURL=gridjs-angular.mjs.map
