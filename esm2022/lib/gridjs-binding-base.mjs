import { Component, Input, Output, EventEmitter, signal, computed, effect } from '@angular/core';
import 'preact';
import * as i0 from "@angular/core";
export const GRID_EVENTS = [
    'beforeLoad',
    'load',
    'ready',
    'cellClick',
    'rowClick',
];
export class GridJsAngularBindingBase {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZGpzLWJpbmRpbmctYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dyaWRqcy1hbmd1bGFyL3NyYy9saWIvZ3JpZGpzLWJpbmRpbmctYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sUUFBUSxDQUFDOztBQUloQixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQTRCO0lBQ2xELFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxVQUFVO0NBQ1gsQ0FBQztBQUdGLE1BQU0sT0FBZ0Isd0JBQXdCO0lBQzVDO1FBc1BTLGFBQVEsR0FBRyxNQUFNLENBQWlDLFNBQVMsQ0FBQyxDQUFDO1FBTTdELFVBQUssR0FBRyxNQUFNLENBQThCLFNBQVMsQ0FBQyxDQUFDO1FBTXZELGlCQUFZLEdBQUcsTUFBTSxDQUFxQyxTQUFTLENBQUMsQ0FBQztRQU1yRSxXQUFNLEdBQUcsTUFBTSxDQUErQixTQUFTLENBQUMsQ0FBQztRQU16RCxjQUFTLEdBQUcsTUFBTSxDQUFrQyxTQUFTLENBQUMsQ0FBQztRQU0vRCxhQUFRLEdBQUcsTUFBTSxDQUFpQyxTQUFTLENBQUMsQ0FBQztRQU03RCxTQUFJLEdBQUcsTUFBTSxDQUE2QixTQUFTLENBQUMsQ0FBQztRQU1yRCxXQUFNLEdBQUcsTUFBTSxDQUErQixTQUFTLENBQUMsQ0FBQztRQU16RCxXQUFNLEdBQUcsTUFBTSxDQUErQixTQUFTLENBQUMsQ0FBQztRQU16RCxTQUFJLEdBQUcsTUFBTSxDQUE2QixTQUFTLENBQUMsQ0FBQztRQU1yRCxZQUFPLEdBQUcsTUFBTSxDQUFnQyxTQUFTLENBQUMsQ0FBQztRQU0zRCx5QkFBb0IsR0FBRyxNQUFNLENB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T3ZCLFdBQVc7c0JBRGQsS0FBSzt1QkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUM7Z0JBZ0RuQixVQUFVO3NCQURsQixNQUFNO2dCQUdFLElBQUk7c0JBRFosTUFBTTtnQkFHRSxLQUFLO3NCQURiLE1BQU07Z0JBR0UsU0FBUztzQkFEakIsTUFBTTtnQkFHRSxRQUFRO3NCQURoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5IHVzaW5nIFwibnggdXBkYXRlLWJpbmRpbmdzIGdyaWRqcy1hbmd1bGFyXCJcbi8vIERvIG5vdCBlZGl0IHRoaXMgZmlsZSBtYW51YWxseVxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnZ3JpZGpzJztcbmltcG9ydCB7IEdyaWRFdmVudHMgfSBmcm9tICdncmlkanMvZGlzdC9zcmMvZXZlbnRzJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBzaWduYWwsIGNvbXB1dGVkLCBlZmZlY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAncHJlYWN0JztcblxudHlwZSBHcmlkRXZlbnRzRW1pdHRlciA9IFJlY29yZDxrZXlvZiBHcmlkRXZlbnRzLCBFdmVudEVtaXR0ZXI8YW55Pj47XG5cbmV4cG9ydCBjb25zdCBHUklEX0VWRU5UUzogQXJyYXk8a2V5b2YgR3JpZEV2ZW50cz4gPSBbXG4gICdiZWZvcmVMb2FkJyxcbiAgJ2xvYWQnLFxuICAncmVhZHknLFxuICAnY2VsbENsaWNrJyxcbiAgJ3Jvd0NsaWNrJyxcbl07XG5cbkBDb21wb25lbnQoeyB0ZW1wbGF0ZTogJycgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHcmlkSnNBbmd1bGFyQmluZGluZ0Jhc2UgaW1wbGVtZW50cyBHcmlkRXZlbnRzRW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZVZhbCA9IHRoaXMuaW5zdGFuY2UoKTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZSgpO1xuICAgICAgaWYgKGluc3RhbmNlVmFsID09PSB1bmRlZmluZWQgfHwgIWluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluc3RhbmNlLnVwZGF0ZUNvbmZpZyh7IGluc3RhbmNlOiBpbnN0YW5jZVZhbCB9KTtcbiAgICAgIGluc3RhbmNlLmZvcmNlUmVuZGVyKCk7XG4gICAgfSk7XG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHN0b3JlVmFsID0gdGhpcy5zdG9yZSgpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAoc3RvcmVWYWwgPT09IHVuZGVmaW5lZCB8fCAhaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5zdGFuY2UudXBkYXRlQ29uZmlnKHsgc3RvcmU6IHN0b3JlVmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgZXZlbnRFbWl0dGVyVmFsID0gdGhpcy5ldmVudEVtaXR0ZXIoKTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZSgpO1xuICAgICAgaWYgKGV2ZW50RW1pdHRlclZhbCA9PT0gdW5kZWZpbmVkIHx8ICFpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS51cGRhdGVDb25maWcoeyBldmVudEVtaXR0ZXI6IGV2ZW50RW1pdHRlclZhbCB9KTtcbiAgICAgIGluc3RhbmNlLmZvcmNlUmVuZGVyKCk7XG4gICAgfSk7XG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHBsdWdpblZhbCA9IHRoaXMucGx1Z2luKCk7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UoKTtcbiAgICAgIGlmIChwbHVnaW5WYWwgPT09IHVuZGVmaW5lZCB8fCAhaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5zdGFuY2UudXBkYXRlQ29uZmlnKHsgcGx1Z2luOiBwbHVnaW5WYWwgfSk7XG4gICAgICBpbnN0YW5jZS5mb3JjZVJlbmRlcigpO1xuICAgIH0pO1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXJWYWwgPSB0aGlzLmNvbnRhaW5lcigpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAoY29udGFpbmVyVmFsID09PSB1bmRlZmluZWQgfHwgIWluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluc3RhbmNlLnVwZGF0ZUNvbmZpZyh7IGNvbnRhaW5lcjogY29udGFpbmVyVmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgdGFibGVSZWZWYWwgPSB0aGlzLnRhYmxlUmVmKCk7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UoKTtcbiAgICAgIGlmICh0YWJsZVJlZlZhbCA9PT0gdW5kZWZpbmVkIHx8ICFpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS51cGRhdGVDb25maWcoeyB0YWJsZVJlZjogdGFibGVSZWZWYWwgfSk7XG4gICAgICBpbnN0YW5jZS5mb3JjZVJlbmRlcigpO1xuICAgIH0pO1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhVmFsID0gdGhpcy5kYXRhKCk7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UoKTtcbiAgICAgIGlmIChkYXRhVmFsID09PSB1bmRlZmluZWQgfHwgIWluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluc3RhbmNlLnVwZGF0ZUNvbmZpZyh7IGRhdGE6IGRhdGFWYWwgfSk7XG4gICAgICBpbnN0YW5jZS5mb3JjZVJlbmRlcigpO1xuICAgIH0pO1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBzZXJ2ZXJWYWwgPSB0aGlzLnNlcnZlcigpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAoc2VydmVyVmFsID09PSB1bmRlZmluZWQgfHwgIWluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluc3RhbmNlLnVwZGF0ZUNvbmZpZyh7IHNlcnZlcjogc2VydmVyVmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgaGVhZGVyVmFsID0gdGhpcy5oZWFkZXIoKTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZSgpO1xuICAgICAgaWYgKGhlYWRlclZhbCA9PT0gdW5kZWZpbmVkIHx8ICFpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS51cGRhdGVDb25maWcoeyBoZWFkZXI6IGhlYWRlclZhbCB9KTtcbiAgICAgIGluc3RhbmNlLmZvcmNlUmVuZGVyKCk7XG4gICAgfSk7XG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZyb21WYWwgPSB0aGlzLmZyb20oKTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZSgpO1xuICAgICAgaWYgKGZyb21WYWwgPT09IHVuZGVmaW5lZCB8fCAhaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5zdGFuY2UudXBkYXRlQ29uZmlnKHsgZnJvbTogZnJvbVZhbCB9KTtcbiAgICAgIGluc3RhbmNlLmZvcmNlUmVuZGVyKCk7XG4gICAgfSk7XG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHN0b3JhZ2VWYWwgPSB0aGlzLnN0b3JhZ2UoKTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZSgpO1xuICAgICAgaWYgKHN0b3JhZ2VWYWwgPT09IHVuZGVmaW5lZCB8fCAhaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5zdGFuY2UudXBkYXRlQ29uZmlnKHsgc3RvcmFnZTogc3RvcmFnZVZhbCB9KTtcbiAgICAgIGluc3RhbmNlLmZvcmNlUmVuZGVyKCk7XG4gICAgfSk7XG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHByb2Nlc3NpbmdUaHJvdHRsZU1zVmFsID0gdGhpcy5wcm9jZXNzaW5nVGhyb3R0bGVNcygpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAocHJvY2Vzc2luZ1Rocm90dGxlTXNWYWwgPT09IHVuZGVmaW5lZCB8fCAhaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5zdGFuY2UudXBkYXRlQ29uZmlnKHsgcHJvY2Vzc2luZ1Rocm90dGxlTXM6IHByb2Nlc3NpbmdUaHJvdHRsZU1zVmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgcGlwZWxpbmVWYWwgPSB0aGlzLnBpcGVsaW5lKCk7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UoKTtcbiAgICAgIGlmIChwaXBlbGluZVZhbCA9PT0gdW5kZWZpbmVkIHx8ICFpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS51cGRhdGVDb25maWcoeyBwaXBlbGluZTogcGlwZWxpbmVWYWwgfSk7XG4gICAgICBpbnN0YW5jZS5mb3JjZVJlbmRlcigpO1xuICAgIH0pO1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBhdXRvV2lkdGhWYWwgPSB0aGlzLmF1dG9XaWR0aCgpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAoYXV0b1dpZHRoVmFsID09PSB1bmRlZmluZWQgfHwgIWluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluc3RhbmNlLnVwZGF0ZUNvbmZpZyh7IGF1dG9XaWR0aDogYXV0b1dpZHRoVmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkdGhWYWwgPSB0aGlzLndpZHRoKCk7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UoKTtcbiAgICAgIGlmICh3aWR0aFZhbCA9PT0gdW5kZWZpbmVkIHx8ICFpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS51cGRhdGVDb25maWcoeyB3aWR0aDogd2lkdGhWYWwgfSk7XG4gICAgICBpbnN0YW5jZS5mb3JjZVJlbmRlcigpO1xuICAgIH0pO1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBoZWlnaHRWYWwgPSB0aGlzLmhlaWdodCgpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAoaGVpZ2h0VmFsID09PSB1bmRlZmluZWQgfHwgIWluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluc3RhbmNlLnVwZGF0ZUNvbmZpZyh7IGhlaWdodDogaGVpZ2h0VmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvblZhbCA9IHRoaXMucGFnaW5hdGlvbigpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAocGFnaW5hdGlvblZhbCA9PT0gdW5kZWZpbmVkIHx8ICFpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS51cGRhdGVDb25maWcoeyBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uVmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3Qgc29ydFZhbCA9IHRoaXMuc29ydCgpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAoc29ydFZhbCA9PT0gdW5kZWZpbmVkIHx8ICFpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS51cGRhdGVDb25maWcoeyBzb3J0OiBzb3J0VmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNsYXRvclZhbCA9IHRoaXMudHJhbnNsYXRvcigpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAodHJhbnNsYXRvclZhbCA9PT0gdW5kZWZpbmVkIHx8ICFpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS51cGRhdGVDb25maWcoeyB0cmFuc2xhdG9yOiB0cmFuc2xhdG9yVmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgZml4ZWRIZWFkZXJWYWwgPSB0aGlzLmZpeGVkSGVhZGVyKCk7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UoKTtcbiAgICAgIGlmIChmaXhlZEhlYWRlclZhbCA9PT0gdW5kZWZpbmVkIHx8ICFpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS51cGRhdGVDb25maWcoeyBmaXhlZEhlYWRlcjogZml4ZWRIZWFkZXJWYWwgfSk7XG4gICAgICBpbnN0YW5jZS5mb3JjZVJlbmRlcigpO1xuICAgIH0pO1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCByZXNpemFibGVWYWwgPSB0aGlzLnJlc2l6YWJsZSgpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAocmVzaXphYmxlVmFsID09PSB1bmRlZmluZWQgfHwgIWluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluc3RhbmNlLnVwZGF0ZUNvbmZpZyh7IHJlc2l6YWJsZTogcmVzaXphYmxlVmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgY29sdW1uc1ZhbCA9IHRoaXMuY29sdW1ucygpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAoY29sdW1uc1ZhbCA9PT0gdW5kZWZpbmVkIHx8ICFpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS51cGRhdGVDb25maWcoeyBjb2x1bW5zOiBjb2x1bW5zVmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3Qgc2VhcmNoVmFsID0gdGhpcy5zZWFyY2goKTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZSgpO1xuICAgICAgaWYgKHNlYXJjaFZhbCA9PT0gdW5kZWZpbmVkIHx8ICFpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS51cGRhdGVDb25maWcoeyBzZWFyY2g6IHNlYXJjaFZhbCB9KTtcbiAgICAgIGluc3RhbmNlLmZvcmNlUmVuZGVyKCk7XG4gICAgfSk7XG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGxhbmd1YWdlVmFsID0gdGhpcy5sYW5ndWFnZSgpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAobGFuZ3VhZ2VWYWwgPT09IHVuZGVmaW5lZCB8fCAhaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5zdGFuY2UudXBkYXRlQ29uZmlnKHsgbGFuZ3VhZ2U6IGxhbmd1YWdlVmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgcGx1Z2luc1ZhbCA9IHRoaXMucGx1Z2lucygpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAocGx1Z2luc1ZhbCA9PT0gdW5kZWZpbmVkIHx8ICFpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS51cGRhdGVDb25maWcoeyBwbHVnaW5zOiBwbHVnaW5zVmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVWYWwgPSB0aGlzLnN0eWxlKCk7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UoKTtcbiAgICAgIGlmIChzdHlsZVZhbCA9PT0gdW5kZWZpbmVkIHx8ICFpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS51cGRhdGVDb25maWcoeyBzdHlsZTogc3R5bGVWYWwgfSk7XG4gICAgICBpbnN0YW5jZS5mb3JjZVJlbmRlcigpO1xuICAgIH0pO1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBjbGFzc05hbWVWYWwgPSB0aGlzLmNsYXNzTmFtZSgpO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICBpZiAoY2xhc3NOYW1lVmFsID09PSB1bmRlZmluZWQgfHwgIWluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluc3RhbmNlLnVwZGF0ZUNvbmZpZyh7IGNsYXNzTmFtZTogY2xhc3NOYW1lVmFsIH0pO1xuICAgICAgaW5zdGFuY2UuZm9yY2VSZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlYWRvbmx5IGluc3RhbmNlID0gc2lnbmFsPENvbmZpZ1snaW5zdGFuY2UnXSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgQElucHV0KHthbGlhczogJ2luc3RhbmNlJ30pXG4gIHNldCBfaW5zdGFuY2UodmFsdWU6IENvbmZpZ1snaW5zdGFuY2UnXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuaW5zdGFuY2Uuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHN0b3JlID0gc2lnbmFsPENvbmZpZ1snc3RvcmUnXSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgQElucHV0KHthbGlhczogJ3N0b3JlJ30pXG4gIHNldCBfc3RvcmUodmFsdWU6IENvbmZpZ1snc3RvcmUnXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc3RvcmUuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IGV2ZW50RW1pdHRlciA9IHNpZ25hbDxDb25maWdbJ2V2ZW50RW1pdHRlciddIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBASW5wdXQoe2FsaWFzOiAnZXZlbnRFbWl0dGVyJ30pXG4gIHNldCBfZXZlbnRFbWl0dGVyKHZhbHVlOiBDb25maWdbJ2V2ZW50RW1pdHRlciddIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5ldmVudEVtaXR0ZXIuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHBsdWdpbiA9IHNpZ25hbDxDb25maWdbJ3BsdWdpbiddIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBASW5wdXQoe2FsaWFzOiAncGx1Z2luJ30pXG4gIHNldCBfcGx1Z2luKHZhbHVlOiBDb25maWdbJ3BsdWdpbiddIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5wbHVnaW4uc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IGNvbnRhaW5lciA9IHNpZ25hbDxDb25maWdbJ2NvbnRhaW5lciddIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBASW5wdXQoe2FsaWFzOiAnY29udGFpbmVyJ30pXG4gIHNldCBfY29udGFpbmVyKHZhbHVlOiBDb25maWdbJ2NvbnRhaW5lciddIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5jb250YWluZXIuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHRhYmxlUmVmID0gc2lnbmFsPENvbmZpZ1sndGFibGVSZWYnXSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgQElucHV0KHthbGlhczogJ3RhYmxlUmVmJ30pXG4gIHNldCBfdGFibGVSZWYodmFsdWU6IENvbmZpZ1sndGFibGVSZWYnXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMudGFibGVSZWYuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IGRhdGEgPSBzaWduYWw8Q29uZmlnWydkYXRhJ10gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIEBJbnB1dCh7YWxpYXM6ICdkYXRhJ30pXG4gIHNldCBfZGF0YSh2YWx1ZTogQ29uZmlnWydkYXRhJ10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmRhdGEuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHNlcnZlciA9IHNpZ25hbDxDb25maWdbJ3NlcnZlciddIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBASW5wdXQoe2FsaWFzOiAnc2VydmVyJ30pXG4gIHNldCBfc2VydmVyKHZhbHVlOiBDb25maWdbJ3NlcnZlciddIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZXJ2ZXIuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IGhlYWRlciA9IHNpZ25hbDxDb25maWdbJ2hlYWRlciddIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBASW5wdXQoe2FsaWFzOiAnaGVhZGVyJ30pXG4gIHNldCBfaGVhZGVyKHZhbHVlOiBDb25maWdbJ2hlYWRlciddIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5oZWFkZXIuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IGZyb20gPSBzaWduYWw8Q29uZmlnWydmcm9tJ10gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIEBJbnB1dCh7YWxpYXM6ICdmcm9tJ30pXG4gIHNldCBfZnJvbSh2YWx1ZTogQ29uZmlnWydmcm9tJ10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmZyb20uc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHN0b3JhZ2UgPSBzaWduYWw8Q29uZmlnWydzdG9yYWdlJ10gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIEBJbnB1dCh7YWxpYXM6ICdzdG9yYWdlJ30pXG4gIHNldCBfc3RvcmFnZSh2YWx1ZTogQ29uZmlnWydzdG9yYWdlJ10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHByb2Nlc3NpbmdUaHJvdHRsZU1zID0gc2lnbmFsPENvbmZpZ1sncHJvY2Vzc2luZ1Rocm90dGxlTXMnXSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgQElucHV0KHthbGlhczogJ3Byb2Nlc3NpbmdUaHJvdHRsZU1zJ30pXG4gIHNldCBfcHJvY2Vzc2luZ1Rocm90dGxlTXModmFsdWU6IENvbmZpZ1sncHJvY2Vzc2luZ1Rocm90dGxlTXMnXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMucHJvY2Vzc2luZ1Rocm90dGxlTXMuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHBpcGVsaW5lID0gc2lnbmFsPENvbmZpZ1sncGlwZWxpbmUnXSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgQElucHV0KHthbGlhczogJ3BpcGVsaW5lJ30pXG4gIHNldCBfcGlwZWxpbmUodmFsdWU6IENvbmZpZ1sncGlwZWxpbmUnXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMucGlwZWxpbmUuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IGF1dG9XaWR0aCA9IHNpZ25hbDxDb25maWdbJ2F1dG9XaWR0aCddIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBASW5wdXQoe2FsaWFzOiAnYXV0b1dpZHRoJ30pXG4gIHNldCBfYXV0b1dpZHRoKHZhbHVlOiBDb25maWdbJ2F1dG9XaWR0aCddIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5hdXRvV2lkdGguc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHdpZHRoID0gc2lnbmFsPENvbmZpZ1snd2lkdGgnXSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgQElucHV0KHthbGlhczogJ3dpZHRoJ30pXG4gIHNldCBfd2lkdGgodmFsdWU6IENvbmZpZ1snd2lkdGgnXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMud2lkdGguc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IGhlaWdodCA9IHNpZ25hbDxDb25maWdbJ2hlaWdodCddIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBASW5wdXQoe2FsaWFzOiAnaGVpZ2h0J30pXG4gIHNldCBfaGVpZ2h0KHZhbHVlOiBDb25maWdbJ2hlaWdodCddIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5oZWlnaHQuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHBhZ2luYXRpb24gPSBzaWduYWw8Q29uZmlnWydwYWdpbmF0aW9uJ10gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIEBJbnB1dCh7YWxpYXM6ICdwYWdpbmF0aW9uJ30pXG4gIHNldCBfcGFnaW5hdGlvbih2YWx1ZTogQ29uZmlnWydwYWdpbmF0aW9uJ10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnBhZ2luYXRpb24uc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHNvcnQgPSBzaWduYWw8Q29uZmlnWydzb3J0J10gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIEBJbnB1dCh7YWxpYXM6ICdzb3J0J30pXG4gIHNldCBfc29ydCh2YWx1ZTogQ29uZmlnWydzb3J0J10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNvcnQuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHRyYW5zbGF0b3IgPSBzaWduYWw8Q29uZmlnWyd0cmFuc2xhdG9yJ10gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIEBJbnB1dCh7YWxpYXM6ICd0cmFuc2xhdG9yJ30pXG4gIHNldCBfdHJhbnNsYXRvcih2YWx1ZTogQ29uZmlnWyd0cmFuc2xhdG9yJ10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnRyYW5zbGF0b3Iuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IGZpeGVkSGVhZGVyID0gc2lnbmFsPENvbmZpZ1snZml4ZWRIZWFkZXInXSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgQElucHV0KHthbGlhczogJ2ZpeGVkSGVhZGVyJ30pXG4gIHNldCBfZml4ZWRIZWFkZXIodmFsdWU6IENvbmZpZ1snZml4ZWRIZWFkZXInXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZml4ZWRIZWFkZXIuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHJlc2l6YWJsZSA9IHNpZ25hbDxDb25maWdbJ3Jlc2l6YWJsZSddIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBASW5wdXQoe2FsaWFzOiAncmVzaXphYmxlJ30pXG4gIHNldCBfcmVzaXphYmxlKHZhbHVlOiBDb25maWdbJ3Jlc2l6YWJsZSddIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5yZXNpemFibGUuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IGNvbHVtbnMgPSBzaWduYWw8Q29uZmlnWydjb2x1bW5zJ10gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIEBJbnB1dCh7YWxpYXM6ICdjb2x1bW5zJ30pXG4gIHNldCBfY29sdW1ucyh2YWx1ZTogQ29uZmlnWydjb2x1bW5zJ10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmNvbHVtbnMuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHNlYXJjaCA9IHNpZ25hbDxDb25maWdbJ3NlYXJjaCddIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBASW5wdXQoe2FsaWFzOiAnc2VhcmNoJ30pXG4gIHNldCBfc2VhcmNoKHZhbHVlOiBDb25maWdbJ3NlYXJjaCddIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZWFyY2guc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IGxhbmd1YWdlID0gc2lnbmFsPENvbmZpZ1snbGFuZ3VhZ2UnXSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgQElucHV0KHthbGlhczogJ2xhbmd1YWdlJ30pXG4gIHNldCBfbGFuZ3VhZ2UodmFsdWU6IENvbmZpZ1snbGFuZ3VhZ2UnXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMubGFuZ3VhZ2Uuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHBsdWdpbnMgPSBzaWduYWw8Q29uZmlnWydwbHVnaW5zJ10gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIEBJbnB1dCh7YWxpYXM6ICdwbHVnaW5zJ30pXG4gIHNldCBfcGx1Z2lucyh2YWx1ZTogQ29uZmlnWydwbHVnaW5zJ10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnBsdWdpbnMuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IHN0eWxlID0gc2lnbmFsPENvbmZpZ1snc3R5bGUnXSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgQElucHV0KHthbGlhczogJ3N0eWxlJ30pXG4gIHNldCBfc3R5bGUodmFsdWU6IENvbmZpZ1snc3R5bGUnXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc3R5bGUuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IGNsYXNzTmFtZSA9IHNpZ25hbDxDb25maWdbJ2NsYXNzTmFtZSddIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBASW5wdXQoe2FsaWFzOiAnY2xhc3NOYW1lJ30pXG4gIHNldCBfY2xhc3NOYW1lKHZhbHVlOiBDb25maWdbJ2NsYXNzTmFtZSddIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5jbGFzc05hbWUuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5IGdyaWRDb25maWcgPSBzaWduYWw8UGFydGlhbDxDb25maWc+IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBASW5wdXQoe2FsaWFzOiAnZ3JpZENvbmZpZyd9KVxuICBzZXQgX2dyaWRDb25maWcodmFsdWU6IFBhcnRpYWw8Q29uZmlnPiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZ3JpZENvbmZpZy5zZXQodmFsdWUpO1xuICB9XG5cbiAgcmVhZG9ubHkgY29uZmlnID0gY29tcHV0ZWQ8UGFydGlhbDxDb25maWc+PigoKSA9PiB7XG4gICAgY29uc3QgY29uZmlnVmFsdWU6IFBhcnRpYWw8Q29uZmlnPiA9IHtcbiAgICAgIGluc3RhbmNlOiB0aGlzLmluc3RhbmNlKCksXG4gICAgICBzdG9yZTogdGhpcy5zdG9yZSgpLFxuICAgICAgZXZlbnRFbWl0dGVyOiB0aGlzLmV2ZW50RW1pdHRlcigpLFxuICAgICAgcGx1Z2luOiB0aGlzLnBsdWdpbigpLFxuICAgICAgY29udGFpbmVyOiB0aGlzLmNvbnRhaW5lcigpLFxuICAgICAgdGFibGVSZWY6IHRoaXMudGFibGVSZWYoKSxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSgpLFxuICAgICAgc2VydmVyOiB0aGlzLnNlcnZlcigpLFxuICAgICAgaGVhZGVyOiB0aGlzLmhlYWRlcigpLFxuICAgICAgZnJvbTogdGhpcy5mcm9tKCksXG4gICAgICBzdG9yYWdlOiB0aGlzLnN0b3JhZ2UoKSxcbiAgICAgIHByb2Nlc3NpbmdUaHJvdHRsZU1zOiB0aGlzLnByb2Nlc3NpbmdUaHJvdHRsZU1zKCksXG4gICAgICBwaXBlbGluZTogdGhpcy5waXBlbGluZSgpLFxuICAgICAgYXV0b1dpZHRoOiB0aGlzLmF1dG9XaWR0aCgpLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgoKSxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQoKSxcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGlvbigpLFxuICAgICAgc29ydDogdGhpcy5zb3J0KCksXG4gICAgICB0cmFuc2xhdG9yOiB0aGlzLnRyYW5zbGF0b3IoKSxcbiAgICAgIGZpeGVkSGVhZGVyOiB0aGlzLmZpeGVkSGVhZGVyKCksXG4gICAgICByZXNpemFibGU6IHRoaXMucmVzaXphYmxlKCksXG4gICAgICBjb2x1bW5zOiB0aGlzLmNvbHVtbnMoKSxcbiAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2goKSxcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlKCksXG4gICAgICBwbHVnaW5zOiB0aGlzLnBsdWdpbnMoKSxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlKCksXG4gICAgICBjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lKCksXG4gICAgfTtcbiAgICBmb3IobGV0IGtleSBpbiBjb25maWdWYWx1ZSkge1xuICAgICAgY29uc3Qga2V5TmFtZSA9IGtleSBhcyBrZXlvZiBDb25maWc7XG4gICAgICBpZiAoY29uZmlnVmFsdWVba2V5TmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgY29uZmlnVmFsdWVba2V5TmFtZV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmdyaWRDb25maWcoKSxcbiAgICAgIC4uLmNvbmZpZ1ZhbHVlXG4gICAgfTtcbiAgfSk7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGJlZm9yZUxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjZWxsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG59XG4iXX0=