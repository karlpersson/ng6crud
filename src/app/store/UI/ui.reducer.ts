import { UIState } from './ui.state';
import { UIActions, UIActionsTypes } from './ui.actions';
import {AdUnit} from './../../components/index/AdUnit'

export const appInitialState: UIState = {
    adunit:  { id: 0, unit_name: '', unit_price: 0 }
};

export function uiReducer(state = appInitialState, action: UIActions): UIState {
    switch (action.type) {
        case UIActionsTypes.ADUNIT_EDITED_ACTION: {
            console.log(':::ADUNIT_EDITED_ACTION')
            return Object.assign(state, {
                ...state,
                adunit: action.payload
            });
        }
        default:{
            return state;
        }
        /*case UIActionsTypes.ADUNIT_NAME_EDITED_ACTION:{
            return Object.assign(state, {
                ...state,
                adunit.unit_name: action.payload
            });            
        }*/
    }
}