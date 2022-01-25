<script>
	const date = new Date();

	// Console: DatetimeObject Year/Month/Date/Day
	$: console.log(`Current Year: ${date.getFullYear()}`);
	$: console.log(`Current Month Index (i.e. JAN -> 0): ${date.getMonth()}`);
	$: console.log(`Current Date Index: ${date.getDate()}`);
	// .getDay() gives day index: Sunday - Saturday: 0 - 6
	// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
	$: console.log(`Current Day Index (i.e. Di -> 2): ${date.getDay()}`);

	let year = date.getFullYear();

	// Liste der Monate damit .getMonth() dem Index den passenden String zuweisen kann
	const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
	// Change month Index here manually to check if values are true...
	let monthIndex = date.getMonth();
	$: month = monthNames[monthIndex];
	$: console.log(`Current Month as String: ${month}`);

	// Liste der Tage damit .getDay() dem Index den passenden String zuweisen kann
	// ACHTUNG, Zählung beginnt mit Sonntag: Sunday - Saturday == 0 - 6 
	const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let dayIndex = date.getDay();
	$: day = dayNames[dayIndex];
	$: console.log(`Current Day as String: ${day}`);

	$: firstDayIndex = new Date(year, monthIndex).getDay();
	$: console.log(`First Day Index: ${firstDayIndex}\n(Sunday - Saturday = 0 - 6)`);

	$: numberOfDays = new Date(year, monthIndex+1, 0).getDate();
	$: console.log(`Number of Days per Month: ${numberOfDays}`);
	// Check via console if dates are correct 
	//$: console.log(`${year}, ${month}, ${date.getDate()}`)
	//$: console.log(`FIRST DAY INDEX: ${firstDayIndex}`)
	//$: console.log(`HOW MANY DAYS: ${numberOfDays}`)

</script>

<main>
	<!-- from template...
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	-->

	<div class="month">
		<ul>
			<li class="prev">&#10094;</li>
			<li class="next">&#10095;</li>
			<li>{month}<br>
				<span style="font-size:18px">{year}</span></li>
		</ul>
	</div>

	<ul class="weekdays">
		<li>Mo</li>
		<li>Tu</li>
		<li>We</li>
		<li>Th</li>
		<li>Fr</li>
		<li>Sa</li>
		<li>Su</li>
	</ul>

	<ul class="days">
		{#each Array(25) as _, i}
		<li>{i}</li>
		{/each}
	</ul>
</main>

<style>
	/*main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}*/

	ul {list-style-type: none;}
	body {font-family: Verdana, sans-serif;}

	/* Month header */
	.month {
	padding: 70px 25px;
	width: auto;
	background: #1abc9c;
	text-align: center;
	}

	/* Month list */
	.month ul {
	margin: 0;
	padding: 0;
	}

	.month ul li {
	color: white;
	font-size: 20px;
	text-transform: uppercase;
	letter-spacing: 3px;
	}

	/* Previous button inside month header */
	.month .prev {
	float: left;
	padding-top: 10px;
	}

	/* Next button */
	.month .next {
	float: right;
	padding-top: 10px;
	}

	/* Weekdays (Mon-Sun) */
	.weekdays {
	margin: 0;
	padding: 10px 0;
	background-color:#ddd;
	}

	.weekdays li {
	display: inline-block;
	width: 13.6%;
	color: #666;
	text-align: center;
	}

	/* Days (1-31) */
	.days {
	padding: 10px 0;
	background: #eee;
	margin: 0;
	}

	.days li {
	list-style-type: none;
	display: inline-block;
	width: 13.6%;
	text-align: center;
	margin-bottom: 5px;
	font-size:12px;
	color: #777;
	}

	/* Highlight the "current" day */
	.days li .active {
	padding: 5px;
	background: #1abc9c;
	color: white !important
	}
</style>