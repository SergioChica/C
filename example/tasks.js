const containerTasks = document.querySelector('#sect-tasks')
const frmTask = document.getElementById('frm-task')

const title = document.getElementById('title-task')
const textTask = document.getElementById('title-text')


frmTask.addEventListener('submit',createCard)

function createCard(event) {

    event.preventDefault()

    console.log(event);

    const card = document.createElement('article')
    card.classList.add('card')
    card.setAttribute('id','card')

    const headerCard = document.createElement('div')
    headerCard.classList.add('header-card')

    const titleCard = document.createElement('h2')
    titleCard.textContent = title.value

    const closeCard = document.createElement('button')
    closeCard.classList.add('close')
    closeCard.textContent = 'x'

    const containerCard = document.createElement('div')
    containerCard.classList.add('container-card')

    const txtCard = document.createElement('p')
    txtCard.textContent = textTask.value

    const footerCard = document.createElement('div')
    footerCard.classList.add('footer-card')

    const linkCard = document.createElement('a')

    linkCard.setAttribute('href','#')
    linkCard.textContent = '@Kamping Shop'

    headerCard.appendChild(titleCard)
    headerCard.appendChild(closeCard)

    containerCard.appendChild(txtCard)

    footerCard.appendChild(linkCard)

    card.appendChild(headerCard)
    card.appendChild(containerCard)
    card.appendChild(footerCard)

    containerTasks.appendChild(card)

    closeCard.addEventListener('click', () => {
        card.style.display = 'none'
    })

}