import './RadioBox.css'

export default function RadioBox() {

    return (
        <div className={'radio__body'}>
            <p>Способ оплаты:</p>
            <input type="radio" id="age1" name="age" value="30"/>
            <label  className={'radio__label'} htmlFor="age1">Наличными</label><br/>
            <input type="radio" id="age2" name="age" value="60"/>
            <label className={'radio__label'} htmlFor="age2">Картой</label><br/>
        </div>
    )

}