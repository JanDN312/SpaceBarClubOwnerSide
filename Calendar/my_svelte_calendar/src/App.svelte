<script>
	import Calendar from './Calendar.svelte'
	import Appointments from './Appointments.svelte'

	
	let appointmentShowing = false;
	// Open and Close TDL via true and false
	const openAppointment = () => {
		appointmentShowing = true;
	}
	const closeAppointment = () => {
		appointmentShowing = false;
	}

</script>



<main>
	<!--Show TDL only on calendar click, no TDL on default (false)-->
	<Calendar on:click={openAppointment}/>
	{#if appointmentShowing}
		<Appointments on:click={closeAppointment}/>
	{/if}
</main>



<style>

</style>