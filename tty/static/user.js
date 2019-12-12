window.onload = () => {
  setTimeout(() => {
    window.tty = new window.tty.Window()
    window.tty.maximize()
    window.theme.setDark()
    setTimeout(()=>{
      let myEvent = new Event('resize');
      window.dispatchEvent(myEvent);
    },100)
  }, 1000)
  window.addEventListener('message', function (event) {
    if (event.data === 'vs-light') {
      window.theme.setLight()
    } else {
      window.theme.setDark()
    }
  }, false)
}
window.theme = {
  setDark: () => {
    document.querySelector('.window').style.backgroundColor = '#333'
    document.querySelector('.terminal').style.backgroundColor = '#333'
    document.querySelector('.terminal').style.border = '#333 solid 5px'
    Array.from(document.querySelectorAll('.terminal div')).map(_item => {
      _item.style.color = '#eee'
    })
    document.querySelector('.reverse-video').style.color = '#000'
    document.querySelector('.reverse-video').style.background = '#f0f0f0'
  },
  setLight:() => {
    document.querySelector('.window').style.backgroundColor = '#eee'
    document.querySelector('.terminal').style.backgroundColor = '#eee'
    document.querySelector('.terminal').style.border = '#eee solid 5px'
    Array.from(document.querySelectorAll('.terminal div')).map(_item => {
      _item.style.color = '#333'
    })
    document.querySelector('.reverse-video').style.color = '#eee'
    document.querySelector('.reverse-video').style.background = '#333'
  }
}