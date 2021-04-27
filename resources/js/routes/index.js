import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
    if (window.isLogin) {
        if (["/login"].includes(to.path)) {
            next(from.path);
            return;
        }
        next();
        return;
    }
    next("/login");
};
const authCheck = (to, from, next) => {
    if (window.isLogin) {
        next(from.path);
        return;
    }
    next();
};

export default new VueRouter({
    /*
     * NOTE: VueRouter "history" mode DOESN'T works for Cordova builds,
     * it is only to be used only for websites.
     *
     * If you decide to go with "history" mode, please also open /config/index.js
     * and set "build.publicPath" to something other than an empty string.
     * Example: '/' instead of current ''
     *
     * If switching back to default "hash" mode, don't forget to set the
     * build publicPath back to '' so Cordova builds work again.
     */

    mode: "history",

    routes: [
        {
            path: "/",
            component: () => import("./../layouts/MainLayout.vue"),
            beforeEnter: ifAuthenticated,
            children: [
                {
                    path: "/",
                    name: "home",
                    component: () => import("./../pages/Accounts/Index.vue")
                },
                {
                    path: "/account/create",
                    name: "account.create",
                    component: () => import("./../pages/Accounts/Create.vue")
                },
                {
                    path: "/account/:id/edit",
                    name: "account.edit",
                    component: () => import("./../pages/Accounts/Edit.vue")
                },
                {
                    path: "/account/:id/transactions",
                    name: "account.transactions",
                    component: () => import("./../pages/Transactions/Index.vue")
                },
                {
                    path: "/transation/create",
                    name: "transaction.create",
                    component: () =>
                        import("./../pages/Transactions/Create.vue")
                }
            ]
        },
        {
            path: "/login",
            name: "login",
            beforeEnter: authCheck,
            component: () => import("./../pages/Auth/Login.vue")
        }
    ]
});
