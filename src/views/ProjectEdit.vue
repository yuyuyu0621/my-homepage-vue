<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useProjectStore } from '../stores/project'

const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)

const name = ref('')
const desc = ref('')
const editingId = ref(null)

function reset() {
  name.value = ''
  desc.value = ''
  editingId.value = null
}

function save() {
  if (!name.value.trim()) return alert('请输入项目名称')
  if (editingId.value) {
    projectStore.updateProject(editingId.value, { name: name.value, desc: desc.value })
  } else {
    projectStore.addProject({ name: name.value, desc: desc.value, tags: [], status: '开发中' })
  }
  reset()
}

function edit(p) {
  editingId.value = p.id
  name.value = p.name
  desc.value = p.desc
}

function remove(id) {
  if (confirm('确定删除？')) projectStore.deleteProject(id)
}
</script>

<template>
  <div>
    <h3>编辑项目信息</h3>
    <div class="form">
      <input v-model="name" placeholder="项目名称" />
      <input v-model="desc" placeholder="项目描述" />
      <div class="btn-row">
        <button @click="save">{{ editingId ? '保存修改' : '新增项目' }}</button>
        <button v-if="editingId" class="cancel" @click="reset">取消</button>
      </div>
    </div>

    <div v-for="p in projects" :key="p.id" class="item">
      <span>{{ p.name }} —— {{ p.desc }}</span>
      <div>
        <button @click="edit(p)">编辑</button>
        <button class="danger" @click="remove(p.id)">删除</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
input { padding: 8px; border-radius: 8px; border: 1px solid var(--input-border); background: var(--input-bg); color: var(--text); }
.btn-row { display: flex; gap: 8px; }
.item { display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid var(--input-border); }
.item button { margin-left: 6px; padding: 4px 10px; border: none; border-radius: 6px; background: var(--primary); color: #fff; cursor: pointer; font-size: 13px; }
.item button.danger { background: #e74c3c; }
.cancel { background: var(--text-muted); }
</style>