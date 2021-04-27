(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Accounts_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Accounts/Action.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Accounts/Action.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__.default.extend({
  name: "Action",
  components: {},
  props: ["item"]
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Accounts/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Accounts/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "./resources/js/pages/Accounts/Action.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Actions: _Action__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      options: {
        page: 1,
        itemsPerPage: 10,
        query: "",
        sortField: "created_at",
        sortOrder: "desc"
      },
      totalItems: 0,
      loading: false,
      search: "",
      serverData: [],
      headers: [{
        text: "Account Number",
        align: "start",
        sortable: false,
        value: "account_number"
      }, {
        text: "Account Type",
        value: "type"
      }, {
        text: "Status",
        value: "status"
      }, {
        text: "Account Holder",
        value: "full_name"
      }, {
        text: "Available Balance",
        value: "balance"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false,
        align: "center"
      }]
    };
  },
  methods: {
    loadServerData: function loadServerData() {
      var _this = this;

      this.loading = true;
      axios.get("/accounts", {
        params: {
          query: this.options.query,
          page: this.options.page,
          perPage: this.options.itemsPerPage
        }
      }).then(function (response) {
        _this.serverData = response.data.data;

        _this.setOptions(response.data.meta);
      })["finally"](function () {
        _this.loading = false;
      });
    },
    onPageChange: function onPageChange(page) {
      this.options.page = page;
      this.loadServerData();
    },
    onItemsPerPageChange: function onItemsPerPageChange(perPage) {
      this.options.itemsPerPage = perPage;
      this.loadServerData();
    },
    onSortBy: function onSortBy(field) {
      this.options.sortField = field;
    },
    sortDesc: function sortDesc(isDesc) {
      if (isDesc) this.options.sortOrder = "desc";else this.options.sortOrder = "asc";
    },
    setOptions: function setOptions(data) {
      this.options.page = data.page;
      this.options.itemsPerPage = parseInt(data.per_page);
      this.totalItems = data.total;
    },
    onSearch: function onSearch(query) {
      this.options.query = query;
      this.loadServerData();
    },
    onEdit: function onEdit(account) {
      this.$router.push({
        name: "account.edit",
        params: {
          id: account.id
        }
      });
    },
    onViewTransactions: function onViewTransactions(account) {
      this.$router.push({
        name: "account.transactions",
        params: {
          id: account.id
        }
      });
    }
  },
  mounted: function mounted() {
    this.loadServerData();
  }
});

/***/ }),

/***/ "./resources/js/pages/Accounts/Action.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/Accounts/Action.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Action_vue_vue_type_template_id_f5825ab4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action.vue?vue&type=template&id=f5825ab4& */ "./resources/js/pages/Accounts/Action.vue?vue&type=template&id=f5825ab4&");
/* harmony import */ var _Action_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action.vue?vue&type=script&lang=ts& */ "./resources/js/pages/Accounts/Action.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Action_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _Action_vue_vue_type_template_id_f5825ab4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Action_vue_vue_type_template_id_f5825ab4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Accounts/Action.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Accounts/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/Accounts/Index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_4c697a92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=4c697a92& */ "./resources/js/pages/Accounts/Index.vue?vue&type=template&id=4c697a92&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Accounts/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_4c697a92___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_4c697a92___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Accounts/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Accounts/Action.vue?vue&type=script&lang=ts&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Accounts/Action.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Action_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Action.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Accounts/Action.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Action_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Accounts/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Accounts/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Accounts/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Accounts/Action.vue?vue&type=template&id=f5825ab4&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/Accounts/Action.vue?vue&type=template&id=f5825ab4& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Action_vue_vue_type_template_id_f5825ab4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Action_vue_vue_type_template_id_f5825ab4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Action_vue_vue_type_template_id_f5825ab4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Action.vue?vue&type=template&id=f5825ab4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Accounts/Action.vue?vue&type=template&id=f5825ab4&");


/***/ }),

/***/ "./resources/js/pages/Accounts/Index.vue?vue&type=template&id=4c697a92&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Accounts/Index.vue?vue&type=template&id=4c697a92& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4c697a92___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4c697a92___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4c697a92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=4c697a92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Accounts/Index.vue?vue&type=template&id=4c697a92&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Accounts/Action.vue?vue&type=template&id=f5825ab4&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Accounts/Action.vue?vue&type=template&id=f5825ab4& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-btn",
        {
          attrs: {
            depressed: "",
            "x-small": "",
            text: "",
            plain: "",
            color: "primary"
          },
          on: {
            click: function($event) {
              return _vm.$emit("edit", _vm.item)
            }
          }
        },
        [_c("v-icon", { attrs: { dark: "" } }, [_vm._v("edit")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: {
            depressed: "",
            text: "",
            plain: "",
            "x-small": "",
            color: "secondary"
          },
          on: {
            click: function($event) {
              return _vm.$emit("transactions", _vm.item)
            }
          }
        },
        [_c("v-icon", { attrs: { dark: "" } }, [_vm._v("search")])],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Accounts/Index.vue?vue&type=template&id=4c697a92&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Accounts/Index.vue?vue&type=template&id=4c697a92& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        { attrs: { outlined: "" } },
        [
          _c(
            "v-card-title",
            [
              _vm._v("\n            All Accounts\n            "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("div", { attrs: { align: "right", justify: "right" } })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.headers,
              items: _vm.serverData,
              options: _vm.options,
              "server-items-length": _vm.totalItems,
              "items-per-page": _vm.options.itemsPerPage,
              loading: _vm.loading,
              "footer-props": {
                prevIcon: "keyboard_arrow_left",
                nextIcon: "keyboard_arrow_right"
              }
            },
            on: {
              "update:options": function($event) {
                _vm.options = $event
              },
              "update:page": _vm.onPageChange,
              "update:items-per-page": _vm.onItemsPerPageChange,
              "update:sort-by": _vm.onSortBy,
              "update:sort-desc": _vm.sortDesc
            },
            scopedSlots: _vm._u([
              {
                key: "top",
                fn: function() {
                  return [
                    _c(
                      "v-row",
                      { staticClass: "d-flex justify-space-between ma-1" },
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "3" } },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { depressed: "", color: "success" },
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push({
                                      name: "account.create"
                                    })
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            Create\n                        "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "3" } },
                          [
                            _c("v-text-field", {
                              staticClass: "pa-1",
                              attrs: {
                                "append-icon": "search",
                                label: "Enter Account Number",
                                "single-line": "",
                                "hide-details": ""
                              },
                              on: { input: _vm.onSearch },
                              model: {
                                value: _vm.search,
                                callback: function($$v) {
                                  _vm.search = $$v
                                },
                                expression: "search"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                },
                proxy: true
              },
              {
                key: "item.actions",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("Actions", {
                      attrs: { item: item },
                      on: {
                        edit: _vm.onEdit,
                        transactions: _vm.onViewTransactions
                      }
                    })
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);