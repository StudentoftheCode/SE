document.querySelector('button').addEventListener('click', submit)

async function submit(){
    const player = document.querySelector('input').value
    try{
        const response = await fetch (`https://api-bball-048e45babddf.herokuapp.com/api/${player}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('.name').innerText = player
        document.querySelector('.bday').innerText = data.DOB
        document.querySelector('.height').innerText = data.height
        document.querySelector('.ppg').innerText = data.PPG
        document.querySelector('.rbg').innerText = data.RPG
        document.querySelector('.apg').innerText = data.APG
    }catch(error){
        console.log(error)
    }
}