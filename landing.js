const men_section = document.querySelector('.wishlist');
const men_section_items = document.querySelector('.wishlist_items');
men_section.onmouseover = () => {
    men_section_items.classList.remove('visibility');
}
men_section.onmouseout = () => {
    men_section_items.classList.add('visibility');
}