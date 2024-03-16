import './NewLetter.css'

const NewLetter = () => {
    return ( 
      <div className='wrapper'>
        <div className="newletter">
            <h1>Хотите получить эксклюзивное <br/>предложени на E-mail?</h1>
            <p>Подпишитесь на нашу рассылку и оставайтесь c нами</p>        
            <div>
                <input tupe='email' placeholder='Введите E-mail'/>
                <button>Подписаться</button>
            </div>
        </div>
      </div>
        

     );
}
 
export default NewLetter;