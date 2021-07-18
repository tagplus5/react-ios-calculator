import { useEffect, useState, useCallback } from 'react';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = () => {
    const [accValue, setAccValue] = useState(null);
    const [screenValue, setScreenValue] = useState('0');
    const [currentOperator, setCurrentOperator] = useState(null);
    const [expectsOperand, setExpectsOperand] = useState(false);

    const allClear = () => {
        setAccValue(null);
        setScreenValue('0');
        setCurrentOperator(null);
        setExpectsOperand(false);
    }

    const clearScreen = () => {
        setScreenValue('0');
    }

    const isScreenClear = screenValue === '0';

    const reverseSign = () => {
        setScreenValue(String(-parseFloat(screenValue)));
    }

    const percentage = () => {
        setScreenValue(String(parseFloat(screenValue) / 100));
    };

    const addDecimalPoint = () => {
        if (expectsOperand) {
            setScreenValue('0.');
        }
        else {
            if (!screenValue.includes('.')) {
                setScreenValue(screenValue + '.');
            }
        }

        setExpectsOperand(false);
    }

    const clearLastDigit = useCallback(() => {
        if (screenValue !== '0') {
            if (screenValue.length > 1) {
                setScreenValue('0');
            }
            else {
                setScreenValue(screenValue.substring(0, screenValue.length - 1));
            }
        }
    }, [screenValue]);

    const operate = (operator, accValue, inputValue) => {
        if (operator === '+') {
            return accValue + inputValue;
        }
        else if (operator === '-') {
            return accValue - inputValue;
        }
        else if (operator === 'x') {
            return accValue * inputValue;
        }
        else if (operator === '/') {
            return accValue / inputValue;
        }
        else if (operator === '=') {
            return inputValue;
        }
    }

    const handleClickFunctionKey = (value) => {
        if (value === 'AC') {
            allClear();
        }
        else if (value === 'C') {
            clearScreen();
        }
        else if (value === '+/-') {
            reverseSign();
        }
        else if (value === '%') {
            percentage();
        }
        else if (value === '.') {
            addDecimalPoint();
        }
    }

    const handleClickNumericKey = (value) => {
        if (expectsOperand) {
            setScreenValue(String(value));
            setExpectsOperand(false);
        }
        else {
            setScreenValue(screenValue === '0' ? String(value) : screenValue + value);
        }
    }

    const handleClickOperator = (operator) => {
        const inputValue = parseFloat(screenValue);

        if (accValue === null) {
            setAccValue(inputValue);
        }
        else {
            if (currentOperator) {
                const resultValue = operate(currentOperator, accValue, inputValue);
                setAccValue(resultValue);
                setScreenValue(String(resultValue));
            }
        }

        setExpectsOperand(true);
        setCurrentOperator(operator);
    }

    const handleActionToPerform = (value, keyType) => {
        if (keyType === 'fx') {
            handleClickFunctionKey(value);
        }
        else if (keyType === 'numeric') {
            handleClickNumericKey(value);
        }
        else if (keyType === 'operator') {
            handleClickOperator(value);
        }
    }

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Backspace') {
            e.preventDefault();
            clearLastDigit();
        }
    }, [clearLastDigit]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown, screenValue]);

    return (
        <div id="calculator-view" className={"flex column jc-center ai-center"}>
            <div id="viewport" className={"flex column jc-sp-between ai-center"}>
                <Display value={screenValue} />
                <Keypad actionToPerform={handleActionToPerform} allClear={isScreenClear} />
            </div>
        </div >
    )
}

export default Calculator;
