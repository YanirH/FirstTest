const productInput = document.getElementById('productInput')
const productPrice = document.getElementById('productPrice')
const productCategory = document.getElementById('categoryOptions')
const productImage =  document.getElementById('imageInput')
const addProductButton =  document.getElementById('addProductButton')
let parentElementTB = document.querySelector('.parentElementTB')
let productsList = JSON.parse(localStorage.getItem('productsList')) || []

addProductButton.addEventListener('click', function(){
    if (productInput.value.trim() && productPrice.value.trim() && productCategory.value.trim() && productImage.value.trim()  !== '') {
        productsList.push({
            productName: productInput.value,
            productPrice: productPrice.value,
            productCategory: productCategory.value,
            productImage: productImage.value,
        })
        createItemInTable(productsList)
        // this should be a function.
        productInput.value = ''
        productPrice.value = ''
        productCategory.value = ''
        productImage.value = ''  
        // NO CONSOLE
        console.log(productsList)
        console.log(productsList[0].productPrice)
    }

})

function createItemInTable (productsList) {
    parentElementTB.innerHTML = ''
    productsList.forEach((product, index) => {
        const tableRow = document.createElement('tr')
        // debugger
        const tableRowID = new Date().getTime()
        // debugger
        tableRow.classList.add(`${tableRowID}`)
        // debugger
        parentElementTB.appendChild(tableRow)
        const tdName = document.createElement('td')
        const tdPrice = document.createElement('td')
        const tdCategory = document.createElement('td')
        const tdImage = document.createElement('img')
        tdName.textContent = product.productName
        // debugger
        tdPrice.textContent = product.productPrice
        // debugger
        tdCategory.textContent = product.productCategory
        // debugger
        tdImage.src = product.productImage
        tdImage.classList.add('small-image')
        let button = document.createElement('button')
        button.textContent = 'X'
        button.classList.add('delButton', 'btn' , 'btn-danger')
        button.addEventListener('click', function() {
            productsList.splice(index, 1)
            createItemInTable (productsList)
        })
        tableRow.appendChild(tdName)
        tableRow.appendChild(tdPrice)
        tableRow.appendChild(tdCategory)
        tableRow.appendChild(tdImage)
        let tdAction = document.createElement('td')
        let id = 'unique_' + new Date().getTime()
        tdAction.classList.add(id)
        tableRow.appendChild(tdAction)
        let findAction = tableRow.querySelector(`.${id}`)
        findAction.appendChild(button)
    }) 
    localStorage.setItem('productsList', JSON.stringify(productsList))
}

createItemInTable (productsList)









// let tdAction = document.createElement('td')
// let id = 'unique_' + new Date().getTime()
// tdAction.classList.add(id)
// tableRow.appendChild(tdAction)
// let findAction = tableRow.querySelector(`.${id}`)
