const box = document.querySelector('.box')
async function getUnsers() {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        data.forEach(info => {
            const card = document.createElement('div')
            card.classList.add('card')
            let i = document.createElement('img')
            i.src = info.image
            let h4 = document.createElement('h4')
            let c = document.createElement('c')
            let p = document.createElement('p')
            p.innerHTML = `$ ${info.price}`
            h4.innerHTML = `  ${info.title}`
            c.innerHTML = `  ${info.category}`
            card.appendChild(i)
            card.appendChild(h4)
            card.appendChild(c)
            card.appendChild(p)
            box.appendChild(card)
        });
    } catch (error) {
        console.error(error.message);
    }
} getUnsers()