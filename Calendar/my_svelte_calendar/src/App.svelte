<script>
	import Calendar from './Calendar.svelte'
	import Appointments from './Appointments.svelte'

	let appointmentShowing = false;

	const openAppointment = () => {
		appointmentShowing = true;
	}

</script>

<main>
	<!--Show TDL only on calendar click, no TDL on default (false)-->
	<Calendar on:click={openAppointment}/>
	{#if appointmentShowing}
		<Appointments/>
	{/if}
</main>


<style>

</style>