require('../spec.helper')


const calculateBMI = () => {
    var method = global.methodSelector.options[global.methodSelector.selectedIndex].value
    
    return new Promise(resolve => {

        let weightFormat = method === 'metric' ? 'weight-in-kgs' : 'weight-in-lbs'
        let heightFormat = method === 'metric' ? 'height-in-cm' : 'height-in-in'

        let w = parseFloat(document.getElementById(weightFormat).value);
        let h = parseFloat(document.getElementById(heightFormat).value);

        let person = new Person({
            weight: w,
            height: h,
        });

        method === 'metric' ? person.calculate_bmi() : person.calculate_imperial_bmi();
        resolve(person);
    })
};

