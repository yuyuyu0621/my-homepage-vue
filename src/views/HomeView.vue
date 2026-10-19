<script setup>
import { ref, reactive } from 'vue'
import ProfileCard from '../components/ProfileCard.vue'
import SkillPanel from '../components/SkillPanel.vue'

const searchKey = ref('')
const person = reactive({
  name: "熊艳", studentId: "249980737", className: "24计科2班",
  email: "zhangsan@student.edu.cn",
  avatar: "https://picsum.photos/id/1005/100/100",
  intro: "热爱前端开发，喜欢学习Vue框架，注重代码规范。",
  hobby: "编程、摄影、阅读、羽毛球"
})
const skillList = ["HTML","CSS","JavaScript","Vue3","Python","MySQL","Java","Git","Linux"]

function handleGreet(name) { alert(`你好，我是 ${name}！`) }
function handleSelectSkill(skill) { console.log('选中技能：', skill) }
</script>

<template>
  <div>
    <ProfileCard :person="person" @greet="handleGreet" />
    <SkillPanel v-model:search-key="searchKey" :skill-list="skillList" @select-skill="handleSelectSkill" />

    <el-timeline style="margin-top:20px">
      <el-timeline-item timestamp="2026-09" placement="top">
        开始学习 Vue 3 组合式 API
      </el-timeline-item>
      <el-timeline-item timestamp="2026-10" placement="top" type="primary">
        完成个人主页 + 路由 + 状态管理实验
      </el-timeline-item>
      <el-timeline-item timestamp="2026-11" placement="top">
        计划学习 Vite 打包与项目部署
      </el-timeline-item>
    </el-timeline>
  </div>
</template>