/****************************************************************************************************
 * PARTIAL FILE: mixed.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
    constructor() {
        this.myStyleExp = [{ color: 'red' }, { color: 'blue', duration: 1000 }];
        this.myClassExp = 'foo bar apple';
    }
}
MyComponent.ɵfac = function MyComponent_Factory(t) { return new (t || MyComponent)(); };
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: 1, type: MyComponent, selector: "my-component", ngImport: i0, template: { source: `<div [style]="myStyleExp" [class]="myClassExp"></div>`, isInline: true } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyComponent, [{
        type: Component,
        args: [{ selector: 'my-component', template: `<div [style]="myStyleExp" [class]="myClassExp"></div>` }]
    }], null, null); })();
export class MyModule {
}
MyModule.ɵmod = i0.ɵɵdefineNgModule({ type: MyModule });
MyModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MyModule_Factory(t) { return new (t || MyModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MyModule, { declarations: [MyComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyModule, [{
        type: NgModule,
        args: [{ declarations: [MyComponent] }]
    }], null, null); })();

/****************************************************************************************************
 * PARTIAL FILE: mixed.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
    myStyleExp: ({
        color: string;
        duration?: undefined;
    } | {
        color: string;
        duration: number;
    })[];
    myClassExp: string;
    static ɵfac: i0.ɵɵFactoryDef<MyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MyComponent, "my-component", never, {}, {}, never, never>;
}
export declare class MyModule {
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<MyModule, [typeof MyComponent], never, never>;
    static ɵinj: i0.ɵɵInjectorDef<MyModule>;
}

/****************************************************************************************************
 * PARTIAL FILE: pipe_bindings.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
    constructor() {
        this.myStyleExp = [{ color: 'red' }, { color: 'blue', duration: 1000 }];
        this.myClassExp = 'foo bar apple';
    }
}
MyComponent.ɵfac = function MyComponent_Factory(t) { return new (t || MyComponent)(); };
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: 1, type: MyComponent, selector: "my-component", ngImport: i0, template: { source: `<div [style]="myStyleExp | stylePipe" [class]="myClassExp | classPipe"></div>`, isInline: true } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyComponent, [{
        type: Component,
        args: [{
                selector: 'my-component',
                template: `<div [style]="myStyleExp | stylePipe" [class]="myClassExp | classPipe"></div>`
            }]
    }], null, null); })();
export class MyModule {
}
MyModule.ɵmod = i0.ɵɵdefineNgModule({ type: MyModule });
MyModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MyModule_Factory(t) { return new (t || MyModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MyModule, { declarations: [MyComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyModule, [{
        type: NgModule,
        args: [{ declarations: [MyComponent] }]
    }], null, null); })();

/****************************************************************************************************
 * PARTIAL FILE: pipe_bindings.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
    myStyleExp: ({
        color: string;
        duration?: undefined;
    } | {
        color: string;
        duration: number;
    })[];
    myClassExp: string;
    static ɵfac: i0.ɵɵFactoryDef<MyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MyComponent, "my-component", never, {}, {}, never, never>;
}
export declare class MyModule {
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<MyModule, [typeof MyComponent], never, never>;
    static ɵinj: i0.ɵɵInjectorDef<MyModule>;
}

/****************************************************************************************************
 * PARTIAL FILE: pipe_bindings_slots.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
    constructor() {
        this.myStyleExp = {};
        this.fooExp = 'foo';
        this.barExp = 'bar';
        this.bazExp = 'baz';
        this.items = [1, 2, 3];
        this.item = 1;
    }
}
MyComponent.ɵfac = function MyComponent_Factory(t) { return new (t || MyComponent)(); };
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: 1, type: MyComponent, selector: "my-component", ngImport: i0, template: { source: `
    <div [class]="{}"
         [class.foo]="fooExp | pipe:2000"
         [style]="myStyleExp | pipe:1000"
         [style.bar]="barExp | pipe:3000"
         [style.baz]="bazExp | pipe:4000">
         {{ item }}</div>`, isInline: true } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyComponent, [{
        type: Component,
        args: [{
                selector: 'my-component',
                template: `
    <div [class]="{}"
         [class.foo]="fooExp | pipe:2000"
         [style]="myStyleExp | pipe:1000"
         [style.bar]="barExp | pipe:3000"
         [style.baz]="bazExp | pipe:4000">
         {{ item }}</div>`
            }]
    }], null, null); })();
export class MyModule {
}
MyModule.ɵmod = i0.ɵɵdefineNgModule({ type: MyModule });
MyModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MyModule_Factory(t) { return new (t || MyModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MyModule, { declarations: [MyComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyModule, [{
        type: NgModule,
        args: [{ declarations: [MyComponent] }]
    }], null, null); })();

/****************************************************************************************************
 * PARTIAL FILE: pipe_bindings_slots.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
    myStyleExp: {};
    fooExp: string;
    barExp: string;
    bazExp: string;
    items: number[];
    item: number;
    static ɵfac: i0.ɵɵFactoryDef<MyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MyComponent, "my-component", never, {}, {}, never, never>;
}
export declare class MyModule {
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<MyModule, [typeof MyComponent], never, never>;
    static ɵinj: i0.ɵɵInjectorDef<MyModule>;
}

/****************************************************************************************************
 * PARTIAL FILE: multiple_elements.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
    constructor() {
        this.w1 = '100px';
        this.h1 = '100px';
        this.a1 = true;
        this.r1 = true;
    }
}
MyComponent.ɵfac = function MyComponent_Factory(t) { return new (t || MyComponent)(); };
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: 1, type: MyComponent, selector: "my-component", ngImport: i0, template: { source: `
    <div [style.width]="w1"></div>
    <div [style.height]="h1"></div>
    <div [class.active]="a1"></div>
    <div [class.removed]="r1"></div>
  `, isInline: true } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyComponent, [{
        type: Component,
        args: [{
                selector: 'my-component',
                template: `
    <div [style.width]="w1"></div>
    <div [style.height]="h1"></div>
    <div [class.active]="a1"></div>
    <div [class.removed]="r1"></div>
  `
            }]
    }], null, null); })();
export class MyModule {
}
MyModule.ɵmod = i0.ɵɵdefineNgModule({ type: MyModule });
MyModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MyModule_Factory(t) { return new (t || MyModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MyModule, { declarations: [MyComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyModule, [{
        type: NgModule,
        args: [{ declarations: [MyComponent] }]
    }], null, null); })();

/****************************************************************************************************
 * PARTIAL FILE: multiple_elements.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
    w1: string;
    h1: string;
    a1: boolean;
    r1: boolean;
    static ɵfac: i0.ɵɵFactoryDef<MyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MyComponent, "my-component", never, {}, {}, never, never>;
}
export declare class MyModule {
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<MyModule, [typeof MyComponent], never, never>;
    static ɵinj: i0.ɵɵInjectorDef<MyModule>;
}

