<template>

    <h1>List of suppliers :</h1>

    <div class="container">

        <section class="displayError" v-if="errored">
            <h3>
                We're sorry, we're not able to retrieve this information at the moment, please try back later
            </h3>
        </section>

        <section class="displaySupplierBox" v-else>
            <h3 class="displayLoading" v-if="loading">
                Loading......
            </h3>

            <Supplier class="displaySupplier"

            v-else v-for="item in suppliers"
                :key="item.id" :name="item.name" :date="item.checkedAt" :status="item.status"/>

        </section>

    </div>
</template>

<script>
import Supplier from "./Supplier.vue";
import axios from 'axios';

export default {
    name: 'SuppliersList',
    data() {
        return {
            suppliers: [],
            loading: true,
            error: false
        }


    },

//   filters: {
//     currencydecimal (value) {
//       return value.toFixed(2)
//     }
//   },

    components: { Supplier },

    mounted () {
        axios
        .get('https://heroku-campus-suppliers.herokuapp.com/api/suppliers')

        .then(response => {
            this.suppliers = response.data.data
            console.log(response)
        })

        .catch(error => {
            console.log(error)
            this.errored = true
        })

        .finally(() => this.loading = false)
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
    margin: 40px auto 10px;
}

.displayError {
    color: red;
}

.displayLoading {
    color: #42b983;
}

.displayCity {
    margin: 20px;
}

.container {
    padding: 5%;
    max-width: 1200px;
    margin: 0 auto;
}

.displaySupplier {
    margin: 5%;
    padding: 5%;

}

@media (min-width: 600px) {
  .displaySupplierBox { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 900px) {
  .displaySupplierBox { grid-template-columns: repeat(3, 1fr); }
}

</style>
