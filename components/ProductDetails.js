app.component('ProductDetails', {
    props:{
        details:{
            type: String,
            required: true
        }
    },
    template: 
    /*html*/
    ` 
    <p class="product-display">
        {{details}}
    </p>
  `,
  
})