import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../Logo/logo.component";
export class HeaderComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: HeaderComponent, selector: "lib-header", inputs: { logo: "logo", header: "header" }, ngImport: i0, template: "<div class=\"authlite-d1-header\">\r\n    <lib-logo></lib-logo>\r\n    {{header}}\r\n  </div>", styles: [".authlite-d1-header{display:grid;justify-items:center;row-gap:10px}\n"], dependencies: [{ kind: "component", type: i1.LogoComponent, selector: "lib-logo" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-header', template: "<div class=\"authlite-d1-header\">\r\n    <lib-logo></lib-logo>\r\n    {{header}}\r\n  </div>", styles: [".authlite-d1-header{display:grid;justify-items:center;row-gap:10px}\n"] }]
        }], propDecorators: { logo: [{
                type: Input
            }], header: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2F1dGhsaXRlLWZvcm1zLXdpZGdldHMvc3JjL2xpYi9IZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2F1dGhsaXRlLWZvcm1zLXdpZGdldHMvc3JjL2xpYi9IZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPakQsTUFBTSxPQUFPLGVBQWU7OEdBQWYsZUFBZTtrR0FBZixlQUFlLDhGQ1A1QiwrRkFHUTs7MkZESUssZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxZQUFZOzhCQUtiLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBsb2dvOiBhbnk7XHJcbiAgQElucHV0KCkgaGVhZGVyITogc3RyaW5nO1xyXG59IiwiPGRpdiBjbGFzcz1cImF1dGhsaXRlLWQxLWhlYWRlclwiPlxyXG4gICAgPGxpYi1sb2dvPjwvbGliLWxvZ28+XHJcbiAgICB7e2hlYWRlcn19XHJcbiAgPC9kaXY+Il19