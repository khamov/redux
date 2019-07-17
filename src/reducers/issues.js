export default function (state = [], action) {
    switch (action.type) {
        case 'ISSUES_LOADED':
            return action.data;
        //break;
        default:
            return state;
    }
}