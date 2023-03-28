import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import Field from '@/components/Field.vue'

// Describe vai acoplar todos os testes relacionados ao componente desejado.
describe('Field.vue', () => {
  it('O label e o Input estão sendo renderizados? E seus valores conferem?', () => {
    const label = 'Username'

    // Shallowmount meio que instância o componente sem instânciar seus filhos.
    // Definimos os valores das propriedades que iremos testar.
    const wrapper = shallowMount(Field, {
      props: {
        label,
        name: 'username',
        type: 'text',
        required: true,
        maxLength: '30'
      }
    })

    // expect recebe algo que será avaliado/testado.
    // wrapper.find procura elementos pelo seletor e pode acessar atributos específicos.
    // toMatch verifica se dentro desse teste o atributo name por exemplo correndo ao valor username.
    expect(wrapper.find('.group__label').text()).toMatch(label)
    expect(wrapper.find('.group__field').attributes('name')).toMatch('username')
    expect(wrapper.find('.group__field').attributes('type')).toMatch('text')
    expect(wrapper.find('.group__field').attributes('maxlength')).toMatch('30')
  })

  it('Testando o evento emit e modelValue no input', async () => {
    // Instanciamento do componente Field
    const wrapper = shallowMount(Field, {
      props: {
        name: 'username'
      }
    })

    // Aqui procuramos o input e definimos um valor para ele de John Doe.
    // Depois verificamos se o valor está sendo emitido quando o usuário digita algo no campo.
    const input = wrapper.find('.group__field')
    await input.setValue('John Doe')

    // toBeTruthy verifica se a expressão desse expect é verdadeira.
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()

    // toEqual nesse caso vai dizer se o valor atual é igual ao esperado.
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['John Doe'])
  })
})
