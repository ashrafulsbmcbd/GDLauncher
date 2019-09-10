import {
  OPEN_MODAL,
  CLOSE_MODAL
} from "./actionTypes";

export function openModal(modalType, modalProps) {
  return {
    type: OPEN_MODAL,
    modalType,
    modalProps
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}