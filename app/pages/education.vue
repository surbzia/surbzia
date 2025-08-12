<script setup>
const education = reactive([
  {
    institution: "Virtual University of Pakistan",
    website: "https://www.vu.edu.pk/",
    programs: [
      {
        degree: "ADP in Computer Science",
        duration: "2024 - Present",
        isCurrent: true,
        details: "(Currently pursuing Associate Degree Program)"
      }
    ],
    achievements: [
    ]
  },
  {
    institution: "Aptech Computer Education",
    website: "https://www.aptech-education.com.pk/",
    programs: [
      {
        degree: "Advance Diploma of Software Engineering (ADSE)",
        duration: "2020 - 2024",
        isCurrent: false,
        details: ""
      }
    ],
    achievements: [
    ]
  },
  {
    institution: "Sindh Board of Technical Education",
    website: "#",
    programs: [
      {
        degree: "Diploma of Accociate Engineering (DAE)",
        duration: "2012 - 2016",
        isCurrent: false,
        details: ""
      }
    ],
    achievements: [
    ]
  },
  {
    institution: "Board of Secondary Education Karachi",
    website: "#",
    programs: [
      {
        degree: "Matriculation  (Bio Science)",
        duration: "2009 - 2010",
        isCurrent: false,
        details: ""
      }
    ],
    achievements: [
    ]
  }
]);
</script>

<template>
  <div class="container-p-x flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <div class="d-flex align-items-center mb-4">
              <div class="flex-grow-1">
                <hr />
              </div>
              <h5 class="px-3 mb-0 text-uppercase fw-bold text-muted">
                Education
              </h5>
              <div class="flex-grow-1">
                <hr />
              </div>
            </div>

            <div class="timeline">
              <div
                class="timeline-item mb-4"
                v-for="(institution, index) in education"
                :key="index"
              >
                <div class="card border-0 shadow-sm mb-3">
                  <div class="card-header bg-white border-0 pb-0">
                    <a :href="institution.website" target="_blank">
                      <h4 class="text-primary mb-2">
                        <i class="bx bxs-school me-2"></i>
                        {{ institution.institution }}
                      </h4>
                    </a>
                  </div>
                  <div class="card-body pt-0">
                    <div class="position-relative ps-3">
                      <div
                        class="position-absolute top-0 start-0 h-100 border-start border-2 border-primary"
                        v-if="institution.programs.length > 1"
                      ></div>

                      <div
                        class="position-item mb-3"
                        v-for="(program, pIndex) in institution.programs"
                        :key="pIndex"
                      >
                        <div
                          class="d-flex justify-content-between align-items-start"
                        >
                          <div>
                            <h5 class="fw-bold mb-1">
                              <i
                                class="bi bi-book-half text-primary me-2"
                              ></i>
                              {{ program.degree }}
                              <small class="text-muted ms-2">{{ program.details }}</small>
                            </h5>
                          </div>
                          <span
                            class="badge rounded-pill"
                            :class="{
                              'bg-success text-white': program.isCurrent,
                              'bg-light text-dark border': !program.isCurrent
                            }"
                          >
                            {{ program.duration }}
                          </span>
                        </div>

                        <ul class="list-unstyled mt-2 ps-4">
                          <li
                            class="mb-2 d-flex align-items-start"
                            v-for="(
                              achievement, rIndex
                            ) in institution.achievements"
                            :key="rIndex"
                          >
                            <i
                              class="bi bi-award-fill text-warning mt-1 me-2"
                            ></i>
                            <span>{{ achievement }}</span>
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