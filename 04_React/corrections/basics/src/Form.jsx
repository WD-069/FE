export default function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const { name, age, color, recommend, button } = form.elements;
        button.disabled = true;

        if (!name.value) return alert('Name is required');
        if (name.value.trim().length < 2)
            return alert('Name has to be at least 2 characters long');

        if (!age.value) return alert('Age is required');
        const ageNum = parseInt(age.value, 10);
        if (Number.isNaN(ageNum) || ageNum < 5 || ageNum > 120) {
            return alert('Age has to be a number between 5 and 120');
        }

        const surveyData = {
            name: name.value.trim(),
            age: ageNum,
            color: color.value,
            recommend: recommend.checked,
        };

        console.log(surveyData);
        alert('Thanks for completing the survey!');
        form.reset();
        setTimeout(() => (button.disabled = false), 3000);
    };

    return (
        <div className='App'>
            <h1>Mini Survey</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label>
                    Name
                    <input type='text' name='name' />
                </label>
                <label>
                    Age
                    <input
                        type='text'
                        name='age'
                        inputMode='numeric'
                        pattern='[0-9]*'
                    />
                </label>
                <label>
                    Favorite Color
                    <select name='color' defaultValue=''>
                        <option value='' disabled>
                            Select…
                        </option>
                        <option value='red'>Red</option>
                        <option value='green'>Green</option>
                        <option value='blue'>Blue</option>
                    </select>
                </label>
                <fieldset>
                    <legend>Would you recommend our site?</legend>
                    <label className='checkbox'>
                        <input type='checkbox' name='recommend' /> I would
                        recommend this site
                    </label>
                </fieldset>
                <button name='button' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
}
