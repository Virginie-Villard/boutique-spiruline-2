<template>
  <div>

    <h1>{{ name }}</h1>

    <h3>A stock ? {{ status }}</h3>
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

div {
    background: rgb(205, 250, 221);
}

h3 {
  color: green;
}

</style>