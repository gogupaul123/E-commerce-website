import React, { createContext, useState } from 'react';
import { getCosTotal } from './Reducer';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import Confirmare from './Confirmare';
import './styles/Plata.css';


function Plata() {

    const [{ cos }] = useStateValue();

    const [{ basket }, dispatch] = useStateValue();

    const [familyName, changedFamilyName] = useState(() => 'anonim');
    const [prenume, changedPrenume] = useState(() => 'anonim');
    const [cardNr, changedCardNr] = useState(() => 0);
    const [code, changedCode] = useState(() => 0);

    const [gender, changedGender] = useState(() => '0');


    const [plata, changedPlata] = useState(false);

    const myStyle = {
        display: plata ? 'block' : 'none'
    }

    const myStyle2 = {
        display: plata ? 'none' : 'block'
    }

    function myFunc(event) {
        event.preventDefault();
        if (prenume.length >= 4 && familyName.length >= 4
            && cardNr >= 6 && code >= 3) {
            changedPlata(() => true)
            dispatch({ type: 'DELETE_ALL' })
        }
        else {
            alert('Va rugam sa introduceti toate datele necesare.')
        }


    }





    return (
        <div className='container'>

            <div className='plata' style={myStyle2}>
                <form name='form1' className='form' id='form1'>
                    <label htmlFor='NumeDeF'>Nume de familie:</label>

                    <input
                        onChange={(event) => changedFamilyName(() => event.target.value)}



                        placeholder='Numele de familie ...' type='text' id='NumeDeF'></input>
                    <br></br>

                    <label htmlFor='Prenume' >Prenume:</label>

                    <input onChange={(event) => changedPrenume(() => event.target.value)
                    }
                        placeholder='Prenumele ...' type='text' id='Prenume'></input>
                    <br></br>

                    <div className='sex'>
                        <span>Sex:</span>{' '}

                        <input onChange={() => changedGender(() => 0)} type='radio' id='masculin' name='gender' value='masculin'></input>
                        <label htmlFor='masculin'>Masculin</label>{' '}

                        <input onChange={() => changedGender(() => 1)} type='radio' id='feminin' name='gender' value='feminin'></input>
                        <label htmlFor='feminin'>Feminin</label>{' '}

                        <input type='radio' id='altceva' name='gender' value='altceva'></input>
                        <label htmlFor='altceva'>Altceva</label>
                        <br></br>
                    </div>



                    <label htmlFor='card'>Numar card:</label>
                    <input
                        onChange={(event) => (changedCardNr(() => event.target.value))}
                        placeholder='Numarul cardului ...' type='text' id='card'></input>
                    <br></br>
                    <label htmlFor='cvv'>Cod CVC2/CVV2:</label>
                    <input
                        onChange={(event) => changedCode(() => event.target.value)}
                        placeholder='Codul de securitate ...' type='text' id='cvv'></input>
                </form>
                <p style={{ fontSize: '15px', marginTop: '-3vh' }}>**Datele nu vor fi stocate.</p>
                <CurrencyFormat
                    renderText={(value) => (
                        <div>
                            <h2>Total de plata:{value}</h2>
                        </div>
                    )}
                    decimalScale={2}
                    value={getCosTotal(cos)}
                    displayType={'text'}
                    thousandSeparator={true}
                    suffix={' Lei'}
                />

                <div className='btn'>
                    <Link to='/ConfirmarePlata'>
                        <button type='submit' form='form1' value='submit'
                            onClick={myFunc}   >Plateste</button>
                    </Link>
                </div>


            </div>
            <div className='confirmare' style={myStyle}>
                <Confirmare gender={gender} user={prenume} />
            </div>
        </div>



    )
}


export default Plata;
