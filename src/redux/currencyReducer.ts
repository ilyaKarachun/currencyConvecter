import {ACTIONS_TYPE, CurrencyReducersTypes} from './actions';


export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 2.45,
            sellRate: 2.47,
        },
        {
            currencyName: 'EUR',
            buyRate: 2.42,
            sellRate: 2.47,
        },
        {
            currencyName: 'RUR',
            buyRate: 0.0310,
            sellRate: 0.0401,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
            return {...state,
                currentCurrency: action.currentCurrency,
                amountOfBYN: '',
                amountOfCurrency: '',
                        }
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
            return {...state,
                isBuying: action.isBuying,
                // when change the field
                amountOfBYN: '',
                amountOfCurrency: '',
            }
        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:
            return {...state,
                amountOfCurrency: action.amountOfCurrency,
                amountOfBYN: action.amountOfBYN }
        default:
            return state;
    }
};
