window.onload = function(){
    const accordion = selector => {
        const roots = document.querySelectorAll(selector);
        roots.forEach(root => {
            let accordionContent = root.querySelectorAll('.accordion__content');
            accordionContent.forEach((item, index) => {
                let header = item.querySelector('.accordion__header');
                let description = item.querySelector('.accordion__description');
                if (item.classList.contains('open')) {
                    description.style.height = `${description.scrollHeight}px`;
                    
                }
                header.addEventListener('click', () => {
                    item.classList.toggle('open');
                    
    
                    if (item.classList.contains('open')) {
                        description.style.height = `${description.scrollHeight}px`;
                        item.querySelector('i').classList.replace('fa-plus', 'fa-minus');
                    } else {
                        description.style.height = `0px`;
                        item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
                    }
    
                    removeOpen(index);
                })
            })
    
            function removeOpen(index1) {
                accordionContent.forEach((item2, index2) => {
                    if (index1 != index2) {
                        item2.classList.remove('open')
                        let des = item2.querySelector('.accordion__description');
                        des.style.height = '0px';
                        item2.querySelector('i').classList.replace('fa-minus', 'fa-plus');
    
                    }
                })
    
            }
        })
    }
    accordion('.accordion')
}


