<script setup>
const experiences = reactive([
  {
    company: "The Apex Solutions",
    positions: [
      {
        designation: "Senior PHP/Laravel Developer",
        duration: "July 2025 - Present",
        isPromotion: true,
      },
      {
        designation: "PHP/Laravel Developer",
        duration: "June 2024 - July 2025",
        isPromotion: false,
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
    company: "Inoviotech Pvt Ltd",
    positions: [
      {
        designation: "PHP/Laravel Developer",
        duration: "June 2022 - June 2024",
        isPromotion: false,
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
    company: "The Softcube",
    positions: [
      {
        designation: "Web Exective (PHP/Laravel Developer)",
        duration: "January 2022 - June 2022",
        isPromotion: false,
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
    company: "The Squarehouse",
    positions: [
      {
        designation: "Junior PHP/Laravel Developer",
        duration: "January 2021 - January 2022",
        isPromotion: false,
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
  <div class="container-p-x flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <h3 class="card-title text-primary mb-4">
              Hello, I'm a Senior PHP Developer
            </h3>

            <div class="alert alert-primary bg-opacity-10 border-primary mb-4">
              <p class="mb-2">
                With nearly <span class="text-primary fw-bold">4 years</span> of
                hands-on experience, I specialize in crafting robust web
                applications using PHP.
              </p>
              <p class="mb-0">
                My expertise includes modern JavaScript frameworks like
                <span class="badge bg-primary bg-opacity-10 text-white me-1"
                  >Nuxt.js</span
                >
                <span class="badge bg-primary bg-opacity-10 text-white me-1"
                  >React.js</span
                >
                <span class="badge bg-primary bg-opacity-10 text-white me-1"
                  >Next.js</span
                >
                <span class="badge bg-primary bg-opacity-10 text-white me-1"
                  >Vue.js</span
                >
                <span class="badge bg-primary bg-opacity-10 text-white"
                  >Inertia.js</span
                >
              </p>
            </div>

            <div class="d-flex align-items-center mb-4">
              <div class="flex-grow-1">
                <hr />
              </div>
              <h5 class="px-3 mb-0 text-uppercase fw-bold text-muted">
                Experience
              </h5>
              <div class="flex-grow-1">
                <hr />
              </div>
            </div>

            <div class="timeline">
              <div
                class="timeline-item mb-4"
                v-for="(experience, index) in experiences"
                :key="index"
              >
                <div class="card border-0 shadow-sm mb-3">
                  <div class="card-header bg-white border-0 pb-0">
                    <h4 class="text-primary mb-2">
                      <i class="bi bi-building me-2"></i>
                      {{ experience.company }}
                    </h4>
                  </div>
                  <div class="card-body pt-0">
                    <div class="position-relative ps-3">
                      <div
                        class="position-absolute top-0 start-0 h-100 border-start border-2 border-primary"
                        v-if="experience.positions.length > 1"
                      ></div>

                      <div
                        class="position-item mb-3"
                        v-for="(position, pIndex) in experience.positions"
                        :key="pIndex"
                      >
                        <div
                          class="d-flex justify-content-between align-items-start"
                        >
                          <div>
                            <h5 class="fw-bold mb-1">
                              <i
                                class="bi bi-arrow-right-circle-fill text-primary me-2"
                              ></i>
                              {{ position.designation }}
                            </h5>
                          </div>
                          <span
                            class="badge bg-light text-dark rounded-pill border"
                          >
                            {{ position.duration }}
                          </span>
                        </div>

                        <ul class="list-unstyled mt-2 ps-4">
                          <li
                            class="mb-2 d-flex align-items-start"
                            v-for="(
                              responsibility, rIndex
                            ) in experience.responsibilities"
                            :key="rIndex"
                          >
                            <i
                              class="bi bi-check-circle-fill text-success mt-1 me-2"
                            ></i>
                            <span>{{ responsibility }}</span>
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
