<template>
  <div>
    <body class="d-flex h-100 text-center text-bg-dark">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
          <div>
            <h3 class="float-md-start mb-0">VideoStore</h3>
            <router-link to="/"
              ><nav
                class="nav nav-masthead justify-content-center float-md-end"
              >
                <a
                  class="nav-link fw-bold py-1 px-0 active"
                  aria-current="page"
                  href="#"
                  ><a style="opacity: 0">a</a>Home<a style="opacity: 0">a</a></a
                >
              </nav>
              </router-link
            >
            <router-link to="/about"
              ><nav
                class="nav nav-masthead justify-content-center float-md-end"
              >
                <a
                class="nav-link fw-bold py-1 px-0" href="#"><a style="opacity: 0">a</a>About us<a style="opacity: 0">a</a>
                </a
                >
              </nav>
              </router-link
            >
            <router-link to="/store">
            <nav class="nav nav-masthead justify-content-center float-md-end">
              <a class="nav-link fw-bold py-1 px-0" href="#"><a style="opacity: 0">a</a>Shop<a style="opacity: 0">a</a></a>
            </nav>
          </router-link>
          </div>
        </header>
        
        <main class="px-3">
          <h1><br />Welcome to our Video Store!</h1>
          <br />
          <p class="lead">
            Welcome to our modern Video Store! Enjoy a wide selection of movies
            and shows, <br />
            easy online rentals, and a convenient streaming service. Elevate
            your movie night with snacks and beverages. Our friendly staff is
            here to assist you. <br />
            Experience the future of movie rentals today!<br /><br />
            -VideoStore's Family :)
          </p>
          <p class="lead">
            <router-link to="/login">
              <a
                href="#"
                class="btn btn-lg btn-light fw-bold border-white bg-white"
                >Login</a
              ></router-link
            >
          </p>
        </main>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
.btn-light,
.btn-light:hover,
.btn-light:focus {
  color: #333;
  text-shadow: none;
}

body {
  text-shadow: 0 0.05rem 0.1rem rgba(47, 62, 70, 0.5);
  box-shadow: inset 0 0 5rem rgba(47, 62, 70, 1.5);
}

.cover-container {
  max-width: 420em;
}

.nav-masthead .nav-link {
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

.p-3 {
  padding: 6rem !important;
}
* {
  box-sizing: border-box;
}
.text-bg-dark {
  color: #fff !important;
  background-color: RGBA(82, 121, 111, var(--bs-bg-opacity, 1)) !important;
}
p {
  margin-top: 0;
  margin-bottom: 2rem;
}
.btn-group-lg > .btn,
.btn-lg {
  --bs-btn-padding-y: 0.5rem;
  --bs-btn-padding-x: 1.5rem;
  --bs-btn-font-size: 1.25rem;
  --bs-btn-border-radius: var(--bs-border-radius-lg);
}
</style>
