class Slide{
    constructor(src, description){
        this._src = src;
        this._description = description;
    }
    // 
    get src(){
        return this._src;
    }
    // 
    get description(){
        return this._description;
    }
    /*
    // 
    set src(newValue){
        this._src = newValue;
    }
    */
}

class Carusel{
    // 
    constructor(Slides, currentIndex=0){
        this._slides = slides;
        this._currentIndex = currentIndex;
    }
    // 
    get currentIndex(){
        return this._currentIndex;
    }
    // 
    set currentIndex(value){
        if (typeof = value !== 'number') throw new TypeError();
        if (!Number.isSafeInteger(value) || value<0 || value >= this.slides.length)
            throw new RangeError();
        this._currentIndex = value;
    }
    get currentSlide (){
        return this._slides[this.currentIndex];
    }
    // poluchenie slauda kak img
    get nextSlide (){return this._slides[this.nextIndex];}
    get prevSlide (){return this._slides[this.prevIndex];}
    
    // poluchenie slauda kak number
    // # 1
    get nextIndex (){return slides[this.currentIndex + 1];}
    get prevIndex (){return slides[this.currentIndex - 1];}
    // # 2
    get nextIndex (){
        return  (this._currentIndex + 1) % this._slides.length;
    get prevIndex (){
        return (this._currentIndex - 1 + this._slides.length) % this._slides.length;
}

const carusel = new Carusel(
    // array
    [
        new Slide ('https://', '12345'), // parametr - #1 istochnik #2 opisanie
        new Slide ('https://', '12345'), // parametr - #1 istochnik #2 opisanie
        new Slide ('https://', '12345'), // parametr - #1 istochnik #2 opisanie
        new Slide ('https://', '12345'), // parametr - #1 istochnik #2 opisanie
        new Slide ('https://', '12345'), // parametr - #1 istochnik #2 opisanie
    ]);
const [prevButtonElem, nextButtonElem] = document.querySelectorAll();

// 
prevButtonElem.addEventListener("click", sliderClick("prew"));
nextButtonElem.addEventListener("click", sliderClick("next"));

// zamena Image
function sliderClick = (direction) => (event) => {
    carusel.currentIndex = carusel[direction == "next" ? "nextIndex" : "prevIndex"];
    const oldCurrentImage = document.querySelector('currentImage');
    const newCurrentImage = document.querySelector('nextImage');
    const nextSlide = carusel.currentSlide;
    const nextSlide = carusel[direction == "next" ? "nextSlide" : "prevSlide"];
    newCurrentImage.classList.replace("", "");
    oldCurrentImage.classList.replace("", "");
    newCurrentImage.setAttribute('src', currentSlide.src);
}
// 
function sliderClickNext(event){
    carusel.currentIndex = carusel[prevIndex];
}