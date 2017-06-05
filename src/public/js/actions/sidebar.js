import {TOGGLE_SIDEBAR} from "./types";

export const toggleSidebar = (showSidebar) => {
    return {
        type: TOGGLE_SIDEBAR,
        showSidebar
    };
};