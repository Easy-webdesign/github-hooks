import { HIDE_ALERT, SHOW_ALERT } from "./types"

export const fn = (state, action) => {
    return {
        [SHOW_ALERT]: action.payload,
        [HIDE_ALERT]: null,
    }
}