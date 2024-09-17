interface IButton extends Node {
    disabled: boolean
    innerText: string
    onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null
}

const buttonElem: IButton = document.createElement('button')

//buttonElem.disabled = true
buttonElem.onclick = () => {
    alert('clicked')
}
buttonElem.innerText = 'Button Example'

document.getElementById('root')?.appendChild(buttonElem);