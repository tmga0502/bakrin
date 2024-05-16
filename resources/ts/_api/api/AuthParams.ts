import {unstable_renderSubtreeIntoContainer} from "react-dom";

const authToken = sessionStorage.getItem('bakrinAuthToken');
export const authParams = (uri: string) => uri + '?auth_token=' + authToken
