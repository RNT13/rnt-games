'use client'

import { IMaskInput } from 'react-imask'

type Props = {
  name: string
  mask: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}

export const MaskedInput = ({ name, mask, value, onChange, onBlur, placeholder, className, }: Props) => {
  return (
    <IMaskInput id={name} name={name} mask={mask} value={value} onAccept={(val: string) =>
      onChange({ target: { name, value: val } } as React.ChangeEvent<HTMLInputElement>)}
      onBlur={onBlur}
      placeholder={placeholder}
      className={className}
    />
  )
}
