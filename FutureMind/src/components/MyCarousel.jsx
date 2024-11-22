import './CSS/MyCarousel.css';

export function MyCarousel() {

    const imgs = document.getElementById('img');
    const img = document.querySelectorAll('#img img');
    
    let contador = 0;
    function carrossel(){
    
        contador++
    
        if(contador > img.length - 1){
            contador = 0;
        }
    
        imgs.style.transform = `translateX(${-contador * 525}px)`;
    }
    setInterval(carrossel, 3800);

   return (
    <div className="carrossel_ajuste">

    <div className="carrossel">
        <div className="containerA" id="img">
            <script onLoad={carrossel}>
                
            </script>
            <img src="Frame 12.svg" />
            <img src="Frame 13.svg" />
            <img src="Frame 16.svg" />
        </div>
    </div>
    </div>
)};