const toggleBilling = document.querySelector('.toggle-billing'),
      amount = document.querySelector('.amount'),
      plan = document.querySelector('.plan'),
      range = document.querySelector('.range'),
      amountMobile = document.querySelector('.amount.mobile'),
      planMobile = document.querySelector('.plan.mobile'),
      pageViews = document.querySelector('.views')




toggleBilling.addEventListener('click', ()=>{
    toggleBilling.classList.toggle('active')

    if(toggleBilling.classList.contains('active')){
        plan.innerHTML = `/year`
        planMobile.innerHTML = `/year`
        amount.innerHTML = `${((amount.innerHTML * 0.25) *12)}.00`
        amountMobile.innerHTML = `${((amountMobile.innerHTML * 0.25) *12)}.00`

    } else{
        plan.innerHTML = `/month`
        planMobile.innerHTML = `/month`
        amount.innerHTML = `${((amount.innerHTML / 0.25) /12)}.00`
        amountMobile.innerHTML = `${((amountMobile.innerHTML / 0.25) /12)}.00`
    }
})


function updatePrice(){
    if(range.value == 1){
        if(toggleBilling.classList.contains('active')){
            amount.innerHTML = `${(( 8 * 0.25) *12)}.00`
            amountMobile.innerHTML = `${(( 8* 0.25) *12)}.00`
        }
        else{
            amount.innerHTML = `8.00`
            amountMobile.innerHTML = `8.00`
        }
        pageViews.innerHTML = "10K PAGEVIEWS"
    }

    if(range.value == 2){
        if(toggleBilling.classList.contains('active')){
            amount.innerHTML = `36.00`
            amountMobile.innerHTML = `36.00`
        }
        else{
            amount.innerHTML = `12.00`
            amountMobile.innerHTML = `12.00`
        }
        pageViews.innerHTML = "50K PAGEVIEWS"
    }

    if(range.value == 3){
        if(toggleBilling.classList.contains('active')){
            amount.innerHTML = `48.00`
            amountMobile.innerHTML = `48.00`
        }
        else{
            amount.innerHTML = `16.00`
            amountMobile.innerHTML = `16.00`
        }
        pageViews.innerHTML = "100K PAGEVIEWS"
    }

    if(range.value == 4){
        if(toggleBilling.classList.contains('active')){
            amount.innerHTML = `72.00`
            amountMobile.innerHTML = `72.00`
        }
        else{
            amount.innerHTML = `24.00`
            amountMobile.innerHTML = `24.00`
        }
        pageViews.innerHTML = "500K PAGEVIEWS"
    }

    if(range.value == 5){
        if(toggleBilling.classList.contains('active')){
            amount.innerHTML = `150.00`
            amountMobile.innerHTML = `150.00`
        }
        else{
            amount.innerHTML = `50.00`
            amountMobile.innerHTML = `50.00`
        }
        pageViews.innerHTML = "1M PAGEVIEWS"
    }
}

range.addEventListener('input', ()=>{
    updatePrice()
})