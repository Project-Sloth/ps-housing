<script>
import { fly } from 'svelte/transition';

</script>

<div class="container" transition:fly="{{ x: -100 }}">
  <div class="menu">
    <div class="search">
      <i class="fa-solid fa-magnifying-glass" style="margin-left: 1rem;"></i>
      <input class="search-input" placeholder="Search by category">
    </div>
    <div class="category-container">

    </div>
  </div>
</div>

<style>
  
.container {
  display: flex;
  position: fixed;
  top: 50%;
  left: 2%;
  width: 20%;
  height: 73%;
  transform: translateY(-50%);
  background-color: var(--color-primary);
  border-radius: 0.5rem;
}
.search {
  color: var(--color-tertiary);
  background-color: var(--color-secondary);
  border-radius: 0.5rem;
}
.search-input {
  outline:none;
  width: 80%;
  padding: 1rem;
  background-color: var(--color-secondary);
  color: var(--color-tertiary);
  border: none;
}
.menu {
  flex: 1;
  padding: 0.8rem;
}
.category-container {
  height: 93.4%;
  overflow-y: scroll;
  padding: 1px;
  margin-top: 0.8rem;
  background-color: var(--color-secondary);
  border-radius: 0.5rem;
}
</style>