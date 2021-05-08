import { useRef, useState } from 'react'

enum Operators {
    sum, minus, multiply, divide
}

export const useCalculator = () => {

    const [lastNumber, setLastNumber] = useState('0')
    const [number, setNumber] = useState('0')

    const lastOperator = useRef<Operators>()

    const clean = () => {
        setNumber('0')
        setLastNumber('0')
    }

    const buildNumber = ( numText: string ) => {
        if (number.includes('.') && numText === '.') return; 

        if (number.startsWith('0') || number.startsWith('-0')) {
            if(numText === '.') {
                setNumber (number + numText);
            }
            else if( numText === '0' && number.includes('.')){
                setNumber(number + numText);
            }
            else if(numText !== '0' && !number.includes('.')){
                setNumber(numText);
            }
            else if(numText === '0' && !number.includes('.')){
                setNumber(number);
            }
            else {
                setNumber(number + numText);
            }
        }
        else{
            setNumber(number + numText)
        }
    }

    const btnDeleteLastNumber = () => {
        if (number.length > 1){
            setNumber(number.substring(0,number.length-1));
        }
        else {
            setNumber('0');
        }
        
    }

    const changeSign = () => {
        if (number.includes('-')){
            setNumber(number.replace('-',''));
        }
        else{
            setNumber('-' + number);
        }
    }

    const changeLastNumber = () => {
        if (number.endsWith('.')) {
            setLastNumber(number.slice(0,-1));
        }
        else {
            setLastNumber(number)
        }
        setNumber('0');
    }

    const btnDivide = () => {
        changeLastNumber();
        lastOperator.current = Operators.divide
    }

    const btnMultiply = () => {
        changeLastNumber();
        lastOperator.current = Operators.multiply
    }

    const btnMinus = () => {
        changeLastNumber();
        lastOperator.current = Operators.minus
    }

    const btnSum = () => {
        changeLastNumber();
        lastOperator.current = Operators.sum
    }

    const calc = () => {
        const num1 = Number( number );
        const num2 = Number( lastNumber );

        switch (lastOperator.current) {
            case Operators.sum:
                setNumber(`${num2 + num1}`);
                break;
            case Operators.minus:
                setNumber(`${num2 - num1}`);
                break;
            case Operators.multiply:
                setNumber(`${num2 * num1}`);
                break;
            case Operators.minus:
                if (num1 !== 0) {
                    setNumber(`${num2 / num1}`);
                }
                break;
            default:
                break;
        }

        setLastNumber('0');
    }

    return ( { 
        lastNumber, 
        number, 
        clean, 
        changeSign, 
        btnDeleteLastNumber, 
        btnDivide,
        buildNumber,
        btnMultiply,
        btnMinus,
        btnSum,
        calc
    })

}