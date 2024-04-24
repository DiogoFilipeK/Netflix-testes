class Accordion {
    constructor(accordionListQuestions){
        this.accordionListQuestions = document.querySelectorAll
        (accordionListQuestions);
        this.activeItemClass = "active";
    }

    toggleAccordion(item){
        item.classList.toggle(this.activeItemClass);
        item.nextElementSibling.classList.toggle(this.activeItemClass);
    }

    addAcordionEvent(){
        this.accordionListQuestions.forEach((questions) => {
            questions.addEventListener("click", () => this.toggleAccordion
            (questions))
        });
    }

    init(){
        if (this.accordionListQuestions.length){
            this.addAcordionEvent();
        }
        return this;
    }
}

const accordion = new Accordion(".faq-question")
accordion.init();