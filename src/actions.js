import getIssues from "./api";
import store from "./state";

export function loadIssues() {
     return {
        type: 'PROMISE',
        actions: ['ISSUES_LOADING', 'ISSUES_LOADED', 'ISSUES_LOAD_FAILURE'],
        promise: getIssues()
    };
}

