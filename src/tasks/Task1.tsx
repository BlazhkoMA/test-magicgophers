import { CheckOutlined } from "@ant-design/icons"

export const Task1 = () => {
    // используем эту иконку <CheckOutlined />
    // красим ее в зеленый когда активно
    // в красном по дефолту
    // рядом текст "Нажми на меня"


  return (
    <div className='taskBlock'>
      <h2>Стилизовать чекбокс <CheckOutlined /></h2>
      <div></div>
    </div>
  )
}
