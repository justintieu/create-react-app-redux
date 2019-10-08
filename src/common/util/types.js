// flow
import type { DispatchAPI } from "redux";
import type { TFunction, TranslatorProps } from "react-i18next";

export type Action = $ReadOnly<{|
    type: string
|}> &
    Object;

export type Thunk = (dispatch: Dispatch, getState: Object) => any;

export type ActionOrThunk = Action | Thunk;

export type Dispatch = DispatchAPI<ActionOrThunk>;

export type I18n = TFunction;

export type HasI18n = TranslatorProps;

export type NoArgsHandler = () => void;
