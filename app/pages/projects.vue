<script setup>
const projects = reactive([
  {
    site_title: "E-Commerce Platform",
    site_url: "https://example-ecommerce.com",
    site_image:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
    description: "A full-featured online store built with Laravel and Vue.js featuring product management, shopping cart, payment integration, and admin dashboard. Implemented responsive design and optimized performance for 1000+ daily visitors.",
    stacks: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
  },
  {
    site_title: "Project Management Tool",
    site_url: "https://example-pm-tool.com",
   site_image:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
    description: "Collaborative project management application with real-time updates, task assignment, and progress tracking. Developed using modern web technologies with a focus on UX and team productivity.",
    stacks: ["Laravel", "Livewire", "Alpine.js", "Bootstrap 5"],
  },
  {
    site_title: "Project Management Tool",
    site_url: "https://example-pm-tool.com",
   site_image:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
    description: "Collaborative project management application with real-time updates, task assignment, and progress tracking. Developed using modern web technologies with a focus on UX and team productivity.",
    stacks: ["Laravel", "Livewire", "Alpine.js", "Bootstrap 5"],
  },
  {
    site_title: "Project Management Tool",
    site_url: "https://example-pm-tool.com",
   site_image:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
    description: "Collaborative project management application with real-time updates, task assignment, and progress tracking. Developed using modern web technologies with a focus on UX and team productivity.",
    stacks: ["Laravel", "Livewire", "Alpine.js", "Bootstrap 5"],
  },
  {
    site_title: "Project Management Tool",
    site_url: "https://example-pm-tool.com",
   site_image:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
    description: "Collaborative project management application with real-time updates, task assignment, and progress tracking. Developed using modern web technologies with a focus on UX and team productivity.",
    stacks: ["Laravel", "Livewire", "Alpine.js", "Bootstrap 5"],
  },
  {
    site_title: "Project Management Tool",
    site_url: "https://example-pm-tool.com",
   site_image:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
    description: "Collaborative project management application with real-time updates, task assignment, and progress tracking. Developed using modern web technologies with a focus on UX and team productivity.",
    stacks: ["Laravel", "Livewire", "Alpine.js", "Bootstrap 5"],
  },
]);
</script>

<template>
  <div class="container-p-x flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card border-0 shadow-sm mb-4">
          <div class="card-header bg-white border-0">
            <h3 class="card-title text-primary mb-0">My Projects</h3>
          </div>
        </div>
        
        <div class="row g-4">
          <div 
            class="col-md-6"
            v-for="(project, project_key) in projects"
            :key="project_key"
          >
            <div class="card h-100 border-0 shadow-sm hover-shadow transition-all">
              <div class="card-body">
                <div class="row g-3">
                  <div class="col-md-4">
                    <img 
                      :src="project.site_image" 
                      class="img-fluid rounded-3 shadow-sm w-100 h-auto object-fit-cover" 
                      style="min-height: 120px;"
                      alt="Project screenshot"
                    >
                  </div>
                  <div class="col-md-8 d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                      <h4 class="mb-0">{{ project.site_title }}</h4>
                      <a 
                        :href="project.site_url" 
                        class="btn btn-sm btn-outline-primary"
                        target="_blank"
                      >
                        <i class="bi bi-box-arrow-up-right me-1"></i>
                        Visit
                      </a>
                    </div>
                    
                    <p class="text-muted flex-grow-1">
                      {{ project.description }}
                    </p>
                    
                    <div class="mt-auto">
                      <div class="d-flex flex-wrap gap-2">
                        <span
                          class="badge bg-light text-dark border px-3 py-2 rounded-pill d-flex align-items-center"
                          v-for="(stack, stack_key) in project.stacks"
                          :key="stack_key"
                        >
                          <i class="bi bi-tags-fill text-primary me-2"></i>
                          {{ stack }}
                        </span>
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