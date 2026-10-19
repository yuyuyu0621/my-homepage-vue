<script setup>
import { ref } from 'vue'

// 父组件传入的个人信息
defineProps({
  person: { type: Object, required: true }
})

// 向父组件报告用户操作
const emit = defineEmits(['greet'])

// 只影响当前组件自身的状态，保留在组件内部
const showDetail = ref(false)

function toggleDetail() {
  showDetail.value = !showDetail.value
}
</script>

<template>
  <div class="card">
    <div class="avatar-wrap">
      <img class="avatar" :src="person.avatar" alt="头像" />
    </div>

    <div class="info-group"><strong>姓名：</strong>{{ person.name }}</div>
    <div class="info-group"><strong>学号：</strong>{{ person.studentId }}</div>
    <div class="info-group"><strong>班级：</strong>{{ person.className }}</div>
    <div class="info-group"><strong>邮箱：</strong>{{ person.email }}</div>

    <div class="actions">
      <button class="btn" @click="toggleDetail">
        {{ showDetail ? '收起详情' : '展开详情' }}
      </button>
      <button class="btn btn-theme" @click="emit('greet', person.name)">
        打个招呼
      </button>
    </div>

    <div v-show="showDetail" class="detail-block">
      <h4 class="section-title">个人简介</h4>
      <p>{{ person.intro }}</p>
      <p style="margin-top: 8px;">
        <strong>兴趣爱好：</strong>{{ person.hobby }}
      </p>
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
.avatar-wrap { text-align: center; margin-bottom: 20px; }
.avatar {
  width: 110px; height: 110px;
  border-radius: 50%; object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s;
}
.avatar:hover { transform: scale(1.05); }

.info-group { margin: 12px 0; font-size: 16px; line-height: 1.7; }
.info-group strong { color: var(--strong); }

.actions { margin-top: 12px; }
.btn {
  padding: 8px 16px; margin-right: 10px;
  border-radius: 8px; border: none;
  font-size: 15px; color: #fff;
  transition: all 0.25s;
  background: var(--primary);
}
.btn:hover { background: var(--primary-hover); transform: translateY(-2px); }
.btn-theme { background: var(--purple); }
.btn-theme:hover { background: var(--purple-hover); }

.detail-block {
  margin-top: 14px; padding: 16px;
  background: var(--block-bg);
  border-radius: 10px; line-height: 1.8;
}
.section-title { font-size: 18px; margin-bottom: 10px; font-weight: 600; }
</style>