const sections = [
    { title: "Section 1", article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, mollitia aspernatur illo id officia ea unde laborum ullam porro sapiente molestias exercitationem reiciendis. Placeat reiciendis rerum, officiis minima itaque dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam porro asperiores cumque ullam nam officiis ipsum voluptatem inventore fugit, recusandae quasi eligendi iste iusto totam sint ad doloremque aliquid rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quos. Architecto alias sunt libero nobis error atque eos ab vitae ea? Labore culpa dolor ut impedit. Magnam beatae vel officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum aperiam quos ipsum et obcaecati in eos placeat, doloremque deleniti voluptates quod, dolores ut saepe rem, harum consectetur id alias! \n Eligendi illum aperiam quos ipsum et obcaecati in eos placeat, doloremque deleniti voluptates quod, dolores ut saepe rem, harum consectetur id alias!" },
    { title: "Section 2", article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, mollitia aspernatur illo id officia ea unde laborum ullam porro sapiente molestias exercitationem reiciendis. Placeat reiciendis rerum, officiis minima itaque dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam porro asperiores cumque ullam nam officiis ipsum voluptatem inventore fugit, recusandae quasi eligendi iste iusto totam sint ad doloremque aliquid rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quos. Architecto alias sunt libero nobis error atque eos ab vitae ea? Labore culpa dolor ut impedit. Magnam beatae vel officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum aperiam quos ipsum et obcaecati in eos placeat, doloremque deleniti voluptates quod, dolores ut saepe rem, harum consectetur id alias! \n Eligendi illum aperiam quos ipsum et obcaecati in eos placeat, doloremque deleniti voluptates quod, dolores ut saepe rem, harum consectetur id alias!" },
    { title: "Section 3", article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, mollitia aspernatur illo id officia ea unde laborum ullam porro sapiente molestias exercitationem reiciendis. Placeat reiciendis rerum, officiis minima itaque dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam porro asperiores cumque ullam nam officiis ipsum voluptatem inventore fugit, recusandae quasi eligendi iste iusto totam sint ad doloremque aliquid rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quos. Architecto alias sunt libero nobis error atque eos ab vitae ea? Labore culpa dolor ut impedit. Magnam beatae vel officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum aperiam quos ipsum et obcaecati in eos placeat, doloremque deleniti voluptates quod, dolores ut saepe rem, harum consectetur id alias! \n Eligendi illum aperiam quos ipsum et obcaecati in eos placeat, doloremque deleniti voluptates quod, dolores ut saepe rem, harum consectetur id alias!" },
    { title: "Section 4", article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, mollitia aspernatur illo id officia ea unde laborum ullam porro sapiente molestias exercitationem reiciendis. Placeat reiciendis rerum, officiis minima itaque dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam porro asperiores cumque ullam nam officiis ipsum voluptatem inventore fugit, recusandae quasi eligendi iste iusto totam sint ad doloremque aliquid rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quos. Architecto alias sunt libero nobis error atque eos ab vitae ea? Labore culpa dolor ut impedit. Magnam beatae vel officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum aperiam quos ipsum et obcaecati in eos placeat, doloremque deleniti voluptates quod, dolores ut saepe rem, harum consectetur id alias! \n Eligendi illum aperiam quos ipsum et obcaecati in eos placeat, doloremque deleniti voluptates quod, dolores ut saepe rem, harum consectetur id alias!" },
    { title: "Section 5", article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, mollitia aspernatur illo id officia ea unde laborum ullam porro sapiente molestias exercitationem reiciendis. Placeat reiciendis rerum, officiis minima itaque dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam porro asperiores cumque ullam nam officiis ipsum voluptatem inventore fugit, recusandae quasi eligendi iste iusto totam sint ad doloremque aliquid rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quos. Architecto alias sunt libero nobis error atque eos ab vitae ea? Labore culpa dolor ut impedit. Magnam beatae vel officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum aperiam quos ipsum et obcaecati in eos placeat, doloremque deleniti voluptates quod, dolores ut saepe rem, harum consectetur id alias! \n Eligendi illum aperiam quos ipsum et obcaecati in eos placeat, doloremque deleniti voluptates quod, dolores ut saepe rem, harum consectetur id alias!" },
    { title: "Section 6", article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, mollitia aspernatur illo id officia ea unde laborum ullam porro sapiente molestias exercitationem reiciendis. Placeat reiciendis rerum, officiis minima itaque dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam porro asperiores cumque ullam nam officiis ipsum voluptatem inventore fugit, recusandae quasi eligendi iste iusto totam sint ad doloremque aliquid rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quos. Architecto alias sunt libero nobis error atque eos ab vitae ea? Labore culpa dolor ut impedit. Magnam beatae vel officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum aperiam quos ipsum et obcaecati in eos placeat, doloremque deleniti voluptates quod, dolores ut saepe rem, harum consectetur id alias! \n Eligendi illum aperiam quos ipsum et obcaecati in eos placeat, doloremque deleniti voluptates quod, dolores ut saepe rem, harum consectetur id alias!" },
]

const main = document.querySelector('main');
const ul = document.querySelector('nav ul');

main.onscroll = function (e) {
    e.preventDefault();
    console.log(e)
    const sections = main.querySelectorAll('section')
    let index = 1
    for (let i = 0; i < sections.length; i++) {
        const { y, height, bottom } = sections[i].getBoundingClientRect()
        //cases to track element what is more visible on a page across different devices
        if ((y <= window.innerHeight - 50 && y < height) || (window.innerHeight - y > height && i ==sections.length-1)) {
            index = i
        }
    }
    const navTabs = ul.querySelectorAll('li')

    for (let i = 0; i < navTabs.length; i++) {
        let navTab = navTabs[i]

        navTab.classList.remove('active')

    }
    navTabs[index].classList.add('active')

}

for (let i = 0; i < sections.length; i++) {
    const section = sections[i]
    const sectionEl = generateSection(section, i)
    main.appendChild(sectionEl)

    const navEl = generateNavItem(section.title, i)
    ul.appendChild(navEl)
    navEl.addEventListener("click", function (e) {
        e.preventDefault()
        sectionEl.scrollIntoView({ behavior: "smooth" })
    })

}

//this function will generate li item for menu with all event listeners
function generateNavItem(name, index) {
    const li = document.createElement('li');
    li.innerText = name;
    //lets make first element active by default
    if (index === 0) {
        li.classList.add('active')
    }

    return li
}


//this function will render section option
function generateSection(section, index) {
    const isOdd = Boolean(index % 2)//3%2 => 1 =>Boolean(1) => true
    //isOdd paramater will help us to understand whether section should be left aligned or right
    const sectionEl = document.createElement('section');
    //add dataset prop to get index;
    sectionEl.dataset.index = index

    if (isOdd) {
        sectionEl.classList.add('right')
    }

    const header = document.createElement('h2')
    header.innerText = section.title;

    const article = document.createElement('article')

    //we break text to make paragraph separated view
    const text = section.article.split(' \n ').map(text => `<p>${text}</p>`).join('')
    article.innerHTML = text

    sectionEl.append(header, article)

    return sectionEl
}