import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { Config, Grid } from 'gridjs';
import { GridJsAngularBindingBase } from './gridjs-binding-base';
import * as i0 from "@angular/core";
export declare class GridJsAngularComponent extends GridJsAngularBindingBase implements AfterViewInit, OnDestroy {
    private readonly host;
    private readonly listeners;
    /** alias of `load` event due to possible conflict with native load event */
    readonly gridLoad: EventEmitter<any>;
    constructor(host: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    getGridInstance(): Grid | undefined;
    updateConfig(config?: Partial<Config>): void;
    private registerEvents;
    private unregisterEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridJsAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridJsAngularComponent, "gridjs-angular", never, {}, { "gridLoad": "gridLoad"; }, never, never, true, never>;
}
