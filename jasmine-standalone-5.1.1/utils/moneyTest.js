import { formatCurrency } from "../../scripts/utils/money.js";

describe('test Suite: formatCurrency' , () => {
    it('converst cents into dollars', ()=> {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds up to nearest cents', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });

    it('rounds up to nearest cents -2', () => {
        expect(formatCurrency(2000.4)).toEqual('20.00'); 
    });

    it('checks of negative number', ()=> {
        expect(formatCurrency(-500)).toEqual('-5.00');
    });
});
