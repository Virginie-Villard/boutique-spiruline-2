<template>
  <div class="displaySupplier">

    <h2>{{ name }}</h2>

    <h3 v-bind:class="[status ? 'isActive' : 'notActive']">Available in stock? {{ status }}</h3>
    <h5>
		Date of last stocktaking : {{ date.toLocaleString() }}
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
			},

			// @see : https://www.codegrepper.com/code-examples/javascript/vue+3+common+method+format+date
			// @see : https://help.talend.com/r/f7_Igxda4W5myTdc5yN2xw/OdzUMuVkKkL4x~h6zp36~A
			// Vue.filter('formatDate', function(date) {
			// 	if (date) {
			// 		return moment(String(date)).format('MM/DD/YYYY hh:mm')
			// 	}
			// }
		}	
	}

</script>

<style scoped>

.displaySupplier {
    background: rgb(205, 250, 221);

}

.notActive {
	background: rgba(226, 195, 146, 0.712);
}

.isActive {
    background: rgb(205, 250, 221);
}


h3, h2 {
  color: rgb(26, 80, 62);
}

</style>