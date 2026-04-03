import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-35MD543C.js";
import {
  EventService
} from "./chunk-HJ3MXOFI.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-B5QJ3SQ3.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-U4Q77IAY.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix
} from "./chunk-TVTX5DCA.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-SCN3YP5A.js";
import "./chunk-KNB5N7WY.js";
import "./chunk-TGBJVICH.js";
import {
  MatProgressSpinnerModule
} from "./chunk-VZ63OAA3.js";
import {
  ActivatedRoute,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatOption,
  RouterLink
} from "./chunk-ZLZN2NNP.js";
import "./chunk-27DC6NBH.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  InputFlags,
  NgModule,
  Optional,
  Output,
  ReplaySubject,
  SkipSelf,
  SlicePipe,
  Subject,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QN3GMCAP.js";

// node_modules/@angular/material/fesm2022/paginator.mjs
function MatPaginator_Conditional_2_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageSizeOption_r3 = ctx.$implicit;
    \u0275\u0275property("value", pageSizeOption_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pageSizeOption_r3, " ");
  }
}
function MatPaginator_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 13)(1, "mat-select", 15);
    \u0275\u0275listener("selectionChange", function MatPaginator_Conditional_2_Conditional_3_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1._changePageSize($event.value));
    });
    \u0275\u0275repeaterCreate(2, MatPaginator_Conditional_2_Conditional_3_For_3_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("appearance", ctx_r1._formFieldAppearance)("color", ctx_r1.color);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pageSize)("disabled", ctx_r1.disabled)("aria-labelledby", ctx_r1._pageSizeLabelId)("panelClass", ctx_r1.selectConfig.panelClass || "")("disableOptionCentering", ctx_r1.selectConfig.disableOptionCentering);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1._displayedPageSizeOptions);
  }
}
function MatPaginator_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pageSize);
  }
}
function MatPaginator_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MatPaginator_Conditional_2_Conditional_3_Template, 4, 7, "mat-form-field", 13)(4, MatPaginator_Conditional_2_Conditional_4_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("id", ctx_r1._pageSizeLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1._intl.itemsPerPageLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(3, ctx_r1._displayedPageSizeOptions.length > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r1._displayedPageSizeOptions.length <= 1 ? 4 : -1);
  }
}
function MatPaginator_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function MatPaginator_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.firstPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "path", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1._intl.firstPageLabel);
  }
}
function MatPaginator_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function MatPaginator_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.lastPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.lastPageLabel)("matTooltipDisabled", ctx_r1._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._nextButtonsDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1._intl.lastPageLabel);
  }
}
var MatPaginatorIntl = class _MatPaginatorIntl {
  constructor() {
    this.changes = new Subject();
    this.itemsPerPageLabel = "Items per page:";
    this.nextPageLabel = "Next page";
    this.previousPageLabel = "Previous page";
    this.firstPageLabel = "First page";
    this.lastPageLabel = "Last page";
    this.getRangeLabel = (page, pageSize, length) => {
      if (length == 0 || pageSize == 0) {
        return `0 of ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} \u2013 ${endIndex} of ${length}`;
    };
  }
  static {
    this.\u0275fac = function MatPaginatorIntl_Factory(t) {
      return new (t || _MatPaginatorIntl)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MatPaginatorIntl,
      factory: _MatPaginatorIntl.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
var MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new Optional(), new SkipSelf(), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};
var DEFAULT_PAGE_SIZE = 50;
var MAT_PAGINATOR_DEFAULT_OPTIONS = new InjectionToken("MAT_PAGINATOR_DEFAULT_OPTIONS");
var nextUniqueId = 0;
var MatPaginator = class _MatPaginator {
  /** The zero-based page index of the displayed list of items. Defaulted to 0. */
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = Math.max(value || 0, 0);
    this._changeDetectorRef.markForCheck();
  }
  /** The length of the total number of items that are being paginated. Defaulted to 0. */
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value || 0;
    this._changeDetectorRef.markForCheck();
  }
  /** Number of items to display on a page. By default set to 50. */
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = Math.max(value || 0, 0);
    this._updateDisplayedPageSizeOptions();
  }
  /** The set of provided page size options to display to the user. */
  get pageSizeOptions() {
    return this._pageSizeOptions;
  }
  set pageSizeOptions(value) {
    this._pageSizeOptions = (value || []).map((p) => numberAttribute(p, 0));
    this._updateDisplayedPageSizeOptions();
  }
  constructor(_intl, _changeDetectorRef, defaults) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._pageSizeLabelId = `mat-paginator-page-size-label-${nextUniqueId++}`;
    this._isInitialized = false;
    this._initializedStream = new ReplaySubject(1);
    this._pageIndex = 0;
    this._length = 0;
    this._pageSizeOptions = [];
    this.hidePageSize = false;
    this.showFirstLastButtons = false;
    this.selectConfig = {};
    this.disabled = false;
    this.page = new EventEmitter();
    this.initialized = this._initializedStream;
    this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
    if (defaults) {
      const {
        pageSize,
        pageSizeOptions,
        hidePageSize,
        showFirstLastButtons
      } = defaults;
      if (pageSize != null) {
        this._pageSize = pageSize;
      }
      if (pageSizeOptions != null) {
        this._pageSizeOptions = pageSizeOptions;
      }
      if (hidePageSize != null) {
        this.hidePageSize = hidePageSize;
      }
      if (showFirstLastButtons != null) {
        this.showFirstLastButtons = showFirstLastButtons;
      }
    }
    this._formFieldAppearance = defaults?.formFieldAppearance || "outline";
  }
  ngOnInit() {
    this._isInitialized = true;
    this._updateDisplayedPageSizeOptions();
    this._initializedStream.next();
  }
  ngOnDestroy() {
    this._initializedStream.complete();
    this._intlChanges.unsubscribe();
  }
  /** Advances to the next page if it exists. */
  nextPage() {
    if (!this.hasNextPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex + 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move back to the previous page if it exists. */
  previousPage() {
    if (!this.hasPreviousPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex - 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move to the first page if not already there. */
  firstPage() {
    if (!this.hasPreviousPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = 0;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move to the last page if not already there. */
  lastPage() {
    if (!this.hasNextPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.getNumberOfPages() - 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Whether there is a previous page. */
  hasPreviousPage() {
    return this.pageIndex >= 1 && this.pageSize != 0;
  }
  /** Whether there is a next page. */
  hasNextPage() {
    const maxPageIndex = this.getNumberOfPages() - 1;
    return this.pageIndex < maxPageIndex && this.pageSize != 0;
  }
  /** Calculate the number of pages */
  getNumberOfPages() {
    if (!this.pageSize) {
      return 0;
    }
    return Math.ceil(this.length / this.pageSize);
  }
  /**
   * Changes the page size so that the first item displayed on the page will still be
   * displayed using the new page size.
   *
   * For example, if the page size is 10 and on the second page (items indexed 10-19) then
   * switching so that the page size is 5 will set the third page as the current page so
   * that the 10th item will still be displayed.
   */
  _changePageSize(pageSize) {
    const startIndex = this.pageIndex * this.pageSize;
    const previousPageIndex = this.pageIndex;
    this.pageIndex = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;
    this._emitPageEvent(previousPageIndex);
  }
  /** Checks whether the buttons for going forwards should be disabled. */
  _nextButtonsDisabled() {
    return this.disabled || !this.hasNextPage();
  }
  /** Checks whether the buttons for going backwards should be disabled. */
  _previousButtonsDisabled() {
    return this.disabled || !this.hasPreviousPage();
  }
  /**
   * Updates the list of page size options to display to the user. Includes making sure that
   * the page size is an option and that the list is sorted.
   */
  _updateDisplayedPageSizeOptions() {
    if (!this._isInitialized) {
      return;
    }
    if (!this.pageSize) {
      this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
    }
    this._displayedPageSizeOptions = this.pageSizeOptions.slice();
    if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
      this._displayedPageSizeOptions.push(this.pageSize);
    }
    this._displayedPageSizeOptions.sort((a, b) => a - b);
    this._changeDetectorRef.markForCheck();
  }
  /** Emits an event notifying that a change of the paginator's properties has been triggered. */
  _emitPageEvent(previousPageIndex) {
    this.page.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length
    });
  }
  static {
    this.\u0275fac = function MatPaginator_Factory(t) {
      return new (t || _MatPaginator)(\u0275\u0275directiveInject(MatPaginatorIntl), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatPaginator,
      selectors: [["mat-paginator"]],
      hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
      inputs: {
        color: "color",
        pageIndex: [InputFlags.HasDecoratorInputTransform, "pageIndex", "pageIndex", numberAttribute],
        length: [InputFlags.HasDecoratorInputTransform, "length", "length", numberAttribute],
        pageSize: [InputFlags.HasDecoratorInputTransform, "pageSize", "pageSize", numberAttribute],
        pageSizeOptions: "pageSizeOptions",
        hidePageSize: [InputFlags.HasDecoratorInputTransform, "hidePageSize", "hidePageSize", booleanAttribute],
        showFirstLastButtons: [InputFlags.HasDecoratorInputTransform, "showFirstLastButtons", "showFirstLastButtons", booleanAttribute],
        selectConfig: "selectConfig",
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
      },
      outputs: {
        page: "page"
      },
      exportAs: ["matPaginator"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      decls: 14,
      vars: 14,
      consts: [[1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-previous", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-next", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], [1, "mat-mdc-paginator-page-size-label"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], [1, "mat-mdc-paginator-page-size-value"], ["hideSingleSelectionIndicator", "", 3, "selectionChange", "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering"], [3, "value"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-first", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-last", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
      template: function MatPaginator_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
          \u0275\u0275template(2, MatPaginator_Conditional_2_Template, 5, 4, "div", 2);
          \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
          \u0275\u0275text(5);
          \u0275\u0275elementEnd();
          \u0275\u0275template(6, MatPaginator_Conditional_6_Template, 3, 5, "button", 5);
          \u0275\u0275elementStart(7, "button", 6);
          \u0275\u0275listener("click", function MatPaginator_Template_button_click_7_listener() {
            return ctx.previousPage();
          });
          \u0275\u0275namespaceSVG();
          \u0275\u0275elementStart(8, "svg", 7);
          \u0275\u0275element(9, "path", 8);
          \u0275\u0275elementEnd()();
          \u0275\u0275namespaceHTML();
          \u0275\u0275elementStart(10, "button", 9);
          \u0275\u0275listener("click", function MatPaginator_Template_button_click_10_listener() {
            return ctx.nextPage();
          });
          \u0275\u0275namespaceSVG();
          \u0275\u0275elementStart(11, "svg", 7);
          \u0275\u0275element(12, "path", 10);
          \u0275\u0275elementEnd()();
          \u0275\u0275template(13, MatPaginator_Conditional_13_Template, 3, 5, "button", 11);
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275conditional(2, !ctx.hidePageSize ? 2 : -1);
          \u0275\u0275advance(3);
          \u0275\u0275textInterpolate1(" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
          \u0275\u0275advance();
          \u0275\u0275conditional(6, ctx.showFirstLastButtons ? 6 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());
          \u0275\u0275attribute("aria-label", ctx._intl.previousPageLabel);
          \u0275\u0275advance(3);
          \u0275\u0275property("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());
          \u0275\u0275attribute("aria-label", ctx._intl.nextPageLabel);
          \u0275\u0275advance(3);
          \u0275\u0275conditional(13, ctx.showFirstLastButtons ? 13 : -1);
        }
      },
      dependencies: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
      styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking);--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginator, [{
    type: Component,
    args: [{
      selector: "mat-paginator",
      exportAs: "matPaginator",
      host: {
        "class": "mat-mdc-paginator",
        "role": "group"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
      template: `<div class="mat-mdc-paginator-outer-container">
  <div class="mat-mdc-paginator-container">
    @if (!hidePageSize) {
      <div class="mat-mdc-paginator-page-size">
        <div class="mat-mdc-paginator-page-size-label" [attr.id]="_pageSizeLabelId">
          {{_intl.itemsPerPageLabel}}
        </div>

        @if (_displayedPageSizeOptions.length > 1) {
          <mat-form-field
            [appearance]="_formFieldAppearance!"
            [color]="color"
            class="mat-mdc-paginator-page-size-select">
            <mat-select
              [value]="pageSize"
              [disabled]="disabled"
              [aria-labelledby]="_pageSizeLabelId"
              [panelClass]="selectConfig.panelClass || ''"
              [disableOptionCentering]="selectConfig.disableOptionCentering"
              (selectionChange)="_changePageSize($event.value)"
              hideSingleSelectionIndicator>
              @for (pageSizeOption of _displayedPageSizeOptions; track pageSizeOption) {
                <mat-option [value]="pageSizeOption">
                  {{pageSizeOption}}
                </mat-option>
              }
            </mat-select>
          </mat-form-field>
        }

        @if (_displayedPageSizeOptions.length <= 1) {
          <div class="mat-mdc-paginator-page-size-value">{{pageSize}}</div>
        }
      </div>
    }

    <div class="mat-mdc-paginator-range-actions">
      <div class="mat-mdc-paginator-range-label" aria-live="polite">
        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}
      </div>

      @if (showFirstLastButtons) {
        <button mat-icon-button type="button"
                class="mat-mdc-paginator-navigation-first"
                (click)="firstPage()"
                [attr.aria-label]="_intl.firstPageLabel"
                [matTooltip]="_intl.firstPageLabel"
                [matTooltipDisabled]="_previousButtonsDisabled()"
                [matTooltipPosition]="'above'"
                [disabled]="_previousButtonsDisabled()">
          <svg class="mat-mdc-paginator-icon"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true">
            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
          </svg>
        </button>
      }
      <button mat-icon-button type="button"
              class="mat-mdc-paginator-navigation-previous"
              (click)="previousPage()"
              [attr.aria-label]="_intl.previousPageLabel"
              [matTooltip]="_intl.previousPageLabel"
              [matTooltipDisabled]="_previousButtonsDisabled()"
              [matTooltipPosition]="'above'"
              [disabled]="_previousButtonsDisabled()">
        <svg class="mat-mdc-paginator-icon"
             viewBox="0 0 24 24"
             focusable="false"
             aria-hidden="true">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <button mat-icon-button type="button"
              class="mat-mdc-paginator-navigation-next"
              (click)="nextPage()"
              [attr.aria-label]="_intl.nextPageLabel"
              [matTooltip]="_intl.nextPageLabel"
              [matTooltipDisabled]="_nextButtonsDisabled()"
              [matTooltipPosition]="'above'"
              [disabled]="_nextButtonsDisabled()">
        <svg class="mat-mdc-paginator-icon"
             viewBox="0 0 24 24"
             focusable="false"
             aria-hidden="true">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
      @if (showFirstLastButtons) {
        <button mat-icon-button type="button"
                class="mat-mdc-paginator-navigation-last"
                (click)="lastPage()"
                [attr.aria-label]="_intl.lastPageLabel"
                [matTooltip]="_intl.lastPageLabel"
                [matTooltipDisabled]="_nextButtonsDisabled()"
                [matTooltipPosition]="'above'"
                [disabled]="_nextButtonsDisabled()">
          <svg class="mat-mdc-paginator-icon"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true">
            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>
          </svg>
        </button>
      }
    </div>
  </div>
</div>
`,
      styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking);--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"]
    }]
  }], () => [{
    type: MatPaginatorIntl
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
    }]
  }], {
    color: [{
      type: Input
    }],
    pageIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    length: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSizeOptions: [{
      type: Input
    }],
    hidePageSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectConfig: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    page: [{
      type: Output
    }]
  });
})();
var MatPaginatorModule = class _MatPaginatorModule {
  static {
    this.\u0275fac = function MatPaginatorModule_Factory(t) {
      return new (t || _MatPaginatorModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatPaginatorModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MAT_PAGINATOR_INTL_PROVIDER],
      imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator],
      exports: [MatPaginator],
      providers: [MAT_PAGINATOR_INTL_PROVIDER]
    }]
  }], null, null);
})();

// src/app/features/events/event-list/event-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _c1 = () => [8, 12, 24];
var _c2 = (a0) => ["/events", a0];
function EventListComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1);
  }
}
function EventListComponent_Conditional_37_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275element(3, "div", 22)(4, "div", 23)(5, "div", 24);
    \u0275\u0275elementEnd()();
  }
}
function EventListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, EventListComponent_Conditional_37_For_2_Template, 6, 0, "div", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function EventListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-icon", 26);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Nenhum evento encontrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Tente ajustar os filtros ou explore outras categorias.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 27);
    \u0275\u0275listener("click", function EventListComponent_Conditional_38_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Ver todos os eventos ");
    \u0275\u0275elementEnd()();
  }
}
function EventListComponent_Conditional_39_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r5.category);
  }
}
function EventListComponent_Conditional_39_For_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "GR\xC1TIS");
    \u0275\u0275elementEnd();
  }
}
function EventListComponent_Conditional_39_For_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(2, 1, event_r5.minPrice, "BRL", "symbol", "1.0-0"));
  }
}
function EventListComponent_Conditional_39_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31)(1, "div", 33);
    \u0275\u0275element(2, "div", 34);
    \u0275\u0275template(3, EventListComponent_Conditional_39_For_7_Conditional_3_Template, 2, 1, "span", 35);
    \u0275\u0275elementStart(4, "div", 36);
    \u0275\u0275template(5, EventListComponent_Conditional_39_For_7_Conditional_5_Template, 2, 0, "span", 37)(6, EventListComponent_Conditional_39_For_7_Conditional_6_Template, 3, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "h3", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 40)(11, "span")(12, "mat-icon");
    \u0275\u0275text(13, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span")(17, "mat-icon");
    \u0275\u0275text(18, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "p", 41);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 42)(24, "span", 43)(25, "mat-icon");
    \u0275\u0275text(26, "confirmation_number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 44);
    \u0275\u0275text(29, "Ver detalhes ");
    \u0275\u0275elementStart(30, "mat-icon");
    \u0275\u0275text(31, "arrow_forward");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const event_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c2, event_r5.id));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + (event_r5.imageUrl || ctx_r2.getDefaultImg(event_r5.category)) + ")");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, event_r5.category ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(5, event_r5.minPrice === 0 ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r5.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 12, event_r5.dateTime, "dd MMM yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", event_r5.city, "/", event_r5.state, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(22, 15, event_r5.description || "", 0, 90), "", (event_r5.description || "").length > 90 ? "\u2026" : "", "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", event_r5.totalTicketsAvailable, " vagas ");
  }
}
function EventListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 29)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275repeaterCreate(6, EventListComponent_Conditional_39_For_7_Template, 32, 21, "a", 31, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-paginator", 32);
    \u0275\u0275listener("page", function EventListComponent_Conditional_39_Template_mat_paginator_page_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.total);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" evento", ctx_r2.total !== 1 ? "s" : "", " encontrado", ctx_r2.total !== 1 ? "s" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.events);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", ctx_r2.total)("pageSize", ctx_r2.pageSize)("pageIndex", ctx_r2.page - 1)("pageSizeOptions", \u0275\u0275pureFunction0(7, _c1));
  }
}
var EventListComponent = class _EventListComponent {
  constructor() {
    this.eventService = inject(EventService);
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.events = [];
    this.loading = true;
    this.total = 0;
    this.page = 1;
    this.pageSize = 12;
    this.filterForm = this.fb.group({
      search: [""],
      city: [""],
      category: [""]
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["search"])
        this.filterForm.patchValue({ search: params["search"] });
      if (params["category"])
        this.filterForm.patchValue({ category: params["category"] });
      this.loadEvents();
    });
  }
  loadEvents() {
    this.loading = true;
    const { search, city, category } = this.filterForm.value;
    this.eventService.getEvents({ search, city, category, page: this.page, pageSize: this.pageSize }).subscribe({
      next: (result) => {
        this.events = result.items;
        this.total = result.total;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilters() {
    this.page = 1;
    this.loadEvents();
  }
  clearFilters() {
    this.filterForm.reset({ search: "", city: "", category: "" });
    this.page = 1;
    this.loadEvents();
  }
  onPageChange(event) {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadEvents();
  }
  getDefaultImg(category) {
    const map = {
      "M\xFAsica": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
      "Esportes": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
      "Teatro": "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&q=80",
      "Tecnologia": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
      "Gastronomia": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      "Arte": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&q=80"
    };
    return map[category ?? ""] ?? "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80";
  }
  static {
    this.\u0275fac = function EventListComponent_Factory(t) {
      return new (t || _EventListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventListComponent, selectors: [["app-event-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 2, consts: [[1, "events-page"], [1, "page-hero"], [1, "container"], [1, "page-title"], [1, "page-subtitle"], [1, "filters-bar", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "filter-search"], ["matPrefix", ""], ["matInput", "", "formControlName", "search", "placeholder", "T\xEDtulo, local..."], ["appearance", "outline", 1, "filter-city"], ["matInput", "", "formControlName", "city", "placeholder", "S\xE3o Paulo, Rio..."], ["appearance", "outline", 1, "filter-category"], ["formControlName", "category"], ["value", ""], [3, "value"], [1, "filter-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn-filter"], ["mat-stroked-button", "", "type", "button", 1, "btn-clear", 3, "click"], [1, "skeleton-grid"], [1, "skeleton-card"], [1, "skeleton-img"], [1, "skeleton-body"], [1, "skeleton-title"], [1, "skeleton-text"], [1, "skeleton-text-sm"], [1, "empty-state", "fade-in"], [1, "empty-icon"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "results-header"], [1, "results-count"], [1, "events-grid", "fade-in"], [1, "event-card-wrap", 3, "routerLink"], ["showFirstLastButtons", "", 1, "paginator", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], [1, "card-img"], [1, "card-overlay"], [1, "card-badge"], [1, "card-price-tag"], [1, "free-tag"], [1, "card-body"], [1, "card-title"], [1, "card-meta"], [1, "card-desc"], [1, "card-footer"], [1, "tickets-left"], [1, "card-cta"]], template: function EventListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Todos os Eventos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Encontre os melhores eventos perto de voc\xEA");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 2)(8, "form", 5);
        \u0275\u0275listener("ngSubmit", function EventListComponent_Template_form_ngSubmit_8_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(9, "mat-form-field", 6)(10, "mat-label");
        \u0275\u0275text(11, "Buscar evento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-icon", 7);
        \u0275\u0275text(13, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-form-field", 9)(16, "mat-label");
        \u0275\u0275text(17, "Cidade");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-icon", 7);
        \u0275\u0275text(19, "location_on");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-form-field", 11)(22, "mat-label");
        \u0275\u0275text(23, "Categoria");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-select", 12)(25, "mat-option", 13);
        \u0275\u0275text(26, "Todas");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(27, EventListComponent_For_28_Template, 2, 2, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 15)(30, "button", 16)(31, "mat-icon");
        \u0275\u0275text(32, "tune");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " Filtrar ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 17);
        \u0275\u0275listener("click", function EventListComponent_Template_button_click_34_listener() {
          return ctx.clearFilters();
        });
        \u0275\u0275elementStart(35, "mat-icon");
        \u0275\u0275text(36, "clear");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(37, EventListComponent_Conditional_37_Template, 3, 1, "div", 18)(38, EventListComponent_Conditional_38_Template, 11, 0)(39, EventListComponent_Conditional_39_Template, 9, 8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.filterForm);
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.eventService.categories);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(37, ctx.loading ? 37 : ctx.events.length === 0 ? 38 : 39);
      }
    }, dependencies: [CommonModule, SlicePipe, CurrencyPipe, DatePipe, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, MatButtonModule, MatButton, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormField, MatLabel, MatPrefix, MatFormFieldModule, MatSelectModule, MatSelect, MatOption, MatProgressSpinnerModule, MatPaginatorModule, MatPaginator], styles: ['@charset "UTF-8";\n\n\n\n.events-page[_ngcontent-%COMP%] {\n  padding-top: 64px;\n}\n.page-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary) 100%);\n  padding: 48px 0 40px;\n  margin-bottom: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.8rem, 4vw, 2.5rem);\n  font-weight: 800;\n  color: white;\n  margin: 0 0 8px;\n  letter-spacing: -0.5px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  margin: 0;\n  font-size: 1rem;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  padding: 28px 0 8px;\n}\n.filter-search[_ngcontent-%COMP%] {\n  flex: 2 1 240px;\n}\n.filter-city[_ngcontent-%COMP%] {\n  flex: 1 1 160px;\n}\n.filter-category[_ngcontent-%COMP%] {\n  flex: 1 1 160px;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding-top: 4px;\n  align-self: center;\n}\n.btn-filter[_ngcontent-%COMP%] {\n  height: 56px;\n  padding: 0 20px;\n  border-radius: 8px !important;\n}\n.btn-clear[_ngcontent-%COMP%] {\n  height: 56px;\n  min-width: 48px;\n  padding: 0 12px;\n  border-radius: 8px !important;\n}\n.results-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding-top: 4px;\n}\n.results-count[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.events-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 24px;\n}\n@media (max-width: 900px) {\n  .events-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 580px) {\n  .events-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.event-card-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border);\n  background: var(--surface);\n  text-decoration: none;\n  color: inherit;\n  transition: transform var(--transition), box-shadow var(--transition);\n}\n.event-card-wrap[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-xl);\n}\n.event-card-wrap[_ngcontent-%COMP%]:hover   .card-overlay[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.event-card-wrap[_ngcontent-%COMP%]:hover   .card-cta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.card-img[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  background-size: cover;\n  background-position: center;\n  background-color: var(--surface-2);\n}\n.card-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent 40%,\n      rgba(0, 0, 0, 0.7) 100%);\n  opacity: 0.45;\n  transition: opacity var(--transition);\n}\n.card-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: rgba(255, 255, 255, 0.9);\n  color: var(--primary);\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.card-price-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  background: var(--primary);\n  color: white;\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.card-price-tag[_ngcontent-%COMP%]   .free-tag[_ngcontent-%COMP%] {\n  color: #a5f3c3;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.card-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n}\n.card-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--text-secondary);\n  margin: 0;\n  line-height: 1.5;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n  padding-top: 8px;\n  border-top: 1px solid var(--border);\n}\n.tickets-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.78rem;\n  color: var(--text-hint);\n}\n.tickets-left[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.card-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--primary);\n}\n.card-cta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  transition: transform var(--transition);\n}\n.skeleton-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 24px;\n  padding-top: 28px;\n}\n@media (max-width: 900px) {\n  .skeleton-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 580px) {\n  .skeleton-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.paginator[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n/*# sourceMappingURL=event-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventListComponent, { className: "EventListComponent", filePath: "src\\app\\features\\events\\event-list\\event-list.component.ts", lineNumber: 368 });
})();
export {
  EventListComponent
};
//# sourceMappingURL=chunk-CUJC2Y54.js.map
