<script setup>
const experiances = reactive([
  {
    positions: [
      {
        designation: "Senior PHP/Laravel Developer",
        company: "The Apex Solutions",
        duration: "July 2025 - Present",
        isCurrent: true,
      },
      {
        designation: "PHP/Laravel Developer",
        company: "The Apex Solutions",
        duration: "July 2025 - Present",
        isCurrent: false,
      },
    ],
    responsibilities: [
      "Developed and maintained enterprise PHP applications",
      "Led a team of 3 junior developers",
      "Implemented RESTful APIs for mobile applications",
      "Optimized database queries improving performance by 40%",
    ],
  },
  {
    positions: [
      {
        designation: "PHP/Laravel Developer",
        company: "Inoviotech Pvt Ltd",
        duration: "June 2022 - June 2024",
        isCurrent: true,
      },
    ],
    responsibilities: [
      "Developed and maintained enterprise PHP applications",
      "Led a team of 3 junior developers",
      "Implemented RESTful APIs for mobile applications",
      "Optimized database queries improving performance by 40%",
    ],
  },
  {
    positions: [
      {
        designation: "Web Exective (PHP/Laravel Developer)",
        company: "The Softcube",
        duration: "January 2022 - June 2022",
        isCurrent: true,
      },
    ],
    responsibilities: [
      "Developed and maintained enterprise PHP applications",
      "Led a team of 3 junior developers",
      "Implemented RESTful APIs for mobile applications",
      "Optimized database queries improving performance by 40%",
    ],
  },
  {
    positions: [
      {
        designation: "Junior PHP/Laravel Developer",
        company: "The Squarehouse",
        duration: "January 2021 - January 2022",
        isCurrent: true,
      },
    ],
    responsibilities: [
      "Developed and maintained enterprise PHP applications",
      "Led a team of 3 junior developers",
      "Implemented RESTful APIs for mobile applications",
      "Optimized database queries improving performance by 40%",
    ],
  },
]);
</script>

<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-sm-12">
              <div class="card-body">
                <h3 class="card-title text-primary">
                  Hello, I'm a Senior PHP Developer
                </h3>
                <br />
                <p class="lead">
                  With nearly
                  <span class="text-primary fw-bold">4 years</span> of hands-on
                  experience, I specialize in crafting robust web applications
                  using PHP. My journey includes extensive work with modern
                  JavaScript frameworks such as
                  <span class="fw-bold">Nuxt.js</span>,
                  <span class="fw-bold">React.js</span>,
                  <span class="fw-bold">Next.js</span>,
                  <span class="fw-bold">Vue.js</span>, and
                  <span class="fw-bold">Inertia.js</span>.
                </p>
                <p class="lead">
                  I am passionate about building scalable, maintainable, and
                  beautiful digital experiences. My expertise bridges backend
                  and frontend technologies, ensuring seamless integration and
                  performance.
                </p>
                <br />
                <h5
                  class="bg-lighter border py-2 rounded-pill text-center w-100"
                >
                  EXPERIANCE
                </h5>
                <div class="row mb-4">
                  <div
                    class="col-md-12"
                    v-for="(experiance, experiance_key) in experiances"
                    :key="experiance_key"
                  >
                    <div class="card border-0 shadow-sm">
                      <div class="card-body">
                        <div
                          class="d-flex justify-content-between align-items-start mb-2"
                          v-for="(
                            position, position_key
                          ) in experiance.positions"
                          :key="position_key"
                        >
                          <div>
                            <h4 class="mb-1 fw-bold text-primary">
                              {{ position.designation }}
                            </h4>
                            <h5
                              class="mb-2 text-muted"
                              v-if="position.isCurrent"
                            >
                              {{ position.company }}
                            </h5>
                          </div>
                          <span class="badge bg-light text-dark rounded-pill">{{
                            position.duration
                          }}</span>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li
                            class="border-0 ps-0 d-flex align-items-start"
                            v-for="(
                              responsility, responsility_key
                            ) in experiance.responsibilities"
                            :key="responsility_key"
                          >
                            <span
                              ><b class="fw-bolder pe-2">*</b
                              >{{ responsility }}</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
