<script>
	import Calendar from './Calendar.svelte'
	import Appointments from './Appointments.svelte'

	
	let appointmentShowing = false;
	let dateID = "";
	let dateHeading = "";

	// Open and Close TDL via true and false
	const openAppointment = (e) => {
		appointmentShowing = true;
		dateID = e.target.dataset.dateid;
		makeDateHeading();
	}

	const makeDateHeading = () => {
		let dateAsHeading = dateID.replace(/_/g, " ");
		let date = new Date(`${dateAsHeading}`);
		return dateHeading = date.toLocaleString("en-US", {day: 'numeric', month: 'long', year: 'numeric'} );
		//console.log(dateAsHeading)
	}

	const closeAppointment = () => {
		appointmentShowing = false;
	}

	const setAppt = (e) => {
		console.log(e.detail)
	}

</script>



<main>
	<!--Show TDL only on calendar click, no TDL on default (false)-->
	<Calendar on:click={openAppointment}/>
	{#if appointmentShowing}
		<Appointments on:modalClose={closeAppointment} 
						on:addAppt={setAppt}
						{dateID} 
						{dateHeading}/>
	{/if}
</main>



<style>

</style>