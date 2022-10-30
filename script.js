let isExplorer = true

function changeCard(event){
  const card = event.currentTarget
  const bgI = isExplorer ? "explorer" : "ignite"  
  isExplorer = !isExplorer
  card.style.backgroundImage= `url(./assets/bg-${bgI}.svg)`
}