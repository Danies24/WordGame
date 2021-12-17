import { LETTER_CLICK } from '../constants';
export function letterClickAction(letter) {
return {
type: LETTER_CLICK,
payload: letter
}
}