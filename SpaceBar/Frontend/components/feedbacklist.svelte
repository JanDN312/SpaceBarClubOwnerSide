<script>
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./feedbackitem.svelte"
    export let feedback = []
</script>

{#each feedback as fb (fb.id)}
    <div in:scale out:fade>
        <FeedbackItem item = {fb} on:delete-feedback />
    </div>
{/each}