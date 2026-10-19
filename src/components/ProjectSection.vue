<script setup>
import ProjectCard from './ProjectCard.vue'
defineProps({ projects: { type: Array, default: () => [] } })
</script>

<template>
  <section id="projects" class="project-section">
    <h3 class="section-title">项目经历</h3>
    <div class="project-grid">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<style scoped>
.project-section { margin-top: 24px; }
.section-title { font-size: 18px; margin-bottom: 16px; font-weight: 600; }
.project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
</style>