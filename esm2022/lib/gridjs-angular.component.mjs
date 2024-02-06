import { Component, ElementRef, Output, } from '@angular/core';
import { Grid } from 'gridjs';
import { GRID_EVENTS, GridJsAngularBindingBase } from './gridjs-binding-base';
import * as i0 from "@angular/core";
export class GridJsAngularComponent extends GridJsAngularBindingBase {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZGpzLWFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ3JpZGpzLWFuZ3VsYXIvc3JjL2xpYi9ncmlkanMtYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBR1YsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBVSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDdEMsT0FBTyxFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVk5RSxNQUFNLE9BQU8sc0JBQ1gsU0FBUSx3QkFBd0I7SUFRaEMsWUFBNkIsSUFBZ0I7UUFDM0MsS0FBSyxFQUFFLENBQUM7UUFEbUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUw1QixjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQTJCLENBQUM7UUFFaEUsNEVBQTRFO1FBQ3pELGFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBSXhDLENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxZQUFZLENBQUMsU0FBMEIsRUFBRTtRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8sY0FBYztRQUNwQixLQUFLLE1BQU0sS0FBSyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sT0FBTyxHQUFTLElBQUssQ0FBQyxLQUFLLENBQXNCLENBQUM7WUFDeEQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNiLFNBQVM7WUFDWCxDQUFDO1lBQ0QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztZQUN6RCxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQzs4R0FwRFUsc0JBQXNCO2tHQUF0QixzQkFBc0Isb0lBRnZCLEVBQUU7OzJGQUVELHNCQUFzQjtrQkFMbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7K0VBUW9CLFFBQVE7c0JBQTFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBHcmlkIH0gZnJvbSAnZ3JpZGpzJztcbmltcG9ydCB7IEdSSURfRVZFTlRTLCBHcmlkSnNBbmd1bGFyQmluZGluZ0Jhc2UgfSBmcm9tICcuL2dyaWRqcy1iaW5kaW5nLWJhc2UnO1xuaW1wb3J0IHsgR3JpZEV2ZW50cyB9IGZyb20gJ2dyaWRqcy9kaXN0L3NyYy9ldmVudHMnO1xuXG4vKiogb25seSBwcm9wZXJ0aWVzIHRoYXQgZXhpc3Qgb24gdGhlIENvbmZpZyBpbnRlcmZhY2UgKG5vdCB0aGUgQ29uZmlnIGNsYXNzKSAqL1xudHlwZSBFdmVudE5hbWUgPSBrZXlvZiBHcmlkRXZlbnRzO1xudHlwZSBFdmVudEhhbmRsZXIgPSAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dyaWRqcy1hbmd1bGFyJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkSnNBbmd1bGFyQ29tcG9uZW50XG4gIGV4dGVuZHMgR3JpZEpzQW5ndWxhckJpbmRpbmdCYXNlXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95XG57XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzID0gbmV3IE1hcDxFdmVudE5hbWUsIEV2ZW50SGFuZGxlcj4oKTtcblxuICAvKiogYWxpYXMgb2YgYGxvYWRgIGV2ZW50IGR1ZSB0byBwb3NzaWJsZSBjb25mbGljdCB3aXRoIG5hdGl2ZSBsb2FkIGV2ZW50ICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBncmlkTG9hZCA9IHRoaXMubG9hZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGhvc3Q6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdyaWQodGhpcy5jb25maWcoKSk7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXQoaW5zdGFuY2UpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICBpbnN0YW5jZS5yZW5kZXIodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UoKSkge1xuICAgICAgdGhpcy51bnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldCh1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHB1YmxpYyBhcGkgdG8gaW50ZXJhY3Qgd2l0aCBncmlkIGluc3RhbmNlXG4gIGdldEdyaWRJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZSgpO1xuICB9XG5cbiAgdXBkYXRlQ29uZmlnKGNvbmZpZzogUGFydGlhbDxDb25maWc+ID0ge30pIHtcbiAgICB0aGlzLmdyaWRDb25maWcuc2V0KGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgZXZlbnQgb2YgR1JJRF9FVkVOVFMpIHtcbiAgICAgIGNvbnN0IGVtaXR0ZXIgPSAoPGFueT50aGlzKVtldmVudF0gYXMgRXZlbnRFbWl0dGVyPGFueT47XG4gICAgICBpZiAoIWVtaXR0ZXIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCBsaXN0ZW5lciA9ICguLi5hcmdzOiBhbnlbXSkgPT4gZW1pdHRlci5lbWl0KGFyZ3MpO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc2V0KGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICB0aGlzLmluc3RhbmNlKCk/Lm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIGZvciAoY29uc3QgW2V2ZW50LCBsaXN0ZW5lcl0gb2YgdGhpcy5saXN0ZW5lcnMuZW50cmllcygpKSB7XG4gICAgICB0aGlzLmluc3RhbmNlKCk/Lm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfVxufVxuIl19