<script>
	import Calendar from './Calendar.svelte'
	import Appointments from './Appointments.svelte'

	let schedule = {
		January_19_2022: [
			{id:1, location: "Kombinat", time:"20:30"}, 
			{},
			{}
		]
	};

	
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
		let time = `${e.detail.hours}:${e.detail.minutes}`;
		console.log(time)

		// Create new Appointment with the Details and add it to schedule Object
		let newAppt = {
			// Create a random ID per Appointment
			id: Math.floor(Math.random() * 1000000000),
			location: e.detail.location, 
			time,
		}

		if (!schedule[dateID]) {
			schedule[dateID] = [newAppt];
		} else {
			let currentAppointments = schedule[dateID];
			schedule[dateID] = [...currentAppointments, newAppt]
		}
	}

	$: console.log(schedule)
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