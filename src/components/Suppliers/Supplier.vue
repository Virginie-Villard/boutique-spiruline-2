<template>
  <div class="displaySupplier">

    <h2>{{ name }}</h2>

    <h3 v-bind:class="[status ? 'isActive' : 'notActive']">Disponible en Stock ? {{ status }}</h3>
    <h5>
		Date de dernière relevé des stocks : {{ date.toLocaleString() }}
	</h5>

  </div>
</template>

<script>

    export default {
        name: 'Supplier',

        props: [
            "id", "name", "date", "status"
        ],
    
		computed: {
			timeFormat() {
				return format(this.date)
			}
		}
    }

</script>

<style scoped>

.displaySupplier {
    background: rgb(205, 250, 221);
	
}

.notActive {
	background: rgb(243, 96, 96);
}

.isActive {
    background: rgb(205, 250, 221);
}


h3 {
  color: rgb(20, 105, 62);
}

</style>