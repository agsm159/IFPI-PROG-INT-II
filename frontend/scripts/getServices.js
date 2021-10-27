const createServiceElement = (item) => {
    const template = document.getElementById('service-template')
    const serviceElement = document.importNode(template.content, true)

    const itens_service = serviceElement.querySelectorAll('span')

    itens_service[0].innerText = item.title
    itens_service[1].innerText = item.budget
    itens_service[2].innerText = item.dateRegister
    itens_service[3].innerText = item.dateLimit

    return serviceElement
}

const getServices = async () => {
    const response = await fetch('http://localhost:3000/services')
    const data = await response.json()

    data.forEach(item => {
        var count = 0
        const containerServiceElement = document.getElementById('main-main-container')
        const serviceElement = createServiceElement(item)

        containerServiceElement.append(serviceElement)

    })
}

const setConcluded = async (id) => {

}

window.onload = () => {
    getServices()


}