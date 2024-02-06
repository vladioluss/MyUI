export interface IBtn {
  label?: string
  color: 'primary' | 'second' | 'success' | 'info' | 'warning' | 'danger'
  disabled?: boolean
  rounded?: boolean
  outlined?: boolean
  icon?: string
  size: 'normal' | 'large'
}