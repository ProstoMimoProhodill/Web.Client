import { modules }from "./modules";
import { state } from './state';
import {createServiceAction} from "./actionCreators";
import {results} from "./results";
import {user} from './user';

export enum ACTION_TYPES {
    GET= 'get',
    GET_ONE= 'getOne',
    REMOVE= 'remove',
    ADD= 'add',
    EDIT= 'edit',
}

export const actions = {
    ...modules,
    ...state,
    ...results,
    ...user,
    ...createServiceAction('TaskModule', [ACTION_TYPES.GET, ACTION_TYPES.GET_ONE]),
    ...createServiceAction('TaskVariantLog', [ACTION_TYPES.GET]),
    ...createServiceAction('Me', [ACTION_TYPES.GET_ONE]),
};