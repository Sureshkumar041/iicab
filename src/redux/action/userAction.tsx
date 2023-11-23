import { REDUCER_TYPES } from "../../common/constant";


export const setLoginUserData = (value: any) => ({
    type: REDUCER_TYPES.LOGIN,
    data: value,
  });