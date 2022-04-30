class Timer{
    
    /**
     * Represents  a timer object
     * @constractor
     * @param {HTMLInputElement} durationTime 
     * @param {HTMLButtonElement} startButt 
     * @param {HTMLButtonElement} pauseButt 
     */
    constructor(durationTime, startButt, pauseButt,{onStart, onInput, onTick}){
        this.durationTime = durationTime;
        this.startButt = startButt;
        this.pauseButt = pauseButt;
        this.default = durationTime.value;
        this.onStart = onStart;
        this.onInput = onInput;
        this.onTick = onTick;
        this.realTime;

        this.startButt.addEventListener('click', this.start);
        this.pauseButt.addEventListener('click', this.pause);
        this.durationTime.addEventListener('input',()=>{
            this.defaultValue = this.remainingTime;
            this.onInput();
            this.pause();
        });
        this.durationTime.addEventListener('click',this.pause);
    }


    start = ()=>{
         
        if(this.toggleStatus === undefined || this.toggleStatus === false){
            this.toggleStatus = true;
            this.realTime = this.remainingTime;
            this.timer = setInterval(this.tick, 50); 
            this.onStart();
        }
    }

    pause = () => {
        if(this.toggleStatus === true){
            
            clearInterval(this.timer);
            this.toggleStatus = false ;
            if(this.realTime==0){
                this.remainingTime = this.defaultValue
            }
        }
    }

    tick = () => {
        if(this.remainingTime>0){
            
            this.remainingTime = (this.remainingTime -0.05).toFixed(2);
            this.realTime = (this.realTime -0.05).toFixed(2);
            this.onTick();
        }
        else if(this.realTime==0){
            this.pause();
        }
        
            
    }
    

    // Getters and Setters
    get realTime(){
        return this.innerTime;
    }

    set realTime(time){
        this.innerTime = time;
    }

    get remainingTime(){
        return parseFloat(this.durationTime.value);
    }
    
    set remainingTime(time){
        this.durationTime.value = time;
    }

    get toggleStatus(){
        return this.toggle;
    }

    set toggleStatus(mode){
        this.toggle = mode;
    }

    get defaultValue(){
        return this.default;
    }
    set defaultValue(value){
        this.default = parseFloat(value);
    }
    
}