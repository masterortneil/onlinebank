(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Transactions_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Transactions/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Transactions/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  components: {},
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
        text: "Transaction Date",
        align: "start",
        sortable: false,
        value: "created_at"
      }, {
        text: "References / Description",
        value: "notes"
      }, {
        text: "Type",
        value: "type"
      }, {
        text: "Amount",
        value: "amount"
      }, {
        text: "Balance",
        value: "balance"
      }]
    };
  },
  methods: {
    loadServerData: function loadServerData() {
      var _this = this;

      this.loading = true;
      axios.get("/accounts/".concat(this.id, "/transactions"), {
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
    }
  },
  computed: {
    id: function id() {
      return this.$route.params.id;
    }
  },
  mounted: function mounted() {
    this.loadServerData();
  }
});

/***/ }),

/***/ "./resources/js/pages/Transactions/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/Transactions/Index.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_3b7d88c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3b7d88c1& */ "./resources/js/pages/Transactions/Index.vue?vue&type=template&id=3b7d88c1&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Transactions/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_3b7d88c1___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_3b7d88c1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Transactions/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Transactions/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Transactions/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Transactions/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Transactions/Index.vue?vue&type=template&id=3b7d88c1&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Transactions/Index.vue?vue&type=template&id=3b7d88c1& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3b7d88c1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3b7d88c1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3b7d88c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=3b7d88c1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Transactions/Index.vue?vue&type=template&id=3b7d88c1&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Transactions/Index.vue?vue&type=template&id=3b7d88c1&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Transactions/Index.vue?vue&type=template&id=3b7d88c1& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
              _vm._v("\n            Transactions\n            "),
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
            }
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