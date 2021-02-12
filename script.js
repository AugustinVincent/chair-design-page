
const navLeftArrow = document.querySelector('.nav-section .left-arrow')
const navRightArrow =  document.querySelector('.nav-section .right-arrow')
const leftArrow = document.querySelector('.text-container .left-arrow')
const rightArrow =  document.querySelector('.text-container .right-arrow')
const text = document.querySelector('.text')
const title = document.querySelector('.title')
const image = document.querySelector('.changing-image')
let pageNumber = 1

const slideContents  = 
    [page1 = {
        image : 'images/desktop-image-hero-1.jpg' ,
        title : 'Discover innovative ways to decorate',
        text : 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    page2 = {
        image : 'images/desktop-image-hero-2.jpg',
        title : 'We are available all across the globe',
        text : `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
    },
    page3 = {
        image : 'images/desktop-image-hero-3.jpg',
        title : 'Manufactured with the best materials',
        text : `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
    },]




leftArrow.addEventListener('click', (event) =>
{
    console.log('left')
    if(pageNumber == 1)
    {
        pageNumber = slideContents.length
        text.textContent = slideContents[pageNumber - 1].text
        title.textContent = slideContents[pageNumber - 1].title
        image.setAttribute('src', slideContents[pageNumber - 1].image)
    }
    else
    {
        pageNumber = pageNumber - 1
        text.textContent = slideContents[pageNumber - 1].text
        title.textContent = slideContents[pageNumber - 1].title
        image.setAttribute('src', slideContents[pageNumber - 1].image)
    }
})

rightArrow.addEventListener('click', (event) =>
{
    console.log('right')
    if(pageNumber == slideContents.length)
    {
        pageNumber = 1
        text.textContent = slideContents[pageNumber - 1].text
        title.textContent = slideContents[pageNumber - 1].title
        image.setAttribute('src', slideContents[pageNumber - 1].image)
    }
    else
    {
        pageNumber = pageNumber + 1
        text.textContent = slideContents[pageNumber - 1].text
        title.textContent = slideContents[pageNumber - 1].title
        image.setAttribute('src', slideContents[pageNumber - 1].image)
    }
})

navLeftArrow.addEventListener('click', (event) =>
{
    console.log('left')
    if(pageNumber == 1)
    {
        pageNumber = slideContents.length
        text.textContent = slideContents[pageNumber - 1].text
        title.textContent = slideContents[pageNumber - 1].title
        image.setAttribute('src', slideContents[pageNumber - 1].image)
    }
    else
    {
        pageNumber = pageNumber - 1
        text.textContent = slideContents[pageNumber - 1].text
        title.textContent = slideContents[pageNumber - 1].title
        image.setAttribute('src', slideContents[pageNumber - 1].image)
    }
})

navRightArrow.addEventListener('click', (event) =>
{
    console.log('right')
    if(pageNumber == slideContents.length)
    {
        pageNumber = 1
        text.textContent = slideContents[pageNumber - 1].text
        title.textContent = slideContents[pageNumber - 1].title
        image.setAttribute('src', slideContents[pageNumber - 1].image)
    }
    else
    {
        pageNumber = pageNumber + 1
        text.textContent = slideContents[pageNumber - 1].text
        title.textContent = slideContents[pageNumber - 1].title
        image.setAttribute('src', slideContents[pageNumber - 1].image)
    }
})