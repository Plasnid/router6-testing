import {useNavigate} from 'react-router-dom';

function NameForm(props){

    const navigate = useNavigate();

    function goToThanks(e){
        e.preventDefault();
        console.log("Thank you user!");
        navigate('/thanks');
    }
    return (
        <form onSubmit={goToThanks}>
            <section>
                <label>Name:
                    <input type="text" onChange={props.handleChange}/>
                </label>
            </section>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default NameForm;