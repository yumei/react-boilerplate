import {UPDATE_FORM, SAVE_FORM, CLIENT_SAVED, RESET_FORM} from "./constants";

export function updateForm(target) {
  return {type: UPDATE_FORM, target: target};
}

export function saveForm(client) {
  return {type: SAVE_FORM, client};
}

export function clientSaved(client) {
  return {type: CLIENT_SAVED, client};
}

export function resetForm(client) {
  return {type: RESET_FORM};
}
