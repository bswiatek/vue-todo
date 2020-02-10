import { shallowMount } from '@vue/test-utils'
import Todo from '@/components/Todo.vue'

describe('Todo.vue', () => {
  const wrapper = shallowMount(Todo)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<h4 class="bg-primary text-white text-center p-2">Lista zadań użytkownika Bartek</h4>')
  })

  it('has an add button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('should show empty list', () => {
    expect(wrapper.html()).toContain('<strong>Nie masz nic do zrobienia. Wspaniale!</strong>')
  })

  it('should add new task', () => {
    expect(wrapper.vm.tasks.length).toBe(0)
    const input = wrapper.find('input.addNew')
    input.setValue('myTask')    
    const button = wrapper.find('button')
    button.trigger('click')

    expect(wrapper.vm.tasks.length).toBe(1)
  })
})
