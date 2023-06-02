<template>
  <div>
    <body class="d-flex h-100 text-center text-bg-dark " style="background-image: url('https://media2.giphy.com/media/TxVVB6PfWMjE4/giphy.gif?cid=ecf05e47nt2xlk4t2hps9m3a6n5zlpahp836xhawb7tf1yf3&ep=v1_gifs_search&rid=giphy.gif&ct=g'); background-position: 50%; background-attachment: fixed; background-size: 20%;">
      

      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
          <div>
            <h3 class="float-md-start mb-0">VideoStore</h3>
            <router-link to="/"
              ><nav
                class="nav nav-masthead justify-content-center float-md-end"
              >
                <a class="nav-link fw-bold py-1 px-0" href="#"
                  ><a style="opacity: 0">a</a>Home<a style="opacity: 0">a</a></a
                >
              </nav>
            </router-link>
            <router-link to="/about"
              ><nav
                class="nav nav-masthead justify-content-center float-md-end"
              >
                <a
                  class="nav-link fw-bold py-1 px-0 active"
                  aria-current="page"
                  href="#"
                  ><a style="opacity: 0">a</a>About us<a style="opacity: 0"
                    >a</a
                  >
                </a>
              </nav>
            </router-link>
            <router-link to="/store">
            <nav class="nav nav-masthead justify-content-center float-md-end">
              <a class="nav-link fw-bold py-1 px-0" href="#"
                ><a style="opacity: 0">a</a>Shop<a style="opacity: 0">a</a></a
              >
            </nav>
          </router-link>
          </div>
        </header>

        <main class="px-3">
          <h1><br />About our dream...</h1>
          <br />
          <p class="lead">
            At our Video Store, we offer a wide selection of movies and TV shows
            for you to enjoy. <br />Whether you're a fan of the latest
            blockbusters, classic films, or binge-worthy series, we've got you
            covered.<br />
            Browse through our extensive catalog and discover a world of
            entertainment at your fingertips.<br />
            <br/>
            <br/>
            <img src="../../public/img/aboutpictures/locadorastorage1.png" alt="alternatetext" class="img-padding"/>
            
            <img src="../../public/img/aboutpictures/locadorastorage2.png" alt="alternatetext" class="img-padding"/>
            <br />
            <a class="comment">image from our storage</a>
            <br />
            <br/>
            From action and adventure to romance, comedy, and everything in
            between, there's something for everyone. With our convenient online
            platform, renting movies has never been easier.<br />
            Simply create an account, choose your desired titles, and have them
            delivered right to your doorstep.<br />
            No more waiting in long lines or dealing with sold-out copies.<br />
            It's movie night made simple. But we don't stop at just rentals.<br />
            <br/>
            <br/>
            <img src="../../public/img/aboutpictures/youtuberfoto1.png" alt="alternatetext" class="img-padding"/>
            
            <img src="../../public/img/aboutpictures/youtuberfoto2.png" alt="alternatetext" class="img-padding"/>
            <br />
            <a class="comment">image from UnboxingChannel partnership</a>
            <br />
            <br/>
            We also offer a range of options to enhance your movie-watching
            experience.<br />
            And for those who prefer streaming, we have a streaming service
            available so you can enjoy your favorite films and shows anytime,
            anywhere.<br />
            Our dedicated team is here to assist you every step of the way. If
            you have any questions or need recommendations, feel free to reach
            out to our knowledgeable staff.<br />
            <br/>
            <br/>
            <img src="../../public/img/aboutpictures/boxlocadora1.png" class="img-padding"/>
            
            <img src="../../public/img/aboutpictures/boxlocadora2.png" alt="alternatetext" class="img-padding"/>
            <br />
            <a class="comment">image from our box design</a>
            <br />
            <br/>
            We're passionate about movies and are always ready to help you find
            the perfect pick for your next movie night. <br />So, whether you're
            planning a movie marathon with friends, a romantic date night, or
            just want to unwind with a good flick, come and visit our Video
            Store.<br />
            We guarantee a memorable and enjoyable movie-watching experience
            that will keep you coming back for more. Start exploring our catalog
            today and let the magic of cinema unfold in the comfort of your own
            home.<br />
            <br/>
            <br/>
            <img src="../../public/img/aboutpictures/lastimagefromlocadora.png" class="img-padding"/>
            <br />
            <a class="comment">image from our deluxe dvd</a>
            <br />
            <br/>
            Welcome to the future of movie rentals at our Video Store!
          </p>
          <p class="lead">
            <router-link to="/login">
              <a
                href="#"
                class="btn btn-lg btn-light fw-bold border-white bg-white"
                >Start your amazing experience!</a
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
  name: "StoreView",
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
.px-0 {
  padding-right: 1 !important;
  padding-left: 0 !important;
}
* {
  box-sizing: border-box;
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
.comment{
  font-size: 1rem;
  font-weight: 500;
  color:#fff;
  text-decoration: none;
  font-style: italic;
}
.img-padding{
  margin: 10px 10px 10px 10px;
  width:300px;height:300px;
  border-radius: 8%;
}
</style>
