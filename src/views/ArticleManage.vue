<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useArticleStore } from '../stores/article'

const articleStore = useArticleStore()
const { articles } = storeToRefs(articleStore)

const dialogVisible = ref(false)
const editingId = ref(null)
const form = ref({ title: '', content: '' })

function openAdd() {
  editingId.value = null
  form.value = { title: '', content: '' }
  dialogVisible.value = true
}

function openEdit(row) {
  editingId.value = row.id
  form.value = { title: row.title, content: row.content }
  dialogVisible.value = true
}

function save() {
  if (!form.value.title.trim()) {
    ElMessage.warning('标题不能为空')
    return
  }
  if (editingId.value) {
    articleStore.updateArticle(editingId.value, form.value)
    ElMessage.success('修改成功')
  } else {
    articleStore.addArticle(form.value)
    ElMessage.success('新增成功')
  }
  dialogVisible.value = false
}

function remove(id) {
  ElMessageBox.confirm('确定删除该文章吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    articleStore.deleteArticle(id)
    ElMessage.success('已删除')
  }).catch(() => {})
}
</script>

<template>
  <div>
    <div class="head">
      <h3>文章管理</h3>
      <el-button type="primary" @click="openAdd">新增文章</el-button>
    </div>

    <el-table :data="articles" style="width: 100%" stripe>
      <el-table-column prop="title" label="标题" width="220" />
      <el-table-column prop="content" label="内容" show-overflow-tooltip />
      <el-table-column prop="date" label="日期" width="120" />
      <el-table-column label="操作" width="160">
        <template #default="{ row }">
          <el-button size="small" @click="openEdit(row)">编辑</el-button>
          <el-button size="small" type="danger" @click="remove(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗表单 -->
    <el-dialog v-model="dialogVisible" :title="editingId ? '编辑文章' : '新增文章'" width="500px">
      <el-form label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title" placeholder="请输入标题" />
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="form.content" type="textarea" :rows="4" placeholder="请输入内容" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="save">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
</style>