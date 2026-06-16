<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal">
      <button class="modal-close" @click="$emit('close')">×</button>
      <h2>活动预约</h2>
      <p class="modal-subtitle">{{ activity?.title }}</p>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>姓名 *</label>
          <input v-model="form.name" type="text" placeholder="请输入您的姓名" required />
        </div>
        <div class="form-group">
          <label>手机号 *</label>
          <input v-model="form.phone" type="tel" placeholder="请输入手机号" required />
        </div>
        <div class="form-group">
          <label>参与人数 *</label>
          <select v-model="form.count" required>
            <option v-for="n in maxCount" :key="n" :value="n">{{ n }} 人</option>
          </select>
        </div>
        <div class="form-group">
          <label>备注</label>
          <textarea v-model="form.note" rows="3" placeholder="如有特殊需求请备注"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%">
          确认预约
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { submitBooking } from '@/api/booking'
import { showToast } from '@/utils/request'

const props = defineProps({
  activity: { type: Object, required: true }
})

const emit = defineEmits(['close', 'success'])

const form = ref({
  name: '',
  phone: '',
  count: 1,
  note: ''
})

const maxCount = computed(() => {
  const remaining = props.activity.quota - props.activity.enrolled
  return Math.min(Math.max(remaining, 1), 5)
})

async function handleSubmit() {
  await submitBooking({
    activityId: props.activity.id,
    ...form.value
  })
  showToast('预约成功！我们会尽快与您确认。')
  emit('success')
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.modal {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 32px;
  width: 100%;
  max-width: 440px;
  position: relative;
  animation: fadeInUp 0.3s ease;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: var(--color-bg);
  border-radius: 50%;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal h2 {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.modal-subtitle {
  color: var(--color-text-secondary);
  margin-bottom: 24px;
  font-size: 0.95rem;
}
</style>
