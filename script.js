function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')


    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto em formato redondo com bordas pretas de Igor Alexandre sorrindo, de camisa azul escuro com paisagens de arvores ao fundo.')
    }else{
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto em formato redondo com bordas brancas de Igor Alexandre sorrindo, de camisa azul escuro com paisagens de arvores ao fundo.')
    }

}