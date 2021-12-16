import { LETTER_CLICK } from '../constants';
export function letterClick(letter) {
return {
type: LETTER_CLICK,
payload: letter
}
}