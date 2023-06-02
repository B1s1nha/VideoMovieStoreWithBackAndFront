<template>
  <div>
    <main class="form-signin w-100 m-auto">
      <form @submit.stop.prevent="submit">
        <a class="nav nav-masthead justify-content-center float-md-end about-menu"
          >
          <router-link to="/"
            ><nav >
              <a class="nav-link fw-bold py-1 px-0 padding-between-menu" href="#"
                >Home</a
              >
            </nav>
          </router-link>
          <router-link to="/about"
            ><nav>
              <a class="nav-link fw-bold py-1 px-0 padding-between-menu" href="#"
                >About us
              </a>
            </nav>
          </router-link>
          <router-link to="/store">
            <nav>
              <a class="nav-link fw-bold py-1 px-0 padding-between-menu" style="margin-right: 50px;" href="#"
                >Shop</a
              >
            </nav> </router-link
          ></a>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button class="btn btn-primary w-100 py-2" style="margin-bottom: 220px;" type="submit">
          Sign in
        </button>
        <a></a>
      </form>
    </main>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  name: "LoginView",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      

      fetch(`http://localhost:8000/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res); // Log the response object
          if (res && res.access_token) {
            Cookie.set("_myapp_token", res.access_token);
            console.log("Token:", res.access_token);
            this.$router.push("/store");
          } else {
            console.error("Invalid response structure or missing token");
          }
        });
    },
  },
};
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}
body {
  max-width: 420em;
  background-color: rgb(132, 169, 140);
}
.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}
.btn-primary {
    --bs-btn-color: #fff;
    --bs-btn-bg: rgb(47, 62, 70);
    --bs-btn-border-color: rgb(53, 79, 82);
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg:rgb(53, 79, 82);
    --bs-btn-hover-border-color:rgb(82, 121, 111);
    --bs-btn-focus-shadow-rgb: 49,132,253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg:rgb(202, 210, 197);
    --bs-btn-active-border-color: rgb(202, 210, 197);
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: rgb(82, 121, 111);
    --bs-btn-disabled-border-color: rgb(82, 121, 111);
}
.about-menu {
  padding-top: 80px;
  padding-bottom: 20px;
  
}
.padding-between-menu {
  display: block;
  margin: 0px 10px 50px 10px;
}
</style>