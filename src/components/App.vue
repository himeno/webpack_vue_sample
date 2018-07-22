<template>
  <div class="app">
    <h1>{{ message }}</h1>
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Album example</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <p>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
          </button>
        </p>
      </div>
    </section>    
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      message: "Hello World"
    };
  }
};
</script>

<style scoped>
</style>