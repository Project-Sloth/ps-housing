<script>
	function portal(node, { to }) {
		const target = document.querySelector(to)
		target && target.appendChild(node)
		return {}
	}
</script>

<div use:portal={{ to: 'body' }} class="absolute">
    <slot />
</div>
