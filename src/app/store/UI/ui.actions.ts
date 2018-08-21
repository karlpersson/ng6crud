import { Action } from '@ngrx/store';
import { AdUnit } from './../../components/index/AdUnit'; 

export const UIActionsTypes = {
    ADUNIT_EDITED_ACTION: '[UI] -ADUNIT changed-',
    /*ADUNIT_NAME_EDITED_ACTION: '[UI] -ADUNIT name changed-',
    ADUNIT_PRICE_EDITED_ACTION: '[UI] -ADUNIT price changed-',*/
};

export class ADUnitEditedAction implements Action {
    type = UIActionsTypes.ADUNIT_EDITED_ACTION;
    constructor(public payload: AdUnit) { }
}

/*export class ADUnitNameEditedAction implements Action {
    type = UIActionsTypes.ADUNIT_NAME_EDITED_ACTION;
    constructor(public payload: string) { }
}

export class ADUnitPriceEditedAction implements Action {
    type = UIActionsTypes.ADUNIT_PRICE_EDITED_ACTION;
    constructor(public payload: number) { }
}*/

export type UIActions =
    | ADUnitEditedAction
    /*| ADUnitNameEditedAction
    | ADUnitPriceEditedAction*/;