const getResidentsButton = document.querySelector('button');
const planetName = document.querySelector('#planet');
const currentPlanet = document.querySelector('h1');

const getResidents = () => {
    console.log('button clicked');
    if (planetName.value === '') {
        console.log('exit')
        return
    }
    currentPlanet.textContent = planetName.value.toUpperCase();
    let currentDisplay = document.querySelectorAll('h2');
    // removes the current list
    for (let i = 0; i < currentDisplay.length; i++) {
        document.querySelector('body').lastChild.remove();
    }

    axios.get(`https://swapi.dev/api/planets?search=${planetName.value}`)
        .then( res => {
            console.log(res)
            if (res.data.results.length === 0) {
                currentPlanet.textContent = "I find your lack of Star Wars knowledge disturbing...";
                return
            }
            let residents = res.data.results[0].residents;
            if (residents.length === 0) {
                const forShame = document.createElement('h2');
                forShame.textContent = 'No residents available'
                document.querySelector('body').appendChild(forShame);
            } else {
                for (let i = 0; i < residents.length; i++){
                    console.log(i)
                    axios.get(residents[i])
                        .then(res => {
                            const newResident = document.createElement('h2');
                            newResident.textContent = res.data.name;
                            document.querySelector('body').appendChild(newResident);
                        });
                }
            }
        });
    planetName.value = ''
}

getResidentsButton.addEventListener('click', getResidents);