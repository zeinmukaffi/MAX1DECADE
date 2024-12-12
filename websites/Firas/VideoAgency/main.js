// template links Head
class LinkHead extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />

    <!-- AOS -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <!-- CSS -->
    <link rel="stylesheet" href="style.css" />
    <!-- Goggle font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
      rel="stylesheet"
    />
    <!-- bootstrap icon -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
    />
    <!--  -->
        
        `
    }
}

customElements.define('link-head' , LinkHead)




// template header
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- navbar start -->
    
<nav class="navbar navbar-expand-lg color-white fixed-top bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">Nantidulu</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item dropdown-atas pt-5" href="#">Home</a>
            </li>
            <li>
              <a class="dropdown-item dropdown-atas" href="work.html">Work</a>
            </li>
            <li>
              <a class="dropdown-item dropdown-atas" href="#">Services</a>
            </li>
            <li>
              <a class="dropdown-item dropdown-atas" href="about.html">About</a>
            </li>
            <li><hr class="dropdown-divider mt-5" /></li>
            <li class="dropdown-bottom">
              <a class="dropdown-item" href="#">Contact</a>
              <a class="dropdown-item" href="#">Careers</a>
              <a class="dropdown-item" href="#">Let's Connect</a>
            </li>
            <li class="dropdown-brand">
              <a class="dropdown-item" href="index.html">Video Agency</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Navbar end -->
`

    }
}

customElements.define('my-header', MyHeader)


// template footer
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
             <!-- Footer start -->

    <footer>
      <div class="container-fluid">
        <div class="connect">
          <p><i class="bi bi-person-fill"></i><br />Let's Connect</p>
        </div>
        <div class="nav-bottom">
          <hr class="line" />
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="work.html">Work</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="about.html">About</a></li>
          </ul>
          <hr class="line" />
        </div>
      </div>
    </footer>

    <!-- Footer end -->

        `
    }
}

customElements.define('my-footer', MyFooter);