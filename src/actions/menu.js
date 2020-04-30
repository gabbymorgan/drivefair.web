import Axios from "axios";
import types from "./types";

export const editMenuItem = (menuItemId, changes) => async (dispatch) => {
  try {
    dispatch({ type: types.EDIT_MENU_ITEM });
    const response = await Axios.post("/vendors/editMenuItem", {
      menuItemId,
      changes,
    });
    dispatch({ type: types.EDIT_MENU_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.EDIT_MENU_ITEM_FAIL, payload: { error } });
  }
};

export const addMenuItem = (properties) => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_MENU_ITEM });
    const response = await Axios.post("/vendors/addMenuItem", properties);
    dispatch({ type: types.ADD_MENU_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.ADD_MENU_ITEM_FAIL, payload: { error } });
  }
};

export const removeMenuItem = (menuItemId) => async (dispatch) => {
  try {
    dispatch({ type: types.REMOVE_MENU_ITEM });
    const response = await Axios.post("/vendors/removeMenuItem", {
      menuItemId,
    });
    dispatch({ type: types.REMOVE_MENU_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.REMOVE_MENU_ITEM_FAIL, payload: { error } });
  }
};

export const editModification = (modificationId, changes) => async (
  dispatch
) => {
  try {
    dispatch({ type: types.EDIT_MODIFICATION });
    const response = await Axios.post("/vendors/editModification", {
      modificationId,
      changes,
    });
    dispatch({ type: types.EDIT_MODIFICATION_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.EDIT_MODIFICATION_FAIL, payload: { error } });
  }
};

export const addModification = (properties) => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_MODIFICATION });
    const response = await Axios.post("/vendors/addModification", properties);
    dispatch({ type: types.ADD_MODIFICATION_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.ADD_MODIFICATION_FAIL, payload: { error } });
  }
};

export const removeModification = (modificationId) => async (dispatch) => {
  try {
    dispatch({ type: types.REMOVE_MODIFICATION });
    const response = await Axios.post("/vendors/removeModification", {
      modificationId,
    });
    dispatch({
      type: types.REMOVE_MODIFICATION_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: types.REMOVE_MODIFICATION_FAIL, payload: { error } });
  }
};

export const getMenu = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_MENU });
    const response = await Axios.get("/vendors/menu");
    dispatch({ type: types.GET_MENU_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.GET_MENU_FAIL, payload: { error } });
  }
};