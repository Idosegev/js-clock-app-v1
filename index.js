const startButt = document.querySelector(`#start-button`);
const pauseButt = document.querySelector(`#pause-button`);
const input = document.querySelector(`#duration`)
const circle = document.querySelector(`#circle`)

const timer = new Timer(input, startButt, pauseButt,{ 
    onStart: ()=>{
        this.currentOffset = parseFloat(circle.getAttribute('stroke-dashoffset'));
        this.circumference = parseFloat(circle.getAttribute(`stroke-dasharray`));
        this.offsetGap = circumference/ (timer.defaultValue/0.05);
        // circle.setAttribute(`stroke-dashoffset`,"0")
    },
    onTick: ()=>{
        this.currentOffset-= this.offsetGap;
        console.log(Math.round(this.currentOffset*-1));
        circle.setAttribute(`stroke-dashoffset`,this.currentOffset.toString())
        if(Math.round(this.currentOffset*-1) === this.circumference){
            circle.setAttribute(`stroke-dashoffset`,"0")
        }
        
        
        
    },
    onInput: ()=>{
        circle.setAttribute(`stroke-dashoffset`,"0")
    }
    });

