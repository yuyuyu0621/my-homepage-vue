<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useProjectStore } from '../stores/project'

const router = useRouter()
const projectStore = useProjectStore()
const { projects, total } = storeToRefs(projectStore)

function goDetail(id) {
  router.push({ name: 'projectDetail', params: { id } })
}
</script>

<template>
  <div class="project-list-container">
    <div class="head">
      <h3>项目列表</h3>
      <el-tag type="success">共 {{ total }} 个项目</el-tag>
    </div>
    
    <!-- 使用 Element Plus 表格 -->
    <el-table :data="projects" stripe style="width: 100%" @row-click="row => goDetail(row.id)">
      <el-table-column prop="name" label="项目名称" width="180" />
      <el-table-column prop="desc" label="项目描述" />
      <el-table-column label="技术栈" width="220">
        <template #default="{ row }">
          <el-tag v-for="t in row.tags" :key="t" size="small" style="margin-right: 4px;">
            {{ t }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="100" />
    </el-table>
  </div>
</template>

<style scoped>
.project-list-container { padding: 20px; background: var(--card-bg); border-radius: 12px; }
.head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
</style>