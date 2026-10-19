<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  skillList: { type: Array, default: () => [] }
})

// 搜索关键词与父组件双向同步
const searchKey = defineModel('searchKey', { type: String, default: '' })

const emit = defineEmits(['select-skill'])

// 过滤逻辑：只依赖 skillList 和 searchKey，内聚在本组件
const filterSkillList = computed(() => {
  const key = searchKey.value.trim().toLowerCase()
  if (!key) return props.skillList
  return props.skillList.filter(item => item.toLowerCase().includes(key))
})

// 关键词变化时打印日志（对应原代码的 watch）
watch(searchKey, (newVal, oldVal) => {
  console.log(`搜索关键词变化：旧值=${oldVal}，新值=${newVal}`)
})
</script>

<template>
  <div class="card">
    <div class="info-group">
      <label>技能搜索：</label>
      <input v-model="searchKey" placeholder="输入关键词筛选技能" />
    </div>

    <div class="info-group">
      <h4 class="section-title">技能列表</h4>
      <span
        class="skill-tag"
        v-for="(skill, idx) in filterSkillList"
        :key="idx"
        @click="emit('select-skill', skill)"
      >
        {{ skill }}
      </span>
      <div class="empty-tip" v-if="filterSkillList.length === 0">
        无匹配技能，请更换关键词
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 32px;
  border-radius: 18px;
  background-color: var(--card-bg);
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}
.info-group { margin: 12px 0; font-size: 16px; line-height: 1.7; }
.section-title { font-size: 18px; margin-bottom: 10px; font-weight: 600; }

input {
  padding: 9px 12px; width: 280px;
  border-radius: 8px;
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  color: var(--input-text);
  outline: none; font-size: 15px;
  transition: border 0.25s;
}
input:focus { border-color: var(--primary); }

.skill-tag {
  display: inline-block;
  padding: 6px 12px; margin: 6px 4px;
  border-radius: 20px;
  background: var(--tag-bg);
  color: var(--tag-text);
  cursor: pointer;
  transition: all 0.25s;
}
.skill-tag:hover {
  background: var(--primary);
  color: #fff;
}
.empty-tip { padding: 12px; color: var(--text-muted); }
</style>